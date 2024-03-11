'use client'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // Corrected import
import { useEffect } from "react";

const Home = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session && !session.user.exists) {
      router.push('/auth/register');
    }
  }, [session, router]);

  if (!session || !session.user.exists) {
    return <p>Redirecting...</p>;
  }

  return (
    <div>
      <p>dashboard</p>
    </div>
  );
};

export default Home;