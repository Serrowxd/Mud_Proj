function items(parent, args, context, info) {
  userId = context.prisma.user.findOne({ where: { id: 1 } }).then((user) => {
    return user;
  });

  const newItem = context.prisma.item.create({
    data: {
      user: { connect: { id: userId } },
      item: { connect: { id: args.item.id } },
    },
  });
  context.pubsub.publish("NEW_ITEM", newItem);

  return newItem;
}

module.exports = {
  items,
};
