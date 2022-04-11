import React from "react"
import { Link } from "react-router-dom"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Header: () => <>Please Sign Up</>,
        namePlaceholder: "Name",
        NameHelp: () => (
            <>Please enter your full name, this will appear on the table placecards.</>
        ),
        emailPlaceholder: "Email",
        EmailHelp: () => (
            <>
                Register with the same email address that received the save the date.
            </>
        ),
        passwordPlaceholder: "Password",
        confirmPasswordPlaceholder: "Confirm Password",
        SubmitButton: () => <>Sign Up</>,
        SubmitButtonLoading: () => <>Signing Up...</>,
        HaveAccountPrompt: () => (
            <>
                Already have an account? <Link to="/auth">Sign in here.</Link>
            </>
        ),
    },
    [LANGUAGE.PT]: {
        Header: () => <>Por favor, registre-se</>,
        namePlaceholder: "Nome",
        NameHelp: () => (
            <>Por favor use o nome completo, sera inscrito no cart&atilde;o.</>
        ),
        emailPlaceholder: "Email",
        EmailHelp: () => (
            <>Registre-se usando o mesmo email que recebistes o "reserve a data"</>
        ),
        passwordPlaceholder: "Senha",
        confirmPasswordPlaceholder: "Confirme a Senha",
        SubmitButton: () => <>Registre-se</>,
        SubmitButtonLoading: () => <>Registrantando...</>,
        HaveAccountPrompt: () => (
            <>
                Ja tem uma conta?{" "}
                <Link to="/auth">Fa&ccedil;a o Login aquí.</Link>
            </>
        ),
    },
}
