import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
// mesh.position.x = 1
// mesh.position.y = 1
// mesh.position.z = 3
scene.add(mesh)

//Positionner directement les 3 axes en même temps
mesh.position.set(0.7, - 0.6, 1) 

//Scale
// mesh.scale.x = 2
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5
mesh.scale.set(1.5, 0.5, 0.5)

//Rotation
//Réorganiser l'ordre des axes 
mesh.rotation.reorder('YXZ')
mesh.rotation.x = Math.PI * 0.30
mesh.rotation.y = Math.PI * 0.25

//Axes HELPER
const axesHelper = new THREE.AxesHelper(3)
scene.add(axesHelper)

//Correspond à la distance entre le centre de la scène et la position de notre objet.
console.log(mesh.position.length())
// mesh.position.normalize()
// console.log(mesh.position.normalize())

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)
//Correspond à la distance entre le centre de la scene et la position de notre objet
console.log(mesh.position.distanceTo(camera.position))
// camera.lookAt(new THREE.Vector3(3, 0, 0))
camera.lookAt(mesh.position)
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)