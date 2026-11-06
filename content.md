# Christopher Msando Foundation (CM) — Website Content & Context

> One place for the site's content and context. It brings together the live copy in `index.html`, the project data in `data.js`, the old site's copy (`previous_content.md`) and the client's redesign brief (`changed.md`).
> Copy marked **[Pending approval]** still needs the organisation to confirm it.

---

## 1. Organisation at a Glance

| | |
|---|---|
| **Name** | Christopher Msando Foundation (CM / CMF) |
| **Type** | Kenyan NGO / foundation |
| **Area served** | Kenya (flagship locations: Nairobi, Siaya) |
| **Website** | https://christophermsandofoundation.org/ |
| **Email** | info@christophermsandofoundation.org |
| **Tagline** | Opportunity · Dignity · Self-reliance |
| **Short description** | A Kenyan foundation nurturing talent, promoting sports, empowering communities and advancing sustainable self-reliance. |

### Focus areas
1. Talent development
2. Sports & youth development
3. Community empowerment (skills, mentorship, digital learning)
4. Sustainability & community self-reliance

### How the focus has changed
The **old site** centred on **ICT / technology** ("Transformational Technology"): ICT training, youth mentorship, volunteer days and cultural exhibitions.
The **new direction** (per `changed.md`) puts **talent, sports, empowerment and sustainability** first. ICT and mentorship now sit under Community Empowerment.

---

## 2. Site Structure (Navigation)

The site is a single page with anchor sections:

1. **Home** (`#home`)
2. **About Us** (`#about`)
3. **Our Objectives** (`#objectives`)
4. **Programmes** (`#programmes`)
5. **Gallery** (`#gallery`), titled *Nyuka Programme*
6. **Get Involved** (`#get-involved`), which replaces the old "Volunteer Day" and "Volunteers" sections
7. **Stay in Touch** (`#stay-in-touch`), the primary nav button

There is also `project.html`, a detail page for each project, driven by `data.js`.

---

## 3. Page Content (current `index.html`)

### SEO / Meta
- **Title:** Christopher Msando Foundation | Empowering Communities in Kenya
- **Meta description:** Christopher Msando Foundation nurtures talent, promotes sports, empowers communities and advances sustainable self-reliance in Kenya.
- **OG title:** Christopher Msando Foundation | Opportunity. Dignity. Self-reliance.
- **OG description:** Nurturing talent, strengthening communities and creating pathways to lasting self-reliance.
- **OG image:** `images/illustrations/community-hero.webp`

### Home / Hero
- **Eyebrow:** Christopher Msando Foundation
- **Headline:** Growing talent. *Building futures.*
- **Intro:** We create opportunities for children, young people and communities to develop their talents, strengthen practical skills and shape a more self-reliant future.
- **CTAs:** Learn More About Us → · Explore Our Programmes
- **Tags:** Talent development · Sports & youth · Community self-reliance
- **Image:** `community-hero.webp`, a pencil illustration of African youth learning, playing football, mentoring and planting a tree

### About Us
- **Eyebrow:** About Us
- **Headline:** A legacy turned into opportunity.
- **Intro:** The Christopher Msando Foundation advances causes Christopher believed in by opening pathways for young people and communities to learn, create, lead and thrive.

| # | Heading | Copy |
|---|---|---|
| 01 | Who We Are | A Kenyan foundation supporting children, youth and communities through skills, mentorship, talent development and practical opportunities. |
| 02 | Our Mission | To nurture potential, expand access to opportunity and equip people to build lives and communities of purpose and dignity. |
| 03 | Our Vision | Thriving communities where every young person can develop their abilities, participate fully and create a sustainable future. |
| 04 | Who Was CM? | Christopher Msando was an ICT leader at Kenya's IEBC, remembered for his resilience, honesty, decisiveness, empathy and attention to detail. The Foundation carries those values forward in his honour following his death on 28 July 2017. |

### Our Objectives
**Objective statement [Pending approval]:**
> To nurture talent and promote sports development, empower individuals and communities, and advance sustainable initiatives that strengthen skills, create opportunities and foster long-term self-reliance.

| Pillar | Line |
|---|---|
| ✦ Talent Development | Discovering potential and creating room for it to grow. |
| ◎ Sports Development | Building confidence, teamwork and healthy participation. |
| ↗ Empowerment | Connecting people with skills, mentorship and opportunity. |
| ⌁ Sustainability | Supporting practical, locally led paths to self-reliance. |

### Programmes
- **Eyebrow:** Our Programmes
- **Headline:** Ideas made practical.
- **Intro:** Our programmes turn purpose into action, helping people build ability, confidence, connection and a foundation for lasting progress.

| Programme | Tag | Description | Illustration |
|---|---|---|---|
| Talent & Sports Development | Youth & ability | We help children and young people discover their strengths, develop discipline and gain platforms to participate and shine. | `talent-sports.webp` |
| Community Empowerment | Skills & opportunity | Mentorship, digital learning and practical skills connect underserved people with knowledge and opportunity. | `community-empowerment.webp` |
| Sustainability & Self-Reliance | Local resilience | Community-led projects in environmental care, agriculture and practical livelihoods strengthen long-term resilience. | `sustainability.webp` |

### Gallery: Nyuka Programme [title & captions pending approval]
- **Intro:** Moments from activities, learning sessions and community engagements. Select an image to view it in full.
- This is the **only** section that uses real photographs (`images/foundation_images/`). Clicking an image opens it in a lightbox.

| Image | Caption |
|---|---|
| IMG_1705.jpg | Young people taking part in a Nyuka Programme learning session |
| IMG_1767.jpg | Hands-on digital learning and mentorship |
| IMG_1726.jpg | Community engagement through the Nyuka Programme |
| IMG_1825.jpg | Learning, sharing and growing together |
| IMG_1682.jpg | Building confidence through participation |

The rest of the photo library is not yet used: IMG_1657, 1660, 1661, 1699, 1704, 1706, 1709, 1728, 1729, 1738, 1823.

### Get Involved
- **Headline:** Change is something we build together.
- **Intro:** Whether you bring time, expertise, resources or partnership, there is a place for you in this work.

| # | Card | Copy | Link text |
|---|---|---|---|
| 01 | Volunteer With Us | Share your time, experience or professional skills. | Start a conversation → |
| 02 | Support Our Programmes | Help resources reach activities with meaningful impact. | Offer support → |
| 03 | Partner With CM | Explore collaboration as an institution, business or community group. | Explore partnership → |
| 04 | Shop at Our Store | Discover CM items and support the Foundation through every purchase. | Request the store link → |

All four cards currently open a `mailto:` link to info@ with a preset subject. **The store link is still missing.**

### Stay in Touch
- **Eyebrow:** Stay in Touch With Us
- **Headline:** Keep close to the work.
- **Copy:** Stay connected with CM and be the first to hear about our programmes, upcoming activities, community initiatives, opportunities and the impact we are creating together.
- **Form:** an email field and a Subscribe button. It posts to FormSubmit → info@christophermsandofoundation.org.
- **Consent text:** I agree to receive CM news and updates. My email will only be used for this purpose, and I can unsubscribe at any time.
- **Confirmation:** Thank you. Your subscription request is being sent…
- **To do:** move the form to a proper mailing-list service that handles consent and unsubscribes (the brief requires this).

### Footer
- **Blurb:** Nurturing talent, strengthening communities and building sustainable pathways to self-reliance.
- **Explore:** About Us · Our Objectives · Programmes · Gallery
- **Connect:** Get Involved · Stay in Touch · info@christophermsandofoundation.org
- © Christopher Msando Foundation · Opportunity · Dignity · Self-reliance

---

## 4. Project Data (`data.js` → `project.html`)

| Slug | Title | Type | Location | Goal / Raised* | Summary |
|---|---|---|---|---|---|
| ict-training-centre | New ICT Training Centre | Flagship Project | Nairobi | $10,000 / $12,500 | An ICT Centre training youth and children with little access to technology. |
| youth-mentorship | Youth Mentorship Programs | Ongoing | Kenya | $25,000 / $32,000 | Growing skilled professionals and capable young leaders full of character (peace, conflict resolution, music, leadership, personal finance). |
| volunteers-day | Volunteer's Day | Community | Kenya | $12,500 / $14,500 | Volunteers share life experience and skills with unequally advantaged children and youth, and grow in the process. |
| cultural-exhibitions | Cultural Exhibitions | Programme | Kenya | $28,500 / $35,500 | Spaces where young people tell African stories and review Kenyan history. |

\*The goal and raised figures look like placeholders. Confirm them before they go live.

---

## 5. Legacy Content (old site, for reference)

- **Old mission:** To inspire the youth and enrich their ICT knowledge and skills for a long lasting impact in their lives.
- **Old vision:** To offer capacity building services in ICT and offer a platform for innovation, nurture the youth and equip the less advantaged in ICT.
- **Beneficiaries:** Youth and children with little to no access to technology, given skills to improve their quality of life, grow talents and passions, and nurture character and purpose.
- **Ideal supporter / "investor":** Someone interested in making an impact on young people in underserved communities by promoting innovation, creativity and learning.
- **Why the Foundation:** It was established in Christopher's honour and legacy to advance causes he believed in and to encourage youth into ICT and innovation.
- **Christopher Msando (full bio):** ICT Manager at the Independent Electoral and Boundaries Commission (IEBC) at the time of his death on 28 July 2017. Hardworking, keen on details, resilient, honest, a straight talker, decisive, an initiator, loving and empathetic.
- **Impact gallery entry:** 13 July 2020, Nairobi. Programmes on ICT, emotional education and other uplifting activities with children from North Eastern Kenya.
- **Donation channels:** Bank · M-Pesa · PayPal. These are not on the new site yet.
- **Impact meter:** Children impacted, programmes conducted, volunteers impacted. All three showed placeholder values of 25.
- **FAQ topics:** How to donate · accepted donation types · sponsorship levels · donating in honour or as a gift · tax-deductibility · corporate and matching gifts.

---

## 6. Design & Brand Direction (from `changed.md`)

**Core principle:** illustrations show CM's *vision*, and real photographs document its *activities*, but **only in the Gallery**.

- **Illustration style:** African-inspired silhouettes, hand-drawn pencil sketches, minimalist line work, soft shading and selected accent colours. Every image should be meaningful, culturally respectful, in one consistent style, and original or licensed.
  - Talent: a young African person discovering their abilities
  - Sports: African youth playing sport
  - Empowerment: people learning and collaborating
  - Sustainability: farming, environmental care, practical skills
- **Colours (Tailwind tokens):** ink `#102f47` · sky `#3c91cd` · clay `#bf633d` · sun `#e9b44c` · paper `#fbf5e8` · leaf `#58745c` · background `#fffdf8`
- **Fonts:** Manrope (display) and DM Sans (body)
- **Requirements:** mobile-first, accessible (contrast, alt text, focus states, skip link, reduced motion), optimised images (WebP), descriptive titles and meta for SEO, working links and forms.

---

## 7. Outstanding Items / Open Questions

- [ ] Official approval of the objective statement
- [ ] Confirm "Nyuka Programme" as the Gallery title, and approve the captions
- [ ] Verified, expanded copy for "Who Was CM?" and "Who We Are", as the brief requests
- [ ] Real online store URL for "Shop at Our Store"
- [ ] Mailing-list provider for Stay in Touch, with consent and unsubscribe handling
- [ ] Decide whether the legacy programmes (ICT Centre, Cultural Exhibitions, Volunteer's Day) and the donation options stay on the new site
- [ ] Replace the placeholder fundraising and impact figures with real data
- [ ] Short descriptions of each programme: purpose, beneficiaries and expected impact (the brief asks for these)
