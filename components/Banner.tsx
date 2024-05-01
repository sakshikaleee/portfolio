import Image from "next/image";
import ProfileImg from "../public/img/profileImg.jpg";

const Banner = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <div className="w-44 h-44 rounded-full bg-black">
        <Image
          className="w-full h-full rounded-full border-[1px] border-indigo-700 p-2 object-cover"
          src={ProfileImg}
          alt="ProfileImg"
        />
      </div>
      {/* Description */}
      <div className="w-3/4 flex flex-col items-center md:items-start    gap-2">
        <h1 className="text-5xl font-bold text-white">Sakshi Kale</h1>
        <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">
          AWS Developer
        </h3>
        <p className="text-base tracking-wide text-center md:text-left">
          Eager AWS Developer, well-versed in AWS, Kubernetes, Docker, React, Next, MongoDB, MySQL, API, Linux, and CPP languages. Utilizing a year of
project building, with a passion for creating responsive website. I am eager to tackle complex challenges and contribute to creating
impactful solutions.
        </p>
      </div>
    </div>
  );
};

export default Banner;
