import React, { useState, useEffect } from 'react';

const info = () => {

  const [startDate] = useState(new Date('2023-04-30'));
  const [experience, setExperience] = useState({ years: 0, months: 0, days: 0 });

  useEffect(() => {
    const updateExperience = () => {
      const currentDate = new Date();
      const diff = currentDate - startDate;

      const years = Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000));
      const remainingMonths = diff % (365.25 * 24 * 60 * 60 * 1000);
      const months = Math.floor(remainingMonths / (30.44 * 24 * 60 * 60 * 1000));
      const remainingDays = remainingMonths % (30.44 * 24 * 60 * 60 * 1000);
      const days = Math.floor(remainingDays / (24 * 60 * 60 * 1000));

      setExperience({ years, months, days });
    };

    const intervalId = setInterval(updateExperience, 1000);
    updateExperience();

    return () => clearInterval(intervalId);
  }, [startDate]);

  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>

        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">{`${experience.years} Years ${experience.months} Months ${experience.days} Days Working`}</span>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>

        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">10 + Projects</span>
      </div>

      <div className="about__box">
        <i class="bx bx-support about__icon"></i>

        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  )
}

export default info;