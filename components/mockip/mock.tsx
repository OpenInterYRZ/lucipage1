"use client";
import { PhoneChatScreen } from "./phone/PhoneChatScreen";
import VMDashboard from "./vm/VMDashboard";
export default function Mock() {
  return (
    <div className="flex flex-col gap-4">
      <PhoneChatScreen />
      <VMDashboard />
    </div>
  );
}
