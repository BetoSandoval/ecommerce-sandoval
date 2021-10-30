import styled from "styled-components";

const Headder = styled.header`
  padding: 2.4rem 0;
  height: 13rem;
  .container {
    margin-right: auto;
    margin-left: auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    height: 100%;
    .inner {
      margin: 0 2.0rem;
      height: 100%;
      border-bottom: 2px solid;
      .logo {
        position: relative;
        padding: 0.4rem 1.5rem;
        font-size: 4.6rem;
        font-weight: 500;
        float: left;
        padding-right: 1.5rem,;
      }
      .menu {
        align-items: center;
        justify-content: flex-end;
        height: 100%;
        display: flex;
      }
    }
  }
`;
export default Headder;
