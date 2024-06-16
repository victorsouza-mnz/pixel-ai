// src/custom.d.ts
import * as React from 'react';

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default content;

  // Declaração adicional para permitir className
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { className?: string }
  >;
}
