
function rotateFace(axis, layerValue, clockwise = true) {
  const group = new THREE.Group();
  const axisIndex = { x: 0, y: 1, z: 2 }[axis];

  const movers = cubelets.filter(c => {
    const pos = c.position.getComponent(axisIndex);
    return Math.abs(pos - layerValue) < 0.1;
  });

  movers.forEach(c => {
    scene.attach(c);
    group.attach(c);
  });

  scene.add(group);

  const rotationAxis = new THREE.Vector3(
    axis === 'x' ? 1 : 0,
    axis === 'y' ? 1 : 0,
    axis === 'z' ? 1 : 0
  );
  const angle = (Math.PI / 2) * (clockwise ? -1 : 1);

  new TWEEN.Tween({ theta: 0 })
    .to({ theta: angle }, 300)
    .easing(TWEEN.Easing.Quadratic.Out)
    .onUpdate(({ theta }) => {
      group.setRotationFromAxisAngle(rotationAxis, theta);
    })
    .onComplete(() => {
      movers.forEach(c => {
        c.applyMatrix4(group.matrix);
        scene.attach(c);
      });
      scene.remove(group);
    })
    .start();
}
