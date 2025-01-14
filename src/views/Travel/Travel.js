import React from "react"
import Container from "react-bootstrap/Container"
import { useCookies } from "react-cookie"

import { selectLanguage } from "utilities/cookies"
import { title, travel } from "content/Travel"
import { Header } from "components/Header"
import { Item } from "components/Item"
import headerImg from "photos/airplane.jpg"

function Travel() {
    const [cookies] = useCookies(["language"])

    const { Heading, SubHeading } = title[selectLanguage(cookies)]
    const {mapLink,travelItems} = travel[selectLanguage(cookies)]

    return (
        <>
            <Header
                imageUrl={headerImg}
                Heading={Heading}
                SubHeading={SubHeading}
            />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <iframe
                src={mapLink} 
                width="700" 
                height="350"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                ></iframe>
            </div>
            <Container fluid>
                {travelItems.map(
                    ({ Type, Title, Details, Address, Phone, link }, idx) => (
                        <Item
                            key={idx}
                            LeftMainTitle={Type}
                            LeftFirstSubTitle={Title}
                            LeftFirstContact={Address}
                            LeftSecondContact={Phone}
                            RightDetails={Details}
                            infoLink={link}
                        />
                    )
                )}
            </Container>
        </>
    )
}

export default Travel
