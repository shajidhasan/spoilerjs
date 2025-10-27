# Contributing to SpoilerJS

First off, thank you for considering contributing to SpoilerJS! It's people like you that make SpoilerJS such a great tool.

## Where do I go from here?

If you've noticed a bug or have a feature request, [make one](https://github.com/shajidhasan/spoilerjs/issues/new)! It's generally best if you get confirmation of your bug or approval for your feature request this way before starting to code.

### Fork & create a branch

If this is something you think you can fix, then [fork SpoilerJS](https://github.com/shajidhasan/spoilerjs/fork) and create a branch with a descriptive name.

A good branch name would be (where issue #38 is the ticket you're working on):

```sh
git checkout -b 38-add-awesome-new-feature
```

### Get the code

```sh
git clone https://github.com/your-username/spoilerjs.git
cd spoilerjs
pnpm install
```

### Implement your fix or feature

At this point, you're ready to make your changes! Feel free to ask for help; everyone is a beginner at first :smile_cat:

### Make a Pull Request

At this point, you should switch back to your master branch and make sure it's up to date with SpoilerJS's master branch:

```sh
git remote add upstream git@github.com:shajidhasan/spoilerjs.git
git checkout master
git pull upstream master
```

Then update your feature branch from your local copy of master, and push it!

```sh
git checkout 38-add-awesome-new-feature
git rebase master
git push --force-with-lease origin 38-add-awesome-new-feature
```

Finally, go to GitHub and make a Pull Request.

### Keeping your Pull Request updated

If a maintainer asks you to "rebase" your PR, they're saying that a lot of code has changed, and that you need to update your branch so it's easier to merge.

To learn more about rebasing and merging, check out this guide on [using git-rebase](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase).

## How to get in touch

You can reach out to the core team in the [issues section](https://github.com/shajidhasan/spoilerjs/issues) of the repository.

Thank you for contributing!