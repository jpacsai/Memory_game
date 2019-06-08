import React from "react";
import Select from "react-select";
import { themes, defaultDeck } from "../config";

export type ThemeSelectProps = {
  onChange: Function;
};

const options = themes.map(image => ({
  value: image.name,
  label: image.name.charAt(0).toUpperCase() + image.name.slice(1)
}));

const defaultValue = options.filter(option => option.value === defaultDeck);

class ThemeSelect extends React.PureComponent<ThemeSelectProps> {
  handleChange = (selectedOption: any) => {
    if (this.props.onChange) this.props.onChange(selectedOption);
  };

  render() {
    return <Select options={options} onChange={this.handleChange} defaultValue={defaultValue}/>;
  }
}

export default ThemeSelect;
