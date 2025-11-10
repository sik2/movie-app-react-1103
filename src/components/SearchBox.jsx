function SearchBox({ keyword, onChangeKeyword }) {
  return (
    <div className="w-full mt-2.5">
      <div className="relative flex w-full max-w-[60%] mx-auto items-center gap-2 bg-white rounded-full shadow-sm">
        {/* 검색 아이콘 */}
        <div className="absolute top-1/2 left-3 -translate-y-1/2 flex items-center">
          🔍
        </div>

        {/* 입력창 */}
        <input
          type="text"
          placeholder="영화 제목을 입력하세요"
          value={keyword}
          onChange={onChangeKeyword}
          className="w-full block py-2 px-5 pl-9 border-0 outline-none rounded-full text-gray-800"
        />
      </div>
    </div>
  );
}

export default SearchBox;
