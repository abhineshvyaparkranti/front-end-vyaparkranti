import React from 'react';
import Projects from '../../api/project'
import { Link } from "react-router-dom";
import Sidebar from './Sidebar';




const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ProjectPageSection = (props) => {


    return (

        <div className="sidebar-page-container">
            <div className="auto-container">
                <div className="row clearfix">
                    <Sidebar blLeft={props.blLeft}/>
                    <div className="content-side right-sidebar col-lg-8 col-md-12 col-sm-12">
                        <div className="row clearfix">
                            {Projects.slice(0, 6).map((project, prj) => (
                                <div className="gallery-block col-lg-6 col-md-6 col-sm-12" key={prj}>
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

                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProjectPageSection;