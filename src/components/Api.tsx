import React, { useState, useEffect } from "react";
import { useFetchVideo } from "../hooks/useFetchVideo";

const Api = () => {
  const videoId = useFetchVideo();
  return (
    <iframe
      id="player"
      width="640"
      height="360"
      src={"https://www.youtube.com/embed/" + videoId}
      allowFullScreen
    />
  );
};

export default Api;
