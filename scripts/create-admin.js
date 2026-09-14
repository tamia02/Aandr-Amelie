const { PrismaClient } = require('../src/generated/prisma');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('admin123', 10);
  const admin = await prisma.adminUser.upsert({
    where: { email: 'admin@aandreamelie.com' },
    update: { passwordHash },
    create: { email: 'admin@aandreamelie.com', passwordHash }
  });
  console.log('Admin user created:', admin.email);
}
main().catch(e => {
  console.error(e);
  process.exit(1);
}).finally(() => {
  prisma.$disconnect();
});
