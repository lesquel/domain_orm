# ORM Domain Project

Proyecto base en TypeScript para practicar conceptos de dominio y ORM.

## Scripts disponibles

- `bun run dev` – Ejecuta el proyecto en modo desarrollo con recarga automática.
- `bun run build` – Compila los archivos TypeScript hacia `dist/`.
- `bun run start` – Ejecuta el código compilado desde `dist/index.js`.
- `bun run lint` – Analiza el código con ESLint.
- `bun run lint:fix` – Intenta corregir problemas reportados por ESLint.
- `bun run format` – Formatea el código usando Prettier.
- `bun run format:check` – Verifica el formato sin modificar archivos.
- `bun run check` – Revisa los tipos sin generar archivos.

## Configuración

- `tsconfig.json` define la salida a `dist/` y reglas estrictas de TypeScript.
- `eslint.config.mjs` habilita reglas recomendadas de TypeScript y ajustes mínimos.
- `.prettierrc.json` centraliza el estilo de formato.

## Primeros pasos

```powershell
bun install
bun run dev
```

¡Disfruta construyendo tu dominio! 
