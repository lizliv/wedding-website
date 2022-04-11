import React from "react"

import { LANGUAGE } from "actions/constants"

import ceremonyImg from "photos/scheduleImages/honeycomb.jpg"
import receptionImg from "photos/scheduleImages/cafebrauer.jpg"
// import brazilImg from "photos/scheduleImages/brazil.jpg"

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
            LocationImage: ceremonyImg,
            Title: () => <>Wedding Ceremony</>,
            Date: () => <>Sunday, June 12th, 2022</>,
            Time: () => <>5:30 pm-6 pm</>,
            Location: () => <>Honeycomb</>,
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
                        The ceremony will take place at the Honeycomb (a.k.a. Education Pavilion). A brief 5 min walk from Caf&eacute; Brauer across the nature boardwalk.
                    </p>
                    <p>
                        For those of you who cannot join us, we will be streaming our ceremony on Vimeo. A link will be provided closer to the wedding.
                    </p>
                </>
            ),
        },
        {
            LocationImage: receptionImg,
            Title: () => <>Cocktail Hour and Reception</>,
            Date: () => <>Sunday, June 12th, 2022</>,
            Time: () => <>6 pm-11 pm</>,
            Location: () => <>Caf&eacute; Brauer</>,
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
                        The cocktail hour, dinner, and party will take place at Caf&eacute; Brauer in the Lincoln Park Zoo.
                    </p>
                </>
            ),
        },
        // {
        //     LocationImage: brazilImg,
        //     Title: () => <>Brazilian Reception</>,
        //     Date: () => <>Saturday, December 17th, 2022</>,
        //     // Time: () => <>6 pm-11 pm</>,
        //     Location: () => <>Marco Luigi Winery</>,
        //     locationLink: "https://marcoluigi.com.br/",
        //     Address: () => (
        //         <>
        //             <p>Via Trento, s/nº - Vale dos Vinhedos</p>
        //             <p>Bento Gonçalves - RS</p>
        //             <p>95711-000, Brazil</p> 
        //         </>
        //     ),
        //     mapLink:
        //         "https://g.page/vinicola-marcoluigi?share",
        //     Details: () => (
        //         <>
        //             <p>
        //                 The party continues! To make sure Christian can celebrate this momentous occasion with his entire family, we will be holding a second reception in Rio Grande do Sul, Brazil!
        //             </p>
        //         </>
        //     ),
        // },
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
            LocationImage: ceremonyImg,
            Title: () => <>Cerimônia do Casamento</>,
            Date: () => <>Domingo, 12 de Junho, 2022</>,
            Time: () => <>17:30-18:00 </>,
            Location: () => <>Honeycomb</>,
            locationLink: "https://www.lpzoo.org/venue/cafe-brauer/",
            Address: () => (
                <>
                    <p>2021 N Stockton Dr.</p>
                    <p>Chicago, IL, 60614</p>
                </>
            ),
            mapLink: "https://goo.gl/maps/873t96s6cGxU1FoQ9",
            Details: () => (
                <>
                    <p>
                        A cerimônia ocorrerá no Honeycomb (também conhecido como Pavilhão de Educação). Uma breve caminhada de 5 minutos a pé do Café Brauer. 
                    </p>
                    <p>
                       Para todos que n&atilde;o poderam comparecer, teremos um stream no site "Vimeo". O link sera postado no futuro.
                    </p>
                </>
            ),
        },
        {
            LocationImage: receptionImg,
            Title: () => <>Recep&ccedil;&atilde;o</>,
            Date: () => <>Domingo, 12 de Junho, 2022</>,
            Time: () => <>18:00-23:00 </>,
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
