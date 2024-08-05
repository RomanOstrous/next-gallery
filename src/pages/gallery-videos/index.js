import Link from 'next/link';
import { useEffect, useState } from 'react';

const keyApi = 'wpmkn4mr5Nh2d919L4MXN3xToOekz7nFF50NazoPecx58zVLegPw2uwy';

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('https://api.pexels.com/videos/search?query=nature&per_page=12', {
          headers: { Authorization: keyApi },
        });

        if (response.ok) {
          const data = await response.json();
          setVideos(data.videos);
        } else {
          console.error('Failed to fetch videos');
        }
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Video Gallery</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {videos.map((video) => (
          <div key={video.id} className="relative">
          <Link href={`/gallery-videos/${video.id}`} legacyBehavior>
              <div className="relative group">
                <img
                  src={video.image}
                  alt={video.user.name}
                  className="w-[400px] h-[200px] rounded shadow"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-4 bg-white rounded-full shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-black"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5 3l14 9-14 9V3z" />
                    </svg>
                  </button>
                </div>
              </div>
          </Link>
        </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
