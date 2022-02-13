import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Things to Do</>,
        SubHeading: () => (
            <>
                We’re so excited to share a few of our favorite places in the
                area with you.

                We will update this page soon.
            </>
        ),
        link: "https://www.choosechicago.com/",
    },
    [LANGUAGE.PT]: {
        Heading: () => <>O Que fazer</>,
        SubHeading: () => (
            <>
                Alguns lugares de interesso em Chicago.
            </>
        ),
        link: "https://www.choosechicago.com/",
    },
}
