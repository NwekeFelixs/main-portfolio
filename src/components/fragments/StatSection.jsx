import React from 'react';
import '../css/style.css';
import BadgeIcon from '../images/stats-card_icon-1.png';
import CheckmarkIcon from '../images/stats-card_icon-2.png';
import PeopleRatingIcon from '../images/stats-card_icon-3.png';

function StatsSection() {
  return (
    <section className="stats container" id="stats">
      <ul className="stats-list">
        <li>
          <a href="#" className="stats-card">
            <div className="card-icon">
              <img src={BadgeIcon} alt="Badge icon" />
            </div>
            <h2 className="h2 card-title">
              4+ <strong>Years of Experience</strong>
            </h2>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </a>
        </li>

        <li>
          <a href="#" className="stats-card">
            <div className="card-icon">
              <img src={CheckmarkIcon} alt="Checkmark icon" />
            </div>
            <h2 className="h2 card-title">
              50+ <strong>Completed Projects</strong>
            </h2>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </a>
        </li>

        <li>
          <a href="#" className="stats-card">
            <div className="card-icon">
              <img src={PeopleRatingIcon} alt="People rating icon" />
            </div>
            <h2 className="h2 card-title">
              15+ <strong>Happy Clients</strong>
            </h2>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default StatsSection;
