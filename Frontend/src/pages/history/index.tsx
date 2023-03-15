import { useState, useEffect } from "react";
import cn from "classnames";
import HistoryCard from "../../components/history card";
import Loader from "../../components/loader";
import { searchHistory } from "../../services/numbers/numbersService";
import HistoryFilter from "../../components/history filter";

const History = () => {
  const [historyResult, sethistoryResult] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    (async () => {
      const reulst = await searchHistory();
      setloading(false);
      sethistoryResult(reulst);
    })();
  }, []);
  return (
    <div className='flex flex-col justify-center items-center my-10'>
      <h1 className='text-2xl'>Your search History</h1>
      <div
        className={"flex flex-col justify-center items-center my-10 gap-y-10"}
      >
        {loading && <Loader />}
        {!loading && (
          <>
            <HistoryFilter
              sethistoryResult={sethistoryResult}
              historyResult={historyResult as []}
            />
            <div className={cn("grid grid-cols-1  md:grid-cols-2 gap-6  ")}>
              {historyResult.map((item, index) => {
                return <HistoryCard item={item} key={index} />;
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default History;
