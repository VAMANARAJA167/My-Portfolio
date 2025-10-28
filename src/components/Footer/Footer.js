import React from "react";
import styled from "@emotion/styled";

const FooterSection = styled.div`
  background-image: url(/Footer_Wave.svg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  position: relative;

  span {
    position: absolute;
    bottom: 4rem;
    color: #fff;

    a {
      text-decoration: underline;
    }
  }
`;

export const Paragraph = styled.p`
  margin-top: 2rem;
  line-height: 1.75rem;
  font-size: 1rem;
  color: #52525b; /* text-zinc-600 */
  font-weight: 300; /* font-light */
  }
`;
function Footer() {
  return (
    <FooterSection>
      <div className="Container"/>
    </FooterSection>
    
  );
}

export default Footer;
