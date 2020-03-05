/**
 * A list of globally registered filters.
 */
export default {
  /**
   * Convert specific species name e.g. "Quercus robur" to a URL path for routing.
   */
  speciesToLink (speciesName) {
    if (!speciesName) return '/something_went_wrong'
    speciesName = speciesName.toString()
    const speciesPath = speciesName.trim().toLowerCase().replace(/\s+/g, '_')
    return `/trees/${speciesPath}`
  },
  /**
   * Parse a block of text and convert any markdown style [links](http://something) to HTML links.
   */
  markdownLink (text) {
    if (typeof text !== 'string') {
      return text
    }
    return text.replace(/\[([^[\]]+)\]\(([^()]+)\)/g, (match, p1, p2) => `<a href="${p2}">${p1}</a>`)
  },
  /**
   * Parse a block of text and wrap it in <p> tags at the beginning, end, and for each new line.
   */
  stringToParagraphs (text) {
    if (typeof text !== 'string') {
      return text
    }
    // Wrap the block of text in <p> tags.
    const onePara = `<p>${text}</p>`
    // Replace any newline characters with <p> tags.
    const multiPara = onePara.replace(/\n/g, '</p><p>')
    return multiPara
  }
}
