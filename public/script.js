const scene = new THREE.Scene()

// renderer.setSize( window.innerWidth, window.innerHeight )
// document.body.appendChild( renderer.domElement )

// // New code
// var scene = new THREE.Scene();

// var renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// Rotating cube
// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const material = new THREE.MeshLambertMaterial( { color: 0xfb8e00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

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

// // Camera
// const width = 10;
// const height = width * (window.innerHeight/window.innerWidth);
// const camera = new THREE.OrthographicCamera(
//     width / -2, // left
//     width / 2, // right
//     height / 2, // top
//     height / -2, // bottom
//     1, // near 
//     100 // far
// );
// camera.position.set(4, 4, 4);
// camera.lookAt(0, 0, 0);

var camera = new THREE.PerspectiveCamera( 
    75, // vertical field of view
    window.innerWidth/window.innerHeight, // aspect ratio
    0.1, // near plane
    1000  // far plane
    );
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement )

renderer.render(scene, camera);

var animate = function () {
	requestAnimationFrame( animate );

	// cube.rotation.x += 0.1;
	// cube.rotation.y += 0.1;

	renderer.render(scene, camera);
};

// animate();