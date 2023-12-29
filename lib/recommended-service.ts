import { getSelf } from "./auth-service";
import { db } from "./db";

export const getRecommended = async () => {
  const users = await db.user.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });
  return users;
};
