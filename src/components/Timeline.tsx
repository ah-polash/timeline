import React, { useEffect, useRef } from 'react';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  image?: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export function TimelineComponent({ events }: TimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initTimeline = async () => {
      if (timelineRef.current) {
        // Dynamic import of the timeline library
        const Timeline = (await import('timelinejs-slider')).default;
        new Timeline(timelineRef.current, {
          mode: 'horizontal',
          visibleItems: 4,
          forceVerticalMode: 800
        });
      }
    };

    // Load timeline CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/timelinejs-slider@0.1.0/dist/css/timeline.min.css';
    document.head.appendChild(link);

    initTimeline();

    return () => {
      // Cleanup CSS when component unmounts
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="timeline" ref={timelineRef}>
      <div className="timeline__wrap">
        <div className="timeline__items">
          {events.map((event, index) => (
            <div className="timeline__item" key={index}>
              <div className="timeline__content">
                {event.image && (
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                )}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <span className="text-sm font-semibold text-indigo-600">{event.date}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2">{event.title}</h3>
                  <p className="text-gray-600 mt-2">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}