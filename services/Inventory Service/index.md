---
id: inventory-service
name: Inventory Service
version: 1.0.0
summary: >-
  This service manages the inventory levels, reservations, and stock updates for
  orders.
badges: []
sends:
  - id: inventoryreserved
    version: 1.0.0
  - id: inventoryreleased
    version: 1.0.0
  - id: inventoryupdated
    version: 1.0.0
schemaPath: inventory-service.yml
receives:
  - id: ordercreated
    version: 1.0.0
  - id: ordercancelled
    version: 1.0.0
---
This service manages the inventory levels, reservations, and stock updates for orders.  

## Architecture diagram
<NodeGraph />
