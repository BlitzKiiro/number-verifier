import { useState } from "react";
import { TextInput } from "flowbite-react";

const SearchBar = ({ submitNumber }: { submitNumber: Function }) => {
  const [number, setnumber] = useState("");
  return (
    <div className='m-10'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitNumber(number);
        }}
      >
        <TextInput
          value={number}
          onChange={(v) => setnumber(v.target.value)}
          id='username3'
          placeholder='Phone number...'
          required={true}
          addon='🔍'
        />
      </form>
    </div>
  );
};

export default SearchBar;
