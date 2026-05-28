export default function robots() {
  return {
    rules: [
      // All standard crawlers
      { userAgent: "*", allow: "/" },
      // Explicit AI crawler allowlist (transparent opt-in for citation)
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
    ],
    sitemap: "https://www.veyconnect.de/sitemap.xml",
    host: "https://www.veyconnect.de",
  };
}
