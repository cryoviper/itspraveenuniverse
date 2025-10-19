import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { reviews } from "../constants";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={twMerge(
        "relative w-64 h-full p-4 cursor-pointer overflow-hidden rounded-xl border border-white/10 transition-all duration-300 bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F3460] hover:from-[#263159] hover:via-[#1B1A55] hover:to-[#3A1078]"
      )}
    >
      <div className="flex items-center gap-3">
        <img
          className="w-8 h-8 rounded-full bg-white/10 object-cover"
          width="32"
          height="32"
          alt={`${name} avatar`}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold text-white">{name}</figcaption>
          <p className="text-xs text-white/50">{username}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-sm text-white/90 leading-snug">{body}</blockquote>
    </figure>
  );
};

export default function Testimonial() {
  return (
    <div className="mt-28 md:mt-36 c-space">
      <h2 className="text-heading">Hear From My Clients</h2>

      <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden space-y-4">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        {/* Left & right gradient masks */}
        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-primary pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-primary pointer-events-none z-10" />
      </div>
    </div>
  );
}
