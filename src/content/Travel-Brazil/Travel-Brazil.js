import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        mapLink: "https://www.google.com/maps/d/u/2/embed?mid=17F7Ayiso5O3yhv2wBEziSXME6TAr8jwE&ehbc=2E312F",
        travelItems: [
        {
            Type: () => <>Getting There</>,
            Details: () => (
                <>
                    <p>
                        You can fly into Porto Allegre. You then rent a car from the airport.
                    </p>
                </>
            ),
            link: null,
        },
        {
            Type: () => <>Lodging - Option 1</>,
            Title: () => <>Spa do Vinho</>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>
                        Contact over email: reservas@spadovinho.com.br or comercial.agente@spadovinho.com.br
                        Contact over Whatsapp:
                        <ul>
                            <li>Daniele - +55 54 98143-1611</li>
                            <li>Taciani - +55 54 99705-0962</li>
                            <li>Aline - +55 54 98150-2904</li>
                            <li>Kalil - +55 54 99233-2746</li>
                        </ul>
                        {/* If you find an alternative option, make sure it is nearby if you would like to take the shuttle. */}
                    </p>
                    <p>Make sure to put down "Casamento Christian e Liz" in the details of your reservation.</p>
                </>
            ),
            link: "https://spadovinho.com.br/",
        },
        {
            Type: () => <>Lodging - Option 2</>,
            Title: () => <>Laghetto Hotel</>,
            Address: null,
            Phone: null,
            Details: () => (
                <>
                    <p>
                        Contact: Daniela Bressiani - +55 (54) 99921-8274

                    </p>
                    <p>
                        Mas reforçar que a reserva deve ser feita atraves do contato da Dani para conseguir as melhores tarifas
                    </p>
                    <p>
                        Para nosso casamento temos uma assessoria especial para  hospedagem, segue abaixo o contato
                    </p>
                </>
            ),
            link: "https://laghettohoteis.com.br/hotel/viverone-estacao/",
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
            Title: () => <>Jane Beauty</>,
            Address: () => null,
            Phone: () => null,
            Details: () => (
                <>
                    <p>Contact - +55 (54) 8124-9534</p>
                </>
            ),
            link: "https://www.instagram.com/janebeautycentroestetico/",
        },
        {
            Type: () => <>Salon Services - 2</>,
            Title: () => <>My Hollywood Beleza Estetica</>,
            Address: () => null,
            Phone: () => null,
            Details: () => (
                <>
                    <p>Contact - +55 (54) 9118-6307</p>
                </>
            ),
            link: "https://www.instagram.com/myhollywoodbelezaeestetica/",
        },
        {
            Type: () => <>Salon Services - 3</>,
            Title: () => <>La Casa Beleza</>,
            Address: () => null,
            Phone: () => null,
            Details: () => (
                <>
                    <p>Contact - +55 (54) 9147-5216</p>
                </>
            ),
            link: "https://www.instagram.com/lacasabelezabg/ ",
        },
    ],
},
    [LANGUAGE.PT]: {
        mapLink: "https://www.google.com/maps/d/u/2/embed?mid=17F7Ayiso5O3yhv2wBEziSXME6TAr8jwE&ehbc=2E312F",
        travelItems: [
            {
                Type: () => <>Getting There</>,
                Details: () => (
                    <>
                        <p>
                            You can fly into Porto Allegre. You then rent a car from the airport.
                        </p>
                    </>
                ),
                link: null,
            },
            {
                Type: () => <>Lodging - Option 1</>,
                Title: () => <>Spa do Vinho</>,
                Address: null,
                Phone: null,
                Details: () => (
                    <>
                        <p>
                            Contact over email: reservas@spadovinho.com.br or comercial.agente@spadovinho.com.br
                            Contact over Whatsapp:
                            <ul>
                                <li>Daniele - +55 54 98143-1611</li>
                                <li>Taciani - +55 54 99705-0962</li>
                                <li>Aline - +55 54 98150-2904</li>
                                <li>Kalil - +55 54 99233-2746</li>
                            </ul>
                            {/* If you find an alternative option, make sure it is nearby if you would like to take the shuttle. */}
                        </p>
                        <p>Make sure to put down "Casamento Christian e Liz" in the details of your reservation.</p>
                    </>
                ),
                link: "https://spadovinho.com.br/",
            },
            {
                Type: () => <>Lodging - Option 2</>,
                Title: () => <>Laghetto Hotel</>,
                Address: null,
                Phone: null,
                Details: () => (
                    <>
                        <p>
                            Contact: Daniela Bressiani - +55 (54) 99921-8274
    
                        </p>
                        <p>
                            Mas reforçar que a reserva deve ser feita atraves do contato da Dani para conseguir as melhores tarifas
                        </p>
                        <p>
                            Para nosso casamento temos uma assessoria especial para  hospedagem, segue abaixo o contato
                        </p>
                    </>
                ),
                link: "https://laghettohoteis.com.br/hotel/viverone-estacao/",
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
                Title: () => <>Jane Beauty</>,
                Address: () => null,
                Phone: () => null,
                Details: () => (
                    <>
                        <p>Contact - +55 (54) 8124-9534</p>
                    </>
                ),
                link: "https://www.instagram.com/janebeautycentroestetico/",
            },
            {
                Type: () => <>Salon Services - 2</>,
                Title: () => <>My Hollywood Beleza Estetica</>,
                Address: () => null,
                Phone: () => null,
                Details: () => (
                    <>
                        <p>Contact - +55 (54) 9118-6307</p>
                    </>
                ),
                link: "https://www.instagram.com/myhollywoodbelezaeestetica/",
            },
            {
                Type: () => <>Salon Services - 3</>,
                Title: () => <>La Casa Beleza</>,
                Address: () => null,
                Phone: () => null,
                Details: () => (
                    <>
                        <p>Contact - +55 (54) 9147-5216</p>
                    </>
                ),
                link: "https://www.instagram.com/lacasabelezabg/ ",
            },
    ],
},
}
