import React from "react";
import { connect } from "react-redux";
import Select from "react-select";
import { cardImages, defaultDeck } from "../config";
import { createDeck } from "../store/actions";

export type ThemeSelectProps = {
  onChange: Function;
  createDeck: typeof createDeck;
};

const mapDispatchToProps = { createDeck };

const options = cardImages.map(image => ({
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

export default connect(
  null,
  mapDispatchToProps
)(ThemeSelect);
