'use client';
import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const emojis = ['🍎', '🍌', '🍇', '🍉', '🍓', '🥝', '🍍', '🥑'];

const PhysicsBox = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(Matter.Engine.create());

  useEffect(() => {
    const box = sceneRef.current;
  
    // Short delay to ensure dimensions are ready
    const timeout = setTimeout(() => {
      const engine = engineRef.current;
      const world = engine.world;
  
      const width = box.offsetWidth;
      const height = box.offsetHeight;
  
      const runner = Matter.Runner.create();
      Matter.Runner.run(runner, engine);
  
      const wallThickness = 50;
      const ground = Matter.Bodies.rectangle(width / 2, height + wallThickness / 2, width, wallThickness, { isStatic: true });
      const leftWall = Matter.Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height, { isStatic: true });
      const rightWall = Matter.Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height, { isStatic: true });
      const ceiling = Matter.Bodies.rectangle(width / 2, -wallThickness / 2, width, wallThickness, { isStatic: true });
      Matter.World.add(world, [ground, leftWall, rightWall, ceiling]);
  
      const mouse = Matter.Mouse.create(box);
      const mouseConstraint = Matter.MouseConstraint.create(engine, {
        mouse,
        constraint: {
          stiffness: 0.2,
          render: { visible: false }
        }
      });
      Matter.World.add(world, mouseConstraint);
  
      const emojiElements = [];
      for (let i = 0; i < 10; i++) {
        const x = Math.random() * (width - 80) + 40;
        const y = Math.random() * -200;
        const body = Matter.Bodies.circle(x, y, 20, {
          restitution: 0.9,
          friction: 0.005
        });
        Matter.World.add(world, body);
  
        const el = document.createElement('div');
        el.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        el.style.position = 'absolute';
        el.style.fontSize = '2rem';
        el.style.cursor = 'grab';
        el.style.userSelect = 'none';
        box.appendChild(el);
        emojiElements.push({ body, el });
      }
  
      Matter.Events.on(engine, 'afterUpdate', () => {
        emojiElements.forEach(({ body, el }) => {
          el.style.left = `${body.position.x - 16}px`;
          el.style.top = `${body.position.y - 16}px`;
        });
      });
    }, 100); // 100ms delay
  
    return () => {
      clearTimeout(timeout);
      Matter.World.clear(engineRef.current.world);
      Matter.Engine.clear(engineRef.current);
      if (sceneRef.current) sceneRef.current.innerHTML = '';
    };
  }, []);
  

  return (
    <div
      ref={sceneRef}
      className="relative w-full max-w-[600px] h-[400px] border-2 border-gray-400 bg-gray-100 mx-auto overflow-hidden"
    />
  );
};

export default PhysicsBox;
