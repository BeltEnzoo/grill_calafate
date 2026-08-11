const { PrismaClient } = require("@prisma/client");
const fallbackShows = require("../src/content/shows.json");

const prisma = new PrismaClient();

async function main() {
  const count = await prisma.show.count();
  if (count > 0) {
    console.log(`Ya hay ${count} shows. Seed omitido.`);
    return;
  }

  for (const show of fallbackShows) {
    await prisma.show.create({
      data: {
        title: show.title,
        date: show.date,
        time: show.time,
        image: show.image,
        status: show.status,
        description: show.description,
      },
    });
  }

  console.log(`Seed OK: ${fallbackShows.length} shows creados.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
