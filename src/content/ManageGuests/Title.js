import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Manage the Invited Guests</>,
        SubHeading: () => (
            <span>
                This page should only be viewable by the site admins.
            </span>
        ),
    },
    [LANGUAGE.PT]: {
        Heading: () => <>Manage the Invited Guests</>,
        SubHeading: () => (
            <span>
                This page should only be viewable by the site admins.
            </span>
        ),
    },
}
