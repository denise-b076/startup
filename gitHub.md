# GitHub Notes
These notes detail knowledge learned about GitHub, including commits, cloning, and forks

## Cloning
By creating a repository on GitHub, you have a way to organize your commits. By creating a clone of the repository, you can make edits on your local computer *without editing the GitHub directly*. Once this is done, editing code takes on a cycle of:
    1. Pull new changes from GitHub.
    2. Make changes to the code.
    3. Commit the changes through Git.
    4. Push the changes to GitHub

Cloning and making edits to the clone first and foremost ensures commits made are clean and more organized before being published to GitHub.

## Commits
Commits can be pushed and pulled between GitHub and local clones. These commits are changes to the code, and keeping track of them essentially creates a version history for your project. When making an edit in either location, you *must* commit to the change, or it cannot be pushed to either environment. Making commits often allows your progress to be tracked and maintains your credibility in what you created. 

## Forks
Forks are similar to clones, except they clone to GitHub instead of a local computer. This fork can then be pulled to the dev environment for you to edit. You can still pull changes from the original and push code to your fork, but you can also make a pull request to push your own changes to the original repository, with the creator's approval.