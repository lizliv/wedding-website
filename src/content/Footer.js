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
                    <a href="mailto:lizandchristian2022@gmail.com">
                    lizandchristian2022@gmail.com
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
                    Contato: {" "}
                    <a href="mailto:hola@lizandchristian2022@gmail.com">
                    lizandchristian2022@gmail.com
                    </a>
                    .
                </p>
                <p>
                    <Emoji text="Feito com 💚 em Ann Arbor pela Liz e Christian." />
                </p>
                <p>
                    <a
                        href="https://github.com/lizliv/wedding-website"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        C&oacute;digo fonte
                    </a>{" "}
                    acessi&iacute;vel a <Octicon icon={MarkGithub} size={11} />
                </p>
            </>
        ),
    },
}
