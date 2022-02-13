import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: [
        {
            Title: () => <>Welcome Dinner</>,
            Date: () => <>TBD</>,
            Time: () => null,
            Location: () => <>Chicago, IL, USA</>,
            locationLink:
                "https://goo.gl/maps/dcKQQq5SKt9tmoMn6",
            Address: () => null,
            mapLink:
               null,
            Details: () => (
                <>
                    <p>
                        There will be a few light bites in addition to drinks. 
                        Stop by whenever works for you between the indicated hours!
                    </p>
                </>
            ),
        },
        {
            Title: () => <>Wedding</>,
            Date: () => <>June 12th, 2022</>,
            Time: () => <>6 pm</>,
            Location: () => <>Cafe Brauer</>,
            locationLink: "https://www.lpzoo.org/venue/cafe-brauer/",
            Address: () => (
                <>
                    <p>2021 N Stockton Dr.</p>
                    <p>Chicago, IL, 60614</p>
                </>
            ),
            mapLink:
                "https://goo.gl/maps/873t96s6cGxU1FoQ9",
            Details: () => (
                <>
                    <p>
                        The ceremony, dinner and party will take place at Cafe Brauer in the Lincoln Park Zoo.
                    </p>
                </>
            ),
        },
    ],
    [LANGUAGE.PT]: [
        {
            Title: () => <>Jantar de Boas-vindas</>,
            Date: () => <>TBD</>,
            Time: () => null,
            Location: () => <>Chicago, IL, USA</>,
            locationLink:
                "https://goo.gl/maps/dcKQQq5SKt9tmoMn6",
            Address: () => null,
            mapLink:
               null,
            Details: () => (
                <>
                    <p>
                    Haverá algumas mordidas leves, além de bebidas.
                    Pare sempre que funcionar para você entre as horas indicadas! 
                    </p>
                </>
            ),
        },
        {
            Title: () => <>Casamento</>,
            Date: () => <>June 12th, 2022</>,
            Time: () => <>6 pm</>,
            Location: () => <>Cafe Brauer</>,
            locationLink: "https://www.lpzoo.org/venue/cafe-brauer/",
            Address: () => (
                <>
                    <p>2021 N Stockton Dr.</p>
                    <p>Chicago, IL, 60614</p>
                </>
            ),
            mapLink:
                "https://goo.gl/maps/873t96s6cGxU1FoQ9",
            Details: () => (
                <>
                    <p>
                        A cerimônia, o jantar e a festa acontecerão no Cafe Brauer, no Lincoln Park Zoo. 
                    </p>
                </>
            ),
        },
    ],
}
