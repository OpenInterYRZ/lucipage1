"use client";

import React from "react";
import { KanbanColumn, type ColumnData } from "./KanbanColumn";

const COLUMNS: ColumnData[] = [
  {
    id: "todo",
    title: "To Do",
    color: "#FF9F43",
    count: 4,
    tasks: [
      {
        id: "t1",
        title: "Update landing page hero",
        tag: { label: "Design", color: "#4C9AFF", bg: "#0052CC22" },
        date: "Mar 2",
      },
      {
        id: "t2",
        title: "Fix auth token refresh",
        tag: { label: "Dev", color: "#36B37E", bg: "#36B37E22" },
        date: "Mar 3",
      },
      {
        id: "t3",
        title: "Deploy staging env",
        tag: { label: "Ops", color: "#E07B54", bg: "#E07B5422" },
      },
      {
        id: "t4",
        title: "Evaluate analytics tools",
        tag: { label: "Research", color: "#9B79D6", bg: "#9B59B622" },
      },
    ],
  },
  {
    id: "in-progress",
    title: "In Progress",
    color: "#0D6E6E",
    count: 3,
    tasks: [
      {
        id: "p1",
        title: "Redesign settings page",
        tag: { label: "Design", color: "#4C9AFF", bg: "#0052CC22" },
        progress: 0.6,
        assignee: "Alex",
      },
      {
        id: "p2",
        title: "API rate limiting",
        tag: { label: "Dev", color: "#36B37E", bg: "#36B37E22" },
        progress: 0.4,
      },
      {
        id: "p3",
        title: "Write onboarding copy",
        tag: { label: "Content", color: "#E07B54", bg: "#E07B5422" },
        progress: 0.7,
      },
    ],
  },
  {
    id: "done",
    title: "Done",
    color: "#36B37E",
    count: 5,
    tasks: [
      {
        id: "d1",
        title: "Setup CI/CD pipeline",
        completedDate: "Completed Feb 26",
        done: true,
      },
      {
        id: "d2",
        title: "User auth flow",
        completedDate: "Completed Feb 25",
        done: true,
      },
      {
        id: "d3",
        title: "Database migration",
        completedDate: "Completed Feb 24",
        done: true,
      },
    ],
  },
  {
    id: "review",
    title: "Review",
    color: "#9B79D6",
    count: 2,
    tasks: [
      {
        id: "r1",
        title: "Test payment flow",
        tag: { label: "QA", color: "#9B79D6", bg: "#9B59B622" },
      },
    ],
  },
];

export function OrganizedZone() {
  return (
    <div className="relative h-140 w-1/3 overflow-hidden">
      {/* Kanban board */}
      <div className="flex gap-4 h-full px-6 pt-5 pb-5">
        {COLUMNS.map((col) => (
          <KanbanColumn key={col.id} column={col} />
        ))}
      </div>

      {/* Right fade overlay */}
      <div
        className="absolute top-0 right-0 h-full w-20 pointer-events-none"
        style={{
          background: "linear-gradient(to right, transparent, var(--win-fade-to))",
        }}
      />
    </div>
  );
}
