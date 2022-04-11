import React from "react"

import { LANGUAGE } from "actions/constants"
// import userEvent from "@testing-library/user-event"

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
        otherLabel: "Other",
        WeddingFormHeader: () => <>Wedding</>,
        WeddingFormSubHeader: () => <><p>Please RSVP by May 6th</p>
        <p>The ceremony is at 5:30 pm on Sunday, June 12th, 2022. Reception to Follow</p></>,
        zeroLabel: "Can't Attend",
        PlusOneLabel: () => (
            <>Will you be bringing a guest?</>
        ),
        EditPlusOneLabel: () => (
            <>Edit your guests' information.</>
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
            <>Choose an entr&eacute;e:</>
        ),
        FoodChoiceHelp: () => (
            <>
                Let us know which option you prefer, any dietary restrictions will be accomodated.
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
                Opa, parece que n&atilde;o temos teu endereco de e-mail. Entre em contato: {" "}
                <strong>
                    <a href="mailto:lizandchristian2022@gmail.com">
                    lizandchristian2022@gmail.com
                    </a>
                </strong>{" "}
                para atualizar nosso registro.
            </>
        ),
        submitButtonText: "Enviar RSVP",
        updateButtonText: "Actualizar RSVP",
        yesLabel: "Sim",
        noLabel: "Não",
        attendingLabel: "Participando",
        notAttendingLabel: <>N&atilde;o Participando</>,
        chickenLabel: "Frango",
        veggieLabel: "Vegetariano",
        otherLabel: "Outros",
        WeddingFormHeader: () => <>Casamento</>,
        WeddingFormSubHeader: () => <><p>Por favor, finalize o RSVP antes de 6 de Maio</p>
        <p>A ceremonia ser&aacute; as 17:30 no domingo, 12 de Junho, 2022. Recep&ccedil;&atilde;o a seguir.</p></>,
        zeroLabel: "Nao poderemos ir",
        PlusOneLabel: () => (
            <>Voce vai trazer um convidado?</>
        ),
        EditPlusOneLabel: () => (
            <>Edite as informações de seus convidados.</>
        ),
        AttendingTextLabel: ({ name , email}) => (
            <><strong>{name} ({email})</strong></>
        ),
        GuestNameLabel: () => (
            <>Qual &eacute; o nome da/o convidada/o?</>
        ),
        GuestNameHelp: () => (
            <>Por favor, insira o nome e sobrenome</>
        ),
        GuestEmailLabel: () => (
            <>Qual &eacute; o email do seu convidado?</>
        ),
        FoodChoiceLabel: () => (
            <>Escolha o prato principal:</>
        ),
        FoodChoiceHelp: () => (
            <>Deixe-nos saber qual opção você prefere, quaisquer restrições alimentares serão acomodadas.</>
        ),
        DietRestrictionsLabel: () => <>Restrições alimentares?</>,
        DietRestrictionsHelp: () => (
            <>Você tem alguma restrição alimentar? (ou seja, vegetariano, vegano, Kosher, sem glúten, etc.)</>
        ),
        WeddingNoteLabel: () => <>Mensagem</>,
        WeddingNoteHelp: () => (
            <>Gostaria de deixar uma mensagem para a noiva e noivo?</>
        ),
        // DinnerFormHeader: () => <>Pica-pica de Benvinguda</>,
        // DinnerGuestsLabel: () => <>Número de convidats</>,
        // DinnerGuestsHelp: () => (
        //     <>Número de convidats (incloen-te a tu) que vindran.</>
        // ),
        AlertRSVPUpdated: () => <>Obrigado pelo seu RSVP!</>,
    },
}
