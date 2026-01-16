import { AboutUs } from "../components/About";
import { FeaturedProjects } from "../components/FeaturedProjects";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";



export default function MainPage(){
    return(
        <>
            <Hero />
            <AboutUs />
            <Projects />
            {/* <FeaturedProjects /> */}
        
        </>
    )
}