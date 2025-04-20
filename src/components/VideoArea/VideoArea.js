import React,{useState} from 'react'
import ModalVideo from 'react-modal-video'
import mImg1 from '../../images/background/pattern-15.png'
import mImg2 from '../../images/resource/video-bg.png'

const VideoArea = (props) => {

    const [isOpen, setOpen] = useState(false)


    return (
        <section className="demo-section" style={{ backgroundImage: `url(${mImg1})` }}>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="counter-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <h2>Watch a Video Demo</h2>
                            <div className="text">Retarget past customers with second-chance offers and reach new audiences with geo-targeted campaigns during peak dining times using Forks’ push notifications.</div>
                            <span onClick={()=> setOpen(true)} className="lightbox-image theme-btn btn-style-three"><span className="txt">Play Video Now</span></span>
                        </div>
                    </div>
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="image titlt" data-tilt data-tilt-max="3">
                                <img src={mImg2} alt="" />
                                <span onClick={()=> setOpen(true)} className="lightbox-image video-box"><span className="fa fa-play"><i className="ripple"></i></span></span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="kxPCFljwJws" onClose={() => setOpen(false)} />
        </section>
    );
}

export default VideoArea;