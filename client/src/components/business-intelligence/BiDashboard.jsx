import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import SectionHeading from "../SectionHeading";
import SpectrumTitle from "./SpectrumTitle";
import { dashboard } from "../../data/businessIntelligenceData";

const MONTHS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
const SPECTRUM = ["#14d8c4", "#3b82f6", "#a78bfa"];
const VIEW = { once: true, margin: "-80px" };

function Panel({ title, children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md md:p-6 ${className}`}
    >
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/60">{title}</p>
      {children}
    </div>
  );
}

function LineChart() {
  const data = dashboard.revenue;
  const W = 600;
  const H = 220;
  const pad = { l: 8, r: 8, t: 16, b: 28 };
  const min = Math.min(...data) * 0.9;
  const max = Math.max(...data) * 1.05;
  const x = (i) => pad.l + (i / (data.length - 1)) * (W - pad.l - pad.r);
  const y = (v) => pad.t + (1 - (v - min) / (max - min)) * (H - pad.t - pad.b);
  const pts = data.map((v, i) => [x(i), y(v)]);
  const path = (arr) =>
    arr.map(([px, py], i) => `${i ? "L" : "M"}${px.toFixed(1)} ${py.toFixed(1)}`).join(" ");
  const split = dashboard.forecastFrom;
  const actual = pts.slice(0, split + 1);
  const forecast = pts.slice(split);
  const area = `${path(actual)} L${actual.at(-1)[0]} ${H - pad.b} L${pad.l} ${H - pad.b} Z`;

  return (
    <motion.svg
      initial="hidden"
      whileInView="show"
      viewport={VIEW}
      viewBox={`0 0 ${W} ${H}`}
      className="mt-4 h-auto w-full"
      role="img"
      aria-label="Sample line chart: monthly revenue rising from 82 to 121 thousand dollars from January to October, forecast to reach 134 by December."
    >
      <defs>
        <clipPath id="bi-reveal">
          <motion.rect
            x="0"
            y="0"
            width={W}
            height={H}
            // Driven by the parent svg: nodes inside <defs> are never
            // "in view" themselves.
            variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1 } }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ originX: 0 }}
          />
        </clipPath>
      </defs>
      {[0, 1, 2, 3].map((i) => (
        <line
          key={i}
          x1={pad.l}
          x2={W - pad.r}
          y1={pad.t + (i * (H - pad.t - pad.b)) / 3}
          y2={pad.t + (i * (H - pad.t - pad.b)) / 3}
          stroke="white"
          strokeOpacity=".07"
        />
      ))}
      <g clipPath="url(#bi-reveal)">
        <path d={area} fill="#3b82f6" fillOpacity=".15" />
        <path
          d={path(actual)}
          fill="none"
          stroke={SPECTRUM[1]}
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d={path(forecast)}
          fill="none"
          stroke={SPECTRUM[2]}
          strokeWidth="2.5"
          strokeDasharray="6 6"
        />
        <circle cx={actual.at(-1)[0]} cy={actual.at(-1)[1]} r="5" fill="#fff" />
      </g>
      {MONTHS.map((m, i) => (
        <text
          key={i}
          x={x(i)}
          y={H - 8}
          textAnchor="middle"
          className="fill-white/50 font-mono"
          fontSize="12"
        >
          {m}
        </text>
      ))}
    </motion.svg>
  );
}

function BarChart() {
  const { regions } = dashboard;
  const max = Math.max(...regions.map((r) => r.value));
  return (
    <div
      className="mt-5 flex h-40 items-end gap-3"
      role="img"
      aria-label={`Sample bar chart of sales index by region: ${regions
        .map((r) => `${r.label} ${r.value}`)
        .join(", ")}.`}
    >
      {regions.map((r, i) => (
        <div key={r.label} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
          <motion.div
            className="w-full origin-bottom rounded-t-md"
            style={{
              height: `${(r.value / max) * 100}%`,
              background: SPECTRUM[i % 3],
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={VIEW}
            transition={{ duration: 0.8, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          />
          <span className="font-mono text-[0.7rem] text-white/60" aria-hidden="true">
            {r.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function Donut() {
  const { channels } = dashboard;
  const total = channels.reduce((s, c) => s + c.value, 0);
  const R = 15.9155; // circumference 100
  // Each arc starts where the previous one ended, from 12 o'clock.
  const arcs = channels.map((c, i) => {
    const len = (c.value / total) * 100;
    const before = channels.slice(0, i).reduce((s, p) => s + (p.value / total) * 100, 0);
    return { ...c, len, offset: 25 - before };
  });
  return (
    <div className="mt-4 flex items-center gap-6">
      <motion.svg
        viewBox="0 0 42 42"
        className="h-32 w-32 shrink-0"
        role="img"
        aria-label={`Sample donut chart of revenue by channel: ${channels
          .map((c) => `${c.label} ${c.value}%`)
          .join(", ")}.`}
        initial={{ opacity: 0, rotate: -40 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        viewport={VIEW}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <circle
          cx="21"
          cy="21"
          r={R}
          fill="none"
          stroke="white"
          strokeOpacity=".08"
          strokeWidth="5"
        />
        {arcs.map((c, i) => (
          <circle
            key={c.label}
            cx="21"
            cy="21"
            r={R}
            fill="none"
            stroke={SPECTRUM[i % 3]}
            strokeWidth="5"
            strokeDasharray={`${c.len - 1.2} ${100 - c.len + 1.2}`}
            strokeDashoffset={c.offset}
          />
        ))}
      </motion.svg>
      <ul className="space-y-2">
        {channels.map((c, i) => (
          <li key={c.label} className="flex items-center gap-2.5 text-sm text-white/80">
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full"
              style={{ background: SPECTRUM[i % 3] }}
            />
            {c.label}
            <span className="font-mono text-white/60">{c.value}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * A dashboard drawn in plain SVG: no chart library, no screenshot. Everything
 * on it is sample data and says so.
 */
export default function BiDashboard() {
  return (
    <section
      id="bi-dashboard"
      data-nav-tone="dark"
      className="relative overflow-hidden bg-inverse py-20 md:py-28"
    >
      <div className="relative mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          onInverse
          eyebrow={dashboard.eyebrow}
          title={<SpectrumTitle lead={dashboard.titleLead} accent={dashboard.titleAccent} />}
          subtitle={dashboard.subtitle}
        />

        <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] p-4 shadow-[0_40px_120px_-40px_rgba(59,130,246,0.5)] md:p-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 px-1">
            <p className="font-display text-lg font-semibold text-white">Commercial overview</p>
            <span className="rounded-full border border-amber-300/40 bg-amber-300/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] text-amber-200">
              Sample data
            </span>
          </div>

          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {dashboard.kpis.map((k) => {
              const Arrow = k.delta.startsWith("-") ? ArrowDownRight : ArrowUpRight;
              return (
                <div
                  key={k.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md"
                >
                  <dt className="font-mono text-xs uppercase tracking-[0.18em] text-white/60">
                    {k.label}
                  </dt>
                  <dd className="mt-3 flex items-end justify-between gap-2">
                    <span className="font-display text-3xl font-semibold text-white">
                      {k.value}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/10 px-2 py-0.5 text-sm text-emerald-300">
                      <Arrow size={14} aria-hidden="true" />
                      {k.delta}
                    </span>
                  </dd>
                </div>
              );
            })}
          </dl>

          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <Panel title="Revenue, actual vs forecast ($k)" className="lg:col-span-2">
              <LineChart />
              <div className="mt-2 flex gap-5 text-xs text-white/60">
                <span className="inline-flex items-center gap-2">
                  <span aria-hidden="true" className="bi-spectrum-bg h-[3px] w-5 rounded-full" />
                  Actual
                </span>
                <span className="inline-flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="h-0 w-5 border-t-2 border-dashed border-[#a78bfa]"
                  />
                  Forecast
                </span>
              </div>
            </Panel>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <Panel title="Sales index by region">
                <BarChart />
              </Panel>
              <Panel title="Revenue by channel">
                <Donut />
              </Panel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
