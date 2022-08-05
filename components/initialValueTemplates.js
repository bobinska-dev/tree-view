// initialValueTemplates.js

import T from "@sanity/base/initial-value-template-builder";
import { MdCode } from "react-icons/md";

export default [
    ...T.defaults(),
    T.template({
        id: "generic-page",
        title: "Generic page",
        schemaType: "page",
        icon: MdCode,

        value: (parameters) => {
            console.log(parameters);
            return {
                parent: {
                    _ref: parameters.parent,
                    _type: "reference",
                },
            }
        },
    }),
    T.template({
        id: "sub-page",
        title: "Sub-page",
        schemaType: "page",
        icon: MdCode,

        value: (parameters) => {
            console.log(parameters);
            return {
                parent: {
                    _ref: parameters.parent,
                    _type: "reference",
                },
            }
        },
    }),
];