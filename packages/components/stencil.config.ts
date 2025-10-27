import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'spoilerjs',
  validatePrimaryPackageOutputTarget: true,
  sourceMap: false,
  outputTargets: [
    {
      type: 'dist-custom-elements',
      dir: 'dist/components',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
      generateTypeDeclarations: true,
      minify: true,
      isPrimaryPackageOutputTarget: true,
    },
    {
      type: 'docs-readme',
    },
  ],
  testing: {
    browserHeadless: "shell",
  },
};
