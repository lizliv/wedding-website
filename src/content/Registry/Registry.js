import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Title: () => <>Notes about our registry:</>,
        Details: () => (<><p>If you would like to contribute to a "cash fund" or an "experience" on our Zola registry, there is a 2.5% credit card fee. From our testing, even if you select an alternative option at checkout, the "Handling Fee" will still be charged.</p>
        <p>You can also contribute cash funds via check or Zelle (elizabethrenee.livingston@gmail.com)</p></>),
        RegistryLink: "https://www.zola.com/registry/christianandliz2022",
        RegistryKey: "christianandliz2022"
    },
    [LANGUAGE.PT]: {
        Title: () => <>Lista de presentes</>,
        Details: () => (<><p>If you would like to contribute to a "cash fund" or an "experience" on our Zola registry, there is a 2.5% credit card fee. From our testing, even if you select an alternative option at checkout, the "Handling Fee" will still be charged.</p>
        <p>You can also contribute cash funds via check or Zelle (elizabethrenee.livingston@gmail.com)</p></>),
        RegistryLink: "https://www.zola.com/registry/christianandliz2022",
        RegistryKey: "christianandliz2022"
    },
}
