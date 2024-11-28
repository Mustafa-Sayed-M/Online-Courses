import React from 'react';

function VideoContainer() {

    const videoRef = React.useRef(null);
    const [videoPaused, setVideoPaused] = React.useState(false);

    React.useEffect(() => {
        if (window.sessionStorage.getItem('videoPaused') === 'true') {
            setVideoPaused(true);
            videoRef.current.pause();
        };
    }, []);

    const handleVideoClick = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setVideoPaused(false);
                window.sessionStorage.setItem('videoPaused', false);
            } else {
                videoRef.current.pause();
                setVideoPaused(true);
                window.sessionStorage.setItem('videoPaused', true);
            }
        }
    };

    return (
        <div className='video-container cursor-pointer relative'>
            {/* Overlay */}
            <div
                onClick={handleVideoClick}
                className={`absolute z-10 top-0 left-0 w-full h-full flex items-center justify-center text-5xl text-orange-color-50 backdrop-blur-sm bg-black/20 rounded-xl transition ${!videoPaused && "opacity-0 -z-10"}`}
            >
                <i className={`fa-regular fa-circle-play`}></i>
            </div>
            {/* Video */}
            <video
                loop
                onClick={handleVideoClick}
                src={`${process.env.PUBLIC_URL}/assets/landing.mp4`}
                autoPlay
                ref={videoRef}
                muted
                className='rounded-xl'
            ></video>
        </div>
    )
}

export default VideoContainer;