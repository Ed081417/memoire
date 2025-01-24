"use client"

import { useRouter } from "next/navigation"
import Landing from "../app/components/landing"

export default function Home() {
  const router = useRouter();
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? (
        <h1>Auth</h1>
      ) : (
        <Landing router={ router } />
      )}
    </div>
  );
}
