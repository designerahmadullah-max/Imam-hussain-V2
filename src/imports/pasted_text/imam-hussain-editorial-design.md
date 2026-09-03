PROJECT: IMAM HUSSAIN — COMPLETE EDITORIAL WEBSITE DESIGN SYSTEM & RESPONSIVE UI

Create a complete, production-quality responsive website design for an editorial Islamic knowledge website dedicated to Imam Hussain (A.S.), his life, Karbala, Muharram, Arbaeen, teachings, companions, family, Ziarat, and related subjects.

The supplied Imam Hussain homepage design and category page design are the PRIMARY AND AUTHORITATIVE VISUAL REFERENCES.

The goal is to recreate the same visual language, structure, proportions, spacing, typography, image treatment, navigation, and editorial feeling shown in the reference designs while creating a reusable component system that can ultimately be implemented as a custom WordPress theme using Elementor Free and custom Elementor widgets.

==================================================
1. MOST IMPORTANT RULE — REFERENCE DESIGN IS THE SOURCE OF TRUTH
==================================================

DO NOT invent arbitrary dimensions.

DO NOT introduce fixed pixel sizes based on generic design-system recommendations.

DO NOT replace the supplied design with a generic blog, magazine, SaaS, or Elementor-style layout.

The supplied Figma/reference design is the SINGLE SOURCE OF TRUTH for visual design.

Extract the visual system directly from the reference, including:

- typography sizes
- typography hierarchy
- font weights
- line heights
- letter spacing
- container widths
- column widths
- gutters
- margins
- padding
- section spacing
- image dimensions
- image proportions
- card dimensions
- button proportions
- border radius
- border treatment
- shadows
- navigation spacing
- footer proportions
- icon sizes
- alignment
- responsive relationships

If a value can be determined from the reference, follow the reference.

If an exact value cannot be determined, infer it from the surrounding visual system and maintain consistency with the reference.

Do not impose an unrelated design system.

The finished website should look like the SAME WEBSITE represented by the supplied designs.

==================================================
2. DESIGN CHARACTER
==================================================

The website should feel:

- Editorial
- Historical
- Spiritual
- Respectful
- Premium
- Calm
- Timeless
- Elegant
- Content-focused
- Highly readable

Avoid:

- SaaS styling
- excessive rounded cards
- glassmorphism
- neon colors
- excessive gradients
- excessive shadows
- oversized UI controls
- generic WordPress blog styling
- generic Elementor styling
- overly animated interfaces

Whitespace is an important part of the design.

Preserve the calm editorial rhythm shown in the reference.

==================================================
3. TYPOGRAPHY
==================================================

The reference design uses:

HEADING FONT:
DM Serif Display

BODY/UI FONT:
Inter

Use DM Serif Display for the editorial heading hierarchy.

Use Inter for:

- navigation
- body text
- category labels
- metadata
- buttons
- descriptions
- captions
- footer
- utility UI
- article metadata

Do not use DM Serif Display for long paragraphs.

==================================================
4. GLOBAL TYPOGRAPHY SYSTEM
==================================================

Create reusable global typography styles based directly on the supplied design.

The system must contain:

- Display
- H1
- H2
- H3
- H4
- Body Large
- Body
- Body Small
- Caption
- Category Label
- Navigation
- Button

IMPORTANT:

Do not arbitrarily assign pixel sizes to these styles.

Determine the actual scale, proportions, weight, line-height, and spacing from the reference design.

The typography should reproduce the visual hierarchy of the supplied design.

==================================================
5. HEADING SEMANTICS
==================================================

Separate visual typography from semantic HTML hierarchy.

Each page must contain only one H1.

Homepage:

H1 = primary homepage title.

Category page:

H1 = category title.

Individual article page:

H1 = article title.

Major sections should use H2.

Article/card titles should generally use H3 or another semantically appropriate heading level.

Do not use heading tags purely because a text element looks large.

The visual typography styles must be reusable independently of the semantic HTML level.

==================================================
6. RESPONSIVE TYPOGRAPHY
==================================================

Do not simply scale desktop typography proportionally.

Study the reference design and create appropriate responsive typography for:

- Desktop
- Laptop
- Tablet
- Mobile

The hierarchy must remain visually consistent.

Mobile typography should be deliberately composed rather than being a simple scaled-down desktop version.

==================================================
7. COLOR SYSTEM
==================================================

Extract the actual color palette directly from the supplied reference design.

Create global reusable color variables for:

- Primary brand red
- Secondary/deeper red
- Primary text
- Secondary text
- Muted text
- Warm background
- Cream background
- White
- Borders
- Footer background
- Footer secondary background
- Any subtle accent colors

Do not substitute generic colors.

Maintain the exact visual relationships between the colors shown in the reference.

Use global color variables throughout the component system.

Do not independently choose colors for individual components unless specifically required.

==================================================
8. LAYOUT & SPACING
==================================================

Do not define arbitrary global spacing values.

Analyze the reference design and establish a reusable spacing system based on the actual design.

Identify recurring relationships between:

- page edges
- main content container
- section headings
- images
- article cards
- paragraphs
- buttons
- grids
- columns
- navigation
- footer
- whitespace

Reuse those relationships consistently.

Do not make sections unnecessarily taller or shorter than the reference.

Preserve the editorial whitespace.

==================================================
9. CONTAINER & GRID
==================================================

Determine the main content width and grid system directly from the reference design.

Use the same visual proportions as the reference.

The layout should have:

- centered main content
- consistent page gutters
- consistent column alignment
- consistent grid relationships
- consistent spacing between cards

Do not introduce arbitrary container widths.

The desktop grid, tablet grid, and mobile layout should all be derived from the reference design.

==================================================
10. BORDERS, RADIUS & SHADOWS
==================================================

Extract these visual properties from the reference.

Use restrained:

- border radius
- borders
- shadows
- separators

Do not introduce heavy shadows or excessive rounding.

Images and cards should visually match the reference.

==================================================
11. BUTTON SYSTEM
==================================================

Create reusable button components matching the reference design.

Include:

Primary button
Secondary button
Text link

Each should include:

- default state
- hover state
- focus state
- active state
- disabled state where appropriate

Do not invent button dimensions.

Determine button proportions, padding, typography, radius, borders, and spacing directly from the reference.

Transitions should be subtle and consistent with the editorial design.

==================================================
12. IMAGE SYSTEM
==================================================

Images are an important part of the visual identity.

Use the reference designs to determine:

- image aspect ratios
- image cropping
- image radius
- image placement
- image-to-text relationship
- image proportions
- object positioning

Never distort images.

Use object-fit behavior appropriate to the reference.

Images should feel editorial and atmospheric.

The implementation should support responsive images and appropriate WordPress image sizes.

==================================================
13. GLOBAL HEADER
==================================================

Create a reusable global Header component.

The header should closely reproduce the supplied reference.

Visual characteristics include:

- clean white header
- subtle top brand accent
- centered Imam Hussain logo
- elegant navigation
- search control
- restrained spacing
- active navigation styling

Main navigation:

Imam Hussain
Muharram
Karbala
Arbaeen
Lessons
Resources

Imam Hussain contains:

Family
Companions
Ziarat

Navigation structure:

Imam Hussain
    Family
    Companions
    Ziarat

Muharram
Karbala
Arbaeen
Lessons
Resources

Every category and subcategory must be clickable.

Active category should follow the visual treatment in the reference.

Do not hard-code URLs.

The WordPress implementation will provide the actual links.

==================================================
14. MOBILE HEADER
==================================================

Create a responsive mobile header.

Use the reference design as the visual source.

Mobile header should include:

- logo
- menu control
- search if present in the reference
- expandable navigation

Nested categories should be visually clear.

Imam Hussain:

- Family
- Companions
- Ziarat

The mobile navigation must be accessible and keyboard-friendly.

==================================================
15. HOMEPAGE
==================================================

Create the homepage as a collection of reusable sections.

The order is:

1. Global Header
2. Hero
3. Explore by Topics
4. Article Section 1
5. Article Section 2 — Two Image Feature
6. Featured Articles
7. Red Philosophy Panel
8. New Articles
9. Why Imam Hussain's Message Still Matters Today
10. Karbala & Ziarat
11. Most Popular
12. Related Website Banners
13. Global Footer

The homepage should visually match the supplied homepage reference.

==================================================
16. HERO SECTION
==================================================

Create the large editorial hero shown in the reference.

The hero contains:

- category/eyebrow
- primary H1
- introductory description
- primary CTA
- secondary CTA
- large atmospheric Karbala / shrine artwork

The composition should reproduce the reference.

The artwork should feel integrated into the background rather than appearing as a generic rectangular stock image.

Desktop should follow the reference composition.

Mobile should stack and reorganize appropriately while preserving the visual hierarchy.

Example content:

Imam Hussain:

The Legacy of Karbala

Imam Hussain (A.S.) is the eternal symbol of truth, justice, sacrifice and human dignity.

Buttons:

Explore Articles
About Imam Hussain

The exact content may be replaced later.

==================================================
17. EXPLORE BY TOPICS
==================================================

Create the "EXPLORE BY TOPICS" section.

Display the available category and subcategory links in the same editorial navigation style as the reference.

Show:

Imam Hussain
Muharram
Karbala
Arbaeen
Lessons
Family
Companions
Ziarat

DO NOT show Resources in this section.

Every item links to its related category page.

The active topic should have the visual active state shown in the reference.

On mobile, use an appropriate horizontal scrolling behavior if necessary rather than creating an overcrowded multi-line navigation.

==================================================
18. ARTICLE SECTION 1
==================================================

Create the primary editorial article feature immediately below Explore by Topics.

The article content is dynamic.

The component should support:

- category
- title
- excerpt
- featured image
- article URL
- metadata if present in the reference

Use the same text-to-image relationship shown in the supplied design.

Do not hard-code article content into the component.

==================================================
19. ARTICLE SECTION 2 — TWO IMAGE FEATURE
==================================================

Create the special article section shown in the homepage reference.

IMPORTANT:

The article text is dynamic.

The two images are manually selected directly inside the Elementor widget.

The images MUST NOT automatically come from the selected article.

Widget should eventually support:

- article selection
- image 1
- image 2
- optional image positioning
- optional category/eyebrow
- optional button

Dynamic article fields:

- title
- excerpt
- category
- URL
- metadata where appropriate

The visual composition should closely follow the reference.

==================================================
20. FEATURED ARTICLES
==================================================

Create the Featured Articles section.

The reference contains:

A. Main Featured Article

B. Featured Thumbnail Articles

Main Featured should contain:

- image
- category
- title
- excerpt
- metadata

Featured Thumbnail cards should contain:

- small image
- category
- title
- metadata

Create reusable components:

Article / Featured Main

Article / Featured Thumbnail

The visual proportions should come from the reference.

==================================================
21. RED PHILOSOPHY PANEL
==================================================

Create the full-width red editorial statement panel shown in the reference.

It contains multiple statements.

Each item includes:

- subtle icon
- editorial statement

Example content:

His love, lives in
Millions of Hearts.

He stood alone, so justice
would never stand alone.

He lost everything,
but never his honor.

Use the actual visual proportions and spacing from the reference.

Use subtle editorial line icons.

This section is primarily static content.

==================================================
22. NEW ARTICLES
==================================================

Create the New Articles section below the red panel.

The reference shows a grid of recent articles.

Default behavior:

Display six recent articles.

Use the same grid relationship shown in the reference.

Article cards contain:

- category
- title
- image
- metadata

WordPress should dynamically populate these articles.

Support:

- latest articles globally
- optional category filtering
- optional manual article selection

Avoid duplicate articles when possible.

==================================================
23. WHY IMAM HUSSAIN'S MESSAGE STILL MATTERS TODAY
==================================================

Create the horizontal editorial card section from the reference.

Heading:

Why Imam Hussain's Message
Still Matters Today

Include introductory text.

Below it create horizontally scrolling cards.

Each card contains:

- icon
- heading
- description

Example cards:

Stand for Justice
Source of Inspiration
Love & Compassion
Unity & Brotherhood
Timeless Message

IMPORTANT INTERACTION:

Cards should move horizontally with a smooth, subtle continuous animation.

When the user hovers over the section:

PAUSE the animation.

When the user stops hovering:

RESUME the animation.

On touch devices:

Allow natural horizontal scrolling.

The number of cards must be dynamic.

The eventual Elementor widget must allow:

- Add card
- Remove card
- Reorder cards
- Select icon
- Edit heading
- Edit description

Do not make the animation distracting.

Respect prefers-reduced-motion.

==================================================
24. KARBALA & ZIARAT
==================================================

Create the atmospheric Karbala & Ziarat section shown in the reference.

Heading:

Karbala & Ziarat:
A Glimpse of Paradise on Earth

Include introductory text.

IMPORTANT:

The article/content is dynamic.

The images are manually selected directly from the widget.

Images MUST NOT automatically come from the selected article.

Widget controls should eventually support:

- article selection
- image 1
- image 2
- image 3
- optional background image
- title override
- description override

The visual treatment should be atmospheric, spacious, warm and spiritual.

==================================================
25. MOST POPULAR
==================================================

Create the Most Popular section.

Use the same structure as the reference.

Content columns:

Imam Hussain (A.S.)

- Biography
- Family & Lineage
- Companions
- Teachings & Letters
- Life & Legacy

Karbala & Muharram

- Battle of Karbala
- Events of Karbala
- Martyrs of Karbala
- Ashura
- Arbaeen

Teachings & Lessons

- Moral Lessons
- Quotes
- Justice & Freedom
- Patience & Faith
- Humanity & Peace

These links must eventually be editable.

Each link needs:

- label
- URL
- optional new-tab setting

Do not hard-code the URLs.

==================================================
26. RELATED WEBSITE BANNERS
==================================================

Create the two related-site promotional banners shown in the reference.

Banner 1:

Imam Ali (A.S.)

Banner 2:

Imam Mahdi (A.S.)

These link to separate external websites.

The widget must eventually allow editing:

- logo
- icon
- title
- description
- URL
- optional background
- link target

Example text:

Imam Ali (A.S.)
Discover the life, wisdom, teachings, and legacy of Imam Ali (A.S.).

Imam Mahdi (A.S.)
Discover the life, mission, and teachings of Imam Mahdi (A.S.).

Keep these banners visually subordinate to the main editorial content.

==================================================
27. GLOBAL FOOTER
==================================================

Create a reusable global Footer component.

The footer should closely reproduce the supplied design.

It contains:

- Imam Hussain logo/brand
- primary navigation
- contact email
- social media links
- copyright
- decorative/brand elements

Navigation:

Imam Hussain
Muharram
Karbala
Arbaeen
Lessons
Resources

Footer links must eventually be editable.

Social links must eventually be editable.

Email must eventually be editable.

Copyright text must eventually be editable.

The footer is GLOBAL and must not be recreated separately on each page.

==================================================
28. CATEGORY ARCHIVE PAGE
==================================================

Create a reusable Category page template based on the supplied category reference.

The same template should work for:

Imam Hussain
Family
Companions
Ziarat
Muharram
Karbala
Arbaeen
Lessons
Resources

Structure:

Global Header

Breadcrumb

Category title / introduction

Top Featured

Box Featured

Box Thumbnail 1

Box Thumbnail 2

Article listing

Additional article sections

You Might Be Interested to Read

Karbala & Ziarat

Most Popular

Related Website Banners

Global Footer

Do not create a separate manually designed Elementor page for every category.

Use one reusable category template with dynamic WordPress data.

==================================================
29. CATEGORY TOP FEATURE
==================================================

Every category must support a Top Featured article.

The administrator should be able to select the article.

Dynamic fields:

- title
- excerpt
- image
- category
- URL
- metadata

Use the same visual composition as the category reference.

==================================================
30. CATEGORY BOX FEATURED
==================================================

Create a larger featured article box.

Article selection is dynamic.

The component should automatically load the selected article's:

- title
- image
- category
- excerpt
- URL

==================================================
31. CATEGORY BOX THUMBNAILS
==================================================

Support:

Box Thumbnail 1

Box Thumbnail 2

Each can have a different selected article.

The article content remains dynamic.

==================================================
32. CATEGORY ARTICLE GRID
==================================================

Display the category's articles dynamically from WordPress.

The category page should automatically retrieve articles assigned to the current category.

Support:

- pagination
- load more if appropriate
- configurable number of articles
- ordering
- exclusion of featured articles when necessary

Avoid showing the same article repeatedly across sections where possible.

==================================================
33. INDIVIDUAL ARTICLE PAGE
==================================================

Create a reusable individual article template.

Structure:

Global Header

Breadcrumb

Category

Article H1

Introduction / excerpt

Featured image

Article metadata

Article content

Related articles

You Might Be Interested to Read

Karbala & Ziarat

Most Popular

Related Website Banners

Global Footer

The article page should be completely dynamic.

Do not create individual Elementor pages for every article.

==================================================
34. ARTICLE CONTENT
==================================================

Article content should come from the WordPress editor.

Support:

- paragraphs
- headings
- images
- quotes
- lists
- links
- tables if required
- other standard editorial content

The design should provide strong readability for long-form articles.

Maintain appropriate hierarchy and spacing.

==================================================
35. ARTICLE EDITORIAL PLACEMENT SYSTEM
==================================================

Every WordPress article must have additional editorial placement controls.

An article can be selected to appear in multiple locations.

HOMEPAGE PLACEMENTS:

- Hero
- Article Section 1
- Article Section 2
- Featured Main
- Featured Thumbnail 1
- Featured Thumbnail 2
- Featured Thumbnail 3
- Featured Thumbnail 4
- New Articles

CATEGORY PLACEMENTS:

- Top Featured
- Box Featured
- Box Thumbnail 1
- Box Thumbnail 2

An article may appear in multiple placements.

The implementation should support priority/order for placements where necessary.

Example:

Article:
"The Battle of Karbala"

Homepage:
Hero = enabled
Featured Main = enabled

Category:
Top Featured = enabled

Priority/order can determine which article appears first when multiple articles are assigned to the same placement.

==================================================
36. IMPORTANT DYNAMIC CONTENT PRINCIPLE
==================================================

NEVER duplicate article content manually into homepage or category sections.

Article information should come from WordPress.

Dynamic article fields include:

- article ID
- title
- slug
- excerpt
- content
- featured image
- category
- subcategory
- author
- published date
- modified date
- reading time
- URL

The design should make clear which information is dynamic.

==================================================
37. WORDPRESS CONTENT STRUCTURE
==================================================

The final implementation will use:

Custom WordPress Theme
+
Elementor Free
+
Custom Elementor Widgets
+
WordPress Posts
+
WordPress Categories / Taxonomies
+
WordPress Post Meta / Custom Fields

Articles should remain standard WordPress posts unless there is a compelling reason otherwise.

Do not duplicate articles as separate Elementor pages.

Do not manually copy article content into widgets.

==================================================
38. CATEGORY STRUCTURE
==================================================

Main categories:

1. Imam Hussain
2. Muharram
3. Karbala
4. Arbaeen
5. Lessons
6. Resources

Subcategories under Imam Hussain:

1. Family
2. Companions
3. Ziarat

Use a proper WordPress taxonomy/category relationship.

Family, Companions and Ziarat should be child categories of Imam Hussain.

Each category and subcategory has its own archive page.

==================================================
39. CATEGORY URL STRUCTURE
==================================================

The final WordPress architecture should support logical category URLs such as:

/imam-hussain/

/imam-hussain/family/

/imam-hussain/companions/

/imam-hussain/ziarat/

/muharram/

/karbala/

/arbaeen/

/lessons/

/resources/

Do not hard-code these URLs into visual components.

WordPress should generate the actual URLs.

==================================================
40. CUSTOM ELEMENTOR WIDGET ARCHITECTURE
==================================================

Each major visual section should be designed as a reusable component that can eventually become a custom Elementor widget.

Suggested widgets:

IH Header
IH Hero
IH Explore Topics
IH Article Feature
IH Article Dual Image
IH Featured Articles
IH Philosophy Panel
IH New Articles
IH Message Cards
IH Karbala Ziarat
IH Most Popular
IH Related Sites
IH Footer

Category widgets:

IH Category Hero
IH Category Top Featured
IH Category Box Featured
IH Category Thumbnail Grid
IH Category Articles

Article widgets:

IH Article Header
IH Article Content
IH Related Articles

==================================================
41. ELEMENTOR WIDGET CONTROL STRUCTURE
==================================================

Each custom widget should conceptually separate its controls into:

CONTENT

QUERY

DESIGN

ADVANCED

CONTENT controls:

- text
- article selection
- images
- icons
- buttons
- links
- cards

QUERY controls:

- category
- number of posts
- automatic/manual mode
- sort order
- exclusions

DESIGN controls:

- typography
- colors
- spacing
- image behavior

ADVANCED controls:

- custom CSS class
- visibility
- optional animation

Do not expose unnecessary controls.

Global design settings should control most styling automatically.

==================================================
42. GLOBAL THEME SETTINGS
==================================================

Create a centralized global settings concept for:

Brand
Typography
Colors
Buttons
Container
Spacing
Image treatment
Transitions
Header
Footer
Related websites

The visual system should be controlled globally.

Editors should not have to manually recreate the same styling on every widget.

==================================================
43. HEADER AND FOOTER ARCHITECTURE
==================================================

Header and footer should be global theme-level components.

Do NOT require the editor to manually add a Header widget to every page.

Do NOT require the editor to manually add a Footer widget to every page.

The eventual WordPress theme should automatically render:

Global Header
+
Page/Elementor Content
+
Global Footer

The administrator should be able to modify header and footer settings from one central location.

==================================================
44. GLOBAL SITE SETTINGS
==================================================

Create a conceptual central settings area:

SITE SETTINGS

Brand
- Logo
- Favicon
- Brand assets

HEADER
- Logo
- Navigation
- Search
- Mobile navigation

FOOTER
- Logo
- Navigation
- Email
- Social links
- Copyright

RELATED WEBSITES

Imam Ali
- Logo
- Title
- Description
- URL

Imam Mahdi
- Logo
- Title
- Description
- URL

These should be reusable throughout the website.

==================================================
45. MOST POPULAR SETTINGS
==================================================

Most Popular links should be editable from one central configuration.

Do not hard-code the link destinations.

Administrator should be able to:

- add item
- remove item
- reorder item
- edit label
- edit URL
- optionally select new tab

==================================================
46. SEO-FIRST DESIGN
==================================================

The visual architecture must support strong technical SEO.

Requirements:

- one H1 per page
- correct H2/H3 hierarchy
- semantic HTML
- real links
- real buttons
- article semantic structure
- accessible navigation
- meaningful image alt text
- visible article metadata
- category links
- pagination where appropriate
- crawlable article URLs
- no important text embedded inside images

Article cards should use semantic article structures.

Use appropriate:

article
header
figure
time
heading
navigation

where appropriate.

Do not rely on JavaScript-only navigation.

==================================================
47. ACCESSIBILITY
==================================================

Design toward WCAG AA.

Requirements:

- keyboard accessible navigation
- visible focus states
- accessible buttons
- accessible links
- meaningful alt text
- decorative images should have appropriate empty alt treatment
- do not rely on color alone to indicate state
- sufficient contrast
- accessible mobile navigation
- accessible interactive cards
- reduced-motion support

==================================================
48. PERFORMANCE
==================================================

The design should be implementation-friendly for a fast WordPress website.

Avoid unnecessary:

- animations
- JavaScript-heavy effects
- oversized decorative assets
- duplicated DOM structures
- huge background media
- unnecessary visual effects

Images should be prepared for:

- responsive delivery
- lazy loading below the fold
- appropriate WordPress image sizes
- optimized file sizes

The primary hero/LCP image should be handled appropriately in implementation.

==================================================
49. ANIMATION SYSTEM
==================================================

Animations should be subtle and editorial.

Use smooth transitions for:

- links
- buttons
- image hover
- cards

Do not animate every section.

The Message Cards section has the primary continuous animation.

The animation must:

- move smoothly
- pause on hover
- resume when hover ends
- allow touch scrolling
- respect prefers-reduced-motion

==================================================
50. COMPONENT LIBRARY
==================================================

Create a reusable component library.

Components should include:

Global/Header/Desktop
Global/Header/Mobile
Global/Footer

Global/Logo
Global/Navigation
Global/MobileNavigation
Global/Breadcrumb
Global/SectionHeader
Global/CategoryLabel

Global/Button/Primary
Global/Button/Secondary
Global/Link

Article/Card/Default
Article/Card/Featured
Article/Card/Thumbnail
Article/Card/Main

Article/Meta

Section/Hero
Section/ExploreTopics
Section/ArticleFeature
Section/ArticleDualImage
Section/FeaturedArticles
Section/Philosophy
Section/NewArticles
Section/MessageCards
Section/KarbalaZiarat
Section/MostPopular
Section/RelatedSites

Category/TopFeatured
Category/BoxFeatured
Category/Thumbnail
Category/ArticleGrid

Article/Single

Use reusable components rather than duplicating visual structures.

==================================================
51. COMPONENT VARIANTS
==================================================

Create component variants for:

- default
- hover
- active
- selected
- mobile
- tablet
- desktop
- loading if useful
- empty state if useful

Use the reference design to determine the appearance of each state.

==================================================
52. RESPONSIVE DESIGN
==================================================

Create responsive versions based on the reference design.

Do not simply shrink the desktop layout.

Explicitly adapt:

- header
- navigation
- hero
- category navigation
- article layouts
- featured article layouts
- grids
- horizontal cards
- footer
- related banners

Desktop multi-column layouts should become appropriate tablet and mobile compositions.

On mobile:

- content remains readable
- spacing remains intentional
- images remain correctly cropped
- navigation remains usable
- cards do not become excessively narrow
- important content remains prioritized

==================================================
53. HOMEPAGE COMPONENT MAP
==================================================

The homepage should be represented as:

Global/Header

Section/Hero

Section/ExploreTopics

Section/ArticleFeature

Section/ArticleDualImage

Section/FeaturedArticles

Section/Philosophy

Section/NewArticles

Section/MessageCards

Section/KarbalaZiarat

Section/MostPopular

Section/RelatedSites

Global/Footer

==================================================
54. CATEGORY COMPONENT MAP
==================================================

Category page:

Global/Header

Global/Breadcrumb

Category/CategoryHeader

Category/TopFeatured

Category/BoxFeatured

Category/Thumbnail

Category/ArticleGrid

Category/RecommendedArticles

Section/KarbalaZiarat

Section/MostPopular

Section/RelatedSites

Global/Footer

==================================================
55. ARTICLE COMPONENT MAP
==================================================

Article page:

Global/Header

Global/Breadcrumb

Article/CategoryLabel

Article/Title

Article/Introduction

Article/FeaturedImage

Article/Meta

Article/Content

Article/RelatedArticles

Article/RecommendedArticles

Section/KarbalaZiarat

Section/MostPopular

Section/RelatedSites

Global/Footer

==================================================
56. FIGMA COMPONENT NAMING
==================================================

Use clear, organized component names.

Examples:

Global/Header/Desktop
Global/Header/Mobile
Global/Footer

Global/Button/Primary
Global/Button/Secondary

Article/Card/Default
Article/Card/Featured
Article/Card/Thumbnail

Section/Hero
Section/ExploreTopics
Section/FeaturedArticles
Section/MessageCards

Category/TopFeatured
Category/ArticleGrid

Article/Single

Keep the component hierarchy clean and logical.

==================================================
57. DESIGN TOKENS
==================================================

Create reusable design variables extracted from the reference design.

Variables should cover:

Colors
Typography
Spacing
Container
Borders
Radius
Shadows
Transitions

Do not invent arbitrary values.

The values should be derived from the supplied design.

==================================================
58. STATIC VS DYNAMIC CONTENT
==================================================

For every section clearly distinguish:

STATIC DESIGN:

- layout
- typography
- decorative elements
- section labels
- icons
- visual structure

DYNAMIC WORDPRESS DATA:

- article title
- article excerpt
- article image
- article category
- article URL
- author
- date
- reading time
- article content

MANUALLY CONFIGURED WIDGET DATA:

- custom image
- custom icon
- selected article
- promotional link
- custom card
- custom banner

This distinction is critical for the eventual WordPress implementation.

==================================================
59. CONTENT MODEL
==================================================

Represent article data conceptually as:

Article

- ID
- title
- slug
- excerpt
- content
- featured image
- category
- subcategory
- author
- published date
- modified date
- reading time
- URL

Editorial placement metadata:

Homepage:
- Hero
- Article Section 1
- Article Section 2
- Featured Main
- Featured Thumbnail 1
- Featured Thumbnail 2
- Featured Thumbnail 3
- Featured Thumbnail 4
- New Articles

Category:
- Top Featured
- Box Featured
- Box Thumbnail 1
- Box Thumbnail 2

==================================================
60. DO NOT DUPLICATE ARTICLE CONTENT
==================================================

This is a CMS-driven website.

Do not design the implementation around manually duplicated article content.

The same article can appear in multiple locations.

All locations should reference the original WordPress article.

If the article title changes in WordPress, every placement should automatically display the updated title.

If the article image changes, dynamic placements should automatically display the updated image unless the section specifically uses a manually selected image.

==================================================
61. MANUAL IMAGE OVERRIDE RULE
==================================================

For sections specifically requiring manually selected images:

Article Section 2
Karbala & Ziarat

the images should be independent of the article's featured image.

This allows the editor to choose a specific visual treatment for the homepage.

==================================================
62. CATEGORY TEMPLATE RULE
==================================================

Do not create separate visual layouts for:

Imam Hussain
Family
Companions
Ziarat
Muharram
Karbala
Arbaeen
Lessons
Resources

Use one reusable category template.

WordPress supplies the category-specific data.

==================================================
63. ARTICLE TEMPLATE RULE
==================================================

Do not create individual Elementor pages for articles.

Use one reusable article template.

WordPress supplies the article-specific content.

==================================================
64. FINAL VISUAL QUALITY REQUIREMENT
==================================================

The result should NOT look like an AI-generated generic website.

It must feel intentionally art-directed.

Pay close attention to:

- typography
- whitespace
- alignment
- image treatment
- section proportions
- editorial hierarchy
- subtle borders
- restrained red accents
- atmospheric imagery
- visual rhythm
- navigation
- footer composition

The reference design should be visibly recognizable in the final result.

==================================================
65. FINAL OUTPUT
==================================================

Create the following complete responsive designs:

1. Homepage Desktop
2. Homepage Tablet
3. Homepage Mobile

4. Category Page Desktop
5. Category Page Tablet
6. Category Page Mobile

7. Individual Article Page Desktop
8. Individual Article Page Tablet
9. Individual Article Page Mobile

Also create:

10. Global component library
11. Global typography styles
12. Global color variables
13. Global spacing/layout variables derived from reference
14. Button variants
15. Article card variants
16. Header variants
17. Footer variants
18. Mobile navigation
19. Hover states
20. Active states
21. Message card animation interaction
22. Responsive behavior
23. Dynamic-content annotations
24. WordPress/Elementor implementation notes

==================================================
66. FINAL IMPLEMENTATION PRINCIPLE
==================================================

The final design should be ready to translate into:

CUSTOM WORDPRESS THEME
+
ELEMENTOR FREE
+
CUSTOM ELEMENTOR WIDGETS
+
WORDPRESS POSTS
+
WORDPRESS CATEGORIES
+
POST META / CUSTOM FIELDS

The design should provide:

- visual fidelity
- reusable components
- centralized global styling
- dynamic article content
- dynamic category pages
- reusable article template
- reusable category template
- centralized header
- centralized footer
- editable homepage placements
- editable category placements
- manually controlled special-section images
- SEO-friendly structure
- accessibility
- responsive behavior
- strong performance considerations

Do not make assumptions that contradict the supplied reference design.

Do not introduce arbitrary fixed dimensions.

The supplied reference design determines the visual system.

The WordPress/Elementor requirements determine the CMS and component architecture.

These two requirements must work together without compromising the visual fidelity of the reference.