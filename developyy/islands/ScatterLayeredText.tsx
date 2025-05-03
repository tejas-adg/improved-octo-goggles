import { h } from "preact";
import { useLayoutEffect, useRef } from "preact/hooks";

import { animate, hover } from "npm:motion";
import { splitText } from "npm:motion-plus";

interface Props {
  text: string;
}

/**
 * Three overlapping “Developyy” layers that scatter on hover.
 * No React hooks; no layout shift; no wrap.
 */
export default function ScatterLayeredText({ text }: Props) {
  const box = useRef<HTMLDivElement>(null);

  // pointer velocity trackers (simple numbers)
  const vX = useRef(0);
  const vY = useRef(0);
  const prev = useRef(performance.now());

  /* 1️⃣  Run BEFORE the first paint so nothing flashes or jumps  */
  useLayoutEffect(() => {
    if (!box.current) return;

    // Break every .scatter-layer into <span.split-char>
    const chars: HTMLElement[] = [];
    box.current
      .querySelectorAll(".scatter-layer")
      .forEach((el) => chars.push(...splitText(el as HTMLElement).chars));

    // Track pointer velocity
    const move = (e: PointerEvent) => {
      const now = performance.now();
      const dt = (now - prev.current) / 1_000; // seconds
      prev.current = now;
      vX.current = e.movementX / dt;
      vY.current = e.movementY / dt;
    };
    addEventListener("pointermove", move);

    // Scatter on hover
    hover(chars, (c) => {
      const speed = Math.hypot(vX.current, vY.current);
      const angle = Math.atan2(vY.current, vX.current);
      const dist = speed * 0.1;

      animate(
        c,
        { x: Math.cos(angle) * dist, y: Math.sin(angle) * dist },
        { type: "spring", stiffness: 100, damping: 50 }
      );
    });

    return () => removeEventListener("pointermove", move);
  }, []);

  return (
    <div
      ref={box}
      /* 2️⃣  Prevent the word from wrapping, ever  */
      class="relative leading-none space-y-[-1rem] whitespace-nowrap"
    >
      <span class="scatter-layer fixedsys text-cyan-300   text-[10rem] block whitespace-nowrap">{text}</span>
      <span class="scatter-layer fixedsys text-fuchsia-500 text-[12rem] block whitespace-nowrap">{text}</span>
      <span class="scatter-layer fixedsys text-yellow-400 text-[14rem] block whitespace-nowrap">{text}</span>
    </div>
  );
}