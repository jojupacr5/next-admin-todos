import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvier from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvier({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
