import React, { useContext, useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import { object, number, string, boolean } from "yup"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import { Formik, FieldArray } from "formik"
import isUndefined from "lodash/isUndefined"
import isNull from "lodash/isNull"
import get from "lodash/get"
import range from "lodash/range"
import * as Yup from 'yup';

import { selectLanguage } from "utilities/cookies"
import { Store } from "store"
import { fetchUserRSVPInformation, putUserRSVPInformation } from "actions"
import { rsvpForm } from "content/RSVP"

import styles from "../Forms.module.scss"

const schema = Yup.object().shape({
    guestData: Yup.array().of(
        Yup.object().shape({
            // name: Yup.string().required(),
            email: Yup.string().required(),
            isAttending: Yup.string().required(),
            foodChoice: Yup.string(),
            dietRestrictions: Yup.string(),
            guestNote: Yup.string(),
        })
    )
})

const YES = "yes"
const NO = "no"

const CHICKEN = "Chicken"
const VEGETARIAN = "Vegetarian"

function RSVPForm() {
    const { state, dispatch } = useContext(Store)
    const [cookies] = useCookies(["language"])

    const [showConfirmation, setShowConfirmation] = useState(false)

    const {
        app: {
            user: { name, email },
            rsvp: { allowed, confirmed, weddingData, partyGuests},
        },
    } = state

    const {
        AlertNoEmail,
        submitButtonText,
        updateButtonText,
        yesLabel,
        noLabel,
        chickenLabel,
        veggieLabel,
        otherLabelExtra,
        WeddingFormHeader,
        zeroLabel,
        AttendingLabel,
        AttendingHelp,
        FoodChoiceLabel,
        FoodChoiceHelp,
        DietRestrictionsLabel,
        DietRestrictionsHelp,
        WeddingNoteLabel,
        WeddingNoteHelp,
        AlertRSVPUpdated,
    } = rsvpForm[selectLanguage(cookies)]

    useEffect(() => {
        if (email) {
            fetchUserRSVPInformation(email, dispatch)
            // partyGuestData = fetchPartyRSVPInformation(partyGuests)
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
        guestData: []
    }
    // let weddingIsAttending, weddingFoodChoice, weddingDietRestrictions, weddingNote

    for (let i = 0; i < weddingData.length; i++) {
        // weddingIsAttending        = get(weddingData[i], "IsAttending"),
    //     weddingFoodChoice         = get(weddingData[i], "FoodChoice"),
    //     weddingDietRestrictions   = get(weddingData[i], "DietRestrictions"),
    //     weddingNote               = get(weddingData[i], "Note"),

        initialValues.guestData.push({
            // name: name || "",
            email: partyGuests[i] || "",
            isAttending: weddingData[i].IsAttending || "",
            foodChoice: weddingData[i].FoodChoice || "",
            dietRestrictions: weddingData[i].DietRestrictions || "",
            guestNote: weddingData[i].Note || "",
        })
    }; 

    const buttonText = isUndefined(weddingData[0].weddingIsAttending)
        ? submitButtonText
        : updateButtonText

    return (
        <Formik
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
                    </div>
                    <FieldArray name="guestData">
                        {() => (values.guestData.map((thisGuestData, guestIdx) => {
                            const guestDataErrors = errors.guestData?.length && errors.guestData[guestIdx] || {};
                            const guestDataTouched = touched.guestData?.length && touched.guestData[guestIdx] || {};
                            // console.log('Guest data:', values.guestData)
                            // console.log('This guest is attending:', values.guestData[0].isAttending)
                            return (
                                
                    <div key={guestIdx}>
                    <Form.Group controlId="controlIdAttending">
                        <Form.Label>
                            <AttendingLabel name={name} email={values.guestData[guestIdx].email} />
                        </Form.Label>
                        <Form.Check
                            name={`guestData.${guestIdx}.isAttending`}
                            aria-label="Radio 1"
                            type="radio"
                            value={YES}
                            label={yesLabel} 
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
                            label={noLabel} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={guestDataTouched.isAttending && guestDataErrors.isAttending}
                            checked={values.guestData[guestIdx].isAttending===NO}
                        >
                        </Form.Check>
                        <Form.Text className="text-muted">
                            <AttendingHelp />
                        </Form.Text>
                    </Form.Group>
                    {values.guestData[guestIdx].isAttending === YES && (
                    <Form.Group controlId="controlIdFoodChoice">
                        <Form.Label>
                            <FoodChoiceLabel />
                        </Form.Label>
                        <Form.Check
                            name={`guestData.${guestIdx}.foodChoice`}
                            aria-label="Radio 1"
                            type="radio"
                            value={CHICKEN}
                            label={chickenLabel} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={guestDataTouched.foodChoice && guestDataErrors.foodChoice}
                            checked={values.guestData[guestIdx].foodChoice===CHICKEN}
                        >
                        </Form.Check>
                        <Form.Check
                            name={`guestData.${guestIdx}.foodChoice`}
                            aria-label="Radio 2"
                            type="radio"
                            value={VEGETARIAN}
                            label={veggieLabel} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={guestDataTouched.foodChoice && guestDataErrors.foodChoice}
                            checked={values.guestData[guestIdx].foodChoice===VEGETARIAN}
                        ></Form.Check>
                        <Form.Text className="text-muted">
                            <FoodChoiceHelp />
                        </Form.Text>
                    </Form.Group> 
                    )}
                    {values.guestData[guestIdx].isAttending === YES && (
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
                    </Form.Group>
                    )}
                    <Form.Group controlId="controlIdWeddingNote">
                        <Form.Label>
                            <WeddingNoteLabel />
                        </Form.Label>
                        <Form.Control
                            name={`guestData.${guestIdx}.guestNote`}
                            as="textarea"
                            rows="3"
                            value={values.guestData[guestIdx].guestNote}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={guestDataTouched.guestNote && guestDataErrors.guestNote}
                        />
                        <Form.Text className="text-muted">
                            <WeddingNoteHelp />
                        </Form.Text>
                    </Form.Group>
                    </div>
                    );
                    }))}
                    </FieldArray>
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

export default RSVPForm
