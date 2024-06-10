"use client";
import ControlPanel from "../../components/ControlPanel";
import SevenSegment from "../../components/SevenSegment";
import { Splitter, SplitterPanel } from "primereact/splitter";
import "../index.css";
import { useState } from "react";

export default function Hexadecimal() {
  const [binaryInput, setBinaryInput] = useState("");
  const [numberOfBits, setNumberOfBits] = useState(1);
  const [cellsLimit, setCellsLimit] = useState(null);
  const [segemntDisplay, setSegementDisplay] = useState("");

  console.log(segemntDisplay);

  const convertBinaryToHexArray = (binaryStr) => {
    return [0];
  };

  const hexadecimalArray = convertBinaryToHexArray(segemntDisplay);

  const hexadecimal = {
    "0": "abcdef",
    "1": "bc",
    "2": "abged",
    "3": "abcdg",
    "4": "fbgc",
    "5": "afcdg",
    "6": "afedcg",
    "7": "abc",
    "8": "abcdefg",
    "9": "abcdfg",
    A: "abcefg",
    b: "fcdeg",
    C: "afed",
    d: "bcdeg",
    E: "afedg",
    F: "afeg",
  };
  return (
    <main>
      <div className="border-2">
        <Splitter style={{ height: "100%" }} gutterSize={6}>
          <SplitterPanel size={50} minSize={20}>
            <ControlPanel
              binaryInput={binaryInput}
              setBinaryInput={setBinaryInput}
              numberOfBits={numberOfBits}
              setNumberOfBits={setNumberOfBits}
              cellsLimit={cellsLimit}
              setCellsLimit={setCellsLimit}
              segemntDisplay={segemntDisplay}
              setSegementDisplay={setSegementDisplay}
            />
          </SplitterPanel>
          <SplitterPanel
            size={50}
            minSize={30}
            className="flex flex-row justify-center rtl"
          >
            {hexadecimalArray.map((element) => (
              <SevenSegment key={element} input={hexadecimal[element]} />
            ))}
          </SplitterPanel>
        </Splitter>
      </div>
    </main>
  );
}
