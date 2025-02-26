"use client";

import { useState, useEffect } from "react";
import Organization from "@/types/organization";
import OrganizationCard from "@/components/organization-card";
import { HorizontalTicker } from "react-infinite-ticker";

const Marquee = ({ partners }: { partners: Organization[] }) => {
  // State to track if component is mounted (client-side)
  const [isMounted, setIsMounted] = useState(false);
  
  // Shuffle partners only on the client side
  const [shuffledRows, setShuffledRows] = useState<Organization[][]>([]);
  
  useEffect(() => {
    setIsMounted(true);
    
    const shuffled = [...partners].sort(() => Math.random() - 0.5);
    const chunkSize = Math.ceil(shuffled.length / 4);
    const rows = Array.from({ length: 4 }, (_, i) => 
      shuffled.slice(i * chunkSize, (i + 1) * chunkSize)
    );
    
    setShuffledRows(rows);
  }, [partners]);
  
  if (!isMounted) {
    return <div className="flex flex-col gap-4 min-h-[550px]"></div>;
  }

  return (
    <div className="flex flex-col gap-4">
      {shuffledRows.map((row, index) => (
        <HorizontalTicker key={index} duration={50000} reverse={index % 2 === 1}>
          {row.map((partner) => (
            <div className="w-52 h-32" key={partner.id}>
              <OrganizationCard organization={partner} />
            </div>
          ))}
        </HorizontalTicker>
      ))}
    </div>
  );
};

export default Marquee;