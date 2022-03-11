import dynamic from "next/dynamic";
import React, { FC } from "react";

const NoSSRFC: FC = (props) => <>{props.children}</>;

export const NoSSR = dynamic(async () => NoSSRFC, { ssr: false });
