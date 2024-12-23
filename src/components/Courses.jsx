import React from "react";

const Courses = () => {
  const courseList = [
    { title: "Choosing a Driving Instructor", image: "path-to-image" },
    { title: "Automatic Driving Lessons", image: "path-to-image" },
    { title: "Foreign Language Lessons", image: "path-to-image" },
    { title: "Occupational Road Risk", image: "path-to-image" },
  ];

  return (
    <div className="container mx-auto my-12">
      <h2 className="text-3xl font-bold text-center mb-6">Popular Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courseList.map((course, index) => (
          <div
            key={index}
            className="border rounded shadow p-4 flex flex-col items-center"
          >
            <img
              src={course.image}
              alt={course.title}
              className="h-32 w-32 mb-4"
            />
            <h3 className="text-xl font-semibold">{course.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
