


// DECLARE RENDERER
var renderer = new THREE.WebGLRenderer({canvas: document.getElementById('myCanvas'), antialias: true});
renderer.setClearColor(0xF4B900);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);


// DECLARE SCENE
var scene = new THREE.Scene();




// DECLARE CAMERA
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, .1, 1000);
camera.position.set(0,0,100);
camera.lookAt(scene.position);
scene.add(camera);




// store all elements in a group 
var group = new THREE.Group();


// DEFINE GEOMETRY AND MESH FOR OBJECTS 
// FLOOR
var floor_geometry = new THREE.PlaneGeometry(800, 800, 10, 10);
var floor_material = new THREE.MeshLambertMaterial({
  color: 0xD51A1F,
  side: THREE.DoubleSide,
  wireframe: true
});
var floor_mesh = new THREE.Mesh(floor_geometry, floor_material);
floor_mesh.rotation.x = -0.5 * Math.PI;
floor_mesh.position.set(0, -30, 0);
scene.add(floor_mesh);
group.add(floor_mesh);


var ceiling_geometry = new THREE.PlaneGeometry(800, 800, 10, 10);
var ceiling_mesh = new THREE.Mesh(ceiling_geometry, floor_material);
ceiling_mesh.rotation.x = -0.5 * Math.PI;
ceiling_mesh.position.set(0, 30, 0);
scene.add(ceiling_mesh);
group.add(ceiling_mesh);




// SPHERE
var sphere_geometry = new THREE.IcosahedronGeometry(16, 4);
var sphere_material = new THREE.MeshLambertMaterial({
  color: 0xD51A1F,
  wireframe: true
})
var sphere_mesh = new THREE.Mesh(sphere_geometry, sphere_material);
sphere_mesh.position.set = (0, 0, 0);
scene.add(sphere_mesh);
group.add(sphere_mesh);

// ADD LIGHTS 
var light = new THREE.AmbientLight(0xaaaaaa);
scene.add(light);

scene.add(group);


function render() {
  
  group.rotation.y += 0.005;
  
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}


// RENDER LOOP
render();