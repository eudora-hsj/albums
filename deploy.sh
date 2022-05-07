set -e
npm run build
cd dist
git init 
git config --local user.name eudora-hsj
git config --local user.email eudora.hsj@gmail.com
git add -A
git commit -m 'deploy'
git push -f git@github.com:eudora-hsj/albums.git master:gh-pages
cd -