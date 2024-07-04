import { createIntl, useIntl } from "react-intl";
import React from "react";
import { PlasmicTranslator } from "@plasmicapp/loader-nextjs";

/**
 * Returns a PlasmicTranslator that uses `useIntl()` to look up translation
 * strings.
 */
export function usePlasmicTranslator() {
  const intl = useIntl();

  const translator: PlasmicTranslator = (key, opts) => {
    return intl.formatMessage(
      { id: key },
      opts?.components &&
        Object.fromEntries(
          Object.entries(opts.components).map(([tag, elt]) => [
            tag,
            (chunks) => React.cloneElement(elt as any, { children: chunks }) as any,
          ])
        )
    );
  };

  return translator;
}
