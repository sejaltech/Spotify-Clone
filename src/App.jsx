import { Routes, Route } from "react-router-dom";
import SearchBox from "./component/header/search";
import RightHeader from "./component/header/rightHeader";
import RightPanel from "./component/Body/rightpanel";
import spotifyLogo from "./assets/spotify.png";
import homeIcon from "./assets/home.png";
import ErrorPage from "./component/Error404";

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* HEADER */}
      <div className="flex items-center justify-between px-6 py-4 gap-8">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <img
            src={spotifyLogo}
            alt="spotify"
            className="w-6 h-6 object-contain"
          />

          <div className="bg-[#1f1f1f] p-1.5 rounded-full hover:bg-[#282828] transition-colors cursor-pointer">
            <img
              src={homeIcon}
              alt="home"
              className="w-4 h-4 object-contain"
            />
          </div>
        </div>

        {/* CENTER SEARCH */}
        <div className="flex-grow flex justify-center">
          <SearchBox />
        </div>

        {/* RIGHT SIDE */}
        <RightHeader />

      </div>

      {/* MAIN CONTENT */}
      <div className="px-6 pb-6">
        <Routes>
          <Route path="/" element={<RightPanel />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;