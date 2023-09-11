import { useEffect } from "react";

function useSmoothScrollToTop(): void {
  useEffect(() => {
    function scrollToTop(event: MouseEvent): void {
      event.preventDefault();

      const startPosition: number = window.scrollY;
      const targetPosition: number = 0;
      const distance: number = targetPosition - startPosition;

      const duration: number = 800;
      const startTime: number = performance.now();

      function animation(currentTime: number): void {
        const timeElapsed: number = currentTime - startTime;
        const progress: number = Math.min(timeElapsed / duration, 1);

        const easing: number = easeInOutCubic(progress);

        const newPosition: number = startPosition + distance * easing;

        window.scrollTo(0, newPosition);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }

      requestAnimationFrame(animation);
    }

    const scrollToTopLink: HTMLElement | null =
      document.getElementById("scrollToTop");
    if (scrollToTopLink) {
      scrollToTopLink.addEventListener("click", scrollToTop);

      return () => {
        scrollToTopLink.removeEventListener("click", scrollToTop);
      };
    }
  }, []);

  // Easing function (optional)
  function easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }
}

export default useSmoothScrollToTop;
