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
    // weddingGuests: number().required(),
    // rehearsalGuests: number().required(),
    isAttending: string().required(),
    foodChoice: string(),
    dietRestrictions: string(),
    guestNote: string(),
    // origin: string(),
})

const YES = "yes"
const NO = "no"

const CHICKEN = "Chicken"
const VEGETARIAN = "Vegetarian"
// const OTHER = "Other"

function RSVPForm() {
    const { state, dispatch } = useContext(Store)
    const [cookies] = useCookies(["language"])

    const [showConfirmation, setShowConfirmation] = useState(false)

    const {
        app: {
            user: { email },
            rsvp: { allowed, confirmed, weddingData },
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
        // lampollaLabel,
        // tortosaLabel,
        // otherLabel,
        otherLabelExtra,
        WeddingFormHeader,
        zeroLabel,
        NumberOfGuestsLabel,
        NumberOfGuestsHelp,
        AttendingLabel,
        AttendingHelp,
        FoodChoiceLabel,
        FoodChoiceHelp,
        OriginLabel,
        OriginHelp,
        DietRestrictionsLabel,
        DietRestrictionsHelp,
        WeddingNoteLabel,
        WeddingNoteHelp,
        // DinnerFormHeader,
        // DinnerGuestsLabel,
        // DinnerGuestsHelp,
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

    // wedding values
    // const weddingMaxGuests = get(weddingData, "MaxGuests")
    const weddingIsAttending        = get(weddingData, "IsAttending")
    const weddingFoodChoice         = get(weddingData, "FoodChoice")
    const weddingDietRestrictions   = get(weddingData, "DietRestrictions")
    const weddingNote               = get(weddingData, "Note")
    // const weddingOrigin = get(confirmed, ["Wedding", "Origin"])
    console.log(weddingData)

    // // rehearsal values
    // const rehearsalMaxGuests = get(allowed, ["Rehearsal", "MaxGuests"])
    // const rehearsalConfirmedGuests = get(confirmed, [
    //     "Rehearsal",
    //     "ConfirmedGuests",
    // ])

    const buttonText = isUndefined(weddingIsAttending)
        ? submitButtonText
        : updateButtonText

    return (
        <Formik
            validationSchema={schema}
            initialValues={{
                // weddingGuests: weddingConfirmedGuests || 0,
                // rehearsalGuests: rehearsalConfirmedGuests || 0,
                isAttending: weddingIsAttending || "",
                foodChoice: weddingFoodChoice || "",
                dietRestrictions: weddingDietRestrictions || "",
                guestNote: weddingNote || "",
                // origin: weddingOrigin || TORTOSA,
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
                    {/* <Form.Group controlId="controlIdWeddingGuests">
                        <Form.Label>
                            <NumberOfGuestsLabel />
                        </Form.Label>
                        <Form.Control
                            name="weddingGuests"
                            as="select"
                            value={values.weddingGuests}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={
                                touched.weddingGuests && errors.weddingGuests
                            }
                        >
                            {range(0, weddingMaxGuests + 1).map(idx => (
                                <option
                                    label={idx === 0 ? zeroLabel : idx}
                                    value={idx}
                                    key={idx}
                                >
                                    {idx === 0 ? zeroLabel : idx}
                                </option>
                            ))}
                        </Form.Control>
                        <Form.Text className="text-muted">
                            <NumberOfGuestsHelp />
                        </Form.Text>
                    </Form.Group> */}
                    <Form.Group controlId="controlIdAttending">
                        <Form.Label>
                            <AttendingLabel />
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
                    {/* {values.foodChoice === YES && (
                        <Form.Group controlId="controlIdOrigin">
                            <Form.Label>
                                <OriginLabel />
                            </Form.Label>
                            <Form.Control
                                name="origin"
                                as="select"
                                value={values.origin}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.origin && errors.origin}
                            >
                                <option label={tortosaLabel} value={TORTOSA}>
                                    {tortosaLabel}
                                </option>
                                <option label={lampollaLabel} value={LAMPOLLA}>
                                    {lampollaLabel}
                                </option>
                                <option
                                    label={`${otherLabel} - ${otherLabelExtra}`}
                                    value={OTHER}
                                >{`${otherLabel} - ${otherLabelExtra}`}</option>
                            </Form.Control>
                            <Form.Text className="text-muted">
                                <OriginHelp />
                            </Form.Text>
                        </Form.Group>
                    )} */}
                    {/* <div className="text-center mt-5">
                        <h5 className="text-muted">
                            <DinnerFormHeader />
                        </h5>
                    </div> */}
                    {/* <Form.Group controlId="controlIdRehearsalGuests">
                        <Form.Label>
                            <DinnerGuestsLabel />
                        </Form.Label>
                        <Form.Control
                            name="rehearsalGuests"
                            as="select"
                            value={values.rehearsalGuests}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={
                                touched.rehearsalGuests &&
                                errors.rehearsalGuests
                            }
                        >
                            {range(0, rehearsalMaxGuests + 1).map(idx => (
                                <option
                                    label={idx === 0 ? `0 - ${zeroLabel}` : idx}
                                    value={idx}
                                >
                                    {idx === 0 ? `0 - ${zeroLabel}` : idx}
                                </option>
                            ))}
                        </Form.Control>
                        <Form.Text className="text-muted">
                            <DinnerGuestsHelp />
                        </Form.Text>
                    </Form.Group> */}
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
