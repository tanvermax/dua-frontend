"use client"

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';


export default function Endbar() {


  const [arabicFontSize, setArabicFontSize] = useState(28);
  const [translationFontSize, setTranslationFontSize] = useState(28);
  const [fontFace, setFontFace] = useState("Uthma");
  const [openView, setOpenView] = useState(false);
  const [openAppearance, setOpenAppearance] = useState(false);


  return (
    <div className="bg-[#f8fcf9] min-h-screen p-6 ">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-xl  p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-green-100 p-2 rounded-full">
              <span className="text-green-700 text-xl font-bold">

                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.49255 4.4475V3.315C1.49255 2.55 2.11505 1.9275 2.88005 1.9275H12.5701C13.3351 1.9275 13.9576 2.55 13.9576 3.315V4.4475" stroke="#417360" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M7.72498 13.575V2.49" stroke="#417360" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M5.17505 13.575H9.36005" stroke="#417360" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <g opacity="0.4">
                    <path d="M10.2598 7.75488H15.5173C16.0648 7.75488 16.5073 8.19738 16.5073 8.74488V9.34488" stroke="#417360" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12.0601 16.0726V8.15259" stroke="#417360" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10.4546 16.0723H13.6646" stroke="#417360" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                </svg>

              </span>
            </div>
            <h2 className="text-green-700 font-semibold text-lg">Font Settings</h2>
          </div>

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
                  background:
                    arabicFontSize > 10
                      ? `linear-gradient(to right, #417360 ${(arabicFontSize - 10) * 100 / (48 - 10)}%, #e5e7eb ${(arabicFontSize - 10) * 100 / (48 - 10)}%)`
                      : "#e5e7eb"
                }}
              />

              <span className="w-6 text-right">{arabicFontSize}</span>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Translation Font Size</label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="10"
                max="48"
                value={translationFontSize}
                onChange={(e) => setTranslationFontSize(parseInt(e.target.value))}
                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer
    [&::-webkit-slider-thumb]:appearance-none 
    [&::-webkit-slider-thumb]:h-4 
    [&::-webkit-slider-thumb]:w-4 
    [&::-webkit-slider-thumb]:rounded-full 
    [&::-webkit-slider-thumb]:bg-[#417360]"
                style={{
                  background: `linear-gradient(to right, #417360 ${(translationFontSize - 10) * 100 / (48 - 10)}%, #e5e7eb ${(translationFontSize - 10) * 100 / (48 - 10)}%)`
                }}
              />



              <span className="w-6 text-right">{translationFontSize}</span>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">
              Arabic Script &amp; Font Face
            </label>
            <div className="bg-green-50 px-4 py-2 rounded-lg cursor-pointer flex justify-between items-center">
              <span>{fontFace}</span>
              <ChevronDown size={18} />
            </div>
          </div>

          <div
            className="flex items-center gap-2 cursor-pointer mb-4"
            onClick={() => setOpenView(!openView)}
          >
            <div className="bg-green-100 p-2 rounded-full">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12.8249 1.5H9.67495C7.08745 1.5 6.03745 2.5275 6.00745 5.0625H8.32495C11.4749 5.0625 12.9374 6.525 12.9374 9.675V11.9925C15.4724 11.9625 16.4999 10.9125 16.4999 8.325V5.175C16.4999 2.55 15.4499 1.5 12.8249 1.5Z" fill="#709484"/>
<path d="M8.325 6H5.175C2.55 6 1.5 7.05 1.5 9.675V12.825C1.5 15.45 2.55 16.5 5.175 16.5H8.325C10.95 16.5 12 15.45 12 12.825V9.675C12 7.05 10.95 6 8.325 6ZM9.2175 10.2375L6.435 13.02C6.33 13.125 6.195 13.1775 6.0525 13.1775C5.91 13.1775 5.775 13.125 5.67 13.02L4.275 11.625C4.065 11.415 4.065 11.0775 4.275 10.8675C4.485 10.6575 4.8225 10.6575 5.0325 10.8675L6.045 11.88L8.4525 9.4725C8.6625 9.2625 9 9.2625 9.21 9.4725C9.42 9.6825 9.4275 10.0275 9.2175 10.2375Z" fill="#709484"/>
</svg>

            </div>
            <span className="text-gray-800 font-medium">View Settings</span>
            {openView ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>

          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setOpenAppearance(!openAppearance)}
          >
            <div className="">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="1" width="32" height="32" rx="16" fill="#D8E7D3"/>
<rect x="1" y="1" width="32" height="32" rx="16" stroke="#E1EBE1" stroke-width="2"/>
<path opacity="0.4" d="M24.5 20.375V22.625C24.5 23.75 23.75 24.5 22.625 24.5H12.5C12.8075 24.5 13.1225 24.455 13.415 24.3575C13.4975 24.3275 13.58 24.2975 13.6625 24.26C13.925 24.155 14.18 24.005 14.405 23.81C14.4725 23.7575 14.5475 23.69 14.615 23.6225L14.645 23.5925L19.745 18.5H22.625C23.75 18.5 24.5 19.25 24.5 20.375Z" fill="#709484"/>
<path opacity="0.6" d="M21.7775 16.4675L19.745 18.5L14.645 23.5925C15.17 23.0525 15.5 22.31 15.5 21.5V14.255L17.5325 12.2225C18.3275 11.4275 19.3925 11.4275 20.1875 12.2225L21.7775 13.8125C22.5725 14.6075 22.5725 15.6725 21.7775 16.4675Z" fill="#709484"/>
<path d="M13.625 9.5H11.375C10.25 9.5 9.5 10.25 9.5 11.375V21.5C9.5 21.7025 9.52249 21.905 9.55999 22.1C9.58249 22.1975 9.60499 22.295 9.63499 22.3925C9.67249 22.505 9.71 22.6175 9.755 22.7225C9.7625 22.73 9.7625 22.7375 9.7625 22.7375C9.77 22.7375 9.77 22.7375 9.7625 22.745C9.8675 22.955 9.9875 23.1575 10.13 23.345C10.2125 23.4425 10.295 23.5325 10.3775 23.6225C10.46 23.7125 10.55 23.7875 10.6475 23.8625L10.655 23.87C10.8425 24.0125 11.045 24.1325 11.255 24.2375C11.2625 24.23 11.2625 24.23 11.2625 24.2375C11.375 24.29 11.4875 24.3275 11.6075 24.365C11.705 24.395 11.8025 24.4175 11.9 24.44C12.095 24.4775 12.2975 24.5 12.5 24.5C12.8075 24.5 13.1225 24.455 13.415 24.3575C13.4975 24.3275 13.58 24.2975 13.6625 24.26C13.925 24.155 14.18 24.005 14.405 23.81C14.4725 23.7575 14.5475 23.69 14.615 23.6225L14.645 23.5925C15.17 23.0525 15.5 22.31 15.5 21.5V11.375C15.5 10.25 14.75 9.5 13.625 9.5ZM12.5 22.625C11.8775 22.625 11.375 22.1225 11.375 21.5C11.375 20.8775 11.8775 20.375 12.5 20.375C13.1225 20.375 13.625 20.8775 13.625 21.5C13.625 22.1225 13.1225 22.625 12.5 22.625Z" fill="#709484"/>
</svg>

            </div>
            <span className="text-gray-800 font-medium">Appearance Settings</span>
            {openAppearance ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>
        </div>
      </div>
    </div>
  )
}
