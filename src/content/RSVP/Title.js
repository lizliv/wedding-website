import React from "react"
import { Link } from "react-router-dom"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>RSVP</>,
        SubHeadingAuthenticated: ({ user }) => (
            <span>
                Hi <strong>{user.name}</strong>! We can't wait to see you in
                Chicago! Use the form below to manage your RSVP.
            </span>
        ),
        SubHeading: () => (
            <span>
                <Link to="/auth">Sign in</Link> to manage your RSVP. Don't have
                an account? <Link to="/auth/signup">Sign up</Link> now!
            </span>
        ),
    },
    [LANGUAGE.PT]: {
        Heading: () => <>Confirme sua Presen&ccedil;a</>,
        SubHeadingAuthenticated: ({ user }) => (
            <span>
                Bem Vindo {user.name}! Estamos muito felizes de compartilhar esse momento especial com nossas familias e amigos! Use o formulário abaixo para gerenciar sua presen&ccedil;a.
            </span>
        ),
        SubHeading: () => (
            <span>
                <Link to="/auth">Login</Link> para confirmar sua presen&ccedil;a. N&atilde;o tem uma conta?{" "}
                <Link to="/auth/signup">Registre-se</Link>!
            </span>
        ),
    },
}
