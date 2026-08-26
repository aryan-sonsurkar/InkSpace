import "./LandingPage.css"
import { NotebookPen , Star} from "lucide-react";

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
        <button><a href="/register">Get Started</a></button>
        <button><a href="/about">About</a></button>
    </section>
    </section>
    </div>
);
}