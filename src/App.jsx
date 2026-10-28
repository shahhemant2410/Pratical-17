
import React, { useEffect, useState } from "react";
import StudentCard from "./Components/StudentCard";

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch student records.");
        }

        const data = await response.json();
        setStudents(data);
      } catch (err) {
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-blue-700 sm:text-4xl">
            Student List
          </h1>

          <p className="mt-3 text-gray-600">
            Student records retrieved using Fetch API
          </p>
        </header>

        {/* Total Students */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800">
            All Students
          </h2>

          <span className="rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-700">
            Total: {students.length}
          </span>
        </div>

        {/* Loading */}
        {loading && (
          <div className="rounded-xl bg-white p-10 text-center shadow-sm">
            <p className="animate-pulse text-lg font-medium text-blue-600">
              Loading student records...
            </p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
            <p className="font-semibold text-red-700">
              {error}
            </p>

            <button
              onClick={() => window.location.reload()}
              className="mt-4 rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700"
            >
              Retry
            </button>
          </div>
        )}

        {/* Student Cards */}
        {!loading && !error && (
          <>
            {students.length === 0 ? (
              <p className="rounded-xl bg-white p-8 text-center text-gray-500">
                No student records found.
              </p>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {students.map((student) => (
                  <StudentCard
                    key={student.id}
                    student={student}
                  />
                ))}
              </div>
            )}
          </>
        )}

        <footer className="mt-10 text-center text-sm text-gray-500">
          React JS | Fetch API | Tailwind CSS
        </footer>

      </div>
    </div>
  );
}

export default App;
