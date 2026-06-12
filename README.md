# Ether2html

Skeleton to design a webpage (for screen or print) collectively and synchronously using Etherpad, a collaborative text editor. It uses the [Showdown library](https://github.com/showdownjs/showdown) to convert markdown to html and the [paged.js library](https://www.pagedmedia.org/paged-js/) to layout the pages. ERG (Brussels) and Piet Zwart Media Design Master (Rotterdam) are the first places where is have been used by participants of workshops starting from late 2019.

*Working document in the browser*

![](http://osp.kitchen/api/http://osp.kitchen/api/osp.tools.ether2html/45f025c0b37efd149d4dfdb9ce0af2d01ff5ff81/blob-data/book-screengrab.png)

# How to use it

1. Create an etherpad somewhere for the CSS (e.g. <https://framapad.org>).
2. Create an etherpad somewhere for the content (e.g. <https://framapad.org>).
3. Click on the link [ether2html.html](http://osp.kitchen/tools/ether2html/tree/master/ether2html.html#project-detail-files) then download the file by right-click "Download raw" and choose "Save link as".
4. Edit that `ether2html.html` file by replacing the URL under the comment `<!-- CHANGE THE URL OF YOUR CSS PAD BELOW -->` by the export URL of the pad CSS you created in step 1, copy the link location of the plain text export of the pad - see below the screen capture.
5. Edit that `ether2html.html` file by replacing the URL under the comment `<!-- CHANGE THE URL OF YOUR MARKDOWN CONTENT PAD BELOW -->` by the export URL of the pad for the content you created in step 2, copy the link location of the plain text export of the pad - see below the screen capture.
6. Open the file `ether2html.html` in your web browser (Firefox or Chrome).
7. Edit your pad with content (markdown or html) and your pad with CSS styles. 
8. Reload the file `ether2html.html` opened in your web browser. 
9. Use the print function of your browser and choose "Save as file". Here is your pdf ready to print!

*Copy the link location of your pad*

![](http://osp.kitchen/api/osp.tools.ether2html/b72c830156ff61069478b0052f9d77b52affa539/blob-data/pad-menu-screengrab.png)

# Markdown

Showdown.js parse markdown code with some specificities, look at [https://github.com/showdownjs/showdown/wiki/Showdown's-Markdown-syntax#headings](https://github.com/showdownjs/showdown/wiki/Showdown's-Markdown-syntax#headings). For next versions or workshops we would maybe explore the available options at [https://github.com/showdownjs/showdown/wiki/Showdown-Options](https://github.com/showdownjs/showdown/wiki/Showdown-Options).

# Licence

© OSP under the GNU-GPL3

# Use cases

## Whole erg catalogue

Workshop at [erg](http://erg.be), Brussels with Master students in graphic design and visual communication.

![](http://osp.kitchen/api/osp.tools.ether2html/6c2e5f9adcc753b233298fb872c313ccea71d065/blob-data/erg_20200129_190516.jpg)
![](http://osp.kitchen/api/osp.tools.ether2html/8429dcadf98a4e9d043fc6ef4b79a958e9d633e9/blob-data/erg_20200129_190741.jpg)

## Workshop at Piet Zwart Institute

Workshop at PZI with Master 1 students of the [Xpub](https://www.pzwart.nl/experimental-publishing/) department for the project/issue [We have an USB full of documents - We have secrets to tell](https://issue.xpub.nl/11/)

Master of Arts in Fine Art and Design: Experimental Publishing Piet Zwart Institute, Willem de Kooning Academie - Archivists: Avital Barkai, Damlanur Bilgin, Sandra Golubjevaite, Tisa Neža Herlec, Mark van den Heuvel, Max Lehmann, Mika Motskobili, Clara Noseda, Anna Sandri, Ioana Tomici Teachers: Sami Hammana, Freedom Martinez, Andre Castro, Aymeric Mansoux, Michael Murtaugh, Steve Rushton, Leslie Drost-Robbins Guests: OSP (Stéphanie Vilayphiou, Pierre Huyghebaert), Mayday Rooms (Rosemary Grennan, Jan Gerber), Warp Weft Memoty (Renée Turner, Cristina Cochior), Jérémie Zimmermann, Dušan Barok, error404

![](http://osp.kitchen/api/osp.tools.ether2html/836b1815669163e5f1f6443f0f924fd131aa8186/blob-data/pzi_20200128_111221.resized.jpg)
![](http://osp.kitchen/api/osp.tools.ether2html/332bf351637b4209cf88bb9422a6edb435c0b5a7/blob-data/pzi_20200128_175836.resized.jpg)
![](http://osp.kitchen/api/osp.tools.ether2html/0cc802640dc8b3cc093d920f4372f937edaab908/blob-data/pzi_20200128_183557.resized.jpg)

## Remote workshop during Covid-19 lockdown at the type media department, La Cambre, Brussels

"Ce qui brûle", questions et réponses de Marie de Villoutreys, Yulen Iriarte Arriola, Timothée Lee, Julie Lemoine, Paul Rivet, Isabelle Sidaine, Laetitia Troilo, Adrien Requin, Hannah Lamarti et Mathilde Guiot, en discussions avec Laure Giletti et Pierre Huyghebaert. Publication réalisée avec ether2html par Hannah Lamarti, Mathilde Guiot, Julie Lemoine et Pierre Huyghebaert en avril 2020, une [publication téléchargeable](https://galee.lacambretypo.be/s/2nC6e5oJg8RGJLM).

![](http://lacambretypo.be/soulever-l-effondrement/ce-qui-brule/jitsi.jpg)
![](http://lacambretypo.be/soulever-l-effondrement/ce-qui-brule/ce-qui-brule-cover.png)
