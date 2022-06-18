import React from "react";
import styled from "styled-components";
/**
 * const StyledCard = styled.tag(h1,h2,div,span,...)``
 * CSS-in-JS
 */
const StyledCard = styled.div`
  background-color: red;
`;
const Card = () => {
  return (
    <StyledCard>
      <img
        src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1200x900&vertical=top"
        alt=""
      />
      <div>
        <div>
          <div>
            <img
              src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1200x900&vertical=top"
              alt=""
            />
            <span>@zndrson</span>
          </div>
          <div>256</div>
        </div>
        <div>
          <h3>Cosmic Perspective</h3>
          <span>12,000 PSL</span>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card;
