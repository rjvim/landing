import React from "react";
import Footer from "@theme-original/Footer";
import type FooterType from "@theme/Footer";
import type { WrapperProps } from "@docusaurus/types";
import { useThemeConfig } from "@docusaurus/theme-common";

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  const { footer } = useThemeConfig();
  if (!footer) {
    return null;
  }
  const { copyright, links, logo, style } = footer;
  console.log("footer", footer);

  return (
    <>
      <div className="p-3 bg-red-400 dark:bg-yellow-400">
        {/* <Footer {...props} /> */}
      </div>
    </>
  );
}
