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
<Router >
<div>
<Switch>
    <Route path="/two" onUpdate={() => window.scrollTo(0, 0)} >
<Two />
</Route>
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
    
<div className="header">
<div className="container">
<div className="name">Adis Hasanic</div>
<div className="navigation">
<Link to="/contact"><span>Contact</span></Link>
<Link to="/about"><span>About</span></Link>
<Link to="/"><span className="active">Work</span></Link>
</div>
</div>
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

<div className="section">
<div className="text">
<div className="headline">Teamscope</div>
<div className="subheadline">People-analytics for hiring and teambuilding.</div>
<div className="description">For 1 year 2 months (Nov 2018 to Jan 2020), I was a sole designer at Teamscope, early-stage startup based in Tallinn backed by TechStars and Jaan Tallinn (co-founder of Skype), providing a way to gather insights about personality, values and other characteristics, to make data-driven hiring decisions. Worked closely with CEO and PM on things like making it easy to provide data via surveys, understand individuals and teams, and bring on candidates to compare their data.</div>
</div>
</div>

<div className="section">
<div className="text">
<div className="headline">Amigos</div>
<div className="subheadline">Personalized car-search.</div>
<div className="description">During several weeks in 2019, I worked on UX/UI design of an iOS based car-search platform that uses machine learning and personalization features to help user find the car they need and negotiate the best deal at a nearby dealership.</div>
</div>
</div>

<div className="section">
<div className="text">
<div className="headline">Teleport</div>
<div className="subheadline">Local delivery on demand ("Uber for deliveries").</div>
<div className="description">At a 3-day hackaton on June 2019 in Tallinn hosted by Garage48 and Superangel (a startup hub and VC in Estonia), I joined the CEO and CTO of ZITICITY, a delivery startup from Lithuania. More than 100 teams applied, 15 teams competed, we won. It led to Superangel investing in ZITICITY.</div>
</div>
</div>

<div className="section">
<div className="text">
<div className="headline">Portal</div>
<div className="subheadline">Cryptocurrency wallet, transfering and exchange.</div>
<div className="description">For about 9 months (mid 2018 to early 2019), as a freelancer, I was working on UX/UI of Portal, a new product started by the founders of Fuel, an early-stage 500-backed startup based in San Francisco.</div>
</div>
</div>

<div className="section">
<div className="text">
<div className="headline">IndieCampers</div>
<div className="subheadline">Booking a campervan.</div>
<div className="description">During 1 week in October 2018, as a part of a job application, I did a quick redesign of the mobile web-based experience of booking a campervan from IndieCampers, Europe's leading campervan rental service. CEO and PM at IndieCampers loved it and offered me a full-time role.</div>
</div>
</div>

<div className="section">
<div className="pagination">
<Link to="/"><span className="active">1</span></Link>
<Link to="/two"><span>2</span></Link>
</div>
</div>

</div>
);}

function Two() {
return (
<div className="screen">
    
<div className="header">
<div className="container">
<div className="name">Adis Hasanic</div>
<div className="navigation">
<Link to="/contact"><span>Contact</span></Link>
<Link to="/about"><span>About</span></Link>
<Link to="/"><span className="active">Work</span></Link>
</div>
</div>
</div>

<div className="section">
<div className="text">
<div className="headline">Engine</div>
<div className="subheadline">Build a workflow app without coding.</div>
<div className="description">Since Aug 2020, as a freelancer, designing UI/UX at Flowdash, early-stage YC-backed startup based in San Francisco. Working closely with CEO and CTO on making it easy for ops teams to build a workflow app through setting up fields, stages, actions, triggers, timers (SLAs), layouts, etc. as well as to use it continuosly.</div>
</div>
</div>

<div className="section">
<div className="text">
<div className="headline">Typen</div>
<div className="subheadline">Distraction-free writing app.</div>
<div className="description">In 2017, I founded, designed and bootstrapped development of Typen, a writing app that helps the user focus on creative part of writing with features like customizable look and built-in storage. Several thousand writers signed up within 2 months of launch and positive feedback on design was sent from amateur novelists as well as a professional dramaturge.</div>
</div>
</div>

<div className="section">
<div className="pagination">
<Link to="/"><span>1</span></Link>
<Link to="/two"><span className="active">2</span></Link>
</div>
</div>

</div>
);}

function About() {
return (
<div className="screen">

<div className="header">
<div className="container">
<div className="name">Adis Hasanic</div>
<div className="navigation">
<Link to="/contact"><span>Contact</span></Link>
<Link to="/about"><span className="active">About</span></Link>
<Link to="/"><span>Work</span></Link>
</div>
</div>
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

<div className="header">
<div className="container">
<div className="name">Adis Hasanic</div>
<div className="navigation">
<Link to="/contact"><span className="active">Contact</span></Link>
<Link to="/about"><span>About</span></Link>
<Link to="/"><span>Work</span></Link>
</div>
</div>
</div>

<div className="section">
<div className="text">
<div className="headline">Say hello at adishasanic96@gmail.com</div>
</div>
</div>

</div>
);}