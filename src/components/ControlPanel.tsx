"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Minus, Plus } from "lucide-react";

export default function ControlPanel(props) {
  // const [binaryInput, setBinaryInput] = useState("");
  // const [numberOfBits, setNumberOfBits] = useState(1);
  // const [cellsLimit, setCellsLimit] = useState(null);

  function onClick(adjustment: number) {
    props.setNumberOfBits(1);
  }

  return (
    <div className="flex flex-col gap-5 mx-auto w-full max-w-sm p-4">
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="">
            {props.cellsLimit ? "Update" : "Enter"} Number of Bits
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle className="text-center">
                Enter Number of Bits
              </DrawerTitle>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <div className="flex items-center justify-center space-x-2">
                <Button
                  size="icon"
                  className="h-8 w-8 shrink-0 rounded-full"
                  onClick={() => props.setNumberOfBits(props.numberOfBits - 1)}
                  disabled={props.numberOfBits <= 1}
                >
                  <Minus className="h-4 w-4" />
                  <span className="sr-only">Decrease</span>
                </Button>
                <div className="flex-1 text-center">
                  <div className="text-7xl font-bold tracking-tighter">
                    {props.numberOfBits}
                  </div>
                </div>
                <Button
                  size="icon"
                  className="h-8 w-8 shrink-0 rounded-full"
                  onClick={() => props.setNumberOfBits(props.numberOfBits + 1)}
                  disabled={props.numberOfBits >= 32}
                >
                  <Plus className="h-4 w-4" />
                  <span className="sr-only">Increase</span>
                </Button>
              </div>
            </div>
            <DrawerFooter>
              <Button onClick={() => props.setCellsLimit(props.numberOfBits)}>
                Submit
              </Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>

      {props.cellsLimit && (
        <InputOTP
          maxLength={props.cellsLimit}
          value={props.binaryInput}
          onChange={(binaryInput) => props.setBinaryInput(binaryInput)}
          pattern={"^[01]+$"}
        >
          <InputOTPGroup className="flex flex-row flex-wrap m-auto max-w-sm">
            {Array.from({ length: props.cellsLimit }, (_, index) => (
              <InputOTPSlot key={index} index={index} />
            ))}
          </InputOTPGroup>
        </InputOTP>
      )}
      <Button onClick={() => props.setSegementDisplay(props.binaryInput)}>
        Submit
      </Button>
    </div>
  );
}
