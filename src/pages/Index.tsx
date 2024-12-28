import { Book, BookOpen, GraduationCap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import React from "react";

const courses = [
  {
    id: 1,
    title: "HTML",
    description: "Learn the fundamentals of web structure with HTML5",
    icon: <BookOpen className="w-10 h-10 text-blue-400" />,
    color: "blue",
  },
  {
    id: 2,
    title: "CSS",
    description: "Master web styling and responsive design with CSS3",
    icon: <Book className="w-10 h-10 text-orange-400" />,
    color: "orange",
  },
  {
    id: 3,
    title: "JavaScript",
    description: "Build interactive web applications with JavaScript",
    icon: <GraduationCap className="w-10 h-10 text-green-400" />,
    color: "green",
  },
  {
    id: 4,
    title: "HTML, CSS & JavaScript",
    description: "Comprehensive web development bundle covering all essentials",
    icon: <BookOpen className="w-10 h-10 text-purple-400" />,
    color: "purple",
  },
  {
    id: 5,
    title: "Java",
    description: "Learn object-oriented programming with Java",
    icon: <Book className="w-10 h-10 text-red-400" />,
    color: "red",
  },
  {
    id: 6,
    title: "Python",
    description: "Master Python programming from basics to advanced",
    icon: <GraduationCap className="w-10 h-10 text-yellow-400" />,
    color: "yellow",
  },
];

const colorClasses = {
  blue: "bg-blue-500/20",
  orange: "bg-orange-500/20",
  green: "bg-green-500/20",
  purple: "bg-purple-500/20",
  red: "bg-red-500/20",
  yellow: "bg-yellow-500/20",
};

const CourseCard = ({ course }) => (
  <Card
    key={course.id}
    className="group hover:scale-105 transition-transform duration-300 bg-card border-border"
  >
    <CardHeader>
      <div className="flex items-center justify-center mb-4">{course.icon}</div>
      <CardTitle className="text-2xl text-center">{course.title}</CardTitle>
      <CardDescription className="text-center text-muted-foreground">
        {course.description}
      </CardDescription>
    </CardHeader>
    <CardContent className="flex justify-center">
      <div className={`${colorClasses[course.color]} w-16 h-1 rounded-full`} />
    </CardContent>
    <CardFooter className="flex justify-center pb-6">
      <Button
        className="group-hover:translate-y-[-2px] transition-transform duration-300"
        variant="default"
        aria-label={`Learn more about ${course.title}`}
      >
        Learn More
      </Button>
    </CardFooter>
  </Card>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">Welcome to CourseWave</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Embark on your learning journey with our comprehensive courses designed for modern web
            development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default React.memo(Index);
