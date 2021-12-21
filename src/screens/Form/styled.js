import styled from "styled-components";
import { isMobile } from "react-device-detect";

import { Images } from "../../constant";

const StyledDiv = styled.div`
  .header {
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px dashed;

    h2 {
      font-size: 30px;
    }

    .right {
      text-align: right;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  label {
    min-width: 100px;
  }

  .formWrapper {
    .group {
      margin-bottom: 60px;
    }
    .row {
      display: grid;
      grid-template-columns: 48% 48.8%;
      grid-gap: 40px;
    }
  }
`;

export { StyledDiv };
