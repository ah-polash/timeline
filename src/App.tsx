import React from 'react';
import { TimelineComponent } from './components/Timeline';

const timelineEvents = [
  {
    date: "2020",
    title: "Company Founded",
    description: "Our journey began with a vision to revolutionize the industry.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  },
  {
    date: "2021",
    title: "First Major Release",
    description: "Launched our flagship product to overwhelming market response.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    date: "2022",
    title: "Global Expansion",
    description: "Expanded operations to 15+ countries worldwide.",
    image: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?auto=format&fit=crop&q=80&w=800"
  },
  {
    date: "2023",
    title: "Innovation Award",
    description: "Recognized as industry leader in technological innovation.",
    image: "https://images.unsplash.com/photo-1507099985932-87a4520ed1d5?auto=format&fit=crop&q=80&w=800"
  },
  {
    date: "2024",
    title: "Future Vision",
    description: "Setting new standards with cutting-edge developments.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h1>
          <p className="text-lg text-gray-600">Milestones that shaped our success</p>
        </div>
        
        <TimelineComponent events={timelineEvents} />
      </div>
    </div>
  );
}

export default App;