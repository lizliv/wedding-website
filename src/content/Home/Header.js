import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: () => <span>We&apos;re <del>getting</del> married!</span>,
    [LANGUAGE.PT]: () => <span>Nós <del>vamos</del> est&atilde;o casados!!</span>,
}
