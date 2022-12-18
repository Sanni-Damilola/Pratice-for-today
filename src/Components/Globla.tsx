// import React from "react";
// import styled from "styled-components";

// interface props {
//   text: string;
//   icon: any;
//   bg: string;
//   col: string;
//   borderCol1: string[]
// }

// const Globla: React.FC<props> = ({ text, icon, bg, col }) => {
//   return (
//     <Button col={col} bg={bg}>
//       <Icon>{icon}</Icon>
//       {text}
//     </Button>
//   );
// };

// export default Globla;

// const Button = styled.button<{ bg: string; col: string }>`
//   padding: 14px 50px;
//   display: flex;
//   color: white;
//   background-color: ${(myprops) => myprops.bg};
//   color: ${(props) => props.col};
//   font-size: 18px;
//   font-weight: 600;
//   border-radius: 8px;
//   transition: all 400ms;
//   cursor: pointer;

//   :hover {
//     background-color: white;
//     color: black;
//   }

//   margin-bottom: 50px;
//   margin: 10px;
// `;

// const Icon = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-right: 10px;
// `;

import React from "react";
import styled from "styled-components";
import { BsFillTriangleFill } from "react-icons/bs";

interface Iprops {
	icon: any;
	btnText: string;
	bg: string;
	col: string;
	borderCol1: string[];
	count: number;
}

const GlobalButton: React.FC<Iprops> = ({
	btnText,
	icon,
	bg,
	col,
	borderCol1,
	count,
}) => {
	return (
		<Button
			bx={borderCol1[count % borderCol1.length]}
			cc={borderCol1[count % borderCol1.length]}
			cols={col}
			bgs={bg}>
			<Icn>{icon}</Icn>
			{btnText}
		</Button>
	);
};

export default GlobalButton;

const Icn = styled.div`
	margin-right: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Button = styled.div<{
	bgs: string;
	cols: string;
	cc: string;
	bx: string;
}>`
	width: 200px;
	height: 45px;
	background-color: ${(myprops) => myprops.bgs};
	color: ${(props) => props.cols};
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	border-radius: 5px;
	margin-left: 20px;
	border: 1px solid black;
	border-color: ${(props) => props.cc};
	font-weight: bold;
	box-shadow: ${(props) => props.bx} 0px 48px 100px 0px;` 