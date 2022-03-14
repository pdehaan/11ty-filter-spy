# 11ty-filter-spy

Poorly named repo which inspects which filters/shortcodes/tags are added by plugins for common engines (mostly JavaScript, LiquidJS, and Nunjucks).

```sh
> 11ty-filter-spy@1.0.0 build
> eleventy

@11ty/eleventy-navigation: {
  javascriptFunctions: [
    'eleventyNavigation',
    'eleventyNavigationBreadcrumb',
    'eleventyNavigationToHtml',
    'eleventyNavigationToMarkdown'
  ],
  liquidFilters: [
    'eleventyNavigation',
    'eleventyNavigationBreadcrumb',
    'eleventyNavigationToHtml',
    'eleventyNavigationToMarkdown'
  ],
  nunjucksFilters: [
    'eleventyNavigation',
    'eleventyNavigationBreadcrumb',
    'eleventyNavigationToHtml',
    'eleventyNavigationToMarkdown'
  ]
}

EleventyRenderPlugin: {
  javascriptFunctions: [ 'renderFile', 'renderTemplate' ],
  liquidShortcodes: [ 'renderFile' ],
  liquidTags: [ 'renderTemplate' ],
  nunjucksAsyncShortcodes: [ 'renderFile' ],
  nunjucksTags: [ 'renderTemplate' ]
}

@11ty/eleventy-plugin-rss: {
  nunjucksAsyncFilters: [ 'htmlToAbsoluteUrls' ],
  nunjucksFilters: [
    'absoluteUrl',
    'dateToRfc3339',
    'getNewestCollectionItemDate',
    'rssDate',
    'rssLastUpdatedDate'
  ]
}

@11ty/eleventy-plugin-syntaxhighlight: {
  javascriptFunctions: [ 'highlight' ],
  liquidTags: [ 'highlight' ],
  nunjucksPairedShortcodes: [ 'highlight' ]
}
```
