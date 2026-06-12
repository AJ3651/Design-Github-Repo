

This repo is going to be used for the planning and writing a document using web to print practices.

This zine is published using the tool ether2html by https://gitlab.constantvzw.org/osp/tools.ether2html
Instructions adjusted from there. For more info on constant visit https://constantvzw.org/site/ 

Open Source fonts from http://osp.kitchen/foundry/ 


### How to use

1. Download this repository, open the whole folder in a text editor (e.g. VS Code). 6. In VS Code using the Live Server plugin click Go live to see the PDF generated in your browser.
2. Create an etherpad somewhere for the content (e.g. https://pad.vvvvvvaria.org/).
5. Edit that index.html file by replacing the URL under the comment <!-- CHANGE THE URL OF YOUR MARKDOWN CONTENT PAD BELOW --> with the export URL of the pad for the content you created in step 2. Copy the link location and simply add "/export/txt" to the end of the url like you see below:
    ```
        https://pad.vvvvvvaria.org/wcc2content/export/txt

    ```
4. You can simply edit the local CSS found in the CSS folder. And skip the next two steps.
5. If you want to work on CSS collaboratively you can use a pad to edit CSS with others. Create an etherpad somewhere for the CSS (e.g. https://pad.vvvvvvaria.org/).
6. To add a CSS Pad edit that index.html file by replacing the URL under the comment <!-- CHANGE THE URL OF YOUR CSS PAD BELOW --> with the export URL of the pad CSS you created in step 1.  Copy the link location and simply add "/export/txt" to the end of the url like you see below:
    ```
        https://pad.vvvvvvaria.org/wcc2css/export/txt

    ```
7. Save and reload the browser to check that your new content is being used.
8. Edit your pad with content (markdown or html) and your pad with CSS styles.
9. Click refresh on your browser to reload the content being used by the index.html in your web browser.
10. Use the print function of your browser and choose "Save as file". Here is your pdf ready to print!
