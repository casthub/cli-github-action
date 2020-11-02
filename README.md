# CastHub CLI - GitHub Action

Use this Action to set-up an authenticated CastHub CLI within your workflow. Be sure to check [our Documentation](https://casthub.app/docs) for more info.

## Usage

The Action installs `casthub-cli` globally via NPM and sets the provided Personal Access Token for the CLI. For example, if you had a `CASTHUB_CLI_TOKEN` secret:

```yaml
jobs:
  publish:
    name: Publish to CastHub
    runs-on: ubuntu-latest
    steps:
      - name: Set-up CastHub CLI
        uses: casthub/cli-github-action@v1
        with:
          token: ${{ secrets.CASTHUB_CLI_TOKEN }}
```

This Action assumes that NPM is present already, either via the pre-packaged Node in the runner OS or tools like `setup-node`.
