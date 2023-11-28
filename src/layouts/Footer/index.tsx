import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTitle>TODO 99</FooterTitle>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  background-color: #5e5e5e;
  height: 242px;
  width: 100%;
  padding: 12px 16px;
`;

const FooterTitle = styled.h1`
  color: #edd9ff;
  font-size: 32px;
  line-height: 39px;
`;
