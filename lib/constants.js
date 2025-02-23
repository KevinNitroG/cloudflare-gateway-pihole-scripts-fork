import dotenv from "dotenv";

dotenv.config();

export const API_TOKEN = process.env.CLOUDFLARE_API_KEY;

export const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;

export const ACCOUNT_EMAIL = process.env.CLOUDFLARE_ACCOUNT_EMAIL;

export const LIST_ITEM_LIMIT = isNaN(process.env.CLOUDFLARE_LIST_ITEM_LIMIT)
  ? 300000
  : parseInt(process.env.CLOUDFLARE_LIST_ITEM_LIMIT, 10);

export const LIST_ITEM_SIZE = 1000;

export const API_HOST = "https://api.cloudflare.com/client/v4";

export const DRY_RUN = !!parseInt(process.env.DRY_RUN, 10);

export const FAST_MODE = !!parseInt(process.env.FAST_MODE, 10);

export const PROCESSING_FILENAME = {
  ALLOWLIST: "allowlist.txt",
  BLOCKLIST: "blocklist.txt",
  OLD_ALLOWLIST: "whitelist.csv",
  OLD_BLOCKLIST: "input.csv",
};

export const LIST_TYPE = {
  ALLOWLIST: "allowlist",
  BLOCKLIST: "blocklist",
};

export const USER_DEFINED_ALLOWLIST_URLS =
  process.env.ALLOWLIST_URLS?.split("\n");

export const USER_DEFINED_BLOCKLIST_URLS =
  process.env.BLOCKLIST_URLS?.split("\n");

export const RECOMMENDED_ALLOWLIST_URLS = [
  "https://raw.githubusercontent.com/im-sm/Pi-hole-Torrent-Blocklist/main/all-torrent-trackres.txt",
  "https://raw.githubusercontent.com/AdguardTeam/HttpsExclusions/master/exclusions/banks.txt",
  "https://raw.githubusercontent.com/hagezi/dns-blocklists/main/whitelist.txt",
  "https://raw.githubusercontent.com/TogoFire-Home/AD-Settings/main/Filters/whitelist.txt",
  "https://raw.githubusercontent.com/freekers/whitelist/master/domains/whitelist.txt",
  "https://raw.githubusercontent.com/DandelionSprout/AdGuard-Home-Whitelist/master/whitelist.txt",
  "https://raw.githubusercontent.com/AdguardTeam/AdGuardSDNSFilter/master/Filters/exclusions.txt",
  "https://raw.githubusercontent.com/anudeepND/whitelist/master/domains/optional-list.txt",
  "https://raw.githubusercontent.com/AdguardTeam/HttpsExclusions/master/exclusions/issues.txt",
  "https://raw.githubusercontent.com/hagezi/dns-blocklists/main/whitelist-referral.txt",
  "https://raw.githubusercontent.com/mawenjian/china-cdn-domain-whitelist/master/china-cdn-domain-whitelist.txt",
  "https://raw.githubusercontent.com/notracking/hosts-blocklists-scripts/master/hostnames.whitelist.txt",
  "https://raw.githubusercontent.com/AdguardTeam/HttpsExclusions/master/exclusions/mac.txt",
  "https://raw.githubusercontent.com/boutetnico/url-shorteners/master/list.txt",
  "https://raw.githubusercontent.com/AdguardTeam/HttpsExclusions/master/exclusions/windows.txt",
  "https://raw.githubusercontent.com/Dogino/Discord-Phishing-URLs/main/official-domains.txt",
  "https://raw.githubusercontent.com/ookangzheng/blahdns/master/hosts/whitelist.txt",
  "https://raw.githubusercontent.com/AdguardTeam/HttpsExclusions/master/exclusions/android.txt",
  "https://raw.githubusercontent.com/AdguardTeam/HttpsExclusions/master/exclusions/sensitive.txt",
  "https://raw.githubusercontent.com/anudeepND/whitelist/master/domains/whitelist.txt",
  "https://raw.githubusercontent.com/AdguardTeam/HttpsExclusions/master/exclusions/firefox.txt",
  // Commented out because it whitelists sites including doubleclick.net and ad.atdmt.com
  // https://raw.githubusercontent.com/anudeepND/whitelist/master/domains/referral-sites.txt,
  // Uncomment the line below to use OISD's most commmonly whitelisted list
  // https://local.oisd.nl/extract/commonly_whitelisted.php,

  // USER
  "https://gist.githubusercontent.com/KevinNitroG/fd9d2a8ea51ae652f45a53656a85d84e/raw/white%2520list%2520domain.txt",
];

export const RECOMMENDED_BLOCKLIST_URLS = [
  // "https://raw.githubusercontent.com/mullvad/dns-blocklists/main/output/doh/doh_adblock.txt",
  // "https://raw.githubusercontent.com/mullvad/dns-blocklists/main/output/doh/doh_gambling.txt",
  // "https://raw.githubusercontent.com/mullvad/dns-blocklists/main/output/doh/doh_privacy.txt",
  // "https://raw.githubusercontent.com/FadeMind/hosts.extras/master/add.Risk/hosts",
  // "https://adaway.org/hosts.txt",
  // "https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts",

  // USER
  "https://raw.githubusercontent.com/Veticia/antipopads/master/hosts",
  "https://raw.githubusercontent.com/luxysiv/hosts/main/hosts.txt",
  "https://raw.githubusercontent.com/bigdargon/hostsVN/master/option/domain.txt",
  "https://abpvn.com/android/abpvn.txt",
  "https://raw.githubusercontent.com/Veticia/antipopads/master/hosts",
  "https://raw.githubusercontent.com/luxysiv/hosts/main/hosts.txt",
  "https://luxysiv.github.io/custom-filters/adhell-ext.txt",
  "https://abpvn.com/android/abpvn.txt",
  "https://raw.githubusercontent.com/jerryn70/GoodbyeAds/master/Extension/GoodbyeAds-Xiaomi-Extension.txt",
  "https://raw.githubusercontent.com/nextdns/native-tracking-domains/main/domains/xiaomi",
  "https://raw.githubusercontent.com/jerryn70/GoodbyeAds/master/Extension/GoodbyeAds-Samsung-AdBlock.txt",
  "https://raw.githubusercontent.com/nextdns/native-tracking-domains/main/domains/samsung",
  "https://malware-filter.gitlab.io/malware-filter/vn-badsite-filter-hosts.txt",
  "https://adguardteam.github.io/AdGuardSDNSFilter/Filters/filter.txt",
];
