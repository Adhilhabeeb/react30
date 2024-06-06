import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GUI } from "dat.gui";
// import * as dat from "dat.gui";
import {RGBELoader} from "three/examples/jsm/loaders/RGBELoader.js"
let mixer;


/**
 * 
 * Base
 */
// Debug
// const gui = new dat.GUI();

// Canvas
const canvas = document.querySelector("canvas.webgl");

let ggl;
// Scene
const scene = new THREE.Scene();
// scene.fog=fog

const rgbeloa=new RGBELoader().load("/hdr/small_empty_room_1_4k.hdr",(hdr)=>{

  hdr.mapping=THREE.EquirectangularReflectionMapping
  scene.background=hdr
  scene.environment=hdr

  ggl=hdr
})
const axesHelper = new THREE.AxesHelper( 500 );
scene.add( axesHelper );
/**
 * Models
 */
/**
 * Draco is a library for compressing and decompressing 3D geometric meshes and point clouds (https://en.wikipedia.org/wiki/Point_cloud).
 *
 * We can use Service Worker to load the decoder, for that we need to copy the decoder from node_modules/three/examples/jsm/libs/draco to public/draco and then set the path to the decoder.
 */

//  * GLTF is a file format for 3D models
//  *

let mmdd

let bbkk={x:0,y:0,z:0}
//  */
let gui=new GUI()

let  gg=[]
let hh;
function updatekk(gltb) {
gltb.scene.children[0].children[0].children[0].children[0].children[0].children[0].traverse((child)=>{
if (child  instanceof THREE.Mesh  &&  child.material  instanceof THREE.MeshStandardMaterial ) {

	if (child.name=="Cube007_1") {
	child.material=new THREE.MeshBasicMaterial({
		color:"#2e2e2d"
	})
	
	}

	if (child.name=="Cube007") {
		child.material=new THREE.MeshPhysicalMaterial({
			color:"black",
		})
	}
}
	})

	
}
const gltfLoader = new GLTFLoader();
gltfLoader.load('/model/scenoo.glb',(gltb)=>{  


	updatekk(gltb)
	// console.log(gltb.animations,"animations");
	// mixer = new THREE.AnimationMixer(gltb.scene);
	// const action = mixer.clipAction(gltb.animations);

// console.log(	"lllll",gltb.scene.children[0].children[0]);
gltb.scene.children[0].children[0].children[0].children[0].children[0].children[0]
console.log(  "sucess", gltb.scene.children[0].children[0].children[0].children[0].children[0]);
gltb.scene.children[0].children[0].children[0].children[0].children[0].position.set(-345.724,-869.566,-59.695)
  let  mgl=gltb.scene.children[0].children[0].children[0].children[0].children[0]
  mgl.rotation.set(2.93,2.167, 3.133)
  mgl.scale.set(49.41,49.41,49.41)
  // gui.add(mgl.rotation,'x',0,5,0.001)
  // gui.add(mgl.rotation,'y',0,5,0.001)
  // gui.add(mgl.rotation,'z',0,5,0.001)
mmdd=gltb.scene.children[0]

let childen=[...gltb.scene.children[0].children]
	for (const item of childen) {
scene.add(item)
		
	}



// gltb.scene.children[0].children[0].material.color.set("red")






},()=>{
  console.log(  "progrees");
},()=>{
  console.log(  "errr");
})


gltfLoader.load('/model/sbed.glb',(glb)=>{
  glb.scene.scale.set(400,400,400)
    glb.scene.rotation.y=-0.721
  glb.scene.position.set(-189.128,-651.835,-406.223)

// gui.add( glb.scene.position,'x',-500,100,0.001)
// gui.add( glb.scene.position,'y',-1000,10,0.001)
// gui.add( glb.scene.position,'z',-1000,100,0.001)

scene.add(glb.scene)
// console.log("bed111111111111111111111111111111111",)
})
let hhjj={x:0}
 function uptext(children){

  for(let item of children) {
item.traverse((child)=>{
  console.log( child,"kkkkkklllnnnnnnnnnnnnnllllllll");
  
if (child  instanceof THREE.Mesh && child.material  instanceof THREE.MeshStandardMaterial  ) {
  child.rotation.x=(Math.PI*0.5)
  child.rotation.z=-65.2
  child.scale.set(2,2,2)
child.position.y=10
child.position.x=-100
child.position.z=200
  child.material= new THREE.MeshStandardMaterial({
    color:"red",metalness:0.6,roughness:0.2,
  })

}
 })
  }

 }

gltfLoader.load('/model/text.glb',(glb)=>{
// console.log("gglbbbbbbbbbbbbbbbbb111111111111",glb.scene.children)

glb.scene.position.x=200
let children=[...glb.scene.children]

for(let item of children) {
  scene.add(item)
}
uptext(children)

})
// gltfLoader.setDRACOLoader(dracoLoader);

// gltfLoader.load(


// 	"/models/unititled.gltf",
// 	(gltf) => {
	
// 		// while (gltf.scene.children.length) {
// 		// 	const child = gltf.scene.children[0];
// 		// 	scene.add(child);
// 		// }
// 		// scene.add(gltf.scene);
//    console.log( gltf);
// 	}
// );
// let mixer = null;
// gltfLoader.load("/model/adhil.gltf", function(gltf) {
//     mixer = new THREE.AnimationMixer(gltf.scene);
//     // const action = mixer.clipAction(gltf.animations[2]);

//     // action.play();

//     // gltf.scene.scale.set(0.1, 0.1, 0.1);
//     scene.add(gltf.scene);
// });


/**
 * Floor
 */

let doorcolorbush=new THREE.TextureLoader().load("/3dimg/adhil.png")

const floor = new THREE.Mesh(
	new THREE.PlaneGeometry(100, 100),
	new THREE.MeshStandardMaterial({
		map:doorcolorbush,
		color: "white",side:THREE.DoubleSide
	
		
	})
);
floor.receiveShadow = true;
floor.rotation.y = -Math.PI * 0.2;
floor.position.set(0,20,300)
scene.add(floor);

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.01);
// scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight("yellow", 1);

directionalLight.position.set(5, 50, 5);

const helper = new THREE.DirectionalLightHelper( directionalLight, 1000 );
// scene.add( helper );
// scene.add(directionalLight); 

const directionalLight2 = new THREE.DirectionalLight("white", 1);

directionalLight2.position.set( 10, 80,-300 );


const helper2 = new THREE.DirectionalLightHelper( directionalLight2, 50 );
// scene.add( helper2 );
scene.add(directionalLight2);
const pointLight = new THREE.PointLight( "red",10000, 100 );



pointLight.position.set( 10, 80, 300 );
scene.add( pointLight );

const sphereSize = 10;
const pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
// scene.add( pointLightHelper );
/**
 * Sizes
 */
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};

window.addEventListener("resize", () => {
	// Update sizes
	sizes.width = window.innerWidth;
	sizes.height = window.innerHeight;

	// Update camera
	camera.aspect = sizes.width / sizes.height;
	camera.updateProjectionMatrix();

	// Update renderer
	renderer.setSize(sizes.width, sizes.height);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
	75,
	sizes.width / sizes.height,
	0.1,
	1000
);
camera.position.set(-2, 6, 50);
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
// controls.target.set(0, 0.75, 0);
// controls.autoRotate=true
// controls.enableZoom=false
controls.enableDamping = false;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
	canvas: canvas,antialias:true
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));


gui.add(renderer,'toneMapping',{
	no:THREE.NoToneMapping,
	linear:THREE.LinearToneMapping,
	reichard:THREE.ReinhardToneMapping,
	cinson :THREE.CineonToneMapping,
	aces:THREE.ACESFilmicToneMapping

}).onFinishChange(()=>{
	renderer.toneMapping=Number(renderer.toneMapping)

})

gui.add(renderer,'toneMappingExposure',0,100)





const clock = new THREE.Clock();
let previousTime = 0;

const tick = () => {
	if (gg) {
		
console.log("ond",gg);
		
	}
	
	const elapsedTime = clock.getElapsedTime();
	const deltaTime = elapsedTime - previousTime;
	previousTime = elapsedTime;

	// Update Mixer
	if (mmdd) {
		mmdd.position.x=30
	}

	
	// Update controls
	controls.update();

	// Render
	renderer.render(scene, camera);

	// Call tick again on the next frame
	window.requestAnimationFrame(tick);
};

tick();