"use client";
import React, { useCallback, useState } from "react";
import { AdvancedExample } from "./AdvancedExample";
import { ScannerExample } from "./ScannerExample";

enum Example {
  Scanner = "scanner",
  Advanced = "advanced",
}

export default function Codereader() {
  const [selectedExample, selectExample] = useState<Example>(Example.Scanner);
  const [lastScannedCode, setLastScannedCode] = useState<string | undefined>(
    undefined
  );
  const handleCodeScanned = useCallback((code: string) => {
    setLastScannedCode(code);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="w-full max-w-3xl p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-xl font-semibold text-gray-800 text-center mb-4">
          Barcode Reader
        </h1>
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => selectExample(Example.Scanner)}
            className={`px-4 py-2 rounded-lg font-medium ${
              selectedExample === Example.Scanner
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            Show Scanner Example
          </button>
          <button
            onClick={() => selectExample(Example.Advanced)}
            className={`px-4 py-2 rounded-lg font-medium ${
              selectedExample === Example.Advanced
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            Show Advanced Example
          </button>
        </div>
        <div className="p-4 border border-gray-300 rounded-lg bg-gray-50">
          {selectedExample === Example.Scanner && (
            <ScannerExample onCodeScanned={handleCodeScanned} />
          )}
          {selectedExample === Example.Advanced && (
            <AdvancedExample onCodeScanned={handleCodeScanned} />
          )}
        </div>
        <div className="mt-4 text-gray-700">
          <strong>Last scanned code:</strong>{" "}
          {lastScannedCode || "No code scanned yet"}
        </div>
      </header>
    </div>
  );
}
