async function inventory(parent, args, context, info) {
  const where = args.filter
    ? {
        OR: [{ description: { contains: args.filter } }, { url: { contains: args.filter } }],
      }
    : {};

  const users = await context.prisma.link.findMany({
    where,
    skip: args.skip,
    take: args.take,
    orderBy: args.orderBy,
  });

  const inventory = await context.prisma.link.findMany({
    where,
    skip: args.skip,
    take: args.take,
    orderBy: args.orderBy,
  });

  const count = await context.prisma.link.count({ where });

  return {
    users,
    inventory,
    count,
  };
}

module.exports = {
  inventory,
};
