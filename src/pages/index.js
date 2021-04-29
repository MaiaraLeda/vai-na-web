import React from "react";
import styled  from 'styled-components';
import './index.css';

//Components
import Header from '../components/header';
import Footer from '../components/footer';

// styles
const Container = styled.div`
	
`;

const Layouts = () => {
  return (
    <Container>
      <Header home />
      <p>Vai na web</p>
      <Footer />
    </Container>
  )
}

export default Layouts;
