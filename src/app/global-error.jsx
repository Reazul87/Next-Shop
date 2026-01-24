"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Application Error</h1>
          <p className="mb-6 opacity-80">
            {error?.message || "Something very bad happened"}
          </p>
          <button
            onClick={() => reset()}
            className="px-5 py-2 bg-white text-black rounded"
          >
            Reload App
          </button>
        </div>
      </body>
    </html>
  );
}
