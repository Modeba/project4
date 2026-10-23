"use client";

import styles from "./page.module.css";
import { useState , useEffect} from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const isUser = false;

  if (!isUser) {
    router.push("/login");
  }

  return <div>Main Page</div>;
};