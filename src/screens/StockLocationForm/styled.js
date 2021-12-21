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
    min-width: 200px;
  }

  .formWrapper {
    display: flex;
    justify-content: center;
    width: 100%;

    form {
      width: 80%;
    }
    .group {
      margin-bottom: 60px;
    }
  }

  .submit {
    text-align: right;
  }
`;

export { StyledDiv };
