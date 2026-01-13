#!/usr/bin/env node

/**
 * Copyright (c) 2025 WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { generateDesignSystem } from './generator.js';
import chalk from 'chalk';

console.log(chalk.blue.bold('\n🎨 Design System Generator\n'));

// Get the current working directory (where the user ran the command)
const targetDir = process.cwd();

generateDesignSystem(targetDir)
  .then(() => {
    console.log(
      chalk.green.bold('\n✅ Design system files generated successfully!\n')
    );
    console.log(chalk.cyan('Files created:'));
    console.log(chalk.gray('  - src/styles/design-tokens.json'));
    console.log(chalk.gray('  - src/styles/fonts.css'));
    console.log(chalk.gray('  - src/theme.ts\n'));
  })
  .catch((error: Error) => {
    console.error(
      chalk.red.bold('\n❌ Error generating design system files:\n')
    );
    console.error(chalk.red(error.message));
    process.exit(1);
  });
