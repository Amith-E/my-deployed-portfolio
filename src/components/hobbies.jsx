import React from 'react';
import '../App.css';

const Hobbies = () => {
  const hobbies = [
    { 
      title: 'Gaming',
      icon: '🎮',
      description: 'Exploring strategy games and competitive esports'
    },
    { 
      title: 'Reading',
      icon: '📚',
      description: 'Enjoying fiction and mystery novels in leisure time'
    },
    { 
      title: 'Music',
      icon: '�',
      description: 'Playing guitar and exploring different genres'
    },
    { 
      title: 'Photography',
      icon: '📷',
      description: 'Capturing moments and learning composition'
    }
  ];

  return (
    <div className="section hobby-section">
      <h2>Hobbies</h2>
      <div className="cards-container">
        {hobbies.map((hobby, index) => (
          <div key={index} className="hobby-card">
            <div className="hobby-icon">{hobby.icon}</div>
            <h3>{hobby.title}</h3>
            <p>{hobby.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;