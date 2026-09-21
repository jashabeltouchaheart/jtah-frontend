"use client";

import Image from "next/image";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

interface RevealImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imageClassName?: string;
  aspectRatio?: string;
}

export function RevealImage({
  src,
  alt,
  fill = true,
  width,
  height,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  className = "",
  imageClassName = "",
  aspectRatio,
}: RevealImageProps) {
  const { containerRef, imageWrapperRef } = useRevealAnimation();

  return (
    <div
      ref={containerRef}
      style={aspectRatio ? { aspectRatio } : undefined}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        ref={imageWrapperRef}
        className="w-full h-full relative will-change-[clip-path]"
      >
        <Image
          src={src}
          alt={alt}
          fill={fill}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          priority={priority}
          sizes={sizes}
          className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] ${imageClassName}`}
        />
      </div>
    </div>
  );
}
