// for test in browser link localhost:3000/api/auth/[...] according to file system
// signin -> http://localhost:3000/api/auth/signin
// providers -> http://localhost:3000/api/auth/providers
import NextAuth from "next-auth"
import {options} from "./options";

const handler = NextAuth(options)

export { handler as GET, handler as POST }