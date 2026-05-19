import type { MouseEventHandler, ReactNode } from "react";

const WAITLIST_URL = "https://tally.so/r/dW88DK";

type Props = {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export function WaitlistButton({ children, className, onClick }: Props) {
  return (
    <a href={WAITLIST_URL} className={className} onClick={onClick}>
      {children}
    </a>
  );
}
