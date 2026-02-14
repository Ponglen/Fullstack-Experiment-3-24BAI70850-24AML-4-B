import React, { useState } from 'react';
import './App.css';

// Base Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  getDetails() {
    return `${this.name}, Age: ${this.age}`;
  }
}

// Student class extending Person
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  
  getDetails() {
    return `${super.getDetails()}, Grade: ${this.grade}`;
  }
  
  getType() {
    return 'Student';
  }
}

// Teacher class extending Person
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
  
  getDetails() {
    return `${super.getDetails()}, Subject: ${this.subject}`;
  }
  
  getType() {
    return 'Teacher';
  }
}

function PersonHierarchy() {
  const [people] = useState([
    new Student('John Doe', 15, '10th'),
    new Student('Jane Smith', 14, '9th'),
    new Teacher('Mr. Johnson', 35, 'Mathematics'),
    new Teacher('Mrs. Williams', 32, 'Science')
  ]);
  
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="person-hierarchy">
      <h2>Person Class Hierarchy</h2>
      
      <div className="hierarchy-info">
        <h3>Class Hierarchy:</h3>
        <ul>
          <li><strong>Person</strong> (Base Class) - name, age</li>
          <li><strong>Student</strong> extends Person - grade</li>
          <li><strong>Teacher</strong> extends Person - subject</li>
        </ul>
      </div>

      <div className="people-list">
        <h3>People:</h3>
        {people.map((person, index) => (
          <div 
            key={index} 
            className={`person-card ${person.getType().toLowerCase()} ${expandedIndex === index ? 'expanded' : ''}`}
            onClick={() => toggleExpand(index)}
          >
            <div className="person-header">
              <span className="person-type">{person.getType()}</span>
              <strong>{person.name}</strong>
            </div>
            {expandedIndex === index && (
              <div className="person-details">
                <p>Age: {person.age}</p>
                {person.getType() === 'Student' && <p>Grade: {person.grade}</p>}
                {person.getType() === 'Teacher' && <p>Subject: {person.subject}</p>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PersonHierarchy;
