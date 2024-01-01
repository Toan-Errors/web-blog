"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    import("preline/preline");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      // @ts-ignore
      HSStaticMethods.autoInit(); // Use HSStaticMethods here
    }, 100);
  }, [path]);

  return null;
}
