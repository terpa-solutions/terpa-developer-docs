---
sidebar_position: 1
---

# Equipos

Obtiene los equipos a los que el usuario autenticado tiene acceso. Utiliza este endpoint para mostrar la lista de equipos disponibles y seleccionar el `id` que usarás en el resto de consultas.

## Endpoint

`GET https://app.terpasolutions.com/api/v1/teams`

## Autenticación

Incluye tu API key como token Bearer:

`Authorization: Bearer <API_KEY>`

## Request

```bash
curl https://app.terpasolutions.com/api/v1/teams \
  -H "Authorization: Bearer <API_KEY>"
```

## Respuesta

El servicio responde con un objeto que contiene un arreglo `teams`.

Campos principales por equipo:

- `id`: identificador único del equipo.
- `name`: nombre del equipo.
- `slug`: identificador legible del equipo.

```json
{
  "teams": [
    {
      "id": "6f7e2c9b-3b6a-4a1e-9e2f-8f87b8d0f4a1",
      "name": "Equipo Monterrey",
      "slug": "equipo-monterrey-92nFw"
    }
  ]
}
```

## Errores comunes

- `401 Unauthorized`: el token es inválido o falta la cabecera de autenticación.
- `403 Forbidden`: no tienes permisos para acceder a este recurso.
