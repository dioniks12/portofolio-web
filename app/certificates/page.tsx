import type { Metadata } from "next";
import Certificates from "@/components/sections/Certificates";

export const metadata: Metadata = {
  title: "Certificates | Dioni Krisna",
  description: "Certificates and professional achievements of Dioni Krisna.",
};

export default function CertificatesPage() {
  return <Certificates />;
}
