# API - Prediccion Apuesta

Backend propuesto en NestJS.

## Endpoints MVP

```http
POST /auth/register
POST /auth/login
GET  /auth/me
GET  /matches
GET  /matches/today
GET  /matches/:id
GET  /matches/:id/odds
POST /admin/odds
GET  /matches/:id/prediction
POST /matches/:id/prediction/calculate
GET  /matches/:id/value-signals
POST /matches/:id/value-signals/calculate
GET  /bankroll
POST /bankroll
GET  /bets
POST /bets
POST /matches/:id/ai-analysis
```
