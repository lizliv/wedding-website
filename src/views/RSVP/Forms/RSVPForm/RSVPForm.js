import React, { useContext, useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import { object, number, string, boolean } from "yup"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import { Formik } from "formik"
import isUndefined from "lodash/isUndefined"
import isNull from "lodash/isNull"
import get from "lodash/get"
import range from "lodash/range"

import { selectLanguage } from "utilities/cookies"
import { Store } from "store"
import { fetchUserRSVPInformation, putUserRSVPInformation } from "actions"
import { rsvpForm } from "content/RSVP"

import styles from "../Forms.module.scss"

const schema = object({
    isAttending: string().required(),
    foodChoice: string(),
    dietRestrictions: string(),
    guestNote: string(),
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

    const weddingIsAttending        = get(weddingData, "IsAttending")
    const weddingFoodChoice         = get(weddingData, "FoodChoice")
    const weddingDietRestrictions   = get(weddingData, "DietRestrictions")
    const weddingNote               = get(weddingData, "Note")
    console.log(weddingData)

    console.log('Party Guests:', partyGuests)
    console.log('Party Guest 1:', partyGuests[0])

    const buttonText = isUndefined(weddingIsAttending)
        ? submitButtonText
        : updateButtonText

    return (
        <Formik
            validationSchema={schema}
            initialValues={{
                isAttending: weddingIsAttending || "",
                foodChoice: weddingFoodChoice || "",
                dietRestrictions: weddingDietRestrictions || "",
                guestNote: weddingNote || "",
            }}
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
                    <Form.Group controlId="controlIdAttending">
                        <Form.Label>
                            <AttendingLabel name={name} email={email} />
                        </Form.Label>
                        <Form.Check
                            name="isAttending"
                            aria-label="Radio 1"
                            type="radio"
                            value={YES}
                            label={yesLabel} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.isAttending && errors.isAttending}
                            checked={values.isAttending===YES}
                        >
                        </Form.Check>
                        <Form.Check
                            name="isAttending"
                            aria-label="Radio 2"
                            type="radio"
                            value={NO}
                            label={noLabel} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.isAttending && errors.isAttending}
                            checked={values.isAttending===NO}
                        >
                        </Form.Check>
                        <Form.Text className="text-muted">
                            <AttendingHelp />
                        </Form.Text>
                    </Form.Group>
                    {values.isAttending === YES && (
                    <Form.Group controlId="controlIdFoodChoice">
                        <Form.Label>
                            <FoodChoiceLabel />
                        </Form.Label>
                        <Form.Check
                            name="foodChoice"
                            aria-label="Radio 1"
                            type="radio"
                            value={CHICKEN}
                            label={chickenLabel} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.foodChoice && errors.foodChoice}
                            checked={values.foodChoice===CHICKEN}
                        >
                        </Form.Check>
                        <Form.Check
                            name="foodChoice"
                            aria-label="Radio 2"
                            type="radio"
                            value={VEGETARIAN}
                            label={veggieLabel} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.foodChoice && errors.foodChoice}
                            checked={values.foodChoice===VEGETARIAN}
                        ></Form.Check>
                        <Form.Text className="text-muted">
                            <FoodChoiceHelp />
                        </Form.Text>
                    </Form.Group> 
                    )}
                    {values.isAttending === YES && (
                    <Form.Group controlId="controlIdWeddingDietRestrictions">
                        <Form.Label>
                            <DietRestrictionsLabel />
                        </Form.Label>
                        <Form.Control
                            name="dietRestrictions"
                            as="textarea"
                            rows="1"
                            value={values.dietRestrictions}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.dietRestrictions && errors.dietRestrictions}
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
                            name="guestNote"
                            as="textarea"
                            rows="3"
                            value={values.guestNote}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.guestNote && errors.guestNote}
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

export default RSVPForm
