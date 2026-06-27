# Prediccion Apuesta

Plataforma de analisis probabilistico para apuestas deportivas responsables.

## Objetivo

Ayudar al usuario a analizar partidos, cuotas, probabilidades y riesgo para decidir si una apuesta tiene valor o si es mejor evitarla.

## Alcance MVP

- Gestion de equipos, competiciones y partidos.
- Carga manual inicial de cuotas.
- Calculo de probabilidad implicita.
- Calculo del margen de la casa.
- Prediccion basica de resultados.
- Detector de valor por mercado.
- Gestion de banca del usuario.
- Registro historico de apuestas.
- Analisis explicativo con IA.
- Dashboard de rendimiento.

## No alcance inicial

- No se manejara dinero real.
- No se aceptaran apuestas dentro de la plataforma.
- No se pagaran premios.
- No se operara como casa de apuestas.
- No se prometera rentabilidad.

## Stack propuesto

- Frontend: Angular.
- Backend: NestJS.
- Base de datos: PostgreSQL.
- ORM: Prisma.
- Jobs: BullMQ + Redis.
- IA: proveedor configurable, por ejemplo OpenAI o DeepSeek.
- Deploy: Docker + Nginx.

## Primeros pasos sugeridos

```bash
docker compose up -d
cd apps/api
npm install
npx prisma generate
npx prisma migrate dev
```
