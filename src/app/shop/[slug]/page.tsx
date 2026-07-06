import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProduct } from "@/data/products";
import { getCommerceForSlugs } from "@/lib/actions/products";
import ProductPage from "@/components/ProductPage";

export const revalidate = 60;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: `${product.tagline}. ${product.description}`,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const commerce = await getCommerceForSlugs([slug]);
  return <ProductPage product={product} commerce={commerce[slug] ?? null} />;
}
