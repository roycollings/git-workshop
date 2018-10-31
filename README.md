# Good pull requests

## Commit strategy

### Split commits into 'atomic' changes (not dependant on future changes)

An example might be (in order):

1. `Add new element definitions for 'Favourite Channels' screen.`
2. `Implement new test scenarios for 'Favourite Channels' screen.`
2. `Refactor to improve selectors for 'Login' screen.`

This allows reviewers to see your changes in focused context, instead of 25 files in one go, some of which are unrelated to others.

None of these commits rely on a future one, so you can jump back to any of these and see no failing tests or functionality.

Keep any 'off ticket' changes to the end if possible (such as commit '3') to make it easy to remove that commit if people don't want it implemented here.

### Give commits descriptive commit messages
Bad examples (from real life ;):
- `refactor`
- `removed all the crap`
- `all working, woop! :) :) :)`

These tell you nothing when you're looking through the commit history (`git log`).

Aim for informative but short - if too much has happened in a commit to do this, perhaps there's just too much in that commit.

### Avoid changing the same file in different commits
(where possible!)

If a file is changed in more than one commit, the reviewer may comment against it in commit '1', only to discover that his comments aren't relevant in commit '4'.

### _Edit_ commits after code review, rather than make a new commit
To edit a commit:

1. `git log` - get the 'hash' of the commit _before_ the one you want to edit.
2. `git rebase -i <hash>` - set the value to `edit` for the commit you want to change.

... you are now in 'rebase' mode: git has sent you back in time to when you were in the process of making the changes for that commit!

3. Make your changes
4. `git add .`
5. `git rebase --continue` - this will pop up another editor to show you that it's about to add your changes to the commit. Just save and quit the editor.

Git will now return you to the present, automatically adding your changes to every subsequent commit!

If you've already pushed the previous changes to your remote branch (presumably you did if it's been reviewed), then you'll need to 'force push'. This is dangerous if someone else is also working on your branch because you could overwrite their changes.

`git push -f origin <branch>`