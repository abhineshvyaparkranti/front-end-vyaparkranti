import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

const VideoModal = () => {

  const [isOpen, setOpen] = useState(false)

  return (
    <React.Fragment>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="kxPCFljwJws" onClose={() => setOpen(false)} />

      <button className="wrap" onClick={() => setOpen(true)}><i className="icon flaticon-play-button" aria-hidden="true"></i></button>
    </React.Fragment>
  )
}

export default VideoModal;