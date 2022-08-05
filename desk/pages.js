import S from "@sanity/desk-tool/structure-builder";
import { VscBrowser } from "react-icons/vsc";

import subPages from "./subPages";

export default S.listItem()
    .title('Start')
    .icon(VscBrowser)
    .child(() =>
        S.list()
            .title('Start') // 💡 This is "Start" Pane title
            .items([

                S.documentListItem() // 💡 This is "Homepage"
                    .id('e8640379-5887-470d-8ee8-27d691b077c3')
                    .schemaType('page')
                    .icon(VscBrowser),

                S.divider(),

                subPages // 💡 These are the Sub-Pages

            ])

    );
