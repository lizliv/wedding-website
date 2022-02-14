import React from "react"
import { useCookies } from "react-cookie"
import Container from "react-bootstrap/Container"

import { selectLanguage } from "utilities/cookies"
import { thingsToDo, title } from "content/ThingsToDo"
import { Header } from "components/Header"
import { Item } from "components/Item"
import headerImg from "photos/thingstodo.jpg"

function ThingsToDo() {
    const [cookies] = useCookies(["language"])

    const { Heading, SubHeading } = title[selectLanguage(cookies)]
    const thingsToDoItems = thingsToDo[selectLanguage(cookies)]

    return (
        <>
            <Header
                imageUrl={headerImg}
                Heading={Heading}
                SubHeading={SubHeading}
            />
            <Container fluid>
                {thingsToDoItems.map(({ Title, Date, Time, Details, link }, idx) => (
                    <Item
                        key={idx}
                        LeftMainTitle={Title}
                        LeftFirstSubTitle={Date}
                        LeftSecondSubTitle={Time}
                        RightDetails={Details}
                        infoLink={link}
                    />
                ))}
            </Container>
        </>
    )
}

export default ThingsToDo
