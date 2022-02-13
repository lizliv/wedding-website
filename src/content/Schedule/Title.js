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
        Heading: () => <>Cronograma</>,
        SubHeading: () => (
            <span>
                Aqui está o que esperar durante o nosso fim de semana de casamento. Nós não podemos esperar para comemorar com você! 
            </span>
        ),
    },
}
