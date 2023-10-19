import Carousel from "@/app/components/Carousel";
import { ITripulationData } from "@/app/interfaces/Itripulation";


interface IProps {
  params: {
    id: string;
  };
}

async function getTripulationData(): Promise<{ data: ITripulationData[] }> {
  const res = await fetch(`${process.env.API_URL}/api/tripulation`);

  if (!res.ok) {
    throw new Error("Falha ao buscar os Piratas");
  }

  return res.json();
}

export default async function Hero({ params: { id } }: IProps) {
  const res = await getTripulationData();

  return <Carousel heroes={res.data} activeId={id} />;
}
