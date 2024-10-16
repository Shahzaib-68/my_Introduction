import Image from "next/image";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-start">
      <div className="text-white font-bold text-4xl text-center w-full">
        <div className="pt-10 w-full sm:w-[1180px] mx-auto">
          <h1 className="py-2 bg-gray-500 rounded-full">MY PROFILE</h1>
        </div>
      </div>
      <div className="w-full flex flex-col items-start justify-start p-6 mt-10 bg-black">
        {[
          { title: "NAME", value: "Shahzaib" },
          { title: "FATHER NAME", value: "Shahnawaz" },
          { title: "ADDRESS", value: "Landhi no:2 Area 37/A Shakhalid Colony" },
          { title: "EDUCATION", value: "Intermediate" },
          { title: "SKILL", value: "Frontend Developer" },
          { title: "EXPERIENCE", value: "Fresher" },
          { title: "CONTACT NO", value: "03180255369" },
          { title: "EMAIL", value: "sa4422368@gmail.com" },
          { title: "CENTER", value: "Governor House" },
          { title: "ID Card No", value: "00162568" },
        ].map((item, index) => (
          <div key={index} className="mb-6 w-full sm:w-auto">
            <h1 className="font-bold text-xl text-white">{item.title}:</h1>
            <p className="font-bold text-lg text-white">{item.value}</p>
          </div>
        ))}
      </div>
      <footer className="font-bold text-3xl text-white bg-gray-700 w-full py-8 text-center mt-auto">
        <h1 className="mb-4">FOLLOW US</h1>
        <div className="text-4xl flex justify-center space-x-6">
          <span className="hover:text-gray-400 cursor-pointer"><BsFacebook /></span>
          <span className="hover:text-gray-400 cursor-pointer"><RiInstagramFill /></span>
          <span className="hover:text-gray-400 cursor-pointer"><FaLinkedin /></span>
        </div>
      </footer>
    </div>
  );
}
