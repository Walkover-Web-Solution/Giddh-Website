# Contact sales form (Embarko)

Marketing pages open the Embarko app **`giddh-contact`** in the same right-hand slider used previously for Typeform.

| Setting | Value |
| --- | --- |
| Embarko app URL | `https://giddh-contact.embarko.app` |
| Production custom domain (target) | `https://contact.giddh.com` |
| Code constant | `src/constants/contactSales.js` (defaults to Embarko URL until env is set) |
| Override at deploy | `NEXT_PUBLIC_GIDDH_CONTACT_SALES_URL` — set to `https://contact.giddh.com` after DNS verify |

## Custom domain (Embarko)

Follow [Embarko custom domain](https://embarko.ai/docs/custom-domain.md):

1. In Embarko, register **`contact.giddh.com`** for app **`giddh-contact`** and copy the DNS record from the instructions.
2. Add that record at the Giddh DNS provider.
3. Verify in Embarko when DNS has propagated.
4. Confirm `https://contact.giddh.com` loads the form, then set `NEXT_PUBLIC_GIDDH_CONTACT_SALES_URL=https://contact.giddh.com` on the website host and redeploy.

Until step 4, the site uses `https://giddh-contact.embarko.app` (no env var required).

## UTM parameters

`openContactSalesForm` forwards UTM and ref values from cookies, local storage, and the current page query string to the iframe URL.