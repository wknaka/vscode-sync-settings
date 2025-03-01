Set email so that private emails aren't published.

git config user.email '28848235+wknaka@users.noreply.github.com'
git config user.name wknaka

Set 'upstream' to https://github.com/zokugun/vscode-sync-settings.git and fetch upstream, so the diff script will work.

Requires node 20+ for vsce

Execute 'vsce package' which will compile and package the vsix.
