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
      color: darkblue;
    }

    .right {
      text-align: right;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  label {
    min-width: 200px;
  }

  .formWrapper {
    display: flex;
    justify-content: center;
    width: 100%;

    .loading {
      height: 100%;
      display: flex;
      align-items: center;
      jsutify-content: center;

      img {
        width: 100px;
      }
    }

    form {
      width: 80%;
    }
    .group {
      margin-bottom: 60px;
    }

    .ant-input[disabled] {
      color: rgba(0, 0, 0, 0.85);
      background-color: transparent;
      border: unset;
      box-shadow: none;
      /* cursor: not-allowed; */
      opacity: 1;
      border-bottom: 1px solid black;
    }

    .ant-select-disabled.ant-select:not(.ant-select-customize-input)
      .ant-select-selector {
      color: rgba(0, 0, 0, 0.85);
      background: transparent;
      border: unset;
      box-shadow: none;
      border-bottom: 1px solid black;
      /* cursor: not-allowed; */
    }
  }

  .submit {
    text-align: right;
  }
`;

export { StyledDiv };
