import React from 'react'

export default function Breadcrumbs() {
  return (
    <div className='border-b-[1px] border-[#E1EBE1] bg-[#E1EBE1] p-3 flex justify-between items-center'>

      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <a>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" d="M7.55252 2.11501L2.35502 6.2775C1.77002 6.7425 1.39502 7.725 1.52252 8.46L2.52002 14.43C2.70002 15.495 3.72001 16.3575 4.80001 16.3575H13.2C14.2725 16.3575 15.3 15.4875 15.48 14.43L16.4775 8.46C16.5975 7.725 16.2225 6.7425 15.645 6.2775L10.4475 2.12249C9.64501 1.47749 8.34752 1.47751 7.55252 2.11501Z" fill="#417360" />
                <path d="M9 11.625C10.0355 11.625 10.875 10.7855 10.875 9.75C10.875 8.71447 10.0355 7.875 9 7.875C7.96447 7.875 7.125 8.71447 7.125 9.75C7.125 10.7855 7.96447 11.625 9 11.625Z" fill="#417360" />
              </svg>

              Home

            </a>
          </li>
          <li>
            <a>

            Dua&apos;s Importance 

            </a>
          </li>
          <li className='text-gray-400'>

          The servant is dependent...

          </li>
        </ul>
      </div>
      
      
    </div>
  )
}
