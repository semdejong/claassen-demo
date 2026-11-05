import type { Metadata } from "next";
import { getService } from "@/content";
import { ServicePage } from "@/components/site/ServicePage";

const service = getService("tuinaanleg");

export const metadata: Metadata = {
  title: service.title,
  description: service.description,
};

export default function Page() {
  return <ServicePage service={service} />;
}
