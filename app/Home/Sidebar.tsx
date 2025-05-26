
"use client"
// import React, { useEffect, useState } from 'react'



import Dualist from './Dualist';

export default function Sidebar() {
    
    

    return (
        <div className='p-5 overflow-y-scroll max-h-screen   relative'>
            <div>
                <span className='absolute top-10 z-10 left-10 transform -translate-y-1/2'>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z" stroke="#7C827D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16.5 16.5L15 15" stroke="#7C827D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
                <input type="text" placeholder="Search by Dua Categories" className="input text-black text-[14px] border-[1px] border-[#E1EBE1] rounded-full bg-[#E1EBE166] px-12" />
            </div>
            <div className=''>
            <Dualist></Dualist>
            </div>
           
        </div>
    );
}
