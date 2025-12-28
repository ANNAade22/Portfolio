"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval: any;

type Card = {
    id: number;
    name: string;
    designation: string;
    content: React.ReactNode;
};

export const CardStack = ({
    items,
    offset,
    scaleFactor,
}: {
    items: Card[];
    offset?: number;
    scaleFactor?: number;
}) => {
    const CARD_OFFSET = offset || 10;
    const SCALE_FACTOR = scaleFactor || 0.06;
    const [cards, setCards] = useState<Card[]>(items);

    useEffect(() => {
        startFlipping();

        return () => clearInterval(interval);
    }, []);

    const startFlipping = () => {
        interval = setInterval(() => {
            setCards((prevCards: Card[]) => {
                const newArray = [...prevCards]; // create a copy of the array
                newArray.unshift(newArray.pop()!); // move the last element to the front
                return newArray;
            });
        }, 5000);
    };

    return (
        <div className="relative h-[400px] w-full max-w-sm mx-auto">
            {cards.map((card, index) => {
                return (
                    <motion.div
                        key={card.id}
                        className="absolute inset-0 bg-[#0b111b] rounded-3xl shadow-xl border border-white/10 shadow-black/[0.1] flex flex-col overflow-hidden"
                        style={{
                            transformOrigin: "top center",
                        }}
                        animate={{
                            top: index * -CARD_OFFSET,
                            scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
                            zIndex: cards.length - index, //  decrease z-index for the cards that are behind
                        }}
                    >
                        <div className="flex-1 p-4">
                            {card.content}
                        </div>
                        <div className="p-4 bg-black/20 backdrop-blur-sm border-t border-white/5">
                            <p className="text-white font-semibold text-lg">
                                {card.name}
                            </p>
                            {card.designation && (
                                <p className="text-white/60 text-sm">
                                    {card.designation}
                                </p>
                            )}
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};
