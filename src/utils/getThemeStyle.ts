import { Cards, CardStyle } from '../types';
import { themes, basicCardStyle } from '../config';

export default (theme: string): CardStyle => {
  const image = themes.find((t: Cards) => t.name === theme);
  return image ? image.style : basicCardStyle;
}