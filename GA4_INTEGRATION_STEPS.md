# GA4 Integration Guide - Step by Step

This guide explains how Google Analytics 4 (GA4) has been integrated directly using `gtag.js` (without Google Tag Manager) for button tracking.

## ✅ What Has Been Done

### 1. **GA4 Script Initialization** (`src/pages/_app.js`)
   - Added Next.js `Script` component to load GA4
   - Initialized `gtag` function and dataLayer
   - Configured automatic page view tracking
   - Added route change tracking

### 2. **GTM Utility Functions** (`src/utils/gtag.js`)
   - Created `trackEvent()` - Generic event tracking function
   - Created `trackButtonClick()` - Specific function for button clicks
   - Created `trackFormSubmit()` - Specific function for form submissions
   - All functions include error handling and development logging

### 3. **Button Tracking Examples**
   - **StackedBanner** component - Tracks banner button clicks
   - **CTA** component - Tracks CTA section button clicks
   - **BookFreeDemoForm** component - Tracks form submissions

## 📋 Step-by-Step Setup Instructions

### Step 1: Get Your GA4 Measurement ID
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a GA4 property (if you don't have one)
3. Get your Measurement ID (format: `G-XXXXXXXXXX`)

### Step 2: Add GA4 ID to Environment Variables
Create or update your `.env.local` file:
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```
Replace `G-XXXXXXXXXX` with your actual GA4 Measurement ID.

### Step 3: Verify Integration
1. Start your development server: `npm run dev`
2. Open your browser's Developer Tools (F12)
3. Go to the Console tab
4. Click any button that has tracking
5. You should see: `GA4 Event tracked: button_click {...}`
6. Check the Network tab for requests to `google-analytics.com`

### Step 4: Test in GA4
1. Go to your GA4 dashboard
2. Navigate to **Reports** > **Engagement** > **Events**
3. You should see `button_click` and `form_submit` events appearing

## 🔧 How to Add Tracking to Other Buttons

### For Regular Buttons:
```javascript
import { trackButtonClick } from "@/utils/gtag";

const handleClick = () => {
  trackButtonClick({
    button_name: "Your Button Text",
    button_location: "section_name", // e.g., "header", "footer", "banner"
    button_url: "/your-link", // optional
    button_type: "primary", // optional: "primary", "secondary", "outline", etc.
  });
  
  // Your existing button logic here
};

<button onClick={handleClick}>Your Button</button>
```

### For Form Submissions:
```javascript
import { trackFormSubmit } from "@/utils/gtag";

const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Your form submission logic...
  
  // Track after successful submission
  trackFormSubmit({
    form_name: "Contact Form",
    form_location: "contact_page",
  });
};
```

### For Custom Events:
```javascript
import { trackEvent } from "@/utils/gtag";

trackEvent("custom_event_name", {
  custom_parameter_1: "value1",
  custom_parameter_2: "value2",
});
```

## 📊 Event Parameters

### Button Click Events
- `button_name` - The text/name of the button
- `button_location` - Where the button is located (e.g., "banner", "cta", "footer")
- `button_url` - The URL the button links to (optional)
- `button_type` - The button style/type (optional)

### Form Submit Events
- `form_name` - Name of the form
- `form_location` - Where the form is located
- `form_data` - Additional form data (optional object)

## 🎯 Current Implementation Examples

### Example 1: StackedBanner Component
```javascript
// Location: src/components/NewComps/Banner/StackedBanner/index.js
trackButtonClick({
  button_name: button.text,
  button_location: "stacked_banner",
  button_url: button.link,
  button_type: index === 0 ? "primary" : "primary-outline",
});
```

### Example 2: CTA Component
```javascript
// Location: src/components/NewComps/CTA/index.js
trackButtonClick({
  button_name: button.text,
  button_location: "cta_section",
  button_url: button.link,
  button_type: button?.type || "default",
});
```

### Example 3: Form Submission
```javascript
// Location: src/components/NewComps/BookFreeDemoForm/index.js
trackFormSubmit({
  form_name: "Book Free Demo Form",
  form_location: location || "default",
  form_data: {
    has_name: !!formData.name,
    has_email: !!formData.email,
    has_phone: !!formData.phone,
    has_business: !!formData.business,
  },
});
```

## 🔍 Debugging

### Check if GA4 is Loaded
Open browser console and type:
```javascript
typeof window.gtag
// Should return: "function"
```

### Check if Events are Being Sent
1. Open Developer Tools > Network tab
2. Filter by "collect" or "google-analytics"
3. Click a tracked button
4. You should see a request to `google-analytics.com/g/collect`

### View Events in Real-Time
1. Go to GA4 dashboard
2. Navigate to **Reports** > **Realtime**
3. Click buttons on your site
4. Events should appear within seconds

## ⚠️ Important Notes

1. **Environment Variable**: Make sure to set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in your environment variables
2. **Development Mode**: In development, events are logged to console but still sent to GA4
3. **Page Views**: Page views are automatically tracked on route changes
4. **No GTM Required**: This implementation uses GA4 directly, not Google Tag Manager

## 🚀 Next Steps

1. Replace `G-XXXXXXXXXX` with your actual GA4 Measurement ID
2. Add tracking to other buttons throughout your application
3. Set up custom events in GA4 dashboard for better reporting
4. Create custom reports and dashboards in GA4

## 📚 Additional Resources

- [GA4 Event Documentation](https://developers.google.com/analytics/devguides/collection/ga4/events)
- [Next.js Script Component](https://nextjs.org/docs/pages/api-reference/components/script)
- [GA4 DebugView](https://support.google.com/analytics/answer/7201382)

