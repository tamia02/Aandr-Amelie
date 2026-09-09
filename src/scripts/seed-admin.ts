import 'dotenv/config';
import crypto from 'crypto';
import { prisma } from '../lib/db';

async function main() {
  const email = 'Contact@aandreamelie.com';
  const defaultPassword = 'adminpassword123'; // The user should change this later

  // Generate a salt and hash the password
  const salt = crypto.randomBytes(16).toString('hex');
  const derivedKey = crypto.scryptSync(defaultPassword, salt, 64);
  const passwordHash = `${salt}:${derivedKey.toString('hex')}`;

  const existingAdmin = await prisma.adminUser.findUnique({
    where: { email },
  });

  if (existingAdmin) {
    console.log(`Admin ${email} already exists.`);
  } else {
    await prisma.adminUser.create({
      data: {
        email,
        passwordHash,
      },
    });
    console.log(`Created default admin account for ${email} with password: ${defaultPassword}`);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
