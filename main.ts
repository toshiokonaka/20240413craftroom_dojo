player.onChat("run", function () {
    player.teleport(world(FieldCenter.toWorld().getValue(Axis.X), FieldCenter.toWorld().getValue(Axis.Y), FieldCenter.toWorld().getValue(Axis.Z)))
    agent.teleport(world(FieldCenter.toWorld().getValue(Axis.X), FieldCenter.toWorld().getValue(Axis.Y), FieldCenter.toWorld().getValue(Axis.Z) + 17), SOUTH)
})
let FieldCenter: Position = null
FieldCenter = world(-272, -59, -132)
