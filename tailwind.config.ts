import type { Config } from "tailwindcss";
import fontFamily from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        md: "1.6875rem",
        lg: "2rem",
        xl: "8rem",
      },
    },
    screens: {
      sm: "375px",
      "2sm": "600px",
      md: "744px",
      cmd: "805px",
      "2md": "834px",
      lg: "1024px",
      "2lg": "1280px",
      "3lg": "1340px",
      xl: "1440px",
      "2xl": "1640px",
    },
    fontFamily: {
      poppins: ["var(--font-poppins)", ...fontFamily.fontFamily.sans],
      manrope: ["var(--font-manrope)", ...fontFamily.fontFamily.sans],
      montserrat: ["var(--font-montserrat)", ...fontFamily.fontFamily.sans],
      barlow: ["var(--font-barlow)", ...fontFamily.fontFamily.sans],
    },
    extend: {
      boxShadow: {
        card: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.3)",
        coverageMap: "6px -3px 33px 0px rgba(255, 79, 8, 0.7)",
        brisaclientApp: "drop-shadow(0px 0px 10px rgba(255, 79, 8, 0.30))",
        bottomHeader: "0px 1px 3px 1px #00000026, 0px 1px 2px 0px #0000004D",
      },
      borderRadius: {
        "ellipse-top": "0 0 100px 100px",
        "ellipse-bottom": "100px 100px 0 0",
        "ellipse-left": "0 200px 200px 0",
        "ellipse-right": "200px 0 0 200px",
      },
      backgroundColor: {
        "ellipse-color": "#F0F0F4",
      },
      backgroundImage: {
        iconsGradient:
          "linear-gradient(299.63deg, #FF4800 19.14%, #FFA31A 117.12%)",
        frameMobile: "url(/redemovel/backgrounds/frameMobile.png)",
        frameTablet: "url(/redemovel/backgrounds/frameTablet.png)",
        frameDesktop: "url(/redemovel/backgrounds/frameDesktop.png)",
        location:
          "linear-gradient(45deg, rgb(0, 52, 159) 0%, rgb(13, 172, 220) 101%)",
        banner: "url(/redemovel/backgrounds/bg-banner.png)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeIn: "fadeIn 0.2s ease-in-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
