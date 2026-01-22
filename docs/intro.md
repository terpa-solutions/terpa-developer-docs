---
sidebar_position: 1
---

# Introduccion

Integra tus desarrollos a Terpa Solutions para acceder en tiempo real a la información de tus máquinas. Consulta su estado de conexión, ventas, métodos de pago, níveles de inventario, y más.

## 1. Genera tu API key

<p class="margin-bottom--md">Entra a tu perfil y crea una llave nueva:</p>

<div class="margin-vert--md">
  <a class="button button--primary" href="https://app.terpasolutions.com/profile/api-keys">Obtener API Key</a>
</div>
<p class="margin-top--md">Guarda la key en un lugar seguro, la vas a usar en cada request.</p>

## 2. Autentica tus requests

Incluye la key como un token Bearer:

```bash
curl https://api.terpasolutions.com/api/v1/teams \
  -H "Authorization: Bearer <API_KEY>"
```

Listo: ya puedes usar la API de Terpa Solutions en tus integraciones.
