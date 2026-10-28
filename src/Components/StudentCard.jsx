
import React from "react";

function StudentCard({ student }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-700">
          {student.name.charAt(0)}
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-800">
            {student.name}
          </h2>
          <p className="text-sm text-gray-500">
            Student ID: {student.id}
          </p>
        </div>
      </div>

      <div className="space-y-3 text-sm">
        <p className="break-words">
          <span className="font-semibold text-gray-700">
            Email:{" "}
          </span>
          <span className="text-gray-600">
            {student.email}
          </span>
        </p>

        <p>
          <span className="font-semibold text-gray-700">
            City:{" "}
          </span>
          <span className="text-gray-600">
            {student.address.city}
          </span>
        </p>

        <p>
          <span className="font-semibold text-gray-700">
            Phone:{" "}
          </span>
          <span className="text-gray-600">
            {student.phone}
          </span>
        </p>
      </div>
    </div>
  );
}

export default StudentCard;
