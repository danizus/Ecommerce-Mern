import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export default function CommonForm({ formControls }) {
  const renderInputs = (controls) => {
    let element = null;
    switch (controls.ComponentType) {
      case "input":
        element = (
          <Input
            name={controls.name}
            placeholder={controls.placeHolder}
            id={controls.name}
            type={controls.type}
          />
        );
        break;
        case "select":

      default:
        element = (
            <Input
              name={controls.name}
              placeholder={controls.placeHolder}
              id={controls.name}
              type={controls.type}
            />
          );
        break;
    }
  };
  return (
    <form action="">
      <div className="flex flex-col gap-3">
        {formControls.map((controls) => (
          <div key={controls.name} className="grid w-full gap-1.5">
            <Label className="mb-1">{controls.label}</Label>
            {renderInputs(controls)}
          </div>
        ))}
      </div>
    </form>
  );
}
