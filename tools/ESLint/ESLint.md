# ESLint
* https://eslint.org/
* https://github.com/eslint/eslint
* [shared eslint config](https://www.npmjs.com/search?q=keywords:eslintconfig)

> ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. In many ways, it is similar to **JSLint** and **JSHint** with a few exceptions:
> - ESLint uses [Espree](https://github.com/eslint/js/tree/main/packages/espree) for JavaScript parsing.
> - ESLint uses an AST to evaluate patterns in code.
> - ESLint is completely pluggable, every single rule is a plugin and you can add more at runtime.

```shell
# install and configure
npm init @eslint/config
# use `eslint-config-xo` shared config - npm 7+
npm init @eslint/config@latest -- --config eslint-config-xo
# lint
npx eslint xxx.js 

# global install
npm install eslint --global

# manual setup
npm install --save-dev eslint @eslint/js
touch eslint.config.js
npx eslint project-dir/ xxx.js 
```

# Core Concepts
* https://eslint.org/docs/latest/use/core-concepts/

ESLint is a configurable JavaScript linter.

* rules/规则
  * Rules are the core building block of ESLint. A rule validates if your code meets a certain expectation, and what to do if it does not meet that expectation. Rules can also contain additional configuration options specific to that rule.
  * rule fixes: Rules may optionally provide fixes for violations that they find. Fixes safely correct the violation without changing application logic. Fixes may be applied automatically with the `--fix command line option` and via editor extensions.
  * rule suggestions: Rules may optionally provide suggestions in addition to or instead of providing fixes.
* configuration files/配置文件
  * An ESLint configuration file is a place where you put the configuration for ESLint in your project. You can include built-in rules, how you want them enforced, plugins with custom rules, shareable configurations, which files you want rules to apply to, and more.
* sharable configurations/共享配置
  * Shareable configurations are ESLint configurations that are shared via npm.
  * https://eslint.org/docs/latest/use/configure/configuration-files#using-a-shareable-configuration-package
* plugins/插件
  * An ESLint plugin is an npm module that can contain a set of ESLint rules, configurations, processors, and languages. Often plugins include custom rules. Plugins can be used to enforce a style guide and support JavaScript extensions (like TypeScript), libraries (like React), and frameworks (like Angular).
* parsers/解析器
  * An ESLint parser converts code into an abstract syntax tree that ESLint can evaluate. By default, ESLint uses the built-in [Espree](https://github.com/eslint/js/tree/main/packages/espree) parser, which is compatible with standard JavaScript runtimes and versions.
  * Custom parsers let ESLint parse non-standard JavaScript syntax. Often custom parsers are included as part of shareable configurations or plugins, so you don’t have to use them directly.
    * ex: https://www.npmjs.com/package/@typescript-eslint/parser
* custom processors/自定义处理器
  * An ESLint processor extracts JavaScript code from other kinds of files, then lets ESLint lint the JavaScript code. Alternatively, you can use a processor to manipulate JavaScript code before parsing it with ESLint.
  * ex: https://github.com/eslint/markdown
* formatters/格式化器
  * https://eslint.org/docs/latest/use/formatters/
  * built-in formatters: html, json-with-metadata, json, stylish
* integrations/集成
  * https://eslint.org/docs/latest/use/integrations
  * editors
  * build tools
  * command line tools
  * source control
  * others
* CLI & Node.js API/命令行和Node.js API
  * The ESLint CLI is a command line interface that lets you execute linting from the terminal.
  * The ESLint Node.js API lets you use ESLint programmatically from Node.js code.

# Configuration Files
* https://eslint.org/docs/latest/use/configure/configuration-files

category
- eslintrc: deprecated see [Configuration Files (Deprecated)](https://eslint.org/docs/latest/use/configure/configuration-files-deprecated).
- flat config files: below.

The ESLint configuration file should be placed in the root directory of your project and export an array of configuration objects.
```javascript
// names:
// eslint.config.js
// eslint.config.mjs
// eslint.config.cjs
// eslint.config.ts (requires additional setup)
// eslint.config.mts (requires additional setup)
// eslint.config.cts (requires additional setup)

// eslint.config.js
import { defineConfig } from "eslint/config";
export default defineConfig([
	{
		rules: {
			semi: "error",
			"prefer-const": "error",
		},
	},
]);

// If your project does not specify "type":"module" in its package.json file, then eslint.config.js must be in CommonJS format
// eslint.config.js
const { defineConfig } = require("eslint/config");
module.exports = defineConfig([
	{
		rules: {
			semi: "error",
			"prefer-const": "error",
		},
	},
]);
```

## Configuration Objects

See [typescript-eslint/packages/utils/src/ts-eslint/Config.ts](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/utils/src/ts-eslint/Config.ts)
```ts
export namespace FlatConfig {
  export type EcmaVersion = ParserOptionsTypes.EcmaVersion;
  export type GlobalsConfig = SharedConfig.GlobalsConfig;
  export type Parser = ParserType.LooseParserModule;
  export type ParserOptions = SharedConfig.ParserOptions;
  export type PluginMeta = SharedConfig.PluginMeta;
  export type Processor = ProcessorType.LooseProcessorModule;
  export type RuleEntry = SharedConfig.RuleEntry;
  export type RuleLevel = SharedConfig.RuleLevel;
  export type RuleLevelAndOptions = SharedConfig.RuleLevelAndOptions;
  export type Rules = SharedConfig.RulesRecord;
  export type Settings = SharedConfigurationSettings;
  export type Severity = SharedConfig.Severity;
  export type SeverityString = SharedConfig.SeverityString;
  export type SourceType = ParserOptionsTypes.SourceType;
  export interface SharedConfigs {
    [key: string]: Config | ConfigArray;
  }
  export interface Plugin {}
  export interface Plugins {}
  export interface LinterOptions {}
  export interface LanguageOptions {}
  export interface Config {}
  export type ConfigArray = Config[];
  export type ConfigPromise = Promise<ConfigArray>;
  export type ConfigFile = ConfigArray | ConfigPromise;
```

## Configuration File Resolution

## TypeScript Configuration Files


# Command Line Interface Reference
* https://eslint.org/docs/latest/use/command-line-interface

# Rules Reference
* https://eslint.org/docs/latest/rules/

category
- Possible Problems: These rules relate to possible logic errors in code.
- Suggestions: These rules suggest alternate ways of doing things.
- Layout & Formatting: These rules care about how the code looks rather than how it executes.
- Deprecated: These rules have been deprecated in accordance with the deprecation policy, and replaced by newer rules.
- Removed: These rules from older versions of ESLint (before the deprecation policy existed) have been replaced by newer rules.

# Node.js API Reference
* https://eslint.org/docs/latest/integrate/nodejs-api

# See Also
* [awesome-eslint](https://github.com/dustinspecker/awesome-eslint): A list of awesome ESLint plugins, configs, etc.
* [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint): Powerful static analysis for JavaScript and TypeScript.
```shell
npm install --save-dev eslint @eslint/js typescript typescript-eslint
touch eslint.config.mjs
npx eslint .
```