"use client";
import ControlPanel from "../components/ControlPanel";
import SevenSegment from "../components/SevenSegment";
import { Splitter, SplitterPanel } from "primereact/splitter";
import "./index.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="flex flex-col gap-6 *:font-bold *:text-2xl *:py-6 *:px-14 border-2 py-20 px-60">
        <Button asChild>
          <Link href="/decimal">Decimal</Link>
        </Button>
        <Button asChild>
          <Link href="/hexadecimal">Hexadecimal</Link>
        </Button>
        <Button asChild>
          <Link
            href="/letters"
            onClick={(e) => e.preventDefault()}
            className="hover:cursor-not-allowed"
          >
            Letters
          </Link>
        </Button>
        <Button asChild>
          <Link
            href="/counter"
            onClick={(e) => e.preventDefault()}
            className="hover:cursor-not-allowed"
          >
            Counter
          </Link>
        </Button>
      </div>
    </main>
  );
}
