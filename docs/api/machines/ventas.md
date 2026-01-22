---
sidebar_position: 4
sidebar_label: Ventas
slug: /api/machine-sales
---

# Ventas de Máquina

Obtiene las ventas de una máquina para un día específico, con totales, desglose por método de pago y detalle de cada venta.

## Endpoint

`GET {{base_url}}/api/v1/teams/{team_id}/machines/{machine_id}/sales`

## Autenticación

Incluye tu API key como token Bearer:

`Authorization: Bearer <API_KEY>`

## Request

```bash
curl "{{base_url}}/api/v1/teams/5e2d4aa0-2f45-4a73-8b4b-9cbb63d5bb4a/machines/3b8f55be-f2fd-4f2d-8c3b-bb1eaf6e1c32/sales?date=2026-01-22" \
  -H "Authorization: Bearer <API_KEY>"
```

## Parámetros de ruta

- `team_id`: UUID del equipo.
- `machine_id`: UUID de la máquina.

## Parámetros de consulta

- `date`: fecha a consultar en formato `YYYY-MM-DD` (por ejemplo, `2026-01-22`).

Si no envías `date`, el endpoint usa el día actual en la zona horaria `America/Monterrey`. El rango consultado es de inicio a fin de día en esa zona. Si la máquina tiene `activeUntilDate`, el fin del rango se limita a esa fecha.

## Respuesta

El servicio responde con `date`, `summary` y `sales`.

Campos en `summary`:

- `totalSales.valueCents`: total vendido (valor en centavos).
- `totalSales.valueFormatted`: total formateado en moneda local.
- `totalCount`: número de ventas.
- `byPaymentMethod`: desglose por método de pago.

Campos en `summary.byPaymentMethod`:

- `card`: ventas con tarjeta.
- `cash`: ventas en efectivo.
- `remote`: ventas remotas o `null` si no hay.
- `free`: ventas gratuitas o `null` si no hay.

Campos en `summary.byPaymentMethod.*`:

- `count`: número de ventas para el método.
- `total.valueCents`: total del método (valor en centavos).
- `total.valueFormatted`: total formateado.

Campos en `summary.byPaymentMethod.card.breakdown`:

- `products`: total con tarjeta para productos o `null` si no hay.
- `services`: total con tarjeta para servicios o `null` si no hay.
- `recharges`: total con tarjeta para recargas o `null` si no hay.

Campos en `sales`:

- `id`: identificador de la venta.
- `createdAt`: fecha de creación (ISO 8601).
- `createdAtFormatted`: fecha local con formato `dd/MM/yyyy hh:mm:ss a`.
- `amount.valueCents`: monto de la venta (valor en centavos).
- `amount.valueFormatted`: monto formateado en moneda local.
- `paymentMethod`: método de pago (`CARD`, `CASH`, `REMOTE`, `FREE`) o `null`.
- `type`: tipo de venta (`PRODUCT`, `SERVICE`, `PHONE_RECHARGE`).
- `machineProductId`: identificador del producto en la máquina.
- `machineMdbProductId`: identificador MDB del producto.
- `taecelTransactionId`: identificador de transacción de recargas o `null`.
- `token`: token asociado a la venta o `null`.
- `product`: información del producto o `null`.

Campos en `sales[].product`:

- `id`: identificador del producto.
- `name`: nombre del producto.
- `sku`: SKU del producto.
- `price.valueCents`: precio del producto (valor en centavos) o `null`.
- `price.valueFormatted`: precio formateado o `null`.
- `images`: imágenes del producto.

Campos en `sales[].product.images`:

- `url`: URL pública de la imagen.

```json
{
  "date": "jueves, 22 de enero de 2026",
  "summary": {
    "totalSales": {
      "valueCents": 6200,
      "valueFormatted": "$62.00"
    },
    "totalCount": 4,
    "byPaymentMethod": {
      "card": {
        "count": 2,
        "total": {
          "valueCents": 4200,
          "valueFormatted": "$42.00"
        },
        "breakdown": {
          "products": {
            "valueCents": 3200,
            "valueFormatted": "$32.00"
          },
          "services": {
            "valueCents": 1000,
            "valueFormatted": "$10.00"
          },
          "recharges": null
        }
      },
      "cash": {
        "count": 1,
        "total": {
          "valueCents": 1500,
          "valueFormatted": "$15.00"
        }
      },
      "remote": {
        "count": 1,
        "total": {
          "valueCents": 500,
          "valueFormatted": "$5.00"
        }
      },
      "free": null
    }
  },
  "sales": [
    {
      "id": "1c5f6e3f-1c3f-48a6-b7b5-0d5e5c8f0a2a",
      "createdAt": "2026-01-22T18:22:10.000Z",
      "createdAtFormatted": "22/01/2026 12:22:10 p",
      "amount": {
        "valueCents": 2500,
        "valueFormatted": "$25.00"
      },
      "paymentMethod": "CARD",
      "type": "PRODUCT",
      "machineProductId": "d55b36a0-8e3b-4b2d-9e3d-4b5b2a65f5a0",
      "machineMdbProductId": "A1",
      "taecelTransactionId": null,
      "token": null,
      "product": {
        "id": "91e277b6-3f22-4b06-88c1-5f7c3f0f5a12",
        "name": "Agua Natural 600ml",
        "sku": "AGU-600",
        "price": {
          "valueCents": 2500,
          "valueFormatted": "$25.00"
        },
        "images": [
          {
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
