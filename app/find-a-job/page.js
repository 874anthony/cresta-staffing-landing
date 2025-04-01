"use client";
import { Suspense } from "react";

import FindJobPage from "@/layouts/FindJobPage";

export default function FindJob() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FindJobPage />
    </Suspense>
  );
}
