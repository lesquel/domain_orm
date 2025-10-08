
<<<<<<< HEAD
Proyecto base en TypeScript que modela el diagrama entidad–relación del sistema de reservas de restaurantes usando **TypeORM** dentro de una arquitectura limpia (dominio independiente, capa de infraestructura y mapeadores explícitos).

## Scripts disponibles

- `bun run dev` – Ejecuta el proyecto en modo desarrollo con recarga automática.
- `bun run build` – Compila los archivos TypeScript hacia `dist/`.
- `bun run start` – Ejecuta el código compilado desde `dist/index.js`.
- `bun run lint` – Analiza el código con ESLint.
- `bun run lint:fix` – Intenta corregir problemas reportados por ESLint.
- `bun run format` – Formatea el código usando Prettier.
- `bun run format:check` – Verifica el formato sin modificar archivos.
- `bun run check` – Revisa los tipos sin generar archivos.

## Modelo de datos

- Entidades de dominio puras en `src/domain/entities`.
- Entidades de persistencia de TypeORM en `src/infrastructure/persistence/entities` que reflejan el DER proporcionado (usuarios, restaurantes, secciones, mesas, reservas, pagos, suscripciones, etc.).
- Mapeadores bidireccionales en `src/infrastructure/persistence/mappers/domain-mapper.ts` para traducir entre el dominio y la infraestructura sin acoplar capas.
- Configuración del `DataSource` en `src/infrastructure/config/typeorm.config.ts`, lista para SQLite (archivo local configurable con `DB_PATH`).

## Configuración

- `tsconfig.json` está listo para ESM con `NodeNext`, metadatos de decoradores y verificaciones estrictas.
- `eslint.config.mjs` habilita reglas recomendadas de TypeScript y ajustes mínimos.
- Prettier se ejecuta con la configuración por defecto del proyecto.

## Primeros pasos

```powershell
bun install
bun run dev
```

### Inicializar la base de datos y verificar entidades

```powershell
bun run build
bun run start
```

El script de arranque inicializa la conexión SQLite y lista las entidades registradas. Modifica `DB_PATH` si deseas apuntar a otra base (por ejemplo PostgreSQL) y actualiza los parámetros en `typeorm.config.ts`.

¡Disfruta construyendo tu dominio!
=======
>>>>>>> c0dced90eec3477251a188f139458e5fd68b559e
