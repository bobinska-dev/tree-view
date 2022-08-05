
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'


// 💡 This is only an example schema for page, which has a reference to page in it. This reference has to be added to your page schema as well (with the same name)
import page from './page'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([

    page,

  ]),
})
