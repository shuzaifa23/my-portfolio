import { useGLTF, useTexture } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

export default function Scene() {
  const { scene: character } = useGLTF("/models/character.glb");
  const appleTexture = useTexture("/apple.png");
  appleTexture.flipY = false;

  useEffect(() => {
    if (!character) return;

    character.traverse((child: any) => {
      if (!child.isMesh || !child.material) return;

      const materials = Array.isArray(child.material)
        ? child.material
        : [child.material];

      const name = child.name.toLowerCase();

      materials.forEach((mat: any) => {
        if (!mat) return;

        // Outfit
        if (
          name.includes("body") ||
          name.includes("cloth") ||
          name.includes("shirt")
        ) {
          mat.color?.set("#b91c1c");
        }

        // Shoes
        if (name.includes("shoe")) {
          mat.color?.set("#dc2626");
        }

        // Laptop logo (SAFE)
        if (
          name.includes("laptop") ||
          name.includes("screen")
        ) {
          if (mat.map !== undefined) {
            mat.map = appleTexture;
            mat.needsUpdate = true;
          }
        }
      });
    });
  }, [character, appleTexture]);

  return (
    <>
      {/* LIGHTS */}
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />

      {/* MODEL */}
      <primitive object={character} scale={2} position={[0, -1, 0]} />
    </>
  );
}
