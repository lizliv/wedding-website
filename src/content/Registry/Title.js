import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Registry</>,
        SubHeading: () => (
            <span>
                Your presence is more than enough and we're not expecting any gifts. But, if you wish to contribute to our married life, our registry is linked below.
            </span>
        ),
    },
    [LANGUAGE.PT]: {
        Heading: () => <>Lista de presentes</>,
        SubHeading: () => (
            <span>
                Sua presença é mais que suficiente e não estamos esperando nenhum presente. Mas, se você deseja contribuir com nossa vida de casado, nosso registro está linkado abaixo. 
            </span>
        ),
    },
}
