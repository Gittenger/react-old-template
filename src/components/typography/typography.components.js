import styled, { css } from "styled-components";
import { device } from "../../styles/css/utils.styles";

export const MyP = styled.p`
	font-family: var(--fontMain);
	font-size: 4rem;
	font-weight: 400;

	${device.tabletLand} {
		font-size: 2.5rem;
	}
`;

export const MyH1 = styled.h1`
	font-family: var(--fontHeading);
	font-size: 4rem;

	${device.tabletLand} {
		font-size: 2.5rem;
	}
`;

export const components = {
	MyP,
	MyH1,
};

export default components;
