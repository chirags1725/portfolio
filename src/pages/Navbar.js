import { Link } from "react-router-dom";
import logo from "../images/logo.png";

function Navbar() {
	var link = document.querySelectorAll(".links");
	link.forEach((e) => {
		e.addEventListener("click", () => {
			link.forEach((e) => {
				e.classList.remove("active");
			});

			e.classList.add("active");
		});
	});

    
		// img.onClick(()=>{
			
		// });
    const homeHighlight = () => {
        let home = document.querySelector('#home')

        link.forEach((e) => {
            e.classList.remove("active");
        });

        home.classList.add("active");
    }


	window.addEventListener("scroll", () => {
		let nav = document.querySelector(".navbar");
		if (window.scrollY > 5) {
			nav.classList.add("scroll");
		} else {
			nav.classList.remove("scroll");
		}
	});



    let darkmode = document.querySelector('.dark')
    const dark = ()=>{
        let body=document.querySelector('body')
        body.classList.toggle('dark')
    }
	return (
		<>
			<div className="navbar">
				<div className="elems">
					<div className="left">
						<Link to="/">
							<img src={logo} className="logoImage" onClick={homeHighlight} />
						</Link>
					</div>
					<div className="right">
						<Link className="links active" id="home" to="/">
							Home
						</Link>
						<Link className="links" to="/About">
							About
						</Link>
						<Link className="links" to="/Portfolio">
							Portfolio
						</Link>
						<Link className="links" to="/Blog">
							Blog
						</Link>
						<Link className="links" to="/Contact">
							Contact
						</Link>
					</div>
                    
				</div>
                <span className="dark material-symbols-outlined" onClick={dark}>
dark_mode
</span>
                
			</div>
		</>
	);
}

export default Navbar;
