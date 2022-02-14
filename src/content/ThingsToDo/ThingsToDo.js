import React from "react"

import { LANGUAGE } from "actions/constants"

export default {
    [LANGUAGE.EN]: [
        {
            Title: () => <>Lincoln Park Zoo</>,
            Details: () => (
                <>
                    <p>
                        The wedding is located within the Lincoln Park Zoo. This zoo completely free and is surrounded by nature with a Conservatory to the north and a boardwalk to the south. The zoo is in the neighborhood of Lincoln Park which is filled with great places to shop and eat!
                    </p>
                </>
            ),
            Date: () => <>Daily</>,
            Time: () => <>10 am - 5 pm </>,
            link:
                "https://www.lpzoo.org/",
        },
        {
            Title: () => <>Chicago Museum of Science and Industry</>,
            Date: () => <>Daily</>,
            Time: () => <>9:30 am - 4 pm </>,
            Details: () => (
                <>
                    <p>
                        One of our favorite museums in the city. Find your inner child while interacting with the displays or walk through exhibits designed for adults (boo!). Some exhibits we're re-visited are the U-505 submarine kept underground, the Coal Mine, and Take Flight. 
                    </p>
                </>
            ),
            link:
                "https://www.msichicago.org/",
        },
        {
            Title: () => <>Millenium Park</>,
            Date: () => <>Daily</>,
            Time: () => <>8 am - 9 pm </>,
            Details: () => (
                <>
                    <p>
                        One of the most popular parks in Chicago, this is where you will find famous sculptures like the Bean. Walk south and you can go to the Art Institute of Chicago, Buckingham Fountain, and then Grant Park.
                    </p>
                </>
            ),
            link:
                "https://www.chicago.gov/city/en/depts/dca/supp_info/millennium_park.html",
        },
        {
            Title: () => <>The Beach!</>,
            Details: () => (
                <>
                    <p>
                        You might be thinking, "Chicago has no ocean, what are you talking about?". Just wait until you see Lake Michigan!
                    </p>
                </>
            ),
        },
        {
            Title: () => <><strike>Sears</strike> Willis Tower</>,
            Date: () => <>Daily</>,
            Time: () => <>9 am - 10 pm </>,
            Details: () => (
                <>
                    <p>
                        The tallest building in Chicago, visit the <a href="https://theskydeck.com/" target="_blank">Sky Deck</a> for some great views of the city!
                    </p>
                </>
            ),
            link:
            "https://www.willistower.com/",
        },
        {
            Title: () => <>Navy Pier</>,
            Date: () => <>Sunday – Thursday, 11 am - 7 pm</>,
            Time: () => <>Friday - Saturday, 11 am - 9 pm </>,
            Details: () => (
                <>
                    <p>
                        A typical tourist attraction, Liz has actually never been to Navy Pier. The Centennial Ferris Wheel will provide some great views of the city.
                    </p>
                </>
            ),
            link:
                "https://navypier.org/",
        },
    ],
    [LANGUAGE.PT]: [
        {
            Title: () => <>Lincoln Park Zoo</>,
            Details: () => (
                <>
                    <p>
                        The wedding is located within the Lincoln Park Zoo. This zoo completely free and is surrounded by nature with a Conservatory to the north and a boardwalk to the south. The zoo is in the neighborhood of Lincoln Park which is filled with great places to shop and eat!
                    </p>
                </>
            ),
            Date: () => <>Daily</>,
            Time: () => <>10:00 - 17:00</>,
            link:
                "https://www.lpzoo.org/",
        },
        {
            Title: () => <>Chicago Museum of Science and Industry</>,
            Date: () => <>Daily</>,
            Time: () => <>9:30 - 16:00</>,
            Details: () => (
                <>
                    <p>
                        One of our favorite museums in the city. Find your inner child while interacting with the displays or walk through exhibits designed for adults (boo!). Some exhibits we're re-visited are the U-505 submarine kept underground, the Coal Mine, and Take Flight. 
                    </p>
                </>
            ),
            link:
                "https://www.msichicago.org/",
        },
        {
            Title: () => <>Millenium Park</>,
            Date: () => <>Daily</>,
            Time: () => <>8:00 - 21:00</>,
            Details: () => (
                <>
                    <p>
                        One of the most popular parks in Chicago, this is where you will find famous sculptures like the Bean. Walk south and you can go to the Art Institute of Chicago, Buckingham Fountain, and then Grant Park.
                    </p>
                </>
            ),
            link:
                "https://www.chicago.gov/city/en/depts/dca/supp_info/millennium_park.html",
        },
        {
            Title: () => <>The Beach!</>,
            Details: () => (
                <>
                    <p>
                        You might be thinking, "Chicago has no ocean, what are you talking about?". Just wait until you see Lake Michigan!
                    </p>
                </>
            ),
        },
        {
            Title: () => <><strike>Sears</strike> Willis Tower</>,
            Date: () => <>Daily</>,
            Time: () => <>9:00 - 22:00</>,
            Details: () => (
                <>
                    <p>
                        The tallest building in Chicago, visit the <a href="https://theskydeck.com/" target="_blank">Sky Deck</a> for some great views of the city!
                    </p>
                </>
            ),
            link:
            "https://www.willistower.com/",
        },
        {
            Title: () => <>Navy Pier</>,
            Date: () => <>Sunday – Thursday, 11:00 - 19:00 pm</>,
            Time: () => <>Friday - Saturday, 11:00 - 21:00 pm </>,
            Details: () => (
                <>
                    <p>
                        A typical tourist attraction, Liz has actually never been to Navy Pier. The Centennial Ferris Wheel will provide some great views of the city.
                    </p>
                </>
            ),
            link:
                "https://navypier.org/",
        },
    ],
}
