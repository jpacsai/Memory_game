import React from "react";
import { Cards } from "../types";
import { themes } from "../config";
import "./ThemePreview.scss";

export type ThemePreviewProps = {
  selectedOption: string;
};

export default class ThemePreview extends React.PureComponent<
  ThemePreviewProps
> {
  render() {
    const { selectedOption } = this.props;
    const image = themes.find((t: Cards) => t.name === selectedOption);
    if (!image) return [];
    const urls = image.images;
    return (
      <div className="ThemePreview">
        <div className="grid">
          {urls.map((url, index) => (
            <div key={index} className="preview-card">
              <div className="card-container">
                <img src={url} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
