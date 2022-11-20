import styled from "@emotion/styled";
import { motion } from "framer-motion";
export const WelcomeStyle = styled(motion.div)`
  opacity: 0;
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: max-content max-content;
  .icon {
    color: #e905dc;
  }
  h1 {
    color: white;
    margin-left: 10px;
  }
`;
