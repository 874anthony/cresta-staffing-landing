import { useEffect } from "react";
import { useSwipeable } from "react-swipeable";

export function useCarousel({
  currentSlide,
  setCurrentSlide,
  slidesLength,
  autoPlay = true,
  autoPlayInterval = 5000,
}) {
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentSlide < slidesLength - 1) {
        setCurrentSlide(currentSlide + 1);
      }
    },
    onSwipedRight: () => {
      if (currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    },

    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // optional: allows swipe detection with a mouse
  });

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || slidesLength === 0) return; // If autoPlay is disabled or if there are no slides, do nothing

    const interval = setInterval(() => {
      setCurrentSlide(
        (prevSlide) => (prevSlide < slidesLength - 1 ? prevSlide + 1 : 0) // Loop back to start
      );
    }, autoPlayInterval); // change every 5 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [slidesLength, autoPlayInterval, slidesLength, setCurrentSlide]); // re-run only if slides length changes

  return { swipeHandlers };
}
