import Image from "next/image";
import LogoThiago from "@/assets/image/LogoThiago.png";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <div className="text-black flex justify-center gap-96 font-comfortaa items-center mt-6">
      <Image src={LogoThiago} width={80} alt="Logo do Thiago Rafael" />
      <div className="flex gap-6">
        <a
          href=""
          className="hover:text-gray-400 hover:underline transition-all delay-75 "
        >
          Projects
          <span></span>
        </a>
        <a
          href=""
          className="hover:text-gray-400 hover:underline transition-all delay-75"
        >
          Skills
        </a>
        <a
          href=""
          className="hover:text-gray-400 hover:underline transition-all delay-75"
        >
          About Me
        </a>
      </div>
      <Button
        className="bg-transparent border border-black  text-black rounded-lg font-comfortaa hover:bg-black transition-all hover:text-white"
        variant="outline"
      >
        Contact
      </Button>
    </div>
  );
};
