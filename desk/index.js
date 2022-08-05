// /deskStructure.js
import S from '@sanity/desk-tool/structure-builder'
import pages from './pages'


// Hide document types that we already have a structure definition for
const hiddenDocTypes = (listItem) =>
    ![
        "page"
    ].includes(listItem.getId());

export default () =>
    S.list()
        .title('Content')
        .items([

            pages, // 💡 This is "Start"
            S.divider(),

            ...S.documentTypeListItems().filter(hiddenDocTypes)
        ])