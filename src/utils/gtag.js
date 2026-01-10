/**
 * Google Analytics 4 (GA4) Utility Functions
 * 
 * This utility provides functions to track events using gtag.js directly
 * (without Google Tag Manager).
 * 
 * Usage:
 * import { trackButtonClick, trackEvent } from '@/utils/gtag';
 * 
 * trackButtonClick({
 *   button_name: 'Book Free Demo',
 *   button_location: 'banner',
 *   button_url: '/signup'
 * });
 */

/**
 * Check if gtag is available
 */
const isGtagAvailable = () => {
  return typeof window !== "undefined" && typeof window.gtag === "function";
};

/**
 * Track a custom event in GA4
 * @param {string} eventName - The name of the event
 * @param {Object} eventParams - Additional event parameters
 * 
 * @example
 * trackEvent('button_click', {
 *   button_name: 'Book Free Demo',
 *   button_location: 'banner'
 * });
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (isGtagAvailable()) {
    try {
      window.gtag("event", eventName, eventParams);
      if (process.env.NODE_ENV === "development") {
        console.log("GA4 Event tracked:", eventName, eventParams);
      }
    } catch (error) {
      console.error("Error tracking GA4 event:", error);
    }
  } else {
    if (process.env.NODE_ENV === "development") {
      console.warn("gtag not available. Event not tracked:", eventName, eventParams);
    }
  }
};

/**
 * Track button click events
 * @param {Object} options - Button tracking options
 * @param {string} options.button_name - Name/text of the button
 * @param {string} options.button_location - Location of the button (e.g., 'banner', 'cta', 'footer')
 * @param {string} options.button_url - URL the button links to (optional)
 * @param {string} options.button_type - Type of button (e.g., 'primary', 'secondary', 'outline')
 * @param {Object} options.additionalParams - Any additional custom parameters
 * 
 * @example
 * trackButtonClick({
 *   button_name: 'Book Free Demo',
 *   button_location: 'banner',
 *   button_url: '/signup',
 *   button_type: 'primary'
 * });
 */
export const trackButtonClick = ({
  button_name,
  button_location,
  button_url = "",
  button_type = "",
  additionalParams = {},
}) => {
  trackEvent("button_click", {
    button_name,
    button_location,
    button_url,
    button_type,
    ...additionalParams,
  });
};

/**
 * Track form submission events
 * @param {Object} options - Form tracking options
 * @param {string} options.form_name - Name of the form
 * @param {string} options.form_location - Location of the form
 * @param {Object} options.additionalParams - Any additional custom parameters
 * 
 * @example
 * trackFormSubmit({
 *   form_name: 'Book Free Demo Form',
 *   form_location: 'banner'
 * });
 */
export const trackFormSubmit = ({
  form_name,
  form_location,
  additionalParams = {},
}) => {
  trackEvent("form_submit", {
    form_name,
    form_location,
    ...additionalParams,
  });
};

/**
 * Create an onClick handler for anchor tags wrapping buttons
 * This is specifically for JSON-based button architecture in NewComps
 * @param {Object} button - Button object from JSON (has text, link, type, etc.)
 * @param {string} componentLocation - Location/name of the component (e.g., 'stacked_banner', 'cta_section')
 * @param {number} index - Index of the button (for determining button type)
 * @param {Function} additionalHandler - Optional additional handler to call after tracking
 * @returns {Function} onClick handler function
 * 
 * @example 
 * <a href={button.link} onClick={handleAnchorClick(button, 'stacked_banner', index)}>
 *   <button>{button.text}</button>
 * </a>
 */
export const handleAnchorClick = (button, componentLocation, index = 0, additionalHandler = null) => {
  return (e) => {
    // Track the click
    trackButtonClick({
      button_name: button.text || button.button_name || "",
      button_location: componentLocation,
      button_url: button.link || button.href || "",
      button_type: button.type || (index === 0 ? "primary" : "primary-outline"),
    });

    // Call additional handler if provided (e.g., scroll behavior)
    if (additionalHandler && typeof additionalHandler === "function") {
      additionalHandler(e);
    }
  };
};

