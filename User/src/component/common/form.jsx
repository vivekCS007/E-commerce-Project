import React from "react";
import { Label } from "@/component/UI/label";
import { Input } from "@/component/UI/input";
import {
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/component/UI/Select";
import { Button } from "@/component/UI/button";
import { Textarea } from "@/component/UI/textarea";
import "./commonform.css"; // Importing the CSS file for styling

const types = {
    INPUT: "input",
    SELECT: "select",
    TEXTAREA: "textarea",
};

function CommonForm({ formControls, formData, setFormData, onSubmit, buttonText }) {
    function renderInputsByComponentType(controlItem) {
        const value = formData[controlItem.name] || "";

        switch (controlItem.componentType) {
            case types.INPUT:
                return (
                    <Input
                        name={controlItem.name}
                        placeholder={controlItem.placeholder}
                        id={controlItem.name}
                        type={controlItem.type}
                        value={value}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                [controlItem.name]: e.target.value,
                            })
                        }
                    />
                );
            case types.SELECT:
                return (
                    <Select
                        onValueChange={(value) =>
                            setFormData({
                                ...formData,
                                [controlItem.name]: value,
                            })
                        }
                        value={value}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder={controlItem.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                            {controlItem.options &&
                                controlItem.options.map((optionItem) => (
                                    <SelectItem key={optionItem.id} value={optionItem.id}>
                                        {optionItem.label}
                                    </SelectItem>
                                ))}
                        </SelectContent>
                    </Select>
                );
            case types.TEXTAREA:
                return (
                    <Textarea
                        name={controlItem.name}
                        placeholder={controlItem.placeholder}
                        id={controlItem.name}
                        value={value}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                [controlItem.name]: e.target.value,
                            })
                        }
                    />
                );
            default:
                return (
                    <Input
                        name={controlItem.name}
                        placeholder={controlItem.placeholder}
                        id={controlItem.name}
                        type={controlItem.type}
                        value={value}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                [controlItem.name]: e.target.value,
                            })
                        }
                    />
                );
        }
    }

    return (
        <form onSubmit={onSubmit} className="common-form">
            <div className="flex gap-3">
                {formControls.map((controlItem) => (
                    <div className="grid w-full gap-small" key={controlItem.name}>
                        <Label className="mb-1">{controlItem.label}</Label>
                        {renderInputsByComponentType(controlItem)}
                    </div>
                ))}
            </div>
            <Button type="submit" className="mt-2 w-full">
                {buttonText || "Submit"}
            </Button>
        </form>
    );
}

export default CommonForm;
