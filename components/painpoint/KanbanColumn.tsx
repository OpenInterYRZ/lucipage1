"use client";
import React from "react";
import { TaskCard, type TaskData } from "./TaskCard";
import ShinyText from "../ui/ShinyText";
export interface ColumnData {
  id: string;
  title: string;
  color: string;
  count: number;
  tasks: TaskData[];
}

interface KanbanColumnProps {
  column: ColumnData;
}

export function KanbanColumn({ column }: KanbanColumnProps) {
  return (
    <div className="flex flex-col gap-2.5 min-w-[210px] w-[210px] shrink-0 h-full">
      {/* Column header */}
      <div className="flex items-center gap-2">
        <span
          className="w-2 h-2 rounded-full shrink-0"
          style={{ backgroundColor: column.color }}
        />
        <ShinyText text={column.title} />
        <span className="flex items-center justify-center min-w-[18px] h-[18px] px-1.5 rounded-lg bg-[#333333] text-[10px] font-semibold text-[#999999] font-[Inter,sans-serif]">
          {column.count}
        </span>
      </div>

      {/* Task cards */}
      <div className="flex flex-col gap-2.5 flex-1 overflow-y-auto scrollbar-hide">
        {column.tasks.map((task, i) => (
          <TaskCard
            key={task.id}
            task={task}
            columnColor={column.color}
            opacity={task.done && i >= 2 ? 0.7 : task.done ? 0.8 : 1}
          />
        ))}
      </div>
    </div>
  );
}
