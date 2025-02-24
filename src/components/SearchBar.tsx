import { FormEvent, useState } from "react";
import { useSearchContext } from "../contexts/SearchContext";
import { MdTravelExplore } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { es } from "date-fns/locale/es";

const SearchBar = () => {
  const navigate = useNavigate();
  const search = useSearchContext();

  const [name, setName] = useState<string>(search.name);
  const [checkIn, setCheckIn] = useState<Date>(search.checkIn);
  const [checkOut, setCheckOut] = useState<Date>(search.checkOut);
  const [adultCount, setAdultCount] = useState<number>(search.asistentes);
  const [childCount, setChildCount] = useState<number>(search.visitantes);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    search.saveSearchValues(name, checkIn, checkOut, adultCount, childCount);
    navigate("/search");
  };

  const handleClear = () => {
    setName(""); // Restablece el nombre a vacío
    setCheckIn(new Date()); // Restablece la fecha de llegada a la fecha actual
    setCheckOut(new Date()); // Restablece la fecha de salida a la fecha actual
    setAdultCount(1); // Restablece el número de adultos a 1
    setChildCount(1); // Restablece el número de niños a 0
  };

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  return (
    <form
      onSubmit={handleSubmit}
      style={{ backgroundColor: "#af9efe" }}
      className="-mt-8 p-3 rounded shadow-md grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 items-center gap-4"
    >
      <div className="flex flex-row items-center flex-1 bg-white p-2 rounded-lg">
        <MdTravelExplore size={25} className="mr-2" />
        <input
          placeholder="Donde quieres trabajar?"
          className="text-md w-full focus:outline-none"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div className="flex bg-white px-2 py-1 gap-2 rounded-lg">
        <label className="items-center flex">
          Asisten:
          <input
            className="w-full p-1 focus:outline-none font-bold"
            type="number"
            min={1}
            max={20}
            value={childCount}
            onChange={(event) => setChildCount(parseInt(event.target.value))}
          />
        </label>
        <label className="items-center flex">
          Visitan:
          <input
            className="w-full p-1 focus:outline-none font-bold"
            type="number"
            min={0}
            max={20}
            value={adultCount}
            onChange={(event) => setAdultCount(parseInt(event.target.value))}
          />
        </label>
      </div>
      <div>
        <DatePicker
          selected={checkIn}
          onChange={(date) => setCheckIn(date as Date)}
          selectsStart
          startDate={checkIn}
          endDate={checkOut}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText="Fecha de llegada"
          locale={es}
          className="min-w-full bg-white p-2 focus:outline-none"
          wrapperClassName="min-w-full"
        />
      </div>
      <div>
        <DatePicker
          selected={checkOut}
          onChange={(date) => setCheckOut(date as Date)}
          selectsStart
          startDate={checkIn}
          endDate={checkOut}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText="Fecha de salida"
          locale={es}
          className="min-w-full bg-white p-2 focus:outline-none"
          wrapperClassName="min-w-full"
        />
      </div>
      <div className="flex gap-1">
        <button className="w-2/3 bg-blue-600 text-white h-full p-2 font-bold text-xl hover:bg-blue-500 rounded-lg">
          Buscar
        </button>
        <button
          className="w-1/3 bg-[#f06824] text-white h-full p-2 font-bold text-xl hover:bg-[#f09567]/90 rounded-lg"
          onClick={handleClear}
        >
          🗑️
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
