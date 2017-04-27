#!/bin/bash
echo -e "\nChecking conditions.."
if [ "$TRAVIS_REPO_SLUG" == "stephentuso/tusoapps.com" ] && [ "$TRAVIS_PULL_REQUEST" == "false" ] && [ "$TRAVIS_BRANCH" == "master" ]; then
    echo -e "\nPublishing to gh-pages..."

    cp -Rf dist/ $HOME/dist/

    cd $HOME
    git config --global user.email "travis@travis-ci.org"
    git config --global user.name "travis-ci"

    echo -e "\nCloning gh-pages..."
    git clone --quiet --branch=gh-pages https://${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG} gh-pages > /dev/null

    echo -e "/nReplacing files..."
    cd gh-pages
    git rm -rf .
    cp -Rf $HOME/dist/ $HOME/gh-pages/
    git add -f .
    git commit -m "Update website (travis build #$TRAVIS_BUILD_NUMBER)"

    echo -e "Publishing..."
    git push -fq origin gh-pages > /dev/null

    echo -e "Pushed updated files to gh-pages"

else
    echo -e "Not publishing to gh-pages"
fi
