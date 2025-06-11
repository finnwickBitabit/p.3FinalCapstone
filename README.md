## Features:
  - Displays available and adopted animals.
  - Allows adding, editing, deleting, and toggling adoption status of animals.
  - Uses DynamoDB functions for backend operations.

## Description:
- DynamoDB table named `Animals` with the following attributes:
  - `id` (String, Partition Key)
  - `name` (String)
  - `species` (String)
  - `adopted` (Boolean)
   
## Testing:
- Run `npm test` to execute unit tests.
