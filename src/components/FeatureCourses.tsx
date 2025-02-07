"use client";

import courseData from "@/data/music_course.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

const FeatureCourses = () => {
  const featuredCourses = courseData?.courses?.filter(
    (course: Course) => course?.isFeatured
  );

  return (
    <>
      <div className="py-12 bg-gray-900">
        <div>
          <div className="text-center">
            <h2 className="text-base text-teal-600 tracking-wide uppercase font-semibold">
              FEATURED COURSES
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Learn With The Best
            </p>
          </div>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {featuredCourses.map((course: Course) => {
              return (
                <div className="flex justify-center" key={course.id}>
                  <BackgroundGradient className="flex flex-col bg-white dark:bg-zinc-900 rounded-[22px] overflow-hidden h-full max-w-sm">
                    <div className="p-4 sm:p-6 flex flex-col items-center  text-center flex-grow">
                      <Image
                        src={`${course.image}`}
                        alt="image"
                        width="200"
                        height="100"
                      />
                      <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                        {course.title}
                      </p>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm flex-grow">
                        {course.description}
                      </p>
                      <Link href={`/courses/${course.slug}`}>Learn More</Link>
                    </div>
                  </BackgroundGradient>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-20 text-center">
          <Link
            href={"/courses"}
            className="px-4 py-2 bg-white text-neutral-700 border border-neutral-600 rounded hover:bg-gray-100 transition duration-200">
            View All Courses
          </Link>
        </div>
      </div>
    </>
  );
};

export default FeatureCourses;
