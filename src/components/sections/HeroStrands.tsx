"use client";

import React from "react";
import { strands, strandDots, STRANDS_VIEWBOX } from "../../data/heroStrands";

/*
 * Decorative "strategic loom" motif for the hero (desktop only).
 * Opening: each strand draws from its scattered starting point towards a shared
 * meeting point, then the strands continue outwards together and fan out.
 * Dots appear as the lines reach them and grow on hover.
 * Entirely decorative: hidden from assistive tech, no text inside.
 */

const TONE: Record<string, string> = {
  n: "#0B132B", // navy
  t: "#C2593F", // terracotta
  c: "#E9937D", // soft coral
};

type Vars = React.CSSProperties & { [key: `--${string}`]: string };

export default function HeroStrands({ ready }: { ready: boolean }) {
  return (
    <div className={`hero-strands ${ready ? "is-ready" : ""}`} aria-hidden="true">
      <svg
        className="strands-svg"
        viewBox={`0 0 ${STRANDS_VIEWBOX.w} ${STRANDS_VIEWBOX.h}`}
        preserveAspectRatio="xMaxYMid slice"
        fill="none"
        focusable="false"
      >
        <g className="strand-lines" strokeLinecap="round">
          {strands.map((s, i) => (
            <g key={i} stroke={TONE[s.t]} strokeOpacity={s.o} strokeWidth={s.w}>
              <path className="seg seg-in" d={s.a} pathLength={1} style={{ "--d": `${s.d}s` } as Vars} />
              <path className="seg seg-out" d={s.b} pathLength={1} style={{ "--d": `${s.d + 1.15}s` } as Vars} />
            </g>
          ))}
        </g>
        <g className="strand-dots">
          {strandDots.map((dot, i) => (
            <g
              key={i}
              className="dot"
              transform={`translate(${dot.x} ${dot.y})`}
            >
              <g className="dot-appear" style={{ "--d": `${dot.d}s` } as Vars}>
                <circle className="dot-hit" r={12} />
                <circle
                  className="dot-core"
                  r={dot.r}
                  fill={dot.n ? TONE.n : TONE.t}
                  fillOpacity={dot.n ? 0.8 : 0.85}
                />
              </g>
            </g>
          ))}
        </g>
      </svg>

      <style jsx>{`
        .hero-strands {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 58%;
          z-index: 0;
          pointer-events: none;
        }

        .strands-svg {
          width: 100%;
          height: 100%;
          display: block;
          overflow: visible;
        }

        /* ----- Line drawing: hidden until fonts/layout are ready ----- */
        .seg {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
        }
        .is-ready .seg {
          animation: drawLine 1.3s cubic-bezier(0.65, 0, 0.35, 1) var(--d) forwards;
        }
        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }

        /* ----- Dots: pop in when reached, grow on hover ----- */
        .dot {
          pointer-events: auto;
        }
        .dot-appear {
          opacity: 0;
          transform: scale(0);
          transform-box: fill-box;
          transform-origin: center;
        }
        .is-ready .dot-appear {
          animation: dotIn 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) var(--d) forwards;
        }
        @keyframes dotIn {
          to { opacity: 1; transform: scale(1); }
        }
        .dot-hit {
          fill: transparent;
        }
        .dot-core {
          transform-box: fill-box;
          transform-origin: center;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), fill-opacity 0.25s ease;
        }
        .dot:hover .dot-core {
          transform: scale(2.6);
          fill-opacity: 1;
        }

        /* Very slow ambient drift once drawn (whole layer, GPU-friendly) */
        .is-ready .strands-svg {
          animation: strandsDrift 16s ease-in-out 3.6s infinite alternate;
          will-change: transform;
        }
        @keyframes strandsDrift {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-10px, -6px, 0); }
        }

        @media (max-width: 992px) {
          .hero-strands {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .seg,
          .is-ready .seg {
            animation: none;
            stroke-dashoffset: 0;
          }
          .dot-appear,
          .is-ready .dot-appear {
            animation: none;
            opacity: 1;
            transform: none;
          }
          .is-ready .strands-svg {
            animation: none;
          }
          .dot-core {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}
