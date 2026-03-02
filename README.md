# microfront-example

Este repositorio es un monorepo de ejemplo con varios microfrontends (paquetes) basados en Vite + React.

Requisitos
- Node.js (recomendado >= 16)
- pnpm instalado globalmente: `npm i -g pnpm`

Instalar dependencias
Ejecuta desde la raíz del repositorio:

```bash
pnpm install
```

Comandos principales (desde la raíz)
- Levantar los servicios en paralelo (usa el script `serve` de cada paquete):

```bash
pnpm dev
```

- Construir todos los paquetes:

```bash
pnpm build
```

Ejecutar/Desarrollar paquetes individualmente
Puedes ejecutar los comandos de desarrollo o build de un paquete de dos formas.

1) Entrando al paquete y ejecutando su script:

```bash
cd packages/microfront-1
pnpm dev
```

2) Desde la raíz usando el filtrado de pnpm (sin cambiar de directorio):

```bash
pnpm --filter @microfront/react-1 dev
```

Scripts y puertos relevantes
- `@microfront/shell` — scripts: `dev`, `build`, `serve` (Vite). Puerto por defecto de Vite (5173) si no está configurado.
- `@microfront/react-1` — `serve` usa `vite preview --port 4173` (puerto 4173 para preview).
- `@microfront/header-parcel` — `serve` usa `vite preview --port 4174` (puerto 4174 para preview).

Notas sobre build
- Algunos paquetes ejecutan primero `tsc -b` antes de `vite build` para compilar TypeScript (ver `package.json` de cada paquete).
- Los artefactos de build se generan en la carpeta `dist/` dentro de cada paquete.

Previsualizar build
Después de `pnpm build` puedes previsualizar un paquete con:

```bash
cd packages/microfront-1
pnpm preview
```

Solución de problemas rápida
- Si hay problemas con dependencias o lockfile, prueba:

```bash
pnpm install --prefer-frozen-lockfile
```

- Si necesitas limpiar el cache de pnpm:

```bash
pnpm store prune
pnpm install
```
