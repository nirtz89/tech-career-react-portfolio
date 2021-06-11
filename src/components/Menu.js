import styled from 'styled-components'

const MenuContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 80px;
    min-height: 250px;
    justify-content: flex-start;
    align-items: center;
    background: #fff;
    border-radius: 32px;
    box-shadow: 0 0 100px -5px rgb(0 0 0 / 41%);
    right: -100px;
    padding-top: 16px;
    padding-bottom: 16px;
    box-sizing: border-box;
`;

const MenuIcon = styled.img`
    width: 30px;
    height: 30px;
    opacity: 0.5;
    margin-top: 12px;
    margin-bottom: 12px;
    cursor: pointer;
`;

function Menu(props) {
  return (
    <MenuContainer>
        <MenuIcon onClick={() => props.onChangePage('home')} src="https://image.flaticon.com/icons/png/512/1946/1946488.png" alt="" />
        <MenuIcon onClick={() => props.onChangePage('me')} src="https://image.flaticon.com/icons/png/512/1077/1077063.png" alt="" />
        <MenuIcon src="https://image.flaticon.com/icons/png/512/1077/1077050.png" alt="" />
        <MenuIcon onClick={() => props.onChangePage('images')} src="https://image.flaticon.com/icons/png/512/1077/1077059.png" alt="" />
    </MenuContainer>
  );
}

export default Menu;