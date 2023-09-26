import siteLogo from "/img/register/logo.svg";
import { ReactSVG } from "react-svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useOutletContext } from "react-router-dom";

const SiteFooter = ({ presentationCenter, projectSite, sales, developer, disclaimer, scrollPosition }) => {

    // console.log(developer)

    return (
        <footer className='bg-gray text-bwhite p-5 realative z-10'>
            <div className='border-bwhite border-4'>
                <div className="container py-[50px] max-w-[1024px]">
                    <div className="mb-5 flex flex-col xl:flex-row -mx-6">
                        <div className="px-3 flex justify-center items-start mb-10 xl:mb-0">
                            <ReactSVG beforeInjection={(svg) => {
                                svg.setAttribute(
                                    "class",
                                    "w-[150px] md:w-[230px] h-auto fill-bwhite"
                                );
                            }} src={siteLogo} />
                            {/* <img className="w-[250px]" src={siteLogo} /> */}
                        </div>

                        <div className="flex-1"></div>

                        <div className="px-3 flex flex-col xl:flex-row items-center xl:items-start justify-end mb-5 xl:mb-0 text-center xl:text-left -mx-10">
                            <div className="xl:text-left flex px-10">
                                <div className='mb-5 flex justify-center'>
                                    <div className="">
                                        <h6>
                                            Presentation Centre:
                                        </h6>

                                        <a className="" target="_blank" href={presentationCenter.mapUrl}>
                                            {presentationCenter.address}&nbsp;
                                        </a>
                                        {/* <br className="xl:hidden" /> */}

                                        <span className="block ">
                                            {presentationCenter.note}
                                        </span>

                                        <p>
                                            <a href={
                                                `tel:${sales?.tel}`}>
                                                {sales?.tel}
                                            </a>
                                            {sales.tel2 ? (<a href={
                                                `tel:${sales?.tel2}`}>
                                                {" / " + sales.tel2}
                                            </a>) : ""} <br />

                                            <a href={`mailto:${sales.email}`}>{sales.email}</a>
                                        </p>


                                        <div className="">
                                            <h6>
                                                Site Address:
                                            </h6>

                                            <a target="_blank" href={projectSite.mapUrl}>
                                                {projectSite.address}
                                            </a>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="flex px-10">
                                <div className="mb-5 xl:mb-0 flex justify-center">
                                    <div>
                                        <h6 className="mb-3 text-center">Developed by:</h6>
                                        <div className="flex flex-row md:flex-col justify-center items-center">
                                            <LazyLoadImage scrollPosition={scrollPosition} className="mr-10 md:mr-0 w-[94px] h-[74px] object-contain" src={developer.logo} />
                                            <LazyLoadImage scrollPosition={scrollPosition} className="w-[150px] h-[112px] object-contain" src={developer.logo2} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex px-10">
                                <div className="">

                                    <h6 className="mb-3">{"Sales & Marketing by:"}</h6>
                                    <div className="flex justify-center">
                                        <LazyLoadImage scrollPosition={scrollPosition} className="w-[150px] h-[90px] object-contain mr-0 xl:mr-3 mb-3 xl:mb-0" src={sales.logo} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <p className="max-w-[991px] text-[0.65rem] leading-[0.85rem] mx-auto text-center">{disclaimer}</p>
                </div>
            </div>
        </footer>
    )
}

export default SiteFooter