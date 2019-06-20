import React from "react";
import { Cards } from "../types";
import { themes } from "../config";

import Card from './Card';
import "./ThemePreview.scss";

export type ThemePreviewProps = {
  selectedOption: string;
};

export default class ThemePreview extends React.PureComponent<
  ThemePreviewProps
> {
  render() {
    const { selectedOption } = this.props;
    const theme = themes.find((t: Cards) => t.name === selectedOption);
    if (!theme) return [];
    const urls = theme.images;
    return (
      <div className="ThemePreview">
        <div className="grid">
          {urls.map((url, index) => (
            <Card key={index} url={url} matched theme={theme.name} />
          ))}
        </div>
      </div>
    );
  }
}
