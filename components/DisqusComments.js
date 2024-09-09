import React from 'react'
import { DiscussionEmbed } from 'disqus-react'

const DisqusComments = ({ story_details }) => {


  const pageurl = typeof window !== 'undefined' ? window.location.href : ""
  const disqusConfig = {
    url: pageurl,
    identifier: story_details.href,
    title: story_details.Title
  }
  return (
    <DiscussionEmbed shortname='https-www-hindisexstory-app' config={disqusConfig} />


  )
}

export default DisqusComments