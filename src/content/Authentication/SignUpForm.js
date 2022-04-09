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
        SubmitButton: () => <>Sign Up</>,
        SubmitButtonLoading: () => <>Signing Up...</>,
        HaveAccountPrompt: () => (
            <>
                Already have an account? <Link to="/auth">Sign in here.</Link>
            </>
        ),
    },
    [LANGUAGE.PT]: {
        Header: () => <>Per favor, registreu-vos</>,
        namePlaceholder: "Nom",
        NameHelp: () => (
            <>Please enter your full name, this will appear on the table placecards.</>
        ),
        emailPlaceholder: "Email",
        EmailHelp: () => (
            <>Registreu-vos amb el mateix email on heu rebut la reserve a data.</>
        ),
        passwordPlaceholder: "Contrasenya",
        SubmitButton: () => <>Registreu-vos</>,
        SubmitButtonLoading: () => <>Registrant-vos...</>,
        HaveAccountPrompt: () => (
            <>
                Ja teniu un compte?{" "}
                <Link to="/auth">Inicieu la sessió aquí.</Link>
            </>
        ),
    },
}
