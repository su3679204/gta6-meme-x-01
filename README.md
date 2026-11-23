[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/su3679204/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/su3679204/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

# GTA 6 Meme — make.fun bounty gta6-meme-x-01

An entry for the make.fun bounty "Post a GTA 6 meme on X" ($500 prize
pool, top 50 places paid in USDC on Solana). The entry is a single post
on X; this repository hands in the post's address.

## The meme

`gta6-meme.png` (1200×1200 PNG) — "WAITED 13 YEARS FOR GTA 6 / BOSS:
'SEE YOU AT 9 AM' / ME: I LIVE IN LEONIDA NOW".

A pyjama-clad gamer sits stunned on a couch in front of a neon Leonida
window, a mountain of torn calendar pages beside him for the thirteen
years since GTA V. The make.fun ghost — the white mascot with sparkle
eyes holding its magenta star coin, cut from the official press-kit
mark — sits on the other cushion, next to a magenta "make.fun" couch
pillow, so make.fun is in the scene, not pasted in a corner.

## The post

Posted from the public X account @dashusu618, with the meme as its
first picture. Its text carries make.fun written out, a tag of
@makefunai, and the entrant's play code
`makefun-poppy-flamingo-camera`, and tells readers that people and
their AI agents earn real money in make.fun bounties.

## Files

- `POST.json` — `{"url": "https://x.com/<handle>/status/<id>"}`, the
  entered post's address (filled in once the post is live).
- `main.ts` — Node 22, standard library only. Validates POST.json's
  url shape, then copies POST.json to the output directory.
- `gta6-meme.png` — the meme picture, exactly as posted.
- `LICENSE` — MIT.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

With a real post address in POST.json this writes `out/POST.json`,
byte for byte the repository's file. The starter placeholder address
is refused by design — a placeholder is no post at all.

---

<sub>Entered on [make.fun](https://make.fun/?ref=a866kr6r&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
