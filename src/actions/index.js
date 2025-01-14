// import get from "lodash/get"

import {
    // auth,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
    // currentAuthenticatedUser,
    fetchUserName,
    fetchUserRSVPallowedPartyIdx,
    putRSVPDataToDB,
    fetchUserRSVPdata,
    fetchPartyUsers,
    fetchUserbyName
} from "services";

import { APP } from "./constants"

export const initializeApp = async (dispatch, user) => {
    
    const { name, email } = await fetchUserName(user)

    if (name) {
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

        // await signIn(email,password)
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
        console.log('The actions/signup is throwing an error')
        // FIX: Potentially change error messages to a more user friendly description?
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
        // console.log('Logging in with:', providedEmail, ' , ', password)
        const myUser = await logInWithEmailAndPassword(providedEmail, password)
        const { name, email } = await fetchUserName(myUser)

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

export const passwordReset = async (
    { email },
    setSubmitting,
    setStatus,
    setShowConfirmation,
    dispatch
) => {
    try {
        await sendPasswordReset(email)

        setShowConfirmation(true)
        // dismiss alert
        setTimeout(() => setShowConfirmation(false), 6000)
    } catch (error) {
        let { message } = error
        if (message.includes("user-not-found")){
            message = "Could not find an account with the provided email address."
        }
        setStatus(message)
    }
    setSubmitting(false)
}
export const fetchUserEmail = async ( searchName, setStatus, history, dispatch ) => {
    let userData, email
    try {
        userData = await fetchUserbyName(searchName)
    }
    catch (error) {
            // let { message } = error
            let { message } = "Could not find user with that name."
            setStatus(message)
            dispatch({
                type: APP.SET.USER_ERROR,
                payload: message,
            })
        }
    try{
        email = userData.email
        signIn({email:email,password:"Brasil2022"},setStatus,history,dispatch)
    } catch (error) {
        let { message } = "Failed to retrieve user information. Please contact us."
        // let { message } = error
        setStatus(message)
        dispatch({
            type: APP.SET.USER_ERROR,
            payload: message,
        })
    }
}
export const fetchUserRSVPInformation = async (email, dispatch) => {
    try {
        let weddingData, partyGuests
        const { allowed, partyIdx } = await fetchUserRSVPallowedPartyIdx(email.toLowerCase())
        if (allowed) {
            partyGuests = await fetchPartyUsers(partyIdx)
            // weddingData = await fetchUserRSVPdata(email.toLowerCase())
            weddingData = await Promise.all(partyGuests.emails.map(function (guestEmails, index) {
                return fetchUserRSVPdata(guestEmails)
            })
            );
        }
        dispatch({
            type: APP.SET.RSVP,
            payload: {
                allowed,
                weddingData,
                partyGuests,
            },
        })
    } catch (error) {
        console.error(error.message)
    }
}

export const putUserRSVPInformation = async (
    { email, userName, userEmail, guestData, partyNote },
    setSubmitting,
    setStatus,
    setShowConfirmation,
    dispatch
) => {
    try {
        await Promise.all(guestData.map(function (guest, index) {
            return putRSVPDataToDB({
                UserName: userName,
                UserEmail: userEmail,
                Name: guest.name,
                Email: guest.email.toLowerCase(),
                Data: {
                    Wedding: {
                        IsAttending: guest.isAttending,
                        ...(guest.foodChoice ? { FoodChoice: guest.foodChoice } : {}),
                        DietRestrictions: guest.dietRestrictions,
                        Note: partyNote,
                        IsAPlusOne: guest.isAPlusOne
                    },
                    confirmed: guest.isAttending,
                },
                HasPlusOne: guest.plusOneAllowed,
                PlusOneAdded: guest.plusOneAdded
            })
        }));

        // Problem here. Need to wait for put to be done before doing this operation
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
