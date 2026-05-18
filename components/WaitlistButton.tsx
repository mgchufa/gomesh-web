import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export function WaitlistButton({ children, className, onClick }: Props) {
  return (
    <Link href="/waitlist" className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
