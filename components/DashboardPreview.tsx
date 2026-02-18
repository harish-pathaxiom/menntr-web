"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  LayoutDashboard,
  UserRound,
  BarChart3,
  Bell,
  Radio,
  AlertTriangle,
} from "lucide-react";
import Image from "next/image";
/* ============================================================
   MenntrLogo — full wordmark SVG
============================================================ */
const MenntrLogo = () => (
  <svg
    width="160"
    height="44"
    viewBox="0 0 160 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Stylised M icon */}
    <g>
      <rect width="36" height="36" rx="8" fill="#1A2C50" />
      <path
        d="M7 27V11l7 9 7-9v16M21 27V11l7 9 7-9v16"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </g>
    {/* Wordmark */}
    <text
      x="44"
      y="26"
      fontFamily="Georgia,'Times New Roman',serif"
      fontSize="22"
      fontWeight="700"
      fill="#1A2C50"
      letterSpacing="-0.5"
    >
      Menntr
    </text>
    {/* Tagline */}
    <text
      x="44"
      y="39"
      fontFamily="-apple-system,BlinkMacSystemFont,sans-serif"
      fontSize="8"
      fill="#9CA3AF"
    >
      Smarter Campus Management
    </text>
  </svg>
);

// const MenntrLogoMark = () => (
//   <svg
//     width="36"
//     height="36"
//     viewBox="0 0 36 36"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <rect width="36" height="36" rx="8" fill="#1A2C50" />
//     <path
//       d="M5 27V11l6.5 8.5L18 11l6.5 8.5L31 11v16"
//       stroke="white"
//       strokeWidth="2.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       fill="none"
//     />
//   </svg>
// );

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
   Animated Number — resets and re-animates when key changes
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
    let start = 0;
    const inc = value / 60;
    const timer = setInterval(() => {
      start += inc;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [value, animKey]);
  return <>{count}</>;
}
/* ============================================================
   Animated Progress Bar
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

    const timeout = setTimeout(() => {
      setWidth(percent);
    }, 200); // slight delay for smoother feel

    return () => clearTimeout(timeout);
  }, [percent, animKey]);

  return (
    <div
      className="h-2.5 rounded-full overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <div
        className="h-2.5 rounded-full transition-all duration-1000 ease-out"
        style={{
          width: `${width}%`,
          backgroundColor: color,
        }}
      />
    </div>
  );
}

/* ============================================================
   Icons
============================================================ */
const StudentIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);
const FacultyIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const CalendarIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const OrgIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="8" y="2" width="8" height="4" rx="1" />
    <rect x="2" y="14" width="8" height="4" rx="1" />
    <rect x="14" y="14" width="8" height="4" rx="1" />
    <path d="M12 6v4M6 14V10h12v4" />
  </svg>
);
const SidebarStudentIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);
const AssessmentIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 9h6M9 12h6M9 15h4" />
  </svg>
);
const AssignmentIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="9" y1="13" x2="15" y2="13" />
    <line x1="9" y1="17" x2="13" y2="17" />
  </svg>
);

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
  const W = 110;
  const H = 50;

  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;

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

    // Reset animation
    path.style.transition = "none";
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    // Force reflow (important!)
    void path.getBoundingClientRect();

    // Start animation
    path.style.transition = "stroke-dashoffset 1.8s ease-out";
    path.style.strokeDashoffset = "0";
  }, [animKey]); // This will re-run every time page enters viewport

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-28 h-18"
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
   Notification Popover
============================================================ */
type Notification = {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  isNew?: boolean;
};
const MOCK_NOTIFS: Notification[] = [
  {
    id: 1,
    title: "New Assessment Added",
    description: "A new assessment has been scheduled for CSE department.",
    createdAt: new Date(),
    isNew: true,
  },
  {
    id: 2,
    title: "Plan Expiry Reminder",
    description: "Your institutional plan expires in 7 days. Renew now.",
    createdAt: new Date(),
    isNew: true,
  },
  {
    id: 3,
    title: "Report Generated",
    description: "Monthly performance report is ready for download.",
    createdAt: new Date(Date.now() - 86400000),
    isNew: false,
  },
];
function groupNotifs(notifs: Notification[]) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const groups: Record<string, Notification[]> = {};
  notifs.forEach((n) => {
    const d = new Date(n.createdAt);
    d.setHours(0, 0, 0, 0);
    const label =
      +d === +today
        ? "Today"
        : +d === +yesterday
          ? "Yesterday"
          : `${Math.floor((today.getTime() - d.getTime()) / 86400000)} days ago`;
    if (!groups[label]) groups[label] = [];
    groups[label].push(n);
  });
  return groups;
}
function NotificationPopover({
  open,
  onClose,
  notifications,
}: {
  open: boolean;
  onClose: () => void;
  notifications: Notification[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [onClose]);
  if (!open) return null;
  const fmt = (d: Date) =>
    d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const grouped = groupNotifs(notifications);
  return (
    <div
      ref={ref}
      className="absolute right-0 top-[52px] z-50 w-[360px] max-w-[90vw] rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
    >
      <div className="px-4 py-3 border-b border-[#EEF2F7]">
        <h3 className="text-[16px] font-semibold text-[#1A2C50]">
          Notifications
        </h3>
        <p className="text-[13px] text-[#6B7280]">
          All updates, alerts, and announcements in one place
        </p>
      </div>
      <div className="max-h-[420px] overflow-y-auto px-3 py-3 space-y-4">
        {Object.entries(grouped).map(([label, items]) => (
          <div key={label}>
            <div className="bg-[#F1F5F9] rounded-lg px-3 py-1.5 mb-3">
              <span className="text-[13px] font-medium text-[#1A2C50]">
                {label}
              </span>
            </div>
            <div className="space-y-3">
              {items.map((n, i) => (
                <div key={n.id}>
                  <div className="flex gap-2">
                    {n.isNew && (
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#EF4444] flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <div className="flex justify-between gap-2">
                        <p className="text-[14px] font-semibold text-[#1A2C50]">
                          {n.title}
                        </p>
                        <span className="text-[12px] text-[#6B7280] whitespace-nowrap">
                          {fmt(n.createdAt)}
                        </span>
                      </div>
                      <p className="text-[13px] text-[#6B7280] mt-1">
                        {n.description}
                      </p>
                    </div>
                  </div>
                  {i !== items.length - 1 && (
                    <div className="h-px bg-[#EEF2F7] mt-3" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   Profile Dropdown
============================================================ */
// function ProfileDropdown({
//   onResetPassword,
//   onLogout,
// }: {
//   onResetPassword: () => void;
//   onLogout: () => void;
// }) {
//   return (
//     <div className="absolute right-0 top-12 z-50 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1">
//       <div className="px-4 py-2 border-b border-gray-100">
//         <p className="text-sm font-semibold text-[#1A2C50]">Javed Khan</p>
//         <p className="text-xs text-gray-500">Institution Admin</p>
//       </div>
//       <button
//         onClick={onResetPassword}
//         className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
//       >
//         Reset Password
//       </button>
//       <button
//         onClick={onLogout}
//         className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
//       >
//         Logout
//       </button>
//     </div>
//   );
// }
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
          alt="Menntr"
          width={120}
          height={30}
          className="h-7 w-auto sm:h-8"
          priority
        />
      </button>
      {/* {isOpen && (
        <ProfileDropdown
          onResetPassword={() => {
            alert("Reset Password");
            setIsOpen(false);
          }}
          onLogout={() => {
            alert("Logout");
            setIsOpen(false);
          }}
        />
      )} */}
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
          alt="Menntr"
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
          alt="Menntr"
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
              alt="Menntr"
              width={120}
              height={30}
              className="h-7 w-auto sm:h-8"
              priority
            />
            {hasNew && (
              <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full border-white" />
            )}
          </button>
          {/* <NotificationPopover
            open={open}
            onClose={() => setOpen(false)}
            notifications={MOCK_NOTIFS}
          /> */}
        </div>
        <Profile />
      </div>
    </div>
  );
}

/* ============================================================
   Sidebar
   – Collapse toggle is now flush with the top-right corner of
     the logo area (matching the screenshot exactly)
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
      className={`relative bg-white/50  shadow-[0px_0px_8px_0px_#0F172A1F] rounded-2xl transition-all duration-300 flex-shrink-0 hidden lg:flex flex-col ${collapsed ? "w-[72px]" : "w-[260px]"}`}
    >
      {/* ── Logo area with collapse button in top-right corner ── */}
      <div
        className={`relative px-4 pt-5 pb-4 border-b border-gray-100 min-h-[80px] flex items-center ${collapsed ? "justify-center" : ""}`}
      >
        {/* Logo */}
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

        {/* Collapse toggle — positioned at the right edge of the logo bar,
            overlapping the sidebar border just like the screenshot */}
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

      {/* ── Nav ── */}
      <nav className="flex-1 py-3 space-y-0.5 px-2">
        {SIDEBAR_ITEMS.map((item, i) => (
          <div
            key={i}
            title={collapsed ? item.label : undefined}
            className={`flex items-center gap-3 px-3 py-4 rounded-xl text-base cursor-pointer transition-colors ${
              item.active
                ? "bg-[#F3EFFF] text-[#7C3AED] font-semibold"
                : "text-[#6B7280] hover:bg-gray-50"
            } ${collapsed ? "justify-center" : ""}`}
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
        <div className="w-12 h-12 rounded-full  flex items-center justify-center flex-shrink-0">
          <span className="text-2xl select-none">
            <Image
              src="/Avatar_icon.svg"
              alt="Avatar Icon"
              width={12}
              height={16}
              className="w-12 h-12"
              priority
            />
          </span>
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
   Animated Percentage
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
    let start = 0;
    const inc = value / 40;

    const timer = setInterval(() => {
      start += inc;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [value, animKey]);

  return <>{count}%</>;
}

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
  animKey,
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
  animKey: number;
}) {
  const trendNumber = parseInt(trend.replace("%", ""));

  return (
    <div className="bg-white/50  rounded-2xl p-6 shadow-[0px_0px_8px_0px_#0F172A1F]">
      {/* MAIN FLEX — LEFT CONTENT + RIGHT SPARKLINE */}
      <div className="flex items-start justify-between gap-6">
        {/* LEFT SIDE */}
        <div className="flex flex-col flex-1">
          {/* Title */}
          <div className="flex items-center gap-2 text-sm font-medium text-[#6B7280] mb-4">
            <span className="text-[#9CA3AF]">{icon}</span>
            <span>{title}</span>
          </div>

          {/* Value + Trend */}
          <div className="flex items-end gap-3">
            <span className="text-[34px] font-bold text-[#1A2C50] leading-none tracking-tight">
              <AnimatedNumber value={value} animKey={animKey} />
            </span>

            <span
              className={`flex items-center gap-1 text-sm font-semibold mb-1 ${
                trendUp ? "text-[#22C55E]" : "text-[#F97316]"
              }`}
            >
              {trendUp ? (
                <Image
                  src="/percentage_arrow.svg"
                  alt="arrow"
                  width={12}
                  height={12}
                  className="w-3 h-3"
                  priority
                />
              ) : (
                <Image
                  src="/percentage_down_arrow.svg"
                  alt="arrow"
                  width={12}
                  height={12}
                  className="w-3 h-3"
                  priority
                />
              )}
              <AnimatedPercentage value={trendNumber} animKey={animKey} />
            </span>
          </div>

          {/* Footer Text */}
          <p className="text-xs text-[#9CA3AF] mt-3">Compared to last month</p>

          {sub && (
            <p className="text-xs font-semibold text-[#F97316] mt-1">{sub}</p>
          )}
        </div>

        {/* RIGHT SIDE — Sparkline */}
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
   Academic Performance Donut
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
      let v = 0;
      const step = pct / 60;
      const t = setInterval(() => {
        v += step;
        if (v >= pct) {
          setAnimPct(pct);
          clearInterval(t);
        } else {
          setAnimPct(v);
        }
      }, 16);
      return () => clearInterval(t);
    }, 200);
    return () => clearTimeout(delay);
  }, [pct, animKey]);

  // ─── Dimensions ────────────────────────────────────────────────
  const SIZE = 220;
  const cx = SIZE / 2; // 110
  const cy = SIZE / 2; // 110
  const R = 78; // circle radius
  const SW = 26; // stroke width
  const circumference = 2 * Math.PI * R; // ~490

  // ─── Derived values ────────────────────────────────────────────
  // animPct goes 0 → pct during animation
  // dashOffset shrinks from circumference (empty) → circumference - filled (full pct)
  const dashOffset = circumference - (animPct / 100) * circumference;

  const outerR = R + SW / 2 + 5; // decorative outer ring radius
  const innerR = R - SW / 2 - 3; // inner circle radius

  return (
    <div
      style={{ position: "relative", width: SIZE, height: SIZE, flexShrink: 0 }}
    >
      {/*
        rotate(90deg)  → shifts the 0° start from 3 o'clock to 6 o'clock (bottom center)
        Arc then fills CLOCKWISE from bottom:
          bottom → left → top → right → back toward bottom
        At 71%: covers 71% of the full circle ✓
      */}
      <svg
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        style={{ overflow: "visible", transform: "rotate(90deg)" }}
      >
        <defs>
          {/* Purple gradient for filled arc */}
          <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5B21B6" />
            <stop offset="50%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#9333EA" />
          </linearGradient>

          {/* Outer ring gradient */}
          <linearGradient id="outerGrad" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#CDD5DE" />
          </linearGradient>

          {/* Inner circle gradient */}
          <linearGradient id="innerGrad" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#EEF0F3" />
            <stop offset="100%" stopColor="#E0E5EA" />
          </linearGradient>

          {/* Track (unfilled arc) */}
          <linearGradient id="trackGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#EBEBEB" />
            <stop offset="100%" stopColor="#F6F6F6" />
          </linearGradient>

          {/* Glow filter for purple arc */}
          <filter id="arcGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="6" result="blur" />
            <feFlood floodColor="#7C3AED" floodOpacity="0.5" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Shadow for inner circle */}
          <filter id="innerShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow
              dx="3"
              dy="6"
              stdDeviation="8"
              floodColor="#6D28D9"
              floodOpacity="0.15"
            />
          </filter>

          {/* Shadow for outer ring */}
          <filter id="outerShadow" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow
              dx="1"
              dy="2"
              stdDeviation="5"
              floodColor="#00000025"
            />
          </filter>
        </defs>

        {/* Outer decorative ring */}
        <circle
          cx={cx}
          cy={cy}
          r={outerR}
          fill="url(#outerGrad)"
          filter="url(#outerShadow)"
        />

        {/* Inner circle */}
        <circle
          cx={cx}
          cy={cy}
          r={innerR}
          fill="url(#innerGrad)"
          filter="url(#innerShadow)"
        />

        {/* Gray background track — full circle */}
        <circle
          cx={cx}
          cy={cy}
          r={R}
          fill="none"
          stroke="url(#trackGrad)"
          strokeWidth={SW}
        />

        {/* Purple filled arc — animates from 0 → pct% of full circle */}
        <circle
          cx={cx}
          cy={cy}
          r={R}
          fill="none"
          stroke="url(#arcGrad)"
          strokeWidth={SW}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          filter="url(#arcGlow)"
        />
      </svg>

      {/* Center percentage label — NOT rotated, sits above SVG */}
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
   Academic Performance Card
============================================================ */
function AcademicPerformanceCard({ animKey }: { animKey: number }) {
  return (
    <div className="bg-white/50 rounded-2xl p-6 shadow-[0px_0px_8px_0px_#0F172A1F]">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-start gap-2">
          <Image
            src="/Avg_Academic_Performance.svg"
            alt="Menntr"
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

        <button className="flex items-center gap-1 text-xs text-[#767F90] px-3  hover:bg-gray-50 whitespace-nowrap">
          All Departments
          <Image
            src="/Down_arrow.svg"
            alt="Menntr"
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
   Placement Readiness Card
============================================================ */
function PlacementReadinessCard({ animKey }: { animKey: number }) {
  return (
    <div className="bg-white/50 rounded-2xl p-6 shadow-[0px_0px_8px_0px_#0F172A1F]">
      <div className="flex items-center gap-2 text-[15px] font-semibold text-[#1A2C50] mb-6">
        <Image
          src="/Placement.svg"
          alt="Menntr"
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
      <div className="bg-white/50 rounded-2xl p-5 shadow-[0px_0px_8px_0px_#0F172A1F]">
        <div className="flex items-center gap-2 text-[15px] font-semibold text-[#1A2C50]">
          <Image
            src="/Academic_performance_by_department.svg"
            alt="Menntr"
            width={16}
            height={16}
            className="w-6 h-4"
            priority
          />
          Academic Performance by department
        </div>
      </div>
      <div className="bg-white/50 rounded-2xl p-5 shadow-[0px_0px_8px_0px_#0F172A1F]">
        <div className="flex items-center gap-2 text-[15px] font-semibold text-[#1A2C50]">
          <Image
            src="/Minimum_Score.svg"
            alt="Menntr"
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
   – Uses IntersectionObserver to trigger animations every time
     the dashboard enters the viewport (including on first visit)
============================================================ */
export default function DashboardPreview() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Bump key to restart all animations
            setAnimKey((k) => k + 1);
          }
        });
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="max-w-[1400px] mx-auto pt-8 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="bg-gradient-to-b from-[#F6F1FF] to-[#FFFFFF] rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-6 lg:p-8">
        <div className="flex gap-6 items-stretch">
          <Sidebar
            collapsed={sidebarCollapsed}
            onToggle={() => setSidebarCollapsed((v) => !v)}
          />
          <div className="flex-1 min-w-0 space-y-4">
            <TopProfileBar />
            <WelcomeHeader />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              <StatCard
                title="Total Students"
                value={1100}
                trend="15%"
                trendUp={true}
                icon={
                  <Image
                    src="/Total_Students.svg"
                    alt="Menntr"
                    width={120}
                    height={30}
                    className="h-7 w-auto sm:h-8"
                    priority
                  />
                }
                sparkPoints={[50, 55, 48, 60, 70, 66, 80, 90, 95, 110]}
                sparkColor="#22C55E"
                sparkFill="rgba(34,197,94,0.15)"
                animKey={animKey}
              />
              <StatCard
                title="Faculty Members"
                value={150}
                trend="1%"
                trendUp={false}
                icon={
                  <Image
                    src="/Faculty_Members.svg"
                    alt="Menntr"
                    width={120}
                    height={30}
                    className="h-7 w-auto sm:h-8"
                    priority
                  />
                }
                sparkPoints={[165, 160, 158, 162, 155, 158, 152, 155, 150, 148]}
                sparkColor="#F97316"
                sparkFill="rgba(249,115,22,0.15)"
                animKey={animKey}
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
                    alt="Menntr"
                    width={120}
                    height={30}
                    className="h-7 w-auto sm:h-8"
                    priority
                  />
                }
                sparkPoints={[20, 18, 22, 19, 16, 17, 15, 14, 13, 12]}
                sparkColor="#F97316"
                sparkFill="rgba(249,115,22,0.15)"
                animKey={animKey}
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <AcademicPerformanceCard animKey={animKey} />
              <PlacementReadinessCard animKey={animKey} />
            </div>
            <BottomSections />
          </div>
        </div>
      </div>
    </section>
  );
}
