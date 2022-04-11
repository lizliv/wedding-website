import React from "react"
import classNames from "classnames"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

import styles from "./Item.module.scss"

let LEFTOFFSET = 1

const Item = ({
    LeftImage = null,
    LeftMainTitle = null,
    LeftFirstSubTitle = null,
    LeftSecondSubTitle = null,
    LeftFirstContact = null,
    LeftSecondContact = null,
    RightMainTitle = null,
    RightFirstContact = null,
    RightSecondContact = null,
    RightDetails = null,
    infoLink = null,
}) => {
    return (
        (LeftImage === null) ? LEFTOFFSET = 2 : LEFTOFFSET = 1,
        <Row className={styles.item}>
            {/* {(LeftImage === null) ? LEFTOFFSET = 2 : LEFTOFFSET = 1} */}
            <Col
                sm={12}
                md={{ span: 3, offset: LEFTOFFSET }}
                className={classNames(
                    styles["item-col"],
                    styles["left"],
                    "my-auto"
                )}
            >
                {LeftMainTitle && (
                    <h1>
                        <LeftMainTitle />
                    </h1>
                )}
                {LeftFirstSubTitle && (
                    <h3 className="text-muted">
                        <LeftFirstSubTitle />
                    </h3>
                )}
                {LeftSecondSubTitle && (
                    <h4 className="text-muted">
                        <LeftSecondSubTitle />
                    </h4>
                )}
                {LeftFirstContact && (
                    <h4 className={classNames(styles.contact, "text-muted")}>
                        <LeftFirstContact />
                    </h4>
                )}
                {LeftSecondContact && (
                    <h4 className={classNames(styles.contact, "text-muted")}>
                        <LeftSecondContact />
                    </h4>
                )}
            </Col>
            {(LeftImage === null) ? null :
                <Col
                    sm={12}
                    md={{ span: 3, offset: -1 }}
                    className={classNames(
                        styles["item-col"],
                        styles["center"],
                        "my-auto"
                    )}>
                    {LeftImage && (
                        <img src={LeftImage} alt="itemImage" className="img-fluid"></img>
                    )}
                </Col>
            }
            <Col
                sm={12}
                md={4}
                className={classNames(
                    styles["item-col"],
                    styles["right"],
                    "my-auto"
                )}
            >
                {RightMainTitle && (
                    <h3>
                        <RightMainTitle />
                    </h3>
                )}
                {RightFirstContact || RightSecondContact ? (
                    <div className={classNames(styles.contact, "text-muted")}>
                        {RightFirstContact && <RightFirstContact />}
                        {RightSecondContact && <RightSecondContact />}
                    </div>
                ) : null}
                {RightDetails && (
                    <div className={styles.details}>
                        <RightDetails />
                    </div>
                )}
                {infoLink && (
                    <Button
                        variant="info"
                        className={styles.button}
                        href={infoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Info
                    </Button>
                )}
            </Col>
        </Row>
    )
}

export default Item
