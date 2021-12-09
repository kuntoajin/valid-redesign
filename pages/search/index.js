import dynamic from "next/dynamic"

const SearchPage = dynamic(() => import("../../src/components/pages/search"))

const Search = () => <SearchPage />

export default Search;
