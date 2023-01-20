const Trailer = ({ youtubeKey }) => {
  const stopVideo = () => {
    let iframe = document.querySelector('iframe');
    let video = document.querySelector('video');

    if (iframe) {
      let iframeSrc = iframe.src;
      iframe.src = iframeSrc;
    }
    if (video) {
      video.pause();
    }
  };

  return (
    <>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label
        htmlFor="my-modal-4"
        className="modal cursor-pointer"
        onClick={stopVideo}
      >
        <label className="modal-box xs:mx-2 max-w-5xl w-full" htmlFor="">
          <div
            style={{
              paddingBottom: '56.25%',
              position: 'relative',
              display: 'block',
              width: '100%',
            }}
          >
            <iframe
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
              }}
              src={`https://youtube.com/embed/${youtubeKey}`}
              title="Movie Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
              allowFullScreen
            />
          </div>
        </label>
      </label>
    </>
  );
};

export default Trailer;
