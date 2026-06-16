module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "print.css": "print.css" });

  // Returns all items from a named src/ subfolder, ordered by filename
  eleventyConfig.addFilter("inFolder", function (collection, folderName) {
    return collection.filter((item) => {
      const parts = item.inputPath.split("/");
      return parts[parts.length - 2] === folderName;
    });
  });

  // Unique HTML id for a collection item: "{folder}-{filename}"
  eleventyConfig.addFilter("fileId", function (item) {
    const parts = item.inputPath.replace(/\\/g, "/").split("/");
    const folder = parts[parts.length - 2];
    const file = parts[parts.length - 1].replace(/\.[^/.]+$/, "");
    return `${folder}-${file}`;
  });

  // Groups collection by sectionOrder, returns [{order, title, folder, chapters}]
  eleventyConfig.addFilter("groupBySectionOrder", function (collection) {
    const groups = new Map();
    for (const item of collection) {
      const order = item.data.sectionOrder ?? 999;
      if (!groups.has(order)) {
        const parts = item.inputPath.replace(/\\/g, "/").split("/");
        const folder = parts[parts.length - 2];
        groups.set(order, {
          order,
          title: item.data.categoryTitle || folder,
          folder,
          tocNested: item.data.tocNested || false,
          chapters: [],
        });
      }
      groups.get(order).chapters.push(item);
    }
    return [...groups.values()].sort((a, b) => a.order - b.order);
  });

  // All chapter files (everything under src/ except index.md), sorted by
  // filename so numeric prefixes (01-, 02-) set chapter order within a category
  eleventyConfig.addCollection("book", function (api) {
    return api
      .getFilteredByGlob("src/**/*.md")
      .filter((item) => !item.inputPath.endsWith("/index.md"))
      .sort((a, b) => a.inputPath.localeCompare(b.inputPath));
  });

  return {
    dir: {
      input: "src",
      output: "output",
      layouts: "_layouts",
      includes: "_includes",
    },
    markdownTemplateEngine: "njk",
  };
};
