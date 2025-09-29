import { useState, useEffect } from 'react';

/**
 * Custom hook for managing auto-advance image slideshow with dynamic detection
 * @param section - The section name (students, alumni, industry, inside-cie)
 * @param intervalMs - Interval between slides in milliseconds (default: 3000)
 * @returns current image data and slideshow controls
 */
export const useImageSlideshow = (section: string, intervalMs: number = 3000) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Dynamic JPG image detection with no hardcoded limits
  useEffect(() => {
    const detectImages = async () => {
      const detectedImages: string[] = [];
      
      // Start checking from index 1 and continue until no more images found
      let imageIndex = 1;
      let consecutiveFailures = 0;
      const maxConsecutiveFailures = 1; // Stop after 2 consecutive missing images
      
      while (consecutiveFailures < maxConsecutiveFailures && imageIndex <= 100) {
        const imagePath = `/assets/${section}/${section}_${imageIndex}.jpg`;
        
        try {
          const imageExists = await new Promise<boolean>((resolve) => {
            const testImage = new Image();
            const timeout = setTimeout(() => resolve(false), 1500); // 1.5s timeout
            
            const cleanup = () => clearTimeout(timeout);
            
            testImage.onload = () => {
              cleanup();
              resolve(true);
            };
            testImage.onerror = () => {
              cleanup();
              resolve(false);
            };
            testImage.src = imagePath;
          });
          
          if (imageExists) {
            detectedImages.push(imagePath);
            consecutiveFailures = 0; // Reset failure counter
          } else {
            consecutiveFailures++;
          }
        } catch {
          consecutiveFailures++;
        }
        
        imageIndex++;
      }
      
      console.log(`Detected ${detectedImages.length} JPG images for ${section}:`, detectedImages);
      setImages(detectedImages);
      setIsLoading(false);
    };

    detectImages();
  }, [section]);

  // Auto-advance slideshow every 3 seconds
  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
    }, intervalMs);

    return () => clearInterval(interval);
  }, [images.length, intervalMs]);

  // Manual controls (still available if needed)
  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    if (index >= 0 && index < images.length) {
      setCurrentImageIndex(index);
    }
  };

  return {
    currentImage: images[currentImageIndex],
    currentImageIndex,
    totalImages: images.length,
    isLoading,
    goToNext,
    goToPrevious,
    goToSlide,
    allImages: images
  };
};