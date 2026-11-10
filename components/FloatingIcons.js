import Image from "next/image";
import { site } from "@/data/site";

const slots = [
  // 1 left
  { top: "6%", left: "11%", size: 124, duration: 7, delay: 0, rotate: -8, drift: 12 },
  // 2 right
  { top: "12%", left: "82%", size: 144, duration: 9, delay: -2, rotate: 10, drift: -14 },
  // 3 left
  { top: "38%", left: "4%", size: 104, duration: 8, delay: -4, rotate: -6, drift: 10 },
  // 4 right
  { top: "44%", left: "90%", size: 110, duration: 10, delay: -1, rotate: 12, drift: -12 },
  // 5 left
  { top: "70%", left: "13%", size: 136, duration: 7.5, delay: -3, rotate: -10, drift: 14 },
  // 6 right
  { top: "76%", left: "83%", size: 128, duration: 9.5, delay: -5, rotate: 8, drift: -10 },
  // 7 left
  { top: "22%", left: "5%", size: 112, duration: 8.5, delay: -2.5, rotate: -12, drift: 12 },
  // 8 right
  { top: "28%", left: "91%", size: 118, duration: 11, delay: -6, rotate: 6, drift: -8 },
  // 9 left
  { top: "54%", left: "14%", size: 120, duration: 10.5, delay: -1.5, rotate: -5, drift: 9 },
  // 10 right
  { top: "60%", left: "80%", size: 140, duration: 9, delay: -4.5, rotate: 9, drift: -11 },
  // 11 left
  { top: "86%", left: "1%", size: 96, duration: 12, delay: -7, rotate: -9, drift: 10 },
  // 12 right
  { top: "92%", left: "93%", size: 100, duration: 8, delay: -3.5, rotate: 7, drift: -13 },
];

export default function FloatingIcons() {
  const icons = site.floatingIcons;
  if (!icons || icons.length === 0) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {icons.map((src, i) => {
        const slot = slots[i % slots.length];
        return (
          <Image
            key={`${src}-${i}`}
            src={src}
            alt=""
            width={slot.size}
            height={slot.size}
            className={`absolute object-contain opacity-80 motion-safe:animate-drift ${
              i >= 6 ? "hidden sm:block" : ""
            }`}
            style={{
              top: slot.top,
              left: slot.left,
              width: slot.size,
              height: slot.size,
              animationDuration: `${slot.duration}s`,
              animationDelay: `${slot.delay}s`,
              "--r": `${slot.rotate}deg`,
              "--dx": `${slot.drift}px`,
            }}
          />
        );
      })}
    </div>
  );
}