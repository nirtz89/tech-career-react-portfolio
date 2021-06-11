import styled from 'styled-components'

const HomeTitle = styled.h2`
    font-size: 72px;
    color: black;
    text-align: center;
`

const HomeSubTitle = styled.h3`
    font-size: 40px;
    font-weight: normal;
    text-align: center;
    color: black;
`

function HomePage() {
  return (
    <div className="animate__animated animate__jackInTheBox">
        <HomeTitle>Nir Tzezana</HomeTitle>
        <HomeSubTitle>I am a Frontend Developer</HomeSubTitle>
    </div>
  );
}

export default HomePage;