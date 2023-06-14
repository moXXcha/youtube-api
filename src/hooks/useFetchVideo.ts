import React from 'react'
import { useState, useEffect } from "react"

const YOUTUBE_SEARCH_API_URI = "https://www.googleapis.com/youtube/v3/search?";
const API_KEY = "API_KEY";

export const useFetchVideo = () => {
  const [videoId, setVideoId] = useState<string>("")

  useEffect(() => {
    const params = {
      key: API_KEY,
      q: "橘ひなの",
      type: "video",
      maxResults: "1",
      order: "viewCount",
    };

    const queryParams = new URLSearchParams(params)

    fetch(YOUTUBE_SEARCH_API_URI + queryParams)
    .then((res) => res.json())
    .then(
        (result) => {
        console.log("API success", result)

        if (result.items && result.items.length !== 0) {
            const firstItem = result.items[0]
            setVideoId(firstItem.id.videoId)
        }
    },
    (error) => {
        console.log(error)
    }
    )
  }, [])

  return videoId
}
