import React from "react"

import { LANGUAGE } from "actions/constants"
import userEvent from "@testing-library/user-event"

export default {
    [LANGUAGE.EN]: {
        AlertNoEmail: () => (
            <>
                Whoops, it looks like we don't have your email address. Email us
                at{" "}
                <strong>
                    <a href="mailto:lizandchristian2022@gmail.com">
                    lizandchristian2022@gmail.com
                    </a>
                </strong>{" "}
                so we can update our records.
            </>
        ),
        submitButtonText: "Submit RSVP",
        updateButtonText: "Update RSVP",
        yesLabel: "Yes",
        noLabel: "No",
        attendingLabel: "Attending",
        notAttendingLabel: "Not Attending",
        chickenLabel: "Chicken",
        veggieLabel: "Vegetarian",
        lampollaLabel: "L'Ampolla",
        tortosaLabel: "Tortosa",
        otherLabel: "Other",
        otherLabelExtra: "Reach out if you need help arranging transportation",
        WeddingFormHeader: () => <>Wedding</>,
        WeddingFormSubHeader: () => <>The ceremony is at 5:30 pm on Sunday, June 12th, 2022. Reception to Follow</>,
        NumberOfGuestsLabel: () => <>Number of guests attending</>,
        zeroLabel: "Can't Attend",
        NumberOfGuestsHelp: () => (
            <>
                The number of guests in your party (including yourself) that
                will be in attendance.
            </>
        ),
        PlusOneLabel: () => (
            <>Will you be bringing a guest?</>
        ),
        EditPlusOneLabel: () => (
            <>Edit your guests information.</>
        ),
        AttendingTextLabel: ({ name , email}) => (
            <><strong>{name} ({email})</strong></>
        ),
        GuestNameLabel: () => (
            <>What is the name of your guest?</>
        ),
        GuestNameHelp: () => (
            <>Please enter the first and last name</>
        ),
        GuestEmailLabel: () => (
            <>What is the email of your guest?</>
        ),
        FoodChoiceLabel: () => (
            <>Which food option would you like?</>
        ),
        FoodChoiceHelp: () => (
            <>
                Let us know which option you prefer, any dietary restrictions will be accomodated.
            </>
        ),
        OriginLabel: () => <>Where is your origin?</>,
        OriginHelp: () => (
            <>
                We're only planning on having bus transportation from L'Ampolla
                and Tortosa. Reach out if you need help arranging transportation
                from other locations.
            </>
        ),
        DietRestrictionsLabel: () => <>Dietary Restrictions</>,
        DietRestrictionsHelp: () => (
            <>Do you have any dietary restrictions? (i.e. vegetarian, vegan, Kosher, gluten free, etc.)</>
        ),
        WeddingNoteLabel: () => <>Message</>,
        WeddingNoteHelp: () => (
            <>Want to leave a message for the bride and groom?</>
        ),
        // DinnerFormHeader: () => <>Welcome &ldquo;Pica-pica&ldquo;</>,
        // DinnerGuestsLabel: () => <>Number of guests attending</>,
        // DinnerGuestsHelp: () => (
        //     <>
        //         The number of guests (including yourself) that will be in
        //         attendance.
        //     </>
        // ),
        AlertRSVPUpdated: () => <>Thanks for your RSVP!</>,
    },
    [LANGUAGE.PT]: {
        AlertNoEmail: () => (
            <>
                Uups, sembla que no tenim el vostre email. Envieu-nos un email a{" "}
                <strong>
                    <a href="mailto:lizandchristian2022@gmail.com">
                    lizandchristian2022@gmail.com
                    </a>
                </strong>{" "}
                i actualitzarem el nostre registre.
            </>
        ),
        submitButtonText: "Envia RSUP",
        updateButtonText: "Actualitza RSUP",
        yesLabel: "Yes",
        noLabel: "No",
        attendingLabel: "Attending",
        notAttendingLabel: "Not Attending",
        chickenLabel: "Frango",
        veggieLabel: "Vegetariana",
        lampollaLabel: "L'Ampolla",
        tortosaLabel: "Tortosa",
        otherLabel: "Altres",
        otherLabelExtra: "Feu-nos saber si necessiteu ajuda trobant transport.",
        WeddingFormHeader: () => <>Casament</>,
        WeddingFormSubHeader: () => <>The ceremony is at 5:30 pm on Sunday, June 12th, 2022. Reception to Follow</>,
        NumberOfGuestsLabel: () => <>Número de convidats</>,
        zeroLabel: "No podem venir",
        NumberOfGuestsHelp: () => (
            <>Número de convidats (incloen-te a tu) que vindran.</>
        ),
        PlusOneLabel: () => (
            <>Will you be bringing a guest?</>
        ),
        EditPlusOneLabel: () => (
            <>Edit your guests information.</>
        ),
        AttendingTextLabel: ({ name , email}) => (
            <><strong>{name} ({email})</strong></>
        ),
        GuestNameLabel: () => (
            <>What is the name of your guest?</>
        ),
        GuestNameHelp: () => (
            <>Please enter the first and last name</>
        ),
        GuestEmailLabel: () => (
            <>What is the email of your guest?</>
        ),
        FoodChoiceLabel: () => (
            <>Qual opção de comida você gostaria?</>
        ),
        FoodChoiceHelp: () => (
            <>
                Deixe-nos saber qual opção você prefere, quaisquer restrições alimentares serão acomodadas.
            </>
        ),
        OriginLabel: () => <>Des d'on?</>,
        OriginHelp: () => (
            <>
                Només hi haurà autobús des de L'Ampolla i Tortosa. Feu-nos saber
                si necessiteu ajuda trobant transport.
            </>
        ),
        DietRestrictionsLabel: () => <>Restrições alimentares?</>,
        DietRestrictionsHelp: () => (
            <>
                Você tem alguma restrição alimentar? (ou seja, vegetariano, vegano, Kosher, sem glúten, etc.)
            </>
        ),
        WeddingNoteLabel: () => <>Message</>,
        WeddingNoteHelp: () => (
            <>Want to leave a message for the bride and groom?</>
        ),
        // DinnerFormHeader: () => <>Pica-pica de Benvinguda</>,
        // DinnerGuestsLabel: () => <>Número de convidats</>,
        // DinnerGuestsHelp: () => (
        //     <>Número de convidats (incloen-te a tu) que vindran.</>
        // ),
        AlertRSVPUpdated: () => <>Gràcies pel vostre RSUP!</>,
    },
}
