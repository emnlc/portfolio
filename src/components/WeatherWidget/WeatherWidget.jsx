import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

// TODO: create nice looking weather widget :)

const getGradientBackground = (data) => {
  const isDay = data.current.is_day === 1;
  const condition = data.current.condition.text.toLowerCase();

  // night
  if (!isDay) {
    if (condition.includes("rain")) {
      return "linear-gradient(to bottom, #2c3e50, #34495e)"; // Night rain
    }
    if (condition.includes("clear")) {
      return "linear-gradient(to bottom, #1b2838, #2c3e50)"; // Clear night
    }
    if (condition.includes("cloudy") || condition.includes("overcast")) {
      return "linear-gradient(to bottom, #3a3d40, #474b4f)"; // Cloudy night
    }

    return "linear-gradient(to bottom, #1b2838, #2c3e50)";
  }

  // day
  if (condition.includes("rainy")) {
    return "linear-gradient(to bottom, #5f9ea0, #7b7d7d)"; // Rainy day
  }
  if (condition.includes("clear")) {
    return "linear-gradient(to bottom, #4682B4, #87CEEB)"; // Clear day
  }
  if (condition.includes("cloudy") || condition.includes("overcast")) {
    return "linear-gradient(to bottom, #d3d3d3, #a9a9a9)"; // Cloudy day
  }

  return "linear-gradient(to bottom, #4682B4, #87CEEB)";
};

function WeatherWidget() {
  const getPhoenixTime = () => {
    return new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Phoenix",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
      hour12: true,
    }).format(new Date());
  };

  const [currentTime, setCurrentTime] = useState(getPhoenixTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getPhoenixTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const token = import.meta.env.VITE_WEATHER_API_KEY;
  const { isLoading, error, data } = useQuery({
    queryKey: ["current"],
    queryFn: () => {
      return fetch(
        `http://api.weatherapi.com/v1/current.json?key=${token}&q=phoenix`
      ).then((res) => res.json());
    },
  });

  if (isLoading)
    return (
      <>
        <div className="text-white  bg-white dark:bg-dark-primary flex flex-row justify-center max-w-72 items-center py-2 rounded-lg relative">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row gap items-center">
              <span className="font-semibold text-xl">...</span>
            </div>

            <span className="font-normal text-sm">...</span>
          </div>

          <span className="absolute top-2 right-2 self-end text-[0.65rem] font-medium text-black dark:text-white bg-white dark:bg-dark-primary px-2 py-1 rounded-lg">
            {currentTime}
          </span>
        </div>
      </>
    );

  if (error) return <span>Error: {error.message}</span>;
  if (!data) return <span>No data</span>;

  const backgroundStyle = {
    background: getGradientBackground(data),
    display: "flex",
  };

  return (
    <span
      style={backgroundStyle}
      className="text-white flex flex-row justify-center max-w-72 items-center py-2 relative"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row gap items-center">
          <span className="font-semibold text-xl">
            {Math.round(data.current.temp_f)}&deg;
          </span>
          <img
            className="w-12 "
            src={
              data.current.is_day === 0
                ? `/weather/night/${data.current.condition.text}.svg`
                : `/weather/day/${data.current.condition.text}.svg`
            }
            alt=""
          />
        </div>

        <span className="font-normal text-sm">
          {data.current.condition.text}
        </span>
      </div>

      <span className="absolute top-2 right-2 self-end text-[0.65rem] font-medium  border dark:border-[#e5e7eb] border-opacity-15 dark:border-opacity-15 text-black dark:text-white bg-white dark:bg-dark-primary px-2 py-1 rounded-lg">
        {currentTime}
      </span>
    </span>
  );
}

export default WeatherWidget;
