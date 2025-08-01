"use client";

import React, { useState } from "react";
import axios from "axios";

const LearningPathForm = () => {
  const [subject, setSubject] = useState("");
  const [marks, setMarks] = useState("");
  const [response, setResponse] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:9090/eduflow/generate", {
        subject: subject,
        marks: parseInt(marks),
      });

      setResponse(res.data.path || "Learning path generated!");
    } catch (error) {
      console.error("Error sending data:", error);
      setResponse("Error generating learning path.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-3xl pb-12 text-center md:pb-20 space-y-4"
    >
      <input
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Enter your subject here..."
        className="w-full bg-transparent border border-gray-300 text-white rounded-2xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <br />
      <input
        type="number"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
        placeholder="Enter your marks here"
        className="w-full bg-transparent border border-gray-300 text-white rounded-2xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <br />
      <button
        type="submit"
        className="mt-4 px-6 py-2 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
      >
        Generate Learning Path
      </button>

      {response && (
        <div className="mt-6 text-white bg-gray-800 p-4 rounded-xl">
          <h3 className="font-bold mb-2">Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </form>
  );
};

export default LearningPathForm;
