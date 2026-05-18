"use client";

import type { ButtonHTMLAttributes } from "react";

const TALLY_FORM_ID = "dW88DK";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export function TallyButton({ children, ...rest }: Props) {
  return (
    <button
      type="button"
      data-tally-open={TALLY_FORM_ID}
      data-tally-layout="modal"
      data-tally-width="500"
      data-tally-hide-title="1"
      data-tally-overlay="1"
      data-tally-emoji-text="👋"
      data-tally-emoji-animation="wave"
      {...rest}
    >
      {children}
    </button>
  );
}
