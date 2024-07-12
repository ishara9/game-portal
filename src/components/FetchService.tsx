import axios, { CanceledError } from "axios";
import React, { useEffect, useState } from "react";

interface User {
  name: string;
  age: number;
}

const FetchService = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  const controller = new AbortController();

  useEffect(() => {
    axios
      .get<User[]>("/users", { signal: controller.signal })
      .then((res) => setUsers(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
  }, []);

  return () => controller.abort();
};

export default FetchService;
