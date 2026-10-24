# ai-docs checks (vendored)

Stdlib-only Python copied from the team's `create-ai-docs` skill on 2026-10-24, so the doc checks
run without the skill installed. Lives under `vendor/` so the verifier doesn't treat its own source as
product code. Update it by copying the skill's `scripts/` again; don't edit it here.

```bash
python3 scripts/vendor/ai-docs/verify_docs.py .            # every claim in AGENTS.md + docs/ vs the code
python3 scripts/vendor/ai-docs/verify_docs.py . --docs docs/FLOWS.md
python3 scripts/vendor/ai-docs/affected_docs.py .          # docs whose `covers` globs changed since verified_at
```
