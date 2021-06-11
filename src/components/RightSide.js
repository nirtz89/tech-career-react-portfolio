import styled from 'styled-components';
import Menu from './Menu';
import MePage from './MePage';
import HomePage from './HomePage';
import ImagesPage from './ImagesPage';
import { useState } from 'react';

const RightSideContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
    background: #fff;
    border-radius: 32px;
    position: relative;
`;

const PageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 64px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`;

function RightSide() {

  const [currentPage, setCurrentPage] = useState('me')

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />
      case "me":
        return <MePage />
      case "images":
        return <ImagesPage />
      default:
        return <MePage />
    }
  }

  const changePage = (page) => {
    setCurrentPage(page);
  }

  return (
    <RightSideContainer>
        <Menu onChangePage={changePage}></Menu>
        <PageWrapper>
            {renderPage()}
        </PageWrapper>
    </RightSideContainer>
  );
}

export default RightSide;