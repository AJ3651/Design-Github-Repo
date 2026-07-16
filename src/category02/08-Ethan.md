---
title: The Aphasic Manifesto
name: Yihang Zhang
---

<div class="chapter-two">

##### 張一航 Yihang Zhang

# The Aphasic Manifesto

## The Algorithm Does Not Write. It Samples.

<div class="body-text">

沉默呵，沉默呵！不在沉默中爆發，就在沉默中滅亡。<br>
_Silence, silence\! Unless we burst out in silence, we perish in it._<br>
— Lu Xun, ‘In Memory of Miss Liu Hezhen’ (1926), translation by the author

I asked a text-to-image model to write my presence in Chinese characters, and it gave me something unreadable. That failure is what this text is about. This manifesto does not propose to fix the failure. It lets it speak.

The characters I asked for were six: 失語者宣言／我在此處—The Aphasic Manifesto / I Am Here. I gave the same prompt and the same seeds to three text-to-image models (SD 1.5, 2022, West; FLUX.1 schnell, 2024, West; and GLM Image, 2025, China), the last trained specifically for Chinese (Zhipu AI 2025). I assumed the Western models would be mute and GLM fluent. What came back was stranger than that.

SD 1.5 produced no single character at all: a scroll of dense, illegible marks with no boundary between one character and the next. FLUX gave the shape of one character, but wrote all six as the same form, varying only in small ways. GLM, trained for Chinese, came closest. It separated the six and its strokes were more plausible, yet it still failed. 失 gained extra strokes, the radical of 語 loosened, the interior of 宣 broke down. Then 處 (place): four images, all resembling 慶 (celebration), without exception.

<img src="/static/images/Ethan/image4.jpg" class="single-column-img">

The six characters were not arbitrary. They are the manifesto's own declaration: 失語者宣言／我在此處. I asked the model to render the manifesto's own title as written characters, and it returned a presence that cannot be read. When the same model was given the six matched English words (loss, language, declare, speech, self, place), it rendered each one legibly. At the same unit of meaning, one word set against one character set, the alphabet survived and the hanzi did not.

<img src="/static/images/Ethan/image2.jpg" class="single-column-img">

It was only after the experiment that I understood why. A diffusion model does not write a character; it learns how pixels tend to distribute when a text description appears, then samples the cluster of pixels that best matches. Ted Chiang describes such models as a lossy compression of their training data, a blurry JPEG of the web (Chiang 2023). For Chinese characters, the compression is lossier still. They are rare in training data, and often an image contains a character while its label is only English, so the model is never told what the symbol means. It fills in strokes until the texture looks convincing. The rarer the character, the vaguer the impression: 處 is more broken than 我 because it is far rarer, and errors run toward too many strokes, the fingerprint of texture-matching rather than writing.

The translation, in fact, begins before the model is involved. Chinese writing already carries a text-to-image step inside it. When I type, I type in pinyin, a phonetic romanisation using Latin letters, and the input system must translate that sound into a visually unrelated character. The syllable chu, typed without tone marks as it is on any keyboard, maps to dozens of distinct shapes (處, 除, 儲, 礎). This sound-to-glyph conversion is a feature of pinyin input, not of the diffusion model. A pinyin input system navigates it by exact lookup: one keystroke sequence, one code point, one glyph, chosen by the user. A diffusion model has no such table; it reconstructs the character by sampling from a compressed distribution, and that is where rare shapes collapse into common ones. In pinyin I say I am here, and between the sound and the glyph the sentence is already being translated. That is the first point in the chain where meaning passes through translation, and where distinctions can begin to be lost. Chiang's lossy compression names the rest: when distinctions are compressed across layers of translation and then reconstructed, close shapes flatten into one. 處 (place) and 慶 (celebration) share an outline close enough that, under compression, the difference is lost. The model returns not the character I asked for but the nearest shape it can assemble.

One objection is obvious: why use an image model at all? A language model writes 處 without ever failing, because it does not write: it retrieves a fixed code point and a font renders it. There is nothing to see there. The failure I examine is not a failure of Chinese language itself, but a failure that occurs at the boundary between linguistic encoding and visual synthesis. I chose the system where writing must happen pixel by pixel, because aphasia can only appear where synthesis is required. Twenty-six letters cover most English; each of thousands of Chinese characters must be learned alone. Even a balanced dataset would not equalise this, because the architecture already treats the complexity of the alphabet as its default. Recent computer-vision research names this exact pattern long-tail text rendering: image quality and character accuracy both fall as a character grows rarer in the data (Zhuang and others 2025). My 處-into-慶 is one instance of a documented law.

My East-West binary collapsed. The variable is not which culture trained the model but frequency. The three models form a descending order (SD 1.5 heaviest, FLUX next, GLM lightest), without exception. As a native reader I see it at the stroke level: the outline survives, the stroke logic is gone. From a distance it looks like writing; up close it is misalignment, one stroke too many or too few. Readability dissolves with distance.

I set this out as a diptych. On one side, the six traditional characters, correct in form, alongside their generated counterparts with broken interiors. On the other, pseudo-English: a fine-tuned model was given the manifesto's English line and asked to generate it as collapsed marks, the same process applied in reverse. The script that is supposed to survive and the script that is supposed to break trade places.

<img src="/static/images/Ethan/image1.jpg" class="single-column-img">

This descent is neither random nor a mere technical flaw; it is a visible register of power. Crawford argues that machine classification is never neutral: it records who holds weight in the world of data (Crawford 2021). The claim that such classification is objective is what Haraway calls the god trick, a view from nowhere that hides the position it speaks from (Haraway 1988). To stage this at small scale, I trained a CNN on a deliberately skewed set, 95% Latin characters to 5% Chinese. The training curve records the result plainly: the Latin class reaches near-perfect accuracy in the first epoch and holds there; the Chinese class oscillates and recovers more slowly, never closing the gap. It is a conceptual reenactment, not forensic proof, but the shape of the gap is the argument.

<img src="/static/images/Ethan/image3.gif">

Tsang Tsou-choi, the self-styled Kowloon Emperor, brushed his name and lineage across Hong Kong: utility boxes, road signs, walls (Tsang 1990s). The authorities cleared it as graffiti, refusing to read it as writing. My collapsed characters and his wall-names share a fate, unread by the system, one processed as graffiti, the other as noise. The algorithm does not fail to see 處; it meets an unfamiliar symbol and substitutes the nearest known one. In every classificatory system, marginal writing is not processed: it is overwritten.

What appears here is Glissant's right to opacity, but reversed. His right to opacity is claimed by a subject: the refusal to be made fully legible to colonial power. My characters are the inverse. Their opacity is not claimed but imposed; the statistics of the dataset, not the characters, made them unreadable. The model grants them visibility without readability: a shape appears, the stroke logic is gone. That is why their opacity is evidence of marginalisation, not resistance. The reversal happens in the act of naming. The characters do not resist; I resist on their behalf, by refusing to correct them and by calling their collapse a manifesto. The right to opacity is claimed by me, for them, after the fact.

One risk must be named. Xu Bing's _Book from the Sky_ invented some four thousand non-existent characters, later absorbed by Western institutions as mysterious Eastern aesthetics (Xu 1987–91). This project shares the same fate, its collapsed characters read as intriguing Eastern signs, the aesthetic swallowing the argument. I state the political position plainly, rather than trusting the image to speak, precisely to resist that absorption.

These characters do not need to be fixed. Aphasia is not an error to correct; it is the trace a training-data power structure leaves on the image. I show the collapse not to improve the model, but because the collapse is testimony. Cultural marginality settles into the loss of readability across viewing distance. From afar it looks like characters; up close, it is ruins. The algorithm does not write. It samples. It forgets. We do not fix aphasia; we let it speak.

</div>
<div class="divider"></div>
<div class="endnote-container" class="single-column-img">

#### **End Notes**

- Chiang, Ted (2023), ‘ChatGPT Is a Blurry JPEG of the Web’, _The New Yorker_, 9 February
- Crawford, Kate (2021), _Atlas of AI: Power, Politics, and the Planetary Costs of Artificial Intelligence_ (New Haven: Yale University Press)
- Glissant, Édouard (1997), _Poetics of Relation_, trans. by Betsy Wing (Ann Arbor: University of Michigan Press)
- Haraway, Donna (1988), ‘Situated Knowledges: The Science Question in Feminism and the Privilege of Partial Perspective’, _Feminist Studies_ 14.3, 575–99, [](https://doi.org/10.2307/3178066)
- Lu, Xun (1926), ‘In Memory of Miss Liu Hezhen’ [記念劉和珍君], _Yusi Weekly_ 74, 12 April
- Tsang, Tsou-choi (King of Kowloon) (1990s), _Untitled_ [ink on board], M+, Hong Kong, [](https://www.mplus.org.hk/en/collection/makers/tsang-tsou-choi-aka-king-of-kowloon/) [accessed 5 July 2026]
- Xu, Bing (1987–91), _Book from the Sky_ [Tianshu], installation, hand-printed books and scrolls of invented characters, ink on paper
- Zhipu AI (2025), _GLM Image_ [text-to-image model] (Beijing: Zhipu AI)
- Zhuang, Shuhan, and others (2025), ‘HDGlyph: A Hierarchical Disentangled Glyph-Based Framework for Long-Tail Text Rendering in Diffusion Models’, in _Proceedings of the 33rd ACM International Conference on Multimedia (MM ’25)_ (Dublin: ACM)
</div>
</div>
