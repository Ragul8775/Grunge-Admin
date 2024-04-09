import NextAuth from "next-auth/next";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "../../../../lib/mongodb";


const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  
});
export { handler as GET, handler as POST };