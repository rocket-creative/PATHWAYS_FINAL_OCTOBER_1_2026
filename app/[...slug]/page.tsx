import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageRenderer from "@/components/render/PageRenderer";
import { getPage, PAGES } from "@/content/pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return PAGES.filter((p) => p.url !== "/").map((p) => ({ slug: p.url.slice(1).split("/") }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage("/" + slug.join("/"));
  if (!page) return {};
  return {
    title: { absolute: page.title },
    description: page.meta,
    alternates: { canonical: page.url },
    robots: page.index === false ? { index: false, follow: false } : undefined,
    openGraph: { title: page.title, description: page.meta, url: page.url, type: "website" },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const page = getPage("/" + slug.join("/"));
  if (!page) notFound();
  return <PageRenderer page={page} />;
}
