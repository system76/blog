export default function (doc) {
  if (doc.isBroken) {
    return '/404'
  }

  switch (doc.type.toLowerCase()) {
    case 'post':
      return `/post/${doc.uid}`

    default:
      return '/'
  }
}
