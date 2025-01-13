import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import bear from "../../assets/bear.json";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const fetchSpotifyToken = async () => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${btoa(
        `${import.meta.env.VITE_SPOTIFY_CLIENT}:${
          import.meta.env.VITE_SPOTIFY_SECRET
        }`
      )}`,
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN,
    }),
  });

  const data = await response.json();
  return data.access_token;
};

const fetchNowPlaying = async (token) => {
  const response = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (response.status === 204 || response.status > 400) {
    return null;
  }
  return response.json();
};

const useSpotifyNowPlaying = () => {
  const { data: token } = useQuery({
    queryKey: ["spotifyToken"],
    queryFn: fetchSpotifyToken,
    staleTime: 3600 * 1000,
  });

  return useQuery({
    queryKey: ["nowPlaying", token],
    queryFn: () => fetchNowPlaying(token),
    enabled: !!token,
    refetchInterval: 5000,
  });
};

const SpotifyNowPlaying = () => {
  const { data, isLoading, error } = useSpotifyNowPlaying();
  const [isTitleOverflowing, setIsTitleOverflowing] = useState(false);
  const [isArtistOverflowing, setIsArtistOverflowing] = useState(false);

  const titleRef = useRef(null);
  const artistRef = useRef(null);
  const isInViewRef = useRef(null);
  const isInView = useInView(isInViewRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  useEffect(() => {
    if (titleRef.current) {
      setIsTitleOverflowing(
        titleRef.current.scrollWidth >
          document.querySelector("#song-container").clientWidth
      );
    }

    if (artistRef.current) {
      setIsArtistOverflowing(
        document.querySelector("#artist-span").clientWidth >
          document.querySelector("#song-container").clientWidth
      );
    }
  }, [data]);

  if (isLoading)
    return (
      <motion.div
        ref={isInViewRef}
        variants={{
          hidden: { opacity: 0, y: -25 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.2, delay: 0.5 }}
        className="rounded-lg sm:max-w-[15rem] bg-white dark:bg-dark-primary bg-opacity-50 border dark:border-[#e5e7eb] border-opacity-15 dark:border-opacity-15 min-h-[74px]"
      />
    );

  if (error) return <div>Error: {error.message}</div>;

  return (
    <motion.div
      ref={isInViewRef}
      variants={{
        hidden: { opacity: 0, y: -25 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.2, delay: 0.2 }}
      className=" rounded-lg w-full sm:min-w-[13.85rem] sm:max-w-[13.85rem] bg-white dark:bg-dark-primary bg-opacity-50 border dark:border-[#e5e7eb] border-opacity-15 dark:border-opacity-15 whitespace-nowrap overflow-hidden"
    >
      {data && data.is_playing && data.item ? (
        <div className="px-2 py-2 flex flex-row items-center gap-2 sm:gap-4 relative">
          <img
            src={data.item.album.images[0]?.url}
            className="rounded w-[60px] sm:w-[65px]"
            alt="Album Art"
          />
          <div
            id="song-container"
            className="flex flex-col overflow-hidden whitespace-nowrap relative w-full"
          >
            <span
              ref={titleRef}
              className={`font-medium text-sm song-name inline-block w-fit ${
                isTitleOverflowing ? "animate" : ""
              }`}
            >
              {data.item.name}
            </span>

            <span
              ref={artistRef}
              id="artist-span"
              className={`font-medium text-xs song-artist inline-block w-fit ${
                isArtistOverflowing ? "animate" : ""
              }`}
            >
              {data.item.artists.map((artist) => artist.name).join(", ")}
            </span>
          </div>
        </div>
      ) : (
        <div className="px-2 py-2 sm:max-w-[15rem] flex flex-row items-center gap-2 sm:gap-4">
          <div className="w-[60px] sm:w-[65px]">
            <Lottie animationData={bear} />
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-sm">No music playing. . .</span>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default SpotifyNowPlaying;
