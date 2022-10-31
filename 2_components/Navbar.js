import "./Navbar.css";

function Navbar() {
    return (
        <header class="header">
            <div class="left">
                <h3>LOGO</h3>
            </div>

            <div class="mid">
                <ul class="navbar">
                    <li><a href="/" class="active">Home</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Timeline</a></li>
                    <li><a href="/">Contact Us</a></li>
                </ul>
            </div>

            <div class="right">
                <a href="tel:7034452171"><button class="btn">Call us Now</button></a>
                <a href="mailto:mayonfrancis@gmail.com"><button class="btn">Email us</button></a>
            </div>
        </header>
    )
}

export default Navbar;