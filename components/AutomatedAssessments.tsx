"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  UserCog,
  GraduationCap,
  ClipboardList,
  FileText,
  Search,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Bell,
  Radio,
  PenTool,
  Settings,
} from "lucide-react";

export default function AutomatedAssessments() {
  const [selectedTab, setSelectedTab] = useState("Exams(In-Assessment)");

  const assessments = [
    {
      name: "ACCA-AP-Mod1 - IAI - 2025",
      category: "Aptitude",
      dept: "CSE • 2022-26",
      questions: 30,
      published: "23 Dec 2025",
    },
    {
      name: "ACCA-AP-Mod1 - IAI - 2025",
      category: "Domain",
      dept: "CSE • 2022-26",
      questions: 30,
      published: "23 Dec 2025",
    },
    {
      name: "ACCA-AP-Mod1 - IAI - 2025",
      category: "Aptitude",
      dept: "CSE • 2022-26",
      questions: 30,
      published: "23 Dec 2025",
    },
    {
      name: "ACCA-AP-Mod1 - IAI - 2025",
      category: "Domain",
      dept: "CSE • 2022-26",
      questions: 30,
      published: "23 Dec 2025",
    },
    {
      name: "ACCA-AP-Mod1 - IAI - 2025",
      category: "Domain",
      dept: "CSE • 2022-26",
      questions: 30,
      published: "23 Dec 2025",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-purple-50/30">
      {/* LEFT CONTENT */}
      <div className="w-[45%] flex items-center justify-center p-16">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Automated assessments with controlled re-attempts
          </h1>
          <p className="text-gray-600 text-lg mb-12">
            Streamline the entire evaluation process. Create complex
            assignments, define pass criteria, and let the system handle grading
            and re-attempts automatically.
          </p>

          <div className="space-y-8">
            <Feature
              icon={<PenTool />}
              title="Flexible Creation"
              text="Create MCQ, coding tests, and written assignments easily."
            />
            <Feature
              icon={<Settings />}
              title="Rule-Based Evaluation"
              text="Set auto-fail criteria and enable conditional re-attempts."
            />
          </div>
        </div>
      </div>

      {/* RIGHT DASHBOARD */}
      <div className="flex-1 flex">
        {/* SIDEBAR */}
        <aside className="w-64 bg-white border-r border-gray-200">
          <div className="p-6 border-b">
            <h1 className="text-2xl font-bold">Menntr</h1>
            <p className="text-xs text-gray-500">Smarter Campus Management</p>
          </div>

          <nav className="p-4 space-y-1 text-sm">
            <Nav icon={<LayoutDashboard />} label="Dashboard" />
            <Nav icon={<Users />} label="Organization" />
            <Nav icon={<UserCog />} label="User Management" />
            <Nav icon={<GraduationCap />} label="Student Management" />
            <Nav icon={<ClipboardList />} label="Assessment" active />
            <Nav icon={<FileText />} label="Assignment" />
          </nav>
        </aside>

        {/* MAIN */}
        <div className="flex-1 flex flex-col bg-white">
          {/* HEADER */}
          <header className="px-6 py-4 border-b flex justify-between">
            <h2 className="font-semibold">Institution Admin Portal</h2>
            <div className="flex items-center gap-3">
              <Radio className="w-4 h-4 text-gray-500" />
              <Bell className="w-4 h-4 text-gray-500" />
              <div className="w-8 h-8 rounded-full bg-purple-400" />
            </div>
          </header>

          {/* CONTENT */}
          <main className="p-6">
            {/* PAGE HEADER */}
            <div className="flex justify-between mb-4">
              <div>
                <h1 className="text-xl font-semibold flex items-center gap-2">
                  <ClipboardList className="w-5 h-5" />
                  Assessments
                </h1>
                <p className="text-xs text-gray-500">
                  Create, manage and track institution assessments
                </p>
              </div>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm">
                + Create Assessment
              </button>
            </div>

            {/* TABS */}
            <div className="flex gap-6 border-b mb-4 text-sm">
              {["Exams(In-Assessment)", "Quizzes", "Assignments"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`pb-2 ${
                    selectedTab === tab
                      ? "text-purple-600 border-b-2 border-purple-600"
                      : "text-gray-500"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* SEARCH */}
            <div className="flex gap-3 mb-4">
              <div className="relative w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  placeholder="Search for assessments"
                  className="w-full pl-9 pr-3 py-2 border rounded-lg text-sm"
                />
              </div>
              <button className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm">
                <SlidersHorizontal className="w-4 h-4" /> Filter
              </button>
            </div>

            {/* TABLE */}
            <div className="border rounded-xl overflow-hidden">
              <table className="w-full text-[13px]">
                <thead className="bg-gray-50 text-gray-500">
                  <tr>
                    <Th>Assessment name</Th>
                    <Th>Category</Th>
                    <Th>Department / Batch</Th>
                    <Th>Questions</Th>
                    <Th>Published On</Th>
                  </tr>
                </thead>
                <tbody>
                  {assessments.map((a, i) => (
                    <tr key={i} className="border-t hover:bg-gray-50">
                      <Td>{a.name}</Td>
                      <Td>
                        <span
                          className={`px-2 py-0.5 rounded-full text-[11px] ${
                            a.category === "Aptitude"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {a.category}
                        </span>
                      </Td>
                      <Td>{a.dept}</Td>
                      <Td>{a.questions}</Td>
                      <Td className="text-gray-500">{a.published}</Td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* PAGINATION */}
              <div className="flex justify-center gap-1 py-3 border-t text-xs text-gray-500">
                <ChevronsLeft className="w-4 h-4" />
                <ChevronLeft className="w-4 h-4" />
                <span className="w-6 h-6 flex items-center justify-center bg-purple-600 text-white rounded-full">
                  1
                </span>
                <span className="w-6 h-6 flex items-center justify-center">
                  2
                </span>
                <span className="w-6 h-6 flex items-center justify-center">
                  3
                </span>
                <span>…</span>
                <ChevronRight className="w-4 h-4" />
                <ChevronsRight className="w-4 h-4" />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

/* ---------- SMALL COMPONENTS ---------- */

function Feature({ icon, title, text }: any) {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
}

function Nav({ icon, label, active }: any) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
        active
          ? "bg-purple-50 text-purple-600"
          : "text-gray-600 hover:bg-gray-50"
      }`}
    >
      {icon}
      {label}
    </div>
  );
}

function Th({ children }: any) {
  return <th className="px-4 py-2 text-left font-medium">{children}</th>;
}

function Td({ children }: any) {
  return <td className="px-4 py-2">{children}</td>;
}
