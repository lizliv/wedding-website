import React, { useEffect, useContext } from "react"
import { useCookies } from "react-cookie"
import ReactDOM from "react-dom"
import { HashRouter, Route, Switch } from "react-router-dom"
import { CookiesProvider } from "react-cookie"
import get from "lodash/get"
import isNull from "lodash/isNull"

import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"

import { auth} from "./services";
import { useAuthState } from "react-firebase-hooks/auth";

import { Authentication } from "views/Authentication"
import { AppLayout } from "views/AppLayout"
import { initializeApp } from "actions"
import { LANGUAGE } from "actions/constants"

import { StoreProvider, Store } from "./store"
import * as serviceWorker from "./serviceWorker"

const App = () => {
    const { dispatch } = useContext(Store)
    const [user, loading, error] = useAuthState(auth);

    const [cookies, setCookie] = useCookies(["language"])
    const language = get(cookies, ["language"], null)

    useEffect(() => {
        initializeApp(dispatch,user)
        if (isNull(language)) {
            setCookie("language", LANGUAGE.EN, { path: "/" })
        }
    }, [dispatch, setCookie, language])

    return (
        <HashRouter>
            <Switch>
                <Route path={"/auth"} component={Authentication} />
                <Route component={AppLayout} />
            </Switch>
        </HashRouter>
    )
}

ReactDOM.render(
    <CookiesProvider>
        <StoreProvider>
            <App />
        </StoreProvider>
    </CookiesProvider>,
    document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
