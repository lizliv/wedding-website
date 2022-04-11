import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: {
        Content: () => (
            <>
                <h2>COVID Information</h2>
                <p>We will follow all local guidelines with respect to the COVID 19 pandemic.</p>
                {/* <p>As of January 3, 2022 any individual 5 and older will be required to show proof of vaccination to attend entertainment venues where food or drink are served. <a href="https://www.chicago.gov/city/en/sites/covid19-vaccine/home/chi-vaccine-requirement.html" target="_blank" rel="noopener noreferrer">Read more here</a>.</p> */}
            </>
        ),
    },
    [LANGUAGE.PT]: {
        Content: () => (
            <>
                <h2>Informações COVID</h2>
                <p>Seguiremos todas as orientações locais em relação à pandemia do COVID 19.</p>
                {/* <p>A partir de 3 de janeiro de 2022, qualquer indivíduo com 5 anos ou mais deverá apresentar comprovante de vacinação para comparecer a locais de entretenimento onde comida ou bebida são servidas. <a href="https://www.chicago.gov/city/en/sites/covid19-vaccine/home/chi-vaccine-requirement.html" target="_blank" rel="noopener noreferrer">Leia mais aqui.</a></p> */}
            </>
        ),
    },
}
