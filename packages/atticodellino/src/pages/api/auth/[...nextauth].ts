import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers  p
  providers: [
    Credentials({
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied

        if (
          credentials &&
          credentials?.username === process.env.AUTH_LOGIN &&
          credentials?.password === process.env.AUTH_PWD
        ) {
          // Any object returned will be saved in `user` property of the JWT
          return { ...credentials, id: credentials.username };
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
};

export default NextAuth(authOptions);
