You can modify enabled features in `src/gateways/truth-store-gateway-mock.ts`. By default all features are enabled.

Example queries:
```
mutation createReport {
  createReport(input: {
    description: "A new report"
  }) {
    id
    description
  }
}

mutation createShift {
  createShift(input: {
    startDate: "2020-03-13T14:30:08.943Z"
    endDate: "2020-03-15T14:30:08.943Z"
  }) {
    id
    startDate
    endDate
  }
}

query getReports {
  reports {
    id
    description
  }
}

query getShifts {
  shifts {
    id
    startDate
    endDate
  }
}

query getCurrentUser {
  currentUser {
    id
    name
  }
}

query getCurrentUserWithReports {
  currentUser {
    id
    name
    reports {
      id
      description
    }
  }
}

query getCurrentUserWithShifts {
  currentUser {
    id
    name
    reports {
      id
      description
    }
  }
}
```