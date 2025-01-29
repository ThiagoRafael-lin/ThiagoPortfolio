import Image from "next/image";
import fotoThiago from "@/assets/image/fotoThiago 1.png";

export default function About() {
  return (
    <div>
      <div className="flex items-center justify-center pt-32 gap-6">
        <Image
          src={fotoThiago}
          alt="Foto do Thiago Rafael"
          className="rounded-full border border-black"
          width={300}
        />

        <div className="font-comfortaa text-xl">
          <p className="pb-2">
            <span className="font-comfortaaBold">Name:</span> Thiago Domingues
            Rafael
          </p>
          <p className="border-y-2 py-2">
            <span className="font-comfortaaBold">Age:</span> 19 years old
          </p>
          <p className="border-b-2 py-2">
            <span className="font-comfortaaBold">Formations:</span> Systems
            Development Technician <br /> Multimedia Technician
          </p>
          <p className="pt-2">
            <span className="font-comfortaaBold">locality:</span> São Paulo, SP
          </p>
        </div>
      </div>
    </div>
  );
}
