import React from "react"

import { useCookies } from "react-cookie"

import { selectLanguage } from "utilities/cookies"
import { COVIDbanner } from "content"

import styles from './modal.module.scss'

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? styles.displayBlock : styles.displayNone;
  
  const [cookies] = useCookies(["language"])

  const { Content } = COVIDbanner[selectLanguage(cookies)]

  return (
    <div className={showHideClassName}>
        <div className={styles.modal}>
            <section className={styles.main}>
                {children}
                <Content />
                <div className={styles.footer}>
                    <button type="button" onClick={handleClose}>Close</button>
                </div>
            </section>
      </div>
    </div>
  )
}

export default Modal