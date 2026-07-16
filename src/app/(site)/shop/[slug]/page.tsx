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
  const url = `https://aandreamelie.com/shop/${product.slug}`;
  return {
    title: product.seoTitle,
    description: product.seoDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      title: product.seoTitle,
      description: product.seoDescription,
      url,
      images: product.image ? [{ url: product.image, alt: product.name }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: product.seoTitle,
      description: product.seoDescription,
      images: product.image ? [product.image] : undefined,
    },
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
