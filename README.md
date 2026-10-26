# Frontend CI exercise

This is a small task-list frontend for practicing GitHub Actions with Node.js.
The tests cover the task-list logic, and the workflow checks both tests and a
production build on pull requests and pushes to `main`.

## Set up locally

Install Node.js 22. Corepack will select pnpm 10.34.9, pinned in
`package.json`. If Corepack has a stale or incomplete cached pnpm download, run
`corepack cache clean` once, then from this folder run:

```powershell
corepack install
corepack pnpm install
corepack pnpm dev
```

Open the local URL printed by Vite. To run the checks locally:

```powershell
corepack pnpm test
corepack pnpm build
```

Commit `pnpm-lock.yaml` after running `pnpm install`; GitHub Actions uses it
with `pnpm install --frozen-lockfile` to install the same dependency versions
in CI.

## Exercise goal

Create a branch, make a "small" change , and open a pull request. The workflow
should run the tests and build. Then try breaking a task-list function to see
the test check fail, fix it, and push again to see the check pass.
