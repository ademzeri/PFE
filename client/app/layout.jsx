import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/globals/variables.scss";
import AuthProvider from "./lib/authProvider/authProvider"
export const metadata = {
  title: "PixelBoard",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body>
      <AuthProvider>
        {children}
      </AuthProvider>
        </body>
    </html>
  );
}
