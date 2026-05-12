import TestimonialCard from "./TestimonialCard";

import review1 from "../assets/review1.png";
import review2 from "../assets/review2.jpg";
import review3 from "../assets/review3.png";

const testimonials = [
  {
    id: 1,
    image: review1,
    name: "Shelly Russel",
    review:
      "Just got my hands on some absolutely awesome plants, and I couldn’t be happier!",
  },
  {
    id: 2,
    image: review2,
    name: "Lula Rolfson",
    review:
      "Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
  },
  {
    id: 3,
    image: review3,
    name: "Carol Huels",
    review:
      "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="testimonial-section">

      <div className="container">

        <h2 className="section-title">
          Customer Review
        </h2>

        <div className="testimonial-grid">

          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              image={item.image}
              name={item.name}
              review={item.review}
            />
          ))}

        </div>

      </div>

    </section>
  );
}