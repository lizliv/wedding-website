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
            Question: () => <>Do I have a plus one? What about my kids?</>,
            Answer: () => (
                <>
                    <p>If there is not a "Plus One" button on your RSVP form, and you think it is a mistake, please reach out to us.</p>
                    <p>We know that this is a destination wedding for many of our guests, however, we elected to make this event adult only. Please reach out to us if this is a significant issue for you.</p> 
                </>
            ),
        },
        {
            Question: () => <>Is there a bus to and from the wedding site?</>,
            Answer: () => (
                <>
                    Yes! There will be a shuttle from the Westin to Cafe Brauer. If you are not in our hotel block and would like to take the shuttle, please let us know.
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
                    As most of you know, Liz is Jewish. We will be having a Jewish wedding officiated by a reconstructionist Rabbi. Jewish weddings cannot happen from sunset Friday night to sunset Saturday because it is Shabbat (the day of rest). We know this makes travel more difficult, but we hope you'll be able to join us!
                </>
            ),
        },
        {
            Question: () => <>Jewish wedding, what does that mean?</>,
            Answer: () => (
                <>
                    <p>There are a few traditional Jewish elements that we plan to incorporate in our ceremony. The <b>Bedeken</b> occurs before the ceremony where the groom lifts the veil to see the brides face. This tradition stems from the Bible story where Jacob was tricked into marrying Leah, the sister of the woman he loved, Rachel. The wedding contract is called a <b>Ketubah</b>. This is signed before the ceremony begins and outlines the grooms responsibilities to the bride. </p>

                    <p>There are a few other unique traditions, but for now, we will skip to the end of the ceremony where the groom <b>breaks a glass</b>. This tradition has a couple of different symbolic meanings, but mostly we just want to stomp on a glass!</p>

                    <p>Finally, during the reception there is a celebratory dance called the <b>hora</b>. During this dance, the bride and groom are lifted onto chairs while holding a cloth such as a napkin in between them. There are many aspects to a Jewish wedding that were not listed here, we will not include all traditional aspects, but you can read a nice summary <a href="https://www.brides.com/jewish-wedding-traditions-4783360" target="_blank" rel="noopener noreferrer">here</a></p>
                </>
            ),
        },
    ],
    [LANGUAGE.PT]: [
        {
            Question: () => <>Que precauções serão tomadas para a COVID?</>,
            Answer: () => (
                <>
                    <p>Seguiremos todas as orientações locais em relação à pandemia do COVID 19.</p>
                    <p>Também pedimos que todos os nossos hóspedes sejam totalmente vacinados.</p>
                </>
            ),
        },
        {
            Question: () => <>Do I have a plus one? What about my kids?</>,
            Answer: () => (
                <>
                    <p>If there is not a "Plus One" button on your RSVP form, and you think it is a mistake, please reach out to us.</p>
                    <p>We know that this is a destination wedding for many of our guests, however, we elected to make this event adult only. Please reach out to us if this is a significant issue for you.</p> 
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
                    Sim, teremos um onibus do Westin para o Caf&eacute; Brauer e vice versa. If you are not in our hotel block and would like to take the shuttle, please let us know.
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
                    Como a maioria de vocês sabe, Liz é judia. Teremos um casamento judeu oficializado por uma rabina reconstrucionista. Os casamentos judeus não podem acontecer da sexta-feira à noite ao pôr-do-sol do sábado porque é o Shabbat (o dia de descanso). Sabemos que isto torna a viagem mais difícil, mas esperamos que você possa se juntar a nós!!
                </>
            ),
        },
        {
            Question: () => <>Casamento judaico, o que isso significa?</>,
            Answer: () => (
                <>
                    <p>Há alguns elementos judeus tradicionais que planejamos incorporar em nossa cerimônia. O <b>Bedeken</b> ocorre antes da cerimônia, onde o noivo levanta o véu para ver o rosto das noivas. Esta tradição vem da história bíblica em que Jacó foi enganado para casar-se com Leah, a irmã da mulher que ele amava, Rachel. O contrato de casamento é chamado de <b>Ketubah</b>. Isto é assinado antes do início da cerimônia e define as responsabilidades do marido para esposa.</p>

                    <p>Existem algumas outras tradições, mas por enquanto, vamos pular para o final da cerimônia onde o noivo <b> quebra um copo</b>. Esta tradição tem significados simbólicos diferentes, mas o Christian só quer pisar em um copo!</p>

                    <p>Finalmente, durante a recepção há uma dança comemorativa chamada <b>hora</b>. Durante esta dança, os noivos são levantados em cadeiras enquanto seguram um pano, entre eles. Há muitos aspectos de um casamento judeu que não foram listados aqui, mas você pode ler um bom resumo <a href="https://www.brides.com/jewish-wedding-traditions-4783360" target="_blank" rel="noopener noreferrer">aqui</a></p>
                </>
            ),
        },
    ],
}
