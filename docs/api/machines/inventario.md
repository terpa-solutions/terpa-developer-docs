---
sidebar_position: 3
sidebar_label: Inventario
slug: /api/machine-inventory
---

# Inventario de Máquina

Obtiene el inventario de una máquina, incluyendo el catálogo de productos, el resumen global y el detalle por espiral.

## Endpoint

`GET {{base_url}}/api/v1/teams/{team_id}/machines/{machine_id}/inventory`

## Autenticación

Incluye tu API key como token Bearer:

`Authorization: Bearer <API_KEY>`

## Request

```bash
curl {{base_url}}/api/v1/teams/5e2d4aa0-2f45-4a73-8b4b-9cbb63d5bb4a/machines/3b8f55be-f2fd-4f2d-8c3b-bb1eaf6e1c32/inventory \
  -H "Authorization: Bearer <API_KEY>"
```

## Parámetros de ruta

- `team_id`: UUID del equipo.
- `machine_id`: UUID de la máquina.

## Respuesta

El servicio responde con `machine`, `picklist`, `products`, `summary` e `inventory`.

Campos en `machine`:

- `name`: nombre de la máquina.
- `type`: tipo de máquina.

Campos en `picklist`:

- `id`: identificador del picklist activo.
- `createdAt`: fecha de creación (ISO 8601).

Si no hay picklist activo, el valor es `null`.

Campos en `products`:

- `id`: identificador del producto.
- `name`: nombre del producto.
- `price.valueCents`: precio en centavos.
- `price.valueFormatted`: precio formateado en moneda local.

Campos en `summary`:

- `totalCapacity`: capacidad total de la máquina.
- `totalCurrentCount`: unidades disponibles en total.
- `globalPercent`: porcentaje global de inventario (sobre 100).
- `formattedSummary`: resumen legible `current / capacity (percent%)`.

Campos en `inventory`:

- `id`: identificador de la espiral.
- `machineCode`: código principal de la espiral.
- `machineMdbCode`: código MDB de la espiral.
- `machineMicromarketCode`: código micromarket (si aplica).
- `currentCount`: unidades actuales.
- `maxCapacity`: capacidad máxima.
- `percent`: porcentaje de inventario de la espiral (sobre 100).
- `status`: estado de inventario (`high`, `medium`, `low`).
- `formattedCapacity`: resumen legible `current / capacity`.
- `product`: información del producto o `null`.

Campos en `inventory[].product`:

- `id`: identificador del producto.
- `name`: nombre del producto.
- `sku`: SKU del producto.
- `price.valueCents`: precio en centavos.
- `price.valueFormatted`: precio formateado en moneda local.
- `images`: imágenes asociadas.

Campos en `inventory[].product.images`:

- `id`: identificador de la imagen.
- `url`: URL pública de la imagen.

```json
{
  "machine": {
    "name": "Máquina Centro",
    "type": "VENDING"
  },
  "picklist": {
    "id": "6f22f5f3-2c5d-4a8b-9f8d-7f1d5f0e2a4b",
    "createdAt": "2026-01-22T15:05:12.000Z"
  },
  "products": [
    {
      "id": "d55b36a0-8e3b-4b2d-9e3d-4b5b2a65f5a0",
      "name": "Agua Natural 600ml",
      "price": {
        "valueCents": 2500,
        "valueFormatted": "$25.00"
      }
    }
  ],
  "summary": {
    "totalCapacity": 120,
    "totalCurrentCount": 78,
    "globalPercent": 65,
    "formattedSummary": "78 / 120 (65%)"
  },
  "inventory": [
    {
      "id": "3b5f08c0-98bb-4b22-9ed4-7b6b4c0a0d4a",
      "machineCode": "A1",
      "machineMdbCode": "A1",
      "machineMicromarketCode": null,
      "currentCount": 6,
      "maxCapacity": 10,
      "percent": 60,
      "status": "medium",
      "formattedCapacity": "6 / 10",
      "product": {
        "id": "d55b36a0-8e3b-4b2d-9e3d-4b5b2a65f5a0",
        "name": "Agua Natural 600ml",
        "sku": "AGU-600",
        "price": {
          "valueCents": 2500,
          "valueFormatted": "$25.00"
        },
        "images": [
          {
            "id": "5d2f0d19-97df-4ee1-9a06-39a5b0c7b3f8",
            "url": "https://cdn.terpasolutions.com/products/agua.jpg"
          }
        ]
      }
    }
  ]
}
```

## Errores comunes

- `401 Unauthorized`: el token es inválido o falta la cabecera de autenticación.
- `403 Forbidden`: no tienes permisos para acceder a este recurso.
- `404 Not Found`: la máquina no existe o no pertenece al equipo.
