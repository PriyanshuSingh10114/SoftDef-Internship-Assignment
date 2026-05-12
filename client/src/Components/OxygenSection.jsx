import oxygenPlant from "../assets/oxygenPlant.png";

export default function OxygenSection() {
  return (
    <section className="oxygen-section">

      <div className="container">

        <h2 className="section-title">
          Our Best o2
        </h2>

        <div className="glass-card oxygen-wrapper">

          <div>
            <img
              src={oxygenPlant}
              alt="High oxygen-producing plant"
              className="oxygen-img"
            />
          </div>

          <div>

            <h2 className="oxygen-title">
              We Have Small And Best O2 Plants Collection’s
            </h2>

            <p className="oxygen-text">
              Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.

              <br />
              <br />

              Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
            </p>

            <button className="primary-btn mt-10">
              Explore
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}