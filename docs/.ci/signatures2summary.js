const signatures = require('../../signatures.json')

const toSummary = ({caption, description, part}) => {
  const FIRST = 0
  const SEC = 1
  const cap = caption.substring(FIRST, SEC).toUpperCase() + caption.substring(SEC)
  const desc = description || ' '
  return `${cap} ${desc} <sup>(evaluates ${part})</sup>`
}

const toTable = (signatures) => {
  const th = '|      | Secret | Detected in   |'
  const sp = '| ---: | :----- | :------------ |'
  let idx = 1
  const trs = signatures.map(({ caption, description, part }) => {
    let desc = ' '
    if (description) {
      desc = `<br><small>_${description || ' '}_</small>`
    }
    return `| ${idx++} | **${caption}**${desc} | <samp>${part}</samp> |`
  }).join('\n')
  return `
  ${th}
  ${sp}
  ${trs}
  `
}

const signatures2summary = () =>
  signatures.map((defn) => `${toSummary(defn).replace(/\s{2,}/, ' ')}`)

process.stdout.write(toTable(signatures))

module.exports = signatures2summary
