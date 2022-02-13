import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Travel</>,
        SubHeading: () => (
            <>
                We're getting married in Chicago, the windy city! Here's info on how to get there and where to stay. You shouldn't need a car because Chicago is one of the only US cities with great trains and busses!
            </>
        ),
    },
    [LANGUAGE.PT]: {
        Heading: () => <>Como chegar</>,
        SubHeading: () => (
            <>
                Nosso casamento sera em Chicago, a cidade do vento! Segue a informa&ccedil;&atilde;o de como chegar e onde ficar. Carros n&atilde;o s&atilde;o necessarios em Chicago devido ao sistema de transporte publico robusto.
            </>
        ),
    },
}
