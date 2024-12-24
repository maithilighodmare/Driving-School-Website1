import React from 'react';
import '../styles/Courses.css'; // Import CSS for custom styling

const courses = [
  {
    title: 'Texas Adult Drivers Ed',
    features: [
      'Complete Package: from Permit to Drivers License',
      'Flexible, Convenient 6-hour Course',
      'Take Online or In Our Free App',
    ],
    originalPrice: '$69.95',
    discountedPrice: '$29',
  },
  {
    title: 'California Drivers Ed',
    features: [
      'Unlimited practice tests included with purchase',
      '100% permit exam pass rate',
      'Convenient—take anywhere, anytime, on any device',
    ],
    originalPrice: '$59',
    discountedPrice: '$39',
  },
  {
    title: 'Ohio Drivers Ed',
    features: [
      "America's #1 driving school—most selected course provider",
      'Students can take driving lessons after two hours',
      '100% online with engaging videos, animation, and activities',
    ],
    originalPrice: '$75',
    discountedPrice: '$49',
  },
];

const Courses = () => {
  return (
    <div className="courses-section">
      <h2 className="courses-title">Our Courses</h2>
      <div className="courses-container">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <h3 className="course-title">{course.title}</h3>
            <ul className="course-features">
              {course.features.map((feature, i) => (
                <li key={i} className="feature-item">
                  <span className="check-icon">✔</span> {feature}
                </li>
              ))}
            </ul>
            <div className="price-section">
              <p className="offer-text">With offer</p>
              <p className="prices">
                <span className="original-price">{course.originalPrice}</span>{' '}
                <span className="discounted-price">{course.discountedPrice}</span>
              </p>
            </div>
            <button className="enroll-button">Enroll Now</button>
            <a href="#" className="learn-more">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
