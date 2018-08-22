import React, { Component } from "react";
import { StyledHeader, Title } from "./style";

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <Title>
          <i class="material-icons">blur_on</i>
          <span>Sync Translations</span>
        </Title>
      </StyledHeader>
    );
  }
}

export default Header;
