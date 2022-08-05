
import S from '@sanity/desk-tool/structure-builder'
import { VscBrowser } from "react-icons/vsc";


export default S.listItem()
    .title("Sub-Pages")
    .child((pageId) =>

        S.documentTypeList("page") // 💡 These are the pages, that reference Homepage
            .title("Sub-Pages under Home")
            .filter('_type == "page" && parent._ref=="e8640379-5887-470d-8ee8-27d691b077c3"')

            .params({ pageId }) // 💡 This is the Template that creates new pages and sets the ref to home.
            .initialValueTemplates([
                S.initialValueTemplateItem("generic-page", {
                    parent: "e8640379-5887-470d-8ee8-27d691b077c3",
                    type: "reference",
                }),
            ])

            // 💡 The Pane with the subpage and its subpages
            .child((pageId) =>

                S.list()
                    .title('Pages')
                    .items([

                        S.documentListItem() // 💡 This is the subpage document
                            .id(pageId)
                            .schemaType('page')
                            .icon(VscBrowser),

                        S.divider(),

                        S.listItem()
                            .title("Sub-Pages")
                            .child(
                                S.documentTypeList("page") // 💡 the sub-sub-pages
                                    .title("Sub-Pages")
                                    .filter(`_type == "page" && (parent._ref=="${pageId}")`)

                                    .initialValueTemplates([ // 💡 This is the Template that creates new pages and sets the ref to the subpage 👆
                                        S.initialValueTemplateItem("sub-page", {
                                            parent: pageId,
                                            type: "reference",
                                        }),
                                    ])
                            )
                    ])

            ),
    )


