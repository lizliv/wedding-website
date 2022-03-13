import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        schedule: () => <span>Schedule</span>,
        travel: () => <span>Travel</span>,
        thingsToDo: () => <span>Things to Do</span>,
        faq: () => <span>FAQs</span>,
        registry: () => <span>Registry</span>,
        rsvp: () => <span>RSVP</span>,
        signOut: () => <span>Sign Out</span>,
        signIn: () => <span>Sign In</span>,
        manageRsvp: () => <span>Manage RSVP</span>,
    },
    [LANGUAGE.PT]: {
        schedule: () => <span>Programa&ccedil;&atilde;o</span>,
        travel: () => <span>Como Chegar</span>,
        thingsToDo: () => <span>O Que Fazer</span>,
        faq: () => <span>FAQ</span>,
        registry: () => <span>Lista de presentes</span>,
        rsvp: () => <span>RSVP</span>,
        signOut: () => <span>Logout</span>,
        signIn: () => <span>Login</span>,
        manageRsvp: () => <span>Gerir RSVP</span>,
    },
}
