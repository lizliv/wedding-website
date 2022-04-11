import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: [
        {
            Question: () => <>What precautions will be taken for COVID?</>,
            Answer: () => (
                <>
                    <p>We will follow all local guidelines with respect to the COVID 19 pandemic.</p>
                    <p>We also ask that all of our guests are fully vaccinated.</p> 
                </>
            ),
        },
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
                    The wedding will be formal. We recommend long or elegant cocktail dresses or suits. 
                    
                    As always, white is reserved for the bride.
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
        {
            Question: () => <>Sunday? Why?</>,
            Answer: () => (
                <>
                    As most of you know, Liz is Jewish. We will be having a traditional Jewish wedding officiated by a reconstructionist Rabbi. Jewish weddings cannot happen from sunset Friday night to sunset Saturday because it is Shabbat (the day of rest). We know this makes travel more difficult, but we hope you'll be able to join us!
                </>
            ),
        },
        {
            Question: () => <>Jewish wedding, what does that mean?</>,
            Answer: () => (
                <>
                    <p>There are a few traditional Jewish elements that we plan to incorporate in our ceremony. First, there is a wedding contract called a <b>Ketubah</b>, this is signed before the ceremony begins and outlines the grooms responsibilities to the bride. The <b>Bedeken</b> also occurs before the ceremony where the groom lifts the veil to see the brides face. This tradition stems from the Bible story where Jacob was tricked into marrying Leah, the sister of the woman he loved, Rachel.</p>
                    
                    <p>There are a few other unique traditions, but for now, we will skip to the end of the ceremony where the groom <b>breaks a glass</b>. This tradition has a couple of different symbolic meanings, but mostly we just want to stomp on a glass!</p>

                    <p>Finally, during the reception there is a celebratory dance called the <b>hora</b>. During this dance, the bride and groom are lifted onto chairs while holding a cloth such as a napkin in between them. There are many aspects to a Jewish wedding that were not listed here, we will not include all traditional aspects, but you can read a nice summary <a href="https://www.brides.com/jewish-wedding-traditions-4783360" target="_blank" rel="noopener noreferrer">here</a></p>
                </>
            ),
        },
    ],
    [LANGUAGE.PT]: [
        {
            Question: () => <>Informações COVID?</>,
            Answer: () => (
                <>
                    <p>Seguiremos todas as orientações locais em relação à pandemia do COVID 19.</p>
                    <p>We also ask that all of our guests are fully vaccinated.</p> 
                </>
            ),
        },
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
                    O casamento sera traje social completo. Recomendamos vestidos longos ou de tipo "cocktail" e palet&oacute;s. O unico vestido branco pertence a noiva.
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
        {
            Question: () => <>Domingo? Por quê?</>,
            Answer: () => (
                <>
                    As most of you know, Liz is Jewish. We will be having a traditional Jewish wedding officiated by a reconstructionist Rabbi. Jewish weddings cannot happen from sunset Friday night to sunset Saturday because it is Shabbat (the day of rest). We know this makes travel more difficult, but we hope you'll be able to join us!
                </>
            ),
        },
        {
            Question: () => <>Casamento judaico, o que isso significa?</>,
            Answer: () => (
                <>
                    <p>There are a few traditional Jewish elements that we plan to incorporate in our ceremony. First, there is a wedding contract called a <b>Ketubah</b>, this is signed before the ceremony begins and outlines the grooms responsibilities to the bride. The <b>Bedeken</b> also occurs before the ceremony where the groom lifts the veil to see the brides face. This tradition stems from the Bible story where Jacob was tricked into marrying Leah, the sister of the woman he loved, Rachel.</p>
                    
                    <p>There are a few other unique traditions, but for now, we will skip to the end of the ceremony where the groom <b>breaks a glass</b>. This tradition has a couple of different symbolic meanings, but mostly we just want to stomp on a glass!</p>

                    <p>Finally, during the reception there is a celebratory dance called the <b>hora</b>. During this dance, the bride and groom are lifted onto chairs while holding a cloth such as a napkin in between them. There are many aspects to a Jewish wedding that were not listed here, we will not include all traditional aspects, but you can read a nice summary <a href="https://www.brides.com/jewish-wedding-traditions-4783360" target="_blank" rel="noopener noreferrer">here</a></p>
                </>
            ),
        },
    ],
}
