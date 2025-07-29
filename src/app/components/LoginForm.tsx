"use client";
import { useState } from "react";


export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <form>
        <div className="flex flex-col gap-2 w-full max-w-xs">
          <label>Name</label>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              console.log(username);
            }}
            required
            className="border-2 rounded-md border-gray-300"
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border-2 rounded-md border-gray-300"
          />
          <button
            type="submit"
            className="cursor-pointer bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"

          >
            Login
          </button>
        </div>
      </form>
    </>
  );
}