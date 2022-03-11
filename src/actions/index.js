import get from "lodash/get"

import {
    signUpWithCognito,
    signInWithCognito,
    signOutWithCognito,
    currentAuthenticatedUserWithCognito,
    getItemFromDynamo,
    putItemToDynamo,
} from "services"

import {
    auth,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
    currentAuthenticatedUser,
  } from "services";

import { APP } from "./constants"

export const initializeApp = async dispatch => {

    const myUser = await currentAuthenticatedUser()

    if (myUser) {
        // const {
        //     attributes: { sub: username, name, email },
        // } = myUser

        const email = myUser.email

        dispatch({
            type: APP.SET.INITIALIZE_USER,
            payload: {
                // username,
                // name,
                email,
            },
        })
    }
}

export const signUp = async (
    { name, email, password },
    setSubmitting,
    setStatus,
    history,
    dispatch
) => {
    try {
        const { userSub: username } = await registerWithEmailAndPassword({
            username: name,
            email,
            password,
        })

        await logInWithEmailAndPassword(username, password)

        dispatch({
            type: APP.SET.USER_SIGN_IN,
            payload: {
                username,
                name,
                email,
            },
        })
    } catch (error) {
        const { message } = error
        setStatus(message)
        dispatch({
            type: APP.SET.USER_ERROR,
            payload: message,
        })
    }

    setSubmitting(false)
}

export const signIn = async (
    { email: providedEmail, password },
    setSubmitting,
    setStatus,
    history,
    dispatch
) => {
    try {
        const myUser = await logInWithEmailAndPassword(providedEmail, password)

        // const { 
        //     attributes: { sub: username, name, email }, 
        // } = myUser
        const email = myUser.email

        dispatch({
            type: APP.SET.USER_SIGN_IN,
            payload: {
                // username,
                // name,
                email,
            },
        })
    } catch (error) {
        let { message } = error

        setStatus(message)
        dispatch({
            type: APP.SET.USER_ERROR,
            payload: message,
        })
    }
    setSubmitting(false)
}

export const signOut = async dispatch => {
    try {
        await logout()
        dispatch({
            type: APP.SET.USER_SIGN_OUT,
        })
    } catch (error) {
        const { message } = error
        dispatch({
            type: APP.SET.USER_ERROR,
            payload: message,
        })
    }
}

export const fetchUserRSVPInformation = async (email, dispatch) => {
    try {
        const { Item } = await getItemFromDynamo({
            Email: email.toLowerCase(),
            Domain: "RSVP",
        })

        const { Item: ConfirmationItem } = await getItemFromDynamo({
            Email: email.toLowerCase(),
            Domain: "RSVP_CONFIRMATION",
        })

        const allowed = get(Item, ["Data"], null)
        const confirmed = get(ConfirmationItem, ["Data"], null)

        dispatch({
            type: APP.SET.RSVP,
            payload: {
                allowed,
                confirmed,
            },
        })
    } catch (error) {
        console.error(error.message)
    }
}

export const putUserRSVPInformation = async (
    { email, weddingGuests, songs, rehearsalGuests, origin, needBus },
    setSubmitting,
    setStatus,
    setShowConfirmation,
    dispatch
) => {
    try {
        await putItemToDynamo({
            Email: email.toLowerCase(),
            Domain: "RSVP_CONFIRMATION",
            Data: {
                Rehearsal: {
                    ConfirmedGuests: rehearsalGuests,
                },
                Wedding: {
                    ConfirmedGuests: weddingGuests,
                    ...(songs ? { Songs: songs } : {}),
                    NeedBus: needBus,
                    Origin: origin,
                },
            },
        })
        await fetchUserRSVPInformation(email, dispatch)

        setShowConfirmation(true)

        // dismiss alert
        setTimeout(() => setShowConfirmation(false), 3000)
    } catch (error) {
        const { message } = error
        setStatus(message)
    }
    setSubmitting(false)
}
