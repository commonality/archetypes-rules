# Architecture Decision Record: Modular Design

[![Created on][octicon-calendar]][adr-0002]
<time datetime="2019-03-20">2019-03-20</time>

## Status

[![adr: accepted][adr-accepted-badge]][adr-0002]

## Context

The **archetypes-rules** group creates security-based software solutions for the
**benefit** of anyone in **the world**. We have two broad goals:

1.  **Reusability.** Different software packages, written by different
    developers, should be usable and interchangeable in the same application
    with a minimum of effort.

1.  **Community.** The more people use our security-based products, the more
    likely some of those people will contribute to and harden our products.
    Transparency results in better software. **People are more likely to
    contribute to smaller, less complex software** with issues that require less
    time to complete. Consequently, engineers can safely working on modular
    software (as opposed to larger, more tightly-coupled applications), and
    their managers are less likely to forbid voluntary contributions.

1.  **Modular programming facilitates reusability _and_ community** People
    cannot "quit their day jobs" for free, voluntary contributions. Issues that
    require less time to complete. Consequently, engineers can safely working on
    modular software (as opposed to larger, more tightly-coupled applications),
    and their managers are less likely to forbid voluntary contributions. We
    share the belief that <q cite="http://www.jstor.org/stable/20110584">...the
    architecture of a codebase is a critical factor that lies at the heart of
    the open source development process.</q> [^1] Therefore, we invite community
    participation when we maintain a core set of **modular design principles**.

    > ![citation][octicon-quote] <cite>Modular programming is a software design
    > technique that emphasizes separating the functionality of a program into
    > independent, interchangeable modules, such that each contains everything
    > necessary to execute only one aspect of the desired
    > functionality.</cite> > [^2]

1.  **Keep it Simple: release "minimally reusable products.** The Release/Reuse
    Principle should follow the Single Responsibility Principle. As soon as
    software fulfills its responsibility in isolation, it should be considered a
    minimally viable product and a candidate for formal release and
    distribution.

## Decision

Whenever possible, our software releases will be _modular_.

We will create and publish a checklist of conditions, that, when completed,
allows engineers to classify a component as "reusable." This checklist will
include, but not necessarilly be limited to:

-   Testing requirements (e.g., acceptable unit test coverage thresholds)
-   Recommended tools and frameworks (e.g., boilerplate repositories by
    programming language)
-   Documentation such as Installation and Usage instructions

Our cloud/service-based delivery workflow will be:

1.  Create a reusable module as _standalone_ software.
1.  Expose the standalone module to different clients using the MVC design
    pattern, e.g.,
    -   `ModuleNameRestController` would invoke the standalone software to expose
        `ModuleName` as a Web service
    -   `ModuleNameCliController` would invoke the standalone software to expose
        `ModuleName` to Terminal clients

## Consequences

Moving from a monolythic to modular mindset will require "building muscules". We
should therefore either build time into release schedules, or, identify
candidates for modularization and hand them off as InnerSource "help wanted"
Issues.

## References

[^1]\:

  Baldwin, C., & Clark, K. (2006). The Architecture of Participation: Does Code
  Architecture Mitigate Free Riding in the Open Source Development Model?
  Management Science, 52(7), 1116-1127. Retrieved from
  <http://www.jstor.org/stable/20110584>

[^2]\:

  _Modular programming_. (2019). _En.wikipedia.org_. Retrieved 12 March 2019,
  from <https://en.wikipedia.org/wiki/Modular_programming>

[^3]\:

  Mak, S. (2017). _Modules vs. microservices. O'Reilly Media_. Retrieved 12
  March 2019, from <https://www.oreilly.com/ideas/modules-vs-microservices>

<!-- Do not remove this line or anything under it. -->

[adr-0002]: docs/adr/adr-0002-architecture-decision-record-modular-design.md

[adr-accepted-badge]: https://flat.badgen.net/badge/ADR/accepted/44AD8E

[adr-proposed-badge]: https://flat.badgen.net/badge/ADR/proposed/AC900D

[adr-rejected-badge]: https://flat.badgen.net/badge/ADR/rejected/D9534F

[adr-deprecated-badge]: https://flat.badgen.net/badge/ADR/deprecated/7F8C8D

[octicon-calendar]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/calendar.svg

[octicon-quote]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/quote.svg
