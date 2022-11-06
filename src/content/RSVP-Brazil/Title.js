import React from "react"
import { Link } from "react-router-dom"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>RSVP</>,
        SubHeadingAuthenticated: ({ name }) => (
            <span>
                Hi <strong>{name}</strong>! We can't wait to see you in
                Chicago! Use the form below to manage your RSVP.
            </span>
        ),
        SubHeading: () => (
            <span>
                Use the form to find your RSVP
            </span>
        ),
        NameEnter: () => (
            <span>
                <p>Please enter the first and last name of one member of your party below.</p>
                
                <p>You can manage RSVPs for your party (i.e. family members) on the next page.</p>
            </span>
        ),
        NameExample: () => "Ex. Sarah Fortune (not The Fortune Family or Dr. & Mr. Fortune)",
        ButtonText: () => (
            <span>
                Continue
            </span>
        ),
    },
    [LANGUAGE.PT]: {
        Heading: () => <>Confirme sua Presen&ccedil;a</>,
        SubHeadingAuthenticated: ({ name }) => (
            <span>
                Bem Vindo {name}! Estamos muito felizes de compartilhar esse momento especial com nossas familias e amigos! Use o formulário abaixo para gerenciar sua presen&ccedil;a.
            </span>
        ),
        SubHeading: () => (
            <span>
                Use the form to find your RSVP
            </span>
        ),
        NameEnter: () => (
            <span>
                <p>Please enter the first and last name of one member of your party below.</p>
                
                <p>You can manage RSVPs for your party (i.e. family members) on the next page.</p>
            </span>
        ),
        NameExample: () => "Ex. Sarah Fortune (not The Fortune Family or Dr. & Mr. Fortune)",
        ButtonText: () => (
            <span>
                Continuar
            </span>
        ),
    },
}
