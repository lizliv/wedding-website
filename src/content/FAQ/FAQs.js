import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: [
        {
            Question: () => <>Is there a bus to and from the wedding site?</>,
            Answer: () => (
                <>
                    We will update this answer soon.
                    {/* Yes, because we want you to be able to party your face off.
                    There will be buses from the Westin to Cafe Brauer.
                    See the schedule for more details. */}
                </>
            ),
        },
        {
            Question: () => <>What is the dress code?</>,
            Answer: () => (
                <>
                    The wedding will be formal. We recommend long or elegant
                    cocktail dresses for ladies and suits for gents. White is
                    reserved for the bride.
                </>
            ),
        },
        {
            Question: () => <>What is the weather like?</>,
            Answer: () => (
                <>
                    The weather during this time of year is usually sunny and in
                    the 70s during the day and 60s at night (ºF).
                </>
            ),
        },
    ],
    [LANGUAGE.PT]: [
        {
            Question: () => (
                <>
                    Haverá transporte do hotel para o casamento?
                </>
            ),
            Answer: () => (
                <>
                    Atualizaremos esta resposta em breve. 
                    {/* Sim, por que queremos todos festejando at&eacute; cair. 
                    Teremos um onibus do Westin para o Caf&eacute; Brauer e vice versa.
                    Os horarios v&atilde;o ser postados no futuro. */}

                </>
            ),
        },
        {
            Question: () => <>Qual é o dress code?</>,
            Answer: () => (
                <>
                    O casamento sera traje social completo. Recomendamos vestidos longos ou de tipo "cocktail" para as Mulheres, e palet&oacute;s para os Homens. O unico vestido branco pertence a noiva.
                </>
            ),
        },
        {
            Question: () => <>Devo levar casacos?</>,
            Answer: () => (
                <>
                    Junho &eacute; ver&atilde;o nos Estados Unidos. Em Chicago, as temperaturas giram em torno de 26ºC durante o dia e 18ºC durante a noite!
                </>
            ),
        },
    ],
}
