import TestimonialCard from "./TestimonialCard";

import review1 from "../assets/review1.png";
import review2 from "../assets/review2.png";
import review3 from "../assets/review3.png";

const testimonials = [
  {
    id: 1,
    image: review1,
    name: "Shelly Russel",
    review:
      "Just got my hands on some absolutely awesome plants, and I couldn't be happier!",
  },
  {
    id: 2,
    image: review2,
    name: "Lula Rolfson",
    review:
      "Each one has its own unique charm and personality.",
  },
  {
    id: 3,
    image: review3,
    name: "Carol Huels",
    review:
      "It's like bringing a little piece of nature indoors.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 lg:px-12 mt-36">
      <h2 className="text-center text-5xl font-semibold mb-20">
        Customer Review
      </h2>

      <div className="grid lg:grid-cols-3 gap-10">
        {testimonials.map((item) => (
          <TestimonialCard
            key={item.id}
            image={item.image}
            name={item.name}
            review={item.review}
          />
        ))}
      </div>
    </section>
  );
}