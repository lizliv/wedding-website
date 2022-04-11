import React from "react"
import { Link } from "react-router-dom"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Header: () => <>Please Sign In</>,
        SubmitButton: () => <>Sign In</>,
        SubmitButtonLoading: () => <>Signing In...</>,
        NoAccountPrompt: () => (
            <>
                Don't have an account?{" "}
                <Link to="/auth/signup">Sign up here.</Link>
            </>
        ),
        ForgotPasswordPrompt: () => (
            <>
                Forgot your password?{" "}
                <Link to="/auth/passwordreset">Reset Password.</Link>
            </>
        ),
        emailPlaceholder: "Email",
        passwordPlaceholder: "Password",
    },
    [LANGUAGE.PT]: {
        Header: () => <>Por favor, fa&ccedil;a o Login</>,
        SubmitButton: () => <>Login</>,
        SubmitButtonLoading: () => <>Iniciando a sess&atilde;o</>,
        NoAccountPrompt: () => (
            <>
                N&atilde;o tem uma conta?{" "}
                <Link to="/auth/signup">Registre-se aquí.</Link>
            </>
        ),
        ForgotPasswordPrompt: () => (
            <>
                Esqueceu a senha?{" "}
                <Link to="/auth/passwordreset">Redefinir Senha.</Link>
            </>
        ),
        emailPlaceholder: "Email",
        passwordPlaceholder: "Senha",
    },
}
