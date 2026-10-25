import { jest } from '@jest/globals'
import Operator from "../../../operator/operator"
import Proposition from "../../../proposition/proposition"
import processOperator from "../process-operator"

describe("processOperator", () => {
  let spy = null

  beforeEach(() => {
    spy = null
  })

  afterEach(() => {
    spy.mockRestore()
  })

	it("invokes a boolean, quantifier, or qualifier operation", () => {
		const operator = new Operator("NOT")
		const stack = [new Proposition("p", true)]
    spy = jest.spyOn(operator, 'toOperationName')
		processOperator(stack, operator)
    expect(spy).toHaveBeenCalled()
	})
})
