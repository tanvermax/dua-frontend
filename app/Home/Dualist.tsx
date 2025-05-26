import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import image from "./../../public/dua1.png";
import Link from "next/link";

interface Dua {
  id: number;
  cat_id: number;
  cat_name_en: string;
  cat_name_bn: string;
  no_of_subcat: number;
  cat_icon: string;
  no_of_dua: number;
}

interface Sub_Dua {
  cat_id: number;
  id: number;
  no_of_dua: number;
  subcat_id: number;
  subcat_name_bn?: string;
  subcat_name_en: string;
}

interface DuaResponse {
  id: number;
  cat_id: number;
  subcat_id: number;
  dua_id: number;
  cat_name_en: string;
  dua_name_en: string;
}

export default function Dualist() {
  const [Categories, setCategories] = useState<Dua[]>([]);
  const [Sub_Categories, setSub_Categories] = useState<Sub_Dua[]>([]);
  const [duas, setDUas] = useState<DuaResponse[]>([]);
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const [expandedSubCategory, setExpandedSubCategory] = useState<number | null>(null);

  useEffect(() => {
    axios.get("https://dua-backend-wfmz.onrender.com/api/dua").then((res) => setDUas(res.data));
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const [catRes, subCatRes] = await Promise.all([
          axios.get("https://dua-backend-wfmz.onrender.com/api/categories"),
          axios.get("https://dua-backend-wfmz.onrender.com/api/sub_categories")
        ]);

        setCategories(catRes.data);
        setSub_Categories(subCatRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCategories();
  }, []);

  const toggleCategory = (catId: number) => {
    setExpandedCategory(expandedCategory === catId ? null : catId);
    setExpandedSubCategory(null); // Reset subcategory when category changes
  };

  const toggleSubCategory = (subCatId: number) => {
    setExpandedSubCategory(expandedSubCategory === subCatId ? null : subCatId);
  };

  return (
    <div>
      <div className="flex flex-col gap-2 mt-5">
        {Categories.map((dua) => (
          <div
            key={dua.id}
            className="bg-white p-3 rounded-lg  hover:shadow-lg transition-shadow duration-200"
          >
            <div
              className="flex gap-2 cursor-pointer"
              onClick={() => toggleCategory(dua.cat_id)}
            >
              <div className="bg-[#E1EBE1] rounded-2xl">
                <Image
                  className="rounded-2xl w-6 h-6 m-2"
                  src={image}
                  alt="Category icon"
                />
              </div>
              <div>
                <h3 className="font-[500] text-[14px] tracking-wide">
                  {dua.cat_name_en}
                </h3>
                <span className="flex items-center gap-2 text-[12px] text-gray-400">
                  <p>{dua.no_of_subcat} Subcategories</p> |
                  <p>{dua.no_of_dua} Duas</p>
                </span>
              </div>
            </div>

            {/* Subcategories */}
            {expandedCategory === dua.cat_id && (
              <div className="ml-5 mt-2">
                {Sub_Categories.filter((sub) => sub.cat_id === dua.cat_id).map((sub) => (
                  <div
                    key={sub.id}
                    className="p-2 mt-1 mr-5  transition-colors duration-200 border-l-2 border-dashed border-gray-300"
                  >
                    <div
                      className="flex items-center cursor-pointer"
                      onClick={() => toggleSubCategory(sub.subcat_id)}
                    >
                      <span className="left-14 mb-7 absolute font-medium text-gray-300">---</span>
                      <h4 className="text-gray-700 text-[14px] ml-7">{sub.subcat_name_en}</h4>
                    </div>

                    {/* Duas */}
                    {expandedSubCategory === sub.subcat_id &&
                      duas.filter(
                        (duaItem) =>
                          duaItem.cat_id === dua.cat_id && duaItem.subcat_id === sub.subcat_id
                      ).length > 0 ? (
                      <div className="ml-5 mt-2">
                        <ul className="text-gray-700">
                          {duas
                            .filter(
                              (duaItem) =>
                                duaItem.cat_id === dua.cat_id &&
                                duaItem.subcat_id === sub.subcat_id
                            )
                            .map((duaItem) => (
                              <Link href={"/blog"} key={duaItem.id} className="flex text-[12px] gap-3 py-2 cursor-pointer">
                                <svg
                                  width="30"
                                  height="20"
                                  viewBox="0 0 18 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    opacity="0.6"
                                    d="M17.4331 11L12.4331 8.11325V13.8868L17.4331 11ZM1.93306 1C1.93306 0.723858 1.7092 0.5 1.43306 0.5C1.15692 0.5 0.93306 0.723858 0.93306 1H1.93306ZM1.02178 2.37077C1.0575 2.64459 1.30843 2.83761 1.58226 2.80189C1.85608 2.76617 2.0491 2.51524 2.01338 2.24142L1.02178 2.37077ZM2.65373 4.63635C2.54795 4.38127 2.25542 4.26024 2.00034 4.36602C1.74526 4.47179 1.62422 4.76433 1.73 5.01941L2.65373 4.63635ZM3.10261 7.39251C3.27087 7.61146 3.58477 7.65256 3.80373 7.4843C4.02269 7.31604 4.06379 7.00214 3.89553 6.78318L3.10261 7.39251ZM5.64988 8.53754C5.43092 8.36927 5.11702 8.41037 4.94876 8.62933C4.7805 8.84829 4.8216 9.16219 5.04056 9.33045L5.64988 8.53754ZM7.41366 10.7031C7.66874 10.8088 7.96127 10.6878 8.06705 10.4327C8.17282 10.1776 8.05179 9.88511 7.79671 9.77933L7.41366 10.7031ZM10.1916 10.4197C9.91782 10.384 9.66689 10.577 9.63117 10.8508C9.59545 11.1246 9.78847 11.3756 10.0623 11.4113L10.1916 10.4197ZM12.9331 11.5C13.2092 11.5 13.4331 11.2761 13.4331 11C13.4331 10.7239 13.2092 10.5 12.9331 10.5V11.5ZM15.9331 10.5C15.6569 10.5 15.4331 10.7239 15.4331 11C15.4331 11.2761 15.6569 11.5 15.9331 11.5V10.5ZM1.43306 1H0.93306C0.93306 1.46435 0.963233 1.92191 1.02178 2.37077L1.51758 2.30609L2.01338 2.24142C1.96041 1.83534 1.93306 1.42099 1.93306 1H1.43306ZM2.19187 4.82788L1.73 5.01941C2.0841 5.8733 2.5475 6.67014 3.10261 7.39251L3.49907 7.08784L3.89553 6.78318C3.39305 6.12931 2.97389 5.40841 2.65373 4.63635L2.19187 4.82788ZM5.34522 8.93399L5.04056 9.33045C5.76292 9.88556 6.55976 10.349 7.41366 10.7031L7.60518 10.2412L7.79671 9.77933C7.02465 9.45917 6.30375 9.04001 5.64988 8.53754L5.34522 8.93399ZM10.127 10.9155L10.0623 11.4113C10.5112 11.4698 10.9687 11.5 11.4331 11.5V11V10.5C11.0121 10.5 10.5977 10.4726 10.1916 10.4197L10.127 10.9155ZM11.4331 11V11.5H12.9331V11V10.5H11.4331V11Z"
                                    fill="#417360"
                                  />
                                </svg>
                                {duaItem.dua_name_en}
                              </Link>
                            ))}
                        </ul>
                      </div>
                    ) : expandedSubCategory === sub.subcat_id ? (
                      <div className="ml-5 mt-2">
                        <span className="text-gray-500">No Duas</span>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}