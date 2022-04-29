import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        mapLink: "https://www.google.com/maps/d/u/2/embed?mid=17F7Ayiso5O3yhv2wBEziSXME6TAr8jwE&ehbc=2E312F",
        travelItems: [
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
                        We have reserved a block at the Westin for a fixed rate of <b>$259/night plus tax</b>. This rate is for Friday June 10th until Monday June 13th.
                        {/* If you find an alternative option, make sure it is nearby if you would like to take the shuttle. */}
                    </p>
                    <p>The last day to book is <b>May 20th, 2022</b>.</p>
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
                        We have a block at the Four Seasons hotel as well for <b>$495/night plus taxes</b>. Click on "Check Rates", enter the dates, number of rooms, and the promo code "220611GRE" (all caps, no spaces, please type it in do not copy/paste). 
                    </p>
                    <p>
                        The rate for a city view will appear. Click on "Select Room" and the option to select the <b>Livingston & Reichert Wedding Guestrooms</b> will appear. Follow the prompts to complete the reservation.
                    </p>
                    <p>
                        This rate is only available before <b>Friday, May 13, 2022, at 6:00pm CST</b>.
                    </p>
                </>
            ),
            link: "https://www.fourseasons.com/chicago/",
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
        {
            Type: () => <>Salon Services - 1</>,
            Title: () => <>Blowout Junkie - Huron St</>,
            Address: () => <>445 W Huron St, Chicago, IL 60654</>,
            Phone: () => <>+1(312)-929-2291</>,
            Details: () => (
                <>
                    <p>Open on Sundays and should have availability on our wedding day. The Huron location is about 1.5 miles away from the recommended hotels.</p>
                    <p>Full hair styling: $35-65</p>
                    <p>Full makeup: $80-100</p>
                </>
            ),
            link: "http://www.blowoutjunkie.com/",
        },
        {
            Type: () => <>Salon Services - 2</>,
            Title: () => <>Gold Plaited River North</>,
            Address: () => <>161 W Illinois St, Chicago, IL 60657</>,
            Phone: () => <>+1(312)-877-2380</>,
            Details: () => (
                <>
                    <p>Another location that is open on Sundays and should have availability on our wedding day. The River North location is also about 1.5 miles away from the recommended hotels.</p>
                    <p>Full hair styling: $65-80</p>
                    <p>Full makeup: $90-110</p>
                </>
            ),
            link: "http://www.goldplaited.com/",
        },
        {
            Type: () => <>Salon Services - 3</>,
            Title: () => <>Blowtique</>,
            Address: () => <>1 E Huron St, Chicago, IL 60611</>,
            Phone: () => <>+1(312)-280-2400</>,
            Details: () => (
                <>
                    <p>Another location that is open on Sundays and should have availability on our wedding day. This salon is closer, only about 0.5 miles away from the recommended hotels.</p>
                    <p>Full hair styling: $40-70</p>
                    <p>Full makeup: $75</p>
                </>
            ),
            link: "http://www.blowtique.com/",
        },
    ],
},
    [LANGUAGE.PT]: {
        mapLink: "https://www.google.com/maps/d/u/2/embed?mid=17F7Ayiso5O3yhv2wBEziSXME6TAr8jwE&ehbc=2E312F",
        travelItems: [
        {
            Type: () => <>Como Chegar em Chicago</>,
            Details: () => (
                <>
                    <p>
                        {/* Voc&ecirc; pode voar para ambos aeroportos O'Hare International (ORD) o Midway (MDW).  */}
                        {/* Para chegar ao centro da cidade, pode se usar o metrô Linha ….  */}

                        Para que chega de avião, poderá pousar tanto no aeroporto O'Hare International (ORD), como Midway (MDW). O "L" (o metro de Chicago) vai direto dos aeroportos para o centro. Voc&ecirc; tambem pode alugar um carro no aeroporto ou utilizar um Táxi, Uber ou Lift.
                    </p>
                </>
            ),
            link: null,
        },
        {
            Type: () => <>Hotel - Principal</>,
            Title: () => <>The Westin Michigan Ave</>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>
                        Reservamos um bloco no Westin por <b>$259/noite + taxas</b>. Esta pre&ccedil;o é para sexta-feira 10 de junho até segunda-feira 13 de junho.
                        {/* Existem opções mais em conta proximas ao Westin". */}
                    </p>
                    <p>O último dia para reservar é <b>20 de maio de 2022</b>.</p>
                </>
            ),
            link: "https://www.marriott.com/events/start.mi?id=1645112218819&key=GRP",
        },
        {
            Type: () => <>Hotel - 2° Op&ccedil;&atilde;o</>,
            Title: () => <>The Whitehall</>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>
                        Temos uma oferta de 15% de desconto no Hotel Whitehall. Neste momento (10 de abril) esta opção esta mais cara do que o Westin.
                    </p>
                    <p>
                        Use o link abaixo e selecione "Add Code". Mude a opção de "Corporate/Promotion Code" para "Discount Code" para usar o codigo "Wedding Rate".
                    </p>
                </>
            ),
            link: "https://bookings.travelclick.com/106339?RatePlanId=5304175#/guestsandrooms",
        },
        {
            Type: () => <>Hotel - 3° Op&ccedil;&atilde;o 3</>,
            Title: () => <>The Four Seasons</>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>
                        We have a block at the Four Seasons hotel as well for <b>$495/night plus taxes</b>. Click on "Check Rates", enter the dates, number of rooms, and the promo code "220611GRE" (all caps, no spaces, please type it in do not copy/paste). 
                    </p>
                    <p>
                        The rate for a city view will appear. Click on "Select Room" and the option to select the <b>Livingston & Reichert Wedding Guestrooms</b> will appear. Follow the prompts to complete the reservation.
                    </p>
                    <p>
                        This rate is only available before <b>Friday, May 13, 2022, at 6:00pm CST</b>.
                    </p>
                </>
            ),
            link: "https://www.fourseasons.com/chicago/",
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
        {
            Type: () => <>Salon Services - 1</>,
            Title: () => <>Blowout Junkie - Huron St</>,
            Address: () => <>445 W Huron St, Chicago, IL 60654</>,
            Phone: () => <>+1(312)-929-2291</>,
            Details: () => (
                <>
                    <p>Open on Sundays and should have availability on our wedding day. The Huron location is about 1.5 miles away from the recommended hotels.</p>
                    <p>Full hair styling: $35-65</p>
                    <p>Full makeup: $80-100</p>
                </>
            ),
            link: "http://www.blowoutjunkie.com/",
        },
        {
            Type: () => <>Salon Services - 2</>,
            Title: () => <>Gold Plaited River North</>,
            Address: () => <>161 W Illinois St, Chicago, IL 60657</>,
            Phone: () => <>+1(312)-877-2380</>,
            Details: () => (
                <>
                    <p>Another location that is open on Sundays and should have availability on our wedding day. The River North location is also about 1.5 miles away from the recommended hotels.</p>
                    <p>Full hair styling: $65-80</p>
                    <p>Full makeup: $90-110</p>
                </>
            ),
            link: "http://www.goldplaited.com/",
        },
        {
            Type: () => <>Salon Services - 3</>,
            Title: () => <>Blowtique</>,
            Address: () => <>1 E Huron St, Chicago, IL 60611</>,
            Phone: () => <>+1(312)-280-2400</>,
            Details: () => (
                <>
                    <p>Another location that is open on Sundays and should have availability on our wedding day. This salon is closer, only about 0.5 miles away from the recommended hotels.</p>
                    <p>Full hair styling: $40-70</p>
                    <p>Full makeup: $75</p>
                </>
            ),
            link: "http://www.blowtique.com/",
        },
    ],
},
}
