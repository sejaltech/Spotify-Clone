import spotifyData from '../../data/spotify.json';
import './rightpanel.css';

function RightPanel() {
  return (
    <div className="w-full h-[100vh] bg-[#151515] rounded-lg p-4">
      
      <section className="TrendingSection">
        <h2 className="text-xl font-bold mb-4">Trending Songs</h2>

        <div className="SongsCard">
          {spotifyData.Spotify.map((song) => (
            <div key={song.id} className="SongItem">
              <img
                src={song.src}
                alt={song.title}
              />
              <h3>
                {song.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default RightPanel;