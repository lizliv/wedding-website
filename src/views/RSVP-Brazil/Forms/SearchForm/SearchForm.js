import React, { useContext, useState } from "react"
import { useCookies } from "react-cookie"
import { selectLanguage } from "utilities/cookies"
import { object, string } from "yup"
import { Store } from "store"

import { title } from "content/RSVP-Brazil"

import Form from "react-bootstrap/Form"
import { Formik } from "formik"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"

import styles from "../Forms.module.scss"
import { fetchUserEmail, signIn } from "actions"

const schema = object().shape({
    guestName: string(),
})

function SearchForm({ history }) {
    const { state, dispatch } = useContext(Store)
    const [cookies] = useCookies(["language"])

    const [showConfirmation, setShowConfirmation] = useState(false)

    const { NameEnter, NameExample, ButtonText} = title[
        selectLanguage(cookies)
    ]
    
    const {
        app: { user: name, email },
    } = state

    const handleSearch = (values, actions) => {
        const { setSubmitting, setStatus } = actions
        const nameArray = values.guestName.split(' ')
        if (nameArray.length < 2){
            console.error('Please include first and last name');
            actions.setStatus({message: 'Please include first and last name'})
        }
        else{
        fetchUserEmail(
            values.guestName,
            setStatus,
            history,
            dispatch
            // setSubmitting,
            // setShowConfirmation,
        )
        // signIn(email,'Brasil2022', setStatus, history, dispatch)
        }
        setSubmitting(false)
    };

    return (
        <Formik
            enableReinitialize // missing piece!!
            validationSchema={schema}
            initialValues={{guestName: "" }}
            onSubmit={handleSearch}
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
                <Form.Group controlId="controlIdGuestName">
                    <Form.Label>
                        <NameEnter />
                    </Form.Label>
                    <Form.Control
                        name={`guestName`}
                        value={values.guestName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder={NameExample()}
                        // isInvalid={guestDataTouched.name && guestDataErrors.name}
                    />
                </Form.Group>
                <Button
                    className="mt-5"
                    variant="primary"
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    block
                >
                    <ButtonText />
                </Button>
                {status && (
                    <Alert variant="danger" className="mt-4">
                        {status.message}
                    </Alert>
                )}
                <Alert
                    variant="success"
                    className="mt-4"
                    onClose={() => setShowConfirmation(false)}
                    show={showConfirmation}
                >
                </Alert>
                </Form>
            )}
        </Formik>
        )
}

export default SearchForm