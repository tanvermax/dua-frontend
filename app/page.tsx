// import Image from "next/image";

import Endbar from "./Home/Endbar";
import Middlebar from "./Home/Middlebar";
import Sidebar from "./Home/Sidebar";

export default function Home() {
  return (
    <div className="bg-white h-screen grid grid-cols-16 ">
      <div className="col-span-3 border-r-[1px] border-[#E1EBE1] bg-[#F8F9F8]">
      <Sidebar />
      </div>
      <div className="col-span-10 overflow-y-scroll">
        <Middlebar />
      </div>
      <div className="col-span-3 border-l-[1px] border-[#E1EBE1] ">
        <Endbar />
      </div>
      
    </div>
  
  );
}
