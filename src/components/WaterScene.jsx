import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const waterPalette = {
  normal: 0x8fd8ff,
  iron: 0xd7a64b,
  copper: 0x4bc5b7,
  algae: 0x58a65c,
  chromium: 0xf0b238,
  turbidity: 0xa6c27a
};

const riskPalette = {
  normal: 0x7ed7ff,
  warning: 0xffb703,
  danger: 0xe63946
};

const makeCylinderPoints = (count, radius, height, yOffset = 0) => {
  const positions = new Float32Array(count * 3);
  for (let index = 0; index < count; index += 1) {
    const angle = Math.random() * Math.PI * 2;
    const r = Math.sqrt(Math.random()) * radius;
    positions[index * 3] = Math.cos(angle) * r;
    positions[index * 3 + 1] = (Math.random() - 0.5) * height + yOffset;
    positions[index * 3 + 2] = Math.sin(angle) * r;
  }
  return positions;
};

export default function WaterScene({ data, className = '' }) {
  const hostRef = useRef(null);
  const objectsRef = useRef({});

  useEffect(() => {
    if (!hostRef.current) return undefined;

    const host = hostRef.current;
    const width = host.clientWidth || 640;
    const height = host.clientHeight || 420;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xdff7ff, 0.045);

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(3.1, 2.35, 4.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    host.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minDistance = 3.4;
    controls.maxDistance = 7.5;
    controls.target.set(0, 0.2, 0);

    scene.add(new THREE.AmbientLight(0xdcefff, 0.75));
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.3);
    keyLight.position.set(3, 4, 2);
    scene.add(keyLight);

    const riskLight = new THREE.PointLight(0xffb703, 2.2, 8);
    riskLight.position.set(-1.9, 1.4, 1.3);
    scene.add(riskLight);

    const group = new THREE.Group();
    scene.add(group);

    const bottleMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xdff9ff,
      transparent: true,
      opacity: 0.22,
      roughness: 0.06,
      metalness: 0,
      transmission: 0.4,
      thickness: 0.45,
      side: THREE.DoubleSide
    });

    const bottle = new THREE.Mesh(new THREE.CylinderGeometry(0.92, 0.82, 2.7, 72, 1, true), bottleMaterial);
    bottle.position.y = 0.08;
    group.add(bottle);

    const topRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.92, 0.025, 12, 80),
      new THREE.MeshStandardMaterial({ color: 0xe8fbff, transparent: true, opacity: 0.55 })
    );
    topRing.rotation.x = Math.PI / 2;
    topRing.position.y = 1.43;
    group.add(topRing);

    const bottomRing = topRing.clone();
    bottomRing.position.y = -1.27;
    group.add(bottomRing);

    const waterMaterial = new THREE.MeshPhysicalMaterial({
      color: waterPalette.normal,
      transparent: true,
      opacity: 0.64,
      roughness: 0.2,
      metalness: 0,
      transmission: 0.16,
      side: THREE.DoubleSide
    });

    const water = new THREE.Mesh(new THREE.CylinderGeometry(0.78, 0.72, 1.72, 72), waterMaterial);
    water.position.y = -0.23;
    group.add(water);

    const surface = new THREE.Mesh(
      new THREE.CircleGeometry(0.78, 72),
      new THREE.MeshStandardMaterial({ color: 0xe7ffff, transparent: true, opacity: 0.22 })
    );
    surface.rotation.x = -Math.PI / 2;
    surface.position.y = 0.64;
    group.add(surface);

    const particleMax = 260;
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(makeCylinderPoints(particleMax, 0.68, 1.48, -0.22), 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xf4f7dd,
      size: 0.026,
      transparent: true,
      opacity: 0.72,
      depthWrite: false
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    group.add(particles);

    const precipitateMax = 150;
    const precipitateGeometry = new THREE.BufferGeometry();
    precipitateGeometry.setAttribute('position', new THREE.BufferAttribute(makeCylinderPoints(precipitateMax, 0.62, 0.14, -1.1), 3));
    const precipitateMaterial = new THREE.PointsMaterial({
      color: 0xcab07b,
      size: 0.04,
      transparent: true,
      opacity: 0.8,
      depthWrite: false
    });
    const precipitate = new THREE.Points(precipitateGeometry, precipitateMaterial);
    group.add(precipitate);

    const platform = new THREE.Mesh(
      new THREE.CylinderGeometry(1.22, 1.35, 0.12, 72),
      new THREE.MeshStandardMaterial({ color: 0xbfe8f7, roughness: 0.55, metalness: 0.08 })
    );
    platform.position.y = -1.42;
    group.add(platform);

    const grid = new THREE.GridHelper(5.2, 14, 0x45a9c8, 0xb8ddea);
    grid.position.y = -1.5;
    scene.add(grid);

    objectsRef.current = {
      renderer,
      scene,
      camera,
      controls,
      group,
      water,
      surface,
      particles,
      precipitate,
      riskLight,
      particleMaterial,
      precipitateMaterial
    };

    let rafId = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsed = clock.getElapsedTime();
      controls.update();
      group.rotation.y = Math.sin(elapsed * 0.28) * 0.08;
      surface.position.y = 0.64 + Math.sin(elapsed * 1.8) * 0.018;
      if (objectsRef.current.flashDanger) {
        riskLight.intensity = 2.4 + Math.sin(elapsed * 5.8) * 1.2;
      }
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };
    animate();

    const resizeObserver = new ResizeObserver(([entry]) => {
      const nextWidth = Math.max(280, entry.contentRect.width);
      const nextHeight = Math.max(260, entry.contentRect.height);
      camera.aspect = nextWidth / nextHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(nextWidth, nextHeight);
    });
    resizeObserver.observe(host);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      controls.dispose();
      renderer.dispose();
      host.removeChild(renderer.domElement);
      scene.traverse((item) => {
        if (item.geometry) item.geometry.dispose();
        if (item.material) {
          if (Array.isArray(item.material)) item.material.forEach((material) => material.dispose());
          else item.material.dispose();
        }
      });
    };
  }, []);

  useEffect(() => {
    const objects = objectsRef.current;
    if (!objects.water) return;

    const nextData = {
      pollutionType: 'normal',
      turbidity: 0.15,
      precipitate: 0.1,
      riskLevel: 'normal',
      ...data
    };

    const waterColor = waterPalette[nextData.pollutionType] || waterPalette.normal;
    const riskColor = riskPalette[nextData.riskLevel] || riskPalette.normal;

    objects.water.material.color.setHex(waterColor);
    objects.water.material.opacity = 0.72 - Math.min(nextData.turbidity, 0.9) * 0.24;
    objects.surface.material.color.setHex(waterColor);
    objects.surface.material.opacity = 0.16 + Math.min(nextData.turbidity, 1) * 0.18;

    const particleCount = Math.max(8, Math.round(260 * Math.min(Math.max(nextData.turbidity, 0), 1)));
    objects.particles.geometry.setDrawRange(0, particleCount);
    objects.particleMaterial.opacity = 0.38 + Math.min(nextData.turbidity, 1) * 0.48;

    const precipitateCount = Math.max(4, Math.round(150 * Math.min(Math.max(nextData.precipitate, 0), 1)));
    objects.precipitate.geometry.setDrawRange(0, precipitateCount);
    objects.precipitateMaterial.opacity = 0.35 + Math.min(nextData.precipitate, 1) * 0.5;

    objects.riskLight.color.setHex(riskColor);
    objects.riskLight.intensity = nextData.riskLevel === 'normal' ? 1.2 : 2.6;
    objects.flashDanger = nextData.riskLevel === 'danger';
  }, [data]);

  return <div ref={hostRef} className={`water-scene ${className}`} aria-label="三维水样污染模拟舱" />;
}
