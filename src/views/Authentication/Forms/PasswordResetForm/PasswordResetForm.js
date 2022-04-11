import React, { useContext, useState } from "react"
import { useCookies } from "react-cookie"
import { object, string } from "yup"
import { Formik } from "formik"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"

import { selectLanguage } from "utilities/cookies"
import { Store } from "store"
import { passwordReset } from "actions"
import { passwordResetForm } from "content/Authentication"

import styles from "../Forms.module.scss"

const schema = object({
    email: string()
        .email()
        .required(),
})

function PasswordResetForm({ history }) {
    const { dispatch } = useContext(Store)
    const [cookies] = useCookies(["language"])

    const [showConfirmation, setShowConfirmation] = useState(false)

    const {
        Header,
        SubmitButton,
        SubmitButtonLoading,
        EmailLabel,
        emailPlaceholder,
        EmailHelp,
        // NoAccountPrompt,
        AlertEmailSent,
    } = passwordResetForm[selectLanguage(cookies)]

    const submitForm = (values, actions) => {
        const { setSubmitting, setStatus } = actions
        passwordReset(
            { ...values },
            setSubmitting,
            setStatus,
            setShowConfirmation,
            dispatch
        )
    }

    return (
        <Formik
            enableReinitialize
            validationSchema={schema}
            initialValues={{
                email: ""
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
                        <h4 className="text-muted">
                            <Header />
                        </h4>
                    </div>
                    <Form.Group controlId="controlIdEmail">
                        <Form.Label>
                            <EmailLabel />
                        </Form.Label>
                        <Form.Control
                            name="email"
                            type="email"
                            placeholder={emailPlaceholder}
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.email && errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                        <Form.Text className="text-muted">
                            <EmailHelp />
                        </Form.Text>
                    </Form.Group>
                    <Button
                        variant="primary"
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        block
                    >
                        {isSubmitting ? (
                            <SubmitButtonLoading />
                        ) : (
                            <SubmitButton />
                        )}
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
                        <AlertEmailSent />
                    </Alert>
                    {/* <div className={styles.links}>
                        <p>
                            <NoAccountPrompt />
                        </p>
                    </div> */}
                </Form>
            )}
        </Formik>
    )
}

export default PasswordResetForm