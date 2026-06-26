

| AI’s Media Mix  | Zihan  |
| :---- | ----: |

Year is 2026, 4 years since Stable Diffusion hit the market. Me and a colleague were walking through the subway of Shanghai when a peculiar looking poster entered our vicinity. The advert features an anime-styled illustration of two people. The lady in front looks like she’s been excessively rendered by an artist, whereas the boy in the background had a slightly smeared face and hands. We immediately recognised this as “AI art”. My colleague, who just happen to be invested in the very field of image generation, made snarky comments that the image was made using an outdated “checkpoint model”, and if it were him, would have used “state-of-the-art” models such as \*Anima\* and \*Illustrious-XL\*. He then showed me an example output of both models, each featuring wondrous looking character art that are indeed free from artefacts. I could not help but wonder if there is certain endowed affinity between the anime and diffusion models, that they are able to replicate its feat so effectively. I jokingly asked him if he could reverse-engineer the prompt used to produce the image in front of us, and watched as a long chain of AI runes being ejected out of his mouth.

\> 1girl, 1boy, girl focus, looking at viewer, hands up, straight hair, short hair, dark skin, school uniform, best quality, masterpiece.

### **AI and Danbooru**

(Introducing Danbooru, and its history with AI)

### Both \*Anima\* and \*Illustrious-XL\* have been trained on short, descriptive tags as the ones uttered by my colleague, and both model pointed to the website “[Danbooru](https://donmai.moe/)” as the origin of this method of tagging. Built in 2005, Danbooru is an image-hosting website intended to be a “high-quality archive for anime-styled images”. The archive is co-curated by its users, as they submit images and are encouraged to contribute tags that describe the image. The large amount of posts, coupled with the refined pairing between images and text, made Danbooru the ideal repository to extract data for machine learning. Its first interaction with AI happened in 2015 as AI writer Gwern scraped its data for classification research, producing the dataset \*[danbooru2017](https://gwern.net/danbooru2021)\*. In 2022, company NovelAI trained its proprietary text-to-image (TTI) model using the site’s data, subsequently leaking it during a breach. The leaked model, now known as \`[animefull-latest.ckpt](https://huggingface.co/deepghs/animefull-latest)\`, has shown the Internet that “AI can draw anime characters”, spawning a gold rush of model fine-tuning. This has elevated Danbooru’s traffic to unprecedented heights, forcing the admin to tighten the rate limit. In the process, Danbooru’s style of abstracting images with tags has been crowned as one standard of textual prompt employed by many models, a pillar of the TTI landscape next to OpenAI’s CLIP.

### **The Moe Database**

(Answer to question: What’s the affinity between anime and AI art? Link to Otaku, Mentions Hiroki Azuma’s “Database Consumption” of the Otaku, and how Danbooru and TTI are similar. Link this to MEDIA-MIX happened in 1990s.)

The term Otaku can be loosely understood as “geeky media fans”, which might as well encompass the majority of Danbooru’s user base. He who dived deep into this subculture is Hiroki Azuma, who coined the term “Database Consumption” in his book Otaku: Japan's Database Animals. Drawing from theories by Jean Baudrillard, Azuma suggests that the postmodern image consumed by Otakus are in effect, assemblages of simulacrum drawn from a “database”. As an example, the visual design of a manga protagonist can be broken down into a series of Moe (affectionate) elements such as “cat ears”, “maid costumes” and “glasses”. This is set against 1990s’ anime-manga culture industry which began to re-circulate certain character and narrative tropes to favour its target audiences. There is no better materialisation to Azuma’s “database” than Danbooru, whose tags are the very “moe elements” that makes up a character.

(now talks about media-mix and how it encourages fan creativity, and how this seems to promise an AI model born out of community engagement)

### **Booru’s Promise and Sins**

(Explain that Danbooru’s federated structure seems to promise “AI done right”, but it is actually still problematic, with all problems unresolved in the industry. This paragraph needs to be condensed)

Brain C. Britt’s case study on Danbooru suggests that the site’s peculiar method of content curation has positive quirks…

And since the vast majority of anime text-to-image models were also open source, it seems to promise a alternative mode to AI training which is self-sufficed by the community.

It is also worth noting that Danbooru is not the only “Booru” out there. Albert Yi, developer of the site, made the source code to the Danbooru’s infrastructure open-source in 2007\. This spawned a few dozens of other “Boorus” with similar mode of content curation, each with their own point of interest and guideline.

However, despite the federated nature of Danbooru and Boorus in general, the text-to-image community was not free from bias. A research by Wagner and Cetinic found Danbooru involved in the creation and perpetuation of misogynistic depictions produced by TTI pipelines, as Danbooru’s dictionary of explicit terms have provided the necessary tools for misapplication of fantasy to the real ([Wagner and Cetinic](https://arxiv.org/abs/2505.04600), 2025).

Aurélie Petit’s study on the anime fandom discovers a structural exclusion of female users. Though Danbooru’s peculiar structure requires a different analysis, it’s worth arguing that the existing moderation system does actively exclude certain style of representation in the of name “quality control”.

Said “quality control” also made Danbooru the gold mine of image-tag data which everyone is scraping from. This shrouded the site in controversy as most of its uploads were done by third-parties without the acknowledgement of the original artist, thereby indirectly submitting their creations to be trained on.

Despite the more federated nature of the Danbooru, it did not address any of the issues rooted within standard AI training strategy employed by the big tech. Furthermore, the genes carried off from the Media-mix made things all the more worrisome.

### **The Ghost of Media-Mix / “Media Mikkusu”**

(Overview of Media-mix, with emphasis on “Media-mix 2.0” coined by Kadokawa Tsuguhiko, where he worked with TRPG fanatics and wanted to create a “mechanism that produces infinite stories”)

(Bring in Steinberg’s analysis of the model and how it eventually developed into “platform economy”, where the platform acts as the *mechanism* Tsuguhiko wanted. Explain why this model is a highly extractive practise)

Media mix is a somewhat a flashy industry term emerged in post-war Japan, and has converged into a transnational phenomenon over the years. A description of the term is offered by American researcher Marc Steinberg in an essay: the practise of “creating, marketing, circulating and engaging with cultural goods serially across media types — from games and light novels to manga and anime to toys, foodstuffs and much else”. Media Mix as a business model can be traced to the book publishing company Kadokawa, who developed a strategy to publishing by adapting its well-received novel titles into animation and blockbuster films, thus expanding its conglomerate across multiple media platforms. He who built upon the strategy was Kadokawa Tsuguhiko as he took the leadership in 1993\. Tsuguhiko’s Media Mix was inspired by TRPG (Tabletop Role-Playing Games) trendy in the US at the time. The idea is to create a system of rules and character blueprints which can then be used to generate an infinite amount of narratives \- a *mechanism* that produces media in a Fordist fashion. It was not a coincidence when Azuma noted that, as of 1990s “it has become a general strategy to create character settings ﬁrst, followed by works and projects, including the stories”. And because characters are so prominent to a trans-media franchise, “the know-how for enhancing the attractiveness (through the art of the moe-element) has rapidly accumulated… the development of moe-element databases has become a necessity.” To sum up, 1990s media mix employed a double-layer structure of the database \- the database of moe elements which generates the character, and the database of characters which generates the media product.

There is another feature of Tsuguhiko’s Media Mix \- the mobilisation of fans.

(Talks about how Media-mix actually emerged as fascist propaganda tool as uncovered by Otsuka Eji, where the citizens ends up engaged in the production of fascist narratives that is used to influence themselves through circulation)

### **AI’s Media Mix**

(Link back to Danbooru as the platform, AI as the catalyst of the “story creating machine”, and how this can be applied to the platform economy at large)

(Conclude with another episode at the subway where my imaginary colleague says something that demonstrates the effect of Media-Mix on the everyday life)

### 

### 

#### 

#### 

#### 

#### 

#### 