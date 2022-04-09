import React from "react"
import { useCookies } from "react-cookie"

import { selectLanguage } from "utilities/cookies"
import { title } from "content/ManageGuests"
import { Header } from "components/Header"
import headerImg from "photos/registry.jpg"

function ManageGuests() {
    const [cookies] = useCookies(["language"])

    const { Heading, SubHeading } = title[selectLanguage(cookies)]

    return (
        <>
            <Header
                imageUrl={headerImg}
                Heading={Heading}
                SubHeading={SubHeading}
            />
        </>
    )
}

export default ManageGuests
