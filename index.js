var replacements = [
  [/\*/g, '\\*', 'asterisks'],
  [/#/g, '\\#', 'number signs'],
  [/\//g, '\\/', 'slashes'],
  [/\(/g, '\\(', 'parentheses'],
  [/\)/g, '\\)', 'parentheses'],
  [/\[/g, '\\[', 'square brackets'],
  [/\]/g, '\\]', 'square brackets'],
  [/{/g, '\\{', 'curly brackets'],
  [/}/g, '\\}', 'curly brackets'],
  [/</g, '&lt;', 'angle brackets'],
  [/>/g, '&gt;', 'angle brackets'],
  [/_/g, '\\_', 'underscores'],
  [/\+/g, '\\+', 'plus'],
  [/=/g, '\\=', 'equals'],
  [/-/g, '\\-', 'minus'],
  [/~/g, '\\~', 'tilde'],
  [/`/g, '\\`', 'backtick'],
  [/\|/g, '\\|', 'vertical bar'],
  [/\./g, '\\.', 'dot'],
  [/!/g, '\\!', 'exclamation mark'],
]

module.exports = function (string, skips) {
  skips = skips || []
  return replacements.reduce(function (string, replacement) {
    var name = replacement[2]
    return name && skips.indexOf(name) !== -1
      ? string
      : string.replace(replacement[0], replacement[1])
  }, string)
}
