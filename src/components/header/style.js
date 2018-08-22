import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding-left: 32px;
  padding-right: 32px;
  background-color: #232c3d;
  color: #fff;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;

  i {
    margin-right: 6px;
    font-size: 32px;
    color: #64ff6c;
  }

  span {
    font-weight: bold;
  }
`;
