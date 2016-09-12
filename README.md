# Github Battle

Type your github usernames and battle friends!

## Github Pages deploy
Make sure dist is not in your .gitignore file
```
$ gulp webpack:build
$ git add dist
$ git commit -m "Deploy to gh-pages"
$ if [ -n "$(git ls-remote origin gh-pages)" ]; then; git push origin :gh-pages; fi
$ git subtree push --prefix=dist origin gh-pages
```