# Node 22 Debian (not Alpine): lightningcss / Vite native bits expect glibc.
FROM node:22-bookworm-slim AS deps
WORKDIR /app
COPY package.json package-lock.json ./
# Lockfile is slightly out of sync (`npm ci` fails). Keep optional deps:
# Vite/rolldown need the platform native binding (@rolldown/binding-linux-x64-gnu).
RUN npm install

FROM node:22-bookworm-slim AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:22-bookworm-slim AS run
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app ./
EXPOSE 8080
CMD ["npx", "vite", "preview", "--host", "0.0.0.0", "--port", "8080", "--strictPort"]
