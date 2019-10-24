import React from "react";
// import '../reset.css';
import "../App.css";
import wallet from "../images/wallet.png";
import car from "../images/car.png";
import cash from "../images/cash-1.png";
import smartmoney from "../images/smartmoney.png";
import tipsimg from "../images/tipsease-img1.png";
import homescreen from "../images/home-screen.png";

export default function Marketing() {
  return (
    <div>
      <body>
        <section>
          <nav>
            <h2 className="logo">Tipsease</h2>
            <ul className="nav-list">
              <li className="list-item">
                <a href="/register">Register</a>
              </li>
              <li className="list-item">|</li>
              <li className="list-item">
                <a href="/login">Login</a>
              </li>
            </ul>
          </nav>
        </section>
        <section className="banner">
          <div className="banner-header">
            <h1>The Tipping App For A Cashless World</h1>
            <div className="button">
              <span>Get Started</span>
            </div>
          </div>
          <div className="banner-item">
            <img src={homescreen} alt='screenshots-app' />
          </div>
        </section>
        <section className="service-workers">
          <div className="service-workers-heading">
            <h1>For Service Workers</h1>
            <p>
              Earn More Money With Tipsease And Let Your Tips Jar Runneth Over
            </p>
          </div>
          <div className="service-worker-content">
            <div>
              <img src={tipsimg} alt='screenshots-app' />
            </div>
            <div className="service-worker-features">
              <p>
                <img className="feature-icons" src={wallet} alt='screenshots-app' /> Never miss an
                opportunity to get tipped
              </p>
              <p>
                <img className="feature-icons" src={car} alt='screenshots-app' /> Get paid by anyone,
                anywhere, anytime
              </p>

              <p>
                <img className="feature-icons" src={cash} alt='screenshots-app' /> Get paid faster and
                more often
              </p>
              <p>
                <img className="feature-icons" src={smartmoney} alt='screenshots-app' /> Earn Bonuses
                through our Referral Incentives
              </p>
            </div>
          </div>
        </section>

        <section className="users">
          <div className="service-workers-heading">
            <h1>For Users</h1>
            <p>
              No Cash...? No Problem! With Tipsease You Just Need Your Phone To
              Tip Anyone Anywhere
            </p>
          </div>
          <div className="service-worker-content">
            <div className="service-worker-features">
              <div>
                <p>
                  <img className="feature-icons" src={wallet} alt='screenshots-app' /> Fast as paying
                  with cash from a wallet or money clip
                </p>
                <p>
                  <img className="feature-icons" src={car} alt='screenshots-app' /> It's easy to
                  setup, transact & administer for the Tipper & Tippee
                </p>

                <p>
                  <img className="feature-icons" src={cash} alt='screenshots-app' /> It's secure as a
                  paypal or credit card transaction
                </p>
              </div>
              <p>
                <img className="feature-icons" src={smartmoney} alt='screenshots-app' /> It's
                anonymous and there's no need to know each other
              </p>
            </div>
            <div>
              <img src={tipsimg} alt='screenshots-app' />
            </div>
          </div>
        </section>

        <section className="service-workers">
          <div className="service-workers-heading">
            <h1>For Businesses</h1>
            <p>
              Motivate your service team with more tips, improved team-work and
              better customer relations
            </p>
          </div>
          <div className="service-worker-content">
            <div>
              <img src={tipsimg} alt='screenshots-app' />
            </div>
            <div className="service-worker-features">
              <p>
                <img className="feature-icons" src={wallet} alt='screenshots-app' /> Never miss an
                opportunity to get tipped
              </p>
              <p>
                <img className="feature-icons" src={car} alt='screenshots-app' /> Get paid by anyone,
                anywhere, anytime
              </p>

              <p>
                <img className="feature-icons" src={cash} alt='screenshots-app' /> Get paid faster and
                more often
              </p>
              <p>
                <img className="feature-icons" src={smartmoney} alt='screenshots-app' /> Earn Bonuses
                through our Referral Incentives
              </p>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>Copyright 2019</p>
        </footer>
      </body>
    </div>
  );
}
