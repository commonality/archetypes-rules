<!-- Note: No Pull Requests accepted for this file. See README.md in the root directory for details. -->

# Governance

**archetypes-rules** is an open source project that depends on contributions
from the community. Anyone may contribute to the project at any time by
submitting code, participating in discussions, making suggestions, or any other
contribution they see fit. This document describes how various types of
contributors work within the **archetypes-rules** project.

## Roles and Responsibilities

<table>
  <tr>
    <th colspan="3"><h3>Product Community Roles</h3></th>
  </tr>
  <tr>
    <th>Role</th>
    <th>Definition</th>
    <th>Responsibilities</th>
  </tr>
  <tr>
    <td>Consumer</td>
    <td>Somone who needs the product to complete business tasks.</td>
    <td>◦ Evangelism<br>◦ Feedback<br>◦ Support</td>
  </tr>
  <tr>
    <td>Contributor</td>
    <td>Someone who collaborates with the community in order to improve the product.</td>
    <td>◦ Report defects<br>◦ Support (new) users<br>◦ Identify requirements<br>◦ Program<br>◦ Write documentation<br>◦ Test<br><br>Read the <a href="https://github.com/kentcdodds/all-contributors/#readme">all-contributors specification</a> for details.</td>
  </tr>
  <tr>
    <td>Maintainer</td>
    <td>A community-recognized contributor entrusted with the integrity of the product's source code and delivery.</td>
    <td>◦ Review code changes<br>◦ Merge changes into product<br>◦ Release new product versions<br>◦ Maintain the product repository</td>
  </tr>
  <tr>
    <td>Technical Steering Committee (TSC) Member</td>
    <td>A Maintainers who manages the product from development and acquisition to retirement and removal.</td>
    <td>◦ Review code changes<br>◦ Moderates and records product-level architecture decisions<br>◦ Votes on and appoints Maintainers</td>
  </tr>
  <tr>
    <td>Product Management Committee (PMC) Member</td>
    <td>A senior business manager who determines support and funding based on strategic business alignment, as well as risk reduction and financial constraints.</td>
    <td>TBC.</td>
  </tr>
</table>

### Consumers (aka "Users")

Consumers are community members who depend on a product. Anyone can be a
Consumer; there are no special requirements. Common Consumer contributions
include evangelizing the product (e.g., display a link on a website and raise
awareness through word-of-mouth), informing developers of strengths and
weaknesses from a new user perspective, or providing moral support: a "thank
you" goes a long way.

Consumers who continue to engage with the product development and delivery team
and its community will often become more and more involved. Such Consumers may
find themselves becoming Contributors, as described in the next section.

### Contributors

Contributors are community members who contribute in concrete ways to the
project, most often in the form of code and/or documentation. Anyone can become
a Contributor, and contributions can take many forms. There is no expectation of
commitment to the project, no specific skill requirements, and no selection
process.

There are many ways in which people can contribute, including:

| Represents | Links to | Comment |
| ---------- | -------- | ------- |

| Answering Questions (in Issues, Stack Overflow, Gitter, Slack, etc.) | Bug
reports |
`https://github.com/${ownerName}/${repoName}/issues?q=author%3A${username}` \|
Blogposts | the blogpost | Code |
`https://github.com/${ownerName}/${repoName}/commits?author=${username}` \|
Documentation |
`https://github.com/${ownerName}/${repoName}/commits?author=${username}`, Wiki,
or other source of documentation | Design | the logo/iconography/visual
design/etc. | Examples | the examples | Event Organizers | event page |
Financial Support | relevant page | people or orgs who provide financial support
| Funding/Grant Finders | | people who help find financial support | Ideas &
Planning | | Infrastructure (Hosting, Build-Tools, etc) | link to source file
(like `travis.yml`) in repo, if applicable | Packaging/porting to support a new
platform | Plugin/utility libraries | the repo home | Reviewed Pull Requests |
Tools | the repo home | Translation | the translated content | Tests |
`https://github.com/${ownerName}/${repoName}/commits?author=${username}` \|
Tutorials | the tutorial | Talks | the slides/recording/repo/etc. | Videos | the
video

Contributors have read-only access to source code and so submit changes via Pull
Requests. Contributor Pull Requests have their contribution reviewed and merged
by a PMC member. PMC members and Maintainers work with Contributors to review
their code and prepare it for merging.

Maintainers should recognize Contributors as soon as the contribution is
discovered to help ensure their efforts are not overlooked. This can be
difficult for contributions that are not the result of a commit to repository.
Regardless, Maintainers must do their best to minimise the time between the
contribution and recognition.

As Contributors gain experience and familiarity with the project, their profile
within, and commitment to, the community will increase. At some stage, they may
find themselves being nominated for committership by an existing Maintainer.

### Maintainers

Maintainers are community members who have shown that they are committed to the
continued development of the product through ongoing engagement with the
community. Maintainers are given push access to the project's GitHub repos and
must abide by the project's [Contribution Guidelines](contributing).

Maintainers:

-   Are expected to work on public branches of the source repository and submit
    Pull Requests from that branch to the master branch.

-   Are expected to delete their public branches when they are no longer
    necessary.

-   Must submit Pull Requests for all changes.

-   Have their work reviewed by PMC members before acceptance into the repository.

-   May label and close issues (see [Issue management](issues.md))

-   May merge some Pull Requests (see [Managing Pull Requests](merge-requests.md))

To become a Maintainer:

-   One must have shown a willingness and ability to participate in the project as
    a team player. Typically, a potential Maintainer will need to show that they
    have an understanding of and alignment with the project, its objectives, and
    its strategy.

-   Maintainers are expected to be respectful of every community member and to
    work collaboratively in the spirit of inclusion.

-   Have submitted a minimum of 10 qualifying Pull Requests. What's a qualifying
    Pull Request? One that carries significant technical weight and requires
    little effort to accept because it's well documented and tested.

New Maintainers can be nominated by any existing Maintainer. Once they have been
nominated, there will be a vote by the PMC members.

It is important to recognize that committership is a privilege, not a right.
That privilege must be earned and once earned it can be removed by the PMC
members by a standard PMC motion. However, under normal circumstances
committership exists for as long as the Maintainer wishes to continue engaging
with the project.

A Maintainer who shows an above-average level of contribution to the project,
particularly with respect to its strategic direction and long-term health, may
be nominated to become a PMC member, described below.

#### Process for Adding Committers

1.  Add the GitHub user to the "**archetypes-rules** Team" team

1.  Send welcome email with link to the Maintainer guide

1.  Add the Maintainer's email to the **archetypes-rules** team mailing list

1.  Add the Maintainer to the README

1.  Invite to team chatroom

1.  Publisize congratulatory messages to the new committer on internal
    **archetypes-rules** media, e.g., CrowdAround and Stack Overflow

1.  Notify Human Resources/Performance Management about the community's
    promotion

### Product Management Committe (PMC)

The **archetypes-rules** project is jointly governed by a Product Management
Committe (PMC) which is responsible for high-level guidance of the project.

The PMC has final authority over this project including:

-   Technical direction

-   Project governance and process (including this policy)

-   Contribution policy

-   Repository hosting

PMC seats are not time-limited. There is no fixed size of the PMC. The PMC
should be of such a size as to ensure adequate coverage of important areas of
expertise balanced with the ability to make decisions efficiently.

The PMC may add additional members to the PMC by a standard PMC motion.

A PMC member may be removed from the PMC by voluntary resignation, or by a
standard PMC motion.

Changes to PMC membership should be posted in the agenda, and may be suggested
as any other agenda item (see "PMC Meetings" below).

No more than 1/3 of the PMC members may be affiliated with the same employer. If
removal or resignation of a PMC member, or a change of employment by a PMC
member, creates a situation where more than 1/3 of the PMC membership shares an
employer, then the situation must be immediately remedied by the resignation or
removal of one or more PMC members affiliated with the over-represented
employer(s).

PMC members have additional responsibilities over and above those of a
Committer. These responsibilities ensure the smooth running of the project. PMC
members are expected to review code contributions, approve changes to this
document, manage the copyrights within the project outputs, and attend regular
PMC meetings.

PMC members fulfill all requirements of Maintainers, and also:

-   May merge external Pull Requests for accepted issues upon reviewing and
    approving the changes.

-   May merge their own Pull Requests once they have collected the feedback they
    deem necessary. (No Pull Request should be merged without at least one
    Maintainer or PMC member comment stating they've looked at the code.)

To become a PMC member, the Maintainer must:

-   Work in a helpful and collaborative way with the community.

-   Have given good feedback on others' submissions and displayed an overall
    understanding of the code quality standards for the project.

-   Commit to being a part of the community for the long-term.

-   Have submitted a minimum of 50 qualifying Pull Requests.

A Maintainer is invited to become a PMC member by existing PMC members. A
nomination will result in discussion and then a decision by the PMC.

#### Process for Adding PMC Members

1.  Add the Maintainer to the "**archetypes-rules** PMC" team

1.  Set the GitHub user to be have the "Owner" role for the archetypes-rules
    organization

1.  Send welcome email with link to Maintainer guide

1.  Add the PMC member to the README

1.  Invite to the **archetypes-rules** PMC chatroom

1.  Make the PMC member an admin on the **archetypes-rules** team mailing list

1.  Add the PMC member to the recurring PMC meeting event on Google Calendar

1.  Add the PMC member as an admin to **archetypes-rules** media channels

1.  Publish congratulatory remarks to the new PMC member on archetypes-rules
    media channels

#### PMC Meetings

The PMC meets every other week in the
[PMC Meeting](https://gitter.im/eslint/tsc-meetings) chatroom. The meeting is
run by a designated moderator approved by the PMC.

Items are added to the PMC agenda which are considered contentious or are
modifications of governance, contribution policy, PMC membership, or release
process.

The intention of the agenda is not to approve or review all patches. That should
happen continuously on GitHub and be handled by the larger group of Maintainers.

Any community member or Maintainer can ask that something be added to the next
meeting's agenda by logging a GitHub Issue. Anyone can add the item to the
agenda by adding the <kbd>pmc: agenda</kbd> tag to the issue.

Prior to each PMC meeting, the moderator will share the Agenda with members of
the PMC. PMC members can add any items they like to the agenda at the beginning
of each meeting. The moderator and the PMC cannot veto or remove items.

No binding votes on PMC agenda items can take place without a quorum of PMC
members present in the meeting. Quorum is achieved when more than half of the
PMC members are present.

The PMC may invite persons or representatives from certain projects to
participate in a non-voting capacity.

The moderator is responsible for summarizing the discussion of each agenda item
and sending it as a Pull Request after the meeting.

## Consensus Seeking Process

The PMC follows a
[Consensus Seeking](https://en.wikipedia.org/wiki/Consensus-seeking_decision-making)
decision making model.

When an agenda item has appeared to reach a consensus, the moderator will ask
"Does anyone object?" as a final call for dissent from the consensus.

If an agenda item cannot reach a consensus, a PMC member can call for either a
closing vote or a vote to table the issue to the next meeting. The call for a
vote must be approved by a majority of the PMC or else the discussion will
continue. Simple majority wins.

* * *

This work is a derivative of
[YUI Contributor Model](https://github.com/yui/yui3/wiki/Contributor-Model) and
the
[Node.js Project Governance Model](https://github.com/nodejs/node/blob/master/GOVERNANCE.md).

This work is licensed under a
[Creative Commons Attribution-ShareAlike 2.0 UK: England & Wales License](https://creativecommons.org/licenses/by-sa/2.0/uk/).

* * *

<h4 align="center">
  Previous: <a href="/docs/maintainer-guide/releases.md"><img align="bottom" alt="chevron-left" height="30" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/chevron-left.svg">3. Release management</a>
  |
  <a href="/docs/maintainer-guide/#readme"><img align="bottom" alt="arrow-up" height="30" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/arrow-up.svg">Back to Maintainer Guide</a>
</h4>
