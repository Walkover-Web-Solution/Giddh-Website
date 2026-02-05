/**
 * Formats a number into a locale-specific string based on currency.
 *
 * - INR → Indian numbering system (e.g., 1,23,456)
 * - Other currencies → US numbering system (e.g., 123,456)
 *
 * @param {number | string} number - The numeric value to be formatted.
 * @param {string} currency - Currency code (e.g., 'INR', 'USD').
 * @returns {string} Locale-formatted number string.
 */
export default function contvertToLocal(number, currency) {
    if (currency === "INR") {
      return Number(number).toLocaleString("en-IN");
    } else {
      return Number(number).toLocaleString("en-US");
    }
  }
  