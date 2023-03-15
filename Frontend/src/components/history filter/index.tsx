import { useEffect, useMemo, useState } from "react";
import { Checkbox, Label, TextInput } from "flowbite-react";
import { format } from "date-fns";

interface propTypes {
  historyResult: any[];
  sethistoryResult: Function;
}

const HistoryFilter = ({ historyResult, sethistoryResult }: propTypes) => {
  const fullList = useMemo(() => historyResult, []);

  const [filters, setfilters] = useState({
    validOnly: false,
    number: "",
    date: "",
  });

  useEffect(() => {
    const filteredList = fullList.filter((i) => {
      const validityFilter = filters.validOnly ? i.valid : true;
      const numberFilter = filters.number
        ? i.number.startsWith(filters.number)
        : true;
      const dateFilter = filters.date
        ? format(new Date(i.createdAt), "yyyy-MM-dd") === filters.date
        : true;
      return validityFilter && numberFilter && dateFilter;
    });
    sethistoryResult(filteredList);
  }, [filters]);

  return (
    <div className='flex md:justify-center items-center gap-6 flex-wrap'>
      <div>
        <div className='mb-2 block'>
          <Label htmlFor='number' value='Phone Number' />
        </div>
        <TextInput
          onChange={(e) => {
            setfilters({
              ...filters,
              number: e.target.value,
            });
          }}
          id='number'
          placeholder='number..'
          required={true}
        />
      </div>
      <div>
        <div className='mb-2 block'>
          <Label htmlFor='seachDate' value='Pick Date' />
        </div>
        <input
          onChange={(e) => {
            setfilters({
              ...filters,
              date: e.target.value,
            });
          }}
          type='date'
          id='searchDate'
          name='searchDate'
        ></input>
      </div>
      <div className='flex items-center gap-2'>
        <Checkbox
          id='valid'
          onChange={(e) => {
            setfilters({
              ...filters,
              validOnly: e.target.checked,
            });
          }}
        />
        <Label htmlFor='valid'>Valid Only</Label>
      </div>
    </div>
  );
};

export default HistoryFilter;
