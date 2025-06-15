
// Basic scene setup and mock cubelets array
const scene = new THREE.Scene();
const cubelets = [];

const spacing = 1.1;
for (let x = -1; x <= 1; x++) {
  for (let y = -1; y <= 1; y++) {
    for (let z = -1; z <= 1; z++) {
      const geom = new THREE.BoxGeometry(1, 1, 1);
      const mat = new THREE.MeshNormalMaterial();
      const cubelet = new THREE.Mesh(geom, mat);
      cubelet.position.set(x * spacing, y * spacing, z * spacing);
      scene.add(cubelet);
      cubelets.push(cubelet);
    }
  }
}

const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(5, 5, 5);
camera.lookAt(scene.position);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate(time) {
  requestAnimationFrame(animate);
  TWEEN.update(time);
  renderer.render(scene, camera);
}
animate();
