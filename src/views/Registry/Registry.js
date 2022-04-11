import React from "react"
import { useCookies } from "react-cookie"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { selectLanguage } from "utilities/cookies"
import { Header } from "components/Header"
import headerImg from "photos/registry.jpg"

import { title } from "content/Registry"
import { registry } from "content/Registry"

import styles from "./Registry.module.scss"

// (function (e, t, n) {
//     var s, a = e.getElementsByTagName(t)[0];e.getElementById(n) || (s = e.createElement(t), s.id = n, s.async = !0, s.src = "https://widget.zola.com/js/widget.js", a.parentNode.insertBefore(s, a))
// })(document, "script", "zola-wjs")

function Registry() {
    const [cookies] = useCookies(["language"])

    const { Heading, SubHeading } = title[selectLanguage(cookies)]
    const { Title, Details, RegistryLink, RegistryKey} = registry[selectLanguage(cookies)]

    return (
        <>
            <Header
                imageUrl={headerImg}
                Heading={Heading}
                SubHeading={SubHeading}
            />
            <section>
                <Container>
                    <Row>
                        <Col className={styles.registry}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <a href={RegistryLink} data-registry-key={RegistryKey} target="_blank" rel="noopener noreferrer">
                                    <button className={styles.registryButton} >Our Zola Wedding Registry</button>
                                </a>
                                {/* The link below should work in tandem with the script in index.html to load a widget, but it doesn't seem to work */}
                                {/* <a className="zola-registry-embed" href={RegistryLink} data-registry-key={RegistryKey}>Our Zola Wedding Registry</a> */}
                            </div>
                            <br/>
                            <br/>
                            <h4>
                                <Title />
                            </h4>
                            <Details />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Registry
