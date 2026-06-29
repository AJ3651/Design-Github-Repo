# Pin Publishing

A web-to-print book pipeline. Write content in Markdown, see it laid out as a paginated book in the browser, and print or export to PDF from there.

---

## Getting started

You will need [Node.js](https://nodejs.org) installed on your machine (version 18 or later). If you are not sure whether you have it, open a terminal and type:

```
node --version
```

If you see a version number you are good to go. If not, download and install Node.js from the link above.

### Install

Open a terminal in this folder and run:

```
npm install
```

This only needs to be done once.

### Run the preview

```
npm run dev
```

Then open your browser and go to the address shown in the terminal — it will be something like `http://localhost:8080`. The page will automatically reload whenever you save a file.

### Build for print / export

```
npm run build
```

This writes the finished HTML to the `output/` folder. Open `output/index.html` in a browser and use the browser's print dialog to export as PDF.

---

## How the project is organised

```
src/
  index.njk                  ← the book blueprint — controls what appears and in what order
  _layouts/
    book.njk                 ← the HTML wrapper (head, paged.js, etc.)
  _includes/
    sections/
      toc.njk                ← auto-generated table of contents
      introduction.njk       ← one file per section
      category01.njk
      ...
  introduction/
    introduction.11tydata.json   ← settings for this section
    01-overview.md               ← content files, in filename order
  category01/
    category01.11tydata.json
    01-chapter-one.md
    02-chapter-two.md
  ...

print.css                    ← all print and layout styles
```

Content lives in folders inside `src/`. Each folder is one section of the book. Chapters within a section are the `.md` files inside that folder, and they appear in the book in filename order — so prefix them with numbers (`01-`, `02-`, etc.) to control the sequence.

---

## Writing content

Each `.md` file is a chapter. It uses standard [Markdown](https://www.markdownguide.org/cheat-sheet/) for text formatting, and starts with a small block of settings at the top called frontmatter:

```markdown
---
title: My Chapter Title
---

## A heading

Your text goes here. You can use **bold**, *italic*, and other standard Markdown.
```

The `title` field is used in the table of contents and as the HTML anchor for that chapter. It is required.

---

## Adding a new section

There are four things to do when you add a new section:

### 1. Create the content folder

Inside `src/`, create a new folder. The folder name becomes the section's identifier, so keep it short and use only lowercase letters, numbers, and hyphens — for example `my-new-section`.

Add your `.md` chapter files to it, prefixed with numbers to set their order:

```
src/
  my-new-section/
    01-first-chapter.md
    02-second-chapter.md
```

### 2. Create the settings file

Inside your new folder, create a file named `<foldername>.11tydata.json` — so for `my-new-section` it would be `my-new-section.11tydata.json`. The file name must match the folder name exactly.

Paste in the following and edit the values:

```json
{
  "permalink": false,
  "sectionOrder": 5,
  "categoryTitle": "My New Section",
  "tocNested": false
}
```

See below for what each field means.

### 3. Create the section template

Inside `src/_includes/sections/`, create a new file named `my-new-section.njk`. Copy the contents of any existing section file and change the folder name in the `inFolder` call to match your new folder:

```
{% set chapters = collections.book | inFolder("my-new-section") %}
<section id="my-new-section" class="category{% if chapters[0].data.tocNested %} book-category{% endif %}">
  <h2 class="category-title">{{ chapters[0].data.categoryTitle }}</h2>
  {% for chapter in chapters %}
  <article id="{{ chapter | fileId }}" class="chapter">
    {{ chapter.templateContent | safe }}
  </article>
  {% endfor %}
</section>
```

The three places where `my-new-section` appears (the `inFolder` call, the `id`, and the filename) must all match your folder name.

### 4. Add the section to the book blueprint

Open `src/index.njk`. You will see a list of `{% include %}` lines — one per section. Add a new line for your section, in the position where you want it to appear in the book:

```
{% include "sections/my-new-section.njk" %}
```

Save the file and the preview will reload with your new section included.

---

## Settings reference (`*.11tydata.json`)

Each section folder has one settings file. Here is what each field does:

| Field | Type | Description |
|---|---|---|
| `permalink` | `false` | Always set this to `false`. It tells the system not to create a separate page for each chapter — they are all assembled into one book file. |
| `categoryTitle` | text | The display name for this section. Used as the section heading in the book and as the label in the table of contents. |
| `sectionOrder` | number | Controls where this section appears in the table of contents. Lower numbers appear first. Does not affect the book body order (that is controlled by the `{% include %}` order in `index.njk`). |
| `tocNested` | `true` or `false` | Controls how this section appears in the table of contents. `true` — the section title is shown as a heading with an indented list of chapters beneath it. `false` — each chapter appears directly in the top-level list with no grouping. Also controls whether the section gets a page break before it in print. |

---

## Images and fonts

### Folder structure

Place your files in the `static/` folder at the project root:

```
static/
  images/    ← put image files here (.jpg, .png, .svg, etc.)
  fonts/     ← put font files here (.woff2, .otf, etc.)
```

During `npm run dev` these files are served directly — nothing is copied. When you run `npm run build` for PDF export, they are copied into `output/` automatically so the final file is self-contained.

### Referencing images in markdown

A regular markdown image sits within one column:

```markdown
![Description of the image](static/images/your-image.jpg)
```

To make an image span the full width of both columns, wrap it in a `<figure class="full-width">` tag. You can mix HTML and Markdown in the same `.md` file:

```markdown
<figure class="full-width">
  <img src="static/images/your-image.jpg" alt="Description of the image">
  <figcaption>Optional caption</figcaption>
</figure>
```

### Local fonts

Drop your font file into `static/fonts/` and add an `@font-face` block to `print.css`:

```css
@font-face {
    font-family: "MyFont";
    src: url("static/fonts/MyFont.woff2") format("woff2");
}
```

Then use the family name anywhere in `print.css` as normal, e.g. `font-family: "MyFont"`.

---

## Styling

All visual styles live in `print.css`. This is a standard CSS file — you can edit it freely. It uses [paged.js](https://pagedjs.org) conventions for print layout, so things like page margins, running headers and footers, and page size are set in the `@page` rule at the bottom of the file.

A few classes to be aware of when styling:

| Class | What it is |
|---|---|
| `.chapter` | Every chapter article. Currently set to two-column layout and starts on a new page. |
| `.book-category` | Sections where `tocNested: true`. Starts on a new page. |
| `.category-title` | The `<h2>` heading at the top of each section. |
| `.toc` | The table of contents block. |

---

## Troubleshooting

**My new section is not appearing.**
Check all four steps above. The most common causes are: the settings file is not named after the folder, or the `{% include %}` line is missing from `index.njk`.

**The table of contents order is wrong.**
Adjust the `sectionOrder` numbers in the settings files. They do not need to be consecutive — you can use `10`, `20`, `30` to leave room for future sections.

**Changes are not showing up.**
Make sure the dev server is running (`npm run dev`) and that you saved the file. If the preview still does not update, stop the server with `Ctrl+C` and start it again.
