import Link from "next/link";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center  p-24`}>
      <h1 className="text-4xl"> this is the hub page</h1>
      <ul className="p-10 text-2xl">
        <li className="space-y-3 flex flex-col">
          <Link href={"/about"}>about us</Link>
          <Link href={"/blog"}>blog</Link>
        </li>
      </ul>
    </main>
  );
}
