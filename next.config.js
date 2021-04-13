const path = require("path");
const nextTranslate = require("next-translate");
const { locales, defaultLocale } = require("./i18n.json");

const nextConfig = {
  i18n: { localeDetection: true },
  future: {
    webpack5: true,
  },
};

module.exports = nextTranslate(nextConfig);
