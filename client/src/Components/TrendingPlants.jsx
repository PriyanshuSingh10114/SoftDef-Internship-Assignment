import { FiShoppingBag } from "react-icons/fi";

import deskPlant from "../assets/deskPlant.png";
import plant6 from "../assets/plant6.png";

export default function TrendingPlants() {
  return (
    <section className="trending">

      <div className="container">

        <h2 className="section-title">
          Our Trendy plants
        </h2>

        <div className="trending-wrapper">

          {/* CARD 1 */}
          <div className="glass-card trending-card">

            <div>
              <img src={deskPlant} alt="Desk decoration plant" />
            </div>

            <div className="trending-content">

              <h2>
                For Your Desks Decorations
              </h2>

              <p>
                I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!
              </p>

              <h3 className="price">
                Rs. 599/-
              </h3>

              <div className="card-btns">

                <button className="primary-btn">
                  Explore
                </button>

                <button className="icon-btn">
                  <FiShoppingBag />
                </button>

              </div>

            </div>

          </div>

          {/* CARD 2 */}
          <div className="glass-card trending-card">

            <div className="trending-content">

              <h2>
                For Your Desks Decorations
              </h2>

              <p>
                The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming
              </p>

              <h3 className="price">
                Rs. 399/-
              </h3>

              <div className="card-btns">

                <button className="primary-btn">
                  Explore
                </button>

                <button className="icon-btn">
                  <FiShoppingBag />
                </button>

              </div>

            </div>

            <div className="flex justify-center">
              <img src={plant6} alt="Trending indoor plant" />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}