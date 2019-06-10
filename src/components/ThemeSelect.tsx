import React, { Fragment } from "react";
import { connect } from 'react-redux';
import { State } from "../store";
import Select from "react-select";
import { themes, defaultDeck } from "../config";
import { getTheme } from './../store/selectors';

import ThemePreview from "./ThemePreview";

export type ThemeSelectProps = {
  onChange: Function;
  theme: string;
};

export type ThemeSelectState = {
  selectedOption: string;
};

const mapStateToProps = (state: State) => ({
  theme: getTheme(state)
});

const options = themes.map(image => ({
  value: image.name,
  label: image.name.charAt(0).toUpperCase() + image.name.slice(1)
}));


class ThemeSelect extends React.PureComponent<ThemeSelectProps, ThemeSelectState> {
  state = {
    selectedOption: this.props.theme
  }

  getDefaultValue = () => {
    const defaultValue = options.find(option => option.value === this.props.theme);
    return defaultValue;
  };

  handleChange = (selectedOption: any) => {
    this.setState({ selectedOption: selectedOption.value });
    if (this.props.onChange) this.props.onChange(selectedOption);
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <Fragment>
        <Select options={options} onChange={this.handleChange} defaultValue={this.getDefaultValue()}/>
        <ThemePreview selectedOption={selectedOption}/>
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(ThemeSelect);
