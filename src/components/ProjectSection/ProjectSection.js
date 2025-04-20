import React from 'react';
import Projects from '../../api/project'
import { Link } from "react-router-dom";
import cImg from '../../images/resource/cta-bg.png'
import Isotope from 'isotope-layout';




const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ProjectSection = (props) => {

    const [isotope, setIsotope] = React.useState(null);
    const [filterKey, setFilterKey] = React.useState('*');;


    React.useEffect(() => {
        setIsotope(
            new Isotope('.filter-container', {
                itemSelector: '.filter-item',
                layoutMode: 'fitRows',
            })
        );
    }, []);


    React.useEffect(() => {
        if (isotope) {
            filterKey === '*'
                ? isotope.arrange({ filter: `*` })
                : isotope.arrange({ filter: `.${filterKey}` });
        }
    }, [isotope, filterKey]);



    return (

        <section className="gallery-section">
            <div className="pattern-layer" style={{ backgroundImage: `url(${cImg})` }}></div>
            <div className="auto-container">
                <div className="mixitup-gallery">

                    <div className="sec-title">
                        <div className="clearfix">

                            <div className="pull-left">
                                <div className="title">RECENT PROJECTS</div>
                                <h2>Our Latest Case Works</h2>
                            </div>

                            <div className="pull-right">
                                <div className="filters clearfix">


                                    <ul>
                                        <li onClick={() => setFilterKey('*')}>All</li>
                                        <li onClick={() => setFilterKey('development')}>Development</li>
                                        <li onClick={() => setFilterKey('marketing')}>Markeging</li>
                                        <li onClick={() => setFilterKey('media')}>Media</li>
                                        <li onClick={() => setFilterKey('optimization')}>Optimization</li>
                                    </ul>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="filter-list row clearfix filter-container">
                        {Projects.slice(0, 6).map((project, prj) => (
                            <div className={`gallery-block col-lg-4 col-md-6 col-sm-12 filter-item ${project.FilterName}`} key={prj}>
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
                    </div>

                    <div className="btn-box text-center">
                        <Link onClick={ClickHandler} to="/projects" className="theme-btn btn-style-eight"><span className="txt">View More</span></Link>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ProjectSection;