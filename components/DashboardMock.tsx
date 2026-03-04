"use client";

import {
  LayoutDashboard,
  Calendar,
  FileText,
  BarChart2,
  Archive,
  Search,
  Bell,
  Settings,
  Check,
  CheckCircle,
  Pencil,
  MoreHorizontal,
  Clock,
  Plus,
  TrendingUp,
  Timer,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Calendar, label: "Calendar", active: false },
  { icon: FileText, label: "Documents", active: false },
  { icon: BarChart2, label: "Analytics", active: false },
  { icon: Archive, label: "Archive", active: false },
];

const tasks = [
  {
    text: "Review quarterly financial report",
    done: true,
    badge: "Done",
    badgeColor: "bg-green-50 text-green-500",
  },
  {
    text: "Finalize design system components",
    done: false,
    badge: "High",
    badgeColor: "bg-red-50 text-red-500",
  },
  {
    text: "Prepare for client strategy meeting",
    done: false,
    badge: "Med",
    badgeColor: "bg-amber-50 text-amber-500",
  },
  {
    text: "Update project roadmap for Q4",
    done: false,
    badge: "Low",
    badgeColor: "bg-blue-50 text-blue-500",
  },
];

const notes = [
  {
    title: "Weekly Brainstorm",
    desc: "Focus on improving the dashboard layout for mobil...",
    time: "2h ago",
    bg: "bg-orange-50",
  },
  {
    title: "Project Alpha",
    desc: "Key deliverables include the brand identity and UI kit...",
    time: "Yesterday",
    bg: "bg-orange-50",
  },
  {
    title: "Marketing Assets",
    desc: "Review social media banners and ad copy for th...",
    time: "3 days ago",
    bg: "bg-white border border-gray-200",
  },
];

const chartBars = [
  { orange: 60, gray: 30 },
  { orange: 40, gray: 35 },
  { orange: 90, gray: 20 },
  { orange: 70, gray: 25 },
  { orange: 100, gray: 15 },
  { orange: 85, gray: 30 },
  { orange: 50, gray: 40 },
  { orange: 30, gray: 45 },
];

export default function DashboardMock() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-[#F5F5F7] shadow-xl">
      {/* Top Nav */}
      <nav className="flex h-16 shrink-0 items-center justify-between bg-white px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="1" y="1" width="6" height="6" rx="1.5" fill="white" />
              <rect x="11" y="1" width="6" height="6" rx="1.5" fill="white" />
              <rect x="1" y="11" width="6" height="6" rx="1.5" fill="white" />
              <rect x="11" y="11" width="6" height="6" rx="1.5" fill="white" />
            </svg>
          </div>
          <span className="text-lg font-bold text-gray-900">
            Everything Organized
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-70 items-center gap-2 rounded-lg bg-[#F5F5F7] px-3">
            <Search className="h-[18px] w-[18px] text-gray-400" />
            <span className="text-sm text-gray-400">
              Search your workspace...
            </span>
          </div>
          <Bell className="h-[22px] w-[22px] text-gray-500" />
          <Settings className="h-[22px] w-[22px] text-gray-500" />
          <div className="h-9 w-9 rounded-full border-2 border-orange-500 bg-orange-50" />
        </div>
      </nav>

      {/* Body */}
      <div className="flex min-h-0 flex-1">
        {/* Sidebar */}
        <aside className="flex w-[280px] shrink-0 flex-col justify-between bg-white px-5 py-6">
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-[11px] font-semibold tracking-wider text-gray-400">
                WORKSPACE
              </p>
              <p className="mt-1 text-[13px] font-semibold text-orange-500">
                Professional Plan
              </p>
            </div>

            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className={`flex h-11 items-center gap-3 rounded-[10px] px-4 ${
                    item.active
                      ? "bg-orange-500 text-white"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span
                    className={`text-[15px] ${item.active ? "font-semibold" : ""}`}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto p-8 px-10">
          {/* Welcome */}
          <div>
            <h1 className="text-[28px] font-bold text-gray-900">
              Welcome back, Alex
            </h1>
            <p className="mt-1 text-[15px] text-gray-500">
              Your workspace is organized and ready for a productive day.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-0 border-b border-gray-200">
            {["Overview", "Notes", "Insights", "Tasks"].map((tab, i) => (
              <div
                key={tab}
                className={`pb-3 ${i === 0 ? "border-b-2 border-gray-900 pr-4" : "px-4"}`}
              >
                <span
                  className={`text-sm ${i === 0 ? "font-semibold text-gray-900" : "text-gray-400"}`}
                >
                  {tab}
                </span>
              </div>
            ))}
          </div>

          {/* Cards Row */}
          <div className="flex gap-6">
            {/* Task List Card */}
            <div className="flex flex-1 flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-[22px] w-[22px] text-orange-500" />
                  <span className="text-lg font-bold text-gray-900">
                    Task List
                  </span>
                </div>
                <span className="text-[13px] font-semibold text-orange-500 cursor-pointer">
                  View All
                </span>
              </div>

              <div className="flex flex-col gap-4">
                {tasks.map((task, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {task.done ? (
                        <div className="flex h-[22px] w-[22px] items-center justify-center rounded bg-orange-500">
                          <Check className="h-3.5 w-3.5 text-white" />
                        </div>
                      ) : (
                        <div className="h-[22px] w-[22px] rounded border-2 border-gray-200" />
                      )}
                      <span
                        className={`text-sm ${task.done ? "text-gray-400 line-through" : "text-gray-900"}`}
                      >
                        {task.text}
                      </span>
                    </div>
                    <span
                      className={`rounded-md px-2.5 py-1 text-[11px] font-semibold ${task.badgeColor}`}
                    >
                      {task.badge}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex h-11 cursor-pointer items-center justify-center gap-2 rounded-[10px] bg-[#F5F5F7] hover:bg-gray-100 transition-colors">
                <span className="text-base font-semibold text-gray-500">+</span>
                <span className="text-sm font-medium text-gray-500">
                  Add New Task
                </span>
              </div>
            </div>

            {/* Recent Notes Card */}
            <div className="flex w-[440px] shrink-0 flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Pencil className="h-5 w-5 text-orange-500" />
                  <span className="text-lg font-bold text-gray-900">
                    Recent Notes
                  </span>
                </div>
                <MoreHorizontal className="h-5 w-5 text-gray-400 cursor-pointer" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                {notes.map((note, i) => (
                  <div
                    key={i}
                    className={`flex flex-col gap-2 rounded-xl p-3.5 ${note.bg}`}
                  >
                    <span className="text-sm font-bold text-gray-900">
                      {note.title}
                    </span>
                    <span className="text-xs leading-relaxed text-gray-500">
                      {note.desc}
                    </span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-gray-400" />
                      <span className="text-[11px] text-gray-400">
                        {note.time}
                      </span>
                    </div>
                  </div>
                ))}

                <div className="flex flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-gray-300 p-3.5 cursor-pointer hover:border-orange-300 transition-colors">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200">
                    <Plus className="h-4 w-4 text-gray-400" />
                  </div>
                  <span className="text-xs text-gray-400">New Note</span>
                </div>
              </div>
            </div>
          </div>

          {/* Insights & Productivity */}
          <div className="flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-[22px] w-[22px] text-orange-500" />
                  <span className="text-lg font-bold text-gray-900">
                    Insights &amp; Productivity
                  </span>
                </div>
                <span className="text-[13px] text-gray-500">
                  Weekly performance summary
                </span>
              </div>
              <div className="flex overflow-hidden rounded-lg border border-gray-200">
                <div className="cursor-pointer bg-white px-4 py-2">
                  <span className="text-[13px] font-semibold text-gray-900">
                    Weekly
                  </span>
                </div>
                <div className="cursor-pointer px-4 py-2">
                  <span className="text-[13px] text-gray-400">Monthly</span>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex w-[200px] shrink-0 flex-col gap-3">
                <div className="flex items-center justify-between rounded-xl bg-orange-50 p-4">
                  <div>
                    <p className="text-xs text-gray-500">Tasks Completed</p>
                    <p className="mt-1 text-[28px] font-bold text-gray-900">
                      42/50
                    </p>
                  </div>
                  <TrendingUp className="h-6 w-6 text-orange-500" />
                </div>
                <div className="flex items-center justify-between rounded-xl bg-orange-50 p-4">
                  <div>
                    <p className="text-xs text-gray-500">Focus Hours</p>
                    <p className="mt-1 text-[28px] font-bold text-gray-900">
                      28.5
                    </p>
                  </div>
                  <Timer className="h-6 w-6 text-orange-500" />
                </div>
              </div>

              <div className="flex flex-1 items-end gap-3 pb-6">
                {chartBars.map((bar, i) => (
                  <div
                    key={i}
                    className="flex flex-1 flex-col justify-end gap-0.5"
                    style={{ height: 160 }}
                  >
                    <div
                      className="w-full rounded-t bg-orange-500"
                      style={{ height: bar.orange }}
                    />
                    <div
                      className="w-full bg-gray-300"
                      style={{ height: bar.gray }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="h-4 shrink-0" />
        </main>
      </div>

      {/* FAB */}
      <button className="absolute right-6 bottom-6 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 shadow-lg shadow-orange-500/25 transition-transform hover:scale-105">
        <Plus className="h-6 w-6 text-white" />
      </button>
    </div>
  );
}
