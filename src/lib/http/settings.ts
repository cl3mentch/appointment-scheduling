const urlList = {
  dev: {
    apiBase: process.env.NEXT_PUBLIC_STAG_API_BASE,
    wsBase: process.env.NEXT_PUBLIC_STAG_WS_BASE,
  },
  live: {
    apiBase: process.env.NEXT_PUBLIC_PROD_API_BASE,
    wsBase: process.env.NEXT_PUBLIC_PROD_WS_BASE,
  },
};

export const urls =
  process.env.NEXT_PUBLIC_APP_ENV === "production" ? urlList.live : urlList.dev;

export const database = process.env.DATABASE_URL