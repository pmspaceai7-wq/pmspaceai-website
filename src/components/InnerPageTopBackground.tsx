"use client";

import { usePathname } from "next/navigation";

export function InnerPageTopBackground() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[760px] overflow-hidden bg-[#07040f] [mask-image:linear-gradient(to_bottom,black_0%,black_78%,transparent_100%)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(140,69,255,0.26),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(251,146,60,0.1),transparent_32%),linear-gradient(115deg,rgba(59,130,246,0.1),transparent_34%,rgba(140,69,255,0.1))]" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:34px_34px] opacity-20" />
      <div className="absolute left-1/2 top-16 h-72 w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),rgba(168,85,247,0.14)_38%,rgba(251,146,60,0.08)_58%,transparent_74%)] blur-3xl" />
    </div>
  );
}

export default InnerPageTopBackground;
