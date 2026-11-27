// "use client";

// import { useRef } from "react";
// import Image from "next/image";
// import MagicRings from "./animated/MagicRings";

// export const LaserFooter = ({ year }: { year: number }) => {
//   const footer = useRef<HTMLElement>(null);

//   return (
//     <footer ref={footer} className="relative mb-2.5 flex w-full flex-none flex-col-reverse items-center justify-between gap-1 rounded-2xl p-5 sm:flex-row sm:gap-4">
//       <div className="pointer-events-none fixed inset-0 -z-1">
//         <MagicRings
//           color="#A855F7"
//           colorTwo="#6366F1"
//           motion="pulse"
//           ringCount={10}
//           speed={1.6}
//           lineThickness={3.5}
//           glow={1}
//           hoverScale={1.2}
//           clickBurst={true}
//           baseRadius={0.14}
//           radiusStep={0.15}
//           taper={1.15}
//           spin={2}
//           style={{}}
//         />
//       </div>
//       <small className="inline-flex items-center gap-2 whitespace-nowrap text-xs text-[#d9cbe8]">
//         <Image src="/icon.svg" alt="" width={20} height={20} />© {year} Astra
//       </small>

//       <p className="text-center text-sm leading-snug text-[#eadcf9] sm:text-right lg:text-base xl:text-lg">Take the first step toward something only you can build.</p>
//     </footer>
//   );
// };
