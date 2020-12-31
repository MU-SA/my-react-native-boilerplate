import reduce from 'lodash/reduce'
import set from 'lodash/set'

// Accepts routes hash and returns navigation-ready routes names using "options"
// argument with prefix

const OPTIONS = {
  prefix: '',
}

export default (routes, options = OPTIONS) =>
  reduce(
    routes,
    (names, route) =>
      set(names, route, options.prefix ? options.prefix + route : route),
    {},
  )
