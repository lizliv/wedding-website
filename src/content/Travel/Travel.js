import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: [
        {
            Type: () => <>Getting to Chicago</>,
            Details: () => (
                <>
                    <p>
                        You can fly into either O'Hare International (ORD) or Midway (MDW). The "L" (Chicago's train system) runs directly from both airports to downtown. You can also rent a car from the airport if you prefer.
                    </p>
                </>
            ),
            link: null,
        },
        {
            Type: () => <>Lodging - Main Block</>,
            Title: () => <>The Westin Michigan Ave</>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>
                        We have reserved a block at the Westin for a fixed rate of $259/night plus tax. This rate is for Friday June 10th until Monday June 13th. 
                        {/* If you find an alternative option, make sure it is nearby if you would like to take the shuttle. */}
                    </p>
                    <p>The last day to book is May 20th, 2022.</p>
                </>
            ),
            link: "https://www.marriott.com/events/start.mi?id=1645112218819&key=GRP",
        },
        {
            Type: () => <>Lodging - Option 2</>,
            Title: () => <>The Whitehall</>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>
                        There is a code for 15% off at the Whitehall hotel. Note: as of April 10th, this option is more expensive (on average) than the main block at the Westin.
                    </p>
                    <p> 
                        Use the link below and select "Add Code". Change the dropdown from "Corporate/Promotion Code" to "Discount Code" and then enter "Wedding Rate" in the box below.
                    </p>
                </>
            ),
            link: "https://bookings.travelclick.com/106339?RatePlanId=5304175#/guestsandrooms",
        },
        {
            Type: () => <>Lodging - Option 3</>,
            Title: () => <>The Four Seasons</>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>
                        We have a block at the Four Seasons hotel as well. Link to follow. 
                        {/* If you find an alternative option, make sure it is nearby if you would like to take the shuttle. */}
                    </p>
                </>
            ),
            // link: "https://www.marriott.com/events/start.mi?id=1645112218819&key=GRP",
        },
        // {
        //     Type: () => <>Shuttle</>,
        //     Title: () => <>The Westin Michigan Ave</>,
        //     Address: null,
        //     Phone: null,
        //     Details: () => (
        //         <>
        //             <p>
        //                 We will provide shuttle transportation from The Westin to Cafe Brauer.
        //             </p>
        //         </>
        //     ),
        //     link: null,
        // },
    ],
    [LANGUAGE.PT]: [
        {
            Type: () => <>Como Chegar em Chicago</>,
            Details: () => (
                <>
                    <p>
                        {/* Voc&ecirc; pode voar para ambos aeroportos O'Hare International (ORD) o Midway (MDW).  */}
                        {/* Para chegar ao centro da cidade, pode se usar o metrô Linha ….  */}
                        
                        Para que chega de avião, poderá pousar tanto no aeroporto O'Hare International (ORD), como Midway (MDW). O "L" (o metro de Chicago) vai direto dos aerportos para o centro. Voc&ecirc; tambem pode alugar um carro no aeroporto ou utilizar um Táxi, Uber ou Lift.
                    </p>
                </>
            ),
            link: null,
        },
        {
            Type: () => <>Hotel - Primeiro Bloco</>,
            Title: () => <>The Westin Michigan Ave</>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>
                        Reservamos um bloco no Westin por $259/noite + taxas. Esta taxa é para sexta-feira 10 de junho até segunda-feira 13 de junho. 
                        {/* Existem opções mais em conta proximas ao Westin". */}
                    </p>
                    <p>O ultmo dia para fazer a reserva &eacute; 20 de Maio, 2022.</p>
                </>
            ),
            link: "https://www.marriott.com/events/start.mi?id=1645112218819&key=GRP",
        },
        {
            Type: () => <>Hotel - Op&ccedil;&atilde;o 2</>,
            Title: () => <>The Whitehall</>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>
                        Temos uma oferta de 15% de desconto no Hotel Whitehall, use o cod&iacute;go "Wedding Rate" (aperte "Add Code" e selecione "Discount Code"). O Whitehall &eacute; com o desconto &eacute; mais barato que o Westin, mas o desconto s&oacute; pode ser aplicado para a noite de 12 de Junho.
                    </p>
                </>
            ),
            link: "https://bookings.travelclick.com/106339?RatePlanId=5304175#/guestsandrooms",
        },
        {
            Type: () => <>Hotel - Op&ccedil;&atilde;o 3</>,
            Title: () => <>The Four Seasons</>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>
                        Teremos um bloco no Four Seasons tambem. Informa&ccedil;&otilde;es brevemente. 
                        {/* If you find an alternative option, make sure it is nearby if you would like to take the shuttle. */}
                    </p>
                </>
            ),
            // link: "https://www.marriott.com/events/start.mi?id=1645112218819&key=GRP",
        },
        // {
        //     Type: () => <>Transporte</>,
        //     Title: () => <>The Westin Michigan Ave</>,
        //     Address: null,
        //     Phone: null,
        //     Details: () => (
        //         <>
        //             <p>
        //                 Transporte será oferecido do Westin ao Cafe Brauer.
        //             </p>
        //         </>
        //     ),
        //     link: null,
        // },
    ],
}
