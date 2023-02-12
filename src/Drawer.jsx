// import { useEffect, useState } from "react";
import { styled } from "solid-styled-components";
// import useMediaQuery from "./hooks/useMediaQuery";

const Div = styled.div`
  transition: flex-basis 0.3s;
  flex-basis: ${(props) => (props.isExpanded ? "280px" : "60px")};
  background-color: red;
  min-height: 100vh;
  flex-shrink: 0;
`;

function Drawer(props) {
  // const { isHoverExpanded, isExpandedByHandle, onMouseEnter, onMouseLeave } =
  //   props;
  // const [isPersistent, setIsPersistent] = useState(false);
  // const isViewportNarrow = useMediaQuery("(max-width: 600px)");

  // console.log("Drawer");

  // useEffect(
  //   function manageisPersistent() {
  //     if (isViewportNarrow) {
  //       setIsPersistent((prev) => false);
  //     } else {
  //       setIsPersistent((prev) => true);
  //     }
  //   },
  //   [isViewportNarrow]
  // );

  return (
    <Div
      // isExpanded={props.isExpandedByHandle}
      isExpanded={props.isExpandedByHandle || props.isHoverExpanded}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      {/* {console.log({ isHoverExpanded: props.isHoverExpanded })} */}
    </Div>
  );
}

export default Drawer;
