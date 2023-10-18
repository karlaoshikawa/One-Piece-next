import Image, { StaticImageData } from "next/image";

import ImageRuffy from "@public/images/ruffy.png";
import ImageNami from "@public/images/nami.png";
import ImageZoro from "@public/images/zoro.png";
import ImageUsop from "@public/images/usop.png";
import ImageSanji from "@public/images/sanji.png";
import ImageChopper from "@public/images/chopper.png";
import ImageRobin from "@public/images/robin.png";
import ImageBrook from "@public/images/brook.png";
import ImageFrank from "@public/images/frank.png";
import ImageJinbe from "@public/images/jinbe.png";


import { ITripulationData } from "@/app/interfaces/Itripulation";


const tripulationImage: Record<string, StaticImageData> = {
  "luffy-caracter": ImageRuffy,
  "nami-caracter": ImageNami,
  "zoro-caracter": ImageZoro,
  "sanji-caracter": ImageSanji,
  "usopp-caracter": ImageUsop,
  "chopper-caracter": ImageChopper,
  "robin-caracter": ImageRobin,
  "brook-caracter": ImageBrook,
  "franky-caracter": ImageFrank,
  "jinbe-caracter": ImageJinbe,
};

interface IProps {
  caracter: ITripulationData;
}

export default function TripulationPicture({ caracter }: IProps) {
  return (
    <Image
      src={tripulationImage[caracter.id] || ImageRuffy}
      alt={caracter.name || ""}
      priority
    />
  );
}