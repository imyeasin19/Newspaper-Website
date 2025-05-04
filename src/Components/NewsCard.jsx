import { FaStar, FaEye } from "react-icons/fa";
import { FiShare2, FiBookmark } from "react-icons/fi";
import { format } from "date-fns";

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    others,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md rounded-xl border border-gray-200">
      {/* Header */}
      <div className="flex bg-base-200 rounded-xl items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-500">
              {format(new Date(author.published_date), "dd-MM-yyyy")}
            </p>
          </div>
        </div>
        <div className="flex space-x-2 text-xl text-gray-500">
          <FiBookmark className="cursor-pointer" />
          <FiShare2 className="cursor-pointer" />
        </div>
      </div>

      {/* Title & Badges */}
      <div className="px-4">
        <h2 className="text-lg font-bold leading-snug">{title}</h2>
        <div className="mt-1 space-x-2">
          {others?.is_trending && (
            <span className="badge badge-warning badge-outline text-xs">🔥 Trending</span>
          )}
          {others?.is_today_pick && (
            <span className="badge badge-success badge-outline text-xs">⭐ Today’s Pick</span>
          )}
        </div>
      </div>

      {/* Image */}
      <figure className="px-4 pt-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full rounded-xl object-cover"
        />
      </figure>

      {/* Details */}
      <div className="p-4 pt-2 text-gray-700">
        <p>
          {details.length > 200 ? `${details.slice(0, 200)}...` : details}
        </p>
        <button className="text-primary font-semibold mt-2">Read More</button>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 pb-4 pt-2 border-t text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < rating.number ? "text-orange-400" : "text-gray-300"}
            />
          ))}
          <span className="ml-1 text-gray-700">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
