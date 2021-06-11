import React from 'react'
import '../css/Feed.css'
import PostBox from "./PostBox"
import db from "../firebase"
import LeftWidget from "./LeftWidget"
import {Helmet} from 'react-helmet'

function Feed() {
    return (
        <div className="feed">
          <Helmet>
                <style>{'body { background-color: silver; }'}</style>
            </Helmet>
          <LeftWidget />
        </div>
    )
}

export default Feed
