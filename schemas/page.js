import { VscBrowser } from "react-icons/vsc";

export default {
    name: 'page',
    title: 'Page',
    type: 'document',
    icon: VscBrowser,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        // 💡 This reference has to be added to your page schema as well (with the same name)
        {
            name: 'parent',
            title: 'parent',
            type: 'reference',
            to: [{ type: 'page' }],
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'ion',
        },
    },
}