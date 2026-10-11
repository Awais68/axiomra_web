/**
 * Proxies whose x-forwarded-for entries Express may believe.
 *
 * A production request reaches Node as:
 *   client -> Cloudflare (Render's edge) -> Render's private proxies -> ::1
 * and arrives with
 *   x-forwarded-for: "<client>, <Cloudflare egress>, <10.x Render hop>"
 * Express walks that list from the right and stops at the first address it
 * does not trust. Trusting the private ranges alone stopped at the Cloudflare
 * egress, so every visitor routed through one PoP shared a rate-limit bucket.
 * With Cloudflare's ranges trusted too, req.ip is the real client. Anything a
 * client writes into x-forwarded-for sits left of its own address and is
 * never reached.
 *
 * Cloudflare's published ranges, copied 2026-10-11 from
 *   https://www.cloudflare.com/ips-v4
 *   https://www.cloudflare.com/ips-v6
 * They change rarely; re-check them when the [ip] log shows a Cloudflare
 * address as key=. Plain notation only: proxy-addr < 2.0.8 mis-compiles
 * IPv6 subnets with zero leading bits (GHSA-jqcg-44mw-7w3h), none of which
 * appear here.
 */
export const CLOUDFLARE_IPV4 = [
  "173.245.48.0/20",
  "103.21.244.0/22",
  "103.22.200.0/22",
  "103.31.4.0/22",
  "141.101.64.0/18",
  "108.162.192.0/18",
  "190.93.240.0/20",
  "188.114.96.0/20",
  "197.234.240.0/22",
  "198.41.128.0/17",
  "162.158.0.0/15",
  "104.16.0.0/13",
  "104.24.0.0/14",
  "172.64.0.0/13",
  "131.0.72.0/22",
];

export const CLOUDFLARE_IPV6 = [
  "2400:cb00::/32",
  "2606:4700::/32",
  "2803:f800::/32",
  "2405:b500::/32",
  "2405:8100::/32",
  "2a06:98c0::/29",
  "2c0f:f248::/32",
];

export const TRUSTED_PROXIES = [
  "loopback",
  "linklocal",
  "uniquelocal",
  ...CLOUDFLARE_IPV4,
  ...CLOUDFLARE_IPV6,
];
