import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

const CharacterModel = () => {
  return (
    <div className="character-container">
      <div className="character-model">
        <div className="character-rim"></div>
        <Canvas camera={{ position: [0, 1, 5] }}>
          <Scene />
        </Canvas>
      </div>
    </div>
  );
};

export default CharacterModel;
