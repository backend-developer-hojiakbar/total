import { Link } from "react-router-dom";

const CinemaCard = ({ cinema }) => {
  const { id, title, location, genre, img } = cinema;
  return (
    <Link to={`/cinema/${id}`}>
      <div className="card">
        <img
          className="w-[392px] h-[500px] object-cover rounded-2xl"
          width={392}
          height={500}
          src={img}
          alt={title}
        />
        <h3 className="text-xl font-semibold mt-3 line-clamp-1">{title}</h3>
        <p className="mt-1">
          <span className="font-bold text-base">Genre:</span>
          <span className="ml-2 text-base font-medium text-[#666666]">
            {genre}
          </span>
        </p>
        <div className="flex items-center gap-1  mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="currentColor" strokeLinejoin="round">
              <path strokeWidth="3" d="M12 11h.01v.01H12z" />
              <path
                strokeWidth="2"
                d="m12 22l5.5-5.5a7.778 7.778 0 1 0-11 0z"
              />
            </g>
          </svg>
          <p>{location}</p>
        </div>
      </div>
    </Link>
  );
};

export default CinemaCard;
