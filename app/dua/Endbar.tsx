"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function Endbar() {
  const [arabicFontSize, setArabicFontSize] = useState(28);
  const [translationFontSize, setTranslationFontSize] = useState(28);
  const [fontFace, setFontFace] = useState("Uthma");
  const [openView, setOpenView] = useState(false);
  const [openAppearance, setOpenAppearance] = useState(false);
  const [showFontDropdown, setShowFontDropdown] = useState(false);

  const fontOptions = ["Uthma", "Me Quran", "Amiri", "KFGQ"];

  return (
    <div className="bg-[#f8fcf9] min-h-screen p-6">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-xl p-6">
          {/* Header */}
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-green-100 p-2 rounded-full">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.49255 4.4475V3.315C1.49255 2.55 2.11505 1.9275 2.88005 1.9275H12.5701C13.3351 1.9275 13.9576 2.55 13.9576 3.315V4.4475"
                  stroke="#417360"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.72498 13.575V2.49"
                  stroke="#417360"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.17505 13.575H9.36005"
                  stroke="#417360"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g opacity="0.4">
                  <path
                    d="M10.2598 7.75488H15.5173C16.0648 7.75488 16.5073 8.19738 16.5073 8.74488V9.34488"
                    stroke="#417360"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.0601 16.0726V8.15259"
                    stroke="#417360"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.4546 16.0723H13.6646"
                    stroke="#417360"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>
            <h2 className="text-green-700 font-semibold text-lg">
              Font Settings
            </h2>
          </div>

          {/* Arabic Font Size */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Arabic Font Size</label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="10"
                max="48"
                value={arabicFontSize}
                onChange={(e) => setArabicFontSize(parseInt(e.target.value))}
                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#417360]"
                style={{
                  background: `linear-gradient(to right, #417360 ${
                    ((arabicFontSize - 10) * 100) / (48 - 10)
                  }%, #e5e7eb ${
                    ((arabicFontSize - 10) * 100) / (48 - 10)
                  }%)`,
                }}
              />
              <span className="w-6 text-right">{arabicFontSize}</span>
            </div>
          </div>

          {/* Translation Font Size */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">
              Translation Font Size
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="10"
                max="48"
                value={translationFontSize}
                onChange={(e) => setTranslationFontSize(parseInt(e.target.value))}
                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#417360]"
                style={{
                  background: `linear-gradient(to right, #417360 ${
                    ((translationFontSize - 10) * 100) / (48 - 10)
                  }%, #e5e7eb ${
                    ((translationFontSize - 10) * 100) / (48 - 10)
                  }%)`,
                }}
              />
              <span className="w-6 text-right">{translationFontSize}</span>
            </div>
          </div>

          {/* Arabic Font Face Dropdown */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">
              Arabic Script & Font Face
            </label>
            <div
              className="bg-green-50 px-4 py-2 rounded-lg cursor-pointer flex justify-between items-center relative"
              onClick={() => setShowFontDropdown(!showFontDropdown)}
            >
              <span>{fontFace}</span>
              {showFontDropdown ? <ChevronUp size={18} /> : <ChevronDown size={18} />}

              {showFontDropdown && (
                <div className="absolute top-full left-0 w-full mt-2 bg-white border rounded shadow z-10">
                  {fontOptions.map((font) => (
                    <div
                      key={font}
                      onClick={() => {
                        setFontFace(font);
                        setShowFontDropdown(false);
                      }}
                      className={`px-4 py-2 hover:bg-green-100 cursor-pointer ${
                        fontFace === font ? "font-semibold text-green-700" : ""
                      }`}
                    >
                      {font}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* View Settings Toggle */}
          <div
            className="flex items-center gap-2 cursor-pointer mb-4"
            onClick={() => setOpenView(!openView)}
          >
            <div className="bg-green-100 p-2 rounded-full">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M12.8249 1.5H9.67495C7.08745 1.5 6.03745 2.5275 6.00745 5.0625H8.32495C11.4749 5.0625 12.9374 6.525 12.9374 9.675V11.9925C15.4724 11.9625 16.4999 10.9125 16.4999 8.325V5.175C16.4999 2.55 15.4499 1.5 12.8249 1.5Z"
                  fill="#709484"
                />
                <path
                  d="M8.325 6H5.175C2.55 6 1.5 7.05 1.5 9.675V12.825C1.5 15.45 2.55 16.5 5.175 16.5H8.325C10.95 16.5 12 15.45 12 12.825V9.675C12 7.05 10.95 6 8.325 6ZM9.2175 10.2375L6.435 13.02C6.33 13.125 6.195 13.1775 6.0525 13.1775C5.91 13.1775 5.775 13.125 5.67 13.02L4.275 11.625C4.065 11.415 4.065 11.0775 4.275 10.8675C4.485 10.6575 4.8225 10.6575 5.0325 10.8675L6.045 11.88L8.4525 9.4725C8.6625 9.2625 9 9.2625 9.21 9.4725C9.42 9.6825 9.4275 10.0275 9.2175 10.2375Z"
                  fill="#709484"
                />
              </svg>
            </div>
            <span className="text-gray-800 font-medium">View Settings</span>
            {openView ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>

          {openView && (
            <div className="pl-8 pb-4 text-sm text-gray-600">
              View-related settings will go here...
            </div>
          )}

          {/* Appearance Settings Toggle */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setOpenAppearance(!openAppearance)}
          >
            <div className="bg-green-100 p-2 rounded-full">
              {/* Your custom SVG or icon */}
              <ChevronDown size={18} />
            </div>
            <span className="text-gray-800 font-medium">Appearance Settings</span>
            {openAppearance ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>

          {openAppearance && (
            <div className="pl-8 pt-2 text-sm text-gray-600">
              Appearance-related settings will go here...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
