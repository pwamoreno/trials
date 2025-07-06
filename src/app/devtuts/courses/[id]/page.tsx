import { courseContents, courses } from "@/lib/data/courses"


const CoursePage = async ({ params }: { params: { id: string } }) => {
    const { id } = await params
    console.log("id", id)
    const course = courses.find(course => course.id === id)
    const videos = courseContents[id as keyof typeof courseContents]

    if(!course || !videos) return <p>Course not found.</p>
  return (
    <div>
        <p>{course.title}</p>
    </div>
  )
}

export default CoursePage