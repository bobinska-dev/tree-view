S.list()
    .items([
        S.listItem()
            .title('Pages')
            .child(
                S.document()
                    .schemaType('page')
                    .documentId('e8640379-5887-470d-8ee8-27d691b077c3'),
                S.listItem()
                    .title("Start")
                    .child((pageId) =>
                        S.documentTypeList("page")
                            .title("Pages")
                            .filter('_type == "page" && parent._ref=="e8640379-5887-470d-8ee8-27d691b077c3"')
                            .params({ pageId })
                            .initialValueTemplates([
                                S.initialValueTemplateItem("generic-page", {
                                    parent: "e8640379-5887-470d-8ee8-27d691b077c3",
                                    type: "reference",
                                }),
                            ])
                            .child((pageId) => {
                                return S.documentTypeList("page")
                                    .title("Sub pages")
                                    .filter(`_type == "page" && (parent._ref=="${pageId}" || _id=="${pageId}")`)
                                    .initialValueTemplates([
                                        S.initialValueTemplateItem("sub-page", {
                                            parent: pageId,
                                            type: "reference",
                                        }),
                                    ]);
                            }),
                    ),

    )])


    // Original
S.listItem()
    .title("Start")
    .child((pageId) =>
        S.documentTypeList("page")
            .title("Pages")
            .filter('_type == "page" && parent._ref=="e8640379-5887-470d-8ee8-27d691b077c3"')
            .params({ pageId })
            .initialValueTemplates([
                S.initialValueTemplateItem("generic-page", {
                    parent: "e8640379-5887-470d-8ee8-27d691b077c3",
                    type: "reference",
                }),
            ])
            .child((pageId) => {
                return S.documentTypeList("page")
                    .title("Sub pages")
                    .filter(`_type == "page" && (parent._ref=="${pageId}" || _id=="${pageId}")`)
                    .initialValueTemplates([
                        S.initialValueTemplateItem("sub-page", {
                            parent: pageId,
                            type: "reference",
                        }),
                    ]);
            }),
    ),
