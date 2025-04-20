import React from 'react';
import Projects from '../../api/project'
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ProjectSectionS2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    var settings = {
        dots: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <section className="related-projects-section">
            <div className="auto-container">
                <div className="sec-title centered">
                    <div className="title">Related PROJECTS</div>
                    <h2>Our Latest Case Works</h2>
                </div>
                <div className="three-item-carousel">
                    <Slider {...settings}>
                        {Projects.slice(0, 4).map((project, prj) => (
                            <div className="gallery-block" key={prj}>
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src={project.pImg} alt="project" className="img img-responsive" />
                                        <div className="overlay-box">
                                            <div className="overlay-inner">
                                                <div className="content">
                                                    <Link onClick={ClickHandler} to={`/project-single/${project.slug}`} className="icon flaticon-plus"></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                    <div className="lower-content">
                                        <div className="title">{project.title}</div>
                                        <h5><Link onClick={ClickHandler} to={`/project-single/${project.slug}`}>{project.subTitle}</Link></h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                </div>
            </div>
        </section>
    );
}

export default ProjectSectionS2;