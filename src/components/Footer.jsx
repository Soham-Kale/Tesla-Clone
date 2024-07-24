import React from 'react'
import styled from 'styled-components';

function Footer() {
    return (
        <Container>
            <br /><br /><br />
            <p>1 $7,500 Federal Tax Credit available for eligible buyers and 
                subject to MSRP caps. Model 3 Rear-Wheel </p> 
            <p>Drive not eligible.</p> <br /><br />

            <p>2 Price before estimated savings is $42,490, excluding taxes and fees. Subject to change. Estimated</p>
            <p>savings includes $5,000 in <b><u>gas savings</u></b> estimated over five years, the $7,500 Federal Tax Credit and state</p>
            <p>incentives, available to eligible buyers and subject to MSRP caps. <b><u>Terms apply.</u></b></p>
            <br /><br />

            <p>3 Price before estimated savings is $44,990, excluding taxes and fees. Subject to change. Estimated</p>
            <p>savings includes $6,000 in <b><u>gas savings</u></b> estimated over five years, the $7,500 Federal Tax Credit and state</p>
            <p>incentives, available to eligible buyers and subject to MSRP caps. <b><u>Terms apply.</u></b></p>
            <br /><br />

            <p>4 Price before estimated savings is $79,990, excluding taxes and fees. Subject to change. Estimated</p>
            <p>savings includes $6,500 in <b><u>gas savings</u></b> estimated over five years, the $7,500 Federal Tax Credit and state</p>
            <p>incentives, available to eligible buyers and subject to MSRP caps. <b><u>Terms apply.</u></b></p>
            <br /><br />

            <p>5 Price before estimated savings is $74,990, excluding taxes and fees. Subject to change. Estimated</p>
            <p>savings includes $5,000 in <b><u>gas savings</u></b> estimated over five years, the $7,500 Federal Tax Credit and state</p>
            <p>buyers and subject to MSRP caps.<b><u>Terms apply.</u></b></p>
            <br /><br />

            <Menu>
                <a href="#">Tesla © 2024</a>
                <a href="#">Privacy & Legal</a>
                <a href="#">Vehicle Recalls</a>
                <a href="#">Contact</a>
                <a href="#">News</a>
                <a href="#">Get Updates</a>
                <a href="#">Locations</a>
            </Menu>
        </Container>
    )
}

export default Footer;

const Container = styled.div`
    background: black;
    color: #ffffff;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    text-align: center;

    p {
        color: #ffffff;
    }

    u {
        color: #ffffff;
    }

    ul {
        display: flex;
        flex-direction: row;
        text-align: center;
        justify-content: space-around;
    }

    li {
        display: flex;
        align-items: center;
        color: #ffffff;
    }
`


const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    margin-top: 30px;

    a {
        color: #ffffff;
        font-size: 11px;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
`