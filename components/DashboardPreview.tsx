"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { AlertTriangle } from "lucide-react";
import Image from "next/image";

/* ============================================================
   useInView — fires callback only when element enters viewport
   Each section gets its own observer so animations are isolated
============================================================ */
function useInView(onEnter: () => void) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) onEnter();
        });
      },
      {
        threshold: 0.25, // element must be 25% visible to fire
        rootMargin: "0px 0px -40px 0px",
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}

/* ============================================================
   CollapseIcon
============================================================ */
const CollapseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={36}
    height={36}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#f0)">
      <rect x={8} y={4} width={48} height={48} rx={24} fill="white" />
      <rect x={8.5} y={4.5} width={47} height={47} rx={23.5} stroke="#DBDFE7" />
      <path
        d="M31.92 35.92L24 28L31.92 20.08L33.33 21.5L27.83 27H42V29H27.83L33.34 34.5L31.92 35.92ZM24 28V18H22V38H24V28Z"
        fill="#636771"
      />
    </g>
    <defs>
      <filter
        id="f0"
        x={0}
        y={0}
        width={64}
        height={64}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={4} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0588235 0 0 0 0 0.0901961 0 0 0 0 0.164706 0 0 0 0.12 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

/* ============================================================
   Animated Number — easeOutCubic over 2s
============================================================ */
function AnimatedNumber({
  value,
  animKey,
}: {
  value: number;
  animKey: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
    const DURATION = 2000;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, animKey]);

  return <>{count}</>;
}

/* ============================================================
   Animated Percentage — easeOutCubic over 2s
============================================================ */
function AnimatedPercentage({
  value,
  animKey,
}: {
  value: number;
  animKey: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
    const DURATION = 2000;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, animKey]);

  return <>{count}%</>;
}

/* ============================================================
   Animated Progress Bar — 2.4s easeOutExpo
============================================================ */
function AnimatedProgressBar({
  percent,
  color,
  bgColor,
  animKey,
}: {
  percent: number;
  color: string;
  bgColor: string;
  animKey: number;
}) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(0);
    const timeout = setTimeout(() => setWidth(percent), 300);
    return () => clearTimeout(timeout);
  }, [percent, animKey]);

  return (
    <div
      className="h-2.5 rounded-full overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <div
        className="h-2.5 rounded-full"
        style={{
          width: `${width}%`,
          backgroundColor: color,
          transition: "width 2.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
    </div>
  );
}

/* ============================================================
   Sparkline — 2.8s draw
============================================================ */
function Sparkline({
  points,
  color,
  fill,
  animKey,
}: {
  points: number[];
  color: string;
  fill: string;
  animKey: number;
}) {
  const W = 110,
    H = 50;
  const max = Math.max(...points),
    min = Math.min(...points),
    range = max - min || 1;
  const coords = points.map((p, i) => ({
    x: (i / (points.length - 1)) * W,
    y: H - ((p - min) / range) * (H - 6) - 3,
  }));
  const line = coords
    .map((c, i) => (i === 0 ? `M${c.x},${c.y}` : `L${c.x},${c.y}`))
    .join(" ");
  const area = `${line} L${coords[coords.length - 1].x},${H} L0,${H} Z`;
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const length = path.getTotalLength();
    path.style.transition = "none";
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;
    void path.getBoundingClientRect();
    path.style.transition =
      "stroke-dashoffset 2.8s cubic-bezier(0.16, 1, 0.3, 1)";
    path.style.strokeDashoffset = "0";
  }, [animKey]);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-24 h-18"
      preserveAspectRatio="none"
    >
      <path d={area} fill={fill} />
      <path
        ref={pathRef}
        d={line}
        stroke={color}
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ============================================================
   Profile
============================================================ */
function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setIsOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
      >
        <Image
          src="/Profile_icon.svg"
          alt="Profile"
          width={120}
          height={30}
          className="h-7 w-auto sm:h-8"
          priority
        />
      </button>
    </div>
  );
}

/* ============================================================
   Top Profile Bar
============================================================ */
function TopProfileBar() {
  const [open, setOpen] = useState(false);
  const [hasNew, setHasNew] = useState(true);
  return (
    <div className="flex relative px-5 py-3 rounded-2xl items-center justify-between gap-4 bg-white shadow-[0_0_16px_0_#1D2F5126]">
      <h1 className="flex items-center gap-2.5 text-[15px] font-semibold text-[#1A2C50]">
        <Image
          src="/Institution.svg"
          alt="Institution"
          width={12}
          height={12}
          className="w-6 h-6"
          priority
        />
        Institution Admin Portal
      </h1>
      <div className="shrink-0 flex items-center gap-5 relative">
        <Image
          src="/broadcast.svg"
          alt="Broadcast"
          width={120}
          height={30}
          className="h-7 w-auto sm:h-8"
          priority
        />
        <div className="relative">
          <button
            onClick={() => {
              setOpen((v) => !v);
              setHasNew(false);
            }}
            className="relative"
          >
            <Image
              src="/notifications.svg"
              alt="Notifications"
              width={120}
              height={30}
              className="h-7 w-auto sm:h-8"
              priority
            />
            {hasNew && (
              <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full border-white" />
            )}
          </button>
        </div>
        <Profile />
      </div>
    </div>
  );
}

/* ============================================================
   Sidebar
============================================================ */
const SIDEBAR_ITEMS = [
  {
    label: "Dashboard",
    icon: (
      <Image
        src="/Dashboard.svg"
        alt="dashboard"
        width={12}
        height={12}
        className="w-10 h-6"
        priority
      />
    ),
    active: true,
  },
  {
    label: "Organization",
    icon: (
      <Image
        src="/Organization.svg"
        alt="organization"
        width={12}
        height={12}
        className="w-10 h-6"
        priority
      />
    ),
  },
  {
    label: "User Management",
    icon: (
      <Image
        src="/User.svg"
        alt="user"
        width={12}
        height={12}
        className="w-10 h-6"
        priority
      />
    ),
  },
  {
    label: "Student Management",
    icon: (
      <Image
        src="/Student.svg"
        alt="student"
        width={12}
        height={12}
        className="w-10 h-6"
        priority
      />
    ),
  },
  {
    label: "Assessment",
    icon: (
      <Image
        src="/Assessment.svg"
        alt="assessment"
        width={12}
        height={12}
        className="w-10 h-6"
        priority
      />
    ),
  },
  {
    label: "Assignment",
    icon: (
      <Image
        src="/Assignment.svg"
        alt="assignment"
        width={12}
        height={12}
        className="w-10 h-6"
        priority
      />
    ),
  },
];

function Sidebar({
  collapsed,
  onToggle,
}: {
  collapsed: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`relative bg-white shadow-[0px_0px_8px_0px_#0F172A1F] rounded-2xl transition-all duration-300 flex-shrink-0 hidden lg:flex flex-col ${collapsed ? "w-[72px]" : "w-[260px]"}`}
    >
      <div
        className={`relative px-4 pt-5 pb-4 border-b border-gray-100 min-h-[80px] flex items-center ${collapsed ? "justify-center" : ""}`}
      >
        {!collapsed ? (
          <Image
            src="/Container.svg"
            alt="Menntr"
            width={120}
            height={30}
            className="h-7 w-auto sm:h-8"
            priority
          />
        ) : (
          <Image
            src="/M_logo.svg"
            alt="Menntr"
            width={120}
            height={30}
            className="h-7 w-auto sm:h-8"
            priority
          />
        )}
        <div
          className="absolute -right-[18px] top-1/2 -translate-y-1/2 cursor-pointer z-10"
          onClick={onToggle}
        >
          <CollapseIcon
            style={{
              transform: collapsed ? "scaleX(-1)" : "scaleX(1)",
              transition: "transform 0.3s",
            }}
          />
        </div>
      </div>
      <nav className="flex-1 py-3 space-y-0.5 px-2">
        {SIDEBAR_ITEMS.map((item, i) => (
          <div
            key={i}
            title={collapsed ? item.label : undefined}
            className={`flex items-center gap-3 px-3 py-4 rounded-xl text-base cursor-pointer transition-colors ${item.active ? "bg-[#F3EFFF] text-[#7C3AED] font-semibold" : "text-[#6B7280] hover:bg-gray-50"} ${collapsed ? "justify-center" : ""}`}
          >
            <span className={item.active ? "text-[#7C3AED]" : "text-[#9CA3AF]"}>
              {item.icon}
            </span>
            {!collapsed && <span>{item.label}</span>}
          </div>
        ))}
      </nav>
    </div>
  );
}

/* ============================================================
   Welcome Header
============================================================ */
function WelcomeHeader() {
  return (
    <div className="flex justify-between items-center flex-wrap gap-3">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
          <Image
            src="/Avatar_icon.svg"
            alt="Avatar"
            width={12}
            height={16}
            className="w-12 h-12"
            priority
          />
        </div>
        <div>
          <h2 className="text-[20px] font-semibold text-[#1A2C50]">
            Welcome back, Javed 👋
          </h2>
          <p className="text-sm text-[#9CA3AF]">
            Here's your institution performance summary
          </p>
        </div>
      </div>
      <div className="flex items-center gap-1.5 text-sm font-semibold text-[#F59E0B]">
        <AlertTriangle size={15} />
        Your plan is going to expire
      </div>
    </div>
  );
}

/* ============================================================
   StatCard — has its OWN observer, animates when IT enters view
============================================================ */
function StatCard({
  title,
  value,
  trend,
  trendUp,
  sub,
  icon,
  sparkPoints,
  sparkColor,
  sparkFill,
}: {
  title: string;
  value: number;
  trend: string;
  trendUp: boolean;
  sub?: string;
  icon: React.ReactNode;
  sparkPoints: number[];
  sparkColor: string;
  sparkFill: string;
}) {
  const [animKey, setAnimKey] = useState(0);
  const ref = useInView(useCallback(() => setAnimKey((k) => k + 1), []));
  const trendNumber = parseInt(trend.replace("%", ""));

  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl p-5 shadow-[0px_0px_8px_0px_#0F172A1F]"
    >
      <div className="flex items-start justify-between gap-6">
        <div className="flex flex-col flex-1">
          <div className="flex items-center gap-2 text-sm font-medium text-black mb-4">
            <span className="text-[#9CA3AF]">{icon}</span>
            <span>{title}</span>
          </div>
          <div className="flex items-end gap-3">
            <span className="text-[34px] font-bold text-[#1A2C50] leading-none tracking-tight">
              <AnimatedNumber value={value} animKey={animKey} />
            </span>
            <span
              className={`flex items-center gap-1 text-sm font-semibold mb-1 ${trendUp ? "text-[#22C55E]" : "text-[#F97316]"}`}
            >
              {trendUp ? (
                <Image
                  src="/percentage_arrow.svg"
                  alt="up"
                  width={12}
                  height={12}
                  className="w-3 h-3"
                  priority
                />
              ) : (
                <Image
                  src="/percentage_down_arrow.svg"
                  alt="down"
                  width={12}
                  height={12}
                  className="w-3 h-3"
                  priority
                />
              )}
              <AnimatedPercentage value={trendNumber} animKey={animKey} />
            </span>
          </div>
          <p className="text-xs text-[#9CA3AF] mt-3">Compared to last month</p>
          {sub && (
            <p className="text-xs font-semibold text-[#F97316] mt-1">{sub}</p>
          )}
        </div>
        <div className="flex-shrink-0 mt-1">
          <Sparkline
            points={sparkPoints}
            color={sparkColor}
            fill={sparkFill}
            animKey={animKey}
          />
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Academic Performance Donut — easeOutCubic over 2.5s
============================================================ */
function AcademicDonut({
  pct = 71,
  animKey = 0,
}: {
  pct?: number;
  animKey: number;
}) {
  const [animPct, setAnimPct] = useState(0);

  useEffect(() => {
    setAnimPct(0);
    const delay = setTimeout(() => {
      const DURATION = 2500;
      const startTime = performance.now();
      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / DURATION, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setAnimPct(eased * pct);
        if (progress < 1) requestAnimationFrame(tick);
      };
      const raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }, 200);
    return () => clearTimeout(delay);
  }, [pct, animKey]);

  const SIZE = 220;
  const cx = SIZE / 2,
    cy = SIZE / 2;
  const R = 76,
    SW = 24;
  const circumference = 2 * Math.PI * R;
  const dashOffset = circumference - (animPct / 100) * circumference;
  const middleR = R - SW / 2 - 1;
  const innerR = R - SW / 2 - 14;

  return (
    <div
      style={{ position: "relative", width: SIZE, height: SIZE, flexShrink: 0 }}
    >
      <svg
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        style={{ overflow: "visible", transform: "rotate(90deg)" }}
      >
        <defs>
          <linearGradient id="dnt-purpleGrad" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#7B3AEC" />
            <stop offset="50%" stopColor="#A23AEC" />
            <stop offset="100%" stopColor="#AE3AEC" />
          </linearGradient>
          <linearGradient id="dnt-trackGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="44.76%" stopColor="#F4F4F4" />
            <stop offset="100%" stopColor="#FAFAFA" />
          </linearGradient>
          <linearGradient
            id="dnt-middleGrad"
            x1="0%"
            y1="0%"
            x2="86%"
            y2="100%"
          >
            <stop offset="14.03%" stopColor="#FCFDFF" />
            <stop offset="86.47%" stopColor="#D6DCE1" />
          </linearGradient>
          <linearGradient id="dnt-innerGrad" x1="0%" y1="0%" x2="86%" y2="100%">
            <stop offset="13.37%" stopColor="#EDEFF1" />
            <stop offset="85.76%" stopColor="#E5E9EC" />
          </linearGradient>
          <filter id="dnt-arcGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="5" result="blur" />
            <feFlood floodColor="#7C3AED" floodOpacity="0.45" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter
            id="dnt-middleShadow"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feDropShadow
              dx="2"
              dy="4"
              stdDeviation="6"
              floodColor="#6D28D9"
              floodOpacity="0.18"
            />
          </filter>
          <filter
            id="dnt-innerShadow"
            x="-30%"
            y="-30%"
            width="160%"
            height="160%"
          >
            <feDropShadow
              dx="1"
              dy="2"
              stdDeviation="4"
              floodColor="#00000015"
            />
          </filter>
        </defs>
        <circle
          cx={cx}
          cy={cy}
          r={R}
          fill="none"
          stroke="url(#dnt-trackGrad)"
          strokeWidth={SW}
        />
        <circle
          cx={cx}
          cy={cy}
          r={R}
          fill="none"
          stroke="url(#dnt-purpleGrad)"
          strokeWidth={SW}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          filter="url(#dnt-arcGlow)"
        />
        <circle
          cx={cx}
          cy={cy}
          r={middleR}
          fill="url(#dnt-middleGrad)"
          filter="url(#dnt-middleShadow)"
        />
        <circle
          cx={cx}
          cy={cy}
          r={innerR}
          fill="url(#dnt-innerGrad)"
          filter="url(#dnt-innerShadow)"
        />
      </svg>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 4,
        }}
      >
        <span
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: "#1A2C50",
            lineHeight: 1,
            letterSpacing: "-0.5px",
          }}
        >
          {Math.round(animPct)}%
        </span>
      </div>
    </div>
  );
}

/* ============================================================
   Academic Performance Card — has its OWN observer
============================================================ */
function AcademicPerformanceCard() {
  const [animKey, setAnimKey] = useState(0);
  const ref = useInView(useCallback(() => setAnimKey((k) => k + 1), []));

  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl p-6 shadow-[0px_0px_8px_0px_#0F172A1F]"
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-start gap-2">
          <Image
            src="/Avg_Academic_Performance.svg"
            alt="Academic"
            width={12}
            height={12}
            className="w-6 h-6 mt-0.5"
            priority
          />
          <div>
            <div className="text-[15px] font-semibold text-[#1A2C50]">
              Avg Academic Performance
            </div>
            <p className="text-xs text-[#9CA3AF] mt-0.5">
              Minimum requirement: 75%
            </p>
          </div>
        </div>
        <button className="flex items-center gap-1 text-xs text-[#767F90] px-3 hover:bg-gray-50 whitespace-nowrap">
          All Departments
          <Image
            src="/Down_arrow.svg"
            alt="down"
            width={20}
            height={20}
            className="w-6 h-5"
            priority
          />
        </button>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <AcademicDonut pct={71} animKey={animKey} />
        <div className="flex flex-col gap-4 flex-1 w-full">
          <div>
            <div className="flex items-center gap-2 text-sm text-[#6B7280]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] flex-shrink-0" />
              High performers
            </div>
            <p className="text-[20px] font-bold text-[#22C55E] mt-0.5 ml-[18px]">
              <AnimatedNumber value={312} animKey={animKey} /> students
            </p>
          </div>
          <div className="h-px bg-gray-100" />
          <div>
            <div className="flex items-center gap-2 text-sm text-[#6B7280]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F97316] flex-shrink-0" />
              At-risk students
            </div>
            <p className="text-[20px] font-bold text-[#F97316] mt-0.5 ml-[18px]">
              <AnimatedNumber value={35} animKey={animKey} /> students
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Placement Readiness Card — has its OWN observer
============================================================ */
function PlacementReadinessCard() {
  const [animKey, setAnimKey] = useState(0);
  const ref = useInView(useCallback(() => setAnimKey((k) => k + 1), []));

  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl p-6 shadow-[0px_0px_8px_0px_#0F172A1F]"
    >
      <div className="flex items-center gap-2 text-[15px] font-semibold text-[#1A2C50] mb-6">
        <Image
          src="/Placement.svg"
          alt="Placement"
          width={120}
          height={30}
          className="h-7 w-auto sm:h-8"
          priority
        />
        Placement Readiness Overview
      </div>
      <div className="space-y-7">
        <div>
          <p className="text-sm text-[#6B7280]">Ready for placement</p>
          <p className="text-[18px] font-bold text-[#1A2C50] mt-0.5">
            <AnimatedNumber value={300} animKey={animKey} />
            /1100 students
          </p>
          <div className="mt-2.5">
            <AnimatedProgressBar
              percent={27}
              color="#22C55E"
              bgColor="#DCFCE7"
              animKey={animKey}
            />
          </div>
          <p className="text-xs text-[#9CA3AF] mt-1.5">
            245 students scoring above the required threshold
          </p>
        </div>
        <div>
          <p className="text-sm text-[#6B7280]">Not ready</p>
          <p className="text-[18px] font-bold text-[#1A2C50] mt-0.5">
            <AnimatedNumber value={800} animKey={animKey} />
            /1100 students
          </p>
          <div className="mt-2.5">
            <AnimatedProgressBar
              percent={73}
              color="#F59E0B"
              bgColor="#FEF9C3"
              animKey={animKey}
            />
          </div>
          <p className="text-xs text-[#9CA3AF] mt-1.5">
            158 students requiring significant support
          </p>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Bottom Sections
============================================================ */
function BottomSections() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="bg-white rounded-2xl p-5 shadow-[0px_0px_8px_0px_#0F172A1F]">
        <div className="flex items-center gap-2 text-[15px] font-semibold text-[#1A2C50]">
          <Image
            src="/Academic_performance_by_department.svg"
            alt="dept"
            width={16}
            height={16}
            className="w-6 h-4"
            priority
          />
          Academic Performance by department
        </div>
      </div>
      <div className="bg-white rounded-2xl p-5 shadow-[0px_0px_8px_0px_#0F172A1F]">
        <div className="flex items-center gap-2 text-[15px] font-semibold text-[#1A2C50]">
          <Image
            src="/Minimum_Score.svg"
            alt="score"
            width={16}
            height={16}
            className="w-6 h-4"
            priority
          />
          Minimum Score Requirement line
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Root Export
   — No longer needs a global animKey or observer.
     Each card manages its own animation trigger.
============================================================ */
export default function DashboardPreview() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <section className="max-w-[1400px] mx-auto pt-8 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-b from-[#F6F1FF] to-[#FFFFFF] rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-6 lg:p-8">
        <div className="flex gap-6 items-stretch">
          <Sidebar
            collapsed={sidebarCollapsed}
            onToggle={() => setSidebarCollapsed((v) => !v)}
          />
          <div className="flex-1 min-w-0 space-y-4">
            <TopProfileBar />
            <WelcomeHeader />

            {/* Stat cards — each observes itself */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              <StatCard
                title="Total Students"
                value={1100}
                trend="15%"
                trendUp={true}
                icon={
                  <Image
                    src="/Total_Students.svg"
                    alt="students"
                    width={120}
                    height={30}
                    className="h-7 w-auto sm:h-8"
                    priority
                  />
                }
                sparkPoints={[50, 55, 48, 60, 70, 66, 80, 90, 95, 110]}
                sparkColor="#22C55E"
                sparkFill="rgba(34,197,94,0.15)"
              />
              <StatCard
                title="Faculty Members"
                value={150}
                trend="1%"
                trendUp={false}
                icon={
                  <Image
                    src="/Faculty_Members.svg"
                    alt="faculty"
                    width={120}
                    height={30}
                    className="h-7 w-auto sm:h-8"
                    priority
                  />
                }
                sparkPoints={[165, 160, 158, 162, 155, 158, 152, 155, 150, 148]}
                sparkColor="#F97316"
                sparkFill="rgba(249,115,22,0.15)"
              />
              <StatCard
                title="Assessments"
                value={12}
                trend="10%"
                trendUp={false}
                sub="3 due today"
                icon={
                  <Image
                    src="/Assessments.svg"
                    alt="assessments"
                    width={120}
                    height={30}
                    className="h-7 w-auto sm:h-8"
                    priority
                  />
                }
                sparkPoints={[20, 18, 22, 19, 16, 17, 15, 14, 13, 12]}
                sparkColor="#F97316"
                sparkFill="rgba(249,115,22,0.15)"
              />
            </div>

            {/* Performance cards — each observes itself */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <AcademicPerformanceCard />
              <PlacementReadinessCard />
            </div>

            <BottomSections />
          </div>
        </div>
      </div>
    </section>
  );
}
