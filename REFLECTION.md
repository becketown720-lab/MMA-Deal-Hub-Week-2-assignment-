Markdown
# REFLECTION.md - MMA Deal Hub
**Student:** [Beichao Wang] · **Course:** MGMT 6110 · **Problem Set 1**
**Live App:** [[你的 Vercel 链接](https://my-projectmmadealhub.vercel.app/)]
**GitHub Repository:** [[你的 GitHub 仓库链接](https://github.com/becketown720-lab/MMA-Deal-Hub-Week-2-assignment-.git)]

---

### Q1: Who are your users, and what changes for them?
User category: External
Job title and situation: office workers, usually work in Singapore CBD area
Where: Central and South Region
How many people are interested in combat sports like MMA in Singapore: Regarding the question of "how many office workers in Singapore are interested in competitive sports like MMA," no publicly available surveys from Sport Singapore, SingStat, or other government sources directly provide the "interest rate rate of MMA/Boxing/Muay Thai/BJJ among office workers," so a definitive percentage cannot be given. A conservative estimate can be made using publicly available data: Sport Singapore's 2025 National Sport & Exercise Participation Survey shows that 76% of Singapore residents exercise at least once a week; meanwhile, in 2024, there were 522 Martial Arts sports interest groups in the community, accounting for approximately 10.8% of all 4,834 sports & fitness interest groups. However, this 10.8% figure represents the "percentage of interest groups," not the population interest rate. Furthermore, Martial Arts is not equivalent to MMA. Therefore, a more reasonable approach is to use it as a proxy. Considering the high sports participation rate among young working professionals, it is estimated that approximately 5–10% of Singapore office workers have some interest in combat sports such as MMA, boxing, Muay Thai, and BJJ; the proportion of those actually willing to train regularly and pay for such training would be lower than this. (Data source: Sport Singapore / data.gov.sg, National Sport & Exercise Participation Survey 2025; Singapore Department of Statistics, Sports and Performing Arts Interest Groups 2024.)
How many of them would prefer lower prices, more flexible contracts, and less loss from early exit for gym membership: Currently, there is no publicly available survey that can directly answer this percentage, so a precise figure should not be fabricated. What can be confirmed is that this is indeed a real pain point for consumers of fitness memberships in Singapore: Singapore's Ministry of Trade and Industry disclosed in 2026 that CASE received 49 recurring-subscription cancellation complaints in 2024 and 44 in 2025, and gym and fitness memberships consistently ranked among the top three industries generating such complaints. Therefore, based on existing data, the most rigorous conclusion is that it is impossible to reliably give a figure for "X% who want more flexible contracts," but there is clear evidence that gym/fitness membership cancellation/lock-in is a real point of consumer friction. To obtain a specific percentage, one needs to conduct their own customer survey or choice experiment, rather than extrapolating from existing official data. (Data source: Singapore Ministry of Trade and Industry / CASE; Sport Singapore National Sport & Exercise Participation Survey.)
In brief conclusion, according to CASE's annual complaint statistics, complaints about refunds/cancellations of contracts in the fitness and boxing gym industry remain high. Lack of contract flexibility and excessive penalties for cancellation are the core pain points commonly faced by fitness and combat sports consumers.
The philosophy behind my product design is to solve the pain point of the problem above, through finding the transferable gym contracts (although they are in small numbers among the gyms in Singapore) and make good use of it as the original holders can not fulfill the contracts due to various reasons. The process is designed to ease the difficulty to enter MMA gym for customers due to afraid of high penalty of cancelling gym contract and stubborn contract term.

Q2:Augmented capacity and constrained capacity
As a zero-code/non-professional front-end developer, I was able to build a complete and working React interactive page using natural language within 30 minutes, freeing up my energy to focus on product logic design.
The Constraint: Inability to evaluate unread code while creating and relying on tool defaults. Because the AI ​​generated over a dozen React components and configuration files in seconds, I could only evaluate the product by inspecting its surface-level preview (UI) rather than auditing the underlying codebase.

Exact timing:
When importing the codebase into Vercel, Vercel automatically flagged "Environment variable 2 detected," revealing that Google AI Studio had quietly injected the server-side Gemini API key handler into the vite.config.ts file. I didn't realize the existence of this hidden backend scaffolding code until Vercel exposed it during deployment; masterprompt still cannot replace manual verification.

你在哪里输出了真正的决策（如 Guardrails），哪里你只是名义上在 Loop 但实际直接接受了 AI 输出

Q3: In, on, or out of the loop: where was your judgment actually needed? 

Q3-part 1：
In modern digital marketplaces, the allocation of transaction serial numbers and queue positions must be fully automated, with no human intervention. For example, in MMA Deal Hub, the generation of transaction serial numbers and queue numbers occurs after a user clicks the application button. Introducing human intervention at this step would create a fatal bottleneck, resulting in extremely low operational efficiency and wasted human resources. If manual verification or approval of each reference ID by a human operator is required, order processing delays can skyrocket from milliseconds to minutes, severely impacting the user experience for CBD office workers attempting to complete tasks during their lunch breaks.

Q3-part 2：
What would have to be true:
Serial Number Generation: The ID generation algorithm for each order on MMA Deal Hub must be strictly defined to ensure that each reference number (e.g., #MMA-2026-889) is unique and completely impossible to duplicate.
System Security: Strict front-end input validation and anti-bot measures must be enabled to prevent malicious scripts from abusing the system and hindering genuine user transactions.
Metrics to be Measured (What has to be measured):
Collision Rate: A measured 0.00% reference ID collision rate across different ID's sessions.  
Queue Consistency Rate: 100% audit accuracy verifying that queue timestamps are strictly match transaction submission order without mistakes.  

Q3-part 3
Verification of the authenticity of the secondhand contract and the seller's ownership. 

Core Reasons and Risk Allocation:
This step involves complex legal contract issues, potential fraud, and the contract enforcement rules established by MMA gyms. These cannot be completely entrusted to automated visual models or AI. It is best to contact Singapore government departments and request facial ID verification of the buyer and seller's authenticity. If the fitness membership listed on the platform is unauthorized, stolen, or expired, or if the original gym strictly prohibits contract transfers, the resulting economic losses and legal liabilities will be directly borne by the platform and the unsuspecting buyer. The risks are significant and legally binding; once payment or transfer is completed, it is irreversible. Forged PDF contracts or fake screenshots can easily deceive automated AI verification. Therefore, regardless of operating costs or scale limitations, before any secondhand contract is listed, the original contract documents and the user's true identity must be reviewed by trained compliance personnel, and the gym transfer terms must be verified.


Q4: What did it build that you never sketched? 

When pushing the code to GitHub and importing it into Vercel for deployment, I discovered that Vercel automatically detected two environment variables. This is because the Google AI Studio automatically generated configuration files for the Gemini API Key. Although my Master Prompt explicitly required not to call external APIs, the toolchain silently set up a preparatory architecture for connecting to the AI ​​backend. 
Discovery time: Found in the configuration preview interface of Vercel Deploy. 
Improvement plan: In the future, the Code tab should be opened immediately (After gaining more code knowledge from class) after AI code generation to check the package.json dependencies and configuration files, rather than simply relying on the Preview's runtime effect.Also, review interface of Vercel Deploy is always necessary.


Q5: Learning pointers for the organisational context

Point 1: Schedule more budget and hire AI sanction professionals on AI governance, especially on underlying code generating status sanctions, authorization has to be made before deployment.
Point 2: A sound accountability mechanism must be established, with clear records of who operates and generates the AI. This will allow for accountability if problems occur. Accountability can be achieved in two steps: first, the AI ​​operator conducts a self-inspection to identify problems; second, the AI ​​review team investigates. If problems occur in the second step, the operator will face severe penalties.
Point 3: Before deploying any AI-assisted generated application, business units must mandate the archiving of a complete PROMPTS.md file containing the full R&D and GOC codes in their GitHub repository. This allows for future traceability by those taking over (avoiding situations where the person who wrote the code leaves, leaving the code unattended). The professor's requirement for detailed documentation of every prompt is essential. This corresponds to my use of PROMPTS.md to record the process from the Master Prompt during development.
