Markdown
# prompts.md - [MMA-Deal-Hub]
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

---
---

Data set 2


Prompt 1:
You are modifying my existing React, TypeScript and Vite project for MGMT6110 Problem Set 2.

For this step, make ONE change only:

Create a Vercel serverless function at:

```text
api/weather.js
```

The `api` folder must be in the project root beside `package.json`, never inside `src`.

Do not modify any existing file in this step.

The function must call this exact Open-Meteo URL:

https://api.open-meteo.com/v1/forecast?latitude=1.29&longitude=103.85&current=temperature_2m,precipitation&daily=temperature_2m_max&timezone=Asia%2FSingapore

Requirements:

1. Accept GET requests only. Return HTTP 405 for other methods.
2. Use the built-in `fetch` API. Do not add any npm package.
3. Use `AbortController` with an eight-second timeout.
4. Check `upstream.ok` before parsing the response body.
5. If the upstream request throws or times out, return HTTP 502:

```json
{
  "error": "The weather service could not be reached.",
  "kind": "unreachable"
}
```

6. If Open-Meteo returns a non-2xx response, return its HTTP status with:

```json
{
  "error": "The weather provider refused the request.",
  "kind": "refused",
  "upstreamStatus": 400
}
```

7. After a successful response, read only these fields:

```text
current.time
current.temperature_2m
current.precipitation
current_units.temperature_2m
current_units.precipitation
```

8. Zero is a valid value. Do not treat `0` as missing. Check for `null` or `undefined`.

9. If the request succeeds but the required current reading is missing, return HTTP 200:

```json
{
  "data": null,
  "source": "Open-Meteo"
}
```

10. For a valid response, return:

```json
{
  "data": {
    "temperature": 30.5,
    "temperatureUnit": "°C",
    "precipitation": 0,
    "precipitationUnit": "mm",
    "observedAt": "2026-09-13T17:15"
  },
  "source": "Open-Meteo"
}
```

The values above only demonstrate the response shape. Do not hard-code them. Read fresh values from the Open-Meteo response.

11. Add this header to successful and empty responses:

```text
Cache-Control: s-maxage=900, stale-while-revalidate=1800
```

12. Do not use an API key, environment variable, Express server or user-controlled upstream URL.
13. Do not modify the frontend, health endpoint, documentation or existing wording in this step.

This is the real response I observed manually:

```json
{
  "timezone": "Asia/Singapore",
  "current_units": {
    "time": "iso8601",
    "interval": "seconds",
    "temperature_2m": "°C",
    "precipitation": "mm"
  },
  "current": {
    "time": "2026-09-13T17:15",
    "interval": 900,
    "temperature_2m": 30.5,
    "precipitation": 0
  }
}
```

After creating the file, show me:

1. The complete contents of `api/weather.js`.
2. Confirmation that no other file was modified.
3. A brief explanation of the success, empty, refused and unreachable response paths.

Do not proceed to `/api/health` or frontend integration yet.

##prompt 2:
The previous step is complete. Do not modify `api/weather.js`.

For this step, make ONE change only:

Create a Vercel serverless health endpoint at:

```text
api/health.js
```

The file must be in the existing project-root `api` folder beside `api/weather.js`.

Do not modify any other file.

PURPOSE

This endpoint should help me determine whether my backend can reach Open-Meteo.

Open-Meteo does not require an API key, so the health response must report that no credential is required. Do not invent an environment variable or API key.

UPSTREAM URL

Use the same endpoint as `api/weather.js`:

https://api.open-meteo.com/v1/forecast?latitude=1.29&longitude=103.85&current=temperature_2m,precipitation&daily=temperature_2m_max&timezone=Asia%2FSingapore

REQUIREMENTS

1. Accept GET requests only.

2. For any other method:

- Set the `Allow` header to `GET`.
- Return HTTP 405.
- Return JSON:

```json
{
  "error": "Method Not Allowed"
}
```

3. Use the built-in `fetch` API. Do not install a package.

4. Use an `AbortController` with an eight-second timeout.

5. The endpoint only needs to inspect whether Open-Meteo responds and what HTTP status it returns. It does not need to parse or return the weather response body.

6. If Open-Meteo returns a successful 2xx response, return HTTP 200:

```json
{
  "status": "ok",
  "service": "Open-Meteo",
  "credentialRequired": false,
  "upstreamStatus": 200,
  "checkedAt": "CURRENT ISO TIMESTAMP"
}
```

Use the actual upstream status and generate `checkedAt` at runtime with `new Date().toISOString()`. Do not hard-code the timestamp.

7. If Open-Meteo responds with a non-2xx status, the health endpoint itself should still return HTTP 200, with:

```json
{
  "status": "degraded",
  "service": "Open-Meteo",
  "credentialRequired": false,
  "upstreamStatus": 400,
  "checkedAt": "CURRENT ISO TIMESTAMP"
}
```

Use the actual upstream status.

8. If the fetch throws or times out, return HTTP 200:

```json
{
  "status": "degraded",
  "service": "Open-Meteo",
  "credentialRequired": false,
  "upstreamStatus": "unreachable",
  "checkedAt": "CURRENT ISO TIMESTAMP"
}
```

9. Set this header on every health response:

```text
Cache-Control: no-store
```

10. Do not return:

- the upstream response body;
- internal exception messages;
- environment variables;
- credential values;
- the upstream URL.

11. Do not import from or modify `api/weather.js`.

12. Do not modify the frontend, package.json, documentation or any existing component.

VALIDATION

After creating the file:

1. Run the existing build.
2. Confirm that the build succeeds.
3. Confirm that only `api/health.js` was created in this step.

FINAL RESPONSE

Show me:

1. The complete contents of `api/health.js`.
2. Confirmation that no other file was modified.
3. The build result.
4. A short explanation of the `ok`, `degraded` and `unreachable` health results.

Do not proceed to frontend integration.

##prompt3:

I reviewed `api/health.js` and found one requirement that was not fully met.

The `Cache-Control: no-store` header is currently defined and applied after the request-method check. Therefore, the HTTP 405 response does not receive the required no-store header.

Make ONE small correction only:

Ensure that every response from `api/health.js`, including the HTTP 405 Method Not Allowed response, contains:

```text
Cache-Control: no-store
```

You may define `responseHeaders` before the method check and pass it to the 405 `sendJson` call.

Do not change the endpoint’s other behavior, wording, response shapes, timeout, upstream URL or status logic.

Do not modify any other file.

After the correction:

1. Show the exact changed section.
2. Confirm that only `api/health.js` was modified.
3. Run the build and report the result.

##prompt 4
The two backend endpoints are complete.

For this step, make ONE frontend change only:

Modify `src/components/Header.tsx` so that the existing hard-coded “Verified Deals” status area fetches and displays live weather from:

```text
/api/weather
```

Modify only `src/components/Header.tsx`.

Do not modify `App.tsx`, either backend file, any other component, documentation, package.json or configuration.

REQUIREMENTS

1. Remove the hard-coded “Verified Deals” text from the header.

2. When `Header` mounts, fetch:

```text
/api/weather
```

Use a relative URL exactly as shown.

3. Browser code must never call `api.open-meteo.com` directly.

4. Use React state to distinguish:

```text
loading
success
empty
refused
unreachable
```

5. Initial state must be `loading`.

6. Use an `AbortController` for the frontend request and abort it when the component unmounts.

7. Do not update React state if the request was aborted because the component unmounted.

STATE DETECTION

Use these rules:

- While `/api/weather` is pending: `loading`.
- HTTP 200 with `data: null`: `empty`.
- HTTP 200 with valid weather data: `success`.
- HTTP 502 or response JSON with `kind: "unreachable"`: `unreachable`.
- A browser network error while calling `/api/weather`: `unreachable`.
- Any other non-2xx response, including `kind: "refused"`: `refused`.
- If HTTP 200 returns an unexpected or invalid response shape, treat it as `empty`.

Do not silently fall back to hard-coded weather data.

SUCCESS RESPONSE SHAPE

The successful `/api/weather` response looks like:

```json
{
  "data": {
    "temperature": 30.5,
    "temperatureUnit": "°C",
    "precipitation": 0,
    "precipitationUnit": "mm",
    "observedAt": "2026-09-13T17:15"
  },
  "source": "Open-Meteo"
}
```

The values above are examples only. Do not hard-code `30.5`, `0` or the timestamp.

Zero is a valid weather value. Do not treat `0` as missing.

DISPLAY TEXT

Display the following visibly different messages:

Loading:

```text
Getting the latest Singapore CBD weather…
```

Success:

```text
CBD {temperature}{temperatureUnit} · Rain {precipitation} {precipitationUnit}
```

Empty:

```text
The weather service responded, but no current reading is available.
```

Refused:

```text
The weather provider refused the request. Please try again later.
```

Unreachable:

```text
The weather service cannot be reached right now. Please try again later.
```

For the success state, also show the observation time beneath or beside the weather reading:

```text
Observed {observedAt} SGT
```

Format the returned string for readability without inventing a different time. Because the API response already uses `Asia/Singapore`, it is acceptable to replace `T` with a space and append `SGT`.

ACCESSIBILITY AND LAYOUT

- Add `aria-live="polite"` to the changing status area.
- Preserve the existing header design as closely as practical.
- Allow long error messages to wrap.
- Make sure the header does not overflow on mobile.
- Keep the existing back button and navigation behavior unchanged.

TYPES

Define any small TypeScript types needed inside `Header.tsx`.

Do not use `any` unless there is no reasonable alternative.

Do not install any package.

VALIDATION

After making the change:

1. Run the existing TypeScript check.
2. Run the production build.
3. Fix only errors caused by this change.
4. Search `src` and confirm that `api.open-meteo.com` does not appear in browser code.
5. Confirm that `Header.tsx` calls only `/api/weather`.
6. Confirm that the example value `30.5` was not added to the source code.

FINAL RESPONSE

Show me:

1. The complete updated `src/components/Header.tsx`.
2. Confirmation that only `Header.tsx` was modified.
3. The TypeScript check result.
4. The production build result.
5. A short explanation of how each of the five states is detected.

Do not modify the footer or other prototype wording yet.
Do not proceed to attribution or documentation.



##prompt modification 1



Modify only `src/components/GymDiscoveryScreen.tsx`.

Make these exact text replacements:

1. `Central & South Singapore Deals`
   → `Central & South Singapore Examples`

2. `Second-Hand MMA Gym Contracts`
   → `Second-Hand MMA Gym Contract Examples`

3. Replace:

`Take over verified gym memberships near Raffles Place, Tanjong Pagar & HarbourFront. Save up to 40% with zero long-term signup lock-ins.`

with:

`Explore illustrative contract-transfer scenarios designed for CBD office workers. Gym names, prices, locations and availability shown below are fictional prototype data.`

4. `Featured Orders`
   → `Featured Examples`

5. `Showing {processedContracts.length} available contracts`
   → `Showing {processedContracts.length} illustrative contract examples`

6. `No gym contracts match your current filter.`
   → `No contract examples match your current filter.`

7. `Show all available deals`
   → `Show all contract examples`

Change text only. Do not change any logic, styling, state or event handlers.

Do not modify any other file.

After editing, run the TypeScript check and build. Confirm that only `src/components/GymDiscoveryScreen.tsx` was modified. Do not continue to another task.


##prompt modification 2


Modify only `src/components/GymCard.tsx`.

Make one text change only:

Replace:

```text
Transfer approved
```

with:

```text
Illustrative listing
```

Do not change any other text, calculation, styling, component prop, button behavior or file.

Run the TypeScript check and production build afterward. Confirm that only `src/components/GymCard.tsx` was modified.

Do not continue to another task.




##prompt modification 3


Modify only:

```text
src/components/OrderConfirmationScreen.tsx
```

Make one wording-accuracy change: clearly present the existing form and result as a browser-only demonstration.

Do not change any state, validation, reference-number generation, event handler, component prop, styling or behavior.

Make these text replacements.

BEFORE SUBMISSION

1. `Back to All Gym Deals`
   → `Back to All Examples`

2. `Selected Contract`
   → `Selected Example Contract`

3. Replace:

```text
Second-hand contract transfer with seller verified. Original fee:
```

with:

```text
Illustrative contract-transfer scenario. Example original fee:
```

Keep the dynamic original-fee value unchanged.

4. `Order Confirmation`
   → `Demo Reservation`

5. Replace:

```text
Enter your details so the contract transfer officer can reach you.
```

with:

```text
Enter test details to preview the illustrative confirmation screen. Nothing will be submitted.
```

6. `Full Name`
   → `Test Name`

7. `Phone Number (WhatsApp)`
   → `Test Phone Number`

8. Replace:

```text
Used strictly for contract transfer coordination.
```

with:

```text
Used only in this browser demo and not sent anywhere.
```

9. `Confirm Order`
   → `Preview Demo Result`

AFTER SUBMISSION

10. `Order Placed`
    → `Demo Reservation Created`

11. Replace:

```text
Your transfer reservation has been locked in. Our gym transfer desk will contact you via WhatsApp shortly.
```

with:

```text
This browser-only prototype has not submitted a real reservation. No one will contact you.
```

12. `Reference Number`
    → `Demo Reference`

13. Replace:

```text
Quote this code for gym handover validation.
```

with:

```text
Generated locally for this demonstration only.
```

14. `Transfer Queue`
    → `Demo Status`

15. Replace:

```tsx
Position: #{placedOrder.queuePosition} in line
```

with:

```tsx
Illustrative position: #{placedOrder.queuePosition}
```

Keep the existing dynamic queue-position value.

16. Replace:

```text
Estimated coordinator response within 15 mins.
```

with:

```text
No coordinator response will occur.
```

17. `Reservation Summary`
    → `Demo Summary`

18. `Reserved for:`
    → `Entered name:`

19. `Phone:`
    → `Test phone:`

20. `Browse More Gym Deals`
    → `Browse More Examples`

GUARDRAILS

- Modify visible wording only.
- Do not change logic, form validation, state or event handlers.
- Do not send or store the entered information.
- Do not modify any other file.
- Do not change the weather integration.
- Do not add packages.

After editing:

1. Run the TypeScript check.
2. Run the production build.
3. Confirm that only `src/components/OrderConfirmationScreen.tsx` was modified.
4. Confirm that `seller verified`, `Order Placed`, `locked in`, `WhatsApp shortly`, and `response within 15 mins` no longer appear.

Show me the changed text and validation results. Do not continue to another file.


##prompt modification 4

Modify only:

```text
src/App.tsx
```

Make one footer-attribution change only.

The footer currently says that the application is built with invented data only. That is no longer fully accurate because the weather is live data from Open-Meteo, while the gym contracts and reservation flow remain illustrative.

Keep the existing footer layout and MGMT6110 context, but update its visible wording so it communicates:

```text
Live weather data by Open-Meteo.
Gym contracts and the reservation flow are illustrative prototype data. No real order is submitted.
```

Requirements:

1. “Open-Meteo” must be a clickable link to:

```text
https://open-meteo.com/
```

2. Open the link in a new tab using:

```tsx
target="_blank"
rel="noreferrer"
```

3. Retain the existing text:

```text
MMA Deal Hub (Singapore CBD & South)
```

4. Retain a reference to:

```text
MGMT 6110 Human-AI Collaboration
```

5. Keep the footer concise and readable on mobile.

GUARDRAILS

- Modify footer wording and the Open-Meteo attribution link only.
- Do not change application logic, navigation, components or styling outside the footer.
- Do not modify the weather integration.
- Do not modify any backend file.
- Do not modify documentation.
- Do not add a package.
- Do not modify any file other than `src/App.tsx`.

VALIDATION

After editing:

1. Run the TypeScript check.
2. Run the production build.
3. Confirm that only `src/App.tsx` was modified.
4. Confirm that “Built with invented data only” no longer appears.
5. Confirm that the Open-Meteo link uses `target="_blank"` and `rel="noreferrer"`.

Show me the exact updated footer JSX and the validation results. Do not continue to another task.
