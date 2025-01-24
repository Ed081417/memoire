"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Landing from "../app/components/landing";
import Navbar from "../app/components/navbar";
import Posts from "./components/posts";

export default function Home() {
  const router = useRouter();
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? (
        <div className="min-h-screen bg-gray-100">
          <Navbar Link={Link} />

          <Posts Link={Link} />
        </div>
      ) : (
        <Landing router={router} />
      )}
    </div>
  );
}
