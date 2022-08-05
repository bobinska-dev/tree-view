# Tree View Desk Structure for pages

This is a working version of your briefing ☺️

Important Information and explanations are commented into the code as well 💡👀 

## Clone and Test

Test the studio by cloning the repo and installing the dependencies, by running `sanity install` and `yarn install`. The dummy dataset is public and you should be able to then locally run it.

## Step 1 – Pagereferences

Make sure, your `page` schema has a reference field to `page`
[see schemas/page.js](https://github.com/bobinska-dev/tree-view/tree/master/schemas)

## Step 2 – Desk Structure

Since structure builder files can get a bit wild, I tend to split the code. This means, that in this example the base of my desk structure is at `./desk/index.js`. Nesting of the `desk` files: `index` -> `pages` -> `subpages`
[see desk folder](https://github.com/bobinska-dev/tree-view/tree/master/desk)

## Step 3 – Initial Value Templates

The different Templates are stored here and used in `pages` and `subpages`. (nothing changed here, I just copied it from Peter and your slack conversation)
[see component folder](https://github.com/bobinska-dev/tree-view/blob/master/components/initialValueTemplates.js)

____

Unfortunately the page doc is not displayed by default, but I think that this is actually better:

* Editors can see the panes better especially once they reached pane 4

* The usage of Icons makes clear, if we have reached a collection of sub-pages, or the page itself.

Please do not hesitate to contact me. I am happy to assist you in the implementation 😇
