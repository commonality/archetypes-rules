import ow from 'ow'
import Rule from '../../rule/rule'
import loadRuleElements from './load-rule-elements'

const loadRuleFromObject = data => {
  ow(data, ow.object)

  const { name, elements } = data
  const rule = new Rule(name)
  loadRuleElements(elements, rule)

  return rule
}

export default loadRuleFromObject
