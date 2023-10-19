import Image from "next/image";
import { Quicksand } from "next/font/google";

import styles from "./tripulationDetails.module.scss";
import { ITripulationData } from "@/app/interfaces/Itripulation";
import { onePieceFont } from "@/app/fonts";


const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

interface IProps {
  data: ITripulationData;
}

export default function TripulationDetails({ data }: IProps) {
  const { id, name, details } = data;

  return (
    <div className={`${quicksand.className} ${styles.container}`}>
      <h1 className={`${onePieceFont.className} ${styles.title}`}>{name}</h1>
      <div className={styles.details}>
        <h2 className={styles.subtitle}>Informações</h2>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.label}>Apelido</td>
              <td>{details.nickname}</td>
            </tr>
            <tr>
              <td className={styles.label}>Akuma no Mi</td>
              <td>{details.akumaNoMi}</td>
            </tr>
            <tr>
              <td className={styles.label}>Data de Nascimento</td>
              <td>{details.birthday}</td>
            </tr>
            <tr>
              <td className={styles.label}>Terra Natal</td>
              <td>{details.homeland}</td>
            </tr>
            <tr>
              <td className={styles.label}>Altura</td>
              <td>{details.height}</td>
            </tr>
            <tr>
              <td className={styles.label}>Idade</td>
              <td>{details.age}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.details}>
        <h2 className={styles.subtitle}>Flag</h2>
        <Image
          src={`/images/${id.split("-")[0]}-logo.png`}
          alt={`logo do personagem`}
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
