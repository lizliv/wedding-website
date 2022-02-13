import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: [
        {
            Title: () => <>Chicago Museum of Science and Industry</>,
            Details: () => (
                <>
                    <p>
                        One of our favorite museums in the city. 
                    </p>
                </>
            ),
            link:
                "https://www.msichicago.org/",
        },
    ],
    [LANGUAGE.PT]: [
        {
            Title: () => <>Chicago Museo de Science and Industry</>,
            Details: () => (
                <>
                    <p>
                        Christian vai traduzir em breve 
                    </p>
                </>
            ),
            link:
                "https://www.msichicago.org/",
        },
    ],
}
