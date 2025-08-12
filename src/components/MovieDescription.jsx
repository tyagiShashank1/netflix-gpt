const MovieDescription = ({ isOpen, onClose, movie }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-auto overflow-y-auto max-h-[90vh] animate-fadeIn"
        onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition"
        >
          ✕
        </button>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-4">
          {/* Title */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 break-words">
            {movie.title}
          </h2>

          {/* Release Date */}
          <p className="text-sm sm:text-base text-gray-500">
            Release Date:{" "}
            <span className="font-medium text-gray-700">
              {movie.release_date}
            </span>
          </p>

          {/* Overview */}
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base ">
            {movie.overview}
          </p>

          {/* Ratings */}
          <div className="flex items-center gap-4 mt-4">
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold">
              ⭐ {movie.vote_average}
            </span>
            <span className="text-gray-500 text-sm">
              {`${movie.vote_count} votes`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDescription;
