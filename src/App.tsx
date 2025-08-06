import { Application, extend } from "@pixi/react";
import { Container } from "pixi.js";

import Floor from "@components/Floor";
import Ball from "@components/Ball";
import { useState } from "react";

extend({ Container });

export default function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  document.addEventListener("mousemove", (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  });
  return (
    <Application resizeTo={window}>
      <pixiContainer>
        <Floor />
        <Ball position={position} />
      </pixiContainer>
    </Application>
  );
}
