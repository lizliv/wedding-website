import React, { useContext, useState } from "react"
import { useCookies } from "react-cookie"
import { NavLink as RouterNavLink, withRouter } from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"
import NavLink from "react-bootstrap/NavLink"
import Nav from "react-bootstrap/Nav"
import NavItem from "react-bootstrap/NavItem"
import Dropdown from "react-bootstrap/Dropdown"
import ReactCountryFlag from "react-country-flag"
import classNames from "classnames"

import { selectLanguage } from "utilities/cookies"
import { LANGUAGE } from "actions/constants"
import { signOut } from "actions"
import { Store } from "store"
import { navigation } from "content"

import styles from "./Navigation.module.scss"
// import { FALSE } from "node-sass"

function Navigation({ history }) {
    const [cookies, setCookie] = useCookies(["language"])
    const { state, dispatch } = useContext(Store)
    const [expanded, setExpanded] = useState(false);

    const {
        app: {
            user: { name, isAuthenticated, email },
        },
    } = state

    const handleSelectLanguage = lang =>
        setCookie("language", lang, { path: "/" })

    const handleSignOut = () => signOut(dispatch)

    const languageCodes = {
        [LANGUAGE.PT]: "BR",
        [LANGUAGE.EN]: "US",
    }

    const {
        schedule: ScheduleNavText,
        scheduleBrazil: ScheduleBRNavText,
        travel: TravelNavText,
        travelBrazil: TravelBRNavText,
        thingsToDo: ThingsToDoNavText,
        faq: FAQNavText,
        registry: RegistryNavText,
        rsvp: RSVPNavText,
        rsvpBrazil: RSVPBRNavText,
        signOut: SignOutText,
        signIn: SignInText,
        manageRsvp: ManageRSVPText,
    } = navigation[selectLanguage(cookies)]

    return (
        <Navbar
            variant="dark"
            expand="lg"
            sticky="top"
            expanded={expanded}
            className={styles.navigation}
        >
            <RouterNavLink
                to="/"
                className={classNames("navbar-brand", styles.brand)}
            >
                C & L
            </RouterNavLink>
            <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-left">
                    <Dropdown className="ml-left">
                        <Dropdown.Toggle as={NavLink}>
                            US
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item
                                href="#/schedule"
                                onClick={() => setExpanded(false)}>
                                    <ScheduleNavText />
                            </Dropdown.Item>
                            <Dropdown.Item
                                href="#/travel"
                                onClick={() => setExpanded(false)}>
                                    <TravelNavText />
                            </Dropdown.Item>
                            <Dropdown.Item
                                    href="#/things-to-do"
                                    onClick={() => setExpanded(false)}
                                >
                                    <ThingsToDoNavText />
                            </Dropdown.Item>
                            <Dropdown.Item
                                    href="#/faq"
                                    onClick={() => setExpanded(false)}
                                >
                                    <FAQNavText />
                            </Dropdown.Item>
                            <Dropdown.Item
                                    href="#/rsvp"
                                    onClick={() => setExpanded(false)}
                                >
                                    <RSVPNavText />
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="ml-left">
                        <Dropdown.Toggle as={NavLink}>
                            Brasil
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item
                                    href="#/schedule-brazil"
                                    onClick={() => setExpanded(false)}
                                >
                                    <ScheduleBRNavText />
                            </Dropdown.Item>
                            <Dropdown.Item
                                href="#/travel-brazil"
                                onClick={() => setExpanded(false)}
                                >
                                    <TravelBRNavText />
                            </Dropdown.Item>
                            <Dropdown.Item
                                    href="#/rsvp-brazil"
                                    onClick={() => setExpanded(false)}
                                >
                                    <RSVPBRNavText />
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <RouterNavLink
                        to="/registry"
                        className="nav-link"
                        role="button"
                        onClick={() => setExpanded(false)}
                    >
                        <RegistryNavText />
                    </RouterNavLink>
                </Nav>
                <Nav className="ml-auto">
                {/*    {isAuthenticated ? (
                        <Dropdown as={NavItem}>
                            <Dropdown.Toggle as={NavLink}>
                                {name}
                            </Dropdown.Toggle>
                            <Dropdown.Menu alignRight>
                                <Dropdown.Item className={styles.email}>
                                    <strong>{email}</strong>
                                </Dropdown.Item>
                                <Dropdown.Item onSelect={handleSignOut}>
                                    <SignOutText />
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onSelect={() => history.push("/rsvp")}
                                >
                                    <ManageRSVPText />
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    ) : (
                        <RouterNavLink
                            to="/auth"
                            className="nav-link"
                            role="button"
                        >
                            <SignInText />
                        </RouterNavLink>
                    )} */}
                    <Dropdown as={NavItem}>
                        <Dropdown.Toggle as={NavLink}>
                            <ReactCountryFlag
                                countryCode={
                                    languageCodes[selectLanguage(cookies)]
                                }
                                svg
                            />{" "}
                            {selectLanguage(cookies)}
                        </Dropdown.Toggle>
                        <Dropdown.Menu alignRight>
                            <Dropdown.Item
                                eventKey={LANGUAGE.EN}
                                onSelect={handleSelectLanguage}
                            >
                                <ReactCountryFlag countryCode="US" svg />{" "}
                                {LANGUAGE.EN}
                            </Dropdown.Item>
                            <Dropdown.Item
                                eventKey={LANGUAGE.PT}
                                onSelect={handleSelectLanguage}
                            >
                                <ReactCountryFlag countryCode="BR" svg />{" "}
                                {LANGUAGE.PT}
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Navigation)
