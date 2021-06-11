import React from 'react'
import "../css/LeftWidget.css"

function LeftWidget() {
    return (
        <div className="leftWidget">
          <iframe className="newsWidget" src="https://www.euronews.com/embed/timeline" scrolling="no" style={{border:"none", width:"25rem", height:"20rem", backgroundColor: "", color: "white"}}></iframe>
        </div>
    )
}

export default LeftWidget
