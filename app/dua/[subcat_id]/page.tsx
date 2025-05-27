"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

interface DuaResponse {
  id: number;
  cat_id: number;
  subcat_id: number;
  dua_id: number;
  dua_name_en: string;
  dua_name_bn: string;
  top_en: string;
  top_bn: string;
  refference_en: string;
  refference_bn: string;
  audio: string | null;
  bottom_bn: string | null;
  bottom_en: string | null;
  clean_arabic: string | null;
  dua_arabic: string | null;
  dua_indopak: string | null;
  translation_bn: string | null;
  translation_en: string | null;
  transliteration_bn: string | null;
  transliteration_en: string | null;
}

export default function SubCategoryPage() {
  const [duas, setDuas] = useState<DuaResponse[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const subcat_id = params?.subcat_id as string;

  useEffect(() => {
    if (!subcat_id) return;

    const fetchDuas = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://dua-backend-wfmz.onrender.com/api/dua/subcat/${subcat_id}`
        );
        setDuas(response.data);
      } catch (err) {
        console.error("Error fetching duas:", err);
        setError("Failed to load duas. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchDuas();
  }, [subcat_id]);

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-red-500 text-center p-4">{error}</div>;

  return (
    <section className="bg-[#EEF6EB] min-h-screen">
      
      <div className="p-4">
        {duas.length === 0 ? (
          <p className="text-center">No duas found for this subcategory.</p>
        ) : (
          <div className="grid gap-4">
             {duas.map((duaData, index) => (
                <div key={`${duaData.dua_id}-${index}`} className="border-b-2 border-[#EEF6EB]">


                    <h2 className="text-green-800 font-semibold text-lg mb-2 flex gap-2 py-10">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.6">
                                <path d="M12.6961 1.45646C13.3917 0.67945 14.6083 0.679449 15.3039 1.45646L17.4037 3.8021C17.7582 4.1981 18.2735 4.41153 18.8042 4.38219L21.9477 4.20841C22.9889 4.15084 23.8492 5.01105 23.7916 6.05234L23.6178 9.19581C23.5885 9.72649 23.8019 10.2418 24.1979 10.5963L26.5435 12.6961C27.3206 13.3917 27.3206 14.6083 26.5435 15.3039L24.1979 17.4037C23.8019 17.7582 23.5885 18.2735 23.6178 18.8042L23.7916 21.9477C23.8492 22.9889 22.9889 23.8492 21.9477 23.7916L18.8042 23.6178C18.2735 23.5885 17.7582 23.8019 17.4037 24.1979L15.3039 26.5435C14.6083 27.3206 13.3917 27.3206 12.6961 26.5435L10.5963 24.1979C10.2418 23.8019 9.72649 23.5885 9.19581 23.6178L6.05234 23.7916C5.01105 23.8492 4.15084 22.9889 4.20841 21.9477L4.38219 18.8042C4.41153 18.2735 4.1981 17.7582 3.8021 17.4037L1.45646 15.3039C0.67945 14.6083 0.679449 13.3917 1.45646 12.6961L3.8021 10.5963C4.1981 10.2418 4.41153 9.72649 4.38219 9.19581L4.20841 6.05234C4.15084 5.01105 5.01105 4.15084 6.05234 4.20841L9.19581 4.38219C9.72649 4.41153 10.2418 4.1981 10.5963 3.8021L12.6961 1.45646Z" stroke="#417360" strokeWidth="1.75" />
                                <path d="M13.3476 6.94503C13.6954 6.55652 14.3036 6.55652 14.6514 6.94503L15.923 8.36544C16.1003 8.56344 16.3579 8.67016 16.6233 8.65549L18.5268 8.55025C19.0474 8.52147 19.4776 8.95157 19.4488 9.47222L19.3435 11.3758C19.3289 11.6411 19.4356 11.8987 19.6336 12.076L21.054 13.3476C21.4425 13.6954 21.4425 14.3036 21.054 14.6514L19.6336 15.923C19.4356 16.1003 19.3289 16.3579 19.3435 16.6233L19.4488 18.5268C19.4776 19.0474 19.0474 19.4776 18.5268 19.4488L16.6233 19.3435C16.3579 19.3289 16.1003 19.4356 15.923 19.6336L14.6514 21.054C14.3036 21.4425 13.6954 21.4425 13.3476 21.054L12.076 19.6336C11.8987 19.4356 11.6411 19.3289 11.3758 19.3435L9.47222 19.4488C8.95157 19.4776 8.52147 19.0474 8.55025 18.5268L8.65549 16.6233C8.67016 16.3579 8.56344 16.1003 8.36544 15.923L6.94503 14.6514C6.55652 14.3036 6.55652 13.6954 6.94503 13.3476L8.36544 12.076C8.56344 11.8987 8.67016 11.6411 8.65549 11.3758L8.55025 9.47222C8.52147 8.95157 8.95157 8.52147 9.47222 8.55025L11.3758 8.65549C11.6411 8.67016 11.8987 8.56344 12.076 8.36544L13.3476 6.94503Z" stroke="#417360" strokeWidth="1.45833" />
                                <path d="M13.7429 12.0811C13.8617 11.8924 14.1367 11.8924 14.2554 12.0811C14.3422 12.2191 14.5227 12.2636 14.6637 12.1818C14.8565 12.0698 15.1 12.1977 15.1174 12.4199C15.1302 12.5824 15.2693 12.7057 15.4321 12.6987C15.6549 12.6892 15.8111 12.9156 15.7233 13.1205C15.659 13.2703 15.7249 13.4441 15.8724 13.5136C16.074 13.6087 16.1072 13.8818 15.9341 14.0224C15.8076 14.1252 15.7852 14.3097 15.8835 14.4397C16.0178 14.6177 15.9203 14.8748 15.7017 14.9189C15.5419 14.9512 15.4364 15.1041 15.4629 15.2649C15.4992 15.4849 15.2933 15.6673 15.0793 15.6048C14.9228 15.5591 14.7583 15.6454 14.707 15.8002C14.6369 16.0118 14.3698 16.0776 14.2094 15.9228C14.0921 15.8096 13.9063 15.8096 13.789 15.9228C13.6285 16.0776 13.3615 16.0118 13.2914 15.8002C13.2401 15.6454 13.0755 15.5591 12.9191 15.6048C12.7051 15.6673 12.4992 15.4849 12.5355 15.2649C12.562 15.1041 12.4564 14.9512 12.2967 14.9189C12.0781 14.8748 11.9806 14.6177 12.1149 14.4397C12.2131 14.3097 12.1907 14.1252 12.0642 14.0224C11.8912 13.8818 11.9244 13.6087 12.126 13.5136C12.2734 13.4441 12.3393 13.2703 12.2751 13.1205C12.1872 12.9156 12.3435 12.6892 12.5662 12.6987C12.7291 12.7057 12.8682 12.5824 12.8809 12.4199C12.8984 12.1977 13.1419 12.0698 13.3347 12.1818C13.4757 12.2636 13.6561 12.2191 13.7429 12.0811Z" fill="#417360" />
                            </g>
                        </svg>

                        {index + 1}. {duaData.dua_name_en}
                    </h2>

                    {duaData.dua_arabic && (
                        <p dir="rtl" className="arabic-font text-right text-2xl font-serif text-gray-900 mb-4 leading-loose">
                            {duaData.dua_arabic}
                        </p>
                    )}

                    {duaData.transliteration_en && (
                        <p className="italic text-gray-500 py-8">{duaData.transliteration_en}</p>
                    )}

                    {duaData.top_en && (
                        <p className="font-medium mb-4">
                            <span className="font-semibold">Translation</span><br />
                            {duaData.top_en}
                        </p>
                    )}

                    <div className='flex justify-between py-10 items-center'>
                        {duaData.refference_en && (
                            <p className="text-sm text-[#282E29]">
                                <span className="font-semibold text-[#7C827D]">Reference</span> <br />
                                {duaData.refference_en}
                            </p>
                        )}

                        <div className="  flex space-x-10 text-gray-500 text-lg">
                            <span className="cursor-pointer">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0001 6.57501L9.10838 8.12501C8.90838 8.46668 9.07505 8.75001 9.46672 8.75001H10.5251C10.9251 8.75001 11.0834 9.03335 10.8834 9.37501L10.0001 10.925" stroke="#709484" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.91672 15.0333V14.0667C5.00005 12.9083 3.42505 10.65 3.42505 8.25C3.42505 4.125 7.21672 0.891671 11.5 1.825C13.3834 2.24167 15.0334 3.49167 15.8917 5.21667C17.6334 8.71667 15.8 12.4333 13.1084 14.0583V15.025C13.1084 15.2667 13.2 15.825 12.3084 15.825H7.71672C6.80005 15.8333 6.91672 15.475 6.91672 15.0333Z" stroke="#709484" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.08337 18.3333C8.99171 17.7916 11.0084 17.7916 12.9167 18.3333" stroke="#709484" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </span>
                            <span className="cursor-pointer">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.0833 8.875H7.91663" stroke="#709484" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14.0167 1.66669H5.98339C4.20839 1.66669 2.76672 3.11669 2.76672 4.88335V16.625C2.76672 18.125 3.84172 18.7584 5.15839 18.0334L9.22506 15.775C9.65839 15.5334 10.3584 15.5334 10.7834 15.775L14.8501 18.0334C16.1667 18.7667 17.2417 18.1334 17.2417 16.625V4.88335C17.2334 3.11669 15.7917 1.66669 14.0167 1.66669Z" stroke="#709484" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </span>
                            <span className="cursor-pointer">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.33337 10V7.03335C3.33337 3.35001 5.94171 1.84168 9.13337 3.68335L11.7084 5.16668L14.2834 6.65001C17.475 8.49168 17.475 11.5083 14.2834 13.35L11.7084 14.8333L9.13337 16.3167C5.94171 18.1583 3.33337 16.65 3.33337 12.9667V10Z" stroke="#709484" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </span>
                            <span className="cursor-pointer"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.66663 1.66669V4.16669" stroke="#709484" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M13.3334 1.66669V4.16669" stroke="#709484" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.91663 7.57501H17.0833" stroke="#709484" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M17.5 7.08335V14.1667C17.5 16.6667 16.25 18.3334 13.3333 18.3334H6.66667C3.75 18.3334 2.5 16.6667 2.5 14.1667V7.08335C2.5 4.58335 3.75 2.91669 6.66667 2.91669H13.3333C16.25 2.91669 17.5 4.58335 17.5 7.08335Z" stroke="#709484" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M13.079 11.4167H13.0864" stroke="#709484" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M13.079 13.9167H13.0864" stroke="#709484" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.9962 11.4167H10.0037" stroke="#709484" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.9962 13.9167H10.0037" stroke="#709484" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6.91197 11.4167H6.91945" stroke="#709484" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6.91197 13.9167H6.91945" stroke="#709484" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            </span>

                            <span>
                                <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.99996 8.83331C2.4602 8.83331 2.83329 8.46022 2.83329 7.99998C2.83329 7.53974 2.4602 7.16665 1.99996 7.16665C1.53972 7.16665 1.16663 7.53974 1.16663 7.99998C1.16663 8.46022 1.53972 8.83331 1.99996 8.83331Z" stroke="#709484" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M1.99996 2.99998C2.4602 2.99998 2.83329 2.62688 2.83329 2.16665C2.83329 1.70641 2.4602 1.33331 1.99996 1.33331C1.53972 1.33331 1.16663 1.70641 1.16663 2.16665C1.16663 2.62688 1.53972 2.99998 1.99996 2.99998Z" stroke="#709484" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M1.99996 14.6666C2.4602 14.6666 2.83329 14.2935 2.83329 13.8333C2.83329 13.3731 2.4602 13 1.99996 13C1.53972 13 1.16663 13.3731 1.16663 13.8333C1.16663 14.2935 1.53972 14.6666 1.99996 14.6666Z" stroke="#709484" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </span>
                        </div>
                    </div>
                </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}