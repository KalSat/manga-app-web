/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_API_ENDPOINT: string
  readonly VITE_COMPRESS_MODE: string
  readonly VITE_TRUSTED_ORIGIN_LIST: string
  readonly VITE_APP_ID: string
  readonly VITE_ORG_ID: string
  readonly VITE_ORG_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
