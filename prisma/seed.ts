import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// Acne Shield's price wasn't visible in the Figma reference I could capture —
// seeded at the same price as the other 100ml elixirs as a placeholder.
// Confirm the real price before launch.
const products = [
  { slug: "royal-rose-elixir", priceCents: 210000, stock: 50 },
  { slug: "glow-quinch-elixir", priceCents: 156000, stock: 50 },
  { slug: "acne-shield", priceCents: 156000, stock: 50 },
  { slug: "vital-grow-scalp", priceCents: 156000, stock: 50 },
];

async function main() {
  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: { priceCents: product.priceCents, stock: product.stock },
      create: product,
    });
  }
  console.log(`Seeded ${products.length} products.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
