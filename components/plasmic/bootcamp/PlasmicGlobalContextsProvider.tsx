// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5oejVTGR6fGdjF61wkkGLj

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { Fragment } from "@/fragment/fragment"; // plasmic-import: QTgxuVO84Ibk/codeComponent
import { GrowthbookGlobalContext } from "@/fragment/growthbook"; // plasmic-import: AK3wPYlyQAes/codeComponent

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  fragmentProps?: Partial<
    Omit<React.ComponentProps<typeof Fragment>, "children">
  >;
  growthbookGlobalContextProps?: Partial<
    Omit<React.ComponentProps<typeof GrowthbookGlobalContext>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const { children, fragmentProps, growthbookGlobalContextProps } = props;

  return (
    <Fragment
      {...fragmentProps}
      apiConfig={
        fragmentProps && "apiConfig" in fragmentProps
          ? fragmentProps.apiConfig!
          : undefined
      }
      previewApiConfig={
        fragmentProps && "previewApiConfig" in fragmentProps
          ? fragmentProps.previewApiConfig!
          : undefined
      }
    >
      <GrowthbookGlobalContext
        {...growthbookGlobalContextProps}
        apiHost={
          growthbookGlobalContextProps &&
          "apiHost" in growthbookGlobalContextProps
            ? growthbookGlobalContextProps.apiHost!
            : undefined
        }
        clientKey={
          growthbookGlobalContextProps &&
          "clientKey" in growthbookGlobalContextProps
            ? growthbookGlobalContextProps.clientKey!
            : undefined
        }
        previewAttributes={
          growthbookGlobalContextProps &&
          "previewAttributes" in growthbookGlobalContextProps
            ? growthbookGlobalContextProps.previewAttributes!
            : undefined
        }
      >
        {children}
      </GrowthbookGlobalContext>
    </Fragment>
  );
}
