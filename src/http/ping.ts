import Elysia from "elysia";

export const heathCheck = new Elysia().get("/api/ping", async ({ set }) => {
  set.status = 200;

  return {
    message: "pong",
  };
});
