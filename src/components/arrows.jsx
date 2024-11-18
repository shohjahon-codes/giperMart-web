export const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute z-10 flex items-center justify-center h-10 w-10 bg-white rounded-full shadow-md cursor-pointer -right-5 top-1/2 transform -translate-y-1/2"
      onClick={onClick}
    >
      {
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_51099_6870)">
            <path
              d="M15 5L13.59 6.41L18.17 11H2V13H18.17L13.58 17.59L15 19L22 12L15 5Z"
              fill="#E44542"
            />
          </g>
          <defs>
            <clipPath id="clip0_51099_6870">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      }
      
    </div>
  );
};

export const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute z-10 flex items-center justify-center h-10 w-10 bg-white rounded-full shadow-md cursor-pointer -left-5 top-1/2 transform -translate-y-1/2"
      onClick={onClick}
    >
      {
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_51099_6871)">
            <path
              d="M9 19L10.41 17.59L5.83 13L22 13V11L5.83 11L10.42 6.41L9 5L2 12L9 19Z"
              fill="#FF888C"
            />
          </g>
          <defs>
            <clipPath id="clip0_51099_6871">
              <rect
                width={24}
                height={24}
                fill="white"
                transform="matrix(-1 0 0 -1 24 24)"
              />
            </clipPath>
          </defs>
        </svg>
      }

    </div>
  );
};
