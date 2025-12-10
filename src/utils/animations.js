/**
 * Centralized animation variants and configurations for Framer Motion
 *
 * These utilities provide consistent, reusable animations across the site.
 * All animations use GPU-accelerated properties (transform, opacity) for best performance.
 */

/**
 * Standard fade-in-up animation
 * Elements start slightly below and fade in as they slide up
 */
export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 60
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // Smooth cubic-bezier easing
    }
  }
};

/**
 * Simple fade-in animation
 * Elements fade in without position change
 */
export const fadeIn = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

/**
 * Fade-in with scale animation
 * Elements start slightly smaller and scale up while fading in
 */
export const fadeInScale = {
  hidden: {
    opacity: 0,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

/**
 * Stagger container for animating multiple children sequentially
 * Use this as the parent variant, with children having their own animations
 */
export const staggerContainer = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each child animation
      delayChildren: 0.1     // Initial delay before children start
    }
  }
};

/**
 * Viewport configuration for scroll-triggered animations
 * Optimized for performance and user experience
 */
export const scrollViewport = {
  once: true,  // Only animate once when element enters viewport
  margin: "0px 0px -100px 0px",  // Trigger slightly before element is visible
  amount: 0.3  // Element must be 30% visible before triggering
};

/**
 * Alternative viewport for animations that should trigger earlier
 */
export const scrollViewportEarly = {
  once: true,
  margin: "0px 0px -200px 0px",  // Trigger earlier
  amount: 0.2
};
