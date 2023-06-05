import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: 'http://34.22.81.36:3000/swagger-json',
  apiFile: './src/store/baseApi.ts',
  apiImport: 'baseSplitApi',
  outputFile: './src/store/popupApi.ts',
  exportName: 'popupApi',
  hooks: true,
};

export default config;
