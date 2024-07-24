import React from 'react'
import styled from 'styled-components'
import Section from './Section';
import Footer from './Footer';

function Home() {
    return (
        <Container>
            <Section
                title="Modle 3"
                description1="$7,500 Federal Tax Credit Available1"
                description2="From $29,990 After Est. Savings2"
                backgroundImg="model-3.png"
                leftBtnText="Order Now"
                rightBtnText="Demo Drive"
            />

            <Section
                title="Modle Y"
                description1="1.99% APR Financing Ending August 31"
                description2="From $31,4903"
                backgroundImg="model-y.jpg"
                leftBtnText="Order Now"
                rightBtnText="Demo Drive"
            />

            <Section
                title="Modle x"
                description1="From $65,9904"
                description2="After $14,000 Est. Savings"
                backgroundImg="model-x.jpg"
                leftBtnText="Order Now"
                rightBtnText="Demo Drive"
            />

            <Section
                title="Modle S"
                description1="From $68,4905"
                description2="After $6,500 Est. Savings"
                backgroundImg="model-s.jpg"
                leftBtnText="Order Now"
                rightBtnText="Demo Drive"
            />

            <Section
                title="Solar Panels"
                description="Schedule a Virtual Consultation"
                backgroundImg="solar-panels.png"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />

            <Section
                title="Solar Roof"
                description1="Produce Clean Energy From Your Roof"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />

            <Section
                title="Powerwall"
                description=""
                backgroundImg="powerwall.png"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />

            <Section
                title="Accessories"
                description=""
                backgroundImg="accessories.png"
                leftBtnText="Shop Now"
            />

            <Footer/>

        </Container>
    )
}

export default Home;

const Container = styled.div`
    height: 100vh;

`