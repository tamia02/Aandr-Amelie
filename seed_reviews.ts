import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./src/generated/prisma/client";
import { products } from "./src/data/products";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const names = ["Riya", "Neha", "Sneha", "Anjali", "Pooja", "Simran", "Kavita", "Nisha", "Aarti", "Priya", "Kriti", "Aditi", "Megha", "Swati", "Sanya", "Kajal", "Divya"];
const positiveReviews = [
  "Amazing product! Truly a game changer for my skin.",
  "Very realistic and high quality. Love the results.",
  "I have been using this for a week and I can already see the difference.",
  "Highly recommended! The texture is so good.",
  "Smells heavenly and works exactly as described.",
  "One of the best purchases I've made recently.",
  "It's completely natural and my skin loves it.",
  "Soothing and very effective. Will buy again.",
  "Just wow. Exceeded my expectations.",
  "Great value for money. Very premium feel.",
  "I was skeptical at first, but it really works!",
  "Beautiful packaging and wonderful product.",
  "My new favorite in my daily routine.",
  "Can't live without it now. Fantastic!",
  "Such a calming effect. Love it so much.",
  "Leaves my skin feeling so fresh and rejuvenated.",
  "Works perfectly for my sensitive skin.",
  "This is a must-have product in everyone's routine.",
  "Incredible quality and lovely results so far."
];

async function main() {
  console.log("Seeding fake reviews...");
  for (const product of products) {
    const slug = product.slug;

    // First ensure the product exists in the DB
    const dbProduct = await prisma.product.findUnique({ where: { slug } });
    if (!dbProduct) {
      console.log(`Product ${slug} not in DB, skipping or you could create it... Let's create a placeholder.`);
      await prisma.product.create({
        data: {
          slug,
          priceCents: 100000,
          stock: 50,
        }
      });
    }

    const numReviews = Math.floor(Math.random() * (75 - 55 + 1)) + 55; // 55 to 75
    const writtenReviewsCount = Math.floor(Math.random() * (15 - 11 + 1)) + 11; // 11 to 15

    for (let i = 0; i < numReviews; i++) {
      const isWritten = i < writtenReviewsCount;
      const authorName = names[Math.floor(Math.random() * names.length)];
      const content = isWritten ? positiveReviews[Math.floor(Math.random() * positiveReviews.length)] : "";
      const rating = Math.random() > 0.15 ? 5 : 4; // Mostly 5 stars, some 4 stars
      const createdAt = new Date(Date.now() - Math.floor(Math.random() * 10000000000));

      await prisma.review.create({
        data: {
          productSlug: slug,
          authorName,
          rating,
          content,
          createdAt,
        }
      });
    }
    console.log(`Added ${numReviews} reviews for ${slug}`);
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
