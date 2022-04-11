import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Header: () => <>Password Reset</>,
        SubmitButton: () => <>Send Password Reset</>,
        SubmitButtonLoading: () => <>Sending...</>,
        emailPlaceholder: "Email",
        EmailLabel: () => <>Enter your email address to receive a password reset link:</>,
        EmailHelp: () => <>Note: the reset email will come from an email account like 'noreply@lizandchristian2022-XXXXX.firebaseapp.com'</>,
        AlertEmailSent: () => <>Password reset email sent!</>,
        NoAccountPrompt: () => <>Sorry, we can't find an account associated with that email address</>
    },
    [LANGUAGE.PT]: {
        Header: () => <>Redefinir Senha</>,
        SubmitButton: () => <>Mude a senha</>,
        SubmitButtonLoading: () => <>Atualizando...</>,
        EmailLabel: () => <>Increva o seu email para receber o link para redefinir a tua senha:</>,
        EmailHelp: () => <>Nota: o e-mail de mudar a senha virá de uma conta de e-mail como 'noreply@lizandchristian2022-XXXXX.firebaseapp.com'</>,
        emailPlaceholder: "Email",
        AlertEmailSent: () => <>Email enviado!</>,
        NoAccountPrompt: () => <>Desculpa, n&atilde;o achamos uma conta com este email.</>
    },
}
