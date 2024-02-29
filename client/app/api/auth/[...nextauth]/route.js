import NextAuth from "next-auth";
import Providers from "next-auth/providers";
const ldap = require("ldapjs");

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: "LDAP",
      credentials: {
        username: { label: "DN", type: "text", placeholder: "" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const response = await fetch("/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        });
        const user = await response.json();
        if (user) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],
});
