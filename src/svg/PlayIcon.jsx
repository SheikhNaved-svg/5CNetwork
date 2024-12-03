
import React from "react";

const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    aria-hidden="true" // Add this for accessibility if it's decorative
  >
    <g filter="url(#filter0_d_66_2519)">
      <circle cx="18" cy="16" r="16" fill="#F1F3F9" />
    </g>
    <path d="M14.3901 22.6665V9.33321L24.8663 15.9999L14.3901 22.6665Z" fill="black" />
    <defs>
      <filter
        id="filter0_d_66_2519"
        x="0.171429"
        y="0"
        width="35.6571"
        height="35.6571"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1.82857" />
        <feGaussianBlur stdDeviation="0.914286" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_66_2519"
        />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_66_2519" result="shape" />
      </filter>
    </defs>
  </svg>
);

export default PlayIcon;
