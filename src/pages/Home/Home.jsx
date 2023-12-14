import "./home.css";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const filter = createFilterOptions();


function Home() {
  const [value, setValue] = React.useState(null);

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="flex flex-col gap-10 h-screen back-img   ">
      <div className="flex gap-4 text-6xl font-[Barlow] text-gray-700 font-bold justify-center items-center mt-60">
        <h1 className="text-blue-700">1500+</h1> Jobs Posted Last Week
      </div>
      <div className="p-10 bg-[#ffffff4f] mx-60 rounded-xl">
        <div className="flex gap-8 justify-center">
        <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === 'string') {
            setValue({
              title: newValue,
            });
          } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setValue({
              title: newValue.inputValue,
            });
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);
  
          const { inputValue } = params;
          // Suggest the creation of a new value
          const isExisting = options.some((option) => inputValue === option.title);
          if (inputValue !== '' && !isExisting) {
            filtered.push({
              inputValue,
              title: `Add "${inputValue}"`,
            });
          }
  
          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="free-solo-with-text-demo"
        options={top100Films}
        getOptionLabel={(option) => {
          // Value selected with enter, right from the input
          if (typeof option === 'string') {
            return option;
          }
          // Add "xxx" option created dynamically
          if (option.inputValue) {
            return option.inputValue;
          }
          // Regular option
          return option.title;
        }}
        renderOption={(props, option) => <li {...props}>{option.title}</li>}
        sx={{ width: 300 }}
        freeSolo
        renderInput={(params) => (
          <TextField
            {...params}
            label="Free solo with text demo"
            InputLabelProps={{
              shrink: true,
              
            }}
          />
        )}
      />
          <FormControl
            sx={{ m: 0, minWidth: 200 }}
            className="bg-white rounded-md"
          >
            <InputLabel id="demo-simple-select-autowidth-label">
              Area
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              autoWidth
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Twenty</MenuItem>
              <MenuItem value={21}>Twenty one</MenuItem>
              <MenuItem value={22}>Twenty one and a half</MenuItem>
            </Select>
          </FormControl>
          <input
            type="text"
            id="What you are looking for?"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5"
          />
          <a className="flex gap-2 bg-slate-600 pr-10 pl-8 rounded-md text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              id="search"
              width={20}
              color=""
            >
              <path
                fill="#231f20"
                d="M242.36,96.64l-7.41,13a95.68,95.68,0,0,0-130.47,35.93l-13-7.4A110.69,110.69,0,0,1,242.36,96.64Z"
              ></path>
              <path
                fill="#231f20"
                d="M322.36,58.4c-68.1-73-182.91-77-255.92-8.91A181.08,181.08,0,0,0,307.87,319.32q2.84-2.43,5.59-5c1.84-1.71,3.63-3.46,5.38-5.23A181.08,181.08,0,0,0,322.36,58.4Zm14.73,128.7a147.21,147.21,0,0,1-147,142.1q-2.61,0-5.25-.09A146.27,146.27,0,0,1,82.31,282.4C26.94,223,30.19,129.7,89.55,74.33A147.21,147.21,0,0,1,337.09,187.1Z"
              ></path>
              <path
                fill="#fff"
                d="M242.36,96.64l-7.41,13a95.68,95.68,0,0,0-130.47,35.93l-13-7.4A110.69,110.69,0,0,1,242.36,96.64Z"
              ></path>
              <path
                fill="#231f20"
                d="M494.87,455.2,371.74,327.92l-49,45.73L445.89,501a33.3,33.3,0,0,0,23.3,10.58l1.19,0a33.53,33.53,0,0,0,24.49-56.39Z"
              ></path>
              <line
                x1="352.47"
                x2="308.34"
                y1="356.15"
                y2="308.84"
                fill="none"
              ></line>
              <rect
                width="15"
                height="64.69"
                x="322.9"
                y="300.15"
                fill="#231f20"
                transform="rotate(-43.01 330.367 332.477)"
              ></rect>
              <path
                fill="#231f20"
                d="M242.36,96.64l-7.41,13a95.68,95.68,0,0,0-130.47,35.93l-13-7.4A110.69,110.69,0,0,1,242.36,96.64Z"
              ></path>
            </svg>
            <button className="">Search</button>
          </a>
        </div>
      </div>
    </div>
  );
}
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
];

export default Home;
