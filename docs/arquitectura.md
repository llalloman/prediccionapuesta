# Arquitectura

## Enfoque

El proyecto inicia como una plataforma de analisis y prediccion, no como una casa de apuestas.

```text
Angular Web
   |
   v
NestJS API
   |
   |-------------------------
   |           |            |
   v           v            v
PostgreSQL   Redis       IA / Modelo
   |
   v
Jobs / Workers
```

## Fases tecnicas

1. MVP manual: carga manual de partidos y cuotas.
2. Datos automaticos: integracion con API deportiva y API de odds.
3. Modelos avanzados: Poisson, Elo, backtesting.
4. Suscripcion SaaS.
5. Evaluacion futura de casa de apuestas regulada.
