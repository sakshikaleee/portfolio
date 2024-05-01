import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiReactivex, SiToptal, SiFreelancer, SiFiverr } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Education" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard
          title="MIT Academy of Engineering, Pune"
          subTitle="Electronics and Telecommunication - Present"
          icon={<SiReactivex />}
        />
        <ExperienceCard
          title="Dr.M.K.Umathe college , Nagpur"
          subTitle="HSC 12th - 2021"
          icon={<SiToptal />}
        />
        <ExperienceCard
          title="Eklavya Madhyamik School , Jamner"
          subTitle="SSC 10th - 2019"
          icon={<SiFreelancer />}
        />
      </div>
    </div>
  );
};

export default Experience;
