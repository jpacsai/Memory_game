import React, { Fragment } from "react";
import Select from "react-select";
import { themes, defaultDeck } from "../config";

import ThemePreview from "./ThemePreview";

export type ThemeSelectProps = {
  onChange: Function;
};

export type ThemeSelectState = {
  selectedOption: string;
};

const options = themes.map(image => ({
  value: image.name,
  label: image.name.charAt(0).toUpperCase() + image.name.slice(1)
}));

const defaultValue = options.filter(option => option.value === defaultDeck);

class ThemeSelect extends React.PureComponent<ThemeSelectProps, ThemeSelectState> {
  state = {
    selectedOption: defaultDeck
  }

  handleChange = (selectedOption: any) => {
    this.setState({ selectedOption: selectedOption.value });
    if (this.props.onChange) this.props.onChange(selectedOption);
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <Fragment>
        <Select options={options} onChange={this.handleChange} defaultValue={defaultValue}/>
        <ThemePreview selectedOption={selectedOption}/>
      </Fragment>
    );
  }
}

export default ThemeSelect;
