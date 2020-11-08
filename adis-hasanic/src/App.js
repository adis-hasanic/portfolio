import React from "react";
import "./App.css";
import {
BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom";

export default function App() {
return (
<Router>
<div>
<Switch>
<Route path="/about">
<About />
</Route>
<Route path="/contact">
<Contact />
</Route>
<Route path="/">
<Home />
</Route>
</Switch>
</div>
</Router>
);
}

function Home() {
return (
<div className="screen">
<div className="navigation">
<Link to="/contact"><span>Contact</span></Link>
<Link to="/about"><span>About</span></Link>
<Link to="/"><span className="active">Work</span></Link>
</div>

<div className="section">
<div className="text">
<div className="headline">Flowdash</div>
<div className="subheadline">Build a workflow app without coding.</div>
<div className="description">Since Aug 2020, as a freelancer, designing UI/UX at Flowdash, early-stage YC-backed startup based in San Francisco. Working closely with CEO and CTO on making it easy for ops teams to build a workflow app through setting up fields, stages, actions, triggers, timers (SLAs), layouts, etc. as well as to use it continuosly.</div>
</div>
</div>

<div className="section">
<div className="text">
<div className="headline">Stacker</div>
<div className="subheadline">Turn spreadsheets into web apps and customize without coding.</div>
<div className="description">For 4 months (Feb 2020 - May 2020), I was a sole designer at Stacker, early-stage startup based in London. Worked closely with CEO and CTO on updating visual of the app, modular design system, and experience of setting up the app.</div>
</div>
</div>

</div>
);}

function About() {
return (
<div className="screen">
<div className="navigation">
<Link to="/contact"><span>Contact</span></Link>
<Link to="/about"><span className="active">About</span></Link>
<Link to="/"><span>Work</span></Link>
</div>  

<div className="section">
<div className="text">
<div className="headline">Designing UI and UX within digital products for web and mobile at startups past 9 years. Looking for a full-time role.</div>
</div>
</div>

</div>
);}

function Contact() {
return (
<div className="screen">
<div className="navigation">
<Link to="/contact"><span className="active">Contact</span></Link>
<Link to="/about"><span>About</span></Link>
<Link to="/"><span>Work</span></Link>
</div>  

<div className="section">
<div className="text">
<div className="headline">Say hello at adishasanic96@gmail.com</div>
</div>
</div>

</div>
);}