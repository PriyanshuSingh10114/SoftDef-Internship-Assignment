import { FiArrowRight } from "react-icons/fi";

import trendyPlant from "../assets/plant1.png";
import review4 from "../assets/review4.png";

export default function Hero() {
  return (
    <section className="hero">

      <div className="container">

        <div className="hero-wrapper">

          <div className="hero-left-section">

            <h1 className="hero-title">
              Earth’s Exhale
            </h1>

            <p className="hero-text">
              Earth Exhale symbolizes the purity and vitality of the Earth's natural
              environment and its essential role in sustaining life.
            </p>

            <div className="hero-btns">

              <button className="primary-btn">
                Buy Now
              </button>

              <div className="play-btn">

                <div className="play-circle">
                  ▶
                </div>

                <span>Live Demo...</span>

              </div>

            </div>

            <div className="glass-card review-card">

              <div className="review-top">

                <img src={review4} alt="Reviewer Ron" />

                <div>
                  <h3>Ron</h3>

                  <p>★★★★★</p>
                </div>

              </div>

              <p className="review-text">
                I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
              </p>

            </div>

          </div>

          <div className="hero-right">

            <div className="glass-card floating-card">

              <img src={trendyPlant} alt="Trendy Aglaonema plant" />

              <p>Indoor Plant</p>

              <div className="flex items-center justify-between mt-4">

                <h2>Aglaonema plant</h2>

                <FiArrowRight size={28} />

              </div>

              <button className="primary-btn mt-8">
                Buy Now
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}