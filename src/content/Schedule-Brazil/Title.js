import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Schedule</>,
        SubHeading: () => (
            <span>
                Here's what to expect during our wedding weekend. We can't wait
                to celebrate with you!
            </span>
        ),
    },
    [LANGUAGE.PT]: {
        Heading: () => <>Programa&ccedil;&atilde;o</>,
        SubHeading: () => (
            <span>
                Aqui está o cronograma para o fim de semana do casamento. Estamos muito felizes em poder comemorar com vocês! 
            </span>
        ),
    },
}
