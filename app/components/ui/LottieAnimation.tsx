"use client";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";

export default function LottieAnimation({
  animationData,
  width = 64,
  height = 64,
  loop = true,
  autoplay = true,
}: {
  animationData: object;
  width?: number;
  height?: number;
  loop?: boolean;
  autoplay?: boolean;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || !animationData)
    return (
      <div
        className="animate-pulse bg-[#F1F5F9] rounded-xl"
        style={{ width, height }}
      />
    );

  return (
    <Lottie
      options={{
        loop,
        autoplay,
        animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
          progressiveLoad: true,
        },
      }}
      height={height}
      width={width}
    />
  );
}