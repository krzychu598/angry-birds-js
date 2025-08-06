import { extend } from "@pixi/react";
import { Graphics } from "pixi.js";

extend({ Graphics });

export default function Floor() {
  const height = window.innerHeight;
  const width = window.innerWidth;

  return (
    <pixiGraphics
      draw={(graphics) => {
        graphics.clear();
        graphics.setFillStyle({ color: "green" });
        graphics.rect(0, height - 100, width, 100);
        graphics.fill();
      }}
    />
  );
}
