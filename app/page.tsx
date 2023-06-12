import Image from "next/image";
import LoginPage from "./components/login";
import { Suspense } from "react";
import Loading from "@/app/loading";
export default function Home() {
  return (
    <main className="h-full">
      <Suspense fallback={<Loading />}>
        <LoginPage />
      </Suspense>
    </main>
  );
}
