---
id: fraud-detection-service
name: Fraud Detection Service
version: 1.0.1
summary: >-
  This service monitors transactions to detect potentially fraudulent
  activities.
badges: []
sends:
  - id: fraudalert
    version: 1.0.1
schemaPath: fraud-detection-service.yml
receives:
  - id: transactionevaluated
    version: 1.0.1
  - id: transactionreview
    version: 1.0.1
---
This service monitors transactions to detect potentially fraudulent activities.  

## Architecture diagram
<NodeGraph />
