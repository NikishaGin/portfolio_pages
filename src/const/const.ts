import { keyframes } from "@emotion/react";

export const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0px, -100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, -150px, 0);
  }
`;