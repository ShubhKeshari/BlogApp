import { link } from "fs";
import React from "react";
interface User {
  id: number;
  name: string;
  username: string;
}
const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  return (
    <>
      <h1>Users Details</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.username}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
