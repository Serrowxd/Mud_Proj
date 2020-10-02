function user(parent, args, context) {
  return context.prisma.user.findOne({ where: { id: parent.id } }).user();
}

module.exports = {
  user,
};
