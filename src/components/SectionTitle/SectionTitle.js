import React from 'react'

const SectionTitle = (props) => {
    return (
        <div className="sec-title centered">
            <div className="title">{props.subTitle}</div>
            <h2>{props.MainTitle}</h2>
        </div>
    )
}

export default SectionTitle;