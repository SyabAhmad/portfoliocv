import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const GITISTA_LEADERBOARD_URL = "https://gitista.com/saudi-arabia/";
export const GITISTA_PROFILE_URL = "https://gitista.com/search?country=SA&handle=SyabAhmad";
export const GITHUB_API_URL = "https://api.github.com/users/SyabAhmad";

// Snapshot from Gitista leaderboard (Saudi Arabia) — their own scoring:
// Total = PRs + Reviews + Issues + Repos (commits NOT counted).
// Last verified against https://gitista.com/saudi-arabia/
export const GITISTA_LAST_CHECKED = "21 Sep 2026";
export const GITISTA_STATS = {
  countryRank: 9,
  globalRank: 10920,
  totalContributions: 161,
  pullRequests: 85,
  reviews: 3,
  repositories: 73,
  followers: 59,
  handle: "SyabAhmad",
  country: "Saudi Arabia",
};

export const GitistaBadge = () => (
  <a
    href={GITISTA_LEADERBOARD_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-4 py-2 bg-stone-900 text-stone-50 rounded-[4px] text-sm font-handwriting font-medium hover:bg-stone-700 transition-colors shadow-sm"
    title={`View live leaderboard on Gitista (snapshot ${GITISTA_LAST_CHECKED})`}
  >
    <span className="w-2 h-2 bg-green-400 rounded-none animate-pulse" />
    🏆 #{GITISTA_STATS.countryRank} Top Open Source Contributor in {GITISTA_STATS.country}
    <span className="text-stone-400">— Gitista ↗</span>
  </a>
);

const GitistaCard = ({ compact = false }) => {
  const [live, setLive] = useState(null);
  const [liveFailed, setLiveFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(GITHUB_API_URL)
      .then((r) => {
        if (!r.ok) throw new Error("github api error");
        return r.json();
      })
      .then((d) => {
        if (cancelled) return;
        setLive({
          followers: d.followers,
          repos: d.public_repos,
          following: d.following,
        });
      })
      .catch(() => {
        if (!cancelled) setLiveFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8"
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-6">
        <div className="flex-shrink-0 w-16 h-16 bg-stone-900 rounded-xl flex items-center justify-center">
          <span className="text-3xl font-bold text-stone-50 font-heading">#{GITISTA_STATS.countryRank}</span>
        </div>

        <div className="flex-1">
          <p className="text-xs font-medium text-stone-400 font-handwriting tracking-widest uppercase mb-1">
            Recognition · Open Source
          </p>
          <h3 className="text-xl font-bold text-stone-900 font-heading mb-2">
            Top {GITISTA_STATS.countryRank} Open Source Contributor in Saudi Arabia
          </h3>
          <p className="text-stone-500 font-handwriting text-sm leading-relaxed mb-4">
            Ranked #{GITISTA_STATS.countryRank} in Saudi Arabia (Global #{GITISTA_STATS.globalRank.toLocaleString()}) on{" "}
            <span className="font-semibold text-stone-700">Gitista</span> — their score counts PRs + reviews + issues + repos
            (commits excluded), snapshot {GITISTA_LAST_CHECKED}. Your full GitHub activity is much bigger — see live numbers below.
          </p>

          {!compact && (
            <>
              <p className="text-[11px] font-medium text-stone-400 font-handwriting tracking-widest uppercase mb-2">
                Gitista snapshot · {GITISTA_LAST_CHECKED}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                {[
                  { value: `${GITISTA_STATS.totalContributions}`, label: "Gitista score" },
                  { value: `${GITISTA_STATS.pullRequests}`, label: "Pull Requests" },
                  { value: `${GITISTA_STATS.repositories}`, label: "Repos (theirs)" },
                  { value: `#${GITISTA_STATS.globalRank.toLocaleString()}`, label: "Global Rank" },
                ].map((s, i) => (
                  <div key={i} className="bg-stone-50 border border-stone-100 rounded-[4px] px-3 py-2 text-center">
                    <div className="text-base font-bold text-stone-900 font-heading">{s.value}</div>
                    <div className="text-[11px] text-stone-400 font-handwriting">{s.label}</div>
                  </div>
                ))}
              </div>

              <p className="text-[11px] font-medium text-stone-400 font-handwriting tracking-widest uppercase mb-2">
                <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-none mr-1.5 align-middle" />
                Live from GitHub API
              </p>
              {live ? (
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { value: `${live.followers}`, label: "Followers" },
                    { value: `${live.repos}`, label: "Public repos" },
                    { value: `${live.following}`, label: "Following" },
                  ].map((s, i) => (
                    <div key={i} className="bg-green-50/50 border border-green-100 rounded-[4px] px-3 py-2 text-center">
                      <div className="text-base font-bold text-stone-900 font-heading">{s.value}</div>
                      <div className="text-[11px] text-stone-500 font-handwriting">{s.label}</div>
                    </div>
                  ))}
                </div>
              ) : liveFailed ? (
                <p className="text-xs text-stone-400 font-handwriting mb-5">
                  Live GitHub stats unavailable (API rate limit) —{" "}
                  <a
                    href={`https://github.com/${GITISTA_STATS.handle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-stone-600"
                  >
                    view profile directly ↗
                  </a>
                </p>
              ) : (
                <p className="text-xs text-stone-400 font-handwriting mb-5">Loading live GitHub stats…</p>
              )}

              <div className="mb-5">
                <p className="text-[11px] font-medium text-stone-400 font-handwriting tracking-widest uppercase mb-2">
                  Push activity · last 31 days · live from GitHub
                </p>
                <a
                  href={`https://github.com/${GITISTA_STATS.handle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open GitHub profile"
                >
                  <img
                    src={`https://github-readme-activity-graph.vercel.app/graph?username=${GITISTA_STATS.handle}&bg_color=ffffff&color=44403c&line=44403c&point=1c1917&area=true&hide_border=true`}
                    alt={`${GITISTA_STATS.handle} GitHub push activity graph - last 31 days`}
                    loading="lazy"
                    className="w-full rounded-[4px] border border-stone-100 bg-white"
                    onError={(e) => { e.target.style.display = "none"; }}
                  />
                </a>
              </div>
            </>
          )}

          <div className="flex flex-wrap gap-3">
            <a
              href={GITISTA_LEADERBOARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-stone-50 font-bold rounded-lg text-sm font-heading hover:bg-stone-700 transition-colors"
            >
              View Live Leaderboard →
            </a>
            <a
              href={GITISTA_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-stone-200 text-stone-600 font-bold rounded-lg text-sm font-heading hover:border-stone-400 transition-colors"
            >
              My Gitista Profile ↗
            </a>
          </div>
          <p className="text-[11px] text-stone-400 font-handwriting mt-4">
            Gitista snapshot {GITISTA_LAST_CHECKED} · GitHub stats + graph load live — click through to verify current position.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default GitistaCard;
