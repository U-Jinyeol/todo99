import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";
import styled from "styled-components";

type Props = {
  children: ReactNode | undefined;
};

const DefaultLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Section>{children}</Section>
      <Footer />
    </>
  );
};

export default DefaultLayout;

const Section = styled.div`
  width: 100%;
  height: 90vh;
  padding-top: 77px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
`;
