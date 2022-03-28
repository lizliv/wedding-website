import get from "lodash/get"

import {
    getItemFromDynamo,
    putItemToDynamo,
} from "services"

import {
    // auth,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
    // currentAuthenticatedUser,
    fetchUserName,
    fetchUserRSVPallowed,
    putRSVPDataToDB,
    fetchUserRSVPdata,
  } from "services";

import { APP } from "./constants"

export const initializeApp = async (dispatch,user) => {

    const {name,email} = await fetchUserName(user)

    if (name) {

        // const {
        //     attributes: { sub: name, email },
        // } = myUser
        
        // const name = myUser.name
        // const email = myUser.email

        dispatch({
            type: APP.SET.INITIALIZE_USER,
            payload: {
                name,
                email,
            },
        })
    }
}

export const signUp = async (
    { name, email, password },
    setStatus,
    history,
    dispatch
) => {
    try {
        await registerWithEmailAndPassword({
            name,
            email,
            password,
        })

        await logInWithEmailAndPassword(email, password)

        dispatch({
            type: APP.SET.USER_SIGN_IN,
            payload: {
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

}

export const signIn = async (
    { email: providedEmail, password },
    setStatus,
    history,
    dispatch
) => {
    try {
        const myUser = await logInWithEmailAndPassword(providedEmail, password)

        // const { 
        //     attributes: { sub: name, email }, 
        // } = myUser
        
        const {name,email} = await fetchUserName(myUser)
        // const userData = await fetchUserName(myUser)

        // name = userData.name
        // email = userData.email

        dispatch({
            type: APP.SET.USER_SIGN_IN,
            payload: {
                name,
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
        // const { Item } = await fetchUserRSVP({
        //     Email: email.toLowerCase(),
        //     Domain: "RSVP",
        // })

        // const { Item: ConfirmationItem } = await fetchUserRSVP({
        //     Email: email.toLowerCase(),
        //     Domain: "RSVP_CONFIRMATION",
        // })

        // const allowed = get(Item, ["Data"], null)
        // const confirmed = get(ConfirmationItem, ["Data"], null)
        
        const {allowed,confirmed} = await fetchUserRSVPallowed(email.toLowerCase())
        // let confirmed

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
    { email, weddingGuests, foodChoice, dietRestrictions },
    setSubmitting,
    setStatus,
    setShowConfirmation,
    dispatch
) => {
    try {
        await putRSVPDataToDB({
            Email: email.toLowerCase(),
            // Domain: "RSVP_CONFIRMATION",
            Data: {
                // Rehearsal: {
                //     ConfirmedGuests: rehearsalGuests,
                // },
                Wedding: {
                    ConfirmedGuests: weddingGuests,
                    ...(foodChoice ? { FoodChoice: foodChoice } : {}),
                    DietRestrictions: dietRestrictions,
                    // Origin: origin,
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
