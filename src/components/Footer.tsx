import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { TiSocialTwitter } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="bg-primary px-7 py-12 flex flex-col md:flex-row text-center md:text-start gap-5 justify-between items-center">
      <div>
        <p className="text-white">მოგვწერეთ:</p>
        <a className="text-white" href="mailto:kinematix@gmail.com">
          kinematix@gmail.com
        </a>
      </div>
      <div className="flex gap-3 text-primary">
        <div className="p-3 rounded-full bg-white">
          <FaFacebookSquare />
        </div>
        <div className="p-3 rounded-full bg-white">
          <RiInstagramFill />
        </div>
        <div className="p-3 rounded-full bg-white">
          <TiSocialTwitter />
        </div>
      </div>
      <p className="text-white">© 2024 ყველა უფლება დაცულია</p>
    </div>
  );
};

export default Footer;
