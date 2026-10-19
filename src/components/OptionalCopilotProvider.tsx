"use client";

import type React from "react";
import dynamic from "next/dynamic";
import { Providers } from "@/app/providers";

const CopilotKit = dynamic(
  () => import("@copilotkit/react-core").then((mod) => mod.CopilotKit),
  { ssr: false }
);

type OptionalCopilotProviderProps = {
  children: React.ReactNode;
  publicApiKey?: string;
};

export default function OptionalCopilotProvider({
  children,
  publicApiKey,
}: OptionalCopilotProviderProps) {
  if (!publicApiKey) {
    return <Providers>{children}</Providers>;
  }

  return (
    <CopilotKit publicApiKey={publicApiKey}>
      <Providers>{children}</Providers>
    </CopilotKit>
  );
}
