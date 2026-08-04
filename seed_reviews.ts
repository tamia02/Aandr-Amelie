import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./src/generated/prisma/client";
import { products } from "./src/data/products";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const names = ["Riya", "Neha", "Sneha", "Anjali", "Pooja", "Simran", "Kavita", "Nisha", "Aarti", "Priya", "Kriti", "Aditi", "Megha", "Swati", "Sanya", "Kajal", "Divya", "Rohini", "Sheetal", "Preeti", "Suman", "Geeta", "Jyoti", "Meenakshi", "Radhika", "Bhavna", "Kiran", "Anita", "Sunita", "Reena"];

const starters = ["Amazing product!", "Truly a game changer.", "Highly recommended!", "Smells heavenly.", "One of the best purchases.", "It's completely natural.", "Soothing and very effective.", "Just wow.", "Great value for money.", "I was skeptical at first, but it really works!", "Beautiful packaging.", "My new favorite.", "Can't live without it now.", "Such a calming effect.", "Leaves my skin feeling so fresh.", "Works perfectly for my sensitive skin.", "Incredible quality.", "A must-have.", "Love this!", "Fantastic results.", "Exceeded my expectations.", "Very premium feel.", "Best I've ever used.", "I'm so glad I found this."];

const mid = ["I have been using this for a week and I can already see the difference.", "My skin loves it.", "Will buy again.", "The texture is so good.", "Works exactly as described.", "Lovely results so far.", "It has become a staple in my daily routine.", "I feel so rejuvenated after using it.", "It really delivers on its promises.", "Nothing else compares.", "So gentle yet so effective.", "My friends even noticed the difference.", "I look forward to using it every day.", "It's worth every penny.", "I've tried many others, but this is the best.", "No irritation at all.", "It absorbs so well.", "The scent is just perfect."];

const end = ["Highly recommend to everyone.", "5 stars!", "I will definitely repurchase.", "A permanent addition to my shelf.", "Thank you Aandré Amelie!", "Couldn't be happier.", "Can't wait to try more products.", "Simply the best.", "You won't regret buying this.", "Perfect gift for loved ones too.", "I'm a customer for life now.", "Such a great find.", "Absolutely wonderful.", "Try it, you will love it.", "Amazing!", "Superb quality."];

function generateUniqueReview(used: Set<string>) {
  let review = "";
  let attempts = 0;
  do {
    const s = starters[Math.floor(Math.random() * starters.length)];
    const m = mid[Math.floor(Math.random() * mid.length)];
    const e = end[Math.floor(Math.random() * end.length)];
    review = `${s} ${m} ${e}`;
    attempts++;
  } while (used.has(review) && attempts < 100);
  used.add(review);
  return review;
}

async function main() {
  console.log("Deleting existing reviews...");
  await prisma.review.deleteMany();

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
    const usedReviews = new Set<string>();

    for (let i = 0; i < numReviews; i++) {
      const authorName = names[Math.floor(Math.random() * names.length)];
      const content = generateUniqueReview(usedReviews);
      
      const rand = Math.random();
      let rating = 5;
      if (rand < 0.05) rating = 1; // 5% chance of 1 star
      else if (rand < 0.10) rating = 2; // 5% chance of 2 star
      else if (rand < 0.20) rating = 3; // 10% chance of 3 star
      else if (rand < 0.50) rating = 4; // 30% chance of 4 star
      else rating = 5; // 50% chance of 5 star

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
