/* eslint-disable max-len */

import path from "node:path";
import { jest } from "@jest/globals";
import fs from "fs-extra";
import Operator from "../../operator/operator";
import Proposition from "../../proposition/proposition";
import af from "../../rule/__tests__/__fixtures__/travel/state/gov/advisories/AF.json" with {
	type: "json",
};
import Rule from "../../rule/rule";
import RuleContext from "../../rule-context/rule-context";
import RuleOverride from "../../rule-override/rule-override";
import RuleSet from "../../rule-set/rule-set";
import WeakSetVariable from "../../variable/weak-set-variable";
import factory from "../factory";

describe("factory", () => {
	let spy = null;

	beforeEach(() => {
		spy = null;
	});

	afterEach(() => {
		if (spy) {
			spy.mockRestore();
		}
	});

	describe("createFromFile", () => {
		describe("reads JSON and", () => {
			it("creates a Fact instance (as RuleContext)", async () => {
				const filePath = path.resolve(
					"./lib/factory/helpers/__tests__/__fixtures__/do-not-travel-list.fact.json",
				);
				const fact = await factory.createFromFile(filePath);
				expect(fact).toBeInstanceOf(RuleContext);
			});
			it("creates a Rule instance", async () => {
				const filePath = path.resolve(
					"./lib/factory/helpers/__tests__/__fixtures__/do-not-travel-list.rule.json",
				);
				const rule = await factory.createFromFile(filePath);
				expect(rule).toBeInstanceOf(Rule);
			});
			it("creates a RuleContext instance", async () => {
				const filePath = path.resolve(
					"./lib/factory/helpers/__tests__/__fixtures__/do-not-travel-list.rule-context.json",
				);
				const ruleContext = await factory.createFromFile(filePath);
				expect(ruleContext).toBeInstanceOf(RuleContext);
			});
			it("creates a RuleOverride instance", async () => {
				const filePath = path.resolve(
					"./lib/factory/helpers/__tests__/__fixtures__/do-not-travel-kp.rule-override.json",
				);
				const ruleOverride = await factory.createFromFile(filePath);
				expect(ruleOverride).toBeInstanceOf(RuleOverride);
			});
			it("creates a RuleSet instance", async () => {
				const filePath = path.resolve(
					"./lib/factory/helpers/__tests__/__fixtures__/do-not-travel-list.rule-set.json",
				);
				const ruleSet = await factory.createFromFile(filePath);
				expect(ruleSet).toBeInstanceOf(RuleSet);
			});

			describe("when a file cannot be found", () => {
				it("throws an error", async () => {
					try {
						await factory.createFromFile("/nothing.json");
					} catch (error) {
						expect(error).toBeDefined();
					}
				});
			});
		});
	});

	describe("fromObject", () => {
		describe("when given an object literal", () => {
			it("creates a prototypal instance", () => {
				const rule = factory.createFromObject(af);
				expect(rule).toBeInstanceOf(Rule);
				expect(rule.elements.length).toBe(af.elements.length);
			});
		});
	});

	describe("operator", () => {
		it("creates an Operator prototype from a valid Operator name", () => {
			const element = factory.createOperator("AND");
			expect(element).toBeInstanceOf(Operator);
			expect(element.type).toBe("archetypes.rules.Operator");
		});
	});

	describe("proposition", () => {
		it("creates a Proposition prototype", () => {
			const element = factory.createProposition("p");
			expect(element).toBeInstanceOf(Proposition);
			expect(element.value).toBe(false);
		});
	});

	describe("variable", () => {
		it("creates a Variable sub-type", () => {
			const element = factory.createVariable("weak-set", new WeakSet());
			expect(element).toBeInstanceOf(WeakSetVariable);
		});
	});
});
