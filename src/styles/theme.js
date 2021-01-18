import typography from "./typography/typography";
import { cssIndex } from "./css/utils.styles";

export const colors = {
	greyLight: "#fafafa",
	white: "#ffffff",
	black: "#010101",
};

export const css = {
	...cssIndex,
};

export const theme = {
	colors,
	typography,
	css,
};

export default theme;
