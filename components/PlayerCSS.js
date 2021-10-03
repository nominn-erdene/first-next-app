import 'videojs-youtube'

const PlayerCSS = () => {
  return (
    <>
      <h1>Mash goy duu shuu sonsood uzeerei</h1>
      <div data-vjs-player>
        <video
          id="my-video"
          className="video-js vjs-theme-city"
          playsInline
          controls
          preload="auto"
          data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=V5M2WZiAy6k"}] }'
        ></video>
      </div>
    </>
  )
}

export default PlayerCSS
