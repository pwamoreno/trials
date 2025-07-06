import { Search, X } from "lucide-react";


type Props = {
  search: string;
  setSearch: (value: string) => void;
};

const CourseFilter = ({ search, setSearch }: Props) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };

  return (
    <div>
      <p className="font-bold text-xl mb-3">Filter Courses</p>
      <div className="flex items-center gap-2 py-1.5 px-2 rounded-sm border border-slate-400 focus-within:ring-2">
        <input
          type="text"
          placeholder="search..."
          autoComplete="off"
          value={search}
          onChange={handleChange}
          className="flex-1 appearance-none outline-none border-none bg-transparent text-sm"
        />
        <button className="hover:cursor-pointer">
          {search === "" ? (
            <Search className="w-4 h-4" />
          ) : (
            <X
              className="w-4 h-4"
              onClick={() => setSearch("")}
              aria-label="Clear search"
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default CourseFilter;
