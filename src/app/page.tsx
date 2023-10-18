import style from "./page.module.scss";
import TripulationList from "./components/TripulationList";
import { ITripulationData } from "./interfaces/Itripulation";

async function getTripulationData(): Promise<{ data: ITripulationData[] }> {
  const res = await fetch(`${process.env.DOMAIN_ORIGIN}/api/tripulation`);

  if (!res.ok) {
    throw new Error("Falha ao buscar a Tripulacao do One Piece");
  }

  return res.json();
}

export default async function Home() {
  const res = await getTripulationData();

  return (
    <main className={style.main}>
      <TripulationList tripulation={res.data} />
    </main>
  );
}