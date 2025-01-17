import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const [btn, setBtn] = useState(false);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Container scroll={scroll}>
            <a>
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu show={btn}>
                <button>Vehicles</button>
                <button>Energy</button>
                <button>Charging</button>
                <button>Discover</button>
                <button>Shop</button>
            </Menu>

            <RightMenu>
                <CustomMenu onClick={() => setBurgerStatus(true)} />
            </RightMenu>

            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>
                <li><a href="#">Vehicles</a></li>
                <li><a href="#">Energy</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">Discover</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Account</a></li>
            </BurgerNav>
        </Container>
    );
}

export default Header;

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: ${props => props.scroll ? 'white' : 'transparent'};
    transition: background-color 0.3s;
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -60px;

    button {
        font-size: 14px;
        background: none;
        border: none;
        font-weight: 550;
        padding: 0 14px;
        flex-wrap: nowrap;
    }

    @media(max-width: 768px) {
        display: none;
    }
`;

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`;

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`;

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 100%;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;

    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);

        a {
            font-weight: 600;
        }
    }
`;

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`;

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;
