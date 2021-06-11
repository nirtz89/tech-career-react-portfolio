import styled from 'styled-components'

const LeftSideContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
    padding-top: 60px !important;
`;

const UserImage = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 6px solid #ffffff;
`;

const UserName = styled.h1`
    color: #ffffff;
    font-size: 30px;
    font-weight: bold;
    margin-top: 16px;
`;

const UserTitle = styled.h2`
    color: #ffffff;
    font-size: 24px;
    font-weight: normal;
    margin-top: 8px;
`;

const DownloadCVButton = styled.button`
    display: inline-block;
    position: relative;
    padding: .8em 2.1em;
    margin-top: 48px;
    margin-bottom: .75em;
    margin-right: .25em;
    font-size: 1em;
    line-height: 1.2;
    border: 0;
    outline: 0;
    border: 2px solid #fff;
    color: #fff;
    text-shadow: none;
    background-color: transparent;
    border-radius: 30px;
    font-family: poppins,Helvetica,sans-serif;
    -webkit-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    -ms-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
    box-shadow: 0 10px 10px -8px rgb(0 0 0 / 22%);
    cursor: pointer;
`

const SocialButtons = styled.ul`
    list-style-type: none;
    display: flex;
    margin-top: 16px;
    li {
        font-size: 12px !important;
        color: #fff;
        margin: 0 8px;
    }
    a {
        color: #fff;
        display: inline-block;
        padding: 6px;
        border: 1px solid #fff;
        text-decoration: none;
        border-radius: 8px;
    }
`;

function LeftSide() {
  return (
    <LeftSideContainer>
        <UserImage className="animate__animated animate__jackInTheBox" src="https://lmpixels.com/demo/breezycv/light/1/img/main_photo.jpg" alt="" />
        <UserName>Nir Tzezana</UserName>
        <UserTitle>Frontend Developer</UserTitle>
        <SocialButtons>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
        </SocialButtons>
        <DownloadCVButton>Download CV</DownloadCVButton>
    </LeftSideContainer>
  );
}

export default LeftSide;