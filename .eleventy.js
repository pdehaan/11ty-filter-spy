const inspect = require("node:util").inspect;

const _ = require("lodash");

const { EleventyRenderPlugin: pluginRender } = require("@11ty/eleventy");
const pluginNavigation = require("@11ty/eleventy-navigation");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntax = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  // console.log(eleventyConfig);
  // const baselineFilters = getFilters(eleventyConfig);

  const auditFilters = (plugin, label = "", opts={}, cfg = eleventyConfig) => {
    setImmediate(() => {
      const preFilters = getFilters(cfg);
      cfg.addPlugin(plugin, opts);
      const postFilters = getFilters(cfg);
      console.log(`${label}:`, filterDiff(postFilters, preFilters));
    });
  }

  auditFilters(pluginNavigation, "@11ty/eleventy-navigation");
  auditFilters(pluginRender, "EleventyRenderPlugin");
  auditFilters(pluginRss, "@11ty/eleventy-plugin-rss");
  auditFilters(pluginSyntax, "@11ty/eleventy-plugin-syntaxhighlight");

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};

function getFilters(cfg = {}) {
  const keys = [
    "javascriptFunctions",
    "liquidFilters",
    "liquidPairedShortcodes",
    "liquidShortcodes",
    "liquidTags",
    "nunjucksAsyncFilters",
    "nunjucksAsyncPairedShortcodes",
    "nunjucksAsyncShortcodes",
    "nunjucksFilters",
    "nunjucksPairedShortcodes",
    "nunjucksShortcodes",
    "nunjucksTags",
  ];
  return keys.reduce((acc = {}, item = "") => {
      acc[item] = Object.keys(cfg[item]).sort();
      return acc;
    }, {});
}

function filterDiff(after={}, before={}) {
  return Object.entries(after)
    .reduce((acc = {}, [name = "", filters = []]) => {
      const diff = _.difference(filters, before[name]);
      if (diff.length) {
        acc[name] = diff;
      }
      return acc;
    }, {});
}
