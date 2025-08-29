import React from 'react';
import '../App.css';

const Interests = () => {
  const interests = [
    { 
      title: 'Software Development',
      icon: '💻',
      description: 'Crafting efficient solutions through innovative programming approaches'
    },
    { 
      title: 'Technical Writing',
      icon: '✍️',
      description: 'Creating documentation and sharing technical knowledge'
    },
    { 
      title: 'Digital Innovation',
      icon: '🚀',
      description: 'Exploring emerging technologies and industry trends'
    },
    { 
      title: 'UI/UX Design',
      icon: '🎨',
      description: 'Creating intuitive and engaging user experiences'
    }
  ];

  return (
    <div className="section interest-section">
      <h2>Interests</h2>
      <div className="cards-container">
        {interests.map((interest, index) => (
          <div key={index} className="interest-card">
            <div className="hobby-icon">{interest.icon}</div>
            <h3>{interest.title}</h3>
            <p>{interest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interests;
