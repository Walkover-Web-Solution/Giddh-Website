/**
 * Embarko app `giddh-contact`.
 * After `contact.giddh.com` is verified in Embarko, set
 * `NEXT_PUBLIC_GIDDH_CONTACT_SALES_URL=https://contact.giddh.com` on the website host.
 */
export const GIDDH_CONTACT_SALES_URL =
  process.env.NEXT_PUBLIC_GIDDH_CONTACT_SALES_URL || "https://giddh-contact.embarko.app";