import { useState } from "react";

const Address = ({ item }) => {
  const [hover, setHover] = useState(false);
  const Icon = item?.icon;

  return (
    <div
      className="max-w-84 p-4 flex items-center gap-3 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1 cursor-pointer max-sm:mx-auto"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`h-12 w-12 flex items-center justify-center rounded-md transition-all duration-300 ${
          hover ? "bg-picto-primary" : "bg-[#EDD8FF80]"
        }`}
      >
        <Icon
          className={`text-xl transition-colors duration-300 ${
            hover ? "text-white" : "text-picto-primary"
          }`}
        />
      </div>
      <div>
        <p className="text-sm md:text-[14px] text-[#424E60] font-medium">
          {item?.title}:
        </p>
        <p className="text-base md:text-[16px] text-[#132238] font-semibold">
          {item?.description}
        </p>
      </div>
    </div>
  );
};

export default Address;
