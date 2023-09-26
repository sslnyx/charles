import { useOutletContext } from "react-router-dom"
import StackTextAndImage from "../../components/StackTextAndImage"
// import LearnMoreLink from "../../components/LearnMoreLink"
import SubBtn from "../../components/SubBtn"

const HomeOverview = () => {

    const data = useOutletContext()

    return (
        <section id="overview">
            <div className="container">
                <StackTextAndImage {...data.pages.home.stackImageData} useIntersectionObserver={false}/>
                <SubBtn to={"/location"}>Learn More About Our Location</SubBtn>
            </div>
        </section>
    )
}

export default HomeOverview