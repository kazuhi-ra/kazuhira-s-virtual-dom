// h: hyperscript
export const h = (tagName, { attrs = {}, children = [] }) => {
  return { tagName, attrs, children }
}
