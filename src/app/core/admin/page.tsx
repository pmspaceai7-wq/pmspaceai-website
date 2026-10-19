import { notFound } from "next/navigation";
import { Metadata } from "next";
import ToolDetailClient from "@/components/CoreModules";
import { getToolBySlug } from "@/lib/core";

export const metadata: Metadata = {
  title: "Admin Module | Space AI",
  description: "Manage users, roles, permissions, and platform settings with the Space AI administration module. Configure workflows, audit logs, and access controls for construction project teams.",
  alternates: { canonical: "https://pmspace.ai/core/admin/" },
  openGraph: { url: "https://pmspace.ai/core/admin/", title: "Admin Module | Space AI", description: "Administration module for Space AI platform.", type: "website" },
};

export default function AdminPage() {
  const tool = getToolBySlug("admin-module");

  if (!tool) {
    notFound();
  }

  return <ToolDetailClient tool={tool} />;
}

