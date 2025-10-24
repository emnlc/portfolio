import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useWeatherData } from "@/api/weatherapi";

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

  const { isLoading, error, data } = useQuery(useWeatherData());

  if (isLoading)
    return (
      <div className="bg-white dark:bg-dark-primary border border-black/20 dark:border-white/20 p-4 min-w-[200px] rounded-none">
        <div className="flex items-center justify-center">
          <div className="w-2 h-2 bg-black dark:bg-white rounded-full animate-pulse" />
        </div>
      </div>
    );

  if (error)
    return (
      <div className="bg-white dark:bg-dark-primary border border-black/20 dark:border-white/20 p-4 rounded-none">
        <span className="text-xs font-light text-black/50 dark:text-white/50">
          Weather unavailable
        </span>
      </div>
    );

  if (!data)
    return (
      <div className="bg-white dark:bg-dark-primary border border-black/20 dark:border-white/20 p-4 rounded-none">
        <span className="text-xs font-light text-black/50 dark:text-white/50">
          No data
        </span>
      </div>
    );

  return (
    <div className="bg-white dark:bg-dark-primary border border-black/20 dark:border-white/20 p-4 min-w-[200px] rounded-none">
      <div className="flex items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0">
            <img
              className="w-12 h-12 object-contain"
              src={
                data.current.is_day === 0
                  ? `/weather/night/${data.current.condition.text}.svg`
                  : `/weather/day/${data.current.condition.text}.svg`
              }
              alt={data.current.condition.text}
            />
          </div>

          <div>
            <div className="text-2xl font-light text-black dark:text-white">
              {Math.round(data.current.temp_f)}°
            </div>
            <div className="text-xs font-light text-black/70 dark:text-white/70">
              {data.current.condition.text}
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex-shrink-0">
          <span className="text-[0.65rem] font-light text-black/50 dark:text-white/50 border border-black/10 dark:border-white/10 px-2 py-1">
            {currentTime}
          </span>
        </div>
      </div>
    </div>
  );
}

export default WeatherWidget;
