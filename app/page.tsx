import Image from "next/image";
import logo from "@/public/logo .png";
import AuthForm from "./components/AuthForm";
export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto flex justify-center items-center flex-col sm:w-full sm:max-w-md ">
        <Image height={"48"} width={"48"} src={logo} alt="logo"></Image>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 ">
          Sign in to your account
        </h2>
      </div>
      <AuthForm />
    </div>
  );
}
