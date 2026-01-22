---
sidebar_position: 5
sidebar_label: Terminal
slug: /api/machine-terminal
---

# Terminal de Máquina

Obtiene el detalle de transacciones del terminal asociado a una máquina, con resumen por estatus, tipo de tarjeta y marca.

## Endpoint

`GET {{base_url}}/api/v1/teams/{team_id}/machines/{machine_id}/terminal`

## Autenticación

Incluye tu API key como token Bearer:

`Authorization: Bearer <API_KEY>`

## Request

```bash
curl "{{base_url}}/api/v1/teams/5e2d4aa0-2f45-4a73-8b4b-9cbb63d5bb4a/machines/3b8f55be-f2fd-4f2d-8c3b-bb1eaf6e1c32/terminal?date=2026-01-22" \
  -H "Authorization: Bearer <API_KEY>"
```

## Parámetros de ruta

- `team_id`: UUID del equipo.
- `machine_id`: UUID de la máquina.

## Parámetros de consulta

- `date`: fecha a consultar en formato `YYYY-MM-DD` (por ejemplo, `2026-01-22`).

Si no envías `date`, el endpoint usa el día actual en la zona horaria `America/Monterrey`.

## Respuesta

El servicio responde con `accessDenied`, `accessDeniedReason`, `showFinancials`, `machineStatus`, `summary` y `transactions`.

Si el usuario no tiene permisos financieros, el servicio responde con `accessDenied: true`, `showFinancials: false` y `transactions` vacío.

Campos en `machineStatus`:

- `isLocked`: indica si la máquina está bloqueada por vigencia.
- `isExpired`: indica si la vigencia ya expiró.
- `lockedMessage`: mensaje de bloqueo o `null`.
- `activeUntilDate`: fecha de vigencia en ISO 8601 o `null`.

Campos en `summary`:

- `totalApproved.valueCents`: total aprobado (valor en centavos).
- `totalApproved.valueFormatted`: total aprobado formateado en moneda local.
- `totalCount`: número total de transacciones.
- `byStatus`: resumen por estatus.
- `byCardType`: resumen por tipo de tarjeta.
- `byCardBrand`: resumen por marca de tarjeta.

Campos en `summary.byStatus`:

- `approved`: transacciones aprobadas o `null` si no hay.
- `rejected`: transacciones rechazadas o `null` si no hay.
- `reversed`: transacciones reversadas o `null` si no hay.
- `chargeback`: transacciones con contracargo o `null` si no hay.

Campos en `summary.byStatus.*`:

- `count`: número de transacciones.
- `total.valueCents`: total en centavos.
- `total.valueFormatted`: total formateado.

Campos en `summary.byCardType`:

- `credit`: transacciones con tarjeta de crédito o `null` si no hay.
- `debit`: transacciones con tarjeta de débito o `null` si no hay.
- `prepaid`: transacciones con tarjeta prepago o `null` si no hay.
- `charge_card`: transacciones con tarjeta charge o `null` si no hay.

Campos en `summary.byCardType.*`:

- `count`: número de transacciones.
- `total.valueCents`: total en centavos.
- `total.valueFormatted`: total formateado.

Campos en `summary.byCardBrand`:

- `visa`, `mastercard`, `amex`, `discover`, `unknown`: agrupaciones por marca cuando existen.

Campos en `summary.byCardBrand.*`:

- `count`: número de transacciones.
- `total.valueCents`: total en centavos.
- `total.valueFormatted`: total formateado.

Campos en `transactions`:

- `id`: identificador de la transacción.
- `createdAt`: fecha de transacción (ISO 8601 o cadena original si el proveedor no envía ISO).
- `createdAtFormatted`: fecha local con formato `dd/MM/yyyy hh:mm:ss a`.
- `amount.valueCents`: monto en centavos.
- `amount.valueFormatted`: monto formateado.
- `status`: estatus de la transacción (`approved`, `rejected`, `reversed`, `chargeback`).
- `statusColor`: color asociado (`success`, `warning`, `error`).
- `statusLabel`: etiqueta en español del estatus.
- `cardBrand`: marca de tarjeta o `null`.
- `cardBrandIcon`: identificador de ícono en minúsculas.
- `cardType`: tipo de tarjeta (`credit`, `debit`, `prepaid`, `charge_card`) o `null`.
- `cardLast4`: últimos 4 dígitos de la tarjeta.
- `cardIssuer`: emisor de la tarjeta o `null`.
- `approved`: indicador de aprobación.
- `reversed`: indicador de reverso o `null`.
- `chargeback`: indicador de contracargo o `null`.
- `authorizationNumber`: número de autorización.
- `referenceNumber`: número de referencia.
- `stan`: número STAN.
- `transactionType`: tipo de transacción.
- `conciliated`: indica si la transacción está conciliada.
- `paid`: indica si la transacción está pagada.
- `resultCode`: código de resultado.
- `country`: país.
- `countryCode`: código de país.

```json
{
  "accessDenied": false,
  "accessDeniedReason": null,
  "date": "jueves, 22 de enero de 2026",
  "showFinancials": true,
  "machineStatus": {
    "isLocked": false,
    "isExpired": false,
    "lockedMessage": null,
    "activeUntilDate": "2026-03-15T00:00:00.000Z"
  },
  "summary": {
    "totalApproved": {
      "valueCents": 6200,
      "valueFormatted": "$62.00"
    },
    "totalCount": 4,
    "byStatus": {
      "approved": {
        "count": 3,
        "total": {
          "valueCents": 5700,
          "valueFormatted": "$57.00"
        }
      },
      "rejected": {
        "count": 1,
        "total": {
          "valueCents": 500,
          "valueFormatted": "$5.00"
        }
      },
      "reversed": null,
      "chargeback": null
    },
    "byCardType": {
      "credit": {
        "count": 2,
        "total": {
          "valueCents": 4200,
          "valueFormatted": "$42.00"
        }
      },
      "debit": {
        "count": 2,
        "total": {
          "valueCents": 2000,
          "valueFormatted": "$20.00"
        }
      },
      "prepaid": null,
      "charge_card": null
    },
    "byCardBrand": {
      "visa": {
        "count": 2,
        "total": {
          "valueCents": 4200,
          "valueFormatted": "$42.00"
        }
      },
      "mastercard": {
        "count": 2,
        "total": {
          "valueCents": 2000,
          "valueFormatted": "$20.00"
        }
      }
    }
  },
  "transactions": [
    {
      "id": "1c5f6e3f-1c3f-48a6-b7b5-0d5e5c8f0a2a",
      "createdAt": "2026-01-22T18:22:10.000Z",
      "createdAtFormatted": "22/01/2026 12:22:10 p",
      "amount": {
        "valueCents": 2500,
        "valueFormatted": "$25.00"
      },
      "status": "approved",
      "statusColor": "success",
      "statusLabel": "Aprobada",
      "cardBrand": "VISA",
      "cardBrandIcon": "visa",
      "cardType": "credit",
      "cardLast4": "4242",
      "cardIssuer": "BBVA",
      "approved": true,
      "reversed": false,
      "chargeback": false,
      "authorizationNumber": "038921",
      "referenceNumber": "923401821",
      "stan": "123456",
      "transactionType": "purchase",
      "conciliated": true,
      "paid": true,
      "resultCode": "00",
      "country": "Mexico",
      "countryCode": "MX"
    }
  ],
  "lockedMessage": null
}
```

## Errores comunes

- `400 Bad Request`: el terminal no está configurado para esta máquina.
- `401 Unauthorized`: el token es inválido o falta la cabecera de autenticación.
- `403 Forbidden`: no tienes permisos para acceder a este recurso.
- `404 Not Found`: la máquina no existe o no pertenece al equipo.
