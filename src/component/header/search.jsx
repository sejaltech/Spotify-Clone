function SearchBox() {
  return (
    <div className="flex items-center bg-[#1f1f1f] px-4 py-2 rounded-full w-[400px] hover:bg-[#282828] transition-colors">

      {/* Search Icon */}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#b3b3b3" className="hover:fill-white transition-colors">
        <path d="M10 2a8 8 0 105.293 14.293l4.207 4.207 1.414-1.414-4.207-4.207A8 8 0 0010 2z"/>
      </svg>

      {/* Input */}
      <input
        type="text"
        placeholder="What do you want to play?"
        className="bg-transparent outline-none text-white px-3 w-full placeholder:text-[#b3b3b3] placeholder:text-sm"
      />
    </div>
  );
}

export default SearchBox;