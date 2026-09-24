import "./LandingPage.css"
import { NotebookPen , Star} from "lucide-react";
import Image from 'next/image';

export default function LandingPage(){
return(
    <div>
    <section>
    <nav className="Navbar">
        <h1 className="Navbar-Icon"><NotebookPen /> </h1>
        <h1 className="Navbar-Name">InkSpace</h1>
        <ul className="Navbar-Pages">
            <li><a href="/features">Features</a></li>
        </ul>
        <ul className="Navbar-Pages"> 
            <li><a href="/about">About</a></li>
        </ul>
        <ul className="Navbar-Pages">
            <li><a href="/pricing">Pricing</a></li>
        </ul>
        <ul className="Navbar-Pages">
            <li><a href="/help">Help</a></li>
        </ul>
        <ul className="Navbar-Pages">
            <li><a href="/login">Login</a></li>
        </ul>
        <ul className="Navbar-Pages">
            <li><a href="/register">Get Started</a></li>
        </ul>
    </nav>
    </section>
    <section className="Description">
        <p className="rounded-card"><Star/> Your thought. Organized beautifully.</p>
        <h1 className="heading1">Write. Organize.</h1>
        <h1 className="heading2">Remember.</h1>
        <p>InkSpace is a notebook where you can save or write your notes.<br></br>It's purely built for students, founders and business owners<br></br> to keep track of their records</p>
    <section className="Buttons">
        <a href="/register" className="PrimaryButton">
            Get Started
        </a>

        <a href="/about" className="SecondaryButton">
            About
        </a>
    </section>
    
    <Image className="dashboard-img"
        src="/inkspace-dashboard.png"
        alt="InkSpace dashboard"
        width={600}
        height={400}
        priority
    />
    </section>
    <section className="Features">
        <h1 className="Features-Heading">Features</h1>
        <div className="Features-Container">
            <p>Feature 1: Intuitive note-taking experience</p>
            <p>Feature 2: Seamless organization and categorization</p>
            <p>Feature 3: Cross-platform accessibility</p>
        </div>
    </section>
    <section className="About">
        <h1 className="About-Heading">About InkSpace</h1>
        <p>InkSpace is a web application designed to help students, founders, and business owners organize their thoughts and ideas effectively. With a user-friendly interface and powerful features, InkSpace allows users to create, manage, and access their notes from anywhere.</p>
    </section>
    <section className="Footer">
        <p>@2026 Inkspace. All rights reserved.</p>
        <p>Made for students, founders, and business owners</p>
        <p>Contact: aryansonsurkar87@gmail.com</p>
        <p>Follow me on github: https://github.com/aryan-sonsurkar , LinkedIn: https://www.linkedin.com/in/aryan-sonsurkar, Instagram: https://www.instagram.com/yaaa_its_aryxn    </p>
        <p><a href="/privacy">Privacy Policy</a></p>
    </section>
    </div>
);
}