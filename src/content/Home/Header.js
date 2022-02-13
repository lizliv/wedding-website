import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: () => <span>We&apos;re getting married!</span>,
    [LANGUAGE.PT]: () => <span>Nós vamos nos casar!</span>,
}
