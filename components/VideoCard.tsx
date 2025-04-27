import React from 'react';

// Típusdefiníció a videó adatokhoz (TypeScript)
interface VideoData {
  id: number;
  title: string;
  price: string;
  location: string;
  videoUrl?: string | null; // Videó URL opcionális
}

// Props interfész a komponenshez
interface VideoCardProps {
  videoData?: VideoData; // A videoData prop opcionális lehet a placeholder miatt
}

const VideoCard: React.FC<VideoCardProps> = ({ videoData }) => {
  // Placeholder adatok, ha nem kapunk prop-ot
  const placeholderData: VideoData = {
    id: 0,
    title: 'Placeholder Hirdetés Címe',
    price: 'Ár',
    location: 'Helyszín',
    videoUrl: null
  };

  // Ha kaptunk adatot, azt használjuk, különben a placeholdert
  const data = videoData || placeholderData;

  return (
    // Magas kártya, kitölti a helyet, snap igazítás, relatív pozicionálás az overlay-ekhez
    <div className="h-screen w-full bg-white flex flex-col items-center justify-center p-4 snap-start relative">

      {/* Videó Placeholder - Kitölti a hátteret */}
      <video
        src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Információk és Gombok - Overlay a videó felett */}
      <div className="absolute bottom-20 left-4 right-4 text-white z-10"> {/* Feljebb tolva a nav sáv miatt */}
          {/* Információk */}
          <div className="mb-4">
              {/* TODO: Text shadow CSS hozzáadása a globals.css-hez? */}
              <h3 className="text-lg font-semibold">{data.title}</h3>
              <p>{data.price}</p>
              <p className="text-sm">{data.location}</p>
          </div>
      </div>

       {/* Akció gombok Placeholder - Overlay, jobb oldalon */}
       <div className="absolute right-4 bottom-20 flex flex-col space-y-4 z-10"> {/* Feljebb tolva */}
           {/* TODO: Valódi ikonok használata (pl. shadcn/ui icon library?) */}
           <button className="text-white text-3xl hover:text-red-500">{'<3'}</button>
           <button className="text-white text-3xl hover:text-blue-500">💾</button>
       </div>

    </div>
  );
};

export default VideoCard;