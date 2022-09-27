import { DEFAULT_TITLE } from '../config'

export const useMeta = () => {
  const setTitle = (title) => {
    let resultTitle = DEFAULT_TITLE
    if(title) {
      resultTitle = `${title} - ${DEFAULT_TITLE}`
    }
    document.title = resultTitle
  }
  return {
    setTitle
  }
}
