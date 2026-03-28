# JobSphere Org API

- **OpenAPI Version:** `3.1.1`
- **API Version:** `1.0.0`

Backend API service for JobSphere Organization

## Servers

- **URL:** `https://generous-date-uncle-presently.trycloudflare.com`
  - **Description:** Development server

## Operations

### Retrieve all users with pagination

- **Method:** `GET`
- **Path:** `/api/admin/users`
- **Tags:** Admin - User Management

Get all users with optional search, filters, and pagination. Supports filtering by role, location, category, and searching by name or email.

#### Responses

##### Status: 200 Users retrieved successfully with pagination metadata

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`pagination` (required)**

    `object`

    - **`currentPage` (required)**

      `number`

    - **`hasNextPage` (required)**

      `boolean`

    - **`hasPrevPage` (required)**

      `boolean`

    - **`limit` (required)**

      `number`

    - **`totalPages` (required)**

      `number`

    - **`totalUsers` (required)**

      `number`

  - **`users` (required)**

    `array`

    **Items:**

    - **`_id` (required)**

      `string`

    - **`email` (required)**

      `string`

    - **`full_name` (required)**

      `string`

    - **`is_verified` (required)**

      `boolean`

    - **`role` (required)**

      `string`, possible values: `"contractor", "customer", "admin"`

    - **`address`**

      `string`

    - **`availability`**

      `string | null`, format: `date-time`

    - **`bio`**

      `string`

    - **`category`**

      `array`

      **Items:**

    - **`certification`**

      `string`

    - **`cover_img`**

      `string`

    - **`createdAt`**

      `string | null`, format: `date-time`

    - **`experience`**

      `array`

      **Items:**

      - **`company_name` (required)**

        `string`

      - **`start_date` (required)**

        `string | null`, format: `date-time`

      - **`end_date`**

        `string | null`, format: `date-time`

    - **`hourly_charge`**

      `number`

    - **`location`**

      `string`

    - **`phone`**

      `string`

    - **`profile_img`**

      `string`

    - **`skills`**

      `array`

      **Items:**

      `string`

    - **`starting_budget`**

      `number`

    - **`updatedAt`**

      `string | null`, format: `date-time`

    - **`work_samples`**

      `array`

      **Items:**

      - **`img` (required)**

        `string`

      - **`name` (required)**

        `string`

      - **`description`**

        `string`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "users": [
      {
        "_id": "",
        "role": "contractor",
        "full_name": "",
        "profile_img": "",
        "cover_img": "",
        "email": "",
        "phone": "",
        "address": "",
        "bio": "",
        "location": "",
        "availability": null,
        "is_verified": true,
        "category": [],
        "skills": [
          ""
        ],
        "experience": [
          {
            "company_name": "",
            "start_date": null,
            "end_date": null
          }
        ],
        "work_samples": [
          {
            "name": "",
            "img": "",
            "description": ""
          }
        ],
        "starting_budget": 1,
        "certification": "",
        "hourly_charge": 1,
        "createdAt": null,
        "updatedAt": null
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 1,
      "totalUsers": 1,
      "limit": 1,
      "hasNextPage": true,
      "hasPrevPage": true
    }
  }
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Retrieve user by ID

- **Method:** `GET`
- **Path:** `/api/admin/users/{id}`
- **Tags:** Admin - User Management

Get a single user by ID with full details

#### Responses

##### Status: 200 User retrieved successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`_id` (required)**

    `string` — User ID

  - **`createdAt` (required)**

    `string` — Account creation date

  - **`email` (required)**

    `string` — User's email address

  - **`full_name` (required)**

    `string` — User's full name

  - **`is_verified` (required)**

    `boolean` — Verification status

  - **`role` (required)**

    `string`, possible values: `"customer", "contractor", "admin"` — User role

  - **`updatedAt` (required)**

    `string` — Last update date

  - **`phone`**

    `string` — User's phone number

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": {
    "_id": "",
    "full_name": "",
    "email": "",
    "role": "customer",
    "phone": "",
    "is_verified": true,
    "createdAt": "",
    "updatedAt": ""
  }
}
```

##### Status: 404 User not found

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Delete user account

- **Method:** `DELETE`
- **Path:** `/api/admin/users/{id}`
- **Tags:** Admin - User Management

Permanently delete a user account

#### Responses

##### Status: 200 User deleted successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": null
}
```

##### Status: 404 User not found

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Suspend/unsuspend user

- **Method:** `PATCH`
- **Path:** `/api/admin/users/{id}/suspend`
- **Tags:** Admin - User Management

Suspend or unsuspend a user account

#### Request Body

##### Content-Type: application/json

- **`suspend` (required)**

  `boolean` — True to suspend, false to unsuspend

- **`reason`**

  `string` — Reason for suspension

**Example:**

```json
{
  "suspend": true,
  "reason": ""
}
```

#### Responses

##### Status: 200 User suspension status updated successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": null
}
```

##### Status: 404 User not found

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Admin login

- **Method:** `POST`
- **Path:** `/api/admin/auth/login`
- **Tags:** Admin - Authentication

Admin login with email and password

#### Request Body

##### Content-Type: application/json

- **`email` (required)**

  `string`, format: `email` — Admin email address

- **`password` (required)**

  `string` — Admin password

**Example:**

```json
{
  "email": "",
  "password": ""
}
```

#### Responses

##### Status: 200 Login successful

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`accessToken` (required)**

    `string`

  - **`refreshToken` (required)**

    `string`

  - **`user` (required)**

    `object`

    - **`_id` (required)**

      `string`

    - **`email` (required)**

      `string`

    - **`full_name` (required)**

      `string`

    - **`is_verified` (required)**

      `boolean`

    - **`role` (required)**

      `string`, possible values: `"admin"`

    - **`createdAt`**

      `string | null`, format: `date-time`

    - **`profile_img`**

      `string`

    - **`updatedAt`**

      `string | null`, format: `date-time`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "user": {
      "_id": "",
      "role": "admin",
      "full_name": "",
      "email": "",
      "profile_img": "",
      "is_verified": true,
      "createdAt": null,
      "updatedAt": null
    },
    "accessToken": "",
    "refreshToken": ""
  }
}
```

##### Status: 401 Invalid credentials or not an admin account

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Get completion requests

- **Method:** `GET`
- **Path:** `/api/admin/completion-requests`
- **Tags:** Admin - User Management

Get paginated list of completion requests with optional filters

#### Responses

##### Status: 200 Completion requests retrieved successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`pagination` (required)**

    `object`

    - **`limit` (required)**

      `number`

    - **`page` (required)**

      `number`

    - **`pages` (required)**

      `number`

    - **`total` (required)**

      `number`

  - **`requests` (required)**

    `array`

    **Items:**

    - **`_id` (required)**

      `string` — Completion request ID

    - **`contractor` (required)**

      `string` — Contractor ID

    - **`createdAt` (required)**

      `string` — Creation timestamp

    - **`customer` (required)**

      `string` — Customer ID

    - **`job` (required)**

      `string` — Job ID

    - **`offer` (required)**

      `string` — Offer ID

    - **`status` (required)**

      `string`, possible values: `"pending", "approved", "rejected"` — Request status

    - **`updatedAt` (required)**

      `string` — Last update timestamp

    - **`approvedAt`**

      `string` — Approval timestamp

    - **`approvedBy`**

      `string` — Admin who approved

    - **`rejectedAt`**

      `string` — Rejection timestamp

    - **`rejectedBy`**

      `string` — Admin who rejected

    - **`rejectionReason`**

      `string` — Reason for rejection

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "requests": [
      {
        "_id": "",
        "job": "",
        "offer": "",
        "customer": "",
        "contractor": "",
        "status": "pending",
        "approvedBy": "",
        "rejectedBy": "",
        "rejectionReason": "",
        "approvedAt": "",
        "rejectedAt": "",
        "createdAt": "",
        "updatedAt": ""
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 1,
      "total": 1,
      "pages": 1
    }
  }
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Approve completion request

- **Method:** `POST`
- **Path:** `/api/admin/completion-requests/{id}/approve`
- **Tags:** Admin - User Management

Admin approves job completion, transfers funds to contractor via Stripe Connect

#### Responses

##### Status: 200 Completion request approved successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 400 Bad request

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Reject completion request

- **Method:** `POST`
- **Path:** `/api/admin/completion-requests/{id}/reject`
- **Tags:** Admin - User Management

Admin rejects job completion request with reason

#### Request Body

##### Content-Type: application/json

- **`reason` (required)**

  `string` — Reason for rejection

**Example:**

```json
{
  "reason": ""
}
```

#### Responses

##### Status: 200 Completion request rejected successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 400 Bad request

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Get withdrawal requests

- **Method:** `GET`
- **Path:** `/api/admin/withdrawal-requests`
- **Tags:** Admin - User Management

Get paginated list of withdrawal requests with optional filters

#### Responses

##### Status: 200 Withdrawal requests retrieved successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`pagination` (required)**

    `object`

    - **`limit` (required)**

      `number`

    - **`page` (required)**

      `number`

    - **`pages` (required)**

      `number`

    - **`total` (required)**

      `number`

  - **`requests` (required)**

    `array`

    **Items:**

    - **`_id` (required)**

      `string` — Withdrawal request ID

    - **`amount` (required)**

      `number` — Withdrawal amount

    - **`contractor` (required)**

      `string` — Contractor ID

    - **`createdAt` (required)**

      `string` — Creation timestamp

    - **`status` (required)**

      `string`, possible values: `"pending", "approved", "rejected"` — Request status

    - **`updatedAt` (required)**

      `string` — Last update timestamp

    - **`approvedAt`**

      `string` — Approval timestamp

    - **`approvedBy`**

      `string` — Admin who approved

    - **`rejectedAt`**

      `string` — Rejection timestamp

    - **`rejectedBy`**

      `string` — Admin who rejected

    - **`rejectionReason`**

      `string` — Reason for rejection

    - **`stripeTransferId`**

      `string` — Stripe transfer ID

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "requests": [
      {
        "_id": "",
        "contractor": "",
        "amount": 1,
        "status": "pending",
        "approvedBy": "",
        "rejectedBy": "",
        "rejectionReason": "",
        "stripeTransferId": "",
        "approvedAt": "",
        "rejectedAt": "",
        "createdAt": "",
        "updatedAt": ""
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 1,
      "total": 1,
      "pages": 1
    }
  }
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Approve withdrawal request

- **Method:** `POST`
- **Path:** `/api/admin/withdrawal-requests/{id}/approve`
- **Tags:** Admin - User Management

Admin approves withdrawal, deducts from contractor wallet and initiates Stripe Connect transfer

#### Responses

##### Status: 200 Withdrawal request approved successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 400 Bad request

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Reject withdrawal request

- **Method:** `POST`
- **Path:** `/api/admin/withdrawal-requests/{id}/reject`
- **Tags:** Admin - User Management

Admin rejects withdrawal request with reason

#### Request Body

##### Content-Type: application/json

- **`reason` (required)**

  `string` — Reason for rejection

**Example:**

```json
{
  "reason": ""
}
```

#### Responses

##### Status: 200 Withdrawal request rejected successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 400 Bad request

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### User registration

- **Method:** `POST`
- **Path:** `/api/auth/register`
- **Tags:** Authentication

Register a new user account

#### Request Body

##### Content-Type: application/json

- **`email` (required)**

  `string`, format: `email` — User's email address

- **`full_name` (required)**

  `string` — User's full name

- **`password` (required)**

  `string` — User's password

- **`phone`**

  `string` — User's phone number

- **`role`**

  `string`, possible values: `"customer", "contractor", "admin"`, default: `"customer"` — User role

**Example:**

```json
{
  "full_name": "",
  "email": "",
  "password": "",
  "role": "customer",
  "phone": ""
}
```

#### Responses

##### Status: 201 User registered successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`accessToken` (required)**

    `string` — JWT access token

  - **`refreshToken` (required)**

    `string` — JWT refresh token

  - **`user` (required)**

    `object`

    - **`_id` (required)**

      `string` — User ID

    - **`createdAt` (required)**

      `string` — Account creation date

    - **`email` (required)**

      `string` — User's email address

    - **`full_name` (required)**

      `string` — User's full name

    - **`is_verified` (required)**

      `boolean` — Verification status

    - **`role` (required)**

      `string`, possible values: `"customer", "contractor", "admin"` — User role

    - **`updatedAt` (required)**

      `string` — Last update date

    - **`phone`**

      `string` — User's phone number

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": {
    "user": {
      "_id": "",
      "full_name": "",
      "email": "",
      "role": "customer",
      "phone": "",
      "is_verified": true,
      "createdAt": "",
      "updatedAt": ""
    },
    "accessToken": "",
    "refreshToken": ""
  }
}
```

##### Status: 400 Validation error or user already exists

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### User login

- **Method:** `POST`
- **Path:** `/api/auth/login`
- **Tags:** Authentication

Login with email and password

#### Request Body

##### Content-Type: application/json

- **`email` (required)**

  `string`, format: `email` — User's email address

- **`password` (required)**

  `string` — User's password

**Example:**

```json
{
  "email": "",
  "password": ""
}
```

#### Responses

##### Status: 200 Login successful

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`accessToken` (required)**

    `string` — JWT access token

  - **`refreshToken` (required)**

    `string` — JWT refresh token

  - **`user` (required)**

    `object`

    - **`_id` (required)**

      `string` — User ID

    - **`createdAt` (required)**

      `string` — Account creation date

    - **`email` (required)**

      `string` — User's email address

    - **`full_name` (required)**

      `string` — User's full name

    - **`is_verified` (required)**

      `boolean` — Verification status

    - **`role` (required)**

      `string`, possible values: `"customer", "contractor", "admin"` — User role

    - **`updatedAt` (required)**

      `string` — Last update date

    - **`phone`**

      `string` — User's phone number

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": {
    "user": {
      "_id": "",
      "full_name": "",
      "email": "",
      "role": "customer",
      "phone": "",
      "is_verified": true,
      "createdAt": "",
      "updatedAt": ""
    },
    "accessToken": "",
    "refreshToken": ""
  }
}
```

##### Status: 401 Invalid credentials

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 403 Account suspended

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Forgot password

- **Method:** `POST`
- **Path:** `/api/auth/forgot-password`
- **Tags:** Authentication

Request OTP for password reset

#### Request Body

##### Content-Type: application/json

- **`email` (required)**

  `string`, format: `email` — User's email address

**Example:**

```json
{
  "email": ""
}
```

#### Responses

##### Status: 200 OTP sent if email exists

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": null
}
```

##### Status: 400 Validation error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Verify OTP

- **Method:** `POST`
- **Path:** `/api/auth/verify-otp`
- **Tags:** Authentication

Verify OTP before resetting password

#### Request Body

##### Content-Type: application/json

- **`email` (required)**

  `string`, format: `email` — User's email address

- **`otp` (required)**

  `string` — 4-digit OTP code

**Example:**

```json
{
  "email": "",
  "otp": ""
}
```

#### Responses

##### Status: 200 OTP verified successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": null
}
```

##### Status: 400 Invalid OTP or validation error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Reset password

- **Method:** `POST`
- **Path:** `/api/auth/reset-password`
- **Tags:** Authentication

Reset password using verified OTP

#### Request Body

##### Content-Type: application/json

- **`email` (required)**

  `string`, format: `email` — User's email address

- **`newPassword` (required)**

  `string` — New password

- **`otp` (required)**

  `string` — 4-digit OTP code

**Example:**

```json
{
  "email": "",
  "otp": "",
  "newPassword": ""
}
```

#### Responses

##### Status: 200 Password reset successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": null
}
```

##### Status: 400 Invalid OTP or validation error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Refresh tokens

- **Method:** `POST`
- **Path:** `/api/auth/refresh`
- **Tags:** Authentication

Refresh access token using refresh token

#### Request Body

##### Content-Type: application/json

- **`refreshToken` (required)**

  `string` — Refresh token

**Example:**

```json
{
  "refreshToken": ""
}
```

#### Responses

##### Status: 200 Tokens refreshed successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`accessToken` (required)**

    `string` — JWT access token

  - **`refreshToken` (required)**

    `string` — JWT refresh token

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": {
    "accessToken": "",
    "refreshToken": ""
  }
}
```

##### Status: 401 Invalid or expired refresh token

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 403 Account suspended

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Get current user

- **Method:** `GET`
- **Path:** `/api/auth/me`
- **Tags:** Authentication

Get current authenticated user

#### Responses

##### Status: 200 User retrieved successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`_id` (required)**

    `string` — User ID

  - **`createdAt` (required)**

    `string` — Account creation date

  - **`email` (required)**

    `string` — User's email address

  - **`full_name` (required)**

    `string` — User's full name

  - **`is_verified` (required)**

    `boolean` — Verification status

  - **`role` (required)**

    `string`, possible values: `"customer", "contractor", "admin"` — User role

  - **`updatedAt` (required)**

    `string` — Last update date

  - **`phone`**

    `string` — User's phone number

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": {
    "_id": "",
    "full_name": "",
    "email": "",
    "role": "customer",
    "phone": "",
    "is_verified": true,
    "createdAt": "",
    "updatedAt": ""
  }
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 404 User not found

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Get all categories

- **Method:** `GET`
- **Path:** `/api/category`
- **Tags:** category

Get all categories with optional search and pagination

#### Responses

##### Status: 200 Categories retrieved successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`categories` (required)**

    `array`

    **Items:**

    - **`_id` (required)**

      `string` — Category ID

    - **`name` (required)**

      `string` — Category name

    - **`createdAt`**

      `string` — Creation date

    - **`description`**

      `string` — Category description

    - **`icon`**

      `object` — Category icon file

    - **`updatedAt`**

      `string` — Last update date

  - **`limit` (required)**

    `number` — Items per page

  - **`page` (required)**

    `number` — Current page

  - **`total` (required)**

    `number` — Total number of categories

  - **`totalPages` (required)**

    `number` — Total pages

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "categories": [
      {
        "_id": "",
        "name": "",
        "icon": null,
        "description": "",
        "createdAt": "",
        "updatedAt": ""
      }
    ],
    "total": 1,
    "page": 1,
    "limit": 1,
    "totalPages": 1
  }
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Create category

- **Method:** `POST`
- **Path:** `/api/category`
- **Tags:** category

Create a new category (Admin only)

#### Request Body

##### Content-Type: multipart/form-data

- **`name` (required)**

  `string` — Category name

- **`description`**

  `string` — Category description

- **`icon`**

  `object` — Category icon file

**Example:**

```json
{
  "name": "",
  "description": "",
  "icon": null
}
```

#### Responses

##### Status: 201 Category created successfully

###### Content-Type: application/json

- **`data` (required)**

  `object | null`

  - **`_id` (required)**

    `string` — Category ID

  - **`name` (required)**

    `string` — Category name

  - **`createdAt`**

    `string` — Creation date

  - **`description`**

    `string` — Category description

  - **`icon`**

    `object` — Category icon file

  - **`updatedAt`**

    `string` — Last update date

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "_id": "",
    "name": "",
    "icon": null,
    "description": "",
    "createdAt": "",
    "updatedAt": ""
  }
}
```

##### Status: 400 Validation error or category already exists

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 403 Forbidden - Admin only

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Get category by ID

- **Method:** `GET`
- **Path:** `/api/category/{id}`
- **Tags:** category

Get a single category by ID

#### Responses

##### Status: 200 Category retrieved successfully

###### Content-Type: application/json

- **`data` (required)**

  `object | null`

  - **`_id` (required)**

    `string` — Category ID

  - **`name` (required)**

    `string` — Category name

  - **`createdAt`**

    `string` — Creation date

  - **`description`**

    `string` — Category description

  - **`icon`**

    `object` — Category icon file

  - **`updatedAt`**

    `string` — Last update date

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "_id": "",
    "name": "",
    "icon": null,
    "description": "",
    "createdAt": "",
    "updatedAt": ""
  }
}
```

##### Status: 404 Category not found

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Update category

- **Method:** `PUT`
- **Path:** `/api/category/{id}`
- **Tags:** category

Update a category (Admin only)

#### Request Body

##### Content-Type: multipart/form-data

- **`description`**

  `string`

- **`icon`**

  `object` — Category icon file

- **`name`**

  `string`

**Example:**

```json
{
  "name": "",
  "description": "",
  "icon": null
}
```

#### Responses

##### Status: 200 Category updated successfully

###### Content-Type: application/json

- **`data` (required)**

  `object | null`

  - **`_id` (required)**

    `string` — Category ID

  - **`name` (required)**

    `string` — Category name

  - **`createdAt`**

    `string` — Creation date

  - **`description`**

    `string` — Category description

  - **`icon`**

    `object` — Category icon file

  - **`updatedAt`**

    `string` — Last update date

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "_id": "",
    "name": "",
    "icon": null,
    "description": "",
    "createdAt": "",
    "updatedAt": ""
  }
}
```

##### Status: 400 Validation error or category name already exists

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 403 Forbidden - Admin only

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 404 Category not found

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Delete category

- **Method:** `DELETE`
- **Path:** `/api/category/{id}`
- **Tags:** category

Delete a category (Admin only)

#### Responses

##### Status: 200 Category deleted successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": null
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 403 Forbidden - Admin only

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 404 Category not found

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Get user conversations

- **Method:** `GET`
- **Path:** `/api/chat/conversations`
- **Tags:** chat

Get all conversations for the authenticated user

#### Responses

##### Status: 200 Conversations retrieved successfully

###### Content-Type: application/json

- **`data` (required)**

  `array`

  **Items:**

  - **`_id` (required)**

    `string` — Conversation ID

  - **`lastMessage` (required)**

    `object` — Last message preview

    - **`senderId` (required)**

      `string`

    - **`text` (required)**

      `string`

    - **`timestamp` (required)**

      `string`, format: `date-time`

  - **`participants` (required)**

    `array` — Array of participant user IDs

    **Items:**

    `string`

  - **`unreadCount` (required)**

    `object` — Unread message count per user

  - **`createdAt`**

    `string`, format: `date-time`

  - **`jobId`**

    `string` — Related job ID

  - **`updatedAt`**

    `string`, format: `date-time`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": [
    {
      "_id": "",
      "participants": [
        ""
      ],
      "lastMessage": {
        "text": "",
        "senderId": "",
        "timestamp": ""
      },
      "unreadCount": {
        "additionalProperty": 1
      },
      "jobId": "",
      "createdAt": "",
      "updatedAt": ""
    }
  ]
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Create conversation

- **Method:** `POST`
- **Path:** `/api/chat/conversations`
- **Tags:** chat

Create a new conversation with another user

#### Request Body

##### Content-Type: application/json

- **`participantId` (required)**

  `string` — ID of the other user in conversation

- **`jobId`**

  `string` — Optional job ID to link conversation

**Example:**

```json
{
  "participantId": "",
  "jobId": ""
}
```

#### Responses

##### Status: 201 Conversation created successfully

###### Content-Type: application/json

- **`data` (required)**

  `object | null`

  - **`_id` (required)**

    `string` — Conversation ID

  - **`lastMessage` (required)**

    `object` — Last message preview

    - **`senderId` (required)**

      `string`

    - **`text` (required)**

      `string`

    - **`timestamp` (required)**

      `string`, format: `date-time`

  - **`participants` (required)**

    `array` — Array of participant user IDs

    **Items:**

    `string`

  - **`unreadCount` (required)**

    `object` — Unread message count per user

  - **`createdAt`**

    `string`, format: `date-time`

  - **`jobId`**

    `string` — Related job ID

  - **`updatedAt`**

    `string`, format: `date-time`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "_id": "",
    "participants": [
      ""
    ],
    "lastMessage": {
      "text": "",
      "senderId": "",
      "timestamp": ""
    },
    "unreadCount": {
      "additionalProperty": 1
    },
    "jobId": "",
    "createdAt": "",
    "updatedAt": ""
  }
}
```

##### Status: 400 Bad request

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Get conversation messages

- **Method:** `GET`
- **Path:** `/api/chat/conversations/{id}/messages`
- **Tags:** chat

Get paginated messages for a specific conversation

#### Responses

##### Status: 200 Messages retrieved successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`currentPage` (required)**

    `number`

  - **`hasMore` (required)**

    `boolean`

  - **`messages` (required)**

    `array`

    **Items:**

    - **`_id` (required)**

      `string` — Message ID

    - **`content` (required)**

      `object`

      - **`fileName`**

        `string` — File name

      - **`fileSize`**

        `number` — File size in bytes

      - **`fileUrl`**

        `string` — File URL

      - **`text`**

        `string` — Text message content

    - **`conversationId` (required)**

      `string` — Conversation ID

    - **`messageType` (required)**

      `string`, possible values: `"text", "image", "file"` — Type of message

    - **`receiverId` (required)**

      `string` — Receiver user ID

    - **`senderId` (required)**

      `string` — Sender user ID

    - **`status` (required)**

      `string`, possible values: `"sent", "delivered", "read"` — Message delivery status

    - **`timestamp` (required)**

      `string`, format: `date-time` — Message timestamp

    - **`createdAt`**

      `string`, format: `date-time`

  - **`totalPages` (required)**

    `number`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "messages": [
      {
        "_id": "",
        "conversationId": "",
        "senderId": "",
        "receiverId": "",
        "messageType": "text",
        "content": {
          "text": "",
          "fileUrl": "",
          "fileName": "",
          "fileSize": 1
        },
        "status": "sent",
        "timestamp": "",
        "createdAt": ""
      }
    ],
    "hasMore": true,
    "totalPages": 1,
    "currentPage": 1
  }
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 404 Conversation not found

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Upload image (server-side)

- **Method:** `POST`
- **Path:** `/api/common/upload`
- **Tags:** common

Upload a single image file to ImageKit via server

#### Request Body

##### Content-Type: multipart/form-data

- **`image` (required)**

  `string` — Image file to upload (max 5MB)

**Example:**

```json
{
  "image": ""
}
```

#### Responses

##### Status: 200 Image uploaded successfully to ImageKit

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`fileId` (required)**

    `string` — ImageKit file ID

  - **`filename` (required)**

    `string` — Generated filename

  - **`filePath` (required)**

    `string` — File path in ImageKit

  - **`mimetype` (required)**

    `string` — MIME type of the image

  - **`originalName` (required)**

    `string` — Original filename

  - **`size` (required)**

    `number` — File size in bytes

  - **`url` (required)**

    `string` — Full URL of the uploaded image

  - **`thumbnailUrl`**

    `string` — Thumbnail URL

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "url": "",
    "fileId": "",
    "filename": "",
    "originalName": "",
    "size": 1,
    "mimetype": "",
    "thumbnailUrl": "",
    "filePath": ""
  }
}
```

##### Status: 400 No image file provided or invalid file type

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Get ImageKit auth parameters (client-side upload)

- **Method:** `GET`
- **Path:** `/api/common/upload/auth`
- **Tags:** common

Get authentication parameters for client-side direct upload to ImageKit. Frontend uses these parameters to upload images directly to ImageKit without going through the server.

#### Responses

##### Status: 200 Authentication parameters generated successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`expire` (required)**

    `number` — Token expiration timestamp (Unix)

  - **`publicKey` (required)**

    `string` — ImageKit public key

  - **`signature` (required)**

    `string` — Signature for authentication

  - **`token` (required)**

    `string` — Authentication token for ImageKit

  - **`urlEndpoint` (required)**

    `string` — ImageKit URL endpoint

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "token": "",
    "expire": 1,
    "signature": "",
    "publicKey": "",
    "urlEndpoint": ""
  }
}
```

##### Status: 500 Failed to generate authentication parameters

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Request job completion (requires admin approval)

- **Method:** `POST`
- **Path:** `/api/delivery/complete-delivery`
- **Tags:** delivery

Customer marks a job as complete after contractor finishes work. This creates a completion request for admin approval. Admin will then approve the completion, which triggers payment release: 80% to contractor, 20% service fee to admin. Job must be in 'assigned' status with an accepted offer. Uses MongoDB transactions for atomicity.

#### Request Body

##### Content-Type: application/json

- **`jobId` (required)**

  `string` — ID of the job to mark as complete

**Example:**

```json
{
  "jobId": ""
}
```

#### Responses

##### Status: 200 Completion request created successfully. Awaiting admin approval for payment release.

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`completionRequest` (required)**

    `object`

    - **`_id` (required)**

      `string`

    - **`contractor` (required)**

      `string`

    - **`customer` (required)**

      `string`

    - **`job` (required)**

      `string`

    - **`offer` (required)**

      `string`

    - **`requestedAt` (required)**

      `string`

    - **`status` (required)**

      `string`

  - **`job` (required)**

    `object`

    - **`_id` (required)**

      `string`

    - **`completedAt` (required)**

      `string`

    - **`status` (required)**

      `string`

    - **`title` (required)**

      `string`

  - **`message` (required)**

    `string`

  - **`payment` (required)**

    `object`

    - **`contractorPayout` (required)**

      `number`

    - **`jobAmount` (required)**

      `number`

    - **`platformFee` (required)**

      `number`

    - **`serviceFee` (required)**

      `number`

    - **`totalAdminCommission` (required)**

      `number`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "completionRequest": {
      "_id": "",
      "job": "",
      "customer": "",
      "contractor": "",
      "offer": "",
      "status": "",
      "requestedAt": ""
    },
    "job": {
      "_id": "",
      "title": "",
      "status": "",
      "completedAt": ""
    },
    "payment": {
      "jobAmount": 1,
      "serviceFee": 1,
      "contractorPayout": 1,
      "platformFee": 1,
      "totalAdminCommission": 1
    },
    "message": ""
  }
}
```

##### Status: 400 Bad request - Job not assigned, no accepted offer, or completion request already exists

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 401 Unauthorized - Authentication required

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 403 Forbidden - Only customer who posted the job can request completion

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 404 Not found - Job or offer not found

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

### Send job invite

- **Method:** `POST`
- **Path:** `/api/job-invite/send/{jobId}`
- **Tags:** Job Invite

Customer sends a job invite to a specific contractor. Only one invite per contractor per job is allowed. Note: Customers can invite contractors even if they have already applied to the job.

#### Request Body

##### Content-Type: application/json

- **`contractorId` (required)**

  `string` — ID of the contractor to invite

- **`message`**

  `string` — Optional message to the contractor

**Example:**

```json
{
  "contractorId": "",
  "message": ""
}
```

#### Responses

##### Status: 201 Invite sent successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`_id` (required)**

    `string`

  - **`createdAt` (required)**

    `string | null`, format: `date-time`

  - **`sender` (required)**

    `string`

  - **`status` (required)**

    `string`, possible values: `"invited", "requested", "engaged", "offered", "cancelled"`

  - **`updatedAt` (required)**

    `string | null`, format: `date-time`

  - **`contractor`**

    `object`

  - **`customer`**

    `object`

  - **`job`**

    `object`

  - **`offerId`**

    `string`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "_id": "",
    "job": null,
    "customer": null,
    "contractor": null,
    "status": "invited",
    "sender": "",
    "offerId": "",
    "createdAt": null,
    "updatedAt": null
  }
}
```

##### Status: 400 Bad request - already invited or job not open

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 403 Forbidden - not job owner

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 404 Job or contractor not found

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Get available contractors

- **Method:** `GET`
- **Path:** `/api/job-invite/available/{jobId}`
- **Tags:** Job Invite

Get contractors who are available to be invited for a specific job. Returns only contractors who have NOT applied to the job and have NOT been invited yet. Supports search and filtering by category, location, and budget.

#### Responses

##### Status: 200 Available contractors retrieved successfully with pagination and exclusion information

###### Content-Type: application/json

- **`data`**

  `object`

  - **`contractors`**

    `array`

    **Items:**

    - **`_id`**

      `string`

    - **`bio`**

      `string`

    - **`category`**

      `array`

    - **`email`**

      `string`

    - **`full_name`**

      `string`

    - **`hourly_charge`**

      `number`

    - **`location`**

      `object`

    - **`profile_img`**

      `string`

    - **`skills`**

      `array`

      **Items:**

      `string`

    - **`starting_budget`**

      `number`

  - **`excludedCount`**

    `number` — Number of contractors excluded (already applied or invited)

  - **`jobInfo`**

    `object`

    - **`budget`**

      `number`

    - **`id`**

      `string`

    - **`title`**

      `string`

  - **`limit`**

    `number` — Items per page

  - **`page`**

    `number` — Current page

  - **`total`**

    `number` — Total available contractors

  - **`totalPages`**

    `number` — Total pages

- **`message`**

  `string`

- **`status`**

  `number`

**Example:**

```json
{
  "status": 200,
  "message": "Available contractors retrieved successfully",
  "data": {
    "contractors": [
      {
        "_id": "",
        "full_name": "",
        "email": "",
        "profile_img": "",
        "bio": "",
        "skills": [
          ""
        ],
        "starting_budget": 1,
        "hourly_charge": 1,
        "category": [],
        "location": {}
      }
    ],
    "total": 1,
    "page": 1,
    "limit": 1,
    "totalPages": 1,
    "excludedCount": 1,
    "jobInfo": {
      "id": "",
      "title": "",
      "budget": 1
    }
  }
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 403 Forbidden - not job owner

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 404 Job not found

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Get sent invites

- **Method:** `GET`
- **Path:** `/api/job-invite/sent`
- **Tags:** Job Invite

Get all invites sent by the customer with optional filtering by job and status. Supports pagination.

#### Responses

##### Status: 200 Invites retrieved successfully with pagination information

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`invites` (required)**

    `array`

    **Items:**

    - **`_id` (required)**

      `string`

    - **`createdAt` (required)**

      `string | null`, format: `date-time`

    - **`sender` (required)**

      `string`

    - **`status` (required)**

      `string`, possible values: `"invited", "requested", "engaged", "offered", "cancelled"`

    - **`updatedAt` (required)**

      `string | null`, format: `date-time`

    - **`contractor`**

      `object`

    - **`customer`**

      `object`

    - **`job`**

      `object`

    - **`offerId`**

      `string`

  - **`limit` (required)**

    `number` — Items per page

  - **`page` (required)**

    `number` — Current page

  - **`total` (required)**

    `number` — Total number of invites

  - **`totalPages` (required)**

    `number` — Total pages

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "invites": [
      {
        "_id": "",
        "job": null,
        "customer": null,
        "contractor": null,
        "status": "invited",
        "sender": "",
        "offerId": "",
        "createdAt": null,
        "updatedAt": null
      }
    ],
    "total": 1,
    "page": 1,
    "limit": 1,
    "totalPages": 1
  }
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Get received invites

- **Method:** `GET`
- **Path:** `/api/job-invite/received`
- **Tags:** Job Invite

Get all invites received by the contractor with optional filtering by status. Supports pagination.

#### Responses

##### Status: 200 Invites retrieved successfully with pagination information

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`invites` (required)**

    `array`

    **Items:**

    - **`_id` (required)**

      `string`

    - **`createdAt` (required)**

      `string | null`, format: `date-time`

    - **`sender` (required)**

      `string`

    - **`status` (required)**

      `string`, possible values: `"invited", "requested", "engaged", "offered", "cancelled"`

    - **`updatedAt` (required)**

      `string | null`, format: `date-time`

    - **`contractor`**

      `object`

    - **`customer`**

      `object`

    - **`job`**

      `object`

    - **`offerId`**

      `string`

  - **`limit` (required)**

    `number` — Items per page

  - **`page` (required)**

    `number` — Current page

  - **`total` (required)**

    `number` — Total number of invites

  - **`totalPages` (required)**

    `number` — Total pages

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "invites": [
      {
        "_id": "",
        "job": null,
        "customer": null,
        "contractor": null,
        "status": "invited",
        "sender": "",
        "offerId": "",
        "createdAt": null,
        "updatedAt": null
      }
    ],
    "total": 1,
    "page": 1,
    "limit": 1,
    "totalPages": 1
  }
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Get invite details

- **Method:** `GET`
- **Path:** `/api/job-invite/{inviteId}`
- **Tags:** Job Invite

Get details of a specific invite. Accessible by both customer and contractor involved.

#### Responses

##### Status: 200 Invite details retrieved successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`_id` (required)**

    `string`

  - **`createdAt` (required)**

    `string | null`, format: `date-time`

  - **`sender` (required)**

    `string`

  - **`status` (required)**

    `string`, possible values: `"invited", "requested", "engaged", "offered", "cancelled"`

  - **`updatedAt` (required)**

    `string | null`, format: `date-time`

  - **`contractor`**

    `object`

  - **`customer`**

    `object`

  - **`job`**

    `object`

  - **`offerId`**

    `string`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "_id": "",
    "job": null,
    "customer": null,
    "contractor": null,
    "status": "invited",
    "sender": "",
    "offerId": "",
    "createdAt": null,
    "updatedAt": null
  }
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 403 Forbidden - not involved in this invite

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 404 Invite not found

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Cancel invite

- **Method:** `DELETE`
- **Path:** `/api/job-invite/{inviteId}`
- **Tags:** Job Invite

Customer cancels a sent invite. Only pending invites can be cancelled.

#### Responses

##### Status: 200 Invite cancelled successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": null
}
```

##### Status: 400 Cannot cancel processed invite

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 403 Forbidden - not the invite sender

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 404 Invite not found

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Accept invite

- **Method:** `PATCH`
- **Path:** `/api/job-invite/{inviteId}/accept`
- **Tags:** Job Invite

Contractor accepts a job invite. Creates a conversation for chat and updates job status.

#### Responses

##### Status: 200 Invite accepted successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`_id` (required)**

    `string`

  - **`createdAt` (required)**

    `string | null`, format: `date-time`

  - **`sender` (required)**

    `string`

  - **`status` (required)**

    `string`, possible values: `"invited", "requested", "engaged", "offered", "cancelled"`

  - **`updatedAt` (required)**

    `string | null`, format: `date-time`

  - **`contractor`**

    `object`

  - **`customer`**

    `object`

  - **`job`**

    `object`

  - **`offerId`**

    `string`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "_id": "",
    "job": null,
    "customer": null,
    "contractor": null,
    "status": "invited",
    "sender": "",
    "offerId": "",
    "createdAt": null,
    "updatedAt": null
  }
}
```

##### Status: 400 Invite already processed or job not available

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 403 Forbidden - not the invited contractor

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 404 Invite not found

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Reject invite

- **Method:** `PATCH`
- **Path:** `/api/job-invite/{inviteId}/reject`
- **Tags:** Job Invite

Contractor rejects a job invite with optional reason. Notifies the customer.

#### Request Body

##### Content-Type: application/json

- **`rejectionReason`**

  `string` — Optional reason for rejection

**Example:**

```json
{
  "rejectionReason": ""
}
```

#### Responses

##### Status: 200 Invite rejected successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`_id` (required)**

    `string`

  - **`createdAt` (required)**

    `string | null`, format: `date-time`

  - **`sender` (required)**

    `string`

  - **`status` (required)**

    `string`, possible values: `"invited", "requested", "engaged", "offered", "cancelled"`

  - **`updatedAt` (required)**

    `string | null`, format: `date-time`

  - **`contractor`**

    `object`

  - **`customer`**

    `object`

  - **`job`**

    `object`

  - **`offerId`**

    `string`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "_id": "",
    "job": null,
    "customer": null,
    "contractor": null,
    "status": "invited",
    "sender": "",
    "offerId": "",
    "createdAt": null,
    "updatedAt": null
  }
}
```

##### Status: 400 Invite already processed

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 403 Forbidden - not the invited contractor

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 404 Invite not found

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Apply for job

- **Method:** `POST`
- **Path:** `/api/job-request/apply/{jobId}`
- **Tags:** Job Application Request

Contractor applies for a job

#### Request Body

##### Content-Type: application/json

- **`message`**

  `string` — Optional message to the job owner

**Example:**

```json
{
  "message": ""
}
```

#### Responses

##### Status: 201 Application submitted successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`_id` (required)**

    `string`

  - **`createdAt` (required)**

    `string | null`, format: `date-time`

  - **`status` (required)**

    `string`, possible values: `"pending", "accepted", "rejected"`

  - **`updatedAt` (required)**

    `string | null`, format: `date-time`

  - **`contractor`**

    `object`

  - **`job`**

    `object`

  - **`message`**

    `string`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "_id": "",
    "job": null,
    "contractor": null,
    "status": "pending",
    "message": "",
    "createdAt": null,
    "updatedAt": null
  }
}
```

##### Status: 400 Bad request - already applied or job not accepting applications

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 404 Job not found

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Get my applications

- **Method:** `GET`
- **Path:** `/api/job-request/my`
- **Tags:** Job Application Request

Get contractor's own job applications with optional search and filters. Supports pagination and filtering by job criteria.

#### Responses

##### Status: 200 Applications retrieved successfully with pagination information

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`applications` (required)**

    `array`

    **Items:**

    - **`_id` (required)**

      `string`

    - **`createdAt` (required)**

      `string | null`, format: `date-time`

    - **`status` (required)**

      `string`, possible values: `"pending", "accepted", "rejected"`

    - **`updatedAt` (required)**

      `string | null`, format: `date-time`

    - **`contractor`**

      `object`

    - **`job`**

      `object`

    - **`message`**

      `string`

  - **`limit` (required)**

    `number` — Items per page

  - **`page` (required)**

    `number` — Current page

  - **`total` (required)**

    `number` — Total number of applications

  - **`totalPages` (required)**

    `number` — Total pages

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "applications": [
      {
        "_id": "",
        "job": null,
        "contractor": null,
        "status": "pending",
        "message": "",
        "createdAt": null,
        "updatedAt": null
      }
    ],
    "total": 1,
    "page": 1,
    "limit": 1,
    "totalPages": 1
  }
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Get job applications

- **Method:** `GET`
- **Path:** `/api/job-request/job/{jobId}`
- **Tags:** Job Application Request

Get all applications for a specific job (Customer only)

#### Responses

##### Status: 200 Applications retrieved successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`applications` (required)**

    `array`

    **Items:**

    - **`_id` (required)**

      `string`

    - **`createdAt` (required)**

      `string | null`, format: `date-time`

    - **`status` (required)**

      `string`, possible values: `"pending", "accepted", "rejected"`

    - **`updatedAt` (required)**

      `string | null`, format: `date-time`

    - **`contractor`**

      `object`

    - **`job`**

      `object`

    - **`message`**

      `string`

  - **`limit` (required)**

    `number` — Items per page

  - **`page` (required)**

    `number` — Current page

  - **`total` (required)**

    `number` — Total number of applications

  - **`totalPages` (required)**

    `number` — Total pages

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "applications": [
      {
        "_id": "",
        "job": null,
        "contractor": null,
        "status": "pending",
        "message": "",
        "createdAt": null,
        "updatedAt": null
      }
    ],
    "total": 1,
    "page": 1,
    "limit": 1,
    "totalPages": 1
  }
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 403 Forbidden - not job owner

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 404 Job not found

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Accept application

- **Method:** `PATCH`
- **Path:** `/api/job-request/{applicationId}/accept`
- **Tags:** Job Application Request

Accept a job application (Customer only)

#### Responses

##### Status: 200 Application accepted successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`_id` (required)**

    `string`

  - **`createdAt` (required)**

    `string | null`, format: `date-time`

  - **`status` (required)**

    `string`, possible values: `"pending", "accepted", "rejected"`

  - **`updatedAt` (required)**

    `string | null`, format: `date-time`

  - **`contractor`**

    `object`

  - **`job`**

    `object`

  - **`message`**

    `string`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "_id": "",
    "job": null,
    "contractor": null,
    "status": "pending",
    "message": "",
    "createdAt": null,
    "updatedAt": null
  }
}
```

##### Status: 400 Application already processed

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 403 Forbidden - not job owner

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 404 Application not found

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Reject application

- **Method:** `PATCH`
- **Path:** `/api/job-request/{applicationId}/reject`
- **Tags:** Job Application Request

Reject a job application (Customer only)

#### Responses

##### Status: 200 Application rejected successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`_id` (required)**

    `string`

  - **`createdAt` (required)**

    `string | null`, format: `date-time`

  - **`status` (required)**

    `string`, possible values: `"pending", "accepted", "rejected"`

  - **`updatedAt` (required)**

    `string | null`, format: `date-time`

  - **`contractor`**

    `object`

  - **`job`**

    `object`

  - **`message`**

    `string`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "_id": "",
    "job": null,
    "contractor": null,
    "status": "pending",
    "message": "",
    "createdAt": null,
    "updatedAt": null
  }
}
```

##### Status: 400 Application already processed

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 403 Forbidden - not job owner

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 404 Application not found

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Cancel application

- **Method:** `DELETE`
- **Path:** `/api/job-request/{applicationId}`
- **Tags:** Job Application Request

Cancel own job application (Contractor only)

#### Responses

##### Status: 200 Application cancelled successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": null
}
```

##### Status: 400 Cannot cancel processed application

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 403 Forbidden - not application owner

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 404 Application not found

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Get all customer applications

- **Method:** `GET`
- **Path:** `/api/job-request/customer/all`
- **Tags:** Job Application Request

Get all applications received for customer's jobs with optional filtering by job and status. Supports pagination.

#### Responses

##### Status: 200 Applications retrieved successfully with pagination information

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`applications` (required)**

    `array`

    **Items:**

    - **`_id` (required)**

      `string`

    - **`createdAt` (required)**

      `string | null`, format: `date-time`

    - **`status` (required)**

      `string`, possible values: `"pending", "accepted", "rejected"`

    - **`updatedAt` (required)**

      `string | null`, format: `date-time`

    - **`contractor`**

      `object`

    - **`job`**

      `object`

    - **`message`**

      `string`

  - **`limit` (required)**

    `number` — Items per page

  - **`page` (required)**

    `number` — Current page

  - **`total` (required)**

    `number` — Total number of applications

  - **`totalPages` (required)**

    `number` — Total pages

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "applications": [
      {
        "_id": "",
        "job": null,
        "contractor": null,
        "status": "pending",
        "message": "",
        "createdAt": null,
        "updatedAt": null
      }
    ],
    "total": 1,
    "page": 1,
    "limit": 1,
    "totalPages": 1
  }
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Get all jobs

- **Method:** `GET`
- **Path:** `/api/job`
- **Tags:** job

Get all jobs with optional search and filters. If authenticated as a contractor, includes 'isApplied' field indicating whether you've applied to each job.

#### Responses

##### Status: 200 Jobs retrieved successfully. Each job includes 'isApplied' field (true/false) for contractors.

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`jobs` (required)**

    `array`

    **Items:**

    - **`_id` (required)**

      `string` — Job ID

    - **`address` (required)**

      `string` — Job address

    - **`budget` (required)**

      `number` — Job budget

    - **`category` (required)**

      `array` — Array of category IDs

      **Items:**

      `string`

    - **`coverImg` (required)**

      `string`, format: `uri` — Cover image URL

    - **`customerId` (required)**

      `string` — Customer ID who posted the job

    - **`date` (required)**

      `object` — Job date

    - **`description` (required)**

      `string` — Job description

    - **`location` (required)**

      `string` — Job location ID

    - **`status` (required)**

      `string`, possible values: `"open", "in_progress", "completed", "cancelled"` — Job status

    - **`title` (required)**

      `string` — Job title

    - **`contractorId`**

      `string` — Assigned contractor ID

    - **`createdAt`**

      `string` — Creation date

    - **`isApplied`**

      `boolean` — Indicates if the authenticated contractor has applied to this job

    - **`updatedAt`**

      `string` — Last update date

  - **`limit` (required)**

    `number` — Items per page

  - **`page` (required)**

    `number` — Current page

  - **`total` (required)**

    `number` — Total number of jobs

  - **`totalPages` (required)**

    `number` — Total pages

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "jobs": [
      {
        "_id": "",
        "title": "",
        "category": [
          ""
        ],
        "description": "",
        "location": "",
        "address": "",
        "budget": 1,
        "date": "",
        "coverImg": "",
        "customerId": "",
        "contractorId": "",
        "status": "open",
        "isApplied": true,
        "createdAt": "",
        "updatedAt": ""
      }
    ],
    "total": 1,
    "page": 1,
    "limit": 1,
    "totalPages": 1
  }
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Create job

- **Method:** `POST`
- **Path:** `/api/job`
- **Tags:** job

Create a new job (Customer only)

#### Request Body

##### Content-Type: application/json

- **`address` (required)**

  `string` — Job address

- **`budget` (required)**

  `number` — Job budget

- **`category` (required)**

  `array` — Array of category IDs

  **Items:**

  `string`

- **`coverImg` (required)**

  `string` — Cover image URL

- **`description` (required)**

  `string` — Job description

- **`location` (required)**

  `string` — Job location ID

- **`title` (required)**

  `string` — Job title

- **`date`**

  `object` — Job date

**Example:**

```json
{
  "title": "",
  "category": [
    ""
  ],
  "description": "",
  "location": "",
  "address": "",
  "budget": 1,
  "date": "",
  "coverImg": ""
}
```

#### Responses

##### Status: 201 Job created successfully

###### Content-Type: application/json

- **`_id` (required)**

  `string`

- **`completedAt` (required)**

  `string`

- **`status` (required)**

  `string`

- **`title` (required)**

  `string`

**Example:**

```json
{
  "_id": "",
  "title": "",
  "status": "",
  "completedAt": ""
}
```

##### Status: 400 Validation error or invalid categories

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 403 Forbidden - Customer only

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Get job by ID

- **Method:** `GET`
- **Path:** `/api/job/{id}`
- **Tags:** job

Get a single job by ID

#### Responses

##### Status: 200 Job retrieved successfully

###### Content-Type: application/json

- **`_id` (required)**

  `string`

- **`completedAt` (required)**

  `string`

- **`status` (required)**

  `string`

- **`title` (required)**

  `string`

**Example:**

```json
{
  "_id": "",
  "title": "",
  "status": "",
  "completedAt": ""
}
```

##### Status: 404 Job not found

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Update job

- **Method:** `PUT`
- **Path:** `/api/job/{id}`
- **Tags:** job

Update a job (Owner or Admin only)

#### Request Body

##### Content-Type: application/json

- **`address`**

  `string`

- **`budget`**

  `number`

- **`category`**

  `array`

  **Items:**

  `string`

- **`coverImg`**

  `string`, format: `uri`

- **`date`**

  `object`

- **`description`**

  `string`

- **`location`**

  `string`

- **`status`**

  `string`, possible values: `"open", "in_progress", "completed", "cancelled"`

- **`title`**

  `string`

**Example:**

```json
{
  "title": "",
  "category": [
    ""
  ],
  "description": "",
  "location": "",
  "address": "",
  "budget": 1,
  "date": "",
  "coverImg": "",
  "status": "open"
}
```

#### Responses

##### Status: 200 Job updated successfully

###### Content-Type: application/json

- **`_id` (required)**

  `string`

- **`completedAt` (required)**

  `string`

- **`status` (required)**

  `string`

- **`title` (required)**

  `string`

**Example:**

```json
{
  "_id": "",
  "title": "",
  "status": "",
  "completedAt": ""
}
```

##### Status: 400 Validation error or invalid categories

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 403 Forbidden - Owner or Admin only

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 404 Job not found

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Delete job

- **Method:** `DELETE`
- **Path:** `/api/job/{id}`
- **Tags:** job

Delete a job (Owner or Admin only)

#### Responses

##### Status: 200 Job deleted successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": null
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 403 Forbidden - Owner or Admin only

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 404 Job not found

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Get my jobs

- **Method:** `GET`
- **Path:** `/api/job/my/jobs`
- **Tags:** job

Get all jobs posted by the authenticated customer with optional search and filters. When contractorId is provided, returns only jobs where that contractor has NOT been invited and has NOT applied - useful for finding jobs to invite a specific contractor to.

#### Responses

##### Status: 200 Jobs retrieved successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`jobs` (required)**

    `array`

    **Items:**

    - **`_id` (required)**

      `string` — Job ID

    - **`address` (required)**

      `string` — Job address

    - **`budget` (required)**

      `number` — Job budget

    - **`category` (required)**

      `array` — Array of category IDs

      **Items:**

      `string`

    - **`coverImg` (required)**

      `string`, format: `uri` — Cover image URL

    - **`customerId` (required)**

      `string` — Customer ID who posted the job

    - **`date` (required)**

      `object` — Job date

    - **`description` (required)**

      `string` — Job description

    - **`location` (required)**

      `string` — Job location ID

    - **`status` (required)**

      `string`, possible values: `"open", "in_progress", "completed", "cancelled"` — Job status

    - **`title` (required)**

      `string` — Job title

    - **`contractorId`**

      `string` — Assigned contractor ID

    - **`createdAt`**

      `string` — Creation date

    - **`isApplied`**

      `boolean` — Indicates if the authenticated contractor has applied to this job

    - **`updatedAt`**

      `string` — Last update date

  - **`limit` (required)**

    `number` — Items per page

  - **`page` (required)**

    `number` — Current page

  - **`total` (required)**

    `number` — Total number of jobs

  - **`totalPages` (required)**

    `number` — Total pages

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "jobs": [
      {
        "_id": "",
        "title": "",
        "category": [
          ""
        ],
        "description": "",
        "location": "",
        "address": "",
        "budget": 1,
        "date": "",
        "coverImg": "",
        "customerId": "",
        "contractorId": "",
        "status": "open",
        "isApplied": true,
        "createdAt": "",
        "updatedAt": ""
      }
    ],
    "total": 1,
    "page": 1,
    "limit": 1,
    "totalPages": 1
  }
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 403 Forbidden - Customer only

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Get jobs with pending offers (waiting for contractor response)

- **Method:** `GET`
- **Path:** `/api/job/pending-jobs`
- **Tags:** job

Get all jobs where the customer has sent offers that are pending contractor response. Shows jobs waiting for contractor to accept or reject. Each job includes offer details (with offerId for cancellation) and contractor information. Excludes jobs in 'in\_progress', 'completed', or 'cancelled' status. Supports pagination (page, limit) and optional filtering by contractorId to see offers sent to a specific contractor.

#### Responses

##### Status: 200 Pending offer jobs retrieved successfully with offer and contractor details

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`jobs` (required)**

    `array`

    **Items:**

    - **`_id` (required)**

      `string`

    - **`budget` (required)**

      `number`

    - **`contractor` (required)**

      `object`

      - **`_id` (required)**

        `string` — Contractor user ID

      - **`email` (required)**

        `string` — Contractor email

      - **`full_name` (required)**

        `string` — Contractor name

      - **`phone` (required)**

        `string` — Contact phone

      - **`profile_img` (required)**

        `string` — Profile image URL

      - **`skills` (required)**

        `array` — Contractor skills

        **Items:**

        `string`

    - **`createdAt` (required)**

      `string`

    - **`description` (required)**

      `string`

    - **`offer` (required)**

      `object`

      - **`amount` (required)**

        `number` — Offer amount

      - **`canCancel` (required)**

        `boolean` — Always true - customer can cancel

      - **`createdAt` (required)**

        `string` — When offer was sent

      - **`description` (required)**

        `string` — Offer message

      - **`expiresAt` (required)**

        `string` — When offer expires (7 days from creation)

      - **`offerId` (required)**

        `string` — Offer ID - use this to cancel via POST /api/offer/:offerId/cancel

      - **`status` (required)**

        `string`, possible values: `"pending"` — Always 'pending' for this endpoint

      - **`timeline` (required)**

        `string` — Expected completion timeline

    - **`status` (required)**

      `string`, possible values: `"open"`

    - **`title` (required)**

      `string`

    - **`updatedAt` (required)**

      `string`

    - **`category`**

      `object`

    - **`customerId`**

      `object`

    - **`location`**

      `object`

  - **`limit` (required)**

    `number`

  - **`page` (required)**

    `number`

  - **`total` (required)**

    `number`

  - **`totalPages` (required)**

    `number`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "jobs": [
      {
        "_id": "",
        "title": "",
        "description": "",
        "budget": 1,
        "status": "open",
        "category": null,
        "location": null,
        "customerId": null,
        "createdAt": "",
        "updatedAt": "",
        "offer": {
          "offerId": "",
          "amount": 1,
          "timeline": "",
          "description": "",
          "status": "pending",
          "createdAt": "",
          "expiresAt": "",
          "canCancel": true
        },
        "contractor": {
          "_id": "",
          "full_name": "",
          "email": "",
          "profile_img": "",
          "phone": "",
          "skills": [
            ""
          ]
        }
      }
    ],
    "total": 1,
    "page": 1,
    "limit": 1,
    "totalPages": 1
  }
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 403 Forbidden - Customer only

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Get engaged jobs with offer details for management

- **Method:** `GET`
- **Path:** `/api/job/engaged`
- **Tags:** job

Get all jobs where the customer has received applications but NO active offers (pending/accepted). These jobs are available for sending new offers. Jobs with rejected or expired offers ARE included. Each job includes detailed engagement statistics, current pending offer details (with offerId for cancellation), and complete offer history. The 'currentOffer.offerId' field enables frontend to implement offer cancellation functionality.

#### Responses

##### Status: 200 Engaged jobs retrieved successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`jobs` (required)**

    `array`

    **Items:**

    - **`_id` (required)**

      `string`

    - **`createdAt` (required)**

      `string`

    - **`customer` (required)**

      `string` — Customer ID

    - **`job` (required)**

      `object`

      - **`_id` (required)**

        `string` — Job ID

      - **`address` (required)**

        `string` — Job address

      - **`budget` (required)**

        `number` — Job budget

      - **`category` (required)**

        `array` — Array of category IDs

        **Items:**

        `string`

      - **`coverImg` (required)**

        `string`, format: `uri` — Cover image URL

      - **`customerId` (required)**

        `string` — Customer ID who posted the job

      - **`date` (required)**

        `object` — Job date

      - **`description` (required)**

        `string` — Job description

      - **`location` (required)**

        `string` — Job location ID

      - **`status` (required)**

        `string`, possible values: `"open", "in_progress", "completed", "cancelled"` — Job status

      - **`title` (required)**

        `string` — Job title

      - **`contractorId`**

        `string` — Assigned contractor ID

      - **`createdAt`**

        `string` — Creation date

      - **`isApplied`**

        `boolean` — Indicates if the authenticated contractor has applied to this job

      - **`updatedAt`**

        `string` — Last update date

    - **`sender` (required)**

      `string`

    - **`status` (required)**

      `string`

    - **`updatedAt` (required)**

      `string`

    - **`contractor`**

      `object` — Contractor details

  - **`limit` (required)**

    `number`

  - **`page` (required)**

    `number`

  - **`total` (required)**

    `number`

  - **`totalPages` (required)**

    `number`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "jobs": [
      {
        "_id": "",
        "job": {
          "_id": "",
          "title": "",
          "category": [
            ""
          ],
          "description": "",
          "location": "",
          "address": "",
          "budget": 1,
          "date": "",
          "coverImg": "",
          "customerId": "",
          "contractorId": "",
          "status": "open",
          "isApplied": true,
          "createdAt": "",
          "updatedAt": ""
        },
        "customer": "",
        "contractor": null,
        "status": "",
        "sender": "",
        "createdAt": "",
        "updatedAt": ""
      }
    ],
    "total": 1,
    "page": 1,
    "limit": 1,
    "totalPages": 1
  }
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 403 Forbidden - Customer only

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Get contractor's current jobs (offered/assigned)

- **Method:** `GET`
- **Path:** `/api/job/my/jobs-status`
- **Tags:** job

Get contractor's current work pipeline showing jobs where they have received offers or are currently assigned. Returns jobs based on invite-application status: 'offered' (waiting for contractor to accept/reject) or 'assigned' (contractor is working on the job). Each result includes the invite-application details, full job information with populated categories/locations/customer, and customer contact details. Supports optional status filtering and pagination. Default shows both 'offered' and 'assigned' jobs sorted by creation date (newest first).

#### Responses

##### Status: 200 Current jobs retrieved successfully with invite-application, job, and customer details

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`jobs` (required)**

    `array`

    **Items:**

    - **`customer` (required)**

      `object` — Customer contact information

      - **`_id` (required)**

        `string`

      - **`email` (required)**

        `string`

      - **`full_name` (required)**

        `string`

      - **`phone`**

        `string`

      - **`profile_img`**

        `string`

    - **`inviteApplication` (required)**

      `object`

      - **`_id` (required)**

        `string` — Invite-application ID

      - **`createdAt` (required)**

        `string` — When created

      - **`sender` (required)**

        `string` — Who initiated (customer or contractor)

      - **`status` (required)**

        `string`, possible values: `"offered", "assigned"` — offered: waiting for contractor response | assigned: contractor is working

      - **`updatedAt` (required)**

        `string` — Last updated

      - **`offerId`**

        `string` — Associated offer ID if exists

    - **`job` (required)**

      `object` — Full job details with populated fields

      - **`_id` (required)**

        `string`

      - **`address` (required)**

        `string`

      - **`budget` (required)**

        `number`

      - **`coverImg` (required)**

        `string`

      - **`createdAt` (required)**

        `string`

      - **`date` (required)**

        `string`

      - **`description` (required)**

        `string`

      - **`status` (required)**

        `string`

      - **`title` (required)**

        `string`

      - **`updatedAt` (required)**

        `string`

      - **`category`**

        `object` — Populated category details

      - **`customerId`**

        `object` — Populated customer details

      - **`location`**

        `object` — Populated location details

  - **`pagination` (required)**

    `object`

    - **`currentPage` (required)**

      `number`

    - **`hasNextPage` (required)**

      `boolean`

    - **`hasPrevPage` (required)**

      `boolean`

    - **`limit` (required)**

      `number`

    - **`totalCount` (required)**

      `number`

    - **`totalPages` (required)**

      `number`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "jobs": [
      {
        "inviteApplication": {
          "_id": "",
          "status": "offered",
          "sender": "",
          "offerId": "",
          "createdAt": "",
          "updatedAt": ""
        },
        "job": {
          "_id": "",
          "title": "",
          "description": "",
          "budget": 1,
          "status": "",
          "category": null,
          "location": null,
          "customerId": null,
          "coverImg": "",
          "address": "",
          "date": "",
          "createdAt": "",
          "updatedAt": ""
        },
        "customer": {
          "_id": "",
          "full_name": "",
          "email": "",
          "phone": "",
          "profile_img": ""
        }
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 1,
      "totalCount": 1,
      "limit": 1,
      "hasNextPage": true,
      "hasPrevPage": true
    }
  }
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 403 Forbidden - Contractor only

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Complete job and release payment

- **Method:** `POST`
- **Path:** `/api/job/{id}/complete`
- **Tags:** job

Customer marks job as complete. Service fee (20%) is transferred to admin. Contractor payout (80%) is transferred to contractor. Escrow is released. Job status changes to 'completed'.

#### Responses

##### Status: 200 Job completed successfully. Payment released to contractor.

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`job` (required)**

    `object`

    - **`_id` (required)**

      `string`

    - **`completedAt` (required)**

      `string`

    - **`status` (required)**

      `string`

  - **`payment` (required)**

    `object`

    - **`adminCommission` (required)**

      `number`

    - **`contractorPayout` (required)**

      `number`

    - **`serviceFee` (required)**

      `number`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "job": {
      "_id": "",
      "status": "",
      "completedAt": ""
    },
    "payment": {
      "serviceFee": 1,
      "contractorPayout": 1,
      "adminCommission": 1
    }
  }
}
```

##### Status: 400 Bad request - Job not in progress or offer not found

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 403 Forbidden - Customer only

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 404 Job not found

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Update job status

- **Method:** `PATCH`
- **Path:** `/api/job/{id}/status`
- **Tags:** job

Update job status. Valid transitions: open→assigned/cancelled, assigned→in\_progress/cancelled, in\_progress→completed/cancelled. Customer or assigned contractor can update.

#### Request Body

##### Content-Type: application/json

- **`status` (required)**

  `string`, possible values: `"assigned", "in_progress", "completed", "cancelled"` — New job status

**Example:**

```json
{
  "status": "assigned"
}
```

#### Responses

##### Status: 200 Job status updated successfully

###### Content-Type: application/json

- **`_id` (required)**

  `string`

- **`completedAt` (required)**

  `string`

- **`status` (required)**

  `string`

- **`title` (required)**

  `string`

**Example:**

```json
{
  "_id": "",
  "title": "",
  "status": "",
  "completedAt": ""
}
```

##### Status: 400 Bad request - Invalid status transition

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 403 Forbidden - Not authorized to update this job

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 404 Job not found

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Cancel job

- **Method:** `POST`
- **Path:** `/api/job/{id}/cancel`
- **Tags:** job

Cancel a job with reason. If offer exists, full refund is issued to customer. Cannot cancel completed jobs. Customer or Admin only.

#### Request Body

##### Content-Type: application/json

- **`reason` (required)**

  `string` — Reason for cancellation

**Example:**

```json
{
  "reason": ""
}
```

#### Responses

##### Status: 200 Job cancelled successfully. Refund issued if applicable.

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`job` (required)**

    `object`

    - **`_id` (required)**

      `string`

    - **`cancellationReason` (required)**

      `string`

    - **`cancelledAt` (required)**

      `string`

    - **`status` (required)**

      `string`

  - **`refundAmount` (required)**

    `number`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "job": {
      "_id": "",
      "status": "",
      "cancelledAt": "",
      "cancellationReason": ""
    },
    "refundAmount": 1
  }
}
```

##### Status: 400 Bad request - Cannot cancel completed job

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 403 Forbidden - Customer or Admin only

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 404 Job not found

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Retrieve all locations

- **Method:** `GET`
- **Path:** `/api/location`
- **Tags:** location

Get all locations with optional search and pagination

#### Responses

##### Status: 200 Locations retrieved successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`limit` (required)**

    `number`

  - **`locations` (required)**

    `array`

    **Items:**

    - **`_id` (required)**

      `string` — Location ID

    - **`coordinates` (required)**

      `object` — Geographic coordinates

      - **`lat` (required)**

        `number` — Latitude

      - **`lng` (required)**

        `number` — Longitude

    - **`name` (required)**

      `string` — City name

    - **`state` (required)**

      `string` — State code

    - **`createdAt`**

      `string | null`, format: `date-time` — Creation timestamp

    - **`updatedAt`**

      `string | null`, format: `date-time` — Last update timestamp

  - **`page` (required)**

    `number`

  - **`total` (required)**

    `number`

  - **`totalPages` (required)**

    `number`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": {
    "locations": [
      {
        "_id": "",
        "name": "",
        "state": "",
        "coordinates": {
          "lat": 1,
          "lng": 1
        },
        "createdAt": null,
        "updatedAt": null
      }
    ],
    "total": 1,
    "page": 1,
    "limit": 1,
    "totalPages": 1
  }
}
```

##### Status: 400 Invalid query parameters

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Create location

- **Method:** `POST`
- **Path:** `/api/location`
- **Tags:** location

Create a new location

#### Request Body

##### Content-Type: application/json

- **`coordinates` (required)**

  `object` — Geographic coordinates

  - **`lat` (required)**

    `number` — Latitude

  - **`lng` (required)**

    `number` — Longitude

- **`name` (required)**

  `string` — City name

- **`state` (required)**

  `string` — State code

**Example:**

```json
{
  "name": "",
  "state": "",
  "coordinates": {
    "lat": 1,
    "lng": 1
  }
}
```

#### Responses

##### Status: 201 Location created successfully

###### Content-Type: application/json

- **`data` (required)**

  `object | null`

  - **`_id` (required)**

    `string` — Location ID

  - **`coordinates` (required)**

    `object` — Geographic coordinates

    - **`lat` (required)**

      `number` — Latitude

    - **`lng` (required)**

      `number` — Longitude

  - **`name` (required)**

    `string` — City name

  - **`state` (required)**

    `string` — State code

  - **`createdAt`**

    `string | null`, format: `date-time` — Creation timestamp

  - **`updatedAt`**

    `string | null`, format: `date-time` — Last update timestamp

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": {
    "_id": "",
    "name": "",
    "state": "",
    "coordinates": {
      "lat": 1,
      "lng": 1
    },
    "createdAt": null,
    "updatedAt": null
  }
}
```

##### Status: 400 Validation error or location already exists

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Retrieve location by ID

- **Method:** `GET`
- **Path:** `/api/location/{id}`
- **Tags:** location

Get a location by ID

#### Responses

##### Status: 200 Location retrieved successfully

###### Content-Type: application/json

- **`data` (required)**

  `object | null`

  - **`_id` (required)**

    `string` — Location ID

  - **`coordinates` (required)**

    `object` — Geographic coordinates

    - **`lat` (required)**

      `number` — Latitude

    - **`lng` (required)**

      `number` — Longitude

  - **`name` (required)**

    `string` — City name

  - **`state` (required)**

    `string` — State code

  - **`createdAt`**

    `string | null`, format: `date-time` — Creation timestamp

  - **`updatedAt`**

    `string | null`, format: `date-time` — Last update timestamp

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": {
    "_id": "",
    "name": "",
    "state": "",
    "coordinates": {
      "lat": 1,
      "lng": 1
    },
    "createdAt": null,
    "updatedAt": null
  }
}
```

##### Status: 404 Location not found

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Update location

- **Method:** `PUT`
- **Path:** `/api/location/{id}`
- **Tags:** location

Update a location

#### Request Body

##### Content-Type: application/json

- **`coordinates`**

  `object`

  - **`lat` (required)**

    `number` — Latitude

  - **`lng` (required)**

    `number` — Longitude

- **`name`**

  `string`

- **`state`**

  `string`

**Example:**

```json
{
  "name": "",
  "state": "",
  "coordinates": {
    "lat": 1,
    "lng": 1
  }
}
```

#### Responses

##### Status: 200 Location updated successfully

###### Content-Type: application/json

- **`data` (required)**

  `object | null`

  - **`_id` (required)**

    `string` — Location ID

  - **`coordinates` (required)**

    `object` — Geographic coordinates

    - **`lat` (required)**

      `number` — Latitude

    - **`lng` (required)**

      `number` — Longitude

  - **`name` (required)**

    `string` — City name

  - **`state` (required)**

    `string` — State code

  - **`createdAt`**

    `string | null`, format: `date-time` — Creation timestamp

  - **`updatedAt`**

    `string | null`, format: `date-time` — Last update timestamp

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": {
    "_id": "",
    "name": "",
    "state": "",
    "coordinates": {
      "lat": 1,
      "lng": 1
    },
    "createdAt": null,
    "updatedAt": null
  }
}
```

##### Status: 400 Validation error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 404 Location not found

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Delete location

- **Method:** `DELETE`
- **Path:** `/api/location/{id}`
- **Tags:** location

Delete a location

#### Responses

##### Status: 200 Location deleted successfully

###### Content-Type: application/json

- **`data` (required)**

  `object | null`

  - **`_id` (required)**

    `string` — Location ID

  - **`coordinates` (required)**

    `object` — Geographic coordinates

    - **`lat` (required)**

      `number` — Latitude

    - **`lng` (required)**

      `number` — Longitude

  - **`name` (required)**

    `string` — City name

  - **`state` (required)**

    `string` — State code

  - **`createdAt`**

    `string | null`, format: `date-time` — Creation timestamp

  - **`updatedAt`**

    `string | null`, format: `date-time` — Last update timestamp

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": {
    "_id": "",
    "name": "",
    "state": "",
    "coordinates": {
      "lat": 1,
      "lng": 1
    },
    "createdAt": null,
    "updatedAt": null
  }
}
```

##### Status: 404 Location not found

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Register FCM token

- **Method:** `POST`
- **Path:** `/api/notification/register-token`
- **Tags:** notification

Register FCM device token for push notifications

#### Request Body

##### Content-Type: application/json

- **`deviceId` (required)**

  `string` — Device ID

- **`deviceType` (required)**

  `string`, possible values: `"android", "ios"` — Device type

- **`token` (required)**

  `string` — FCM device token

**Example:**

```json
{
  "token": "",
  "deviceId": "",
  "deviceType": "android"
}
```

#### Responses

##### Status: 200 Token registered successfully

###### Content-Type: application/json

- **`data` (required)**

  `object | null`

  - **`deviceId` (required)**

    `string`

  - **`deviceType` (required)**

    `string`, possible values: `"android", "ios"`

  - **`token` (required)**

    `string`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "token": "",
    "deviceId": "",
    "deviceType": "android"
  }
}
```

##### Status: 400 Validation error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Unregister FCM token

- **Method:** `DELETE`
- **Path:** `/api/notification/unregister-token`
- **Tags:** notification

Unregister FCM device token

#### Request Body

##### Content-Type: application/json

- **`token` (required)**

  `string` — FCM device token

**Example:**

```json
{
  "token": ""
}
```

#### Responses

##### Status: 200 Token unregistered successfully

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Get user notifications

- **Method:** `GET`
- **Path:** `/api/notification`
- **Tags:** notification

Get all notifications for authenticated user

#### Responses

##### Status: 200 Notifications retrieved successfully

###### Content-Type: application/json

- **`data` (required)**

  `array`

  **Items:**

  - **`_id` (required)**

    `string` — Notification ID

  - **`body` (required)**

    `string` — Notification body

  - **`isRead` (required)**

    `boolean` — Read status

  - **`isSent` (required)**

    `boolean` — Sent status

  - **`title` (required)**

    `string` — Notification title

  - **`type` (required)**

    `string`, possible values: `"job_posted", "job_application", "job_invite", "job_invite_accept", "job_request", "sent_offer", "accept_offer", "job_completed", "review_submitted", "offer_reject", "general"` — Notification type

  - **`userId` (required)**

    `string` — User ID

  - **`createdAt`**

    `string`, format: `date-time` — Creation timestamp

  - **`data`**

    `object` — Additional data

  - **`readAt`**

    `string`, format: `date-time` — Read timestamp

  - **`sentAt`**

    `string`, format: `date-time` — Sent timestamp

  - **`updatedAt`**

    `string`, format: `date-time` — Update timestamp

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": [
    {
      "_id": "",
      "userId": "",
      "title": "",
      "body": "",
      "type": "job_posted",
      "data": {
        "additionalProperty": null
      },
      "isRead": true,
      "isSent": true,
      "sentAt": "",
      "readAt": "",
      "createdAt": "",
      "updatedAt": ""
    }
  ]
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Mark notifications as read

- **Method:** `POST`
- **Path:** `/api/notification/mark-read`
- **Tags:** notification

Mark one or more notifications as read

#### Request Body

##### Content-Type: application/json

- **`notificationIds` (required)**

  `array` — Array of notification IDs to mark as read

  **Items:**

  `string`

**Example:**

```json
{
  "notificationIds": [
    ""
  ]
}
```

#### Responses

##### Status: 200 Notifications marked as read

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Delete notification

- **Method:** `DELETE`
- **Path:** `/api/notification/{id}`
- **Tags:** notification

Delete a notification

#### Responses

##### Status: 200 Notification deleted successfully

###### Content-Type: application/json

- **`data` (required)**

  `object | null`

  - **`_id` (required)**

    `string` — Notification ID

  - **`body` (required)**

    `string` — Notification body

  - **`isRead` (required)**

    `boolean` — Read status

  - **`isSent` (required)**

    `boolean` — Sent status

  - **`title` (required)**

    `string` — Notification title

  - **`type` (required)**

    `string`, possible values: `"job_posted", "job_application", "job_invite", "job_invite_accept", "job_request", "sent_offer", "accept_offer", "job_completed", "review_submitted", "offer_reject", "general"` — Notification type

  - **`userId` (required)**

    `string` — User ID

  - **`createdAt`**

    `string`, format: `date-time` — Creation timestamp

  - **`data`**

    `object` — Additional data

  - **`readAt`**

    `string`, format: `date-time` — Read timestamp

  - **`sentAt`**

    `string`, format: `date-time` — Sent timestamp

  - **`updatedAt`**

    `string`, format: `date-time` — Update timestamp

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "_id": "",
    "userId": "",
    "title": "",
    "body": "",
    "type": "job_posted",
    "data": {
      "additionalProperty": null
    },
    "isRead": true,
    "isSent": true,
    "sentAt": "",
    "readAt": "",
    "createdAt": "",
    "updatedAt": ""
  }
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 404 Notification not found

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Send notification

- **Method:** `POST`
- **Path:** `/api/notification/send`
- **Tags:** notification

Send push notification to a user (Admin only)

#### Request Body

##### Content-Type: application/json

- **`data`**

  `object` — Additional data

**Example:**

```json
{
  "data": {
    "additionalProperty": null
  }
}
```

#### Responses

##### Status: 200 Notification sent successfully

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 400 Validation error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 403 Forbidden - Admin only

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Send offer to contractor (from application)

- **Method:** `POST`
- **Path:** `/api/offer/application/{applicationId}/send`
- **Tags:** offer

Customer sends an offer to a contractor based on their job application. Money is moved to escrow. Only one offer per job is allowed. Customer pays job amount + 5% platform fee.

#### Request Body

##### Content-Type: application/json

- **`amount` (required)**

  `number` — Job budget amount

- **`timeline` (required)**

  `string` — Expected completion time

- **`description`**

  `string` — Work description

**Example:**

```json
{
  "amount": 1,
  "timeline": "",
  "description": ""
}
```

#### Responses

##### Status: 201 Offer sent successfully. Money moved to escrow. Contractor notified.

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`amounts` (required)**

    `object`

    - **`adminTotal` (required)**

      `number`

    - **`contractorPayout` (required)**

      `number`

    - **`jobBudget` (required)**

      `number`

    - **`platformFee` (required)**

      `number`

    - **`serviceFee` (required)**

      `number`

    - **`totalCharge` (required)**

      `number`

  - **`offer` (required)**

    `object`

    - **`_id` (required)**

      `string`

    - **`amount` (required)**

      `number`

    - **`application` (required)**

      `string`

    - **`contractor` (required)**

      `string`

    - **`contractorPayout` (required)**

      `number`

    - **`createdAt` (required)**

      `string`

    - **`customer` (required)**

      `string`

    - **`description` (required)**

      `string`

    - **`job` (required)**

      `string`

    - **`platformFee` (required)**

      `number`

    - **`serviceFee` (required)**

      `number`

    - **`status` (required)**

      `string`, possible values: `"pending", "accepted", "rejected", "cancelled", "completed", "expired"`

    - **`timeline` (required)**

      `string`

    - **`totalCharge` (required)**

      `number`

    - **`updatedAt` (required)**

      `string`

    - **`acceptedAt`**

      `string`

    - **`expiresAt`**

      `string`

    - **`rejectedAt`**

      `string`

    - **`rejectionReason`**

      `string`

  - **`walletBalance` (required)**

    `number`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "offer": {
      "_id": "",
      "job": "",
      "customer": "",
      "contractor": "",
      "application": "",
      "amount": 1,
      "platformFee": 1,
      "serviceFee": 1,
      "contractorPayout": 1,
      "totalCharge": 1,
      "timeline": "",
      "description": "",
      "status": "pending",
      "expiresAt": "",
      "acceptedAt": "",
      "rejectedAt": "",
      "rejectionReason": "",
      "createdAt": "",
      "updatedAt": ""
    },
    "walletBalance": 1,
    "amounts": {
      "jobBudget": 1,
      "platformFee": 1,
      "serviceFee": 1,
      "contractorPayout": 1,
      "totalCharge": 1,
      "adminTotal": 1
    }
  }
}
```

##### Status: 400 Bad request - Insufficient balance, job not open, or offer already exists

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 403 Forbidden - not job owner

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 404 Application not found

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

### Send offer to contractor (from invite)

- **Method:** `POST`
- **Path:** `/api/offer/invite/{inviteId}/send`
- **Tags:** offer

Customer sends an offer to a contractor based on an accepted job invite. Money is moved to escrow. Only one offer per job is allowed. Customer pays job amount + 5% platform fee. Invite must be in 'accepted' status.

#### Request Body

##### Content-Type: application/json

- **`amount` (required)**

  `number` — Job budget amount

- **`timeline` (required)**

  `string` — Expected completion time

- **`description`**

  `string` — Work description

**Example:**

```json
{
  "amount": 1,
  "timeline": "",
  "description": ""
}
```

#### Responses

##### Status: 201 Offer sent successfully. Money moved to escrow. Contractor notified.

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`amounts` (required)**

    `object`

    - **`adminTotal` (required)**

      `number`

    - **`contractorPayout` (required)**

      `number`

    - **`jobBudget` (required)**

      `number`

    - **`platformFee` (required)**

      `number`

    - **`serviceFee` (required)**

      `number`

    - **`totalCharge` (required)**

      `number`

  - **`offer` (required)**

    `object`

    - **`_id` (required)**

      `string`

    - **`amount` (required)**

      `number`

    - **`application` (required)**

      `string`

    - **`contractor` (required)**

      `string`

    - **`contractorPayout` (required)**

      `number`

    - **`createdAt` (required)**

      `string`

    - **`customer` (required)**

      `string`

    - **`description` (required)**

      `string`

    - **`job` (required)**

      `string`

    - **`platformFee` (required)**

      `number`

    - **`serviceFee` (required)**

      `number`

    - **`status` (required)**

      `string`, possible values: `"pending", "accepted", "rejected", "cancelled", "completed", "expired"`

    - **`timeline` (required)**

      `string`

    - **`totalCharge` (required)**

      `number`

    - **`updatedAt` (required)**

      `string`

    - **`acceptedAt`**

      `string`

    - **`expiresAt`**

      `string`

    - **`rejectedAt`**

      `string`

    - **`rejectionReason`**

      `string`

  - **`walletBalance` (required)**

    `number`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "offer": {
      "_id": "",
      "job": "",
      "customer": "",
      "contractor": "",
      "application": "",
      "amount": 1,
      "platformFee": 1,
      "serviceFee": 1,
      "contractorPayout": 1,
      "totalCharge": 1,
      "timeline": "",
      "description": "",
      "status": "pending",
      "expiresAt": "",
      "acceptedAt": "",
      "rejectedAt": "",
      "rejectionReason": "",
      "createdAt": "",
      "updatedAt": ""
    },
    "walletBalance": 1,
    "amounts": {
      "jobBudget": 1,
      "platformFee": 1,
      "serviceFee": 1,
      "contractorPayout": 1,
      "totalCharge": 1,
      "adminTotal": 1
    }
  }
}
```

##### Status: 400 Bad request - Insufficient balance, job not open, invite not accepted, or offer already exists

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 403 Forbidden - not job owner

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 404 Invite not found

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

### Send direct offer to contractor (via job ID)

- **Method:** `POST`
- **Path:** `/api/offer/direct/{jobId}/send`
- **Tags:** offer

Customer sends a direct offer to a contractor via job ID. Simplified flow without requiring prior application or invite. Customer specifies the contractor ID directly. Money is moved to escrow. Only one offer per job is allowed. Customer pays job amount + 5% platform fee.

#### Request Body

##### Content-Type: application/json

- **`amount` (required)**

  `number` — Job budget amount

- **`contractorId` (required)**

  `string` — Contractor user ID

- **`timeline` (required)**

  `string` — Expected completion time

- **`description`**

  `string` — Work description

**Example:**

```json
{
  "contractorId": "",
  "amount": 1,
  "timeline": "",
  "description": ""
}
```

#### Responses

##### Status: 201 Offer sent successfully. Money moved to escrow. Contractor notified.

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`amounts` (required)**

    `object`

    - **`adminTotal` (required)**

      `number`

    - **`contractorPayout` (required)**

      `number`

    - **`jobBudget` (required)**

      `number`

    - **`platformFee` (required)**

      `number`

    - **`serviceFee` (required)**

      `number`

    - **`totalCharge` (required)**

      `number`

  - **`offer` (required)**

    `object`

    - **`_id` (required)**

      `string`

    - **`amount` (required)**

      `number`

    - **`application` (required)**

      `string`

    - **`contractor` (required)**

      `string`

    - **`contractorPayout` (required)**

      `number`

    - **`createdAt` (required)**

      `string`

    - **`customer` (required)**

      `string`

    - **`description` (required)**

      `string`

    - **`job` (required)**

      `string`

    - **`platformFee` (required)**

      `number`

    - **`serviceFee` (required)**

      `number`

    - **`status` (required)**

      `string`, possible values: `"pending", "accepted", "rejected", "cancelled", "completed", "expired"`

    - **`timeline` (required)**

      `string`

    - **`totalCharge` (required)**

      `number`

    - **`updatedAt` (required)**

      `string`

    - **`acceptedAt`**

      `string`

    - **`expiresAt`**

      `string`

    - **`rejectedAt`**

      `string`

    - **`rejectionReason`**

      `string`

  - **`walletBalance` (required)**

    `number`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "offer": {
      "_id": "",
      "job": "",
      "customer": "",
      "contractor": "",
      "application": "",
      "amount": 1,
      "platformFee": 1,
      "serviceFee": 1,
      "contractorPayout": 1,
      "totalCharge": 1,
      "timeline": "",
      "description": "",
      "status": "pending",
      "expiresAt": "",
      "acceptedAt": "",
      "rejectedAt": "",
      "rejectionReason": "",
      "createdAt": "",
      "updatedAt": ""
    },
    "walletBalance": 1,
    "amounts": {
      "jobBudget": 1,
      "platformFee": 1,
      "serviceFee": 1,
      "contractorPayout": 1,
      "totalCharge": 1,
      "adminTotal": 1
    }
  }
}
```

##### Status: 400 Bad request - Insufficient balance, job not open, contractor not found, or offer already exists

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 403 Forbidden - not job owner

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 404 Job or contractor not found

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

### Accept offer

- **Method:** `POST`
- **Path:** `/api/offer/{offerId}/accept`
- **Tags:** offer

Contractor accepts an offer. Platform fee (5%) is transferred to admin. Job status changes to 'assigned'. All other applications are rejected.

#### Responses

##### Status: 200 Offer accepted successfully. Platform fee transferred. Job assigned.

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`job` (required)**

    `object`

    - **`_id` (required)**

      `string`

    - **`assignedAt` (required)**

      `string`

    - **`contractorId` (required)**

      `string`

    - **`status` (required)**

      `string`

  - **`offer` (required)**

    `object`

    - **`_id` (required)**

      `string`

    - **`amount` (required)**

      `number`

    - **`application` (required)**

      `string`

    - **`contractor` (required)**

      `string`

    - **`contractorPayout` (required)**

      `number`

    - **`createdAt` (required)**

      `string`

    - **`customer` (required)**

      `string`

    - **`description` (required)**

      `string`

    - **`job` (required)**

      `string`

    - **`platformFee` (required)**

      `number`

    - **`serviceFee` (required)**

      `number`

    - **`status` (required)**

      `string`, possible values: `"pending", "accepted", "rejected", "cancelled", "completed", "expired"`

    - **`timeline` (required)**

      `string`

    - **`totalCharge` (required)**

      `number`

    - **`updatedAt` (required)**

      `string`

    - **`acceptedAt`**

      `string`

    - **`expiresAt`**

      `string`

    - **`rejectedAt`**

      `string`

    - **`rejectionReason`**

      `string`

  - **`payment` (required)**

    `object`

    - **`contractorPayout` (required)**

      `number`

    - **`platformFee` (required)**

      `number`

    - **`serviceFee` (required)**

      `number`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "offer": {
      "_id": "",
      "job": "",
      "customer": "",
      "contractor": "",
      "application": "",
      "amount": 1,
      "platformFee": 1,
      "serviceFee": 1,
      "contractorPayout": 1,
      "totalCharge": 1,
      "timeline": "",
      "description": "",
      "status": "pending",
      "expiresAt": "",
      "acceptedAt": "",
      "rejectedAt": "",
      "rejectionReason": "",
      "createdAt": "",
      "updatedAt": ""
    },
    "job": {
      "_id": "",
      "status": "",
      "contractorId": "",
      "assignedAt": ""
    },
    "payment": {
      "platformFee": 1,
      "serviceFee": 1,
      "contractorPayout": 1
    }
  }
}
```

##### Status: 400 Bad request - Offer not found or already processed

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 403 Forbidden - not offer recipient

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

### Reject offer

- **Method:** `POST`
- **Path:** `/api/offer/{offerId}/reject`
- **Tags:** offer

Contractor rejects an offer with a reason. Full refund (job amount + platform fee) is returned to customer wallet. Application status is reset.

#### Request Body

##### Content-Type: application/json

- **`reason` (required)**

  `string` — Rejection reason

**Example:**

```json
{
  "reason": ""
}
```

#### Responses

##### Status: 200 Offer rejected successfully. Full refund issued to customer.

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`offer` (required)**

    `object`

    - **`_id` (required)**

      `string`

    - **`amount` (required)**

      `number`

    - **`application` (required)**

      `string`

    - **`contractor` (required)**

      `string`

    - **`contractorPayout` (required)**

      `number`

    - **`createdAt` (required)**

      `string`

    - **`customer` (required)**

      `string`

    - **`description` (required)**

      `string`

    - **`job` (required)**

      `string`

    - **`platformFee` (required)**

      `number`

    - **`serviceFee` (required)**

      `number`

    - **`status` (required)**

      `string`, possible values: `"pending", "accepted", "rejected", "cancelled", "completed", "expired"`

    - **`timeline` (required)**

      `string`

    - **`totalCharge` (required)**

      `number`

    - **`updatedAt` (required)**

      `string`

    - **`acceptedAt`**

      `string`

    - **`expiresAt`**

      `string`

    - **`rejectedAt`**

      `string`

    - **`rejectionReason`**

      `string`

  - **`refundAmount` (required)**

    `number`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "offer": {
      "_id": "",
      "job": "",
      "customer": "",
      "contractor": "",
      "application": "",
      "amount": 1,
      "platformFee": 1,
      "serviceFee": 1,
      "contractorPayout": 1,
      "totalCharge": 1,
      "timeline": "",
      "description": "",
      "status": "pending",
      "expiresAt": "",
      "acceptedAt": "",
      "rejectedAt": "",
      "rejectionReason": "",
      "createdAt": "",
      "updatedAt": ""
    },
    "refundAmount": 1
  }
}
```

##### Status: 400 Bad request - Offer not found or already processed

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 403 Forbidden - not offer recipient

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

### Cancel pending offer

- **Method:** `POST`
- **Path:** `/api/offer/cancel`
- **Tags:** offer

Customer cancels a pending offer if contractor hasn't responded yet. Full refund (job amount + platform fee) is returned to customer wallet. Application/Invite status is reset to allow sending a new offer. Only pending offers can be cancelled. Requires customer ID, contractor ID, and job ID to identify the offer.

#### Request Body

##### Content-Type: application/json

- **`contractor` (required)**

  `string` — Contractor user ID

- **`customer` (required)**

  `string` — Customer user ID

- **`jobId` (required)**

  `string` — Job ID

- **`reason`**

  `string` — Reason for cancelling the offer

**Example:**

```json
{
  "customer": "",
  "contractor": "",
  "jobId": "",
  "reason": ""
}
```

#### Responses

##### Status: 200 Offer cancelled successfully. Full refund issued to customer wallet.

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`message` (required)**

    `string`

  - **`offer` (required)**

    `object`

    - **`_id` (required)**

      `string`

    - **`cancelledAt` (required)**

      `string`

    - **`status` (required)**

      `string`

    - **`cancellationReason`**

      `string`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "offer": {
      "_id": "",
      "status": "",
      "cancelledAt": "",
      "cancellationReason": ""
    },
    "message": ""
  }
}
```

##### Status: 400 Bad request - Offer not pending, already processed, or insufficient escrow balance

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 403 Forbidden - only the customer who sent the offer can cancel it

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 404 Offer or wallet not found

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

### Get all reviews

- **Method:** `GET`
- **Path:** `/api/review`
- **Tags:** review

Get all reviews with optional filters (sender, receiver, job, rating range) and pagination

#### Responses

##### Status: 200 Reviews retrieved successfully with pagination and average rating

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`limit` (required)**

    `number` — Items per page

  - **`page` (required)**

    `number` — Current page

  - **`reviews` (required)**

    `array`

    **Items:**

    - **`_id` (required)**

      `string` — Review ID

    - **`rating` (required)**

      `number` — Rating from 0 to 5

    - **`rating_message` (required)**

      `string` — Review message/comment

    - **`receiverId` (required)**

      `string` — User being reviewed

    - **`senderId` (required)**

      `string` — User who wrote the review

    - **`createdAt`**

      `string | null`, format: `date-time` — Creation date

    - **`job_id`**

      `string` — Related job ID (optional)

    - **`updatedAt`**

      `string | null`, format: `date-time` — Last update date

  - **`total` (required)**

    `number` — Total number of reviews

  - **`totalPages` (required)**

    `number` — Total pages

  - **`average`**

    `number` — Average rating (0-5)

  - **`ratingDistribution`**

    `object` — Distribution of ratings (count per star)

    - **`1` (required)**

      `number`

    - **`2` (required)**

      `number`

    - **`3` (required)**

      `number`

    - **`4` (required)**

      `number`

    - **`5` (required)**

      `number`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": {
    "reviews": [
      {
        "_id": "",
        "senderId": "",
        "receiverId": "",
        "job_id": "",
        "rating": 0,
        "rating_message": "",
        "createdAt": null,
        "updatedAt": null
      }
    ],
    "total": 1,
    "page": 1,
    "limit": 1,
    "totalPages": 1,
    "average": 1,
    "ratingDistribution": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 1,
      "5": 1
    }
  }
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Create review

- **Method:** `POST`
- **Path:** `/api/review`
- **Tags:** review

Create a new review for another user. Users cannot review themselves or review the same user twice for the same job.

#### Request Body

##### Content-Type: application/json

- **`rating` (required)**

  `number` — Rating from 0 to 5

- **`rating_message` (required)**

  `string` — Review message/comment

- **`receiverId` (required)**

  `string` — User being reviewed (MongoDB ID)

- **`job_id`**

  `string` — Related job ID (optional)

**Example:**

```json
{
  "receiverId": "",
  "job_id": "",
  "rating": 0,
  "rating_message": ""
}
```

#### Responses

##### Status: 201 Review created successfully

###### Content-Type: application/json

- **`data` (required)**

  `object | null`

  - **`_id` (required)**

    `string` — Review ID

  - **`rating` (required)**

    `number` — Rating from 0 to 5

  - **`rating_message` (required)**

    `string` — Review message/comment

  - **`receiverId` (required)**

    `string` — User being reviewed

  - **`senderId` (required)**

    `string` — User who wrote the review

  - **`createdAt`**

    `string | null`, format: `date-time` — Creation date

  - **`job_id`**

    `string` — Related job ID (optional)

  - **`updatedAt`**

    `string | null`, format: `date-time` — Last update date

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": {
    "_id": "",
    "senderId": "",
    "receiverId": "",
    "job_id": "",
    "rating": 0,
    "rating_message": "",
    "createdAt": null,
    "updatedAt": null
  }
}
```

##### Status: 400 Bad request - Cannot review yourself or already reviewed this user for this job

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 404 User or job not found

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Get user reviews

- **Method:** `GET`
- **Path:** `/api/review/user/{userId}`
- **Tags:** review

Get all reviews for a specific user (as receiver) with pagination and average rating calculation

#### Responses

##### Status: 200 User reviews retrieved successfully with average rating

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`limit` (required)**

    `number` — Items per page

  - **`page` (required)**

    `number` — Current page

  - **`reviews` (required)**

    `array`

    **Items:**

    - **`_id` (required)**

      `string` — Review ID

    - **`rating` (required)**

      `number` — Rating from 0 to 5

    - **`rating_message` (required)**

      `string` — Review message/comment

    - **`receiverId` (required)**

      `string` — User being reviewed

    - **`senderId` (required)**

      `string` — User who wrote the review

    - **`createdAt`**

      `string | null`, format: `date-time` — Creation date

    - **`job_id`**

      `string` — Related job ID (optional)

    - **`updatedAt`**

      `string | null`, format: `date-time` — Last update date

  - **`total` (required)**

    `number` — Total number of reviews

  - **`totalPages` (required)**

    `number` — Total pages

  - **`average`**

    `number` — Average rating (0-5)

  - **`ratingDistribution`**

    `object` — Distribution of ratings (count per star)

    - **`1` (required)**

      `number`

    - **`2` (required)**

      `number`

    - **`3` (required)**

      `number`

    - **`4` (required)**

      `number`

    - **`5` (required)**

      `number`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": {
    "reviews": [
      {
        "_id": "",
        "senderId": "",
        "receiverId": "",
        "job_id": "",
        "rating": 0,
        "rating_message": "",
        "createdAt": null,
        "updatedAt": null
      }
    ],
    "total": 1,
    "page": 1,
    "limit": 1,
    "totalPages": 1,
    "average": 1,
    "ratingDistribution": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 1,
      "5": 1
    }
  }
}
```

##### Status: 404 User not found

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Get my reviews

- **Method:** `GET`
- **Path:** `/api/review/my`
- **Tags:** review

Get all reviews written by the authenticated user

#### Responses

##### Status: 200 Your reviews retrieved successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`limit` (required)**

    `number` — Items per page

  - **`page` (required)**

    `number` — Current page

  - **`reviews` (required)**

    `array`

    **Items:**

    - **`_id` (required)**

      `string` — Review ID

    - **`rating` (required)**

      `number` — Rating from 0 to 5

    - **`rating_message` (required)**

      `string` — Review message/comment

    - **`receiverId` (required)**

      `string` — User being reviewed

    - **`senderId` (required)**

      `string` — User who wrote the review

    - **`createdAt`**

      `string | null`, format: `date-time` — Creation date

    - **`job_id`**

      `string` — Related job ID (optional)

    - **`updatedAt`**

      `string | null`, format: `date-time` — Last update date

  - **`total` (required)**

    `number` — Total number of reviews

  - **`totalPages` (required)**

    `number` — Total pages

  - **`average`**

    `number` — Average rating (0-5)

  - **`ratingDistribution`**

    `object` — Distribution of ratings (count per star)

    - **`1` (required)**

      `number`

    - **`2` (required)**

      `number`

    - **`3` (required)**

      `number`

    - **`4` (required)**

      `number`

    - **`5` (required)**

      `number`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": {
    "reviews": [
      {
        "_id": "",
        "senderId": "",
        "receiverId": "",
        "job_id": "",
        "rating": 0,
        "rating_message": "",
        "createdAt": null,
        "updatedAt": null
      }
    ],
    "total": 1,
    "page": 1,
    "limit": 1,
    "totalPages": 1,
    "average": 1,
    "ratingDistribution": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 1,
      "5": 1
    }
  }
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Update review

- **Method:** `PUT`
- **Path:** `/api/review/{id}`
- **Tags:** review

Update a review. Only the review author can update their review.

#### Request Body

##### Content-Type: application/json

- **`rating`**

  `number` — Rating from 0 to 5

- **`rating_message`**

  `string` — Review message/comment

**Example:**

```json
{
  "rating": 0,
  "rating_message": ""
}
```

#### Responses

##### Status: 200 Review updated successfully

###### Content-Type: application/json

- **`data` (required)**

  `object | null`

  - **`_id` (required)**

    `string` — Review ID

  - **`rating` (required)**

    `number` — Rating from 0 to 5

  - **`rating_message` (required)**

    `string` — Review message/comment

  - **`receiverId` (required)**

    `string` — User being reviewed

  - **`senderId` (required)**

    `string` — User who wrote the review

  - **`createdAt`**

    `string | null`, format: `date-time` — Creation date

  - **`job_id`**

    `string` — Related job ID (optional)

  - **`updatedAt`**

    `string | null`, format: `date-time` — Last update date

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": {
    "_id": "",
    "senderId": "",
    "receiverId": "",
    "job_id": "",
    "rating": 0,
    "rating_message": "",
    "createdAt": null,
    "updatedAt": null
  }
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 403 Forbidden - You can only update your own reviews

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 404 Review not found

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Delete review

- **Method:** `DELETE`
- **Path:** `/api/review/{id}`
- **Tags:** review

Delete a review. Only the review author can delete their review.

#### Responses

##### Status: 200 Review deleted successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": null
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 403 Forbidden - You can only delete your own reviews

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 404 Review not found

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Seed locations

- **Method:** `POST`
- **Path:** `/api/seed/locations`
- **Tags:** Seed - Development

Seed database with top 50 US cities. Only works if location collection is empty.

#### Responses

##### Status: 201 Locations seeded successfully

###### Content-Type: application/json

- **`data` (required)**

  `array`

  **Items:**

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 201,
  "message": "Successfully seeded 50 locations",
  "data": [],
  "success": true
}
```

##### Status: 400 Database already contains locations

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 400,
  "message": "Database already contains data",
  "success": false
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 400,
  "message": "Database already contains data",
  "success": false
}
```

### Seed users

- **Method:** `POST`
- **Path:** `/api/seed/users`
- **Tags:** Seed - Development

Seed database with 3 test users (customer, contractor, admin). Only works if user collection is empty. All users have password: 123456

#### Responses

##### Status: 201 Users seeded successfully

###### Content-Type: application/json

- **`data` (required)**

  `array`

  **Items:**

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 201,
  "message": "Successfully seeded 50 locations",
  "data": [],
  "success": true
}
```

##### Status: 400 Database already contains users

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 400,
  "message": "Database already contains data",
  "success": false
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 400,
  "message": "Database already contains data",
  "success": false
}
```

### Seed categories

- **Method:** `POST`
- **Path:** `/api/seed/categories`
- **Tags:** Seed - Development

Seed database with 4 categories (Plumbing, Cleaning, Electrical, Carpentry). Only works if category collection is empty. Copies icon files to uploads folder.

#### Responses

##### Status: 201 Categories seeded successfully

###### Content-Type: application/json

- **`data` (required)**

  `array`

  **Items:**

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 201,
  "message": "Successfully seeded 50 locations",
  "data": [],
  "success": true
}
```

##### Status: 400 Database already contains categories

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 400,
  "message": "Database already contains data",
  "success": false
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 400,
  "message": "Database already contains data",
  "success": false
}
```

### Send test notification

- **Method:** `POST`
- **Path:** `/api/test-notification`
- **Tags:** Test Notification

Send a test push notification to a specific user for testing purposes

#### Request Body

##### Content-Type: application/json

- **`userId` (required)**

  `string` — User ID to send test notification

- **`body`**

  `string` — Custom notification body

- **`title`**

  `string` — Custom notification title

**Example:**

```json
{
  "userId": "",
  "title": "",
  "body": ""
}
```

#### Responses

##### Status: 200 Test notification sent successfully

###### Content-Type: application/json

- **`data` (required)**

  `object | null`

  - **`message` (required)**

    `string`

  - **`success` (required)**

    `boolean`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "success": true,
    "message": ""
  }
}
```

##### Status: 400 Bad request - Invalid user ID or no active devices

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 401 Unauthorized - Invalid or missing token

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Get user certifications

- **Method:** `GET`
- **Path:** `/api/user/certifications`
- **Tags:** User - Certifications

Get all certifications for the authenticated user

#### Responses

##### Status: 200 Certifications retrieved successfully

###### Content-Type: application/json

- **`data` (required)**

  `array`

  **Items:**

  - **`_id` (required)**

    `string` — Certification ID

  - **`img` (required)**

    `string` — Certification image URL

  - **`title` (required)**

    `string` — Certification title

  - **`user` (required)**

    `string` — User ID

  - **`createdAt`**

    `string`, format: `date-time`

  - **`description`**

    `string` — Certification description

  - **`expiry_date`**

    `string`, format: `date-time` — Expiry date

  - **`issue_date`**

    `string`, format: `date-time` — Issue date

  - **`issuing_organization`**

    `string` — Issuing organization

  - **`updatedAt`**

    `string`, format: `date-time`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": [
    {
      "_id": "",
      "user": "",
      "title": "",
      "img": "",
      "description": "",
      "issue_date": "",
      "expiry_date": "",
      "issuing_organization": "",
      "createdAt": "",
      "updatedAt": ""
    }
  ],
  "success": true
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

### Create certification

- **Method:** `POST`
- **Path:** `/api/user/certifications`
- **Tags:** User - Certifications

Create a new certification

#### Request Body

##### Content-Type: application/json

- **`img` (required)**

  `string` — Certification image URL

- **`title` (required)**

  `string` — Certification title

- **`description`**

  `string` — Certification description

- **`expiry_date`**

  `string`, format: `date-time` — Expiry date

- **`issue_date`**

  `string`, format: `date-time` — Issue date

- **`issuing_organization`**

  `string` — Issuing organization

**Example:**

```json
{
  "title": "",
  "img": "",
  "description": "",
  "issue_date": "",
  "expiry_date": "",
  "issuing_organization": ""
}
```

#### Responses

##### Status: 201 Certification created successfully

###### Content-Type: application/json

- **`data` (required)**

  `object | null`

  - **`_id` (required)**

    `string` — Certification ID

  - **`img` (required)**

    `string` — Certification image URL

  - **`title` (required)**

    `string` — Certification title

  - **`user` (required)**

    `string` — User ID

  - **`createdAt`**

    `string`, format: `date-time`

  - **`description`**

    `string` — Certification description

  - **`expiry_date`**

    `string`, format: `date-time` — Expiry date

  - **`issue_date`**

    `string`, format: `date-time` — Issue date

  - **`issuing_organization`**

    `string` — Issuing organization

  - **`updatedAt`**

    `string`, format: `date-time`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "_id": "",
    "user": "",
    "title": "",
    "img": "",
    "description": "",
    "issue_date": "",
    "expiry_date": "",
    "issuing_organization": "",
    "createdAt": "",
    "updatedAt": ""
  },
  "success": true
}
```

##### Status: 400 Validation error

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

### Get certification

- **Method:** `GET`
- **Path:** `/api/user/certifications/{id}`
- **Tags:** User - Certifications

Get a single certification by ID

#### Responses

##### Status: 200 Certification retrieved successfully

###### Content-Type: application/json

- **`data` (required)**

  `object | null`

  - **`_id` (required)**

    `string` — Certification ID

  - **`img` (required)**

    `string` — Certification image URL

  - **`title` (required)**

    `string` — Certification title

  - **`user` (required)**

    `string` — User ID

  - **`createdAt`**

    `string`, format: `date-time`

  - **`description`**

    `string` — Certification description

  - **`expiry_date`**

    `string`, format: `date-time` — Expiry date

  - **`issue_date`**

    `string`, format: `date-time` — Issue date

  - **`issuing_organization`**

    `string` — Issuing organization

  - **`updatedAt`**

    `string`, format: `date-time`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "_id": "",
    "user": "",
    "title": "",
    "img": "",
    "description": "",
    "issue_date": "",
    "expiry_date": "",
    "issuing_organization": "",
    "createdAt": "",
    "updatedAt": ""
  },
  "success": true
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

##### Status: 404 Certification not found

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

### Update certification

- **Method:** `PUT`
- **Path:** `/api/user/certifications/{id}`
- **Tags:** User - Certifications

Update an existing certification

#### Request Body

##### Content-Type: application/json

- **`description`**

  `string` — Certification description

- **`expiry_date`**

  `string`, format: `date-time` — Expiry date

- **`img`**

  `string` — Certification image URL

- **`issue_date`**

  `string`, format: `date-time` — Issue date

- **`issuing_organization`**

  `string` — Issuing organization

- **`title`**

  `string` — Certification title

**Example:**

```json
{
  "title": "",
  "img": "",
  "description": "",
  "issue_date": "",
  "expiry_date": "",
  "issuing_organization": ""
}
```

#### Responses

##### Status: 200 Certification updated successfully

###### Content-Type: application/json

- **`data` (required)**

  `object | null`

  - **`_id` (required)**

    `string` — Certification ID

  - **`img` (required)**

    `string` — Certification image URL

  - **`title` (required)**

    `string` — Certification title

  - **`user` (required)**

    `string` — User ID

  - **`createdAt`**

    `string`, format: `date-time`

  - **`description`**

    `string` — Certification description

  - **`expiry_date`**

    `string`, format: `date-time` — Expiry date

  - **`issue_date`**

    `string`, format: `date-time` — Issue date

  - **`issuing_organization`**

    `string` — Issuing organization

  - **`updatedAt`**

    `string`, format: `date-time`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "_id": "",
    "user": "",
    "title": "",
    "img": "",
    "description": "",
    "issue_date": "",
    "expiry_date": "",
    "issuing_organization": "",
    "createdAt": "",
    "updatedAt": ""
  },
  "success": true
}
```

##### Status: 400 Validation error

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

##### Status: 404 Certification not found

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

### Delete certification

- **Method:** `DELETE`
- **Path:** `/api/user/certifications/{id}`
- **Tags:** User - Certifications

Delete a certification

#### Responses

##### Status: 200 Certification deleted successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

##### Status: 404 Certification not found

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

### Get user experiences

- **Method:** `GET`
- **Path:** `/api/user/experience`
- **Tags:** User - Experience

Get all work experiences for the authenticated user

#### Responses

##### Status: 200 Experiences retrieved successfully

###### Content-Type: application/json

- **`data` (required)**

  `array`

  **Items:**

  - **`_id` (required)**

    `string` — Experience ID

  - **`company_name` (required)**

    `string` — Company name

  - **`description` (required)**

    `string` — Job description

  - **`title` (required)**

    `string` — Job title

  - **`user` (required)**

    `string` — User ID

  - **`createdAt`**

    `string`, format: `date-time`

  - **`end_date`**

    `string`, format: `date-time` — End date (optional for current job)

  - **`start_date`**

    `string`, format: `date-time` — Start date

  - **`updatedAt`**

    `string`, format: `date-time`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": [
    {
      "_id": "",
      "user": "",
      "company_name": "",
      "title": "",
      "description": "",
      "start_date": "",
      "end_date": "",
      "createdAt": "",
      "updatedAt": ""
    }
  ],
  "success": true
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

### Create experience

- **Method:** `POST`
- **Path:** `/api/user/experience`
- **Tags:** User - Experience

Create a new work experience

#### Request Body

##### Content-Type: application/json

- **`company_name` (required)**

  `string` — Company name

- **`description` (required)**

  `string` — Job description

- **`title` (required)**

  `string` — Job title

- **`end_date`**

  `string`, format: `date-time` — End date (optional for current job)

- **`start_date`**

  `string`, format: `date-time` — Start date

**Example:**

```json
{
  "company_name": "",
  "title": "",
  "description": "",
  "start_date": "",
  "end_date": ""
}
```

#### Responses

##### Status: 201 Experience created successfully

###### Content-Type: application/json

- **`data` (required)**

  `object | null`

  - **`_id` (required)**

    `string` — Experience ID

  - **`company_name` (required)**

    `string` — Company name

  - **`description` (required)**

    `string` — Job description

  - **`title` (required)**

    `string` — Job title

  - **`user` (required)**

    `string` — User ID

  - **`createdAt`**

    `string`, format: `date-time`

  - **`end_date`**

    `string`, format: `date-time` — End date (optional for current job)

  - **`start_date`**

    `string`, format: `date-time` — Start date

  - **`updatedAt`**

    `string`, format: `date-time`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "_id": "",
    "user": "",
    "company_name": "",
    "title": "",
    "description": "",
    "start_date": "",
    "end_date": "",
    "createdAt": "",
    "updatedAt": ""
  },
  "success": true
}
```

##### Status: 400 Validation error

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

### Get experience

- **Method:** `GET`
- **Path:** `/api/user/experience/{id}`
- **Tags:** User - Experience

Get a single work experience by ID

#### Responses

##### Status: 200 Experience retrieved successfully

###### Content-Type: application/json

- **`data` (required)**

  `object | null`

  - **`_id` (required)**

    `string` — Experience ID

  - **`company_name` (required)**

    `string` — Company name

  - **`description` (required)**

    `string` — Job description

  - **`title` (required)**

    `string` — Job title

  - **`user` (required)**

    `string` — User ID

  - **`createdAt`**

    `string`, format: `date-time`

  - **`end_date`**

    `string`, format: `date-time` — End date (optional for current job)

  - **`start_date`**

    `string`, format: `date-time` — Start date

  - **`updatedAt`**

    `string`, format: `date-time`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "_id": "",
    "user": "",
    "company_name": "",
    "title": "",
    "description": "",
    "start_date": "",
    "end_date": "",
    "createdAt": "",
    "updatedAt": ""
  },
  "success": true
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

##### Status: 404 Experience not found

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

### Update experience

- **Method:** `PUT`
- **Path:** `/api/user/experience/{id}`
- **Tags:** User - Experience

Update an existing work experience

#### Request Body

##### Content-Type: application/json

- **`company_name`**

  `string` — Company name

- **`description`**

  `string` — Job description

- **`end_date`**

  `string`, format: `date-time` — End date (optional for current job)

- **`start_date`**

  `string`, format: `date-time` — Start date

- **`title`**

  `string` — Job title

**Example:**

```json
{
  "company_name": "",
  "title": "",
  "description": "",
  "start_date": "",
  "end_date": ""
}
```

#### Responses

##### Status: 200 Experience updated successfully

###### Content-Type: application/json

- **`data` (required)**

  `object | null`

  - **`_id` (required)**

    `string` — Experience ID

  - **`company_name` (required)**

    `string` — Company name

  - **`description` (required)**

    `string` — Job description

  - **`title` (required)**

    `string` — Job title

  - **`user` (required)**

    `string` — User ID

  - **`createdAt`**

    `string`, format: `date-time`

  - **`end_date`**

    `string`, format: `date-time` — End date (optional for current job)

  - **`start_date`**

    `string`, format: `date-time` — Start date

  - **`updatedAt`**

    `string`, format: `date-time`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "_id": "",
    "user": "",
    "company_name": "",
    "title": "",
    "description": "",
    "start_date": "",
    "end_date": "",
    "createdAt": "",
    "updatedAt": ""
  },
  "success": true
}
```

##### Status: 400 Validation error

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

##### Status: 404 Experience not found

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

### Delete experience

- **Method:** `DELETE`
- **Path:** `/api/user/experience/{id}`
- **Tags:** User - Experience

Delete a work experience

#### Responses

##### Status: 200 Experience deleted successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

##### Status: 404 Experience not found

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

### Retrieve all users with pagination

- **Method:** `GET`
- **Path:** `/api/user/`
- **Tags:** user

Get all users with optional search, filters, and pagination. Supports filtering by role, location, category, and searching by name or email. Returns users with populated location, category, experience, work\_samples, certification, and review statistics (for contractors).

#### Responses

##### Status: 200 Users retrieved successfully with pagination metadata. Each user includes populated location, category, experience, work\_samples, and certification. Contractors include review statistics (total, average, rating distribution, and last 5 reviews).

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`pagination` (required)**

    `object`

    - **`currentPage` (required)**

      `number`

    - **`hasNextPage` (required)**

      `boolean`

    - **`hasPrevPage` (required)**

      `boolean`

    - **`limit` (required)**

      `number`

    - **`totalPages` (required)**

      `number`

    - **`totalUsers` (required)**

      `number`

  - **`users` (required)**

    `array`

    **Items:**

    - **`_id` (required)**

      `string`

    - **`email` (required)**

      `string`

    - **`full_name` (required)**

      `string`

    - **`is_verified` (required)**

      `boolean`

    - **`role` (required)**

      `string`, possible values: `"contractor", "customer", "admin"`

    - **`address`**

      `string`

    - **`availability`**

      `string | null`, format: `date-time`

    - **`bio`**

      `string`

    - **`category`**

      `array`

      **Items:**

    - **`certification`**

      `string`

    - **`cover_img`**

      `string`

    - **`createdAt`**

      `string | null`, format: `date-time`

    - **`experience`**

      `array`

      **Items:**

      - **`company_name` (required)**

        `string`

      - **`start_date` (required)**

        `string | null`, format: `date-time`

      - **`end_date`**

        `string | null`, format: `date-time`

    - **`hourly_charge`**

      `number`

    - **`location`**

      `string`

    - **`phone`**

      `string`

    - **`profile_img`**

      `string`

    - **`skills`**

      `array`

      **Items:**

      `string`

    - **`starting_budget`**

      `number`

    - **`updatedAt`**

      `string | null`, format: `date-time`

    - **`work_samples`**

      `array`

      **Items:**

      - **`img` (required)**

        `string`

      - **`name` (required)**

        `string`

      - **`description`**

        `string`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "users": [
      {
        "_id": "",
        "role": "contractor",
        "full_name": "",
        "profile_img": "",
        "cover_img": "",
        "email": "",
        "phone": "",
        "address": "",
        "bio": "",
        "location": "",
        "availability": null,
        "is_verified": true,
        "category": [],
        "skills": [
          ""
        ],
        "experience": [
          {
            "company_name": "",
            "start_date": null,
            "end_date": null
          }
        ],
        "work_samples": [
          {
            "name": "",
            "img": "",
            "description": ""
          }
        ],
        "starting_budget": 1,
        "certification": "",
        "hourly_charge": 1,
        "createdAt": null,
        "updatedAt": null
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 1,
      "totalUsers": 1,
      "limit": 1,
      "hasNextPage": true,
      "hasPrevPage": true
    }
  }
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Get user by ID

- **Method:** `GET`
- **Path:** `/api/user/{id}`
- **Tags:** user

Get a single user by ID with full profile details including populated location, category, experience, work\_samples, certifications, and jobs. For contractors, includes review statistics (total, average rating, rating distribution, and last 5 reviews).

#### Responses

##### Status: 200 User retrieved successfully with all populated fields. Contractors include review statistics.

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`_id` (required)**

    `string` — User ID

  - **`createdAt` (required)**

    `string` — Account creation date

  - **`email` (required)**

    `string` — User's email address

  - **`full_name` (required)**

    `string` — User's full name

  - **`is_verified` (required)**

    `boolean` — Verification status

  - **`role` (required)**

    `string`, possible values: `"customer", "contractor", "admin"` — User role

  - **`updatedAt` (required)**

    `string` — Last update date

  - **`phone`**

    `string` — User's phone number

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": {
    "_id": "",
    "full_name": "",
    "email": "",
    "role": "customer",
    "phone": "",
    "is_verified": true,
    "createdAt": "",
    "updatedAt": ""
  }
}
```

##### Status: 404 User not found

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Get current user profile

- **Method:** `GET`
- **Path:** `/api/user/me`
- **Tags:** user

Get current authenticated user with full profile details including populated location, category, experience, work\_samples, certification, and review statistics (for contractors)

#### Responses

##### Status: 200 User retrieved successfully with populated location, category, experience, work\_samples, and certification. For contractors, includes review statistics (total, average rating, rating distribution, and last 5 reviews). Excludes sensitive fields (password, refreshTokens, otp).

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`_id` (required)**

    `string` — User ID

  - **`createdAt` (required)**

    `string` — Account creation date

  - **`email` (required)**

    `string` — User's email address

  - **`full_name` (required)**

    `string` — User's full name

  - **`is_verified` (required)**

    `boolean` — Verification status

  - **`role` (required)**

    `string`, possible values: `"customer", "contractor", "admin"` — User role

  - **`updatedAt` (required)**

    `string` — Last update date

  - **`phone`**

    `string` — User's phone number

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": {
    "_id": "",
    "full_name": "",
    "email": "",
    "role": "customer",
    "phone": "",
    "is_verified": true,
    "createdAt": "",
    "updatedAt": ""
  }
}
```

##### Status: 401 Unauthorized - Invalid or missing access token

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 404 User not found

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Update user profile (partial updates)

- **Method:** `PATCH`
- **Path:** `/api/user/me`
- **Tags:** user

Update current user profile with partial updates support. Only send the fields you want to update - all fields are optional. Customers can update: full\_name, profile\_img, cover\_img, phone, address, bio, description, location, availability. Contractors can additionally update: skills, experience (IDs), work\_samples (IDs), certifications (IDs), starting\_budget, hourly\_charge, category. Protected fields (password, role, is\_verified, isSuspend) cannot be updated through this endpoint. Returns updated profile with populated fields, review statistics (for contractors), and total job count.

#### Request Body

##### Content-Type: application/json

- **`address`**

  `string` — Physical address

- **`availability`**

  `object` — Availability date

- **`bio`**

  `string` — User biography (max 500 chars)

- **`category`**

  `array` — Array of category IDs (for contractors) - MongoDB ObjectIds

  **Items:**

  `string`

- **`certifications`**

  `array` — Array of certification IDs (for contractors) - MongoDB ObjectIds

  **Items:**

  `string`

- **`cover_img`**

  `string` — Cover image URL

- **`description`**

  `string` — User description / about me (max 2000 chars)

- **`experience`**

  `array` — Array of experience IDs (for contractors) - MongoDB ObjectIds

  **Items:**

  `string`

- **`full_name`**

  `string` — User's full name

- **`hourly_charge`**

  `number` — Hourly rate (for contractors)

- **`location`**

  `array` — Array of location IDs (MongoDB ObjectIds)

  **Items:**

  `string`

- **`phone`**

  `string` — Phone number

- **`profile_img`**

  `string` — Profile image URL

- **`skills`**

  `array` — Array of skills (for contractors)

  **Items:**

  `string`

- **`starting_budget`**

  `number` — Starting budget for projects (for contractors)

- **`work_samples`**

  `array` — Array of work sample IDs (for contractors) - MongoDB ObjectIds

  **Items:**

  `string`

**Example:**

```json
{
  "full_name": "",
  "profile_img": "",
  "cover_img": "",
  "phone": "",
  "address": "",
  "bio": "",
  "description": "",
  "location": [
    ""
  ],
  "category": [
    ""
  ],
  "availability": "",
  "skills": [
    ""
  ],
  "experience": [
    ""
  ],
  "work_samples": [
    ""
  ],
  "starting_budget": 1,
  "certifications": [
    ""
  ],
  "hourly_charge": 1
}
```

#### Responses

##### Status: 200 Profile updated successfully with all populated fields (location, category, experience, work\_samples, certifications), review statistics (for contractors), and total job count

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`_id` (required)**

    `string` — User ID

  - **`createdAt` (required)**

    `string` — Account creation date

  - **`email` (required)**

    `string` — User's email address

  - **`full_name` (required)**

    `string` — User's full name

  - **`is_verified` (required)**

    `boolean` — Verification status

  - **`role` (required)**

    `string`, possible values: `"customer", "contractor", "admin"` — User role

  - **`updatedAt` (required)**

    `string` — Last update date

  - **`phone`**

    `string` — User's phone number

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": {
    "_id": "",
    "full_name": "",
    "email": "",
    "role": "customer",
    "phone": "",
    "is_verified": true,
    "createdAt": "",
    "updatedAt": ""
  }
}
```

##### Status: 400 Validation error, invalid IDs (category/location/experience/work\_samples/certifications), or no fields to update

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 401 Unauthorized - Invalid or missing access token

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 403 Forbidden - Attempting to update contractor-specific fields as a customer

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 404 User not found

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

- **`data`**

  `object`

- **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### Get user work samples

- **Method:** `GET`
- **Path:** `/api/user/work-samples`
- **Tags:** User - Work Samples

Get all work samples for the authenticated user

#### Responses

##### Status: 200 Work samples retrieved successfully

###### Content-Type: application/json

- **`data` (required)**

  `array`

  **Items:**

  - **`_id` (required)**

    `string` — Work sample ID

  - **`img` (required)**

    `string` — Work sample image URL

  - **`name` (required)**

    `string` — Work sample name

  - **`user` (required)**

    `string` — User ID

  - **`createdAt`**

    `string`, format: `date-time`

  - **`description`**

    `string` — Work sample description

  - **`updatedAt`**

    `string`, format: `date-time`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": [
    {
      "_id": "",
      "user": "",
      "name": "",
      "img": "",
      "description": "",
      "createdAt": "",
      "updatedAt": ""
    }
  ],
  "success": true
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

### Create work sample

- **Method:** `POST`
- **Path:** `/api/user/work-samples`
- **Tags:** User - Work Samples

Create a new work sample

#### Request Body

##### Content-Type: application/json

- **`img` (required)**

  `string` — Work sample image URL

- **`name` (required)**

  `string` — Work sample name

- **`description`**

  `string` — Work sample description

**Example:**

```json
{
  "name": "",
  "img": "",
  "description": ""
}
```

#### Responses

##### Status: 201 Work sample created successfully

###### Content-Type: application/json

- **`data` (required)**

  `object | null`

  - **`_id` (required)**

    `string` — Work sample ID

  - **`img` (required)**

    `string` — Work sample image URL

  - **`name` (required)**

    `string` — Work sample name

  - **`user` (required)**

    `string` — User ID

  - **`createdAt`**

    `string`, format: `date-time`

  - **`description`**

    `string` — Work sample description

  - **`updatedAt`**

    `string`, format: `date-time`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "_id": "",
    "user": "",
    "name": "",
    "img": "",
    "description": "",
    "createdAt": "",
    "updatedAt": ""
  },
  "success": true
}
```

##### Status: 400 Validation error

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

### Get work sample

- **Method:** `GET`
- **Path:** `/api/user/work-samples/{id}`
- **Tags:** User - Work Samples

Get a single work sample by ID

#### Responses

##### Status: 200 Work sample retrieved successfully

###### Content-Type: application/json

- **`data` (required)**

  `object | null`

  - **`_id` (required)**

    `string` — Work sample ID

  - **`img` (required)**

    `string` — Work sample image URL

  - **`name` (required)**

    `string` — Work sample name

  - **`user` (required)**

    `string` — User ID

  - **`createdAt`**

    `string`, format: `date-time`

  - **`description`**

    `string` — Work sample description

  - **`updatedAt`**

    `string`, format: `date-time`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "_id": "",
    "user": "",
    "name": "",
    "img": "",
    "description": "",
    "createdAt": "",
    "updatedAt": ""
  },
  "success": true
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

##### Status: 404 Work sample not found

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

### Update work sample

- **Method:** `PUT`
- **Path:** `/api/user/work-samples/{id}`
- **Tags:** User - Work Samples

Update an existing work sample

#### Request Body

##### Content-Type: application/json

- **`description`**

  `string` — Work sample description

- **`img`**

  `string` — Work sample image URL

- **`name`**

  `string` — Work sample name

**Example:**

```json
{
  "name": "",
  "img": "",
  "description": ""
}
```

#### Responses

##### Status: 200 Work sample updated successfully

###### Content-Type: application/json

- **`data` (required)**

  `object | null`

  - **`_id` (required)**

    `string` — Work sample ID

  - **`img` (required)**

    `string` — Work sample image URL

  - **`name` (required)**

    `string` — Work sample name

  - **`user` (required)**

    `string` — User ID

  - **`createdAt`**

    `string`, format: `date-time`

  - **`description`**

    `string` — Work sample description

  - **`updatedAt`**

    `string`, format: `date-time`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "_id": "",
    "user": "",
    "name": "",
    "img": "",
    "description": "",
    "createdAt": "",
    "updatedAt": ""
  },
  "success": true
}
```

##### Status: 400 Validation error

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

##### Status: 404 Work sample not found

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

### Delete work sample

- **Method:** `DELETE`
- **Path:** `/api/user/work-samples/{id}`
- **Tags:** User - Work Samples

Delete a work sample

#### Responses

##### Status: 200 Work sample deleted successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

##### Status: 404 Work sample not found

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

- **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

### Get wallet balance

- **Method:** `GET`
- **Path:** `/api/wallet`
- **Tags:** wallet

Get user's wallet balance and details

#### Responses

##### Status: 200 Wallet retrieved successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`_id` (required)**

    `string`

  - **`balance` (required)**

    `number`

  - **`createdAt` (required)**

    `string`

  - **`currency` (required)**

    `string`

  - **`isActive` (required)**

    `boolean`

  - **`isFrozen` (required)**

    `boolean`

  - **`totalEarnings` (required)**

    `number`

  - **`totalSpent` (required)**

    `number`

  - **`totalWithdrawals` (required)**

    `number`

  - **`updatedAt` (required)**

    `string`

  - **`user` (required)**

    `string`

  - **`stripeConnectAccountId`**

    `string`

  - **`stripeCustomerId`**

    `string`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "_id": "",
    "user": "",
    "balance": 1,
    "currency": "",
    "isActive": true,
    "isFrozen": true,
    "totalEarnings": 1,
    "totalSpent": 1,
    "totalWithdrawals": 1,
    "stripeCustomerId": "",
    "stripeConnectAccountId": "",
    "createdAt": "",
    "updatedAt": ""
  }
}
```

##### Status: 401 Unauthorized - Invalid or missing token

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

### Deposit money (create Stripe Checkout)

- **Method:** `POST`
- **Path:** `/api/wallet/deposit`
- **Tags:** wallet

Create a Stripe Checkout session for depositing money into the wallet. Returns a checkout URL that should be opened in the browser. After payment, the browser redirects to /api/wallet/deposit/redirect which shows a success page.

#### Request Body

##### Content-Type: application/json

- **`amount` (required)**

  `number` — Amount to deposit (min: $1, max: $10,000)

**Example:**

```json
{
  "amount": 1
}
```

#### Responses

##### Status: 200 Checkout session created successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`amount` (required)**

    `number` — Deposit amount

  - **`cancelUrl` (required)**

    `string` — URL to redirect the user to on cancellation

  - **`sessionId` (required)**

    `string` — Stripe Checkout Session ID

  - **`successUrl` (required)**

    `string` — URL to redirect the user to on success

  - **`url` (required)**

    `string` — Stripe Checkout URL to open in browser

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "url": "",
    "sessionId": "",
    "amount": 1,
    "successUrl": "",
    "cancelUrl": ""
  }
}
```

##### Status: 400 Bad request - Invalid amount

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

### Deposit redirect page (after Stripe Checkout)

- **Method:** `GET`
- **Path:** `/api/wallet/deposit/redirect`
- **Tags:** wallet

Server-side redirect page after Stripe Checkout. Shows a success/cancelled page with a button to return to the mobile app via deep link. No authentication required.

#### Responses

##### Status: 200 HTML page with payment status and deep link to return to the app

### Withdraw money

- **Method:** `POST`
- **Path:** `/api/wallet/withdraw`
- **Tags:** wallet

Withdraw money from wallet (contractors only, min $10, max $10,000). Requires Stripe Connect account to be connected and verified.

#### Request Body

##### Content-Type: application/json

- **`amount` (required)**

  `number` — Amount to withdraw

**Example:**

```json
{
  "amount": 1
}
```

#### Responses

##### Status: 200 Withdrawal successful

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`amount` (required)**

    `number`

  - **`estimatedArrival` (required)**

    `string`

  - **`newBalance` (required)**

    `number`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "amount": 1,
    "newBalance": 1,
    "estimatedArrival": ""
  }
}
```

##### Status: 400 Bad request - Insufficient balance, invalid amount, or wallet frozen

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 403 Forbidden - Only contractors can withdraw

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

### Get transaction history

- **Method:** `GET`
- **Path:** `/api/wallet/transactions`
- **Tags:** wallet

Get user's transaction history with pagination and filtering. Available transaction types: deposit (money added to wallet), withdrawal (money withdrawn from wallet), wallet\_transfer (internal transfer between users), contractor\_payout (payment to contractor), refund (money refunded to customer).

#### Responses

##### Status: 200 Transactions retrieved successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`pagination` (required)**

    `object`

    - **`limit` (required)**

      `number`

    - **`page` (required)**

      `number`

    - **`total` (required)**

      `number`

    - **`totalPages` (required)**

      `number`

  - **`transactions` (required)**

    `array`

    **Items:**

    - **`_id` (required)**

      `string`

    - **`amount` (required)**

      `number`

    - **`createdAt` (required)**

      `string`

    - **`description` (required)**

      `string`

    - **`from` (required)**

      `object | null`

      - **`_id` (required)**

        `string`

      - **`email` (required)**

        `string`

      - **`full_name` (required)**

        `string`

    - **`status` (required)**

      `string`, possible values: `"pending", "completed", "failed"`

    - **`to` (required)**

      `object | null`

      - **`_id` (required)**

        `string`

      - **`email` (required)**

        `string`

      - **`full_name` (required)**

        `string`

    - **`type` (required)**

      `string`, possible values: `"deposit", "withdrawal", "wallet_transfer", "contractor_payout", "refund"`

    - **`updatedAt` (required)**

      `string`

    - **`stripeCheckoutSessionId`**

      `string`

    - **`stripePaymentIntentId`**

      `string`

    - **`stripeTransferId`**

      `string`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "transactions": [
      {
        "_id": "",
        "type": "deposit",
        "amount": 1,
        "from": {
          "_id": "",
          "full_name": "",
          "email": ""
        },
        "to": {
          "_id": "",
          "full_name": "",
          "email": ""
        },
        "status": "pending",
        "description": "",
        "stripePaymentIntentId": "",
        "stripeTransferId": "",
        "stripeCheckoutSessionId": "",
        "createdAt": "",
        "updatedAt": ""
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 1,
      "total": 1,
      "totalPages": 1
    }
  }
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

### Get Stripe Connect onboarding link

- **Method:** `POST`
- **Path:** `/api/wallet/stripe/onboard`
- **Tags:** wallet

Get Stripe Connect onboarding link for contractor to connect bank account. The server generates and returns mobile-friendly redirect URLs by default. Just send an empty body {}.

#### Request Body

##### Content-Type: application/json

**Example:**

```json
{}
```

#### Responses

##### Status: 200 Onboarding link created successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`accountId` (required)**

    `string`

  - **`refreshUrl` (required)**

    `string` — URL to redirect the user if onboarding needs refresh

  - **`returnUrl` (required)**

    `string` — URL to redirect the user after successful onboarding

  - **`url` (required)**

    `string`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "url": "",
    "accountId": "",
    "refreshUrl": "",
    "returnUrl": ""
  }
}
```

##### Status: 400 Bad request - Only contractors can onboard

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

### Stripe Connect onboarding redirect page

- **Method:** `GET`
- **Path:** `/api/wallet/stripe/onboard/redirect`
- **Tags:** wallet

Server-side redirect page after Stripe Connect onboarding. Shows a completion or refresh status page with instructions to return to the mobile app. No authentication required.

#### Responses

##### Status: 200 HTML page with onboarding status and instructions to return to the app

### Get Stripe Connect status

- **Method:** `GET`
- **Path:** `/api/wallet/stripe/status`
- **Tags:** wallet

Check Stripe Connect account status and verification requirements

#### Responses

##### Status: 200 Stripe account status retrieved successfully

###### Content-Type: application/json

- **`data` (required)**

  `object`

  - **`accountId` (required)**

    `string | null`

  - **`payoutsEnabled` (required)**

    `boolean`

  - **`requirementsNeeded` (required)**

    `array`

    **Items:**

    `string`

  - **`status` (required)**

    `string`, possible values: `"not_connected", "pending", "verified", "restricted"`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "accountId": null,
    "status": "not_connected",
    "payoutsEnabled": true,
    "requirementsNeeded": [
      ""
    ]
  }
}
```

##### Status: 400 Bad request - Only contractors can check status

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 401 Unauthorized

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

##### Status: 500 Internal server error

###### Content-Type: application/json

- **`data` (required)**

  `object`

- **`message` (required)**

  `string`

- **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

## Schemas

### UserIdParam

- **Type:**`object`

* **`id` (required)**

  `string` — User ID

**Example:**

```json
{
  "id": ""
}
```

### UserQuery

- **Type:**`object`

* **`category`**

  `string` — Filter by category ID

* **`limit`**

  `string` — Items per page (default: 10)

* **`location`**

  `string` — Filter by location ID

* **`page`**

  `string` — Page number (default: 1)

* **`role`**

  `string`, possible values: `"contractor", "customer", "admin"` — Filter by user role

* **`search`**

  `string` — Search by full name or email (case-insensitive)

* **`sortBy`**

  `string` — Sort field (default: createdAt)

* **`sortOrder`**

  `string`, possible values: `"asc", "desc"` — Sort order (default: desc)

**Example:**

```json
{
  "search": "",
  "role": "contractor",
  "location": "",
  "category": "",
  "page": "",
  "limit": "",
  "sortBy": "",
  "sortOrder": "asc"
}
```

### SuspendUser

- **Type:**`object`

* **`suspend` (required)**

  `boolean` — True to suspend, false to unsuspend

* **`reason`**

  `string` — Reason for suspension

**Example:**

```json
{
  "suspend": true,
  "reason": ""
}
```

### AdminUserResponse

- **Type:**`object`

* **`data` (required)**

  `object | null`

  - **`_id` (required)**

    `string`

  - **`email` (required)**

    `string`

  - **`full_name` (required)**

    `string`

  - **`is_verified` (required)**

    `boolean`

  - **`role` (required)**

    `string`, possible values: `"contractor", "customer", "admin"`

  - **`address`**

    `string`

  - **`availability`**

    `string | null`, format: `date-time`

  - **`bio`**

    `string`

  - **`category`**

    `array`

    **Items:**

  - **`certification`**

    `string`

  - **`cover_img`**

    `string`

  - **`createdAt`**

    `string | null`, format: `date-time`

  - **`experience`**

    `array`

    **Items:**

    - **`company_name` (required)**

      `string`

    - **`start_date` (required)**

      `string | null`, format: `date-time`

    - **`end_date`**

      `string | null`, format: `date-time`

  - **`hourly_charge`**

    `number`

  - **`location`**

    `string`

  - **`phone`**

    `string`

  - **`profile_img`**

    `string`

  - **`skills`**

    `array`

    **Items:**

    `string`

  - **`starting_budget`**

    `number`

  - **`updatedAt`**

    `string | null`, format: `date-time`

  - **`work_samples`**

    `array`

    **Items:**

    - **`img` (required)**

      `string`

    - **`name` (required)**

      `string`

    - **`description`**

      `string`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "_id": "",
    "role": "contractor",
    "full_name": "",
    "profile_img": "",
    "cover_img": "",
    "email": "",
    "phone": "",
    "address": "",
    "bio": "",
    "location": "",
    "availability": null,
    "is_verified": true,
    "category": [],
    "skills": [
      ""
    ],
    "experience": [
      {
        "company_name": "",
        "start_date": null,
        "end_date": null
      }
    ],
    "work_samples": [
      {
        "name": "",
        "img": "",
        "description": ""
      }
    ],
    "starting_budget": 1,
    "certification": "",
    "hourly_charge": 1,
    "createdAt": null,
    "updatedAt": null
  }
}
```

### AdminUsersResponse

- **Type:**`object`

* **`data` (required)**

  `object`

  - **`pagination` (required)**

    `object`

    - **`currentPage` (required)**

      `number`

    - **`hasNextPage` (required)**

      `boolean`

    - **`hasPrevPage` (required)**

      `boolean`

    - **`limit` (required)**

      `number`

    - **`totalPages` (required)**

      `number`

    - **`totalUsers` (required)**

      `number`

  - **`users` (required)**

    `array`

    **Items:**

    - **`_id` (required)**

      `string`

    - **`email` (required)**

      `string`

    - **`full_name` (required)**

      `string`

    - **`is_verified` (required)**

      `boolean`

    - **`role` (required)**

      `string`, possible values: `"contractor", "customer", "admin"`

    - **`address`**

      `string`

    - **`availability`**

      `string | null`, format: `date-time`

    - **`bio`**

      `string`

    - **`category`**

      `array`

      **Items:**

    - **`certification`**

      `string`

    - **`cover_img`**

      `string`

    - **`createdAt`**

      `string | null`, format: `date-time`

    - **`experience`**

      `array`

      **Items:**

      - **`company_name` (required)**

        `string`

      - **`start_date` (required)**

        `string | null`, format: `date-time`

      - **`end_date`**

        `string | null`, format: `date-time`

    - **`hourly_charge`**

      `number`

    - **`location`**

      `string`

    - **`phone`**

      `string`

    - **`profile_img`**

      `string`

    - **`skills`**

      `array`

      **Items:**

      `string`

    - **`starting_budget`**

      `number`

    - **`updatedAt`**

      `string | null`, format: `date-time`

    - **`work_samples`**

      `array`

      **Items:**

      - **`img` (required)**

        `string`

      - **`name` (required)**

        `string`

      - **`description`**

        `string`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "users": [
      {
        "_id": "",
        "role": "contractor",
        "full_name": "",
        "profile_img": "",
        "cover_img": "",
        "email": "",
        "phone": "",
        "address": "",
        "bio": "",
        "location": "",
        "availability": null,
        "is_verified": true,
        "category": [],
        "skills": [
          ""
        ],
        "experience": [
          {
            "company_name": "",
            "start_date": null,
            "end_date": null
          }
        ],
        "work_samples": [
          {
            "name": "",
            "img": "",
            "description": ""
          }
        ],
        "starting_budget": 1,
        "certification": "",
        "hourly_charge": 1,
        "createdAt": null,
        "updatedAt": null
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 1,
      "totalUsers": 1,
      "limit": 1,
      "hasNextPage": true,
      "hasPrevPage": true
    }
  }
}
```

### AdminSuccessResponse

- **Type:**`object`

* **`data` (required)**

  `object`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

### AdminErrorResponse

- **Type:**`object`

* **`data` (required)**

  `object`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

### LoginAdmin

- **Type:**`object`

* **`email` (required)**

  `string`, format: `email` — Admin email address

* **`password` (required)**

  `string` — Admin password

**Example:**

```json
{
  "email": "",
  "password": ""
}
```

### LoginAdminResponse

- **Type:**`object`

* **`data` (required)**

  `object`

  - **`accessToken` (required)**

    `string`

  - **`refreshToken` (required)**

    `string`

  - **`user` (required)**

    `object`

    - **`_id` (required)**

      `string`

    - **`email` (required)**

      `string`

    - **`full_name` (required)**

      `string`

    - **`is_verified` (required)**

      `boolean`

    - **`role` (required)**

      `string`, possible values: `"admin"`

    - **`createdAt`**

      `string | null`, format: `date-time`

    - **`profile_img`**

      `string`

    - **`updatedAt`**

      `string | null`, format: `date-time`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "user": {
      "_id": "",
      "role": "admin",
      "full_name": "",
      "email": "",
      "profile_img": "",
      "is_verified": true,
      "createdAt": null,
      "updatedAt": null
    },
    "accessToken": "",
    "refreshToken": ""
  }
}
```

### AdminAuthErrorResponse

- **Type:**`object`

* **`data` (required)**

  `object`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

### Register

- **Type:**`object`

* **`email` (required)**

  `string`, format: `email` — User's email address

* **`full_name` (required)**

  `string` — User's full name

* **`password` (required)**

  `string` — User's password

* **`phone`**

  `string` — User's phone number

* **`role`**

  `string`, possible values: `"customer", "contractor", "admin"`, default: `"customer"` — User role

**Example:**

```json
{
  "full_name": "",
  "email": "",
  "password": "",
  "role": "customer",
  "phone": ""
}
```

### Login

- **Type:**`object`

* **`email` (required)**

  `string`, format: `email` — User's email address

* **`password` (required)**

  `string` — User's password

**Example:**

```json
{
  "email": "",
  "password": ""
}
```

### ForgotPassword

- **Type:**`object`

* **`email` (required)**

  `string`, format: `email` — User's email address

**Example:**

```json
{
  "email": ""
}
```

### VerifyOTP

- **Type:**`object`

* **`email` (required)**

  `string`, format: `email` — User's email address

* **`otp` (required)**

  `string` — 4-digit OTP code

**Example:**

```json
{
  "email": "",
  "otp": ""
}
```

### ResetPassword

- **Type:**`object`

* **`email` (required)**

  `string`, format: `email` — User's email address

* **`newPassword` (required)**

  `string` — New password

* **`otp` (required)**

  `string` — 4-digit OTP code

**Example:**

```json
{
  "email": "",
  "otp": "",
  "newPassword": ""
}
```

### RefreshToken

- **Type:**`object`

* **`refreshToken` (required)**

  `string` — Refresh token

**Example:**

```json
{
  "refreshToken": ""
}
```

### AuthResponse

- **Type:**`object`

* **`data` (required)**

  `object`

  - **`accessToken` (required)**

    `string` — JWT access token

  - **`refreshToken` (required)**

    `string` — JWT refresh token

  - **`user` (required)**

    `object`

    - **`_id` (required)**

      `string` — User ID

    - **`createdAt` (required)**

      `string` — Account creation date

    - **`email` (required)**

      `string` — User's email address

    - **`full_name` (required)**

      `string` — User's full name

    - **`is_verified` (required)**

      `boolean` — Verification status

    - **`role` (required)**

      `string`, possible values: `"customer", "contractor", "admin"` — User role

    - **`updatedAt` (required)**

      `string` — Last update date

    - **`phone`**

      `string` — User's phone number

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

* **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": {
    "user": {
      "_id": "",
      "full_name": "",
      "email": "",
      "role": "customer",
      "phone": "",
      "is_verified": true,
      "createdAt": "",
      "updatedAt": ""
    },
    "accessToken": "",
    "refreshToken": ""
  }
}
```

### UserData

- **Type:**`object`

* **`_id` (required)**

  `string` — User ID

* **`createdAt` (required)**

  `string` — Account creation date

* **`email` (required)**

  `string` — User's email address

* **`full_name` (required)**

  `string` — User's full name

* **`is_verified` (required)**

  `boolean` — Verification status

* **`role` (required)**

  `string`, possible values: `"customer", "contractor", "admin"` — User role

* **`updatedAt` (required)**

  `string` — Last update date

* **`phone`**

  `string` — User's phone number

**Example:**

```json
{
  "_id": "",
  "full_name": "",
  "email": "",
  "role": "customer",
  "phone": "",
  "is_verified": true,
  "createdAt": "",
  "updatedAt": ""
}
```

### TokenResponse

- **Type:**`object`

* **`data` (required)**

  `object`

  - **`accessToken` (required)**

    `string` — JWT access token

  - **`refreshToken` (required)**

    `string` — JWT refresh token

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

* **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": {
    "accessToken": "",
    "refreshToken": ""
  }
}
```

### UserResponse

- **Type:**`object`

* **`data` (required)**

  `object`

  - **`_id` (required)**

    `string` — User ID

  - **`createdAt` (required)**

    `string` — Account creation date

  - **`email` (required)**

    `string` — User's email address

  - **`full_name` (required)**

    `string` — User's full name

  - **`is_verified` (required)**

    `boolean` — Verification status

  - **`role` (required)**

    `string`, possible values: `"customer", "contractor", "admin"` — User role

  - **`updatedAt` (required)**

    `string` — Last update date

  - **`phone`**

    `string` — User's phone number

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

* **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": {
    "_id": "",
    "full_name": "",
    "email": "",
    "role": "customer",
    "phone": "",
    "is_verified": true,
    "createdAt": "",
    "updatedAt": ""
  }
}
```

### SuccessResponse

- **Type:**`object`

* **`data` (required)**

  `object`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

* **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": null
}
```

### ErrorResponse

- **Type:**`object`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

* **`success` (required)**

  `boolean`

* **`data`**

  `object`

* **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### CreateCategory

- **Type:**`object`

* **`name` (required)**

  `string` — Category name

* **`description`**

  `string` — Category description

* **`icon`**

  `object` — Category icon file

**Example:**

```json
{
  "name": "",
  "description": "",
  "icon": null
}
```

### UpdateCategory

- **Type:**`object`

* **`description`**

  `string`

* **`icon`**

  `object` — Category icon file

* **`name`**

  `string`

**Example:**

```json
{
  "name": "",
  "description": "",
  "icon": null
}
```

### CategoryIdParam

- **Type:**`object`

* **`id` (required)**

  `string` — Category ID

**Example:**

```json
{
  "id": ""
}
```

### SearchCategory

- **Type:**`object`

* **`limit`**

  `string` — Number of items per page

* **`page`**

  `string` — Page number for pagination

* **`search`**

  `string` — Search term for category name or description

**Example:**

```json
{
  "search": "",
  "page": "",
  "limit": ""
}
```

### CategoryResponse

- **Type:**`object`

* **`data` (required)**

  `object | null`

  - **`_id` (required)**

    `string` — Category ID

  - **`name` (required)**

    `string` — Category name

  - **`createdAt`**

    `string` — Creation date

  - **`description`**

    `string` — Category description

  - **`icon`**

    `object` — Category icon file

  - **`updatedAt`**

    `string` — Last update date

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "_id": "",
    "name": "",
    "icon": null,
    "description": "",
    "createdAt": "",
    "updatedAt": ""
  }
}
```

### Category

- **Type:**`[ "object", "null" ]`

**Example:**

### CategoriesResponse

- **Type:**`object`

* **`data` (required)**

  `object`

  - **`categories` (required)**

    `array`

    **Items:**

    - **`_id` (required)**

      `string` — Category ID

    - **`name` (required)**

      `string` — Category name

    - **`createdAt`**

      `string` — Creation date

    - **`description`**

      `string` — Category description

    - **`icon`**

      `object` — Category icon file

    - **`updatedAt`**

      `string` — Last update date

  - **`limit` (required)**

    `number` — Items per page

  - **`page` (required)**

    `number` — Current page

  - **`total` (required)**

    `number` — Total number of categories

  - **`totalPages` (required)**

    `number` — Total pages

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "categories": [
      {
        "_id": "",
        "name": "",
        "icon": null,
        "description": "",
        "createdAt": "",
        "updatedAt": ""
      }
    ],
    "total": 1,
    "page": 1,
    "limit": 1,
    "totalPages": 1
  }
}
```

### CreateConversation

- **Type:**`object`

* **`participantId` (required)**

  `string` — ID of the other user in conversation

* **`jobId`**

  `string` — Optional job ID to link conversation

**Example:**

```json
{
  "participantId": "",
  "jobId": ""
}
```

### ConversationIdParam

- **Type:**`object`

* **`id` (required)**

  `string` — Conversation ID

**Example:**

```json
{
  "id": ""
}
```

### GetMessagesQuery

- **Type:**`object`

* **`limit`**

  `string`, default: `"50"` — Number of messages per page

* **`page`**

  `string`, default: `"1"` — Page number for pagination

**Example:**

```json
{
  "page": "1",
  "limit": "50"
}
```

### ConversationResponse

- **Type:**`object`

* **`data` (required)**

  `object | null`

  - **`_id` (required)**

    `string` — Conversation ID

  - **`lastMessage` (required)**

    `object` — Last message preview

    - **`senderId` (required)**

      `string`

    - **`text` (required)**

      `string`

    - **`timestamp` (required)**

      `string`, format: `date-time`

  - **`participants` (required)**

    `array` — Array of participant user IDs

    **Items:**

    `string`

  - **`unreadCount` (required)**

    `object` — Unread message count per user

  - **`createdAt`**

    `string`, format: `date-time`

  - **`jobId`**

    `string` — Related job ID

  - **`updatedAt`**

    `string`, format: `date-time`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "_id": "",
    "participants": [
      ""
    ],
    "lastMessage": {
      "text": "",
      "senderId": "",
      "timestamp": ""
    },
    "unreadCount": {
      "additionalProperty": 1
    },
    "jobId": "",
    "createdAt": "",
    "updatedAt": ""
  }
}
```

### Conversation

- **Type:**`[ "object", "null" ]`

**Example:**

### ConversationsResponse

- **Type:**`object`

* **`data` (required)**

  `array`

  **Items:**

  - **`_id` (required)**

    `string` — Conversation ID

  - **`lastMessage` (required)**

    `object` — Last message preview

    - **`senderId` (required)**

      `string`

    - **`text` (required)**

      `string`

    - **`timestamp` (required)**

      `string`, format: `date-time`

  - **`participants` (required)**

    `array` — Array of participant user IDs

    **Items:**

    `string`

  - **`unreadCount` (required)**

    `object` — Unread message count per user

  - **`createdAt`**

    `string`, format: `date-time`

  - **`jobId`**

    `string` — Related job ID

  - **`updatedAt`**

    `string`, format: `date-time`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": [
    {
      "_id": "",
      "participants": [
        ""
      ],
      "lastMessage": {
        "text": "",
        "senderId": "",
        "timestamp": ""
      },
      "unreadCount": {
        "additionalProperty": 1
      },
      "jobId": "",
      "createdAt": "",
      "updatedAt": ""
    }
  ]
}
```

### MessagesResponse

- **Type:**`object`

* **`data` (required)**

  `object`

  - **`currentPage` (required)**

    `number`

  - **`hasMore` (required)**

    `boolean`

  - **`messages` (required)**

    `array`

    **Items:**

    - **`_id` (required)**

      `string` — Message ID

    - **`content` (required)**

      `object`

      - **`fileName`**

        `string` — File name

      - **`fileSize`**

        `number` — File size in bytes

      - **`fileUrl`**

        `string` — File URL

      - **`text`**

        `string` — Text message content

    - **`conversationId` (required)**

      `string` — Conversation ID

    - **`messageType` (required)**

      `string`, possible values: `"text", "image", "file"` — Type of message

    - **`receiverId` (required)**

      `string` — Receiver user ID

    - **`senderId` (required)**

      `string` — Sender user ID

    - **`status` (required)**

      `string`, possible values: `"sent", "delivered", "read"` — Message delivery status

    - **`timestamp` (required)**

      `string`, format: `date-time` — Message timestamp

    - **`createdAt`**

      `string`, format: `date-time`

  - **`totalPages` (required)**

    `number`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "messages": [
      {
        "_id": "",
        "conversationId": "",
        "senderId": "",
        "receiverId": "",
        "messageType": "text",
        "content": {
          "text": "",
          "fileUrl": "",
          "fileName": "",
          "fileSize": 1
        },
        "status": "sent",
        "timestamp": "",
        "createdAt": ""
      }
    ],
    "hasMore": true,
    "totalPages": 1,
    "currentPage": 1
  }
}
```

### Message

- **Type:**`object`

* **`_id` (required)**

  `string` — Message ID

* **`content` (required)**

  `object`

  - **`fileName`**

    `string` — File name

  - **`fileSize`**

    `number` — File size in bytes

  - **`fileUrl`**

    `string` — File URL

  - **`text`**

    `string` — Text message content

* **`conversationId` (required)**

  `string` — Conversation ID

* **`messageType` (required)**

  `string`, possible values: `"text", "image", "file"` — Type of message

* **`receiverId` (required)**

  `string` — Receiver user ID

* **`senderId` (required)**

  `string` — Sender user ID

* **`status` (required)**

  `string`, possible values: `"sent", "delivered", "read"` — Message delivery status

* **`timestamp` (required)**

  `string`, format: `date-time` — Message timestamp

* **`createdAt`**

  `string`, format: `date-time`

**Example:**

```json
{
  "_id": "",
  "conversationId": "",
  "senderId": "",
  "receiverId": "",
  "messageType": "text",
  "content": {
    "text": "",
    "fileUrl": "",
    "fileName": "",
    "fileSize": 1
  },
  "status": "sent",
  "timestamp": "",
  "createdAt": ""
}
```

### MessageContent

- **Type:**`object`

* **`fileName`**

  `string` — File name

* **`fileSize`**

  `number` — File size in bytes

* **`fileUrl`**

  `string` — File URL

* **`text`**

  `string` — Text message content

**Example:**

```json
{
  "text": "",
  "fileUrl": "",
  "fileName": "",
  "fileSize": 1
}
```

### ImageUploadResponse

- **Type:**`object`

* **`data` (required)**

  `object`

  - **`fileId` (required)**

    `string` — ImageKit file ID

  - **`filename` (required)**

    `string` — Generated filename

  - **`filePath` (required)**

    `string` — File path in ImageKit

  - **`mimetype` (required)**

    `string` — MIME type of the image

  - **`originalName` (required)**

    `string` — Original filename

  - **`size` (required)**

    `number` — File size in bytes

  - **`url` (required)**

    `string` — Full URL of the uploaded image

  - **`thumbnailUrl`**

    `string` — Thumbnail URL

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "url": "",
    "fileId": "",
    "filename": "",
    "originalName": "",
    "size": 1,
    "mimetype": "",
    "thumbnailUrl": "",
    "filePath": ""
  }
}
```

### ImageKitAuthResponse

- **Type:**`object`

* **`data` (required)**

  `object`

  - **`expire` (required)**

    `number` — Token expiration timestamp (Unix)

  - **`publicKey` (required)**

    `string` — ImageKit public key

  - **`signature` (required)**

    `string` — Signature for authentication

  - **`token` (required)**

    `string` — Authentication token for ImageKit

  - **`urlEndpoint` (required)**

    `string` — ImageKit URL endpoint

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "token": "",
    "expire": 1,
    "signature": "",
    "publicKey": "",
    "urlEndpoint": ""
  }
}
```

### ImageUploadErrorResponse

- **Type:**`object`

* **`data` (required)**

  `object`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

### CompleteDelivery

- **Type:**`object`

* **`jobId` (required)**

  `string` — ID of the job to mark as complete

**Example:**

```json
{
  "jobId": ""
}
```

### CompleteDeliveryResponse

- **Type:**`object`

* **`data` (required)**

  `object`

  - **`completionRequest` (required)**

    `object`

    - **`_id` (required)**

      `string`

    - **`contractor` (required)**

      `string`

    - **`customer` (required)**

      `string`

    - **`job` (required)**

      `string`

    - **`offer` (required)**

      `string`

    - **`requestedAt` (required)**

      `string`

    - **`status` (required)**

      `string`

  - **`job` (required)**

    `object`

    - **`_id` (required)**

      `string`

    - **`completedAt` (required)**

      `string`

    - **`status` (required)**

      `string`

    - **`title` (required)**

      `string`

  - **`message` (required)**

    `string`

  - **`payment` (required)**

    `object`

    - **`contractorPayout` (required)**

      `number`

    - **`jobAmount` (required)**

      `number`

    - **`platformFee` (required)**

      `number`

    - **`serviceFee` (required)**

      `number`

    - **`totalAdminCommission` (required)**

      `number`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "completionRequest": {
      "_id": "",
      "job": "",
      "customer": "",
      "contractor": "",
      "offer": "",
      "status": "",
      "requestedAt": ""
    },
    "job": {
      "_id": "",
      "title": "",
      "status": "",
      "completedAt": ""
    },
    "payment": {
      "jobAmount": 1,
      "serviceFee": 1,
      "contractorPayout": 1,
      "platformFee": 1,
      "totalAdminCommission": 1
    },
    "message": ""
  }
}
```

### JobResponse

- **Type:**`object`

* **`_id` (required)**

  `string`

* **`completedAt` (required)**

  `string`

* **`status` (required)**

  `string`

* **`title` (required)**

  `string`

**Example:**

```json
{
  "_id": "",
  "title": "",
  "status": "",
  "completedAt": ""
}
```

### PaymentBreakdown

- **Type:**`object`

* **`contractorPayout` (required)**

  `number`

* **`jobAmount` (required)**

  `number`

* **`platformFee` (required)**

  `number`

* **`serviceFee` (required)**

  `number`

* **`totalAdminCommission` (required)**

  `number`

**Example:**

```json
{
  "jobAmount": 1,
  "serviceFee": 1,
  "contractorPayout": 1,
  "platformFee": 1,
  "totalAdminCommission": 1
}
```

### DeliveryErrorResponse

- **Type:**`object`

* **`data` (required)**

  `object`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

### SendInvite

- **Type:**`object`

* **`contractorId` (required)**

  `string` — ID of the contractor to invite

* **`message`**

  `string` — Optional message to the contractor

**Example:**

```json
{
  "contractorId": "",
  "message": ""
}
```

### RejectInvite

- **Type:**`object`

* **`rejectionReason`**

  `string` — Optional reason for rejection

**Example:**

```json
{
  "rejectionReason": ""
}
```

### JobIdParam

- **Type:**`object`

* **`jobId` (required)**

  `string` — Job ID

**Example:**

```json
{
  "jobId": ""
}
```

### InviteIdParam

- **Type:**`object`

* **`inviteId` (required)**

  `string` — Invite ID

**Example:**

```json
{
  "inviteId": ""
}
```

### SearchSentInvites

- **Type:**`object`

* **`jobId`**

  `string` — Filter by specific job ID

* **`limit`**

  `string` — Items per page

* **`page`**

  `string` — Page number

* **`status`**

  `string`, possible values: `"pending", "accepted", "rejected", "cancelled", "invited", "engaged", "requested", "offered"` — Filter by invite status (supports both old and new status values)

**Example:**

```json
{
  "jobId": "",
  "status": "pending",
  "page": "",
  "limit": ""
}
```

### SearchReceivedInvites

- **Type:**`object`

* **`limit`**

  `string` — Items per page

* **`page`**

  `string` — Page number

* **`status`**

  `string`, possible values: `"pending", "accepted", "rejected", "cancelled", "invited", "engaged", "requested", "offered"` — Filter by invite status (supports both old and new status values)

**Example:**

```json
{
  "status": "pending",
  "page": "",
  "limit": ""
}
```

### SearchAvailableContractors

- **Type:**`object`

* **`category`**

  `string` — Filter by category ID

* **`limit`**

  `string` — Items per page

* **`location`**

  `string` — Filter by location ID

* **`maxBudget`**

  `string` — Maximum budget

* **`minBudget`**

  `string` — Minimum budget

* **`page`**

  `string` — Page number

* **`search`**

  `string` — Search in contractor name, bio, or skills

**Example:**

```json
{
  "search": "",
  "category": "",
  "location": "",
  "minBudget": "",
  "maxBudget": "",
  "page": "",
  "limit": ""
}
```

### InviteResponse

- **Type:**`object`

* **`data` (required)**

  `object`

  - **`_id` (required)**

    `string`

  - **`createdAt` (required)**

    `string | null`, format: `date-time`

  - **`sender` (required)**

    `string`

  - **`status` (required)**

    `string`, possible values: `"invited", "requested", "engaged", "offered", "cancelled"`

  - **`updatedAt` (required)**

    `string | null`, format: `date-time`

  - **`contractor`**

    `object`

  - **`customer`**

    `object`

  - **`job`**

    `object`

  - **`offerId`**

    `string`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "_id": "",
    "job": null,
    "customer": null,
    "contractor": null,
    "status": "invited",
    "sender": "",
    "offerId": "",
    "createdAt": null,
    "updatedAt": null
  }
}
```

### InvitesResponse

- **Type:**`object`

* **`data` (required)**

  `object`

  - **`invites` (required)**

    `array`

    **Items:**

    - **`_id` (required)**

      `string`

    - **`createdAt` (required)**

      `string | null`, format: `date-time`

    - **`sender` (required)**

      `string`

    - **`status` (required)**

      `string`, possible values: `"invited", "requested", "engaged", "offered", "cancelled"`

    - **`updatedAt` (required)**

      `string | null`, format: `date-time`

    - **`contractor`**

      `object`

    - **`customer`**

      `object`

    - **`job`**

      `object`

    - **`offerId`**

      `string`

  - **`limit` (required)**

    `number` — Items per page

  - **`page` (required)**

    `number` — Current page

  - **`total` (required)**

    `number` — Total number of invites

  - **`totalPages` (required)**

    `number` — Total pages

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "invites": [
      {
        "_id": "",
        "job": null,
        "customer": null,
        "contractor": null,
        "status": "invited",
        "sender": "",
        "offerId": "",
        "createdAt": null,
        "updatedAt": null
      }
    ],
    "total": 1,
    "page": 1,
    "limit": 1,
    "totalPages": 1
  }
}
```

### JobInviteSuccessResponse

- **Type:**`object`

* **`data` (required)**

  `object`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

### JobInviteErrorResponse

- **Type:**`object`

* **`data` (required)**

  `object`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

### ApplyForJob

- **Type:**`object`

* **`message`**

  `string` — Optional message to the job owner

**Example:**

```json
{
  "message": ""
}
```

### ApplicationIdParam

- **Type:**`object`

* **`applicationId` (required)**

  `string` — Application ID

**Example:**

```json
{
  "applicationId": ""
}
```

### SearchMyApplications

- **Type:**`object`

* **`category`**

  `string` — Filter by category ID

* **`limit`**

  `string` — Items per page

* **`location`**

  `string` — Filter by location ID

* **`maxBudget`**

  `string` — Maximum job budget

* **`minBudget`**

  `string` — Minimum job budget

* **`page`**

  `string` — Page number

* **`search`**

  `string` — Search term for job title or description

* **`status`**

  `string`, possible values: `"pending", "accepted", "rejected"` — Filter by application status

**Example:**

```json
{
  "search": "",
  "category": "",
  "status": "pending",
  "minBudget": "",
  "maxBudget": "",
  "location": "",
  "page": "",
  "limit": ""
}
```

### SearchCustomerApplications

- **Type:**`object`

* **`jobId`**

  `string` — Filter by specific job ID

* **`limit`**

  `string` — Items per page

* **`page`**

  `string` — Page number

* **`status`**

  `string`, possible values: `"pending", "accepted", "rejected"` — Filter by application status

**Example:**

```json
{
  "jobId": "",
  "status": "pending",
  "page": "",
  "limit": ""
}
```

### ApplicationResponse

- **Type:**`object`

* **`data` (required)**

  `object`

  - **`_id` (required)**

    `string`

  - **`createdAt` (required)**

    `string | null`, format: `date-time`

  - **`status` (required)**

    `string`, possible values: `"pending", "accepted", "rejected"`

  - **`updatedAt` (required)**

    `string | null`, format: `date-time`

  - **`contractor`**

    `object`

  - **`job`**

    `object`

  - **`message`**

    `string`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "_id": "",
    "job": null,
    "contractor": null,
    "status": "pending",
    "message": "",
    "createdAt": null,
    "updatedAt": null
  }
}
```

### ApplicationsResponse

- **Type:**`object`

* **`data` (required)**

  `object`

  - **`applications` (required)**

    `array`

    **Items:**

    - **`_id` (required)**

      `string`

    - **`createdAt` (required)**

      `string | null`, format: `date-time`

    - **`status` (required)**

      `string`, possible values: `"pending", "accepted", "rejected"`

    - **`updatedAt` (required)**

      `string | null`, format: `date-time`

    - **`contractor`**

      `object`

    - **`job`**

      `object`

    - **`message`**

      `string`

  - **`limit` (required)**

    `number` — Items per page

  - **`page` (required)**

    `number` — Current page

  - **`total` (required)**

    `number` — Total number of applications

  - **`totalPages` (required)**

    `number` — Total pages

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "applications": [
      {
        "_id": "",
        "job": null,
        "contractor": null,
        "status": "pending",
        "message": "",
        "createdAt": null,
        "updatedAt": null
      }
    ],
    "total": 1,
    "page": 1,
    "limit": 1,
    "totalPages": 1
  }
}
```

### JobRequestSuccessResponse

- **Type:**`object`

* **`data` (required)**

  `object`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

### JobRequestErrorResponse

- **Type:**`object`

* **`data` (required)**

  `object`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

### CreateJob

- **Type:**`object`

* **`address` (required)**

  `string` — Job address

* **`budget` (required)**

  `number` — Job budget

* **`category` (required)**

  `array` — Array of category IDs

  **Items:**

  `string`

* **`coverImg` (required)**

  `string` — Cover image URL

* **`description` (required)**

  `string` — Job description

* **`location` (required)**

  `string` — Job location ID

* **`title` (required)**

  `string` — Job title

* **`date`**

  `object` — Job date

**Example:**

```json
{
  "title": "",
  "category": [
    ""
  ],
  "description": "",
  "location": "",
  "address": "",
  "budget": 1,
  "date": "",
  "coverImg": ""
}
```

### UpdateJob

- **Type:**`object`

* **`address`**

  `string`

* **`budget`**

  `number`

* **`category`**

  `array`

  **Items:**

  `string`

* **`coverImg`**

  `string`, format: `uri`

* **`date`**

  `object`

* **`description`**

  `string`

* **`location`**

  `string`

* **`status`**

  `string`, possible values: `"open", "in_progress", "completed", "cancelled"`

* **`title`**

  `string`

**Example:**

```json
{
  "title": "",
  "category": [
    ""
  ],
  "description": "",
  "location": "",
  "address": "",
  "budget": 1,
  "date": "",
  "coverImg": "",
  "status": "open"
}
```

### SearchJob

- **Type:**`object`

* **`category`**

  `string` — Filter by category ID

* **`contractorId`**

  `string` — Filter by contractor ID - excludes jobs where this contractor has been invited or has applied

* **`limit`**

  `string` — Items per page

* **`location`**

  `string` — Filter by location ID

* **`maxBudget`**

  `string` — Maximum budget

* **`minBudget`**

  `string` — Minimum budget

* **`page`**

  `string` — Page number

* **`search`**

  `string` — Search term for title or description

* **`status`**

  `string`, possible values: `"open", "in_progress", "completed", "cancelled"` — Filter by status

**Example:**

```json
{
  "search": "",
  "category": "",
  "status": "open",
  "minBudget": "",
  "maxBudget": "",
  "location": "",
  "contractorId": "",
  "page": "",
  "limit": ""
}
```

### SearchOfferSendJob

- **Type:**`object`

* **`contractorId`**

  `string` — Filter by contractor ID - excludes jobs where this contractor has been invited or has applied

* **`limit`**

  `string` — Items per page

* **`page`**

  `string` — Page number

**Example:**

```json
{
  "contractorId": "",
  "page": "",
  "limit": ""
}
```

### MyCurrentJobList

- **Type:**`object`

* **`limit`**

  `string` — Items per page

* **`page`**

  `string` — Page number

* **`status`**

  `string`, possible values: `"offered", "assigned"` — Filter by status

**Example:**

```json
{
  "status": "offered",
  "page": "",
  "limit": ""
}
```

### JobsResponse

- **Type:**`object`

* **`data` (required)**

  `object`

  - **`jobs` (required)**

    `array`

    **Items:**

    - **`_id` (required)**

      `string` — Job ID

    - **`address` (required)**

      `string` — Job address

    - **`budget` (required)**

      `number` — Job budget

    - **`category` (required)**

      `array` — Array of category IDs

      **Items:**

      `string`

    - **`coverImg` (required)**

      `string`, format: `uri` — Cover image URL

    - **`customerId` (required)**

      `string` — Customer ID who posted the job

    - **`date` (required)**

      `object` — Job date

    - **`description` (required)**

      `string` — Job description

    - **`location` (required)**

      `string` — Job location ID

    - **`status` (required)**

      `string`, possible values: `"open", "in_progress", "completed", "cancelled"` — Job status

    - **`title` (required)**

      `string` — Job title

    - **`contractorId`**

      `string` — Assigned contractor ID

    - **`createdAt`**

      `string` — Creation date

    - **`isApplied`**

      `boolean` — Indicates if the authenticated contractor has applied to this job

    - **`updatedAt`**

      `string` — Last update date

  - **`limit` (required)**

    `number` — Items per page

  - **`page` (required)**

    `number` — Current page

  - **`total` (required)**

    `number` — Total number of jobs

  - **`totalPages` (required)**

    `number` — Total pages

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "jobs": [
      {
        "_id": "",
        "title": "",
        "category": [
          ""
        ],
        "description": "",
        "location": "",
        "address": "",
        "budget": 1,
        "date": "",
        "coverImg": "",
        "customerId": "",
        "contractorId": "",
        "status": "open",
        "isApplied": true,
        "createdAt": "",
        "updatedAt": ""
      }
    ],
    "total": 1,
    "page": 1,
    "limit": 1,
    "totalPages": 1
  }
}
```

### Job

- **Type:**`object`

* **`_id` (required)**

  `string` — Job ID

* **`address` (required)**

  `string` — Job address

* **`budget` (required)**

  `number` — Job budget

* **`category` (required)**

  `array` — Array of category IDs

  **Items:**

  `string`

* **`coverImg` (required)**

  `string`, format: `uri` — Cover image URL

* **`customerId` (required)**

  `string` — Customer ID who posted the job

* **`date` (required)**

  `object` — Job date

* **`description` (required)**

  `string` — Job description

* **`location` (required)**

  `string` — Job location ID

* **`status` (required)**

  `string`, possible values: `"open", "in_progress", "completed", "cancelled"` — Job status

* **`title` (required)**

  `string` — Job title

* **`contractorId`**

  `string` — Assigned contractor ID

* **`createdAt`**

  `string` — Creation date

* **`isApplied`**

  `boolean` — Indicates if the authenticated contractor has applied to this job

* **`updatedAt`**

  `string` — Last update date

**Example:**

```json
{
  "_id": "",
  "title": "",
  "category": [
    ""
  ],
  "description": "",
  "location": "",
  "address": "",
  "budget": 1,
  "date": "",
  "coverImg": "",
  "customerId": "",
  "contractorId": "",
  "status": "open",
  "isApplied": true,
  "createdAt": "",
  "updatedAt": ""
}
```

### UpdateJobStatus

- **Type:**`object`

* **`status` (required)**

  `string`, possible values: `"assigned", "in_progress", "completed", "cancelled"` — New job status

**Example:**

```json
{
  "status": "assigned"
}
```

### CancelJob

- **Type:**`object`

* **`reason` (required)**

  `string` — Reason for cancellation

**Example:**

```json
{
  "reason": ""
}
```

### CompleteJobResponse

- **Type:**`object`

* **`data` (required)**

  `object`

  - **`job` (required)**

    `object`

    - **`_id` (required)**

      `string`

    - **`completedAt` (required)**

      `string`

    - **`status` (required)**

      `string`

  - **`payment` (required)**

    `object`

    - **`adminCommission` (required)**

      `number`

    - **`contractorPayout` (required)**

      `number`

    - **`serviceFee` (required)**

      `number`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "job": {
      "_id": "",
      "status": "",
      "completedAt": ""
    },
    "payment": {
      "serviceFee": 1,
      "contractorPayout": 1,
      "adminCommission": 1
    }
  }
}
```

### CancelJobResponse

- **Type:**`object`

* **`data` (required)**

  `object`

  - **`job` (required)**

    `object`

    - **`_id` (required)**

      `string`

    - **`cancellationReason` (required)**

      `string`

    - **`cancelledAt` (required)**

      `string`

    - **`status` (required)**

      `string`

  - **`refundAmount` (required)**

    `number`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "job": {
      "_id": "",
      "status": "",
      "cancelledAt": "",
      "cancellationReason": ""
    },
    "refundAmount": 1
  }
}
```

### CreateLocation

- **Type:**`object`

* **`coordinates` (required)**

  `object` — Geographic coordinates

  - **`lat` (required)**

    `number` — Latitude

  - **`lng` (required)**

    `number` — Longitude

* **`name` (required)**

  `string` — City name

* **`state` (required)**

  `string` — State code

**Example:**

```json
{
  "name": "",
  "state": "",
  "coordinates": {
    "lat": 1,
    "lng": 1
  }
}
```

### UpdateLocation

- **Type:**`object`

* **`coordinates`**

  `object`

  - **`lat` (required)**

    `number` — Latitude

  - **`lng` (required)**

    `number` — Longitude

* **`name`**

  `string`

* **`state`**

  `string`

**Example:**

```json
{
  "name": "",
  "state": "",
  "coordinates": {
    "lat": 1,
    "lng": 1
  }
}
```

### LocationIdParam

- **Type:**`object`

* **`id` (required)**

  `string` — Location ID

**Example:**

```json
{
  "id": ""
}
```

### LocationQuery

- **Type:**

**Example:**

### PaginationQuery

- **Type:**`object`

* **`limit`**

  `string` — Items per page (default: 10)

* **`page`**

  `string` — Page number (default: 1)

**Example:**

```json
{
  "page": "1",
  "limit": "10"
}
```

### LocationResponse

- **Type:**`object`

* **`data` (required)**

  `object | null`

  - **`_id` (required)**

    `string` — Location ID

  - **`coordinates` (required)**

    `object` — Geographic coordinates

    - **`lat` (required)**

      `number` — Latitude

    - **`lng` (required)**

      `number` — Longitude

  - **`name` (required)**

    `string` — City name

  - **`state` (required)**

    `string` — State code

  - **`createdAt`**

    `string | null`, format: `date-time` — Creation timestamp

  - **`updatedAt`**

    `string | null`, format: `date-time` — Last update timestamp

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

* **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": {
    "_id": "",
    "name": "",
    "state": "",
    "coordinates": {
      "lat": 1,
      "lng": 1
    },
    "createdAt": null,
    "updatedAt": null
  }
}
```

### LocationsResponse

- **Type:**`object`

* **`data` (required)**

  `object`

  - **`limit` (required)**

    `number`

  - **`locations` (required)**

    `array`

    **Items:**

    - **`_id` (required)**

      `string` — Location ID

    - **`coordinates` (required)**

      `object` — Geographic coordinates

      - **`lat` (required)**

        `number` — Latitude

      - **`lng` (required)**

        `number` — Longitude

    - **`name` (required)**

      `string` — City name

    - **`state` (required)**

      `string` — State code

    - **`createdAt`**

      `string | null`, format: `date-time` — Creation timestamp

    - **`updatedAt`**

      `string | null`, format: `date-time` — Last update timestamp

  - **`page` (required)**

    `number`

  - **`total` (required)**

    `number`

  - **`totalPages` (required)**

    `number`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

* **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": {
    "locations": [
      {
        "_id": "",
        "name": "",
        "state": "",
        "coordinates": {
          "lat": 1,
          "lng": 1
        },
        "createdAt": null,
        "updatedAt": null
      }
    ],
    "total": 1,
    "page": 1,
    "limit": 1,
    "totalPages": 1
  }
}
```

### RegisterFcmToken

- **Type:**`object`

* **`deviceId` (required)**

  `string` — Device ID

* **`deviceType` (required)**

  `string`, possible values: `"android", "ios"` — Device type

* **`token` (required)**

  `string` — FCM device token

**Example:**

```json
{
  "token": "",
  "deviceId": "",
  "deviceType": "android"
}
```

### SendNotification

- **Type:**`object`

* **`body` (required)**

  `string` — Notification body

* **`title` (required)**

  `string` — Notification title

* **`userId` (required)**

  `string` — Target user ID

* **`type`**

  `string`, possible values: `"job_posted", "job_application", "job_invite", "job_invite_accept", "job_request", "sent_offer", "accept_offer", "job_completed", "review_submitted", "offer_reject", "general"` — Notification type

**Example:**

```json
{
  "userId": "",
  "title": "",
  "body": "",
  "type": "job_posted"
}
```

### MarkAsRead

- **Type:**`object`

* **`notificationIds` (required)**

  `array` — Array of notification IDs to mark as read

  **Items:**

  `string`

**Example:**

```json
{
  "notificationIds": [
    ""
  ]
}
```

### NotificationIdParam

- **Type:**`object`

* **`id` (required)**

  `string` — Notification ID

**Example:**

```json
{
  "id": ""
}
```

### NotificationResponse

- **Type:**`object`

* **`data` (required)**

  `object | null`

  - **`_id` (required)**

    `string` — Notification ID

  - **`body` (required)**

    `string` — Notification body

  - **`isRead` (required)**

    `boolean` — Read status

  - **`isSent` (required)**

    `boolean` — Sent status

  - **`title` (required)**

    `string` — Notification title

  - **`type` (required)**

    `string`, possible values: `"job_posted", "job_application", "job_invite", "job_invite_accept", "job_request", "sent_offer", "accept_offer", "job_completed", "review_submitted", "offer_reject", "general"` — Notification type

  - **`userId` (required)**

    `string` — User ID

  - **`createdAt`**

    `string`, format: `date-time` — Creation timestamp

  - **`data`**

    `object` — Additional data

  - **`readAt`**

    `string`, format: `date-time` — Read timestamp

  - **`sentAt`**

    `string`, format: `date-time` — Sent timestamp

  - **`updatedAt`**

    `string`, format: `date-time` — Update timestamp

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "_id": "",
    "userId": "",
    "title": "",
    "body": "",
    "type": "job_posted",
    "data": {
      "additionalProperty": null
    },
    "isRead": true,
    "isSent": true,
    "sentAt": "",
    "readAt": "",
    "createdAt": "",
    "updatedAt": ""
  }
}
```

### NotificationsResponse

- **Type:**`object`

* **`data` (required)**

  `array`

  **Items:**

  - **`_id` (required)**

    `string` — Notification ID

  - **`body` (required)**

    `string` — Notification body

  - **`isRead` (required)**

    `boolean` — Read status

  - **`isSent` (required)**

    `boolean` — Sent status

  - **`title` (required)**

    `string` — Notification title

  - **`type` (required)**

    `string`, possible values: `"job_posted", "job_application", "job_invite", "job_invite_accept", "job_request", "sent_offer", "accept_offer", "job_completed", "review_submitted", "offer_reject", "general"` — Notification type

  - **`userId` (required)**

    `string` — User ID

  - **`createdAt`**

    `string`, format: `date-time` — Creation timestamp

  - **`data`**

    `object` — Additional data

  - **`readAt`**

    `string`, format: `date-time` — Read timestamp

  - **`sentAt`**

    `string`, format: `date-time` — Sent timestamp

  - **`updatedAt`**

    `string`, format: `date-time` — Update timestamp

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": [
    {
      "_id": "",
      "userId": "",
      "title": "",
      "body": "",
      "type": "job_posted",
      "data": {
        "additionalProperty": null
      },
      "isRead": true,
      "isSent": true,
      "sentAt": "",
      "readAt": "",
      "createdAt": "",
      "updatedAt": ""
    }
  ]
}
```

### FcmTokenResponse

- **Type:**`object`

* **`data` (required)**

  `object | null`

  - **`deviceId` (required)**

    `string`

  - **`deviceType` (required)**

    `string`, possible values: `"android", "ios"`

  - **`token` (required)**

    `string`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "token": "",
    "deviceId": "",
    "deviceType": "android"
  }
}
```

### SendOffer

- **Type:**`object`

* **`amount` (required)**

  `number` — Job budget amount

* **`timeline` (required)**

  `string` — Expected completion time

* **`description`**

  `string` — Work description

**Example:**

```json
{
  "amount": 1,
  "timeline": "",
  "description": ""
}
```

### SendDirectJobOffer

- **Type:**`object`

* **`amount` (required)**

  `number` — Job budget amount

* **`contractorId` (required)**

  `string` — Contractor user ID

* **`timeline` (required)**

  `string` — Expected completion time

* **`description`**

  `string` — Work description

**Example:**

```json
{
  "contractorId": "",
  "amount": 1,
  "timeline": "",
  "description": ""
}
```

### OfferIdParam

- **Type:**`object`

* **`offerId` (required)**

  `string` — Offer ID

**Example:**

```json
{
  "offerId": ""
}
```

### RejectOffer

- **Type:**`object`

* **`reason` (required)**

  `string` — Rejection reason

**Example:**

```json
{
  "reason": ""
}
```

### CancelOffer

- **Type:**`object`

* **`contractor` (required)**

  `string` — Contractor user ID

* **`customer` (required)**

  `string` — Customer user ID

* **`jobId` (required)**

  `string` — Job ID

* **`reason`**

  `string` — Reason for cancelling the offer

**Example:**

```json
{
  "customer": "",
  "contractor": "",
  "jobId": "",
  "reason": ""
}
```

### CancelOfferResponse

- **Type:**`object`

* **`data` (required)**

  `object`

  - **`message` (required)**

    `string`

  - **`offer` (required)**

    `object`

    - **`_id` (required)**

      `string`

    - **`cancelledAt` (required)**

      `string`

    - **`status` (required)**

      `string`

    - **`cancellationReason`**

      `string`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "offer": {
      "_id": "",
      "status": "",
      "cancelledAt": "",
      "cancellationReason": ""
    },
    "message": ""
  }
}
```

### OfferErrorResponse

- **Type:**`object`

* **`data` (required)**

  `object`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

### Offer

- **Type:**`object`

* **`_id` (required)**

  `string`

* **`amount` (required)**

  `number`

* **`application` (required)**

  `string`

* **`contractor` (required)**

  `string`

* **`contractorPayout` (required)**

  `number`

* **`createdAt` (required)**

  `string`

* **`customer` (required)**

  `string`

* **`description` (required)**

  `string`

* **`job` (required)**

  `string`

* **`platformFee` (required)**

  `number`

* **`serviceFee` (required)**

  `number`

* **`status` (required)**

  `string`, possible values: `"pending", "accepted", "rejected", "cancelled", "completed", "expired"`

* **`timeline` (required)**

  `string`

* **`totalCharge` (required)**

  `number`

* **`updatedAt` (required)**

  `string`

* **`acceptedAt`**

  `string`

* **`expiresAt`**

  `string`

* **`rejectedAt`**

  `string`

* **`rejectionReason`**

  `string`

**Example:**

```json
{
  "_id": "",
  "job": "",
  "customer": "",
  "contractor": "",
  "application": "",
  "amount": 1,
  "platformFee": 1,
  "serviceFee": 1,
  "contractorPayout": 1,
  "totalCharge": 1,
  "timeline": "",
  "description": "",
  "status": "pending",
  "expiresAt": "",
  "acceptedAt": "",
  "rejectedAt": "",
  "rejectionReason": "",
  "createdAt": "",
  "updatedAt": ""
}
```

### SendOfferResponse

- **Type:**`object`

* **`data` (required)**

  `object`

  - **`amounts` (required)**

    `object`

    - **`adminTotal` (required)**

      `number`

    - **`contractorPayout` (required)**

      `number`

    - **`jobBudget` (required)**

      `number`

    - **`platformFee` (required)**

      `number`

    - **`serviceFee` (required)**

      `number`

    - **`totalCharge` (required)**

      `number`

  - **`offer` (required)**

    `object`

    - **`_id` (required)**

      `string`

    - **`amount` (required)**

      `number`

    - **`application` (required)**

      `string`

    - **`contractor` (required)**

      `string`

    - **`contractorPayout` (required)**

      `number`

    - **`createdAt` (required)**

      `string`

    - **`customer` (required)**

      `string`

    - **`description` (required)**

      `string`

    - **`job` (required)**

      `string`

    - **`platformFee` (required)**

      `number`

    - **`serviceFee` (required)**

      `number`

    - **`status` (required)**

      `string`, possible values: `"pending", "accepted", "rejected", "cancelled", "completed", "expired"`

    - **`timeline` (required)**

      `string`

    - **`totalCharge` (required)**

      `number`

    - **`updatedAt` (required)**

      `string`

    - **`acceptedAt`**

      `string`

    - **`expiresAt`**

      `string`

    - **`rejectedAt`**

      `string`

    - **`rejectionReason`**

      `string`

  - **`walletBalance` (required)**

    `number`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "offer": {
      "_id": "",
      "job": "",
      "customer": "",
      "contractor": "",
      "application": "",
      "amount": 1,
      "platformFee": 1,
      "serviceFee": 1,
      "contractorPayout": 1,
      "totalCharge": 1,
      "timeline": "",
      "description": "",
      "status": "pending",
      "expiresAt": "",
      "acceptedAt": "",
      "rejectedAt": "",
      "rejectionReason": "",
      "createdAt": "",
      "updatedAt": ""
    },
    "walletBalance": 1,
    "amounts": {
      "jobBudget": 1,
      "platformFee": 1,
      "serviceFee": 1,
      "contractorPayout": 1,
      "totalCharge": 1,
      "adminTotal": 1
    }
  }
}
```

### AcceptOfferResponse

- **Type:**`object`

* **`data` (required)**

  `object`

  - **`job` (required)**

    `object`

    - **`_id` (required)**

      `string`

    - **`assignedAt` (required)**

      `string`

    - **`contractorId` (required)**

      `string`

    - **`status` (required)**

      `string`

  - **`offer` (required)**

    `object`

    - **`_id` (required)**

      `string`

    - **`amount` (required)**

      `number`

    - **`application` (required)**

      `string`

    - **`contractor` (required)**

      `string`

    - **`contractorPayout` (required)**

      `number`

    - **`createdAt` (required)**

      `string`

    - **`customer` (required)**

      `string`

    - **`description` (required)**

      `string`

    - **`job` (required)**

      `string`

    - **`platformFee` (required)**

      `number`

    - **`serviceFee` (required)**

      `number`

    - **`status` (required)**

      `string`, possible values: `"pending", "accepted", "rejected", "cancelled", "completed", "expired"`

    - **`timeline` (required)**

      `string`

    - **`totalCharge` (required)**

      `number`

    - **`updatedAt` (required)**

      `string`

    - **`acceptedAt`**

      `string`

    - **`expiresAt`**

      `string`

    - **`rejectedAt`**

      `string`

    - **`rejectionReason`**

      `string`

  - **`payment` (required)**

    `object`

    - **`contractorPayout` (required)**

      `number`

    - **`platformFee` (required)**

      `number`

    - **`serviceFee` (required)**

      `number`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "offer": {
      "_id": "",
      "job": "",
      "customer": "",
      "contractor": "",
      "application": "",
      "amount": 1,
      "platformFee": 1,
      "serviceFee": 1,
      "contractorPayout": 1,
      "totalCharge": 1,
      "timeline": "",
      "description": "",
      "status": "pending",
      "expiresAt": "",
      "acceptedAt": "",
      "rejectedAt": "",
      "rejectionReason": "",
      "createdAt": "",
      "updatedAt": ""
    },
    "job": {
      "_id": "",
      "status": "",
      "contractorId": "",
      "assignedAt": ""
    },
    "payment": {
      "platformFee": 1,
      "serviceFee": 1,
      "contractorPayout": 1
    }
  }
}
```

### RejectOfferResponse

- **Type:**`object`

* **`data` (required)**

  `object`

  - **`offer` (required)**

    `object`

    - **`_id` (required)**

      `string`

    - **`amount` (required)**

      `number`

    - **`application` (required)**

      `string`

    - **`contractor` (required)**

      `string`

    - **`contractorPayout` (required)**

      `number`

    - **`createdAt` (required)**

      `string`

    - **`customer` (required)**

      `string`

    - **`description` (required)**

      `string`

    - **`job` (required)**

      `string`

    - **`platformFee` (required)**

      `number`

    - **`serviceFee` (required)**

      `number`

    - **`status` (required)**

      `string`, possible values: `"pending", "accepted", "rejected", "cancelled", "completed", "expired"`

    - **`timeline` (required)**

      `string`

    - **`totalCharge` (required)**

      `number`

    - **`updatedAt` (required)**

      `string`

    - **`acceptedAt`**

      `string`

    - **`expiresAt`**

      `string`

    - **`rejectedAt`**

      `string`

    - **`rejectionReason`**

      `string`

  - **`refundAmount` (required)**

    `number`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "offer": {
      "_id": "",
      "job": "",
      "customer": "",
      "contractor": "",
      "application": "",
      "amount": 1,
      "platformFee": 1,
      "serviceFee": 1,
      "contractorPayout": 1,
      "totalCharge": 1,
      "timeline": "",
      "description": "",
      "status": "pending",
      "expiresAt": "",
      "acceptedAt": "",
      "rejectedAt": "",
      "rejectionReason": "",
      "createdAt": "",
      "updatedAt": ""
    },
    "refundAmount": 1
  }
}
```

### CreateReview

- **Type:**`object`

* **`rating` (required)**

  `number` — Rating from 0 to 5

* **`rating_message` (required)**

  `string` — Review message/comment

* **`receiverId` (required)**

  `string` — User being reviewed (MongoDB ID)

* **`job_id`**

  `string` — Related job ID (optional)

**Example:**

```json
{
  "receiverId": "",
  "job_id": "",
  "rating": 0,
  "rating_message": ""
}
```

### UpdateReview

- **Type:**`object`

* **`rating`**

  `number` — Rating from 0 to 5

* **`rating_message`**

  `string` — Review message/comment

**Example:**

```json
{
  "rating": 0,
  "rating_message": ""
}
```

### ReviewIdParam

- **Type:**`object`

* **`id` (required)**

  `string` — Review ID

**Example:**

```json
{
  "id": ""
}
```

### SearchReview

- **Type:**`object`

* **`job_id`**

  `string` — Filter by job ID

* **`limit`**

  `string` — Items per page

* **`maxRating`**

  `string` — Maximum rating (0-5)

* **`minRating`**

  `string` — Minimum rating (0-5)

* **`page`**

  `string` — Page number

* **`receiverId`**

  `string` — Filter by receiver (reviewed user) ID

* **`senderId`**

  `string` — Filter by sender (reviewer) ID

**Example:**

```json
{
  "senderId": "",
  "receiverId": "",
  "job_id": "",
  "minRating": "",
  "maxRating": "",
  "page": "",
  "limit": ""
}
```

### ReviewResponse

- **Type:**`object`

* **`data` (required)**

  `object | null`

  - **`_id` (required)**

    `string` — Review ID

  - **`rating` (required)**

    `number` — Rating from 0 to 5

  - **`rating_message` (required)**

    `string` — Review message/comment

  - **`receiverId` (required)**

    `string` — User being reviewed

  - **`senderId` (required)**

    `string` — User who wrote the review

  - **`createdAt`**

    `string | null`, format: `date-time` — Creation date

  - **`job_id`**

    `string` — Related job ID (optional)

  - **`updatedAt`**

    `string | null`, format: `date-time` — Last update date

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

* **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": {
    "_id": "",
    "senderId": "",
    "receiverId": "",
    "job_id": "",
    "rating": 0,
    "rating_message": "",
    "createdAt": null,
    "updatedAt": null
  }
}
```

### Review

- **Type:**`[ "object", "null" ]`

**Example:**

### ReviewsResponse

- **Type:**`object`

* **`data` (required)**

  `object`

  - **`limit` (required)**

    `number` — Items per page

  - **`page` (required)**

    `number` — Current page

  - **`reviews` (required)**

    `array`

    **Items:**

    - **`_id` (required)**

      `string` — Review ID

    - **`rating` (required)**

      `number` — Rating from 0 to 5

    - **`rating_message` (required)**

      `string` — Review message/comment

    - **`receiverId` (required)**

      `string` — User being reviewed

    - **`senderId` (required)**

      `string` — User who wrote the review

    - **`createdAt`**

      `string | null`, format: `date-time` — Creation date

    - **`job_id`**

      `string` — Related job ID (optional)

    - **`updatedAt`**

      `string | null`, format: `date-time` — Last update date

  - **`total` (required)**

    `number` — Total number of reviews

  - **`totalPages` (required)**

    `number` — Total pages

  - **`average`**

    `number` — Average rating (0-5)

  - **`ratingDistribution`**

    `object` — Distribution of ratings (count per star)

    - **`1` (required)**

      `number`

    - **`2` (required)**

      `number`

    - **`3` (required)**

      `number`

    - **`4` (required)**

      `number`

    - **`5` (required)**

      `number`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

* **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": {
    "reviews": [
      {
        "_id": "",
        "senderId": "",
        "receiverId": "",
        "job_id": "",
        "rating": 0,
        "rating_message": "",
        "createdAt": null,
        "updatedAt": null
      }
    ],
    "total": 1,
    "page": 1,
    "limit": 1,
    "totalPages": 1,
    "average": 1,
    "ratingDistribution": {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 1,
      "5": 1
    }
  }
}
```

### ReviewSuccessResponse

- **Type:**`object`

* **`data` (required)**

  `object`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

* **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": null
}
```

### ReviewErrorResponse

- **Type:**`object`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

* **`success` (required)**

  `boolean`

* **`data`**

  `object`

* **`errors`**

  `array`

  **Items:**

  - **`message` (required)**

    `string`

  - **`path` (required)**

    `string`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "success": true,
  "data": null,
  "errors": [
    {
      "path": "",
      "message": ""
    }
  ]
}
```

### SeedSuccessResponse

- **Type:**`object`

* **`data` (required)**

  `array`

  **Items:**

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

* **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 201,
  "message": "Successfully seeded 50 locations",
  "data": [],
  "success": true
}
```

### SeedErrorResponse

- **Type:**`object`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

* **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 400,
  "message": "Database already contains data",
  "success": false
}
```

### TestNotification

- **Type:**`object`

* **`userId` (required)**

  `string` — User ID to send test notification

* **`body`**

  `string` — Custom notification body

* **`title`**

  `string` — Custom notification title

**Example:**

```json
{
  "userId": "",
  "title": "",
  "body": ""
}
```

### TestNotificationResponse

- **Type:**`object`

* **`data` (required)**

  `object | null`

  - **`message` (required)**

    `string`

  - **`success` (required)**

    `boolean`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "success": true,
    "message": ""
  }
}
```

### CreateCertification

- **Type:**`object`

* **`img` (required)**

  `string` — Certification image URL

* **`title` (required)**

  `string` — Certification title

* **`description`**

  `string` — Certification description

* **`expiry_date`**

  `string`, format: `date-time` — Expiry date

* **`issue_date`**

  `string`, format: `date-time` — Issue date

* **`issuing_organization`**

  `string` — Issuing organization

**Example:**

```json
{
  "title": "",
  "img": "",
  "description": "",
  "issue_date": "",
  "expiry_date": "",
  "issuing_organization": ""
}
```

### UpdateCertification

- **Type:**`object`

* **`description`**

  `string` — Certification description

* **`expiry_date`**

  `string`, format: `date-time` — Expiry date

* **`img`**

  `string` — Certification image URL

* **`issue_date`**

  `string`, format: `date-time` — Issue date

* **`issuing_organization`**

  `string` — Issuing organization

* **`title`**

  `string` — Certification title

**Example:**

```json
{
  "title": "",
  "img": "",
  "description": "",
  "issue_date": "",
  "expiry_date": "",
  "issuing_organization": ""
}
```

### CertificationIdParam

- **Type:**`object`

* **`id` (required)**

  `string` — Certification ID

**Example:**

```json
{
  "id": ""
}
```

### CertificationResponse

- **Type:**`object`

* **`data` (required)**

  `object | null`

  - **`_id` (required)**

    `string` — Certification ID

  - **`img` (required)**

    `string` — Certification image URL

  - **`title` (required)**

    `string` — Certification title

  - **`user` (required)**

    `string` — User ID

  - **`createdAt`**

    `string`, format: `date-time`

  - **`description`**

    `string` — Certification description

  - **`expiry_date`**

    `string`, format: `date-time` — Expiry date

  - **`issue_date`**

    `string`, format: `date-time` — Issue date

  - **`issuing_organization`**

    `string` — Issuing organization

  - **`updatedAt`**

    `string`, format: `date-time`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

* **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "_id": "",
    "user": "",
    "title": "",
    "img": "",
    "description": "",
    "issue_date": "",
    "expiry_date": "",
    "issuing_organization": "",
    "createdAt": "",
    "updatedAt": ""
  },
  "success": true
}
```

### Certification

- **Type:**`[ "object", "null" ]`

**Example:**

### CertificationsResponse

- **Type:**`object`

* **`data` (required)**

  `array`

  **Items:**

  - **`_id` (required)**

    `string` — Certification ID

  - **`img` (required)**

    `string` — Certification image URL

  - **`title` (required)**

    `string` — Certification title

  - **`user` (required)**

    `string` — User ID

  - **`createdAt`**

    `string`, format: `date-time`

  - **`description`**

    `string` — Certification description

  - **`expiry_date`**

    `string`, format: `date-time` — Expiry date

  - **`issue_date`**

    `string`, format: `date-time` — Issue date

  - **`issuing_organization`**

    `string` — Issuing organization

  - **`updatedAt`**

    `string`, format: `date-time`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

* **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": [
    {
      "_id": "",
      "user": "",
      "title": "",
      "img": "",
      "description": "",
      "issue_date": "",
      "expiry_date": "",
      "issuing_organization": "",
      "createdAt": "",
      "updatedAt": ""
    }
  ],
  "success": true
}
```

### CertificationErrorResponse

- **Type:**`object`

* **`data` (required)**

  `object`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

* **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

### CreateExperience

- **Type:**`object`

* **`company_name` (required)**

  `string` — Company name

* **`description` (required)**

  `string` — Job description

* **`title` (required)**

  `string` — Job title

* **`end_date`**

  `string`, format: `date-time` — End date (optional for current job)

* **`start_date`**

  `string`, format: `date-time` — Start date

**Example:**

```json
{
  "company_name": "",
  "title": "",
  "description": "",
  "start_date": "",
  "end_date": ""
}
```

### UpdateExperience

- **Type:**`object`

* **`company_name`**

  `string` — Company name

* **`description`**

  `string` — Job description

* **`end_date`**

  `string`, format: `date-time` — End date (optional for current job)

* **`start_date`**

  `string`, format: `date-time` — Start date

* **`title`**

  `string` — Job title

**Example:**

```json
{
  "company_name": "",
  "title": "",
  "description": "",
  "start_date": "",
  "end_date": ""
}
```

### ExperienceIdParam

- **Type:**`object`

* **`id` (required)**

  `string` — Experience ID

**Example:**

```json
{
  "id": ""
}
```

### ExperienceResponse

- **Type:**`object`

* **`data` (required)**

  `object | null`

  - **`_id` (required)**

    `string` — Experience ID

  - **`company_name` (required)**

    `string` — Company name

  - **`description` (required)**

    `string` — Job description

  - **`title` (required)**

    `string` — Job title

  - **`user` (required)**

    `string` — User ID

  - **`createdAt`**

    `string`, format: `date-time`

  - **`end_date`**

    `string`, format: `date-time` — End date (optional for current job)

  - **`start_date`**

    `string`, format: `date-time` — Start date

  - **`updatedAt`**

    `string`, format: `date-time`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

* **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "_id": "",
    "user": "",
    "company_name": "",
    "title": "",
    "description": "",
    "start_date": "",
    "end_date": "",
    "createdAt": "",
    "updatedAt": ""
  },
  "success": true
}
```

### Experience

- **Type:**`[ "object", "null" ]`

**Example:**

### ExperiencesResponse

- **Type:**`object`

* **`data` (required)**

  `array`

  **Items:**

  - **`_id` (required)**

    `string` — Experience ID

  - **`company_name` (required)**

    `string` — Company name

  - **`description` (required)**

    `string` — Job description

  - **`title` (required)**

    `string` — Job title

  - **`user` (required)**

    `string` — User ID

  - **`createdAt`**

    `string`, format: `date-time`

  - **`end_date`**

    `string`, format: `date-time` — End date (optional for current job)

  - **`start_date`**

    `string`, format: `date-time` — Start date

  - **`updatedAt`**

    `string`, format: `date-time`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

* **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": [
    {
      "_id": "",
      "user": "",
      "company_name": "",
      "title": "",
      "description": "",
      "start_date": "",
      "end_date": "",
      "createdAt": "",
      "updatedAt": ""
    }
  ],
  "success": true
}
```

### ExperienceErrorResponse

- **Type:**`object`

* **`data` (required)**

  `object`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

* **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

### CreateWorkSample

- **Type:**`object`

* **`img` (required)**

  `string` — Work sample image URL

* **`name` (required)**

  `string` — Work sample name

* **`description`**

  `string` — Work sample description

**Example:**

```json
{
  "name": "",
  "img": "",
  "description": ""
}
```

### UpdateWorkSample

- **Type:**`object`

* **`description`**

  `string` — Work sample description

* **`img`**

  `string` — Work sample image URL

* **`name`**

  `string` — Work sample name

**Example:**

```json
{
  "name": "",
  "img": "",
  "description": ""
}
```

### WorkSampleIdParam

- **Type:**`object`

* **`id` (required)**

  `string` — Work sample ID

**Example:**

```json
{
  "id": ""
}
```

### WorkSampleResponse

- **Type:**`object`

* **`data` (required)**

  `object | null`

  - **`_id` (required)**

    `string` — Work sample ID

  - **`img` (required)**

    `string` — Work sample image URL

  - **`name` (required)**

    `string` — Work sample name

  - **`user` (required)**

    `string` — User ID

  - **`createdAt`**

    `string`, format: `date-time`

  - **`description`**

    `string` — Work sample description

  - **`updatedAt`**

    `string`, format: `date-time`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

* **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "_id": "",
    "user": "",
    "name": "",
    "img": "",
    "description": "",
    "createdAt": "",
    "updatedAt": ""
  },
  "success": true
}
```

### WorkSample

- **Type:**`[ "object", "null" ]`

**Example:**

### WorkSamplesResponse

- **Type:**`object`

* **`data` (required)**

  `array`

  **Items:**

  - **`_id` (required)**

    `string` — Work sample ID

  - **`img` (required)**

    `string` — Work sample image URL

  - **`name` (required)**

    `string` — Work sample name

  - **`user` (required)**

    `string` — User ID

  - **`createdAt`**

    `string`, format: `date-time`

  - **`description`**

    `string` — Work sample description

  - **`updatedAt`**

    `string`, format: `date-time`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

* **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": [
    {
      "_id": "",
      "user": "",
      "name": "",
      "img": "",
      "description": "",
      "createdAt": "",
      "updatedAt": ""
    }
  ],
  "success": true
}
```

### WorkSampleErrorResponse

- **Type:**`object`

* **`data` (required)**

  `object`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

* **`success` (required)**

  `boolean`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null,
  "success": true
}
```

### Wallet

- **Type:**`object`

* **`_id` (required)**

  `string`

* **`balance` (required)**

  `number`

* **`createdAt` (required)**

  `string`

* **`currency` (required)**

  `string`

* **`isActive` (required)**

  `boolean`

* **`isFrozen` (required)**

  `boolean`

* **`totalEarnings` (required)**

  `number`

* **`totalSpent` (required)**

  `number`

* **`totalWithdrawals` (required)**

  `number`

* **`updatedAt` (required)**

  `string`

* **`user` (required)**

  `string`

* **`stripeConnectAccountId`**

  `string`

* **`stripeCustomerId`**

  `string`

**Example:**

```json
{
  "_id": "",
  "user": "",
  "balance": 1,
  "currency": "",
  "isActive": true,
  "isFrozen": true,
  "totalEarnings": 1,
  "totalSpent": 1,
  "totalWithdrawals": 1,
  "stripeCustomerId": "",
  "stripeConnectAccountId": "",
  "createdAt": "",
  "updatedAt": ""
}
```

### Transaction

- **Type:**`object`

* **`_id` (required)**

  `string`

* **`amount` (required)**

  `number`

* **`createdAt` (required)**

  `string`

* **`description` (required)**

  `string`

* **`from` (required)**

  `object | null`

  - **`_id` (required)**

    `string`

  - **`email` (required)**

    `string`

  - **`full_name` (required)**

    `string`

* **`status` (required)**

  `string`, possible values: `"pending", "completed", "failed"`

* **`to` (required)**

  `object | null`

  - **`_id` (required)**

    `string`

  - **`email` (required)**

    `string`

  - **`full_name` (required)**

    `string`

* **`type` (required)**

  `string`, possible values: `"deposit", "withdrawal", "wallet_transfer", "contractor_payout", "refund"`

* **`updatedAt` (required)**

  `string`

* **`stripeCheckoutSessionId`**

  `string`

* **`stripePaymentIntentId`**

  `string`

* **`stripeTransferId`**

  `string`

**Example:**

```json
{
  "_id": "",
  "type": "deposit",
  "amount": 1,
  "from": {
    "_id": "",
    "full_name": "",
    "email": ""
  },
  "to": {
    "_id": "",
    "full_name": "",
    "email": ""
  },
  "status": "pending",
  "description": "",
  "stripePaymentIntentId": "",
  "stripeTransferId": "",
  "stripeCheckoutSessionId": "",
  "createdAt": "",
  "updatedAt": ""
}
```

### WalletResponse

- **Type:**`object`

* **`data` (required)**

  `object`

  - **`_id` (required)**

    `string`

  - **`balance` (required)**

    `number`

  - **`createdAt` (required)**

    `string`

  - **`currency` (required)**

    `string`

  - **`isActive` (required)**

    `boolean`

  - **`isFrozen` (required)**

    `boolean`

  - **`totalEarnings` (required)**

    `number`

  - **`totalSpent` (required)**

    `number`

  - **`totalWithdrawals` (required)**

    `number`

  - **`updatedAt` (required)**

    `string`

  - **`user` (required)**

    `string`

  - **`stripeConnectAccountId`**

    `string`

  - **`stripeCustomerId`**

    `string`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "_id": "",
    "user": "",
    "balance": 1,
    "currency": "",
    "isActive": true,
    "isFrozen": true,
    "totalEarnings": 1,
    "totalSpent": 1,
    "totalWithdrawals": 1,
    "stripeCustomerId": "",
    "stripeConnectAccountId": "",
    "createdAt": "",
    "updatedAt": ""
  }
}
```

### DepositResponse

- **Type:**`object`

* **`data` (required)**

  `object`

  - **`amount` (required)**

    `number` — Deposit amount

  - **`cancelUrl` (required)**

    `string` — URL to redirect the user to on cancellation

  - **`sessionId` (required)**

    `string` — Stripe Checkout Session ID

  - **`successUrl` (required)**

    `string` — URL to redirect the user to on success

  - **`url` (required)**

    `string` — Stripe Checkout URL to open in browser

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "url": "",
    "sessionId": "",
    "amount": 1,
    "successUrl": "",
    "cancelUrl": ""
  }
}
```

### WithdrawResponse

- **Type:**`object`

* **`data` (required)**

  `object`

  - **`amount` (required)**

    `number`

  - **`estimatedArrival` (required)**

    `string`

  - **`newBalance` (required)**

    `number`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "amount": 1,
    "newBalance": 1,
    "estimatedArrival": ""
  }
}
```

### TransactionsResponse

- **Type:**`object`

* **`data` (required)**

  `object`

  - **`pagination` (required)**

    `object`

    - **`limit` (required)**

      `number`

    - **`page` (required)**

      `number`

    - **`total` (required)**

      `number`

    - **`totalPages` (required)**

      `number`

  - **`transactions` (required)**

    `array`

    **Items:**

    - **`_id` (required)**

      `string`

    - **`amount` (required)**

      `number`

    - **`createdAt` (required)**

      `string`

    - **`description` (required)**

      `string`

    - **`from` (required)**

      `object | null`

      - **`_id` (required)**

        `string`

      - **`email` (required)**

        `string`

      - **`full_name` (required)**

        `string`

    - **`status` (required)**

      `string`, possible values: `"pending", "completed", "failed"`

    - **`to` (required)**

      `object | null`

      - **`_id` (required)**

        `string`

      - **`email` (required)**

        `string`

      - **`full_name` (required)**

        `string`

    - **`type` (required)**

      `string`, possible values: `"deposit", "withdrawal", "wallet_transfer", "contractor_payout", "refund"`

    - **`updatedAt` (required)**

      `string`

    - **`stripeCheckoutSessionId`**

      `string`

    - **`stripePaymentIntentId`**

      `string`

    - **`stripeTransferId`**

      `string`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "transactions": [
      {
        "_id": "",
        "type": "deposit",
        "amount": 1,
        "from": {
          "_id": "",
          "full_name": "",
          "email": ""
        },
        "to": {
          "_id": "",
          "full_name": "",
          "email": ""
        },
        "status": "pending",
        "description": "",
        "stripePaymentIntentId": "",
        "stripeTransferId": "",
        "stripeCheckoutSessionId": "",
        "createdAt": "",
        "updatedAt": ""
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 1,
      "total": 1,
      "totalPages": 1
    }
  }
}
```

### UsersResponse

- **Type:**`object`

* **`data` (required)**

  `object`

  - **`pagination` (required)**

    `object`

    - **`currentPage` (required)**

      `number`

    - **`hasNextPage` (required)**

      `boolean`

    - **`hasPrevPage` (required)**

      `boolean`

    - **`limit` (required)**

      `number`

    - **`totalPages` (required)**

      `number`

    - **`totalUsers` (required)**

      `number`

  - **`users` (required)**

    `array`

    **Items:**

    - **`_id` (required)**

      `string`

    - **`email` (required)**

      `string`

    - **`full_name` (required)**

      `string`

    - **`is_verified` (required)**

      `boolean`

    - **`role` (required)**

      `string`, possible values: `"contractor", "customer", "admin"`

    - **`address`**

      `string`

    - **`availability`**

      `string | null`, format: `date-time`

    - **`bio`**

      `string`

    - **`category`**

      `array`

      **Items:**

    - **`certification`**

      `string`

    - **`cover_img`**

      `string`

    - **`createdAt`**

      `string | null`, format: `date-time`

    - **`experience`**

      `array`

      **Items:**

      - **`company_name` (required)**

        `string`

      - **`start_date` (required)**

        `string | null`, format: `date-time`

      - **`end_date`**

        `string | null`, format: `date-time`

    - **`hourly_charge`**

      `number`

    - **`location`**

      `string`

    - **`phone`**

      `string`

    - **`profile_img`**

      `string`

    - **`skills`**

      `array`

      **Items:**

      `string`

    - **`starting_budget`**

      `number`

    - **`updatedAt`**

      `string | null`, format: `date-time`

    - **`work_samples`**

      `array`

      **Items:**

      - **`img` (required)**

        `string`

      - **`name` (required)**

        `string`

      - **`description`**

        `string`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "users": [
      {
        "_id": "",
        "role": "contractor",
        "full_name": "",
        "profile_img": "",
        "cover_img": "",
        "email": "",
        "phone": "",
        "address": "",
        "bio": "",
        "location": "",
        "availability": null,
        "is_verified": true,
        "category": [],
        "skills": [
          ""
        ],
        "experience": [
          {
            "company_name": "",
            "start_date": null,
            "end_date": null
          }
        ],
        "work_samples": [
          {
            "name": "",
            "img": "",
            "description": ""
          }
        ],
        "starting_budget": 1,
        "certification": "",
        "hourly_charge": 1,
        "createdAt": null,
        "updatedAt": null
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 1,
      "totalUsers": 1,
      "limit": 1,
      "hasNextPage": true,
      "hasPrevPage": true
    }
  }
}
```

### CompletionRequestsResponse

- **Type:**`object`

* **`data` (required)**

  `object`

  - **`pagination` (required)**

    `object`

    - **`limit` (required)**

      `number`

    - **`page` (required)**

      `number`

    - **`pages` (required)**

      `number`

    - **`total` (required)**

      `number`

  - **`requests` (required)**

    `array`

    **Items:**

    - **`_id` (required)**

      `string` — Completion request ID

    - **`contractor` (required)**

      `string` — Contractor ID

    - **`createdAt` (required)**

      `string` — Creation timestamp

    - **`customer` (required)**

      `string` — Customer ID

    - **`job` (required)**

      `string` — Job ID

    - **`offer` (required)**

      `string` — Offer ID

    - **`status` (required)**

      `string`, possible values: `"pending", "approved", "rejected"` — Request status

    - **`updatedAt` (required)**

      `string` — Last update timestamp

    - **`approvedAt`**

      `string` — Approval timestamp

    - **`approvedBy`**

      `string` — Admin who approved

    - **`rejectedAt`**

      `string` — Rejection timestamp

    - **`rejectedBy`**

      `string` — Admin who rejected

    - **`rejectionReason`**

      `string` — Reason for rejection

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "requests": [
      {
        "_id": "",
        "job": "",
        "offer": "",
        "customer": "",
        "contractor": "",
        "status": "pending",
        "approvedBy": "",
        "rejectedBy": "",
        "rejectionReason": "",
        "approvedAt": "",
        "rejectedAt": "",
        "createdAt": "",
        "updatedAt": ""
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 1,
      "total": 1,
      "pages": 1
    }
  }
}
```

### CompletionRequest

- **Type:**`object`

* **`_id` (required)**

  `string` — Completion request ID

* **`contractor` (required)**

  `string` — Contractor ID

* **`createdAt` (required)**

  `string` — Creation timestamp

* **`customer` (required)**

  `string` — Customer ID

* **`job` (required)**

  `string` — Job ID

* **`offer` (required)**

  `string` — Offer ID

* **`status` (required)**

  `string`, possible values: `"pending", "approved", "rejected"` — Request status

* **`updatedAt` (required)**

  `string` — Last update timestamp

* **`approvedAt`**

  `string` — Approval timestamp

* **`approvedBy`**

  `string` — Admin who approved

* **`rejectedAt`**

  `string` — Rejection timestamp

* **`rejectedBy`**

  `string` — Admin who rejected

* **`rejectionReason`**

  `string` — Reason for rejection

**Example:**

```json
{
  "_id": "",
  "job": "",
  "offer": "",
  "customer": "",
  "contractor": "",
  "status": "pending",
  "approvedBy": "",
  "rejectedBy": "",
  "rejectionReason": "",
  "approvedAt": "",
  "rejectedAt": "",
  "createdAt": "",
  "updatedAt": ""
}
```

### CompletionRequestResponse

- **Type:**`object`

* **`data` (required)**

  `object`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

### RejectCompletionRequest

- **Type:**`object`

* **`reason` (required)**

  `string` — Reason for rejection

**Example:**

```json
{
  "reason": ""
}
```

### WithdrawalRequestsResponse

- **Type:**`object`

* **`data` (required)**

  `object`

  - **`pagination` (required)**

    `object`

    - **`limit` (required)**

      `number`

    - **`page` (required)**

      `number`

    - **`pages` (required)**

      `number`

    - **`total` (required)**

      `number`

  - **`requests` (required)**

    `array`

    **Items:**

    - **`_id` (required)**

      `string` — Withdrawal request ID

    - **`amount` (required)**

      `number` — Withdrawal amount

    - **`contractor` (required)**

      `string` — Contractor ID

    - **`createdAt` (required)**

      `string` — Creation timestamp

    - **`status` (required)**

      `string`, possible values: `"pending", "approved", "rejected"` — Request status

    - **`updatedAt` (required)**

      `string` — Last update timestamp

    - **`approvedAt`**

      `string` — Approval timestamp

    - **`approvedBy`**

      `string` — Admin who approved

    - **`rejectedAt`**

      `string` — Rejection timestamp

    - **`rejectedBy`**

      `string` — Admin who rejected

    - **`rejectionReason`**

      `string` — Reason for rejection

    - **`stripeTransferId`**

      `string` — Stripe transfer ID

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": {
    "requests": [
      {
        "_id": "",
        "contractor": "",
        "amount": 1,
        "status": "pending",
        "approvedBy": "",
        "rejectedBy": "",
        "rejectionReason": "",
        "stripeTransferId": "",
        "approvedAt": "",
        "rejectedAt": "",
        "createdAt": "",
        "updatedAt": ""
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 1,
      "total": 1,
      "pages": 1
    }
  }
}
```

### WithdrawalRequest

- **Type:**`object`

* **`_id` (required)**

  `string` — Withdrawal request ID

* **`amount` (required)**

  `number` — Withdrawal amount

* **`contractor` (required)**

  `string` — Contractor ID

* **`createdAt` (required)**

  `string` — Creation timestamp

* **`status` (required)**

  `string`, possible values: `"pending", "approved", "rejected"` — Request status

* **`updatedAt` (required)**

  `string` — Last update timestamp

* **`approvedAt`**

  `string` — Approval timestamp

* **`approvedBy`**

  `string` — Admin who approved

* **`rejectedAt`**

  `string` — Rejection timestamp

* **`rejectedBy`**

  `string` — Admin who rejected

* **`rejectionReason`**

  `string` — Reason for rejection

* **`stripeTransferId`**

  `string` — Stripe transfer ID

**Example:**

```json
{
  "_id": "",
  "contractor": "",
  "amount": 1,
  "status": "pending",
  "approvedBy": "",
  "rejectedBy": "",
  "rejectionReason": "",
  "stripeTransferId": "",
  "approvedAt": "",
  "rejectedAt": "",
  "createdAt": "",
  "updatedAt": ""
}
```

### WithdrawalRequestResponse

- **Type:**`object`

* **`data` (required)**

  `object`

* **`message` (required)**

  `string`

* **`status` (required)**

  `number`

**Example:**

```json
{
  "status": 1,
  "message": "",
  "data": null
}
```

### RejectWithdrawalRequest

- **Type:**`object`

* **`reason` (required)**

  `string` — Reason for rejection

**Example:**

```json
{
  "reason": ""
}
```

### UpdateProfile

- **Type:**`object`

* **`address`**

  `string` — Physical address

* **`availability`**

  `object` — Availability date

* **`bio`**

  `string` — User biography (max 500 chars)

* **`category`**

  `array` — Array of category IDs (for contractors) - MongoDB ObjectIds

  **Items:**

  `string`

* **`certifications`**

  `array` — Array of certification IDs (for contractors) - MongoDB ObjectIds

  **Items:**

  `string`

* **`cover_img`**

  `string` — Cover image URL

* **`description`**

  `string` — User description / about me (max 2000 chars)

* **`experience`**

  `array` — Array of experience IDs (for contractors) - MongoDB ObjectIds

  **Items:**

  `string`

* **`full_name`**

  `string` — User's full name

* **`hourly_charge`**

  `number` — Hourly rate (for contractors)

* **`location`**

  `array` — Array of location IDs (MongoDB ObjectIds)

  **Items:**

  `string`

* **`phone`**

  `string` — Phone number

* **`profile_img`**

  `string` — Profile image URL

* **`skills`**

  `array` — Array of skills (for contractors)

  **Items:**

  `string`

* **`starting_budget`**

  `number` — Starting budget for projects (for contractors)

* **`work_samples`**

  `array` — Array of work sample IDs (for contractors) - MongoDB ObjectIds

  **Items:**

  `string`

**Example:**

```json
{
  "full_name": "",
  "profile_img": "",
  "cover_img": "",
  "phone": "",
  "address": "",
  "bio": "",
  "description": "",
  "location": [
    ""
  ],
  "category": [
    ""
  ],
  "availability": "",
  "skills": [
    ""
  ],
  "experience": [
    ""
  ],
  "work_samples": [
    ""
  ],
  "starting_budget": 1,
  "certifications": [
    ""
  ],
  "hourly_charge": 1
}
```

### Deposit

- **Type:**`object`

* **`amount` (required)**

  `number` — Amount to deposit (min: $1, max: $10,000)

**Example:**

```json
{
  "amount": 1
}
```

### Withdraw

- **Type:**`object`

* **`amount` (required)**

  `number` — Amount to withdraw

**Example:**

```json
{
  "amount": 1
}
```

### StripeOnboard

- **Type:**`object`

**Example:**

```json
{}
```
