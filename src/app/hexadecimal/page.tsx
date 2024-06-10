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
    let multiplier = 0;
    let output = 0;
    let HexArray = [];
    for (let i = binaryStr.length - 1; i >= 0; i--) {
      let digit = +binaryStr[i];
      output += digit * (2 ** multiplier);
      multiplier++;
    }

    while (output != 0){
      HexArray.push(output % 16);
      output = Math.floor(output / 16)
    }
    return HexArray;
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
    "10": "abcefg",
    "11": "fcdeg",
    "12": "afed",
    "13": "bcdeg",
    "14": "afedg",
    "15": "afeg",
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
            className="flex flex-row-reverse justify-center"
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
