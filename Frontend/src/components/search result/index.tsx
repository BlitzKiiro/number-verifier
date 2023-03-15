import cn from "classnames";

interface resultType {
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
}

const SearchResult = ({ result }: { result: resultType }) => {
  return (
    <div className='flex flex-col  gap-4'>
      <p className='font-semibold'>
        carrier: <span className='font-normal'>{result.carrier}</span>
      </p>
      <p className='font-semibold'>
        country_code: <span className='font-normal'>{result.country_code}</span>
      </p>
      <p className='font-semibold'>
        country_name: <span className='font-normal'>{result.country_name}</span>
      </p>
      <p className='font-semibold'>
        country_prefix:{" "}
        <span className='font-normal'>{result.country_prefix}</span>
      </p>
      <p className='font-semibold'>
        international_format:{" "}
        <span className='font-normal'>{result.international_format}</span>
      </p>
      <p className='font-semibold'>
        line_type: <span className='font-normal'>{result.line_type}</span>
      </p>
      <p className='font-semibold'>
        local_format: <span className='font-normal'>{result.local_format}</span>
      </p>
      <p className='font-semibold'>
        locaction:{" "}
        <span className='font-normal'>{result.locaction ?? "unknown"}</span>
      </p>
      <p className='font-semibold'>
        number: <span className='font-normal'>{result.number}</span>
      </p>
      <p className='font-semibold'>
        valid:{" "}
        <span className='font-normal'>
          {result.valid ? (
            <span className='text-green-600'>Valid</span>
          ) : (
            <span className='text-red-600'>Not Valid</span>
          )}
        </span>
      </p>
    </div>
  );
};

export default SearchResult;
