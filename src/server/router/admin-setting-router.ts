import { createProtectedRouter } from "./context";

// Example router with queries that can only be hit if the user requesting is signed in
export const adminSettingRouter = createProtectedRouter()
.query("getCategory", {
  resolve: async ({ ctx }) => {
    try {
      return await ctx.prisma.product_category.findMany({});
    } catch (e) {
      console.dir(e);
    }
  },
});
