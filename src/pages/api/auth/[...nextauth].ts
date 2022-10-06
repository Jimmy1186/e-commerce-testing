import NextAuth, { type NextAuthOptions } from "next-auth";
// import InstagramProvider from "next-auth/providers/instagram";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../server/db/client";
import { env } from "../../../env/server.mjs";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      // if (user) {
      //   // User object only passed on initial JWT creation
      //   const administrators = ["jimmy10614d005@gmail.com"];
      //   console.log(administrators.includes(user.email as string));
      //   if (administrators.includes(user.email as string)) {
      //     token.isAdmin = administrators.includes(user.email as string);
      //   }
      //   token.isAdmin = false;
      // }
      //  console.log("===== jwt =====");
      // console.log("user", user);
      // console.log("token", token);
      // console.log("user", account);
      console.log("token", token);
      return token;
    },
    session({ session, user, token }) {
 
      if (session.user) {
        session.user.id = user.id;

        const administrators = ["jimmy10614d005@gmail.com"];
        if (administrators.includes(user.email as string)) {
          session.isAdmin = administrators.includes(user.email as string);
        }else{
           session.isAdmin = false;
        }
       
        // session.user.isAdmin = token.isAdmin as boolean;
      }
  

      return session;
    },
  },
  session: {
    maxAge: 60*60*24,
    strategy:"database",
    updateAge:60*60
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    // InstagramProvider({
    //   clientId: process.env.INSTAGRAM_CLIENT_ID,
    //   clientSecret: process.env.INSTAGRAM_CLIENT_SECRET
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
