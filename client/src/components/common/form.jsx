import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export default function CommonForm({
  formControls,
  formData,
  setFormData,
  onSubmit,
  buttonText,
}) {
  const renderInputs = (controls) => {
    let element = null;

    let value = formData[controls.name];
    switch (controls.ComponentType) {
      case "input":
        element = (
          <Input
            value={value}
            name={controls.name}
            placeholder={controls.placeHolder}
            id={controls.name}
            type={controls.type}
            onChange ={(e)=> setFormData({
              ...formData,
              [controls.name]:e.target.value
            })}
          />
        );
        break;
      case "select":
        element = (
          <Select onValueChange={(value)=>setFormData({
            ...formData,
            [controls.name]:value
          })} value={value} name={controls.name} id={controls.name}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={controls.placeHolder} />
            </SelectTrigger>
            <SelectContent>
              {controls.options && controls.options.length() > 0
                ? controls?.options?.map((option) => (
                    <SelectItem key={option.id} value={option.id}>
                      {option.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );

      case "textarea":
        element = (
          <Textarea
            name={controls.name}
            placeholder={controls.label}
            id={controls.id}
            value={value} 
            onChange ={(e)=> setFormData({
              ...formData,
              [controls.name]:e.target.value
            })}
          />
        );

      default:
        element = (
          <Input
            name={controls.name}
            placeholder={controls.placeHolder}
            id={controls.name}
            type={controls.type}
            value={value}
            onChange ={(e)=> setFormData({
              ...formData,
              [controls.name]:e.target.value
            })}
          />
        );
        break;
    }

    return element;
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3 mb-5">
        {formControls.map((controls) => (
          <div key={controls.name} className="grid w-full gap-1.5">
            <Label className="mb-1">{controls.label}</Label>
            {renderInputs(controls)}
          </div>
        ))}
      </div>
      <Button type="submit">{buttonText || null}</Button>
    </form>
  );
}
