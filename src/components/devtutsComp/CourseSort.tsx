type Props = {
  selected: string;
  setSelected: (value: string) => void;
  categories: string[];
};

const CourseSort = ({ selected, setSelected, categories }: Props) => {
  return (
    <div className="flex flex-col">
      {["All", ...categories].map((category) => (
        <button
          key={category}
          className={`text-sm ${
            selected === category ? "bg-black text-white cursor-pointer" : ""
          }`}
          onClick={() => setSelected(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CourseSort;
