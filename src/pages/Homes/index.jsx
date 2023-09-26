// import {useEffect} from 'react'
import { useOutletContext } from "react-router-dom"
import StackTextAndImage from "../../components/StackTextAndImage"
import SitePlan from "./SitePlan"
import Section from "../../components/Section"
import SubBtn from "../../components/SubBtn"
import { Helmet } from "react-helmet"

const Homes = () => {

    const { pages: { homes: { stackImageData, section } } } = useOutletContext()

    return (
        <div className="page-homes">
            <Helmet title="Homes" />
            <section>
                <div className="container">
                    <StackTextAndImage {...stackImageData} />
                </div>
            </section>

            <SitePlan />

            <Section {...section} />

            <div className="container">
                <SubBtn to="/passive-built">Learn More About<br />Our  Passive House Design</SubBtn>
            </div>
            
        </div>
    )
}

export default Homes