import { useRouter } from "next/router";
import { ReactNode, MouseEvent } from "react";

interface LinkProps {
  to: string;
  children: ReactNode;
}

const Link = ({ to, children }: LinkProps) => {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(to);
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
