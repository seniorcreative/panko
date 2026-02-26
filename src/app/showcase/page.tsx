"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { aldrich } from "../fonts";
import { Raleway } from "next/font/google";

const ral = Raleway({ weight: ["400", "600"], subsets: ["latin"] });

interface ShowcaseProject {
  title: string;
  description: string;
  tags: string[];
  images: string[];
}

const projects: ShowcaseProject[] = [
  {
    title: "Light Pollution App",
    description:
      "React Native app using AI to analyse and map light pollution levels. Camera-based detection with real-time scoring and location tracking.",
    tags: ["React Native", "AI", "Mobile", "Camera"],
    images: [
      "/showcase/light-pollution-1.jpg",
      "/showcase/light-pollution-2.jpg",
    ],
  },
  {
    title: "Cabinet Design Demo",
    description:
      "AI-assisted cabinet design software demo. Interactive 3D configuration with intelligent layout suggestions and material estimation.",
    tags: ["AI", "3D", "Web App", "Prototype"],
    images: ["/showcase/cabinet-demo-1.jpg", "/showcase/cabinet-demo-2.jpg"],
  },
  // Add more projects here as needed:
  // {
  //   title: "Project Name",
  //   description: "Description",
  //   tags: ["Tag1", "Tag2"],
  //   images: ["/showcase/image1.jpg", "/showcase/image2.jpg"],
  // },
];

export default function ShowcasePage() {
  const [lightbox, setLightbox] = useState<{
    projectIndex: number;
    imageIndex: number;
  } | null>(null);

  const openLightbox = (projectIndex: number, imageIndex: number) => {
    setLightbox({ projectIndex, imageIndex });
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightbox(null);
    document.body.style.overflow = "unset";
  };

  const currentProject =
    lightbox !== null ? projects[lightbox.projectIndex] : null;

  const nextImage = useCallback(() => {
    if (!lightbox || !currentProject) return;
    setLightbox({
      ...lightbox,
      imageIndex: (lightbox.imageIndex + 1) % currentProject.images.length,
    });
  }, [lightbox, currentProject]);

  const prevImage = useCallback(() => {
    if (!lightbox || !currentProject) return;
    setLightbox({
      ...lightbox,
      imageIndex:
        (lightbox.imageIndex - 1 + currentProject.images.length) %
        currentProject.images.length,
    });
  }, [lightbox, currentProject]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox, nextImage, prevImage]);

  return (
    <div className="min-h-screen bg-gray-950 pt-24 pb-20">
      <div className="px-6 md:px-12 lg:px-24 mb-12">
        <Link
          href="/"
          className={`${aldrich.className} text-sm text-gray-500 hover:text-white transition-colors mb-8 inline-block`}
        >
          &larr; Back to home
        </Link>
        <h1
          className={`${aldrich.className} text-3xl md:text-4xl text-white mb-3`}
        >
          Showcase
        </h1>
        <p className={`${ral.className} text-lg text-gray-400`}>
          Experiments, prototypes, and creative technology projects.
        </p>
      </div>

      {/* Grid */}
      <div className="px-6 md:px-12 lg:px-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, pi) => (
            <button
              key={pi}
              onClick={() => openLightbox(pi, 0)}
              className="group relative aspect-[4/3] bg-gray-900 rounded-lg overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <Image
                src={project.images[0]}
                alt={`${project.title} screenshot`}
                fill
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className={`${aldrich.className} text-white text-sm`}>
                  {project.title}
                </p>
                <div className="flex gap-2 mt-1 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`${ral.className} text-xs text-gray-400 bg-white/10 px-2 py-0.5 rounded`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && currentProject && (
        <div
          className="fixed inset-0 z-[10000] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
            aria-label="Close"
          >
            <X size={28} />
          </button>

          {currentProject.images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 md:left-8 text-white/40 hover:text-white transition-colors z-10"
                aria-label="Previous image"
              >
                <ChevronLeft size={36} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 md:right-8 text-white/40 hover:text-white transition-colors z-10"
                aria-label="Next image"
              >
                <ChevronRight size={36} />
              </button>
            </>
          )}

          <div
            className="max-w-5xl w-full mx-4 md:mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-4">
              <Image
                src={currentProject.images[lightbox.imageIndex]}
                alt={`${currentProject.title} screenshot`}
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center">
              <h3 className={`${aldrich.className} text-xl text-white mb-2`}>
                {currentProject.title}
              </h3>
              <p
                className={`${ral.className} text-gray-400 text-sm max-w-xl mx-auto mb-3`}
              >
                {currentProject.description}
              </p>
              <div className="flex gap-2 justify-center flex-wrap">
                {currentProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`${ral.className} text-xs text-gray-400 bg-white/10 px-2 py-0.5 rounded`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {currentProject.images.length > 1 && (
                <p className={`${ral.className} text-xs text-gray-600 mt-3`}>
                  {lightbox.imageIndex + 1} / {currentProject.images.length}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
