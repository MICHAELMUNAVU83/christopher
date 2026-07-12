// Shared Tailwind config for the LovelyActs pages (index.html + project.html).
// Loaded via the Play CDN: this must be included AFTER
// <script src="https://cdn.tailwindcss.com"></script> so `tailwind` exists.
tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: "#4294d5", // sky blue — primary CTA / accent
        brandhover: "#2f77b3", // deeper sky — button hover
        ink: "#12324d", // navy — headings & dark sections
        beige: "#dbebf6", // hero background — light sky
        cream: "#f3f8fc", // very light blue-white
        smoke: "#eef4fa", // light blue-gray sections
        sage: "#a9cbe6", // muted sky accent
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: { container: "1240px" },
    },
  },
};
