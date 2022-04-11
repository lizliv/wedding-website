import React, { useContext } from "react"
import Container from "react-bootstrap/Container"
import { Route, Switch, Redirect } from "react-router-dom"
import classNames from "classnames"

import { SignInForm, SignUpForm, PasswordResetForm } from "./Forms"
import { Store } from "store"

import styles from "./Authentication.module.scss"

function Authentication({ location }) {
    const { state } = useContext(Store)

    const {
        app: {
            user: { isAuthenticated },
        },
    } = state

    if (isAuthenticated) {
        return <Redirect to={{ pathname: "/", state: { from: location } }} />
    }

    return (
        <Container
            className={classNames(
                "d-flex",
                "flex-column",
                "justify-content-center",
                "h-100",
                styles.container
            )}
        >
            <div>
                <div className="text-center">
                    <h1 className={classNames("mb-4")}>C & L</h1>
                </div>
                <Switch>
                    <Route exact path={"/auth"} component={SignInForm} />
                    <Route exact path={"/auth/signup"} component={SignUpForm} />
                    <Route exact path={"/auth/passwordreset"} component={PasswordResetForm} />
                </Switch>
            </div>
        </Container>
    )
}

export default Authentication
