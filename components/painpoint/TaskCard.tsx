import React from "react";
import { Calendar, User, CircleCheck } from "lucide-react";

export interface TaskData {
  id: string;
  title: string;
  tag?: { label: string; color: string; bg: string };
  date?: string;
  progress?: number;
  assignee?: string;
  completedDate?: string;
  done?: boolean;
}

interface TaskCardProps {
  task: TaskData;
  columnColor: string;
  opacity?: number;
}

export function TaskCard({ task, columnColor, opacity = 1 }: TaskCardProps) {
  /* Done card — compact checkmark style */
  if (task.done) {
    return (
      <div
        className="rounded-lg p-3.5 flex flex-col gap-2"
        style={{
          backgroundColor: "#16161A",
          border: `1px solid ${columnColor}33`,
          opacity,
        }}
      >
        <div className="flex items-center gap-2">
          <CircleCheck className="w-3.5 h-3.5 shrink-0" style={{ color: columnColor }} />
          <span className="text-xs font-medium text-[#999999] font-[Inter,sans-serif]">
            {task.title}
          </span>
        </div>
        {task.completedDate && (
          <span className="text-[10px] text-[#555555] font-[Inter,sans-serif]">
            {task.completedDate}
          </span>
        )}
      </div>
    );
  }

  /* Regular / In-progress card */
  return (
    <div
      className="rounded-lg p-3.5 flex flex-col gap-2"
      style={{
        backgroundColor: "#16161A",
        border: `1px solid ${task.progress != null ? columnColor + "44" : "#2A2A2A"}`,
      }}
    >
      {/* Tag */}
      {task.tag && (
        <span
          className="self-start text-[9px] font-semibold rounded px-2 py-0.5 font-[Inter,sans-serif]"
          style={{ color: task.tag.color, backgroundColor: task.tag.bg }}
        >
          {task.tag.label}
        </span>
      )}

      {/* Title */}
      <span className="text-xs font-medium text-[#E0E0E0] font-[Inter,sans-serif] leading-snug">
        {task.title}
      </span>

      {/* Progress bar */}
      {task.progress != null && (
        <div className="w-full h-1 rounded-sm bg-[#2A2A2A] overflow-hidden">
          <div
            className="h-full rounded-sm"
            style={{
              width: `${task.progress * 100}%`,
              backgroundColor: columnColor,
            }}
          />
        </div>
      )}

      {/* Meta row */}
      <div className="flex items-center gap-1.5">
        {task.assignee && (
          <div className="flex items-center gap-1.5">
            <User className="w-[11px] h-[11px] text-[#666666]" />
            <span className="text-[10px] text-[#888888] font-[Inter,sans-serif]">
              {task.assignee}
            </span>
          </div>
        )}
        {task.date && (
          <div className="flex items-center gap-1.5">
            <Calendar className="w-[11px] h-[11px] text-[#666666]" />
            <span className="text-[10px] text-[#666666] font-[Inter,sans-serif]">
              {task.date}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
