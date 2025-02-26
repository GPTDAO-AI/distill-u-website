"use client";

import Organization from "@/types/organization";
import OrganizationCard from "@/components/organization-card";
import { HorizontalTicker } from "react-infinite-ticker";

const Marquee = ({ partners }: { partners: Organization[] }) => {
  const shuffledPartners = partners.sort(() => Math.random() - 0.5);
  const chunkSize = Math.ceil(shuffledPartners.length / 4);
  const rows = Array.from({ length: 4 }, (_, i) => 
    shuffledPartners.slice(i * chunkSize, (i + 1) * chunkSize)
  );

  return (
    <div className="w-full flex flex-col gap-4">
      {rows.map((row, index) => (
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