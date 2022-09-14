import React from "react"

import { LANGUAGE } from "actions/constants"

// import ceremonyImg from "photos/scheduleImages/honeycomb.jpg"
// import receptionImg from "photos/scheduleImages/cafebrauer.jpg"
import brazilImg from "photos/scheduleImages/brazil.jpg"
import marcoLuigiImg from "photos/scheduleImages/marcoluigi.jpg"

export default {
    [LANGUAGE.EN]: [
        {
            LocationImage: marcoLuigiImg,
            Title: () => <>Reception</>,
            Date: () => <>Saturday, December 17th, 2022</>,
            Time: () => <>5:30 pm-11:30 pm</>,
            Location: () => <>Centro de Eventos Marco Luigi</>,
            locationLink: "https://www.marcoluigi.com.br/",
            Address: () => (
                <>
                    <p>RS-444, 12 - Vale dos Vinhedos</p>
                    <p>Bento Gonçalves - RS</p>
                    <p>95700-000, Brazil</p> 
                </>
            ),
            mapLink:
                "https://goo.gl/maps/PfRi5ijKLP6zN5yz9",
            Details: () => (
                <>
                    <p>
                        The party continues! To make sure Christian can celebrate this momentous occasion with his entire family, we will be holding a second reception in Rio Grande do Sul, Brazil!
                    </p>
                </>
            ),
        },
    ],
    [LANGUAGE.PT]: [
        {
            LocationImage: marcoLuigiImg,
            Title: () => <>Recep&ccedil;&atilde;o</>,
            Date: () => <>Sabado, 17 de Dezembro, 2022</>,
            Time: () => <>17:30-23:00 </>,
            Location: () => <>Centro de Eventos Marco Luigi</>,
            locationLink: "https://www.marcoluigi.com.br/",
            Address: () => (
                <>
                <p>RS-444, 12 - Vale dos Vinhedos</p>
                <p>Bento Gonçalves - RS</p>
                <p>95700-000, Brazil</p> 
                </>
            ),
            mapLink: "https://goo.gl/maps/PfRi5ijKLP6zN5yz9",
            Details: () => (
                <>
                    <p>
                        O festa continua! Para que Christian possa celebrar esta ocasião memorável com toda sua família, realizaremos uma segunda recepção no Rio Grande do Sul, Brasil!
                    </p>
                </>
            ),
        },
    ],
}
