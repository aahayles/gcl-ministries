# GCL Ministries Website Rules

## index.html Sync Rule
`index.html` is a required copy of `GCL_Website.html` for GitHub Pages to work.

**Every time `GCL_Website.html` is updated, always:**
1. Overwrite `index.html` with the updated content: `Copy-Item "GCL_Website.html" "index.html" -Force`
2. Commit and push both files to GitHub

Never push `GCL_Website.html` changes without also syncing `index.html`.

## GitHub Repository
- Repo: https://github.com/aahayles/gcl-ministries
- Live site: https://aahayles.github.io/gcl-ministries/
- Branch: master

## Push Workflow
```bash
git add .
git commit -m "describe change"
git push
```

## Project Location
`C:\Users\hayle\Documents\GCL Ministries`
