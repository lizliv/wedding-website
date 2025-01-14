import React, { useContext } from "react"
import { useCookies } from "react-cookie"
import { selectLanguage } from "utilities/cookies"

import { Store } from "store"
import { title } from "content/RSVP-Brazil"
import { Header } from "components/Header"
import headerImg from "photos/rsvp.jpg"

import { RSVPFormBrazil, SearchForm } from "./Forms"

function RSVP() {
    const { state } = useContext(Store)
    const [cookies] = useCookies(["language"])

    const {
        app: { user: { name, isAuthenticated, email } }
    } = state

    const { Heading, SubHeading, SubHeadingAuthenticated } = title[
        selectLanguage(cookies)
    ]

    let formDisplay
    if (isAuthenticated) {
        formDisplay = <RSVPFormBrazil />
    }
    else{
        formDisplay = <SearchForm />
    }



    return (
        <>
            <Header
                imageUrl={headerImg}
                Heading={Heading}
                SubHeading={
                    isAuthenticated
                        ? () => <SubHeadingAuthenticated name={name} />
                        : SubHeading
                }
            />

            {formDisplay}
            {/* {console.log('IsAuthenticated?', isAuthenticated)}
            {isAuthenticated ? () => 
                  <RSVPFormBrazil />
                  : <SearchForm />
            } */}
        </>
    )
}

export default RSVP
