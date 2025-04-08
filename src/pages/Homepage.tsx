import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useUser } from "../contexts/userContext";

export function Homepage() {
  const { user } = useUser();
  useEffect(() => {
    console.log("Chỉ chạy 1 lần sau khi mount");
  }, []);

  useEffect(() => {
    console.log("Chạy lại khi user thay đổi", user);
  }, [user]);

  useEffect(() => {
    const timer = setInterval(() => console.log("tick"), 1000);

    return () => {
      clearInterval(timer);
      console.log("cleanup chạy trước khi chạy lại effect");
    };
  }, []);

  return <div>Homepage</div>;
}
