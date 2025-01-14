import React from "react"
import { useCookies } from "react-cookie"
import Container from "react-bootstrap/Container"

import { selectLanguage } from "utilities/cookies"
import { scheduleBrazil, title } from "content/Schedule-Brazil"
import { Header } from "components/Header"
import { Item } from "components/Item"
import headerImg from "photos/schedule.jpg"

function ScheduleBrazil() {
    const [cookies] = useCookies(["language"])

    const { Heading, SubHeading } = title[selectLanguage(cookies)]
    const scheduleItems = scheduleBrazil[cookies.language]

    // console.log( `url("${schedImg1}")`)
    // console.log( schedImg1)
    return (
        <>
            <Header
                imageUrl={headerImg}
                Heading={Heading}
                SubHeading={SubHeading}
            />
            <Container fluid>
                {scheduleItems.map(
                    (
                        {
                            LocationImage,
                            Title,
                            Date,
                            Time,
                            Location,
                            locationLink,
                            Address,
                            Details,
                            mapLink,
                        },
                        idx
                    ) => (
                        <Item
                            key={idx}
                            LeftImage={LocationImage}
                            LeftMainTitle={Title}
                            LeftFirstSubTitle={Date}
                            LeftSecondSubTitle={Time}
                            RightMainTitle={() => (
                                <a
                                    href={locationLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Location />
                                </a>
                            )}
                            RightFirstContact={() => (
                                <a
                                    href={mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Address />
                                </a>
                            )}
                            RightDetails={Details}
                        />
                    )
                )}
            </Container>
        </>
    )
}

export default ScheduleBrazil
