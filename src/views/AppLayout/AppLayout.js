import React, { Component} from "react"
import { Route, Switch } from "react-router-dom"

import { Navigation } from "components/Navigation"
import { Footer } from "components/Footer"

import { Home } from "views/Home"
import { Schedule } from "views/Schedule"
import { ScheduleBrazil } from "views/Schedule-Brazil"
import { Travel } from "views/Travel"
import { TravelBrazil } from "views/Travel-Brazil"
import { ThingsToDo } from "views/ThingsToDo"
import { FAQ } from "views/FAQ"
import { Registry } from "views/Registry"
import { RSVP } from "views/RSVP"
import { RSVPBrazil } from "views/RSVP-Brazil"

import {Modal} from "components/CovidBanner"


class AppLayout extends Component {
    constructor (){
        super();
        this.state = {
        show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    
    render() {
        return (
        <>
        <main className="mb-4">        
            <Navigation />
            <Switch>
                <Route exact path={"/"} component={Home} />
                <Route exact path={"/schedule"} component={Schedule} />
                <Route exact path={"/schedule-brazil"} component={ScheduleBrazil} />
                <Route exact path={"/travel"} component={Travel} />
                <Route exact path={"/travel-brazil"} component={TravelBrazil} />
                <Route exact path={"/things-to-do"} component={ThingsToDo} />
                <Route exact path={"/faq"} component={FAQ} />
                <Route exact path={"/registry"} component={Registry} />
                <Route exact path={"/rsvp"} component={RSVP} />
                <Route exact path={"/rsvp-brazil"} component={RSVPBrazil} />
            </Switch>
            <Modal show={this.state.show} handleClose={this.hideModal}></Modal>
        </main>
        <Footer />
        </>
        );
    }
}

export default AppLayout
