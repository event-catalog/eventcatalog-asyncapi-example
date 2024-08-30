---
id: payments-service
name: Payments Service
version: 1.0.2
summary: This service handles the payment processing for various transactions.
badges: []
sends:
  - id: paymentinitiated
    version: 1.0.2
  - id: paymentconfirmed
    version: 1.0.2
  - id: paymentfailed
    version: 1.0.2
  - id: refundinitiated
    version: 1.0.2
  - id: refundcompleted
    version: 1.0.2
schemaPath: payment-service.yml
receives:
  - id: transactionverified
    version: 1.0.2
---
This service handles the payment processing for various transactions.  

## Architecture diagram
<NodeGraph />
