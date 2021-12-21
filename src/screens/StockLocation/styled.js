import styled from "styled-components";
import { isMobile } from "react-device-detect";

import { Images } from "../../constant";

const StyledDiv = styled.div`
  .filter {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    label {
      min-width: 100px;
    }
  }
`;

export { StyledDiv };
