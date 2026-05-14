import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import IconDragon from "@/app/Icon-dragon";

export default async function Page() {
  const { userId } = await auth();

  if (userId) return redirect("/dashboard");

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-6">
      <IconDragon
        viewBox="0 0 32 32"
        className="max-h-48 mb-[-2rem]"
        aria-hidden="true"
      />

      <h1 className="text-5xl font-black text-center tracking-tight text-black">
        Assoumax &mdash; Dojo{" "}
      </h1>
      <p className="text-lg text-black/60">
        <Link href="/sign-up" className="underline text-[#891b60]">
          Sign up
        </Link>{" "}
        or{" "}
        <Link href="/sign-in" className="underline text-[#bb1bca]">
          login
        </Link>{" "}
      </p>
    </div>
  );
}
