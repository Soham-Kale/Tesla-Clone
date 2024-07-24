import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-awesome-reveal';

function Section({title, description1, description2, leftBtnText, rightBtnText, backgroundImg}) {
    return (
        <Wrap bgImage = {backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1 style={{color: 'black'}}>{title}</h1>
                    <h2>{description1}</h2>
                    <h2>{description2}</h2>
                </ItemText>
            </Fade>

                <Buttons>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>

                        {   rightBtnText &&
                                <RightButton>
                                    {rightBtnText}
                                </RightButton>
                        }
                    </ButtonGroup>
                </Buttons>
        </Wrap>
    )
}

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
    padding-top: 12vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    font-size: 14px;
    cursor: pointer;
    margin: 8px;
    background-color: white;
    color: black;
`

const RightButton = styled(LeftButton)`
    background-color: black;
    font-size: 14px;
    color: white;
`

const DownArrow = styled.img`
    margin-top: 0px;
    height: 40px;
    margin-left: 45%;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div``