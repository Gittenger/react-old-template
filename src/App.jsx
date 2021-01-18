import styled from "styled-components";

import GlobalStyles from "./styles/global.styles.jsx";

import components from "./components/typography/typography.components";
import { device } from "./styles/css/utils.styles";

const { MyP, MyH1 } = components;

const MyOverride = styled(MyP)`
	color: green;
	${device.tabletM} {
		font-size: 2rem;
	}
`;

const MyOverrideH1 = styled(MyH1)`
	color: red;
	font-weight: 700;
`;

function App() {
	return (
		<>
			<GlobalStyles />
			<MyOverride>Hello world</MyOverride>
			<MyOverrideH1>HEADING</MyOverrideH1>
		</>
	);
}

export default App;
