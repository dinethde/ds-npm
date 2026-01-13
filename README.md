# @dinethde/ds

A simple CLI tool to auto-generate design tokens, fonts.css, and theme.ts files for your project.

## Installation

Install the package globally or as a dev dependency in your project:

```bash
# Global installation
npm install -g @dinethde/ds

# Or as a dev dependency
npm install --save-dev @dinethde/ds
```

## Usage

Navigate to your project root directory and run:

```bash
npx generate-ds
```

Or if installed globally:

```bash
generate-ds
```

This will create the following files in your project:

```
your-project/
├── src/
│   ├── styles/
│   │   ├── design-tokens.json
│   │   └── fonts.css
│   └── theme.ts
```

## What Gets Generated

### 1. `src/styles/design-tokens.json`

Contains all design tokens including:

- Font styles (h1-h6, paragraphs)
- Color palettes (neutral, primary, secondary)
- Color tokens for backgrounds, borders, text, etc.

### 2. `src/styles/fonts.css`

Contains font-face declarations for your custom fonts.

### 3. `src/theme.ts`

A complete Material-UI theme configuration that:

- Imports and uses the design tokens
- Provides light and dark mode support
- Includes custom palette extensions
- Configures typography based on design tokens
- Customizes MUI components (Button, TextField, Switch, Tooltip)

## Features

- ✅ Automatically creates `src` and `src/styles` directories if they don't exist
- ✅ Overwrites existing files (useful for updates)
- ✅ Zero configuration required
- ✅ Compatible with Material-UI v5+
- ✅ TypeScript support

## Requirements

- Node.js 14.0.0 or higher

## Example Integration

After generating the files, you can use the theme in your React app:

```typescript
import { createTheme, ThemeProvider } from "@mui/material";
import { themeSettings } from "./theme";

function App() {
  const mode = "dark"; // or 'light'
  const theme = createTheme(themeSettings(mode));

  return <ThemeProvider theme={theme}>{/* Your app content */}</ThemeProvider>;
}
```

## License

Apache-2.0

## Author

dinethde

## Repository

[https://github.com/dinethde/ds-npm](https://github.com/dinethde/ds-npm)
