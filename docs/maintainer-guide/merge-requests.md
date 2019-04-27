# Reviewing Pull Requests

> <img valign="bottom" alt="git-pull-request" height="50" width="50" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/git-pull-request.svg">
> Pull Requests present the best opportunity to interact with the community and
> gain contributor loyalty. Therefore, it's important that Pull Requests are
> well-reviewed before being merged and that interactions on Pull Requests are
> positive.

## Who Can Review Pull Requests

Specifically, if someone can _view_ Pull Requests, they should be allowed and
_encouraged_ to comment on Pull Requests.

## Reviewing a Pull Request

> **![Tip!][octicon-light-bulb] Read
> ["The ultimate guide to code reviews" ![PDF file][octicon-file-pdf]](/docs/maintainer-guide/codacy-ebook-code-reviews.pdf)**
> for more efficient, objective, and positive Pull Requests.

When a Pull Request is opened, either an automated bot like Zappr (ideally) or a
human should validate the following:

1.  Is the commit message summary in the correct format?
1.  Is the commit summary too long?

### Invalid commit message validation

The validator should then add a comment specifying the problems that it finds.
You do not need to look at the Pull Request any further until those problems
have been addressed (there's no need to comment on the Pull Request to ask the
submitter to do what the bot asked - that's why we have the bot!).

### Evaluating changes

Once the bot checks have been satisfied, you check the following:

1.  Double-check that the commit message tag ("`fix(<scope>):`",
    "`feat(<scope>):`", etc.) is correct based on the issue (or, if no issue is
    referenced, based on the stated problem).

1.  If the Pull Request makes a change to core, ensure that an issue exists and
    the Pull Request references the issue in the commit message.

1.  Does the code follow our conventions (including header comments, JSDoc
    comments, etc.)? If not, please leave that feedback and reference the
    conventions document.

1.  For code changes:

    -   Are there tests that verify the change? If not, please ask for them.

    -   Is documentation needed for the change? If yes, please let the submitter
        know.

1.  Are there any automated testing errors? If yes, please ask the submitter to
    check on them.

1.  If you've reviewed the Pull Request and there are no outstanding issues,
    leave a comment "LGTM" to indicate your approval. If you would like someone
    else to verify the change, comment "LGTM but would like someone else to
    verify."

**Note:** If you are a team member and you've left a comment on the Pull
Request, please follow up to verify that your comments have been addressed.

## Who Can Merge a Pull Request

PMC Members and Maintainers may merge Pull Requests, depending on the contents
of the Pull Request.

Committers may merge a Pull Request if it is a non-breaking change and is:

1.  A documentation change

1.  A defect fix (for either rules or core)

1.  A dependency upgrade

1.  Related to the build tool

1.  A chore

In addition, committers may merge any non-breaking Pull Request if it has been
approved by at least one PMC member.

PMC members may merge all Pull Requests, including those that committers may
merge.

## When to Pull a Pull Request

We use the <kbd>Squash and Merge</kbd> button to merge requests into the
repository. Before merging a Pull Request, verify that:

1.  All comments have been addressed

1.  Any team members who made comments have verified that their concerns were
    addressed

1.  All automated tests are passing (never merge a Pull Request with failing
    tests)

Be sure to say thank you to the submitter before merging, especially if they put
a lot of work into the Pull Request.

Team members may merge a Pull Request immediately if it:

1.  Makes a small documentation change

1.  Is a chore

1.  Fixes a block of other work on the repository (build-related, test-related,
    dependency-related, etc.)

1.  Is an important fix to get into a patch release

Otherwise, team members should observe a waiting period before merging a Pull
Request:

-   Wait **2 days** if the Pull Request was opened Monday through Friday.
-   Wait **3 days** if the Pull Request was opened on Saturday or Sunday.

The waiting period ensures that other team members have a chance to review the
Pull Request before it is merged.

If the Pull Request was created from a branch on the `eslint/eslint` repository
(as opposed to a fork), delete the branch after merging the Pull Request.
(GitHub will display a "Delete branch" button after the Pull Request is merged.)

* * *

<h4>
<img alt="Stop!" height="30" width="30" valign="bottom" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/stop.svg">
<em>You should not merge your own Pull Request unless you've received feedback from at least one other team member.</em>
</h4>

* * *

## When to Close a Pull Request

There are several times when it's appropriate to close a Pull Request without
merging:

1.  The Pull Request addresses an issue that is already fixed
1.  The Pull Request hasn't been updated in 30 days
1.  The Pull Request submitter isn't willing to follow project guidelines.

In any of these cases, please be sure to leave a comment stating why the Pull
Request is being closed.

### Example Closing Comments

#### Abandoned Pull Requests

If a Pull Request hasn't been updated in 30 days, apply the label <kbd>status:
abandoned</kbd> and submit a comment message like:

> Closing because there hasn't been activity for 30 days. If you're still
> interested in submitting this code, please feel free to resubmit.

#### Incompliant Contributors

If a Pull Request submitter isn't willing to follow project guidelines, apply
the label <kbd>status: rejected</kbd> and submit a comment like:

> Unfortunately, we can't accept Pull Requests that don't follow our guidelines.
> I'm going to close this Pull Request now, but if you'd like to resubmit
> following our guidelines, we'll be happy to review.

* * *

<h4 align="center">

![chevron-left][octicon-chevron-left] Previous:
[1. Issue management](/docs/maintainer-guide/issues.md) \|
[![arrow-up][octicon-arrow-up] Back to Maintainer Guide](/docs/maintainer-guide/#readme)
| Next:
[3. Release management ![chevron-right][octicon-chevron-right]](/docs/maintainer-guide/releases.md)

</h4>

<!-- ⛔️ Octicon img references ⛔️  -->

[octicon-alert]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/alert.svg

[octicon-arrow-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/arrow-down.svg

[octicon-arrow-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/arrow-left.svg

[octicon-arrow-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/arrow-right.svg

[octicon-arrow-small-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/arrow-small-down.svg

[octicon-arrow-small-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/arrow-small-left.svg

[octicon-arrow-small-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/arrow-small-right.svg

[octicon-arrow-small-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/arrow-small-up.svg

[octicon-arrow-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/arrow-up.svg

[octicon-beaker]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/beaker.svg

[octicon-bell]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/bell.svg

[octicon-bold]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/bold.svg

[octicon-book]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/book.svg

[octicon-bookmark]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/bookmark.svg

[octicon-briefcase]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/briefcase.svg

[octicon-broadcast]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/broadcast.svg

[octicon-browser]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/browser.svg

[octicon-bug]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/bug.svg

[octicon-calendar]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/calendar.svg

[octicon-check]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/check.svg

[octicon-checklist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/checklist.svg

[octicon-chevron-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/chevron-down.svg

[octicon-chevron-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/chevron-left.svg

[octicon-chevron-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/chevron-right.svg

[octicon-chevron-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/chevron-up.svg

[octicon-circle-slash]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/circle-slash.svg

[octicon-circuit-board]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/circuit-board.svg

[octicon-clippy]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/clippy.svg

[octicon-clock]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/clock.svg

[octicon-cloud-download]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/cloud-download.svg

[octicon-cloud-upload]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/cloud-upload.svg

[octicon-code]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/code.svg

[octicon-comment-discussion]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/comment-discussion.svg

[octicon-comment]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/comment.svg

[octicon-credit-card]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/credit-card.svg

[octicon-dash]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/dash.svg

[octicon-dashboard]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/dashboard.svg

[octicon-database]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/database.svg

[octicon-desktop-download]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/desktop-download.svg

[octicon-device-camera-video]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/device-camera-video.svg

[octicon-device-camera]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/device-camera.svg

[octicon-device-desktop]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/device-desktop.svg

[octicon-device-mobile]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/device-mobile.svg

[octicon-diff-added]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/diff-added.svg

[octicon-diff-ignored]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/diff-ignored.svg

[octicon-diff-modified]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/diff-modified.svg

[octicon-diff-removed]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/diff-removed.svg

[octicon-diff-renamed]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/diff-renamed.svg

[octicon-diff]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/diff.svg

[octicon-ellipses]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/ellipses.svg

[octicon-ellipsis]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/ellipsis.svg

[octicon-eye]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/eye.svg

[octicon-file-binary]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-binary.svg

[octicon-file-code]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-code.svg

[octicon-file-directory]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-directory.svg

[octicon-file-media]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-media.svg

[octicon-file-pdf]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-pdf.svg

[octicon-file-submodule]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-submodule.svg

[octicon-file-symlink-directory]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-symlink-directory.svg

[octicon-file-symlink-file]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-symlink-file.svg

[octicon-file-text]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-text.svg

[octicon-file-zip]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-zip.svg

[octicon-file]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file.svg

[octicon-flame]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/flame.svg

[octicon-fold]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/fold.svg

[octicon-gear]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/gear.svg

[octicon-gift]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/gift.svg

[octicon-gist-secret]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/gist-secret.svg

[octicon-gist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/gist.svg

[octicon-git-branch]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/git-branch.svg

[octicon-git-commit]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/git-commit.svg

[octicon-git-compare]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/git-compare.svg

[octicon-git-merge]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/git-merge.svg

[octicon-git-pull-request]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/git-pull-request.svg

[octicon-globe]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/globe.svg

[octicon-grabber]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/grabber.svg

[octicon-graph]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/graph.svg

[octicon-heart]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/heart.svg

[octicon-history]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/history.svg

[octicon-home]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/home.svg

[octicon-horizontal-rule]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/horizontal-rule.svg

[octicon-hubot]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/hubot.svg

[octicon-inbox]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/inbox.svg

[octicon-info]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/info.svg

[octicon-issue-closed]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/issue-closed.svg

[octicon-issue-opened]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/issue-opened.svg

[octicon-issue-reopened]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/issue-reopened.svg

[octicon-italic]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/italic.svg

[octicon-jersey]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/jersey.svg

[octicon-key]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/key.svg

[octicon-keyboard]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/keyboard.svg

[octicon-law]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/law.svg

[octicon-light-bulb]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/light-bulb.svg

[octicon-link-external]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/link-external.svg

[octicon-link]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/link.svg

[octicon-list-ordered]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/list-ordered.svg

[octicon-list-unordered]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/list-unordered.svg

[octicon-location]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/location.svg

[octicon-lock]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/lock.svg

[octicon-logo-gist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/logo-gist.svg

[octicon-logo-github]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/logo-github.svg

[octicon-mail-read]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/mail-read.svg

[octicon-mail-reply]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/mail-reply.svg

[octicon-mail]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/mail.svg

[octicon-mark-github]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/mark-github.svg

[octicon-markdown]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/markdown.svg

[octicon-megaphone]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/megaphone.svg

[octicon-mention]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/mention.svg

[octicon-milestone]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/milestone.svg

[octicon-mirror]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/mirror.svg

[octicon-mortar-board]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/mortar-board.svg

[octicon-mute]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/mute.svg

[octicon-no-newline]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/no-newline.svg

[octicon-octoface]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/octoface.svg

[octicon-organization]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/organization.svg

[octicon-package]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/package.svg

[octicon-paintcan]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/paintcan.svg

[octicon-pencil]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/pencil.svg

[octicon-person]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/person.svg

[octicon-pin]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/pin.svg

[octicon-plug]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/plug.svg

[octicon-plus-small]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/plus-small.svg

[octicon-plus]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/plus.svg

[octicon-primitive-dot]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/primitive-dot.svg

[octicon-primitive-square]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/primitive-square.svg

[octicon-pulse]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/pulse.svg

[octicon-question]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/question.svg

[octicon-quote]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/quote.svg

[octicon-radio-tower]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/radio-tower.svg

[octicon-reply]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/reply.svg

[octicon-repo-clone]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/repo-clone.svg

[octicon-repo-force-push]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/repo-force-push.svg

[octicon-repo-forked]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/repo-forked.svg

[octicon-repo-pull]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/repo-pull.svg

[octicon-repo-push]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/repo-push.svg

[octicon-repo]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/repo.svg

[octicon-rocket]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/rocket.svg

[octicon-rss]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/rss.svg

[octicon-ruby]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/ruby.svg

[octicon-search]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/search.svg

[octicon-server]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/server.svg

[octicon-settings]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/settings.svg

[octicon-shield]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/shield.svg

[octicon-sign-in]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/sign-in.svg

[octicon-sign-out]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/sign-out.svg

[octicon-smiley]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/smiley.svg

[octicon-squirrel]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/squirrel.svg

[octicon-star]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/star.svg

[octicon-stop]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/stop.svg

[octicon-sync]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/sync.svg

[octicon-tag]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/tag.svg

[octicon-tasklist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/tasklist.svg

[octicon-telescope]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/telescope.svg

[octicon-terminal]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/terminal.svg

[octicon-text-size]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/text-size.svg

[octicon-three-bars]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/three-bars.svg

[octicon-thumbsdown]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/thumbsdown.svg

[octicon-thumbsup]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/thumbsup.svg

[octicon-tools]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/tools.svg

[octicon-trashcan]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/trashcan.svg

[octicon-triangle-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/triangle-down.svg

[octicon-triangle-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/triangle-left.svg

[octicon-triangle-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/triangle-right.svg

[octicon-triangle-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/triangle-up.svg

[octicon-unfold]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/unfold.svg

[octicon-unmute]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/unmute.svg

[octicon-unverified]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/unverified.svg

[octicon-verified]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/verified.svg

[octicon-versions]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/versions.svg

[octicon-watch]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/watch.svg

[octicon-x]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/x.svg
