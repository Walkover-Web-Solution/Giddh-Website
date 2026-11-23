export function normalizeMobile(mobile) {
  const digits = String(mobile).replace(/\D/g, "");
  return digits.slice(-10);
}

export function isValidMobile(mobile) {
  return /^[6-9]\d{9}$/.test(normalizeMobile(mobile));
}
