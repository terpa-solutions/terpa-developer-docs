---
sidebar_position: 2
---

# Máquinas

Obtiene las máquinas registradas en un equipo. Usa el `id` del equipo obtenido en el endpoint de equipos para listar sus máquinas disponibles.

## Endpoint

`GET https://app.terpasolutions.com/api/v1/teams/{team_id}/machines`

## Autenticación

Incluye tu API key como token Bearer:

`Authorization: Bearer <API_KEY>`

## Request

```bash
curl https://app.terpasolutions.com/api/v1/teams/5e2d4aa0-2f45-4a73-8b4b-9cbb63d5bb4a/machines \
  -H "Authorization: Bearer <API_KEY>"
```

## Parámetros de consulta

- `query`: filtra por nombre de máquina (búsqueda parcial, no sensible a mayúsculas).
- `status`: filtra por estado de conexión. Valores: `online`, `warning`, `offline`, `noData`.

## Respuesta

El servicio responde con un objeto que contiene los conteos de estado y un arreglo `machines`.

Este endpoint no incluye detalle de ventas. Para ventas recientes, ventas por día y productos más vendidos usa el detalle de máquina.

Campos en `counts`:

- `total`: total de máquinas encontradas.
- `online`: máquinas en línea.
- `warning`: máquinas con señal intermitente.
- `offline`: máquinas desconectadas.

Campos por máquina:

- `id`: identificador único de la máquina.
- `name`: nombre de la máquina.
- `terminalSerialNumber`: número de serie del terminal.
- `pharosTerminalCode`: Código de terminal de Pharos.
- `lastPingAt`: última señal recibida (ISO 8601) o `null`.
- `activeUntilDate`: fecha de vigencia de la suscripción (ISO 8601).
- `subscriptionExpired`: indica si la suscripción está expirada.
- `isEnabled`: indica si la máquina está activa.
- `tubesTotal`: monto acumulado en los tubos de cambio de la máquina (valor en centavos).
- `currentChange`: valor actual de cambio disponible (valor en centavos).
- `type`: tipo de máquina.
- `status`: estado calculado de conexión (`online`, `warning`, `offline`, `noData`).
- `inventoryPercent`: porcentaje de inventario disponible (sobre 100).
- `salesToday`: total de ventas del día (valor en centavos).

```json
{
  "counts": {
    "total": 2,
    "online": 1,
    "warning": 0,
    "offline": 1
  },
  "machines": [
    {
      "id": "3b8f55be-f2fd-4f2d-8c3b-bb1eaf6e1c32",
      "name": "Máquina Centro",
      "terminalSerialNumber": "492017563804",
      "pharosTerminalCode": "5831",
      "lastPingAt": "2026-01-22T16:42:10.000Z",
      "activeUntilDate": "2026-03-15T00:00:00.000Z",
      "subscriptionExpired": false,
      "isEnabled": true,
      "tubesTotal": 42,
      "currentChange": 42,
      "type": "VENDING",
      "status": "online",
      "inventoryPercent": 78,
      "salesToday": 1250
    }
  ]
}
```

## Errores comunes

- `401 Unauthorized`: el token es inválido o falta la cabecera de autenticación.
- `403 Forbidden`: no tienes permisos para acceder a este recurso.
