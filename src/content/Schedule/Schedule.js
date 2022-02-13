import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: [
        // {
        //     Title: () => <>Welcome Dinner</>,
        //     Date: () => <>TBD</>,
        //     Time: () => null,
        //     Location: () => <>Chicago, IL, USA</>,
        //     locationLink:
        //         "https://goo.gl/maps/dcKQQq5SKt9tmoMn6",
        //     Address: () => null,
        //     mapLink:
        //        null,
        //     Details: () => (
        //         <>
        //             <p>
        //                 There will be a few light bites in addition to drinks.
        //             </p>
        //         </>
        //     ),
        // },
        {
            Title: () => <>Wedding</>,
            Date: () => <>June 12th, 2022</>,
            Time: () => <>6 pm-12 am</>,
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
        // {
        //     Title: () => <>Jantar de Boas-vindas</>,
        //     Date: () => <>TBD</>,
        //     Time: () => null,
        //     Location: () => <>Chicago, IL, USA</>,
        //     locationLink:
        //         "https://goo.gl/maps/dcKQQq5SKt9tmoMn6",
        //     Address: () => null,
        //     mapLink:
        //        null,
        //     Details: () => (
        //         <>
        //             <p>
        //             Haverá aperitivos, além de bebidas.
        //             </p>
        //         </>
        //     ),
        // },
        {
            Title: () => <>Casamento</>,
            Date: () => <>June 12th, 2022</>,
            Time: () => <>18:00-00:00 </>,
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
                        A cerimônia, jantar e festa serão no Cafe Brauer, no Zoológico de Lincoln Park. 
                    </p>
                </>
            ),
        },
    ],
}
