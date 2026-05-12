export default function TestimonialCard({
  image,
  name,
  review,
}) {
  return (
    <div className="glass-card testimonial-card">

      <div className="testimonial-top">

        <img src={image} alt="" />

        <div>

          <h3>{name}</h3>

          <p>★★★★★</p>

        </div>

      </div>

      <p className="testimonial-review">
        {review}
      </p>

    </div>
  );
}