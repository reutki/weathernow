import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ErrorStyled = styled(motion.div)`
  display: grid;
  margin-top: 30vh;
  width: 100%;
  height: max-content;
  justify-content: center;
  align-items: center;
  .error_container {
    color: red;
    display: grid;
    grid-template-columns: max-content max-content;
    justify-content: center;
    align-items: center;
  }
`;
export const IconStyle = styled(motion.div)``;
