import React, { useContext } from "react"
import { useCookies } from "react-cookie"

import { selectLanguage } from "utilities/cookies"
import { Store } from "store"
import { title } from "content/RSVP-Brazil"
import { Header } from "components/Header"
import headerImg from "photos/rsvp.jpg"

import { object, array, string, boolean } from "yup"
import Form from "react-bootstrap/Form"
import { Formik, FieldArray } from "formik"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"

import styles from "./Forms/Forms.module.scss"

import { RSVPFormBrazil } from "./Forms"

function RSVP() {
    const { state } = useContext(Store)
    const [cookies] = useCookies(["language"])

    const {
        app: { user },
    } = state

    const { Heading, SubHeading, SubHeadingAuthenticated, NameEnter, NameExample, ButtonText} = title[
        selectLanguage(cookies)
    ]

    const namePlaceholder = NameExample();

    const schema = object().shape({
        guestName: string(),
    })

    const handleSearch = (e) => {
        e.preventDefault();
        // const queryVal = user.current.value;
        // props.fetchMovies(queryVal.trim());
    };


    return (
        <>
            <Header
                imageUrl={headerImg}
                Heading={Heading}
                SubHeading={
                    user.isAuthenticated
                        ? () => <SubHeadingAuthenticated user={user} />
                        : SubHeading
                }
            />
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
                            placeholder={namePlaceholder}
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
                            {status}
                        </Alert>
                    )}
                    </Form>
                )}
            </Formik>
            {user.isAuthenticated && <RSVPFormBrazil />}
        </>
    )
}

export default RSVP
