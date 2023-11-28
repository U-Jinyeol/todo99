import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>TODO 99</HeaderTitle>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  background-color: #5e5e5e;
  height: 63px;
  width: 100%;
  padding: 12px 16px;
`;

const HeaderTitle = styled.h1`
  color: #edd9ff;
  font-size: 32px;
  vertical-align: middle;
  line-height: 39px;
`;
