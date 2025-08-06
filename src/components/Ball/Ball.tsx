import { extend } from "@pixi/react";
import { Graphics } from "pixi.js";

extend({ Graphics });

interface Person {
  x: number;
  y: number;
}

export default function Ball(props: { position: Person }) {
  return (
    <pixiGraphics
      draw={(graphics) => {
        graphics.clear();
        graphics.setFillStyle({ color: "red" });
        graphics.circle(props.position.x, props.position.y, 100);
        graphics.fill();
      }}
    />
  );
}
