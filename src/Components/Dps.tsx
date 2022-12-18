// import React, { useState, useEffect, useRef } from "react";
// import styled from "styled-components";
// import { BsFillTriangleFill } from "react-icons/bs";

// import Globla from "./Globla";

// const Dps = () => {
//   const Dev: string[] = [
//     "-webkit-background-clip: text; background-image: linear-gradient(to right, blue, skyblue); background-clip: text; -webkit-text-fill-color: transparent;",
//     "black",
//     "black",
//   ];
//   const Pre: string[] = [
//     "black",
//     "-webkit-background-clip: text; background-image: linear-gradient(to right, #8225c5,  #dd0a92); background-clip: text; -webkit-text-fill-color: transparent;",
//     "black",
//   ];
//   const Shi: string[] = [
//     "black",
//     "black",
//     "-webkit-background-clip: text; background-image: linear-gradient(to right, #fe6148, #fc9538); background-clip: text; -webkit-text-fill-color: transparent;",
//   ];

//   let Dev_ref: any = useRef();
//   let Pre_ref: any = useRef();
//   let Shi_ref: any = useRef();

//   const borderCol1 = ["blue", "purple", "orange"];

//   const [count, setcount] = useState(0);

//   useEffect(() => {
//     setInterval(() => {
//       setcount((el) => el + 0.5);
//     }, 3000);
//   }, []);
//   console.log(count);

//   useEffect(() => {
//     Dev_ref.current.style = Dev[count % Dev.length];
//     Pre_ref.current.style = Pre[count % Pre.length];
//     Shi_ref.current.style = Shi[count % Shi.length];
//   });

//   return (
//     <Container>
//       <Wrapper>
//         <Develop ref={Dev_ref}>Develop.</Develop>
//         <Preview ref={Pre_ref}>Preview.</Preview>
//         <Ship ref={Shi_ref}>Ship.</Ship>
//       </Wrapper>

//       <span>
//         Vercel is the platform for frontend developers, providing the speed and{" "}
//         <br />
//         reliability innovators need to create at the moment of inspiration.
//       </span>
//       <Button_wrapper>
//         <Globla
//           col="white"
//           bg="black"
//           icon={<BsFillTriangleFill />}
//           text="Start Deploying"
//         />
//         <Globla icon="" col="black" bg="" text="Get a Demo"  />
//       </Button_wrapper>
//     </Container>
//   );
// };

// export default Dps;

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;

//   span {
//     text-align: center;
//     font-size: 23px;
//     font-weight: 400;
//     color: rgb(68, 68, 68);
//     line-height: 32px;
//     margin: 80px;
//   }
// `;
// const Wrapper = styled.div`
//   display: flex;
// `;

// const Develop = styled.h1`
//   font-size: 88px;
//   font-weight: 900;
//   margin: 0%;
// `;
// const Preview = styled.h1`
//   font-size: 88px;
//   font-weight: 900;
//   margin: 0%;
//   /* background-image: linear-gradient(to right, #8225c5, #dd0a92);
//   background-clip: text;
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent; */
// `;
// const Ship = styled.h1`
//   font-size: 88px;
//   font-weight: 900;
//   margin: 0%;
//   /* background-image: linear-gradient(to right, #fe6148, #fc9538);
//   background-clip: text;
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent; */
// `;

// const Button_wrapper = styled.div`
//   display: flex;
// `;

// //
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { BsFillTriangleFill } from "react-icons/bs";
import Globla from "./Globla";

const Dps = () => {
  const Dev: string[] = [
    "-webkit-background-clip: text; background-image: linear-gradient(to right, blue, skyblue); background-clip: text; -webkit-text-fill-color: transparent;",
    "black",
    "black",
  ];
  const Pre: string[] = [
    "black",
    "-webkit-background-clip: text; background-image: linear-gradient(to right, #8225c5,  #dd0a92); background-clip: text; -webkit-text-fill-color: transparent;",
    "black",
  ];
  const Shi: string[] = [
    "black",
    "black",
    "-webkit-background-clip: text; background-image: linear-gradient(to right, #fe6148, #fc9538); background-clip: text; -webkit-text-fill-color: transparent;",
  ];

  const borderCol1 = ["blue", "purple", "orange"];

  let Dev_ref: any = useRef();
  let Pre_ref: any = useRef();
  let Shi_ref: any = useRef();

  const [count, setcount] = useState(0);

  useEffect(() => {
    Dev_ref.current.style = Dev[count % Dev.length];
    Dev_ref.current.style.transition = "all ease-in 3s";
    Pre_ref.current.style = Pre[count % Pre.length];
    Pre_ref.current.style.transition = "all ease-in 3s";
    Shi_ref.current.style = Shi[count % Shi.length];
    Shi_ref.current.style.transition = "all ease-in 3s";
  });

  useEffect(() => {
    setInterval(() => {
      setcount((el) => el + 1 / 2);
    }, 3000);
  }, []);

  return (
    <Container>
      <Wrapper>
        <Develop ref={Dev_ref}>Develop.</Develop>
        <Preview ref={Pre_ref}>Preview.</Preview>
        <Ship ref={Shi_ref}>Ship.</Ship>
      </Wrapper>

      <span>
        Vercel is the platform for frontend developers, providing the speed and{" "}
        <br />
        reliability innovators need to create at the moment of inspiration.
      </span>
      <Button_wrapper>
        <Globla
          borderCol1={[]}
          count={count}
          col="white"
          bg="black"
          icon={<BsFillTriangleFill />}
          btnText="Start Deploying"
        />
        <Globla
          icon=""
          col="black"
          bg=""
          btnText="Get a Demo"
          borderCol1={borderCol1}
          count={count}
        />
      </Button_wrapper>
    </Container>
  );
};

export default Dps;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    text-align: center;
    font-size: 23px;
    font-weight: 400;
    color: rgb(68, 68, 68);
    line-height: 32px;
    margin: 80px;
  }
`;
const Wrapper = styled.div`
  display: flex;
`;

const Develop = styled.h1`
  font-size: 88px;
  font-weight: 900;
  margin: 0%;
`;
const Preview = styled.h1`
  font-size: 88px;
  font-weight: 900;
  margin: 0%;
  /* background-image: linear-gradient(to right, #8225c5, #dd0a92);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
`;
const Ship = styled.h1`
  font-size: 88px;
  font-weight: 900;
  margin: 0%;
  /* background-image: linear-gradient(to right, #fe6148, #fc9538);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
`;

const Button_wrapper = styled.div`
  display: flex;
`;
