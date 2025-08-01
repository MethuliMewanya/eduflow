"use client";

import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import Spotlight from "@/components/spotlight";
import LearningPathForm from "@/components/form"; // Adjust the path based on your folder

export default function Workflows() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          {/* <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <input
              type="text"
              placeholder="Enter your subject here"
              className="bg-transparent border border-gray-300 text-white rounded-2xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <br></br>
            <br></br>
            <input
              type="text"
              placeholder="Enter your marks here"
              className="bg-transparent border border-gray-300 text-white rounded-2xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div> */}
          <LearningPathForm />
          {/* Spotlight items */}
        </div>
      </div>
    </section>
  );
}
