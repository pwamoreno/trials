export const courses = [
  {
    id: "java1",
    title: "Learning Java",
    author: "The Ghoul of the Family",
    duration: "5 hour 20 min",
    category: "Programming",
    image: "/file.svg",
  },
  {
    id: "javascript1",
    title: "Learning JavaScript",
    author: "The Ghoul of the Family",
    duration: "5 hour 20 min",
    category: "Programming",
    image: "/file.svg",
  },
  {
    id: "python1",
    title: "Learning Python",
    author: "The Ghoul of the Family",
    duration: "5 hour 20 min",
    category: "Programming",
    image: "/file.svg",
  },
  {
    id: "test1",
    title: "Unit tests",
    author: "The Ghoul of the Family",
    duration: "1 min",
    category: "Debugging",
    image: "/file.svg",
  },
  {
    id: "test2",
    title: "Edge and Test Cases",
    author: "The Ghoul of the Family",
    duration: "1 min",
    category: "Debugging",
    image: "/file.svg",
  },
  {
    id: "test3",
    title: "Design with Illustrator",
    author: "The Ghoul of the Family",
    duration: "1 min",
    category: "Design",
    image: "/file.svg",
  },
  {
    id: "test4",
    title: "Prototyping with Figma",
    author: "The Ghoul of the Family",
    duration: "1 min",
    category: "Design",
    image: "/file.svg",
  },
];

export interface Lecture {
    id: string
    title: string
    duration: string
    thumb: string
    videoUrl: string
}

export type courseContents = {
    [courseId: string]: Lecture
}

export const courseContents = {
  java1: [
    {
      id: "jav1Lec1",
      title: "Lecture 1: Intro to Java and Programming",
      duration: "30 min",
      thumb: "/file.svg",
      videoUrl: "https://res.cloudinary.com/dev-tuts/video/upload/jav1Lec1.mp4",
    },
    {
      id: "jav1Lec2",
      title: "Lecture 2: Writing Logic",
      duration: "30 min",
      thumb: "/file.svg",
      videoUrl: "https://res.cloudinary.com/dev-tuts/video/upload/jav1Lec2.mp4",
    },
    {
      id: "jav1Lec3",
      title: "Lecture 3: Control Statements",
      duration: "40 min",
      thumb: "/file.svg",
      videoUrl: "https://res.cloudinary.com/dev-tuts/video/upload/jav1Lec3.mp4",
    },
  ],
  javascript1: [
    {
      id: "js1Lec1",
      title: "Lecture 1: Intro to JavaScript and Programming",
      duration: "30 min",
      thumb: "/file.svg",
      videoUrl: "https://res.cloudinary.com/dev-tuts/video/upload/js1Lec1.mp4",
    },
  ],
  python1: [
    {
      id: "py1Lec1",
      title: "Lecture 1: Intro to Python and Programming",
      duration: "30 min",
      thumb: "/file.svg",
      videoUrl: "https://res.cloudinary.com/dev-tuts/video/upload/py1Lec1.mp4",
    },
  ],
  test1: [
    {
      id: "tst1Lec1",
      title: "Test Lecture 1: Welcome to Class",
      duration: "short",
      thumb: "/file.svg",
      videoUrl:
        "https://res.cloudinary.com/dta1affwu/video/upload/v1750797706/dev-tuts-testing_wcojl5.mov",
    },
  ],
};
