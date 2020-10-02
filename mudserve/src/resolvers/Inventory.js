function ownedBy(parent, args, context) {
  return context.prisma.link.findOne({ where: { id: parent.id } }).ownedBy();
}

function ownedBy(parent, args, context) {
  return context.prisma.link.findOne({ where: { id: parent.id } }).ownedBy();
}

module.exports = {
  postedBy,
  votes,
};
