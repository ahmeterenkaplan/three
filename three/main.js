import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
THREE.ColorManagement.enabled = true;
// renkler
var red = new THREE.Color(92, 57, 63); // Kırmızı renk (RGB formatında)
var color = new THREE.Color(255, 255, 255); // Kırmızı renk (RGB formatında)

 // Sahne oluşturma
 const scene = new THREE.Scene();

 // Kamera oluşturma
 const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
 camera.position.z = 8;
 

 // Renderer oluşturma
 const renderer = new THREE.WebGLRenderer();
 renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

 // Küre oluşturma
 const geometry = new THREE.SphereGeometry(5.8, 60, 60);
 var texture = new THREE.TextureLoader().load('earthcloudmap.png');
 var materialCloud = new THREE.MeshBasicMaterial({ map: texture , transparent: true, opacity: 0.4,color:0x9B4654});
 const material = new THREE.MeshLambertMaterial({ color: 0xff0000, wireframe: false, transparent: true, opacity: 0.1 });
 const sphere = new THREE.Mesh(geometry, materialCloud);
 scene.add(sphere);

  // Küçük küreleri oluşturma ve ana kürenin yüzeyine yerleştirme
  const smallSpheres = [];
  const sphereCount = 3000; // Küçük küre sayısıs

  for (let i = 0; i < sphereCount; i++) {
    const smallGeometry = new THREE.SphereGeometry(0.001, 16, 16);
    const smallMaterial = new THREE.MeshBasicMaterial({ color: 0x8C7474, wireframe: true, transparent: true, opacity: 0.1  });
    const smallSphere = new THREE.Mesh(smallGeometry, smallMaterial);

    // Küçük kürelerin konumunu ana kürenin yüzeyine sabitleme
    const phi = Math.random() * Math.PI * 2;
    const theta = Math.random() * Math.PI;
    const smallSphereX = 5.9 * Math.sin(theta) * Math.cos(phi);
    const smallSphereY = 5.9 * Math.sin(theta) * Math.sin(phi);
    const smallSphereZ = 5.9 * Math.cos(theta);
    smallSphere.position.set(smallSphereX, smallSphereY, smallSphereZ);
    smallSpheres.push(smallSphere);
    sphere.add(smallSphere);

  }
  const smallSpheres1 = [];
  const sphereCount1 = 750; // Küçük küre sayısıs

  for (let i = 0; i < sphereCount1; i++) {
    const smallGeometry1 = new THREE.SphereGeometry(0.005, 16, 16);
    const smallMaterial1 = new THREE.MeshBasicMaterial({ color: 0x8C7474 , wireframe: true , transparent: true, opacity: 1 });
    const smallSphere1 = new THREE.Mesh(smallGeometry1, smallMaterial1);

    // Küçük kürelerin konumunu ana kürenin yüzeyine sabitleme
    const phi = Math.random() * Math.PI * 2;
    const theta = Math.random() * Math.PI;
    const smallSphereX1 = 6 * Math.sin(theta) * Math.cos(phi);
    const smallSphereY1 = 6 * Math.sin(theta) * Math.sin(phi);
    const smallSphereZ1 = 6 * Math.cos(theta);
    smallSphere1.position.set(smallSphereX1, smallSphereY1, smallSphereZ1);
    smallSpheres1.push(smallSphere1);
    sphere.add(smallSphere1);

  }
  const smallSpheres2 = [];
  const sphereCount2 = 500; // Küçük küre sayısıs

  for (let i = 0; i < sphereCount2; i++) {
    const smallGeometry2 = new THREE.SphereGeometry(0.01, 16, 16);
    const smallMaterial2 = new THREE.MeshBasicMaterial({ color: 0xfffffff , wireframe: true , transparent: true, opacity: 0.2 });
    const smallSphere2 = new THREE.Mesh(smallGeometry2, smallMaterial2);

    // Küçük kürelerin konumunu ana kürenin yüzeyine sabitleme
    const phi = Math.random() * Math.PI * 2;
    const theta = Math.random() * Math.PI;
    const smallSphereX2 = 6.1 * Math.sin(theta) * Math.cos(phi);
    const smallSphereY2 = 6.1 * Math.sin(theta) * Math.sin(phi);
    const smallSphereZ2 = 6.1 * Math.cos(theta);
    smallSphere2.position.set(smallSphereX2, smallSphereY2, smallSphereZ2);
    smallSpheres2.push(smallSphere2);
    sphere.add(smallSphere2);

  }
  // Işık ekleme (isteğe bağlı)
  const light = new THREE.PointLight(color=0x9B4654, 1, 100);
  light.position.set(-10, -10, -10);
  scene.add(sphere);

  function increaseLightIntensity() {
    pointLight.intensity += 30;
}


  // konumlandırma
  sphere.position.set(-7, 0, 0);

 // Render fonksiyonu
 
 const animate = () => {
   requestAnimationFrame(animate);
   sphere.rotation.y += 0.002; // Kürenin dönüş hızı
   sphere.rotation.x -= 0.001; // Kürenin dönüş hızı
   sphere.rotation.z += 0.000001; // Kürenin dönüş hızı
   renderer.render(scene, camera);
 };
 animate();

 