import styled from "@emotion/styled";

export const SyledLoader = styled.div`
  display: grid;
  /* align-items: center; */
  justify-content: center;
  .bar {
    width: 100px;
    height: 5px;
    animation: loading 2s cubic-bezier(0.17, 0.37, 0.43, 0.67) infinite;
  }

  @keyframes loading {
    0%,
    100% {
      transform: translate(0, 0);
    }

    50% {
      transform: translate(80px, 0);
      background-color: #f5634a;
      width: 25px;
    }
  }
`;
