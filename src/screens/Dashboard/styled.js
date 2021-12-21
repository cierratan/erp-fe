import styled from "styled-components";
import { isMobile } from "react-device-detect";

import { Images } from "../../constant";

const StyledDiv = styled.div`
  .hi {
    display: flex;
    align-items: center;

    h4 {
      font-size: 30px;
    }

    h3 {
      margin-left: 10px;
      font-size: 38px;
    }
  }

  .card-wrapper {
    margin-top: 40px;
    display: grid;
    grid-template-columns: 14.5% 14.5% 14.5% 14.5% 14.5% 14.5%;
    grid-gap: 30px;

    .menuCard {
      height: 200px;
      width: 100%;
    }

    .disabled {
      background-color: lightgray;
      cursor: not-allowed;
    }

    .ant-card-body {
      display: flex;
      flex-direction: column;
      align-items: center;

      .svg {
        width: 100%;
        height: auto;
      }

      p {
        margin-top: 30px;
        font-size: 20px;
      }
    }
  }
`;

export { StyledDiv };
