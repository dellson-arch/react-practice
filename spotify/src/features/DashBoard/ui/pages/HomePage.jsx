import { allSongs } from "../../api/SongsApi";
import SongCard from "../components/SongCard";

const HomePage = () => {
  let songs = allSongs();

  return (
    <div className=" bg-zinc-900 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {songs.map((elem) => {
        return <SongCard song={elem} key={elem.id} />;
      })}
    </div>
  );
};

export default HomePage;
