import { Transforming } from "../components/Main/Transforming";
import { Main_hero } from "../components/Main/Hero";
import { Animate } from "../components/Main/Animate";
import { WhyChooseUs } from "../components/Main/WhyChooseUs";
import { Services } from "../components/Main/Services";

export default function MainPage(){
    return(
        <>

            <Main_hero />
            <Transforming />
            <Animate />
            <WhyChooseUs />
            <Services />

        </>
    )
}
