"use client";

import { ReactNode, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { AlertCircle, RefreshCcw } from "lucide-react";
import { Button } from "../ui/button";

function fallbackRender({ error, resetErrorBoundary }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-10 bg-white shadow-2xl rounded-xl">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 relative">
            <div className="absolute inset-0 bg-gray-200 rounded-full animate-pulse"></div>
            <AlertCircle className="h-24 w-24 text-gray-600 absolute inset-0" />
          </div>
          <h2 className="mt-8 text-center text-3xl font-extrabold text-gray-900">
            Oops! An error occurred
          </h2>
        </div>
        <div className="mt-4">
          <p className="text-center text-gray-500">
            We apologize for the inconvenience. Please try again or contact
            support if the problem persists.
          </p>
        </div>
        <div className="mt-6 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <p className="text-sm font-medium text-gray-700 mb-2">
            Error details:
          </p>
          <pre className="text-xs text-gray-600 whitespace-pre-wrap break-words bg-gray-100 p-3 rounded">
            {error.message}
          </pre>
        </div>
        <div className="mt-8">
          <Button
            onClick={resetErrorBoundary}
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out"
          >
            <RefreshCcw className="h-5 w-5 mr-2" />
            Try again
          </Button>
        </div>
      </div>
    </div>
  );
}

export const Boundary = ({ children }: { children: ReactNode }) => {
  const [errorKey, setErrorKey] = useState(0); // Key to reset the ErrorBoundary

  const handleReset = () => {
    // You can reset other state here as needed
    setErrorKey((prevKey) => prevKey + 1); // Increment key to force re-mount
  };

  return (
    <ErrorBoundary
      key={errorKey} // This will trigger re-mount of the boundary when errorKey changes
      fallbackRender={fallbackRender}
      onReset={handleReset} // Reset the error boundary state and re-render
    >
      {children}
    </ErrorBoundary>
  );
};
