import React from "react"
import Emoji from "react-emoji-render"
import Octicon, { MarkGithub } from "@primer/octicons-react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Content: () => (
            <>
                <p>
                    Contact us at{" "}
                    <a href="mailto:elizabethrenee.livingston@gmail.com">
                    elizabethrenee.livingston@gmail.com
                    </a>
                    .
                </p>
                <p>
                    <Emoji text="Made with 💚 in Ann Arbor by Liz and Christian." />
                </p>
                <p>
                    <a
                        href="https://github.com/lizliv/wedding-website"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Source code
                    </a>{" "}
                    available on <Octicon icon={MarkGithub} size={11} />
                </p>
            </>
        ),
    },
    [LANGUAGE.PT]: {
        Content: () => (
            <>
                <p>
                    Contacteu-nos a{" "}
                    <a href="mailto:hola@elizabethrenee.livingston@gmail.com">
                    elizabethrenee.livingston@gmail.com
                    </a>
                    .
                </p>
                <p>
                    <Emoji text="Faz com 💚 no Ann Arbor per Liz e Christian." />
                </p>
                <p>
                    <a
                        href="https://github.com/lizliv/wedding-website"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Codi font
                    </a>{" "}
                    disponible a <Octicon icon={MarkGithub} size={11} />
                </p>
            </>
        ),
    },
}
