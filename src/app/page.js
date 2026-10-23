"use client";

import styles from "./page.module.css";
import { useState , useEffect} from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const rounter = useRouter();
  const isUser = false;
  if (!isUser) {
    rounter.push("/login");
  }

  return <div>Main Page</div>;
};