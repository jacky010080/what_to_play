#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# 部署到 https://jacky010080.github.io
# git push -f git@github.com:jacky010080/jacky010080.github.io.git master

# 部署到 https://github.com/jacky010080/hexschool_Vue3_week7
git push -f https://github.com/jacky010080/what_to_play.git main:gh-pages
# git push -f git@github.com:jacky010080/what_to_play.git main:gh-pages

cd -