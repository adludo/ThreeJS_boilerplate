const scene = new THREE.Scene()

// // Adding a rectangular prism
const geometry = new THREE.BoxGeometry( 3, 1, 3 );
const material = new THREE.MeshLambertMaterial({ color: 0xfb8e00 });
const mesh = new THREE.Mesh( geometry, material );
mesh.position.set(0, 0, 0);
scene.add( mesh );



// Add lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight); 

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
directionalLight.position.set(10, 20, 0);
scene.add(directionalLight);

// Camera
const width = 10;
const height = width * (window.innerHeight/window.innerWidth);
const org_vector = new THREE.Vector3(0, 0, 0)
const camera = new THREE.OrthographicCamera(
    width / -2, // left
    width / 2, // right
    height / 2, // top
    height / -2, // bottom
    1, // near 
    100 // far
);
camera.position.set(4, 4, 4);
camera.lookAt(org_vector);
console.log(mesh.position.x, mesh.position.y, mesh.position.z);
console.log(camera.position.x, camera.position.y, camera.position.z);
// var camera = new THREE.PerspectiveCamera( 
//     75, // vertical field of view
//     window.innerWidth/window.innerHeight, // aspect ratio
//     0.1, // near plane
//     1000  // far plane
//     );
// camera.position.z = 5;

// INITIALISE RENDERER
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// ADD TO HTML
document.body.appendChild( renderer.domElement )

renderer.render(scene, camera);

var animate = function () {
	requestAnimationFrame( animate );
	renderer.render(scene, camera);
};

var camvector = new THREE.Vector3()
camera.getWorldDirection( camvector );
console.log(camvector)

// animate();