import React, { useContext, useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import { object, array, string, boolean } from "yup"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import { Formik, FieldArray } from "formik"
import isUndefined from "lodash/isUndefined"
// import isNull from "lodash/isNull"
import get from "lodash/get"
// import range from "lodash/range"
// import * as Yup from 'yup';

import { selectLanguage } from "utilities/cookies"
import { Store } from "store"
import { fetchUserRSVPInformation, putUserRSVPInformation } from "actions"
import { rsvpFormBrazil } from "content/RSVP-Brazil"

import styles from "../Forms.module.scss"

const schema = object().shape({
    userName: string(),
    userEmail: string().required(),
    guestData: array().of(
        object().shape({
            // name: Yup.string().required(),
            email: string(),
            isAttending: string().required(),
            foodChoice: string(),
            dietRestrictions: string(),
            plusOneAllowed: boolean(),
            plusOneAdded: boolean(),
            isAPlusOne: boolean()
        })
    ),
    partyNote: string(),
})

const YES = "yes"
const NO = "no"

const CHICKEN = "Chicken"
const VEGETARIAN = "Vegetarian"

function RSVPFormBrazil() {
    const { state, dispatch } = useContext(Store)
    const [cookies] = useCookies(["language"])

    const [showConfirmation, setShowConfirmation] = useState(false)

    const {
        app: {
            user: { name, email },
            rsvp: { allowed, weddingData, partyGuests},
        },
    } = state

    const {
        AlertNoEmail,
        submitButtonText,
        updateButtonText,
        yesLabel,
        noLabel,
        attendingLabel,
        notAttendingLabel,
        chickenLabel,
        veggieLabel,
        // otherLabelExtra,
        WeddingFormHeader,
        WeddingFormSubHeader,
        // zeroLabel,
        PlusOneLabel,
        EditPlusOneLabel,
        AttendingTextLabel,
        GuestNameLabel,
        GuestNameHelp,
        GuestEmailLabel,
        FoodChoiceLabel,
        // FoodChoiceHelp,
        DietRestrictionsLabel,
        DietRestrictionsHelp,
        WeddingNoteLabel,
        WeddingNoteHelp,
        AlertRSVPUpdated,
    } = rsvpFormBrazil[selectLanguage(cookies)]

    useEffect(() => {
        if (email) {
            fetchUserRSVPInformation(email, dispatch)
        }
    }, [email, dispatch])   

    const submitForm = (values, actions) => {
        const { setSubmitting, setStatus } = actions
        putUserRSVPInformation(
            { email, ...values },
            setSubmitting,
            setStatus,
            setShowConfirmation,
            dispatch
        )
    }

    if (!allowed) {
        return (
            <Container>
                <Col className={styles.intro}>
                    <Alert variant="info">
                        <AlertNoEmail />
                    </Alert>
                </Col>
            </Container>
        )
    }


    const initialValues = {
        userName: name,
        userEmail: email,
        guestData: [],
        partyNote: ""
    }
    // let weddingIsAttending, weddingFoodChoice, weddingDietRestrictions, weddingNote

    for (let i = 0; i < weddingData.length; i++) {
        const weddingIsAttending        = get(weddingData[i], "IsAttending")
        const weddingFoodChoice         = get(weddingData[i], "FoodChoice")
        const weddingDietRestrictions   = get(weddingData[i], "DietRestrictions")
        const weddingNote               = get(weddingData[i], "Note")
        const weddingIsAPlusOne         = get(weddingData[i], "IsAPlusOne")

        initialValues.guestData.push({
            name: partyGuests.names[i] || "",
            email: partyGuests.emails[i] || "",
            isAttending: weddingIsAttending || "",
            foodChoice: weddingFoodChoice || "",
            dietRestrictions: weddingDietRestrictions || "",
            plusOneAllowed: false,
            plusOneAdded: partyGuests.plusOneAdded,
            isAPlusOne: weddingIsAPlusOne || false
        })
        initialValues.partyNote = weddingNote || ""
    }; 

    if (partyGuests.hasPlusOne === true){
        initialValues.guestData.push({
            name: "",
            email: "",
            isAttending: NO,
            foodChoice: "",
            dietRestrictions: "",
            plusOneAllowed: true,
            plusOneAdded: partyGuests.plusOneAdded,
            isAPlusOne: true
        })
    }

    // If IsAttending for main party guest is not defined, show submit button. Otherwise, show update button
    const buttonText = isUndefined(weddingData[0].IsAttending)
        ? submitButtonText
        : updateButtonText

    return (
        <Formik
            enableReinitialize // missing piece!!
            validationSchema={schema}
            initialValues={initialValues}
            onSubmit={submitForm}
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isSubmitting,
                errors,
                status,
            }) => (
                <Form
                    noValidate
                    onSubmit={handleSubmit}
                    className={styles.form}
                >
                    <div className="text-center">
                        <h5 className="text-muted">
                            <WeddingFormHeader />
                        </h5>
                            <WeddingFormSubHeader />
                        <hr className={styles.hrclass1}/>
                    </div>
                    <FieldArray name="guestData">
                        {() => (values.guestData.map((thisGuestData, guestIdx) => {
                            const guestDataErrors = (errors.guestData?.length && errors.guestData[guestIdx]) || {};
                            const guestDataTouched = (touched.guestData?.length && touched.guestData[guestIdx]) || {};
                            // If the main guest is not attending, they cannot bring a guest. 
                            if (values.guestData[guestIdx].isAPlusOne === true & values.guestData[0].isAttending === NO)
                            {values.guestData[guestIdx].isAttending = NO}  
                            return (
                                
                    <div key={guestIdx}>
                    {(values.guestData[guestIdx].isAPlusOne === true  & values.guestData[0].isAttending === YES) ? 
                        <Form.Group controlId="controlIdAddPlusOne">
                            <Form.Label>
                                <PlusOneLabel />
                            </Form.Label>
                            <Form.Control
                                name={`guestData.${guestIdx}.isAttending`}
                                as="select"
                                value={values.guestData[guestIdx].isAttending}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={guestDataTouched.isAttending && guestDataErrors.isAttending}
                            >
                                <option label={yesLabel} value={YES}>
                                    {yesLabel}
                                </option>
                                <option label={noLabel} value={NO}>
                                    {noLabel}
                                </option>
                            </Form.Control>
                        </Form.Group> : null 
                    }
                    {values.guestData[guestIdx].isAPlusOne === true & values.guestData[guestIdx].isAttending === YES ?
                        <h6 className="text-muted">
                                <EditPlusOneLabel />
                            </h6> : null
                    }
                    {values.guestData[guestIdx].isAPlusOne === true & values.guestData[guestIdx].isAttending === YES ? 
                        <Form.Group controlId="controlIdGuestName">
                            <Form.Label>
                                <GuestNameLabel />
                            </Form.Label>
                            <Form.Control
                                name={`guestData.${guestIdx}.name`}
                                as="textarea"
                                rows="1"
                                value={values.guestData[guestIdx].name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={guestDataTouched.name && guestDataErrors.name}
                            />
                            <Form.Text className="text-muted">
                                <GuestNameHelp />
                            </Form.Text>
                        </Form.Group> : null
                    }
                    {values.guestData[guestIdx].isAPlusOne === true & values.guestData[guestIdx].isAttending === YES ? 
                        <Form.Group controlId="controlIdGuestEmail">
                            <Form.Label>
                                <GuestEmailLabel />
                            </Form.Label>
                            <Form.Control
                                name={`guestData.${guestIdx}.email`}
                                as="textarea"
                                rows="1"
                                value={values.guestData[guestIdx].email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={guestDataTouched.email && guestDataErrors.email}
                            />
                        </Form.Group> : null
                    }
                    {values.guestData[guestIdx].isAPlusOne === false ? 
                    <Form.Group controlId="controlIdAttending">
                        <Form.Label>
                            <AttendingTextLabel name={values.guestData[guestIdx].name} email={values.guestData[guestIdx].email} />
                        </Form.Label>
                        <Form.Check
                            name={`guestData.${guestIdx}.isAttending`}
                            aria-label="Radio 1"
                            type="radio"
                            value={YES}
                            label={attendingLabel} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={guestDataTouched.isAttending && guestDataErrors.isAttending}
                            checked={values.guestData[guestIdx].isAttending===YES}
                        >
                        </Form.Check>
                        <Form.Check
                            name={`guestData.${guestIdx}.isAttending`}
                            aria-label="Radio 2"
                            type="radio"
                            value={NO}
                            label={notAttendingLabel} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={guestDataTouched.isAttending && guestDataErrors.isAttending}
                            checked={values.guestData[guestIdx].isAttending===NO}
                        >
                        </Form.Check>
                    </Form.Group> : null
                    }
                    {values.guestData[guestIdx].isAttending === YES ?
                    <Form.Group controlId="controlIdWeddingDietRestrictions">
                        <Form.Label>
                            <DietRestrictionsLabel />
                        </Form.Label>
                        <Form.Control
                            name={`guestData.${guestIdx}.dietRestrictions`}
                            as="textarea"
                            rows="1"
                            value={values.guestData[guestIdx].dietRestrictions}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={guestDataTouched.dietRestrictions && guestDataErrors.dietRestrictions}
                        />
                        <Form.Text className="text-muted">
                            <DietRestrictionsHelp />
                        </Form.Text>
                    </Form.Group> : null
                    }
                    {(values.guestData[guestIdx].isAPlusOne === true  & values.guestData[0].isAttending === YES) || values.guestData[guestIdx].isAPlusOne === false ?
                    <hr className={styles.hrclass2}/>
                    : null}
                    </div>
                    );
                    }))}
                    </FieldArray>

                    <Form.Group controlId="controlIdWeddingNote">
                        <Form.Label>
                            <WeddingNoteLabel />
                        </Form.Label>
                        <Form.Control
                            name="partyNote"
                            as="textarea"
                            rows="3"
                            value={values.partyNote}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.partyNote && errors.partyNote}
                        />
                        <Form.Text className="text-muted">
                            <WeddingNoteHelp />
                        </Form.Text>
                    </Form.Group>

                    <Button
                        className="mt-5"
                        variant="primary"
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        block
                    >
                        {buttonText}
                    </Button>
                    {status && (
                        <Alert variant="danger" className="mt-4">
                            {status}
                        </Alert>
                    )}
                    <Alert
                        variant="success"
                        className="mt-4"
                        onClose={() => setShowConfirmation(false)}
                        show={showConfirmation}
                    >
                        <AlertRSVPUpdated />
                    </Alert>
                </Form>
            )}
        </Formik>
    )
}

export default RSVPFormBrazil
