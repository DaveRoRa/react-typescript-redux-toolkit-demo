import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchUsers } from "./userSlice.js";

export const UserView = () => {
  const users = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>List of Users</h2>
      {users.loading ? (
        "Loading..."
      ) : users.error ? (
        `Error ${users.error}`
      ) : users.users.length ? (
        <ul>
          {users.users.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
