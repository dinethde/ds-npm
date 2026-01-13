import { generateDesignSystem } from "./generator.js";
import chalk from "chalk";

console.log(chalk.blue.bold("\n🎨 Design System Generator\n"));

// Get the current working directory (where the user ran the command)
const targetDir = process.cwd();

const cliDs = async () => {
  try {
    const result = await generateDesignSystem(targetDir);
    console.log(
      chalk.green.bold("\n✅ Design system files generated successfully!\n")
    );
    console.log(chalk.cyan("Files created:"));
    console.log(chalk.gray("  - src/styles/design-tokens.json"));
    console.log(chalk.gray("  - src/styles/fonts.css"));
    console.log(chalk.gray("  - src/theme.ts\n"));
  } catch (error) {
    console.error(
      chalk.red.bold("\n❌ Error generating design system files:\n")
    );
    process.exit(1);
  }
};

cliDs();
