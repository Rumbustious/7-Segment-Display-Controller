import SevenSegment from "./components/SevenSegment";

export default function Home() {
  const hexadecimal = {
    "0": "abcdef",
    "1": "ef",
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
      <h1>7 Segments Project</h1>
      <SevenSegment input={hexadecimal["d"]} />
    </main>
  );
}


