import { PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MyCourseCard from "./MyCourseCard";

interface Course {
  id: string;
  title: string;
  author: string;
  duration: string;
  category: string;
  image: string;
}

interface Props {
  courses: Course[];
}

const Courses = ({ courses }: Props) => {
  return (
    <div>
      {courses.length === 0 ? (
        <div className="flex flex-col items-center justify-between space-y-14">
          <p className="font-bold">No courses found.</p>
          <Image
            src="/Asset4.svg"
            alt="No courses found"
            width={300}
            height={100}
          />
          <button className="flex items-center bg-black text-white text-sm font-bold w-fit hover:cursor-pointer py-2 px-4 rounded-md">
            Add Course
            <PlusIcon size={15} className="ml-2" />
          </button>
        </div>
      ) : (
        <div>
          <p className="font-bold text-2xl mb-3">My Courses</p>
          {courses.map((course) => (
            <div key={course.id} className="shadow py-2 my-4 rounded-md">
              <Link href={`/devtuts/courses/${course.id}`}>
                <MyCourseCard name={course.title} duration={course.duration} image={course.image}/>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;
