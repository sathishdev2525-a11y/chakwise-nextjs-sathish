# Chakwise Next.js — Agent Development Rules

## 1. Project Objective

This project is a Next.js + TypeScript recreation of the Chakwise website.

Primary objective:

* Recreate the Chakwise website as accurately as reasonably possible.
* Preserve visual hierarchy, spacing, typography, colors, responsiveness, interactions, animations, and content structure.
* Build production-quality, reusable, maintainable code.
* Do NOT create a one-off page with duplicated JSX/CSS.
* Every suitable UI pattern must be implemented as a reusable component.
* All content/data/configuration should be separated from presentation whenever practical.

---

# 2. Technology Rules

Use the project's existing stack unless explicitly instructed otherwise.

Required:

* Next.js
* React
* TypeScript
* App Router
* Tailwind CSS
* ESLint

Prefer:

* Server Components by default.
* Client Components only when interactivity/state/browser APIs require them.
* Native Next.js features where appropriate.
* `next/image` for local/remote images.
* `next/link` for internal navigation.
* Semantic HTML.
* Accessible interactive elements.

Do NOT introduce unnecessary libraries.

Before installing a new dependency:

1. Determine whether the functionality can be implemented using existing dependencies or native Next.js/React.
2. If a dependency is genuinely useful, document why it is required.
3. Avoid dependency bloat.

---

# 3. Architecture Rules

The project must maintain a clean reusable architecture.

Expected high-level structure:

src/
├── app/
├── components/
├── data/
├── types/
├── constants/
├── utils/
├── hooks/
├── config/
├── lib/
└── styles/

Use the following responsibilities:

### app/

Routing, layouts, page composition and Next.js route-specific functionality.

### components/

Reusable UI components.

Recommended structure:

components/
├── common/
├── layout/
├── home/
└── insights/

Do not put unrelated components into a single large component file.

### data/

Static/content data used by UI sections.

Do not unnecessarily hardcode large content structures directly inside components.

### types/

TypeScript types/interfaces.

Keep reusable domain/component types in dedicated files.

### constants/

Fixed values such as:

* routes
* navigation identifiers
* configuration keys
* fixed labels
* static enums/constants where appropriate

### utils/

Pure reusable helper functions.

Examples:

* class name helpers
* formatting
* slug generation
* URL helpers

Do not place UI components inside utils.

### hooks/

Reusable React hooks only.

### config/

Application/site configuration.

### lib/

Infrastructure/integration logic when required.

### styles/

Global styles, design tokens and shared styling rules.

---

# 4. TypeScript Rules

TypeScript must remain strongly typed.

Do NOT use:

any


unless there is a genuine unavoidable third-party boundary and the reason is documented.

Prefer:


type
interface
union types
generic types
type guards


over loose objects.

Do not duplicate the same interface across multiple files.

If a type is reused by multiple components, move it to `src/types/`.

Keep content models separate from UI implementation.

Example:


export interface Insight {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: InsightCategory;
  image: string;
  publishedAt: string;
}


Then components consume the type rather than redefining it.

---

# 5. Component Rules

Components must follow single responsibility.

Bad:

x
HugePage.tsx


containing:

* header
* hero
* philosophy
* cards
* footer
* animations
* data
* utilities

Good:

text
Header
HeroSection
PhilosophySection
ApproachSection
BeliefsSection
InsightsSection
YoutubeSection
ConnectSection
Footer


Reusable visual patterns should become reusable components.

For example:

text
Section
Container
SectionHeading
Button
Card
Divider


Avoid premature abstraction.

Only abstract when:

* the pattern is reused, or
* the component has a clear reusable responsibility.

---

# 6. Data Separation Rules

Do not mix large static content objects with JSX.

Prefer:

text
src/data/home/hero.ts
src/data/home/philosophy.ts
src/data/home/approach.ts
src/data/home/beliefs.ts
src/data/home/youtube.ts
src/data/insights/insights.ts


Components should consume these data structures.

Example:

x
{approachItems.map((item) => (
  <ApproachCard
    key={item.id}
    item={item}
  />
))}


instead of manually duplicating five cards.

---

# 7. Styling Rules

The website must be visually consistent.

Use centralized design tokens for:

* colors
* typography
* spacing
* container widths
* borders
* radii
* transitions
* shadows

Avoid arbitrary repeated values throughout the project.

If the same visual value appears repeatedly, consider creating a token.

Do not create unnecessary global CSS.

Tailwind should be used consistently with the existing project setup.

---

# 8. Responsive Design Rules

Every section must work correctly at:

* mobile
* tablet
* desktop
* large desktop

Do not implement desktop-only UI and postpone mobile support.

Responsive behavior must be considered while implementing each section.

Pay special attention to:

* navigation
* hero layout
* typography
* section spacing
* cards
* grids
* images
* buttons
* footer
* mobile menu

---

# 9. Accessibility Rules

All UI must be test-friendly and accessibility-friendly.

Use:

* semantic HTML
* proper heading hierarchy
* accessible buttons
* accessible links
* meaningful alt text
* keyboard navigation
* visible focus states
* appropriate ARIA only when necessary

Do not use:

html
<div onClick={...}>


when a semantic button/link is appropriate.

Interactive elements must have accessible names.

---

# 10. Testability Rules

ALL UI code and functionality must be implemented in a way that can be tested.

Avoid implementation patterns that make components impossible or unnecessarily difficult to test.

Prefer:

* stable semantic elements
* meaningful accessible names
* predictable DOM structure
* deterministic data
* isolated reusable components
* separated business logic
* pure utility functions

Do not use random values for UI behavior unless genuinely required.

Avoid unnecessary time-based behavior that makes testing unreliable.

---

# 11. SECTION-BY-SECTION DEVELOPMENT RULE

The website MUST be developed section-by-section.

Do NOT implement the entire website in one step.

Each section is considered incomplete until:

1. Its implementation is finished.
2. Responsive behavior is implemented.
3. Accessibility considerations are implemented.
4. Reusable components are extracted where appropriate.
5. Data/types are separated appropriately.
6. The section is visually reviewed.
7. The user confirms the section is correct.

---

# 12. STRICT TESTING RULE

IMPORTANT:

DO NOT run tests before the current section is implementation-complete.

DO NOT run the test suite after every small code change.

During implementation:

* inspect code
* reason about correctness
* fix obvious issues
* complete the entire section

Only after the section is fully implemented and the user confirms:

> Section approved

then:

1. Create/update the relevant test cases.
2. Run the tests.
3. Fix all failures.
4. Run the tests again until successful.
5. Only after tests pass, run the production build.
6. Only after build succeeds, create the Git commit.

Do NOT run a production build before the test stage has passed.

---

# 13. TEST ORDER

For every approved section:

text
Implementation complete
        ↓
User confirms section
        ↓
Write/update test cases
        ↓
Run tests
        ↓
Fix failures
        ↓
Run tests again
        ↓
Tests PASS
        ↓
Run production build
        ↓
Build PASS
        ↓
Git commit


Never reverse this order.

---

# 14. Git Rules

This is a fresh project.

Each successfully completed section must have its own Git commit.

Commit only after:

* implementation completed
* user approved
* tests passed
* production build passed

Use conventional commit style.

Examples:

text
feat(header): implement responsive navigation
feat(hero): implement hero section
feat(philosophy): implement philosophy section
feat(approach): implement investment approach section
feat(beliefs): implement signature beliefs section
feat(insights): implement insights section
feat(youtube): implement video section
feat(contact): implement contact section
feat(footer): implement responsive footer


Do not use vague commits such as:

text
update
changes
done
final
website


---

# 15. Git Commit Description Rule

After each successful section completion, provide exactly:

### Git Title

text
<conventional commit title>


### Description 1

One short sentence explaining what was implemented.

### Description 2

One short sentence explaining reusable/architectural work completed.

### Description 3

One short sentence confirming testing/build status.

Example:

text
Git Title:
feat(hero): implement responsive hero section

Description 1:
Implemented the Chakwise hero section with matching layout, typography, CTA and responsive behavior.

Description 2:
Separated hero content into typed data and reused common layout primitives.

Description 3:
Section tests passed and production build completed successfully.


Keep these descriptions short.

---

# 16. No Premature Git Commit

Do NOT commit:

* half-finished sections
* broken code
* failing tests
* failing build
* temporary experiments
* debug code
* commented-out abandoned implementations

---

# 17. Do Not Modify Completed Sections Unnecessarily

Once a section has been approved and committed:

* Do not rewrite it without a reason.
* Do not introduce unrelated changes.
* Do not refactor completed sections while working on another section unless required for integration.
* If a completed section must change, explain why.

Preserve previously approved behavior.

---

# 18. Visual Accuracy Rules

The target is a high-fidelity recreation of Chakwise.

For each section compare:

* layout
* spacing
* typography
* font weight
* font size
* line height
* colors
* borders
* images
* image positioning
* CTA appearance
* alignment
* responsive behavior
* hover states
* transitions
* animations

Do not replace the visual design with a generic template.

---

# 19. Image Rules

Use appropriate Next.js image handling.

Prefer:

x
<Image />


instead of raw:

html
<img />


unless there is a specific reason.

Do not invent unrelated stock imagery when an existing Chakwise asset can be identified.

Keep image paths/data separate from components.

---

# 20. Content Rules

Do not silently rewrite important Chakwise content.

If exact text is available, preserve it.

If content cannot be verified:

* do not fabricate facts
* use a clearly marked placeholder only when necessary
* keep the placeholder isolated so it can easily be replaced

---

# 21. No Unnecessary Features

Do not add:

* authentication
* database
* CMS
* API
* backend
* admin dashboard
* unnecessary state management
* unnecessary animations
* unnecessary third-party packages

unless explicitly requested.

The first objective is an accurate frontend recreation.

---

# 22. Error Handling

Do not ignore TypeScript, ESLint or runtime errors.

Do not suppress errors with:


// @ts-ignore


or:


// eslint-disable


unless absolutely necessary and documented.

Fix the underlying problem whenever possible.

---

# 23. Code Quality

Code should be:

* readable
* predictable
* modular
* strongly typed
* reusable
* accessible
* responsive
* testable

Prefer clarity over cleverness.

Do not over-engineer simple UI.

---

# 24. Agent Communication Rule

Before implementing a section:

1. Explain what will be implemented.
2. List the files expected to be created/modified.
3. Implement ONLY that section.
4. Do not move to the next section automatically.
5. Stop after implementation and wait for user review.

After the user approves:

1. Create/update tests.
2. Run tests.
3. Run build after tests pass.
4. Provide Git title + exactly three short descriptions.
5. Wait for the next instruction.

---

# 25. Section Order

Unless the user explicitly changes the order, use this implementation order:

1. Project foundation / design tokens
2. Common reusable components
3. Header / navigation
4. Hero
5. Philosophy
6. Quiet Rebuild
7. Quiet Assets
8. Approach
9. Signature Beliefs
10. Insights
11. YouTube / video section
12. Connect / contact
13. Footer
14. Insights listing page
15. Individual insight page
16. Final responsive refinement
17. Final accessibility refinement
18. Final visual QA
19. Final production build

Never automatically skip ahead.

---

# 26. Final Principle

Build this as a professional reusable Next.js application, not as a screenshot hack.

Every implementation decision should answer:

* Is it reusable?
* Is it strongly typed?
* Is it responsive?
* Is it accessible?
* Is it testable?
* Is it maintainable?
* Does it preserve Chakwise's visual identity?

If the answer is no, improve the implementation before considering the section complete.

# 27. Typography and Font Lock Rules

Typography is a critical part of the Chakwise recreation.

The exact font must be identified and established BEFORE implementing any visual section.

## Font Identification

Before Section 01 or any UI implementation:

1. Inspect the actual Chakwise website.
2. Identify the exact font family/families used by the website.
3. Do NOT guess the font based only on visual similarity.
4. Inspect available CSS, computed styles, loaded font information, source/network information, or other reliable evidence.
5. Determine whether the website uses:

   * Google Fonts
   * locally hosted fonts
   * custom fonts
   * multiple font families

The actual Chakwise website is the source of truth.

## Google Font Rule

If Chakwise uses a Google Font:

* Use the exact Google Font family.
* Prefer `next/font/google` for Next.js integration.
* Do NOT use a visually similar substitute.
* Do NOT use a random font such as Inter, Poppins, Montserrat, Roboto, etc. unless Chakwise actually uses it.
* Load only the required font weights.
* Avoid unnecessary font files.
* Configure the font centrally so all sections use the same typography system.

## Custom Font Rule

If Chakwise uses a custom/local font:

* Identify the exact font family.
* Do not silently replace it with a Google Font.
* If the font files are publicly available and legally usable, determine the appropriate way to include them.
* If the font cannot be legally or technically included, report the limitation before proceeding.
* Do not make an arbitrary font substitution without user approval.

## Typography Must Be Locked Before UI Sections

Do NOT start implementing:

* Header
* Hero
* Philosophy
* Quiet Rebuild
* Quiet Assets
* Approach
* Beliefs
* Insights
* YouTube
* Connect
* Footer

until the typography/font has been identified and established.

Typography must be treated as a project-level foundation.

## Centralized Typography

Do NOT define font families independently inside individual components.

Avoid patterns such as:

className="font-[SomeFont]"


repeated throughout the application.

Instead, establish the font centrally through the appropriate Next.js/font and design-token architecture.

Future components should consume the centralized typography system.

## Typography Tokens

Where appropriate, establish semantic typography levels such as:

* display
* h1
* h2
* h3
* body
* body-small
* eyebrow/label
* navigation
* button
* caption

Do not create unnecessary typography levels.

The typography system must be based on the actual Chakwise design.

## Typography Properties

When inspecting Chakwise, determine as accurately as possible:

* font family
* font weight
* font size
* line height
* letter spacing
* text transformation
* italic/normal style
* heading/body differences
* navigation typography
* CTA/button typography
* responsive typography changes

Do not approximate these values unnecessarily when the actual website provides reliable information.

## Responsive Typography

Typography must remain consistent with Chakwise across:

* desktop
* large desktop
* tablet
* mobile

If Chakwise changes typography scale at different breakpoints, reproduce that behavior.

## No Independent Font Decisions

Once the typography is identified and approved:

* Do not introduce another font without explicit approval.
* Do not change the primary font while implementing later sections.
* Do not install another font because a section "looks better" with it.
* Do not override the global typography system unnecessarily.

All sections must use the locked typography system.

## Typography Verification

Before beginning Section 01:

1. Identify the exact font.
2. Configure the font.
3. Configure the global typography system.
4. Verify that the font loads correctly.
5. Verify that the application renders without font-related errors.
6. Report the identified font and weights to the user.
7. Wait for user approval.

Do NOT proceed to visual section implementation until the user approves the typography.

## Typography Priority

For visual accuracy, typography has high priority.

The implementation priority is:

Actual Chakwise Font
        ↓
Font Weights
        ↓
Typography Scale
        ↓
Line Height
        ↓
Letter Spacing
        ↓
Responsive Typography
        ↓
Section Layout

Do not compensate for an incorrect font by manually changing spacing.

Correct typography must be e
