import React from "react"
import { useCookies } from "react-cookie"

import { selectLanguage } from "utilities/cookies"
import { Header } from "components/Header"
import headerImg from "photos/registry.jpg"

import { title } from "content/Registry"
// import { registry } from "content/Registry"

// import styles from "./Registry.module.scss"


// (function (e, t, n) {
//     var s, a = e.getElementsByTagName(t)[0];e.getElementById(n) || (s = e.createElement(t), s.id = n, s.async = !0, s.src = "https://widget.zola.com/js/widget.js", a.parentNode.insertBefore(s, a))
// })(document, "script", "zola-wjs")

function Registry() {
    const [cookies] = useCookies(["language"])

    const { Heading, SubHeading } = title[selectLanguage(cookies)]
    // const { Title } = registry[selectLanguage(cookies)]

    return (
        <>
            <Header
                imageUrl={headerImg}
                Heading={Heading}
                SubHeading={SubHeading}
            />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {/* <button className={styles.registryButton} >
                    <a href="https://www.zola.com/registry/christianandliz2022" data-registry-key="christianandliz2022">Our Zola Wedding Registry</a>
                </button> */}
                <a className="zola-registry-embed" href="https://www.zola.com/registry/christianandliz2022" data-registry-key="christianandliz2022">Our Zola Wedding Registry</a>
            </div>
        </>
    )
}

export default Registry
