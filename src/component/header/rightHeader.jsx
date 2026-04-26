function RightHeader() {
  return (
    <div className="flex items-center justify-end gap-6">
      {/* Menu Links */}
      <ul className="flex items-center gap-6 list-none p-0 m-0">
        <li className="text-[#b3b3b3] text-sm cursor-pointer hover:text-white transition-colors">
          Premium
        </li>
        <li className="text-[#b3b3b3] text-sm cursor-pointer hover:text-white transition-colors">
          Support
        </li>
        <li className="text-[#b3b3b3] text-sm cursor-pointer hover:text-white transition-colors">
          Download
        </li>
      </ul>

      {/* Divider */}
      <div className="bg-[#404040] h-6 w-px"></div>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <button className="text-[#b3b3b3] text-sm bg-transparent border-none cursor-pointer hover:text-white transition-colors flex items-center gap-2">
          <svg data-encore-id="icon" role="img" aria-hidden="true" className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z"></path>
            <path d="M8 2.8a.75.75 0 0 0-.75.75v4.554a.75.75 0 0 0 1.5 0V3.55a.75.75 0 0 0-.75-.75z"></path>
            <path d="M4.992 8.793 8 11.802l3.008-3.009a.75.75 0 1 0-1.06-1.061L8 10.282l-2.048-2.048a.75.75 0 0 0-1.06 1.06z"></path>
          </svg>
          Install App
        </button>

        <button className="text-[#b3b3b3] text-sm bg-transparent border-none cursor-pointer hover:text-white transition-colors font-medium">
          Sign up
        </button>

        <button className="bg-white text-black font-bold px-8 py-2 rounded-full text-sm hover:scale-105 transition-transform">
          Log in
        </button>
      </div>
    </div>
  );
}

export default RightHeader;