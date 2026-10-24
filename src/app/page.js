"use client";

import styles from "./page.module.css";
import { useState , useEffect} from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const isUser = false;

  // useEffect waits for main page render to finish
  useEffect(() => {
    if (!isUser) {
      router.push("/login");
    }
  }, [isUser, router]);

  return <div>Main Page</div>;
};