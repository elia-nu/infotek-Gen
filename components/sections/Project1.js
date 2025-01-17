
import ProjectSlider1 from '../slider/ProjectSlider1'

export default function Project1() {
    return (
        <>
            <section className="project-section section-padding pt-0 fix" id="project">
            <div className="container">
                        <div className="section-title">
                            <span className="wow fadeInUp">Our Projects</span>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                We Solve IT Problems <br /> With Technology
                            </h2>
                        </div>
                   
                </div>
                <ProjectSlider1 showDots/>
            </section>
        </>
    )
}
