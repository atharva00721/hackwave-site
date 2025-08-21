"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/info/Reveal";

interface TimelineDay {
  day: string;
  date: string;
  color: string;
  events: string[];
}

interface TimelineExpandProps {
  days: TimelineDay[];
  initialSelectedIndex?: number;
  thumbnailHeight?: number;
  maxThumbnails?: number;
}

export default function TimelineExpand({
  days,
  initialSelectedIndex = 0,
  thumbnailHeight = 200,
  maxThumbnails = 3,
}: TimelineExpandProps) {
  const [selectedIndex, setSelectedIndex] =
    useState<number>(initialSelectedIndex);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);

  return (
    <div className="relative max-w-7xl mx-auto px-4">
      <div className="flex max-[719px]:flex-col min-[720px]:flex-row w-full max-[719px]:gap-6 min-[720px]:gap-2 rounded-md pb-10 pt-5 justify-center max-[719px]:items-center">
        {days.slice(0, maxThumbnails).map((day, i) => (
          <div
            key={`day-container-${i}`}
            className={`relative overflow-hidden rounded-2xl transition-all duration-300 cursor-pointer ${
              selectedIndex === i
                ? "max-[719px]:w-[90vw] max-[719px]:h-[28rem] min-[720px]:w-[50rem] min-[720px]:h-[32rem]"
                : "max-[719px]:w-[85vw] max-[719px]:h-[6rem] min-[720px]:w-16 min-[720px]:h-[32rem]"
            }`}
            onMouseEnter={() => {}}
            onMouseLeave={() => {}}
            onClick={() => setSelectedIndex(i)}
          >
            <motion.div
              layoutId={`day-${i}`}
              className="absolute inset-0 size-full text-[#141414] flex flex-col "
              style={{
                backgroundColor: selectedIndex === i ? "#fcf2e8" : "#fcf2e8",
              }}
            >
              {/* Centered day badge for collapsed cards */}
              {selectedIndex !== i && (
                <div
                  className="flex-1 flex items-center justify-center rounded-2xl "
                  style={{ backgroundColor: day.color }}
                >
                  <span className="text-[#141414] font-bold text-xl uppercase max-[719px]:[writing-mode:horizontal-tb] min-[720px]:[writing-mode:vertical-lr] max-[719px]:[text-orientation:mixed] min-[720px]:[text-orientation:upright]">
                    {day.day}
                  </span>
                </div>
              )}

              {/* Header for expanded card */}
              {selectedIndex === i && (
                <div className="flex items-center justify-center gap-3 mb-5 flex-shrink-0 p-4 pb-1">
                  {/* <span 
                    className="inline-block text-[#141414] font-semibold px-4 py-2 rounded-full text-base"
                    style={{ backgroundColor: day.color }}
                  >
                    {day.date}
                  </span> */}
                  <h3 className="text-2xl md:text-3xl md:mt-6 font-black">
                    {day.date}
                  </h3>
                </div>
              )}

              {selectedIndex === i && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex-1 overflow-y-auto px-4 pt-0"
                >
                  <div className="max-w-4xl mx-auto space-y-4 pb-4">
                    {day.events.map((event, eventIndex) => {
                      // Extract time label (start or start–end) and description
                      const parts = event.split(" — ").map((p) => p.trim());
                      let timeLabel = parts[0] ?? "";
                      let description = parts.slice(1).join(" — ");
                      if (
                        parts.length >= 3 &&
                        /\b(?:AM|PM)\b/i.test(parts[1])
                      ) {
                        timeLabel = `${parts[0]} — ${parts[1]}`;
                        description = parts.slice(2).join(" — ");
                      }

                      return (
                        <div
                          key={eventIndex}
                          className="flex items-center gap-4"
                        >
                          <div
                            className="text-[#141414] font-bold px-3 py-1 rounded-lg text-sm text-center flex-shrink-0"
                            style={{ backgroundColor: day.color }}
                          >
                            {timeLabel}
                          </div>
                          <div className="text-lg font-bold text-left flex-1">
                            {description}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Modal removed for tap-to-expand behavior */}
    </div>
  );
}
