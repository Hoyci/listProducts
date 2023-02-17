import React, { useState } from 'react';
import { Category } from '../../types';
import { Container } from './styles';

export default function CheckBox({
  id,
  label,
  checked,
  optionQuantity,
  setFilteredOptions,
}: CheckBoxProps) {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const elementText = event.target.title;
    const elementCheck = event.target.checked;
    setIsChecked((prevState) => !prevState);
    setFilteredOptions((prevState) =>
      prevState.map(({ name }) => name).includes(elementText)
        ? prevState.filter(({ name }) => name !== elementText)
        : [...prevState, { _id: id, name: elementText, checked: elementCheck }]
    );
  };

  return (
    <Container>
      <label htmlFor="checkBox">
        <input
          title={label}
          className={isChecked ? 'checked' : ''}
          name="checkBox"
          type="checkbox"
          checked={checked}
          onChange={handleChangeCheckBox}
        />
        <span className="text">
          {label} &#40;{optionQuantity}&#41;
        </span>
      </label>
    </Container>
  );
}

CheckBox.defaultProps = {
  checked: false,
};

type CheckBoxProps = {
  id: string;
  label: string;
  checked?: boolean;
  optionQuantity: number;
  setFilteredOptions: React.Dispatch<React.SetStateAction<Array<Category>>>;
};
