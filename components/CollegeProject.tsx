import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiReactivex, SiToptal, SiFreelancer, SiFiverr } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="College Projects" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard
          title="Minor Project: Smart Jacket for Coal Mine Workers"
          subTitle="01. Detect harmful gases like methane and carbon monoxide.
02. Monitor temperature and humidity levels underground. 03. Alert workers instantly through visual and sound indicators.
04. Provide a comfortable and wearable design suitable for harsh environments."
          icon={<SiReactivex />}
        />
        <ExperienceCard
          title="Major Project: Classification of various Skin Diseases by Using Deep Learning"
          subTitle="01. Utilize transfer learning to enhance performance with limited labeled data.
02. Enable real-time, remote diagnostics via online or mobile platforms
03. Improve diagnostic efficiency and support better clinical decision-making
04. Address ethical considerations related to data privacy and responsible AI use"
          icon={<SiToptal />}
        />
        <ExperienceCard
          title="Capstone Project: Credit Card Fraud detection using Autoencoder"
                  subTitle="01. This project focuses on detecting credit card fraud by utilizing an unsupervised deep learning approach with autoencoders. 
                  02. The model was trained to learn the normal transaction patterns and identify anomalies based on reconstruction error, effectively detecting fraudulent activities. 
                  03. Techniques such as data preprocessing, class imbalance handling, and threshold tuning were applied to improve accuracy. 
          04. This system shows great potential for real-world applications by enabling early fraud detection and minimizing financial losses."
          icon={<SiFreelancer />}
        />
      </div>
    </div>
  );
};

export default Experience;
