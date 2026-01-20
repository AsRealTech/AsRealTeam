import { portfolioData } from "../../data/portfolio";
import logo from "/AsRealTech_Logo.png";

export function Main_hero(){
    return (
        <>
            <div className="row main-hero-section">
                <div className="col">
                    <div className="hero-inner">
                        <div className="text-center">

                        <img className="img-fluid logo mx-auto d-block" src={logo} alt="AS" />
                        <h1>AsRealTech</h1>
                        <span className="mt-4"><a href={portfolioData.whatsapplink}>Bring it online, your amazing ideas, business now <i className="fas fa-arrow-right m-2"></i></a></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}