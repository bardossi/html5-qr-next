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
          Vonalkódolvasó modul
        </h1>
       
        <div className="p-4 border border-gray-300 text-gray-800 rounded-lg bg-white">
         
            <ScannerExample onCodeScanned={handleCodeScanned} />
          
        </div>
        <div className="mt-4 text-gray-700">
          <strong>Beolvasott kód</strong>{" "}
          {lastScannedCode || "Még nincs beolvasva semmi"}
        </div>
      </header>
    </div>
  );
}
