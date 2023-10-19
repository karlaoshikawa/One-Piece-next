"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./carousel.module.scss";
import { ITripulationData } from "@/app/interfaces/Itripulation";
import TripulationPicture from "../TripulationPicture";
import TripulationDetails from "../TripulationDetails";


enum enPosition {
  FRONT = 0,
  MIDDLE = 1,
  BACK = 2,
}

interface IProps {
  heroes: ITripulationData[];
  activeId: string;
}

export default function Carousel({ heroes, activeId }: IProps) {
  // Controla os itens visíveis do carrossel
  const [visibleItems, setVisibleItems] = useState<ITripulationData[] | null>(
    null
  );

  // Armazena o item ativo do carrossel
  const [activeIndex, setActiveIndex] = useState(
    heroes.findIndex((hero) => hero.id === activeId) - 1
  );

  // Armazena a posição inicial, no eixo x, da interação com o carrossel
  const [startInteractionPosition, setStartInteractionPosition] =
    useState<number>(0);

  useEffect(() => {
    const indexInArrayScope =
      ((activeIndex % heroes.length) + heroes.length) % heroes.length;

    const visibleItems = [...heroes, ...heroes].slice(
      indexInArrayScope,
      indexInArrayScope + 3
    );

    setVisibleItems(visibleItems);
  }, [heroes, activeIndex]);

  // Altera o fundo da página de acordo com o herói selecionado
  useEffect(() => {
    const htmlEl = document.querySelector("html");

    if (!htmlEl || !visibleItems) {
      return;
    }

    const currentTripulationId = visibleItems[1].id;
    htmlEl.style.backgroundImage = `url("/images/${currentTripulationId}-background.webp")`;
    htmlEl.classList.add("hero-page");

    // remove a classe quando o componente é desmontado
    return () => {
      htmlEl.classList.remove("hero-page");
    };
  }, [visibleItems]);

  // Altera herói ativo no carrossel
  // +1 rotaciona no sentido horário
  // -1 rotaciona no sentido anti-horário
  const handleChangeActiveIndex = (newDirection: number) => {
    setActiveIndex((prevActiveIndex) => prevActiveIndex + newDirection);
  };

  // onDragStart (mouse): armazena a posição inicial da interação
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    setStartInteractionPosition(e.clientX);
  };

  // onDragEnd (mouse): armazena a posição final da interação
  // Mexe o carrossel na direção que o usuário fez o evento de interação
  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    if (!startInteractionPosition) {
      return null;
    }

    rotateCarousel(e.clientX);
  };

  // onTouchStart (touch): armazena a posição inicial da interação
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartInteractionPosition(e.touches[0].clientX);
  };

  // onTouchEnd (touch): armazena a posição final da interação
  // Mexe o carrossel na direção que o usuário fez o evento de interação
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!startInteractionPosition) {
      return null;
    }

    rotateCarousel(e.changedTouches[0].clientX);
  };

  const rotateCarousel = (clientX: number) => {
    const endInteractionPosition = clientX;

    // diffPosition > 0 => direita para esquerda
    // diffPosition < 0 => esquerda para direita
    const diffPosition = endInteractionPosition - startInteractionPosition;

    const newPosition = diffPosition > 0 ? -1 : 1;
    handleChangeActiveIndex(newPosition);
  };

  if (!visibleItems) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <div
          className={styles.wrapper}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="popLayout">
            {visibleItems?.map((item, position) => (
              <motion.div
                key={item.id}
                className={styles.hero}
                transition={{ duration: 0.8 }}
                initial={{
                  x: -1500,
                  scale: 0.75,
                }}
                animate={{ x: 0, ...getItemStyles(position) }}
                exit={{
                  x: 0,
                  left: "-20%",
                  opacity: 0,
                  scale: 1,
                }}
              >
                <TripulationPicture caracter={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <motion.div
        className={styles.details}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
      >
        <TripulationDetails data={visibleItems[enPosition.MIDDLE]} />
      </motion.div>
    </div>
  );
}

// Estilos para o item que está visível na animação
// Dependendo da posição do herói no carrossel
const getItemStyles = (position: enPosition) => {
  if (position === enPosition.FRONT) {
    return {
      filter: "blur(10px)",
      scale: 1.3,
      zIndex: 3,
    };
  }

  if (position === enPosition.MIDDLE) {
    return {
      left: 300,
      scale: 1,
      top: "-10%",
      zIndex: 2,
    };
  }

  return {
    filter: "blur(10px)",
    scale: 0.7,
    left: 160,
    opacity: 0.8,
    zIndex: 1,
    top: "-20%",
  };
};
