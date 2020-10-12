async function inventory(parent, args, context, info) {
  const items = await context.prisma.item.findMany();

  // Checks for user (temp)
  // console.log(
  //   context.prisma.user.findOne({ where: { id: 1 } }).then((user) => {
  //     console.log(user);
  //   })
  // );

  return {
    items,
  };
}

async function user(parent, args, context, info) {
  const users = await context.prisma.user.findMany();

  return {
    users,
  };
}

module.exports = {
  inventory,
  user,
};
