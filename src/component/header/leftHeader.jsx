import Logo from "./logo";
import SearchBox from "./search";

function leftHeader() {
  return (
    <div className="flex items-center gap-4 p-4 bg-black">
      
      {/* Spotify Logo */}
      <Logo />

      {/* Home Icon */}
      <div className="bg-[#1f1f1f] p-2 rounded-full cursor-pointer">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M12 3l9 9h-3v9h-12v-9h-3z"/>
        </svg>
      </div>

      {/* Search Box */}
      <SearchBox />

    </div>
  );
}

export default leftHeader;
