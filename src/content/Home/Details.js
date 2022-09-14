import React from "react"

import { LANGUAGE } from "actions/constants"

const hashtag = "LIVINGlikeaREI"

export default {
    [LANGUAGE.EN]: {
        Title: () => <span>Christian and Liz are <del>getting</del> married!</span>,
        WeddingUSTitle: () => <span>US Wedding Info:</span>,
        WeddingBrazilTitle: () => <span>Brazil Wedding Info:</span>,
        DateBrazil: () => (
            <div className="d-flex flex-column">
                <div>December 17th, 2022</div>
            </div>
        ),
        LocationBrazil: () => <span>Centro de Eventos Marco Luigi, Bento Gonçalves - RS, BR</span>,
        locationBrazilLink: "https://goo.gl/maps/HVduvvurai3hWaeg9",
        RSVPText: () => <>RSVP Here</>,
        RSVPTextHelpPre: () => <>Please&nbsp;</>,
        RSVPTextHelpPost: () => <>&nbsp;&nbsp;by May 6th</>,
        COVIDText: () => <><p>Please check the <a href="#FAQ">FAQ</a> page for our COVID policy.</p></>,
        Date: () => (
            <div className="d-flex flex-column">
                <div>June 12th, 2022</div>
            </div>
        ),
        Location: () => <span>Caf&eacute; Brauer, Chicago, IL, USA</span>,
        locationLink: "https://goo.gl/maps/Ad5FzWZs14nSD9QT6",
        hashtag,
    },
    [LANGUAGE.PT]: {
        Title: () => <span>Christian e Liz <del>v&atilde;o casar</del> est&atilde;o casados!</span>,
        WeddingUSTitle: () => <span>Informac&atilde;o do casamento em US:</span>,
        WeddingBrazilTitle: () => <span>Informac&atilde;o do casamento em Brasil:</span>,
        DateBrazil: () => (
            <div className="d-flex flex-column">
                <div>17 de Dezembro, 2022</div>
            </div>
        ),
        LocationBrazil: () => <span>Centro de Eventos Marco Luigi, Bento Gonçalves - RS, BR</span>,
        locationBrazilLink: "https://goo.gl/maps/HVduvvurai3hWaeg9",
        RSVPText: () => <>RSVP Aqui</>,
        RSVPTextHelpPre: () => <>Por favor&nbsp;</>,
        RSVPTextHelpPost: () => <>&nbsp;&nbsp;até 6 de maio</>,
        COVIDText: () => <><p>Por favor, verifique a página <a href="#FAQ">FAQ</a> para nossa política de COVID.</p></>,
        Date: () => (
            <div className="d-flex flex-column">
                <div>12 de Junho, 2022</div>
            </div>
        ),
        Location: () => <span>Caf&eacute; Brauer, Chicago, IL, USA</span>,
        locationLink: "https://goo.gl/maps/Ad5FzWZs14nSD9QT6",
        hashtag,
    },
}
