var camera, scene, renderer;
var geometry, material, mesh;
 
init();
animate();
 
function init() {
    
    scene = new THREE.Scene();
    group = new THREE.Group();

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, .1, 1000);
    camera.position.set(0,0,100);
    camera.lookAt(scene.position);
    scene.add(camera);
   

    floor_geometry = new THREE.PlaneGeometry(400, 400, 10, 10);
    floor_material = new THREE.MeshLambertMaterial({
        color: 0xf5bb33,
        side: THREE.DoubleSide,
        wireframe: true
    });
    floor_mesh = new THREE.Mesh(floor_geometry, floor_material);
    floor_mesh.rotation.x = -0.5 * Math.PI;
    floor_mesh.position.set(0, -30, 0);
    
    scene.add(floor_mesh);
    group.add(floor_mesh);
    
    ceiling_geometry = new THREE.PlaneGeometry(400, 400, 10, 10);
    ceiling_mesh = new THREE.Mesh(ceiling_geometry, floor_material);
    ceiling_mesh.rotation.x = -0.5 * Math.PI;
    ceiling_mesh.position.set(0, 30, 0);
    
    scene.add(ceiling_mesh);
    group.add(ceiling_mesh);

    object_geometry = new THREE.IcosahedronGeometry(8,2);
    object_material = new THREE.MeshLambertMaterial({
        color: 0xD51A1F,
        wireframe: true
    });
 
    object_mesh = new THREE.Mesh(object_geometry, object_material);
    scene.add(object_mesh);
    group.add(object_mesh);   



    geometry = new THREE.BoxGeometry(20, 20, 20 );
    material = new THREE.MeshNormalMaterial();
 
    mesh = new THREE.Mesh( geometry, material );
    scene.add(mesh);
    group.add(mesh);



        // ADD LIGHTS 
    light = new THREE.AmbientLight(0xaaaaaa);
    scene.add(light);

    scene.add(group);
 
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
 
}
 
function animate() {
    mesh.rotation.x  += 0.002;
    group.rotation.y += 0.004;

    requestAnimationFrame( animate );
    renderer.render( scene, camera );
 
}