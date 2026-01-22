---
sidebar_position: 3
---

# Detalle de Máquina

Obtiene el detalle completo de una máquina, incluyendo su estado, métricas de ventas del día, ventas recientes, ventas por día y productos más vendidos.

## Endpoint

`GET https://app.terpasolutions.com/api/v1/teams/{team_id}/machines/{machine_id}`

## Autenticación

Incluye tu API key como token Bearer:

`Authorization: Bearer <API_KEY>`

## Request

```bash
curl https://app.terpasolutions.com/api/v1/teams/5e2d4aa0-2f45-4a73-8b4b-9cbb63d5bb4a/machines/3b8f55be-f2fd-4f2d-8c3b-bb1eaf6e1c32 \
  -H "Authorization: Bearer <API_KEY>"
```

## Parámetros de ruta

- `team_id`: UUID del equipo.
- `machine_id`: UUID de la máquina.

## Respuesta

El servicio responde con los objetos `machine`, `latestSales`, `salesByDay` y `topProducts`.

Campos en `machine`:

- `id`: identificador único de la máquina.
- `name`: nombre de la máquina.
- `terminalSerialNumber`: número de serie del terminal.
- `pharosTerminalCode`: código interno del terminal.
- `lastPingAt`: última señal recibida (ISO 8601) o `null`.
- `activeUntilDate`: fecha de vigencia de la suscripción (ISO 8601).
- `isEnabled`: indica si la máquina está activa.
- `machineModel`: modelo del equipo.
- `machineVersion`: versión del equipo.
- `machineSerial`: número de serie del equipo.
- `tubesTotal`: monto acumulado en los tubos de cambio de la máquina (valor en centavos).
- `remoteSaleEnabledUntil`: fecha de vigencia para ventas remotas (ISO 8601) o `null`.
- `protocol`: protocolo de comunicación.
- `versionCode`: código de versión del firmware.
- `type`: tipo de máquina.
- `team`: información del equipo.
- `status`: estado calculado de conexión (`online`, `warning`, `offline`, `noData`).
- `subscriptionExpired`: indica si la suscripción está expirada.
- `inventoryPercent`: porcentaje de inventario disponible (sobre 100).
- `salesToday`: total de ventas del día (valor en centavos).
- `currentChange`: valor actual de cambio disponible (valor en centavos).

Campos en `machine.team`:

- `name`: nombre del equipo.
- `slug`: identificador legible del equipo.

Campos en `latestSales`:

- `id`: identificador de la venta.
- `machineProductCost`: monto de la venta (valor en centavos).
- `machineProductId`: identificador del producto en la máquina.
- `machineMdbProductId`: identificador MDB del producto.
- `createdAt`: fecha de creación (ISO 8601).
- `createdAtFormatted`: fecha con formato local `dd/MM/yyyy hh:mm:ss a`.
- `product`: información del producto o `null`.

Se incluyen hasta 50 ventas recientes, ordenadas de la más nueva a la más antigua.

Campos en `latestSales[].product`:

- `id`: identificador del producto.
- `name`: nombre del producto.
- `productImages`: arreglo de imágenes asociadas.

Campos en `latestSales[].product.productImages`:

- `id`: identificador de la imagen.
- `fileUrl`: URL pública del archivo.

Campos en `salesByDay`:

- `date`: fecha en formato `dd/MM/yyyy`.
- `card`: ventas con tarjeta (valor en centavos).
- `cash`: ventas en efectivo (valor en centavos).
- `free`: ventas gratuitas (valor en centavos).
- `remote`: ventas remotas (valor en centavos).
- `total`: total diario (valor en centavos).

Incluye los últimos 30 días (hoy y los 29 anteriores).

Campos en `topProducts`:

- `id`: identificador del producto.
- `name`: nombre del producto.
- `sales_count`: unidades vendidas.
- `total_sales_value`: total vendido (valor en centavos).
- `images`: imágenes del producto.

Se calcula con ventas de los últimos 30 días, ordenado por `sales_count` y limitado a 50 productos.

Campos en `topProducts[].images`:

- `id`: identificador de la imagen.
- `url`: URL pública de la imagen.

```json
{
  "machine": {
    "id": "3b8f55be-f2fd-4f2d-8c3b-bb1eaf6e1c32",
    "name": "Máquina Centro",
    "terminalSerialNumber": "492017563804",
    "pharosTerminalCode": "5831",
    "lastPingAt": "2026-01-22T16:42:10.000Z",
    "activeUntilDate": "2026-03-15T00:00:00.000Z",
    "isEnabled": true,
    "machineModel": "VM-700",
    "machineVersion": "1.8.2",
    "machineSerial": "MX-739201",
    "tubesTotal": 4200,
    "remoteSaleEnabledUntil": "2026-02-10T00:00:00.000Z",
    "protocol": "MDB",
    "versionCode": "v1",
    "type": "VENDING",
    "team": {
      "name": "Equipo Monterrey",
      "slug": "equipo-monterrey-92nFw"
    },
    "status": "online",
    "subscriptionExpired": false,
    "inventoryPercent": 78,
    "salesToday": 1250,
    "currentChange": 4200
  },
  "latestSales": [
    {
      "id": "1c5f6e3f-1c3f-48a6-b7b5-0d5e5c8f0a2a",
      "machineProductCost": 2500,
      "machineProductId": "d55b36a0-8e3b-4b2d-9e3d-4b5b2a65f5a0",
      "machineMdbProductId": "A1",
      "createdAt": "2026-01-22T16:22:10.000Z",
      "createdAtFormatted": "22/01/2026 10:22:10 a",
      "product": {
        "id": "91e277b6-3f22-4b06-88c1-5f7c3f0f5a12",
        "name": "Agua Natural 600ml",
        "productImages": [
          {
            "id": "5d2f0d19-97df-4ee1-9a06-39a5b0c7b3f8",
            "fileUrl": "https://cdn.terpasolutions.com/products/agua.jpg"
          }
        ]
      }
    }
  ],
  "salesByDay": [
    {
      "date": "22/01/2026",
      "card": 1000,
      "cash": 2000,
      "free": 0,
      "remote": 500,
      "total": 3500
    }
  ],
  "topProducts": [
    {
      "id": "91e277b6-3f22-4b06-88c1-5f7c3f0f5a12",
      "name": "Agua Natural 600ml",
      "sales_count": 42,
      "total_sales_value": 105000,
      "images": [
        {
          "id": "5d2f0d19-97df-4ee1-9a06-39a5b0c7b3f8",
          "url": "https://cdn.terpasolutions.com/products/agua.jpg"
        }
      ]
    }
  ]
}
```

## Errores comunes

- `401 Unauthorized`: el token es inválido o falta la cabecera de autenticación.
- `403 Forbidden`: no tienes permisos para acceder a este recurso.
- `404 Not Found`: la máquina no existe o no pertenece al equipo.
