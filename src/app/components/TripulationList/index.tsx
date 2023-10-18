"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import style from "./tripulationlist.module.scss";

import { ITripulationData } from "@/app/interfaces/Itripulation";
import { onePieceFont } from "@/app/fonts";
import TripulationPicture from "../TripulationPicture";


interface IProps {
  tripulation: ITripulationData[];
}

export default function HeroesList({ tripulation }: IProps) {
  return (
    <>
      <motion.h1
        className={`${onePieceFont.className} ${style.title}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 2 }}
      >
        PIRATAS
      </motion.h1>
      <motion.section
        className={style.tripulation}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {tripulation.map((element) => (
          <motion.div
            key={element.id}
            className={`${style.imageContainer} ${style.caracterHeight}`}
            whileHover={{ scale: 1.8 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.8 }}
          >
            <Link href={`/tripulation/${element.id}`}>
              <TripulationPicture caracter={element} />
            </Link>
          </motion.div>
        ))}
      </motion.section>
    </>
  );
}