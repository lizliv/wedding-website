// import React from "react"
import React, { useContext, useEffect, useState } from "react"
import { Store } from "store"
import { useCookies } from "react-cookie"

import { selectLanguage } from "utilities/cookies"
import { title } from "content/ManageGuests"
import { Header } from "components/Header"
import headerImg from "photos/registry.jpg"

import {initializeUserAndRSVPDB, initializePartyDB} from "services"

function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i = 1; i < allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {

            var tarr = [];
            for (var j = 0; j < headers.length; j++) {
                // tarr.push(headers[j]+":"+data[j]);
                tarr.push(data[j]);
            }
            lines.push(tarr);
        }
    }
    return { headers, lines }
}

function ManageGuests() {
    const { state, dispatch } = useContext(Store)
    const [cookies] = useCookies(["language"])

    const { Heading, SubHeading } = title[selectLanguage(cookies)]

    const myForm = document.getElementById("myForm");
    const csvFile = document.getElementById("csvFile");

    const guestList = []

    // const handleChange = (e) =>  {    
    //     this.setState({value: e.target.value});  
    // };

    const handleSubmit = (e) => {
        e.preventDefault();

        const input = csvFile.files[0];
        const reader = new FileReader();
        let myData

        reader.onload = function (e) {
            const text = e.target.result;
            // Read in csv header and lines
            myData = processData(text);
            // Post process guest information. If email is missing, generate a placeholder
            for (let i = 0; i < myData.lines.length; i++) {
                const guest = {
                    name: "",
                    email: "",
                    partyID: "",
                    hasPlusOne: false
                }
                guest.name = myData.lines[i][0]
                if (myData.lines[i][1] === "") {
                    guest.email = myData.lines[i][0].toLowerCase().replace(/\s+/g, '') + "-placeholder"
                }
                else {
                    guest.email = myData.lines[i][1]
                }
                guest.partyID = parseInt(myData.lines[i][2])
                guest.hasPlusOne = (myData.lines[i][3] === "TRUE")
                guestList.push(guest)
            }

            initializeUserAndRSVPDB(guestList)

            let partyIdx = 0
            let partyList = []
            let partyHasPlusOne = false
            guestList.map((thisGuestData, guestIdx) => {
                if (guestList[guestIdx].partyID !== partyIdx) {
                    initializePartyDB(partyIdx, partyList, partyHasPlusOne)
                    partyList = []
                    partyIdx += 1
                }
                partyList.push(guestList[guestIdx].email)
                partyHasPlusOne = guestList[guestIdx].hasPlusOne
            })
            console.log('Parties have been added')

        };
        reader.readAsText(input);

        // alert('Database has been updated')
    }



    return (
        <>
            <Header
                imageUrl={headerImg}
                Heading={Heading}
                SubHeading={SubHeading}
            />
            <div align="center">
                <form id="myForm" onSubmit={handleSubmit}>
                    Upload a guest list to initialize the "users", "rsvp", and "parties" collections:
                    <input type="file" id="csvFile" accept=".csv" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    )
}

export default ManageGuests
