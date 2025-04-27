import VideoCard from '@/components/VideoCard';

export default function Home() {
  const mockFeedData = [
    { id: 1, title: 'Eladó Kismacska (Aranyos)', price: 'Ingyen elvihető', location: 'Budapest' },
    { id: 2, title: 'Használt bicikli', price: '15.000 Ft', location: 'Debrecen' },
    { id: 3, title: 'Korrepetálás Matematikából', price: '5.000 Ft / óra', location: 'Online' },
    { id: 4, title: 'Albérlet Kiadó (Napfényes)', price: '120.000 Ft / hó', location: 'Szeged' },
  ];

  return (
    // Ez a main elem a teljes képernyőt célozza, görgethető, snap-el, és van alsó paddingja
    <main className="h-screen overflow-y-auto snap-y snap-mandatory pb-16"> {/* pb-16 a nav bar magassága (h-16) miatt */}
      {mockFeedData.map(video => (
        <VideoCard key={video.id} videoData={video} />
      ))}
    </main>
  );
}
