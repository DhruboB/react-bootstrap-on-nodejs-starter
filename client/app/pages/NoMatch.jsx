import React, { Component } from "react";
import styled from "styled-components";

// Customizing style using styled component which can be used as regular React Component
const Styles = styled.div`
  .navbar {
    background-color: #61dafb;
  }
  .hover {
      color: white;
    }
  }
`;

class NoMatch extends Component {
  render() {
    return (
      <Styles>
        <div>
          <h2>Ooops !! looking for something ? visit again please.</h2>
          <p>Page will be enhanced to New look and feel, coming soon...</p>
        </div>
      </Styles>
    );
  }
}

export default NoMatch;
