"use client";

import React, { useContext, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { LanguageContext } from "../contexts/languageContext";
const content = require("../data/content.json");

export default function Page() {
  const { language } = useContext(LanguageContext);
  const allWork = content[language].work;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [lastScrollTime, setLastScrollTime] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const currentProject = allWork[currentIndex];

  const goToProject = useCallback(
    (index: number) => {
      if (index === currentIndex || isTransitioning) return;

      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsTransitioning(false);
      }, 300);
    },
    [currentIndex, isTransitioning],
  );

  const goToNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % allWork.length;
    goToProject(nextIndex);
  }, [currentIndex, allWork.length, goToProject]);

  const goToPrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + allWork.length) % allWork.length;
    goToProject(prevIndex);
  }, [currentIndex, allWork.length, goToProject]);

  const openCarousel = (imageIndex: number = 0) => {
    setCarouselIndex(imageIndex);
    setIsCarouselOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
    document.body.style.overflow = "unset";
  };

  const nextCarouselImage = useCallback(() => {
    setCarouselIndex(
      (prev) => (prev + 1) % currentProject.meta.imageUrl.length,
    );
  }, [currentProject.meta.imageUrl.length]);

  const prevCarouselImage = useCallback(() => {
    setCarouselIndex(
      (prev) =>
        (prev - 1 + currentProject.meta.imageUrl.length) %
        currentProject.meta.imageUrl.length,
    );
  }, [currentProject.meta.imageUrl.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isCarouselOpen) {
        if (e.key === "Escape") {
          closeCarousel();
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          nextCarouselImage();
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          prevCarouselImage();
        }
        return;
      }

      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        goToNext();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrev();
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (isCarouselOpen) return;

      e.preventDefault();

      const now = Date.now();
      const scrollThreshold = 800; // Debounce scroll events (800ms)

      if (now - lastScrollTime < scrollThreshold || isTransitioning) {
        return;
      }

      setLastScrollTime(now);

      if (e.deltaY > 0) {
        // Scrolling down - go to next project
        goToNext();
      } else if (e.deltaY < 0) {
        // Scrolling up - go to previous project
        goToPrev();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (isCarouselOpen) return;
      const touch = e.touches[0];
      if (touch) {
        setTouchStart(touch.clientY);
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isCarouselOpen) return;
      const touch = e.changedTouches[0];
      if (touch && touchStart !== null) {
        const touchEnd = touch.clientY;
        const diff = touchStart - touchEnd;
        const minSwipeDistance = 50;

        if (Math.abs(diff) > minSwipeDistance) {
          const now = Date.now();
          const scrollThreshold = 800;

          if (now - lastScrollTime < scrollThreshold || isTransitioning) {
            return;
          }

          setLastScrollTime(now);

          if (diff > 0) {
            // Swiped up - go to next project
            goToNext();
          } else {
            // Swiped down - go to previous project
            goToPrev();
          }
        }
        setTouchStart(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [
    currentIndex,
    lastScrollTime,
    isTransitioning,
    touchStart,
    isCarouselOpen,
    goToNext,
    goToPrev,
    nextCarouselImage,
    prevCarouselImage,
  ]);

  if (!currentProject) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-neutral-900">
          {language !== "zh-CN"
            ? "Sorry, no work to show"
            : "抱歉，没有作品可展示"}
        </p>
      </div>
    );
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Fade Transition */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 cursor-pointer ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
          style={{
            backgroundImage: `url(${currentProject.meta.imageUrl[0]})`,
          }}
          onClick={() => openCarousel(0)}
          title="Click to view images"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none" />
      </div>

      {/* Project Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <div
          className={`transition-opacity duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
        >
          <div className="max-w-2xl">
            {/* Backdrop blur container */}
            <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 md:p-10">
              <div className="mb-4">
                <span className="text-white/80 text-sm uppercase tracking-wide">
                  {language !== "zh-CN" ? "For" : "为了"}{" "}
                  {currentProject.meta.client}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {currentProject.title}
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
                {currentProject.description}
              </p>
              {currentProject.href && (
                <a
                  href={currentProject.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
                >
                  {language !== "zh-CN" ? "View Project" : "查看项目"}
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Navigation Dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-20 flex flex-col space-y-3">
        {allWork.map((_: any, index: number) => (
          <button
            key={index}
            onClick={() => goToProject(index)}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              index === currentIndex
                ? "bg-white border-white scale-125"
                : "bg-transparent border-white/60 hover:border-white hover:scale-110"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>

      {/* Project Counter */}
      <div className="absolute bottom-6 left-8 z-20 text-white/80 text-sm">
        {String(currentIndex + 1).padStart(2, "0")} /{" "}
        {String(allWork.length).padStart(2, "0")}
      </div>

      {/* Additional Images Preview */}
      {currentProject.meta.imageUrl.length > 1 && (
        <div className="absolute bottom-4 md:bottom-6 right-4 md:right-20 z-20 flex space-x-2 md:space-x-3">
          {currentProject.meta.imageUrl
            .slice(1, 4)
            .map((image: string, index: number) => (
              <div
                key={index}
                className="w-12 h-12 md:w-32 md:h-32 bg-cover bg-center rounded border-2 border-white/60 hover:border-white transition-colors cursor-pointer hover:scale-110 transform duration-200"
                style={{ backgroundImage: `url(${image})` }}
                title={`View image ${index + 2}`}
                onClick={() => openCarousel(index + 1)}
              />
            ))}
          {currentProject.meta.imageUrl.length > 4 && (
            <div
              className="w-12 h-12 md:w-32 md:h-32 bg-black/60 rounded border-2 border-white/60 flex items-center justify-center text-white text-xs md:text-lg cursor-pointer hover:border-white transition-colors hover:scale-110 transform duration-200"
              onClick={() => openCarousel(1)}
            >
              +{currentProject.meta.imageUrl.length - 4}
            </div>
          )}
        </div>
      )}

      {/* Image Carousel Modal */}
      {isCarouselOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md">
          {/* Modal Container with header spacing and margins */}
          <div className="w-full h-full pt-20 pb-4 px-4 md:px-8 lg:px-16 flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeCarousel}
              className="absolute top-24 right-4 md:right-8 lg:right-16 z-60 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Close carousel"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation Arrows */}
            {currentProject.meta.imageUrl.length > 1 && (
              <>
                <button
                  onClick={prevCarouselImage}
                  className="absolute left-4 md:left-8 lg:left-16 top-1/2 transform -translate-y-1/2 z-60 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Previous image"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextCarouselImage}
                  className="absolute right-4 md:right-8 lg:right-16 top-1/2 transform -translate-y-1/2 z-60 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Next image"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}

            {/* Main Image */}
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src={currentProject.meta.imageUrl[carouselIndex]}
                alt={`${currentProject.title} - Image ${carouselIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                width={1200}
                height={800}
                priority
              />
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 z-60 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
              {carouselIndex + 1} / {currentProject.meta.imageUrl.length}
            </div>

            {/* Thumbnail Navigation */}
            {currentProject.meta.imageUrl.length > 1 && (
              <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-60 flex space-x-2 max-w-xs md:max-w-md lg:max-w-lg overflow-x-auto pb-2 px-4">
                {currentProject.meta.imageUrl.map(
                  (image: string, index: number) => (
                    <div
                      key={index}
                      className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-cover bg-center rounded cursor-pointer border-2 transition-all duration-200 ${
                        index === carouselIndex
                          ? "border-white scale-110"
                          : "border-white/40 hover:border-white/80"
                      }`}
                      style={{ backgroundImage: `url(${image})` }}
                      onClick={() => setCarouselIndex(index)}
                    />
                  ),
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
