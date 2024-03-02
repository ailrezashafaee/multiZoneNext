import { GetServerSidePropsContext } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

function BackButton() {
  const router = useRouter();

  const handleClick = () => {
    const url = new URL(router.asPath, window.location.origin);
    url.pathname = url.pathname.replace(router.basePath, "");
    window.location.assign(url.href);
  };

  return <button onClick={handleClick}>Back</button>;
}

export default function Blog() {
  return (
    <main className={`flex min-h-screen flex-col items-center p-24 `}>
      <h1 className="text-4xl">this is blog page</h1>
      <div>
        <ul className="p-10 space-y-3 text-2xl">
          <li className="space-y-3 ">
            <Link href={"/post"}>post1</Link>
          </li>
          <li className="text-red-400 cursor-pointer">
            <BackButton />
          </li>
          <li>
            <Link href={"/other"}>others in blog</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const basePath = context.req.headers["x-base-path"];

  return {
    props: {
      basePath,
    },
  };
}
