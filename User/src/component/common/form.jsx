import React from "react";

import "./commonform.css"; // Importing the CSS file for styling

const types = {
    INPUT: "input",
    SELECT: "select",
    TEXTAREA: "textarea",
  };
  
function CommonForm({
    formControls,
    formData,
    isBtnDisabled,
    setFormData,
    onSubmit,
    buttonText,
  }) {
    function renderInputsByComponentType(controlItem) {
      const value = formData[controlItem.name] || "";
  
      switch (controlItem.componentType) {
        case types.INPUT:
          return (
            <input
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
            <select
              value={value}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  [controlItem.name]: e.target.value,
                })
              }
            >
              <option value="" disabled>
                {controlItem.label}
              </option>
              {controlItem.options &&
                controlItem.options.map((optionItem) => (
                  <option key={optionItem.id} value={optionItem.id}>
                    {optionItem.label}
                  </option>
                ))}
            </select>
          );
        case types.TEXTAREA:
          return (
            <textarea
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
            <input
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
            <div className="input-group" key={controlItem.name}>
              <label htmlFor={controlItem.name}>{controlItem.label}</label>
              {renderInputsByComponentType(controlItem)}
            </div>
          ))}
        </div>
        <button type="submit" disabled={isBtnDisabled} className="mt-2">
          {buttonText || "Submit"}
        </button>
      </form>
    );
  }
  
  export default CommonForm;