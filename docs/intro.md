---
sidebar_position: 1
---

# Introduccion

La API de Terpa Solutions te permite acceder a equipos, máquinas, ventas,
inventario y suscripciones desde cualquier sistema.

## 1. Genera tu API key

Entra a tu perfil y crea una llave nueva:

- https://app.terpasolutions.com/profile/api-keys

Guarda la key en un lugar seguro, la vas a usar en cada request.

## 2. Autentica tus requests

Incluye la key como un token Bearer:

```bash
curl https://api.terpasolutions.com/v1/machines \
  -H "Authorization: Bearer <API_KEY>"
```

## 3. Proximos pasos

Explora los endpoints principales:

- `/v1/teams`
- `/v1/machines`
- `/v1/sales`
- `/v1/inventory`
- `/v1/subscriptions`
