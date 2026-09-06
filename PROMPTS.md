Markdown
# PROMPTS.md - [MMA-Deal-Hub]
**Student:** [Beichao Wang] · **Course:** MGMT 6110 · **Problem Set 1**
**User sentence:** A price-sensitive office worker in the CBD opens this screen to select and order a discounted second-handed MMA gym contract near the Central/South region in Singapore, and knows it worked when they see 'Order Placed' with a reference number and queue position.

Screen 1:
Display content: Cards for 6 non-real name MMA gyms (including monthly fee, remaining contract amount). 

User actions: Sort by price from low to high; filter by remaining contract amount from long to short; click the "Select Contract" button for a specific gym name.

Screen 2:
Display content: A simple confirmation form (e.g., enter name/Phone number) and a "Confirm Order" button.

User actions: After clicking, the page updates directly, the card changes to "Order Placed," and displays the Reference Number (e.g., #MMA-2026-889) and Queue Position (e.g., Position: #3 in line).

**Live link:** [[your Vercel production URL](https://my-projectmmadealhub.vercel.app/)]

---

## Prompt 1 - the master prompt
```text
ROLE: You are a senior front-end developer building a React web app.

GOAL: Build the front end of "MMA Deal Hub", a web product for price-sensitive office workers in Singapore's CBD looking for affordable MMA gym memberships. Their job on this product is to select and order a discounted second-handed MMA gym contract near the Central/South region in Singapore. Screens:
1) Gym Discovery Screen: Displays 6 non-real-name MMA gym cards (including monthly fee, location in Central/South Singapore, and remaining contract duration in months). Includes controls to sort by price (low to high) and filter/sort by remaining contract duration (long to short). Each card has a "Select Contract" button.
2) Order Confirmation Screen: Features a simple confirmation form (fields for Name and Phone number) with a "Confirm Order" button. Upon clicking, the interface updates directly to show "Order Placed" alongside a generated Reference Number (e.g., #MMA-2026-889) and a Queue Position (e.g., Position: #3 in line).

OUTPUT: A running app. Keep every invented value in ONE data file of its own, with at least 6 rows, so the screen looks real. One component per screen or section. Move between screens without reloading the page. Readable on a phone at arm's length. When you are done, list the files you created and what each one holds.

GUARDRAILS: Screens and invented data only. Do NOT call the Gemini API or any other model. Do NOT call any outside service or fetch from any URL. No database, no login, no user accounts, no analytics. No features I did not list. No real company's name, logo, or trademark. Invented names and numbers only, nothing confidential.

CONTEXT: Individual Problem Set 1 for MGMT 6110 Human-AI Collaboration at SMU. Built in Google AI Studio, shared as a link, and opened on a phone by classmates in Week 3. I am not a programmer: when you make a choice I did not specify, say so in one line rather than burying it.

**What came back:** : A running app with 6 MMA gym cards, price sorting, duration filtering, and the confirmation form leading to an "Order Placed" state with reference number and queue position.

**What I changed next and why** : I checked the preview, confirmed all acceptance criteria were met on the first try without additional iteration needed.
