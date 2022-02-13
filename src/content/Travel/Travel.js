import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: [
        {
            Type: () => <>Getting to Chicago</>,
            Details: () => (
                <>
                    <p>
                        You can fly into either O'Hare International (ORD) or Midway (MDW). The "L" (Chicago's train system) runs directly from the airport to downtown. You can also rent a car from the airport if you prefer.
                    </p>
                </>
            ),
            link: null,
        },
        {
            Type: () => <>Lodging for Wedding</>,
            Title: () => <>The Westin Michigan Ave</>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>
                        We have reserved a block at the Westin for a fixed rate of $259/night. If you find an alternative option, make sure it is nearby if you would like to take the shuttle.
                    </p>
                </>
            ),
            link: "https://www.marriott.com/en-us/hotels/chiwi-the-westin-michigan-avenue-chicago/overview/",
        },
        {
            Type: () => <>Shuttle</>,
            Title: () => <>The Westin Michigan Ave</>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>
                        We will provide shuttle transportation from The Westin to Cafe Brauer.
                    </p>
                </>
            ),
            link: null,
        },
    ],
    [LANGUAGE.PT]: [
        {
            Type: () => <>Como Chegar em Chicago</>,
            Details: () => (
                <>
                    <p>
                        Voc&ecirc; pode voar para ambos aeroportos O'Hare International (ORD) o Midway (MDW). O "L" (o metro de Chicago) vai direto dos aerportos para o centro. Voc&ecirc; tambem pode alugar um carro no aeroporto.
                    </p>
                </>
            ),
            link: null,
        },
        {
            Type: () => <>Hotel para o Casamento</>,
            Title: () => <>The Westin Michigan Ave</>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>
                        Reservamos um bloco no Westin por $259/noite. Existem op&ccedil;&otilde;es mais razoaveis proximas ao Westin.
                    </p>
                </>
            ),
            link: "https://www.marriott.com/en-us/hotels/chiwi-the-westin-michigan-avenue-chicago/overview/",
        },
        {
            Type: () => <>Transporte</>,
            Title: () => <>The Westin Michigan Ave</>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>
                        Trasporte sera provisionado do Westin para o Cafe Brauer.
                    </p>
                </>
            ),
            link: null,
        },
    ],
}
