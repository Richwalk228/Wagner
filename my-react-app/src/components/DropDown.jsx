import { useState } from "react";

 function DropDown(options, onSelect) {
  const [isOpen, seIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropDown = () => {
    seIsOpen(!isOpen);
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };


  return (
    <>
      <div className="dropdown">
        <button onClick={toggleDropDown}>
          {selectedOption ? selectedOption.lable : "Select an option"}
        </button>
        {isOpen && (
          <ul>
            {options.map((option) => (
              <li key={option.value} onClick={() => handleOptionClick(option)}>
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default DropDown