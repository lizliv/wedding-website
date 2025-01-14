import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Travel</>,
        SubHeading: () => (
            <>
                We're renewing our vows in Rio Grande do Sul, Brazil! Here's info on how to get there and where to stay. 
                {/* You shouldn't need a car because Chicago is one of the only US cities with great trains and busses! */}
            </>
        ),
    },
    [LANGUAGE.PT]: {
        Heading: () => <>Como chegar</>,
        SubHeading: () => (
            <>
                Estamos renovando nossos votos em Rio Grande do Sul, Brazil! Segue informações de como chegar e estadia. 
                {/* Carros são facultativos, uma vez que o transporte público poderá atender bem a todos. */}
            </>
        ),
    },
}
