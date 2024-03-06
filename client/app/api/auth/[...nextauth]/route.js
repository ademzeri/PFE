import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { LoginRoute } from "../../routes/LoginRoute";

const handler = NextAuth({
    providers:[
        CredentialsProvider({
          name: 'Credentials',
    
          credentials: {
            email: { label: "email", type: "email" },
            password: { label: "password", type: "password" }
          },
          async authorize(credentials) {
            const user = await LoginRoute(credentials);
            console.log(user)
            if(user.ok){
                if(!user.newUser){
                return Promise.resolve(user)
            }else{
                console.log("first login")
            }
            }else{
                
                return Promise.resolve(null);
            }
            return user;
          }
        })
      ],
      session:{
        strategy: "jwt"
      },
      pages:{
        signIn: "/login"
      }
});
 export {handler as GET, handler as POST}
 
