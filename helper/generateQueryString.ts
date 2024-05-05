export const generateQueryString = (object: Object) => {
  let string: string[] = []
  const keysAndValues = Object.entries(object)
  keysAndValues.forEach(keyAndValue => {
    if (keyAndValue[1] !== '') {
      string.push(`${keyAndValue[0]}=${keyAndValue[1]}`)
    }
  })
  return string.join('&')
}
