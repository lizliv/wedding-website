import React from "react"
import {Link } from "react-router-dom";
import { useCookies } from "react-cookie"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { selectLanguage } from "utilities/cookies"
import { details } from "content/Home"

import styles from "./Details.module.scss"

function Details() {
    const [cookies] = useCookies(["language"])

    const { Title, RSVPText, RSVPTextHelpPre, RSVPTextHelpPost, COVIDText, Date, Location, hashtag, locationLink } = details[
        selectLanguage(cookies)
    ]
    return (
        <section>
            <Container>
                <Row>
                    <Col className={styles.details}>
                        <h1 className={styles.announcement}>
                            <Title />
                        </h1>
                        <br/>
                        <h5>
                            <RSVPTextHelpPre/>
                        <Link to="/rsvp"><button className={styles.rsvp}>
                            <RSVPText />
                        </button>
                        </Link>
                            <RSVPTextHelpPost/>
                        </h5>
                        <br/>
                        <COVIDText />
                        <h1 className={styles.date}>
                            <Date />
                        </h1>
                        <h2 className={styles.location}>
                            <a
                                href={locationLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Location />
                            </a>
                        </h2>
                        <h3 className={styles.hashtag}>
                            <a
                                href={`https://www.instagram.com/explore/tags/${hashtag}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {`#${hashtag}`}
                            </a>
                        </h3>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Details
