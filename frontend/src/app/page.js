"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Landing from "../app/components/landing";
import Navbar from "../app/components/navbar";
import Posts from "./components/posts";

export default function Home() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for authentication

  return (
    <div>
      {isLoggedIn ? (
        <div className="min-h-screen bg-gray-100">
          <Navbar Link={Link} />
          <Posts Link={Link} />
        </div>
      ) : (
        <Landing router={router} setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}
