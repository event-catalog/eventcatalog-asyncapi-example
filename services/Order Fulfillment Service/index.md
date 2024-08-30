---
id: order-fulfillment-service
name: Order Fulfillment Service
version: 1.0.0
summary: >-
  This service handles the logistics and processing required to fulfill customer
  orders.
badges: []
sends:
  - id: fulfillmentrequested
    version: 1.0.0
  - id: ordershipped
    version: 1.0.0
  - id: orderdelivered
    version: 1.0.0
schemaPath: order-fulfillment-service.yml
receives:
  - id: ordercreated
    version: 1.0.0
---
This service handles the logistics and processing required to fulfill customer orders.  

## Architecture diagram
<NodeGraph />
