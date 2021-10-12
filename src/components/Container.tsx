import { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren<any>) {
  return <div className="block mx-auto max-w-3xl">{children}</div>;
}
