# Sistema de Reservas de Restaurantes - TypeORM

## 📋 Descripción## Scripts disponibles

Este proyecto implementa un modelo de dominio completo para un sistema de gestión de reservas de restaurantes, incluyendo:- `bun run dev` – Ejecuta el proyecto en modo desarrollo con recarga automática.

- `bun run build` – Compila los archivos TypeScript hacia `dist/`.

- Gestión de usuarios y autenticación- `bun run start` – Ejecuta el código compilado desde `dist/index.js`.

- Administración de restaurantes- `bun run lint` – Analiza el código con ESLint.

- Control de mesas y secciones- `bun run lint:fix` – Intenta corregir problemas reportados por ESLint.

- Sistema de reservas- `bun run format` – Formatea el código usando Prettier.

- Procesamiento de pagos- `bun run format:check` – Verifica el formato sin modificar archivos.

- Menús y platillos- `bun run check` – Revisa los tipos sin generar archivos.

- Sistema de reseñas

- Planes de suscripción## Modelo de datos

## Arquitectura- Entidades de dominio puras en `src/domain/entities`

- Entidades de persistencia de TypeORM en `src/infrastructure/persistence/entities` que reflejan el DER proporcionado (usuarios, restaurantes, secciones, mesas, reservas, pagos, suscripciones, etc.).

El proyecto está organizado en capas siguiendo Clean Architecture:- Mapeadores bidireccionales en `src/infrastructure/persistence/mappers/domain-mapper.ts` para traducir entre el dominio y la infraestructura sin acoplar capas.

- Configuración del `DataSource` en `src/infrastructure/config/typeorm.config.ts`, lista para SQLite (archivo local configurable con `DB_PATH`).

```

src/## Configuración

├── domain/              # Capa de dominio (entidades puras)

│   ├── entities/        # Modelos de dominio- `tsconfig.json` está listo para ESM con `NodeNext`, metadatos de decoradores y verificaciones estrictas.

│   └── repositories/    # Interfaces de repositorios- `eslint.config.mjs` habilita reglas recomendadas de TypeScript y ajustes mínimos.

└── infrastructure/      # Capa de infraestructura- Prettier se ejecuta con la configuración por defecto del proyecto.

    ├── config/          # Configuración de TypeORM

    └── persistence/     # Implementación de persistencia## Primeros pasos

        ├── entities/    # Entidades de TypeORM (ORM)

        ├── mappers/     # Mapeo dominio ↔ ORM```powershell

        ├── repositories/# Implementación de repositoriosbun install

        └── seed/        # Datos de pruebabun run dev

``````

## Instalación### Inicializar la base de datos y verificar entidades

1. **Clonar el repositorio**```powershell

   ```powershellbun run build

   git clone <url-del-repositorio>bun run start

   cd act_3_typeorm```

   ```

El script de arranque inicializa la conexión SQLite y lista las entidades registradas. Modifica `DB_PATH` si deseas apuntar a otra base (por ejemplo PostgreSQL) y actualiza los parámetros en `typeorm.config.ts`.

2. **Instalar dependencias**

   ```powershell¡Disfruta construyendo tu dominio!

   bun install=======

   ```

## 📦 Scripts disponibles

### Desarrollo

```powershell
# Ejecutar en modo desarrollo con recarga automática
bun run dev
```

### Compilación

```powershell
# Compilar TypeScript a JavaScript
bun run build

# Ejecutar código compilado
bun run start
```

### Base de datos

```powershell
# Ejecutar el seed (poblar la base de datos con datos de prueba)
bun run seed
```


## 🗄️ Base de datos

El proyecto utiliza **SQLite** por defecto, generando un archivo `orm-domain.sqlite` en la raíz del proyecto.

## Ejecutar el Seed

El seed poblará la base de datos con datos de prueba para todas las entidades del sistema.

### Paso 1: Ejecutar el seed

```powershell
bun run seed
```

Este comando:

1. Conecta a la base de datos
2. Crea todas las tablas automáticamente
3. Inserta datos de prueba (usuarios, restaurantes, mesas, reservas, etc.)
4. Cierra la conexión

### Paso 2: Verificar los datos

```powershell
bun run dev
```

Al ejecutar la aplicación, verás en consola todas las entidades registradas y sus tablas correspondientes.

## 📊 Entidades del modelo

- **User** - Usuarios del sistema
- **Restaurant** - Restaurantes registrados
- **Section** - Secciones dentro de los restaurantes
- **Table** - Mesas disponibles
- **LayoutObject** - Objetos de distribución del layout
- **Reservation** - Reservas de mesas
- **Payment** - Pagos realizados
- **Menu** - Menús de restaurantes
- **Dish** - Platillos del menú
- **Review** - Reseñas y calificaciones
- **Image** - Imágenes asociadas
- **SubscriptionPlan** - Planes de suscripción
- **Subscription** - Suscripciones activas

## 🛠️ Tecnologías utilizadas

- **TypeScript** - Lenguaje de programación
- **TypeORM** - ORM para TypeScript y JavaScript
- **SQLite** - Base de datos relacional
- **Bun** - Runtime y gestor de paquetes
- **ESLint** - Linter de código
- **Prettier** - Formateador de código

## 📝 Notas adicionales

- El proyecto usa módulos ES (ESM) con extensiones `.js` en los imports
- La configuración de TypeScript es estricta para mayor seguridad de tipos
- Los mapeadores permiten mantener el dominio desacoplado de la infraestructura
- El patrón Repository facilita el testing y la extensibilidad

## 👨‍💻 Desarrollo

Para empezar a desarrollar:

1. Instala las dependencias: `bun install`
2. Ejecuta el seed para tener datos de prueba: `bun run seed`
3. Inicia el modo desarrollo: `bun run dev`
4. Comienza a modificar el código en `src/`

---

**¡Listo para usar!** 🎉
