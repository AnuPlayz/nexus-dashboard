"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Efficient Data Visualization",
    description:
      "Nexus Visualize leverages the power of advanced AI to efficiently visualize your data. It transforms complex data sets into easy-to-understand visual representations, enabling you to draw insights and make data-driven decisions with ease. With Nexus Visualize, you can turn your data into actionable insights.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img
          src="https://media.discordapp.net/attachments/950311940096393279/1230853324832509952/icons8-tableau-software-500_1.png?ex=6634d47c&is=66225f7c&hm=36231142e121af123cf294ed844309526d192da987d4d80167d348099ae28398&=&format=webp&quality=lossless&width=525&height=525"
          alt={"Efficient Data Visualization"}
          height={"200px"}
          width={"200px"}
        />
      </div>
    ),
  },
  {
    title: "User-friendly Interface",
    description:
      "Nexus Visualize features an intuitive and user-friendly interface that simplifies the process of data visualization. Whether you are a data scientist, a business analyst, or a non-technical user, you can easily navigate through the platform and create stunning visualizations. No prior technical expertise is required.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://media.discordapp.net/attachments/950311940096393279/1230853533847523338/icons8-website-100_1.png?ex=6634d4ae&is=66225fae&hm=b7fb473e4fb6a88673e42df668e1bfabcf96be4903ffc0252cf81ae76ef111c6&=&format=webp&quality=lossless&width=150&height=150"
          alt={"Efficient Data Visualization"}
          height={"200px"}
          width={"200px"}
        />
      </div>
    ),
  },
  {
    title: "Versatile Data Support",
    description:
      "Nexus Visualize is designed to support a wide range of data types and formats. Whether your data is structured or unstructured, in CSV, Excel, or JSON format, you can upload it to Nexus Visualize and create meaningful visualizations. This versatility allows you to visualize virtually any data you have.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <img
          src="https://media.discordapp.net/attachments/950311940096393279/1230854065500590221/icons8-data-backup-100.png?ex=6634d52d&is=6622602d&hm=d0a7263d0cc81bf8b1cd384c23214588239e6f83472c259bbbbdf78aadf50960&=&format=webp&quality=lossless&width=150&height=150"
          alt={"Efficient Data Visualization"}
          height={"200px"}
          width={"200px"}
        />
      </div>
    ),
  },
  {
    title: "Secure Data Handling",
    description:
      "At Nexus Visualize, we prioritize your data security. We employ robust security measures to ensure your data is handled securely and confidentially. Your data is encrypted at rest and in transit, and we adhere to strict privacy policies and compliance standards to protect your data.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img
          src="https://media.discordapp.net/attachments/950311940096393279/1230854521799049348/icons8-data-protection-100.png?ex=6634d59a&is=6622609a&hm=98abb0527bb3d8d24f996d6929b4984891b868e209bdb3df4994af0d6a6171b8&=&format=webp&quality=lossless&width=150&height=150"
          alt={"Efficient Data Visualization"}
          height={"200px"}
          width={"200px"}
        />
      </div>
    ),
  },
];
export function Benefits() {
  return (
    <div className="m-10 p-10">
      <StickyScroll content={content} />
    </div>
  );
}
