take the webpack structure from:

- es6_sorting_searching.
- mapbox_viewer project.

========================================

follow webpack and babel tutorials.
  - images , html , css.

acamind (youtube) and net-ninja (youtube)

========================================

add unit testing and github workflow with git actions used before
pushing updates

========================================

git checkout -b feature1 - creates a branch and switched to it.
git remote update - bring the branch up to date

git status -uno - tells if you're ahead, behind , diverged.
-----------
makes change to readme in /master
git status
   - modified Readme
git commit and push
switch to branch /feature1 with git checkout

git pull origin master - gets changes from master

========================================

// delete branch locally
git branch -d localBranchName

// delete branch remotely
git push origin --delete remoteBranchName

========================================
    making changes from outside master

git checkout master

git remote update

git pull
==========================================

git checkout feature1

makes changes

git add * , git commit
git push origin feature1

this pushes feature1 to its branch in github.
  - it does not make changes to the master branch.
  - we can either do
     - git merge feature1 inside the master branch
     - or create a pull request in github.


we can then make a pull request which stages changes from feature1 to master.

the github actions will now run the tests.
   - if success, we can confirm the merge to master
   - if fails, we can cancel and delete the pull from feature1 to master.





. . .
