import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Questions?</>,
        SubHeading: () => (
            <>
                If you have any other questions other than what we’ve listed
                here, please reach out to{" "}
                <a href="mailto:lizandchristian2022@gmail.com">lizandchristian2022@gmail.com</a>.
            </>
        ),
    },
    [LANGUAGE.PT]: {
        Heading: () => <>Dúvidas Frequentes</>,
        SubHeading: () => (
            <>
                Se você tiver outras dúvidas além das listadas aqui, por favor, entre em contato {" "}
                <a href="mailto:lizandchristian2022@gmail.com">lizandchristian2022@gmail.com</a>.
            </>
        ),
    },
}
