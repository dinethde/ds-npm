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

import fs from "fs-extra";
import { join, dirname } from "path";
import chalk from "chalk";
import { fileURLToPath } from "url";

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Generate design system files in the target directory
 * @param targetDir - The directory where files should be generated
 */
export async function generateDesignSystem(targetDir: string): Promise<void> {
  try {
    // Define paths
    const templatesDir = join(__dirname, "..", "templates");
    const srcDir = join(targetDir, "src");
    const stylesDir = join(srcDir, "styles");

    // Ensure directories exist
    console.log(chalk.yellow("📁 Creating directories..."));
    await fs.ensureDir(stylesDir);

    // Copy design-tokens.json
    console.log(chalk.yellow("📄 Copying design-tokens.json..."));
    const designTokensSource = join(templatesDir, "design-tokens.json");
    const designTokensTarget = join(stylesDir, "design-tokens.json");
    await fs.copy(designTokensSource, designTokensTarget, { overwrite: true });

    // Copy fonts.css
    console.log(chalk.yellow("📄 Copying fonts.css..."));
    const fontsSource = join(templatesDir, "fonts.css");
    const fontsTarget = join(stylesDir, "fonts.css");
    await fs.copy(fontsSource, fontsTarget, { overwrite: true });

    // Copy theme.ts
    console.log(chalk.yellow("📄 Copying theme.ts..."));
    const themeSource = join(templatesDir, "theme.ts");
    const themeTarget = join(srcDir, "theme.ts");
    await fs.copy(themeSource, themeTarget, { overwrite: true });

    console.log(chalk.green("✨ All files copied successfully!"));
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    throw new Error(`Failed to generate design system: ${errorMessage}`);
  }
}
