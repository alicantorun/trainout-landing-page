import React from "react"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <iframe
    style={{ borderRadius: "24px", width: "100%", height: "100%" }}
    src={videoSrcURL}
    title={videoTitle}
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    frameBorder="0"
    webkitallowfullscreen="true"
    mozallowfullscreen="true"
    allowFullScreen
  />
)

export default Video
