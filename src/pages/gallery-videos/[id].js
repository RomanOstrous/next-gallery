// pages/video/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const keyApi = 'wpmkn4mr5Nh2d919L4MXN3xToOekz7nFF50NazoPecx58zVLegPw2uwy';

const VideoPlayerPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [videoUrl, setVideoUrl] = useState('');
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      if (id) {
        try {
          const response = await fetch(`https://api.pexels.com/videos/videos/${id}`, {
            headers: { Authorization: keyApi },
          });

          if (response.ok) {
            const videoData = await response.json();
            setVideo(videoData);
            setVideoUrl(videoData.video_files[0].link);
          } else {
            console.error('Failed to fetch video');
          }
        } catch (error) {
          console.error('Error fetching video:', error);
        }
      }
    };

    fetchVideo();
  }, [id]);

  return (
    <div className="container mx-auto py-8 px-4">
      <button
        onClick={() => router.back()}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition"
      >
        Back
      </button>
      {videoUrl ? (
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            {video ? video.user.name : 'Video'}
          </h1>
          <video width="1000" controls className="rounded shadow w-[800px] h-[500px]">
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <p className="text-center text-gray-600">Loading...</p>
      )}
    </div>
  );
};

export default VideoPlayerPage;
