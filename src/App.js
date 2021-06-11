import styled from 'styled-components'
import './App.css';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Main = styled.div`
  background: #04b4e0;
  width: 80%;
  max-width: 1200px;
  max-height: 800px;
  height: 80%;
  border-radius: 32px;
  box-shadow: 0 0 100px -5px rgb(0 0 0 / 41%);
  display: flex;
`;

function App() {
  return (
    <Container>
      <Main>
        <LeftSide />
        <RightSide />
      </Main>
    </Container>
  );
}

export default App;