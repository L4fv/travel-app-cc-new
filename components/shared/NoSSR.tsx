import dynamic from "next/dynamic";
import React, { FC } from "react";
type Props = {
    children: JSX.Element,
  
  };
const NoSSRFC: FC<Props> = ({ children }) => <>{children}</>;

export const NoSSR = dynamic(async () => NoSSRFC, { ssr: false });
