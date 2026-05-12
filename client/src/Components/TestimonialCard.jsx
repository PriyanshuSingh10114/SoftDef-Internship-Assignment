export default function TestimonialCard({
  image,
  name,
  review,
}) {
  return (
    <div className="backdrop-blur-xl bg-[#ffffff10] border border-[#ffffff20] rounded-[45px] p-8">
      <div className="flex items-center gap-5">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />

        <div>
          <h3 className="text-2xl font-semibold">
            {name}
          </h3>

          <div className="text-yellow-400">
            ★★★★★
          </div>
        </div>
      </div>

      <p className="mt-8 text-[#D0D0D0] leading-8">
        {review}
      </p>
    </div>
  );
}