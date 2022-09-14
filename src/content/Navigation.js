import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        schedule: () => <span>Schedule</span>,
        scheduleBrazil: () => <span>Schedule - Brazil</span>,
        travel: () => <span>Travel</span>,
        travelBrazil: () => <span>Travel - Brazil</span>,
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
        scheduleBrazil: () => <span>Programa&ccedil;&atilde;o - Brasil</span>,
        travel: () => <span>Como Chegar</span>,
        travelBrazil: () => <span>Como Chegar - Brasil</span>,
        thingsToDo: () => <span>O Que Fazer</span>,
        faq: () => <span>FAQ</span>,
        registry: () => <span>Lista de presentes</span>,
        rsvp: () => <span>RSVP</span>,
        signOut: () => <span>Logout</span>,
        signIn: () => <span>Login</span>,
        manageRsvp: () => <span>Gerenciar RSVP</span>,
    },
}
