import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillsInput from "./SkillsInput";

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        <SkillsInput title="AWS" />
        <SkillsInput title="Linux" />
        <SkillsInput title="Docker" />
        <SkillsInput title="Kubernetes" />
        <SkillsInput title="CI/CD Tools" />
        <SkillsInput title="Reactjs" />
        <SkillsInput title="Nextjs" />
        <SkillsInput title="Nodejs" />
        <SkillsInput title="SQL" />
        <SkillsInput title="MongoDB" />
        <SkillsInput title="Git/GitHub" />
        <SkillsInput title="CPP" />
        <SkillsInput title="Tableau" />

      </div>
    </div>
  );
};

export default Skills;
