import { useState } from "react";
import cn from "classnames";
import SearchBar from "../../components/search bar";
import SearchResult from "../../components/search result";
import { search } from "../../services/numbers/numbersService";
import Loader from "../../components/loader";

const Home = () => {
  const [searchResult, setsearchResult] = useState(null);
  const [loading, setloading] = useState(false);
  const submitNumber = async (value: string) => {
    setsearchResult(null);
    setloading(true);
    const result = await search(value);
    setloading(false);
    setsearchResult(result);
  };

  return (
    <div className='flex flex-col justify-center items-center m-10'>
      <h1 className='text-2xl'>Enter the number you want to inquire</h1>
      <div className={cn("flex flex-col justify-center items-center")}>
        <SearchBar submitNumber={submitNumber} />
        {loading && <Loader />}
        {searchResult && <SearchResult result={searchResult} />}
      </div>
    </div>
  );
};

export default Home;
