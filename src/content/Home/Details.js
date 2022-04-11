import React from "react"

import { LANGUAGE } from "actions/constants"

const hashtag = "LIVINGlikeaREI"

export default {
    [LANGUAGE.EN]: {
        Title: () => <span>Christian and Liz are getting married!</span>,
        RSVPText: () => <>RSVP Here</>,
        RSVPTextHelpPre: () => <>Please&nbsp;</>,
        RSVPTextHelpPost: () => <>&nbsp;&nbsp;by May 6th</>,
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
        Title: () => <span>Christian e Liz v&atilde;o casar!</span>,
        RSVPText: () => <>RSVP Aqui</>,
        RSVPTextHelpPre: () => <>Por favor&nbsp;</>,
        RSVPTextHelpPost: () => <>&nbsp;&nbsp;até 6 de maio</>,
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
