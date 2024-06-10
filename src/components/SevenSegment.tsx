"use client";
import { useEffect, useRef } from "react";

type CanvasProps = React.CanvasHTMLAttributes<HTMLCanvasElement> & {
  input?: string;
};

type SegmentRect = [number, number, number, number];
type SegmentDot = [number, number, number, number, number];

const segments: { [key: string]: SegmentRect | SegmentDot } = {
  a: [30, 20, 80, 10],
  b: [110, 30, 10, 65],
  c: [110, 105, 10, 65],
  d: [30, 170, 80, 10],
  e: [20, 105, 10, 65],
  f: [20, 30, 10, 65],
  g: [30, 95, 80, 10],
  ".": [130, 185, 5, 0, 2 * Math.PI],
};

export default function SevenSegment({ input, ...props }: CanvasProps) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    console.log(canvas);

    const context = canvas.getContext("2d");
    if (!context) return;

    drawOffSegments(context);

    drawOnSegments(context, input);
  }, [input]);

  return (
    <div>
      <canvas
        className="bg-primary m-1"
        ref={ref}
        width={140}
        height={200}
        {...props}
      />
    </div>
  );
}

function drawOffSegments(context: CanvasRenderingContext2D) {
  context.fillStyle = "#B3B8B1";
  context.beginPath();
  Object.values(segments).forEach((segment) => {
    segment.length === 4
      ? context.rect(...(segment as SegmentRect))
      : context.arc(...(segment as SegmentDot));
  });
  context.arc(...(segments["."] as SegmentDot)); // dot
  context.fill();
}

function drawOnSegments(context: CanvasRenderingContext2D, input?: string) {
  context.beginPath();
  context.fillStyle = "red";

  if (!input) return;
  for (const segment of input) {
    const segmentCoords = segments[segment];
    if (segmentCoords) {
      segmentCoords.length === 4
        ? context.rect(...(segmentCoords as SegmentRect))
        : context.arc(...(segmentCoords as SegmentDot));
    }
  }
  context.fill();
}
