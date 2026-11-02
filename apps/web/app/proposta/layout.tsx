import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proposta editorial | Móveis Por Você",
};

export default function ProposalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
