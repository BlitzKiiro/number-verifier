import cn from "classnames";
import { Card } from "flowbite-react";
import { format } from "date-fns";

interface historyItem {
  carrier: string;
  country_code: string;
  country_name: string;
  country_prefix: string;
  international_format: string;
  line_type: string;
  local_format: string;
  locaction: string;
  number: string;
  valid: boolean;
  createdAt: string;
}

const HistoryCard = ({ item }: { item: historyItem }) => {
  return (
    <Card className={cn("w-[300px] md:w-[400px]")}>
      <p className='font-semibold'>
        Search Date:{" "}
        <span className='font-normal'>
          {format(new Date(item.createdAt), "yyyy-MM-dd")}
        </span>
      </p>
      <p className='font-semibold'>
        carrier: <span className='font-normal'>{item.carrier}</span>
      </p>
      <p className='font-semibold'>
        country_code: <span className='font-normal'>{item.country_code}</span>
      </p>
      <p className='font-semibold'>
        country_name: <span className='font-normal'>{item.country_name}</span>
      </p>
      <p className='font-semibold'>
        country_prefix:{" "}
        <span className='font-normal'>{item.country_prefix}</span>
      </p>
      <p className='font-semibold'>
        international_format:{" "}
        <span className='font-normal'>{item.international_format}</span>
      </p>
      <p className='font-semibold'>
        line_type: <span className='font-normal'>{item.line_type}</span>
      </p>
      <p className='font-semibold'>
        local_format: <span className='font-normal'>{item.local_format}</span>
      </p>
      <p className='font-semibold'>
        locaction: <span className='font-normal'>{item.locaction}</span>
      </p>
      <p className='font-semibold'>
        number: <span className='font-normal'>{item.number}</span>
      </p>
      <p className='font-semibold'>
        valid:{" "}
        <span className='font-normal'>
          {item.valid ? (
            <span className='text-green-600'>Valid</span>
          ) : (
            <span className='text-red-600'>Not Valid</span>
          )}
        </span>
      </p>
    </Card>
  );
};

export default HistoryCard;
