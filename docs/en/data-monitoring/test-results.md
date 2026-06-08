# Test Results

## Overview

The Test Results page displays unit test status for the CORRAD system. It helps development and operations teams see how many tests ran, which passed, and which failed.

---

## Key Metrics

The top section shows:

- **Tests** - total number of tests executed.
- **Assertions** - total number of assertions evaluated.
- **Passed** - number of passing tests.
- **Failures** - number of failing tests.
- **Time(s)** - total execution time.
- **Last Run** - timestamp of the last test run.

These metrics provide a quick view of the current test suite health.

---

## Test Controls

The page includes controls to:

- **Run Unit Tests** - rerun all unit tests from the interface.
- **Refresh** - reload the current test results.

These are useful for validating code changes and checking updated status.

---

## Test Result Structure

Results are grouped by test class:

- Each group shows the test class name, such as `Corrad\Tests\Unit\BindingSourceTest`.
- Under each group, individual unit tests are listed with status and execution time.

Examples:

- `testEmptyBindingSourceIsRejected` — passed
- `testValidTableNamesAreAccepted` — passed
- `testInvalidTableNamesAreRejected` — passed
- `testEmptyPasswordReturnsEmptyStrength` — passed

Each group also shows the total number of tests and the group execution time.

---

## Understanding Status

- **passed** — the test completed successfully.
- **failed** — the test encountered an issue and needs review.

If all tests show `passed`, the tested code works as expected for the given scenarios.

---

## Key Uses

- Quickly assess code stability after changes.
- Validate specific functionality like table name validation and password strength.
- Confirm unit test coverage before promotion to production.
- Help with integration testing and regression checks.

---

## Usage Tips

- Run tests again after code updates to catch issues early.
- Review groups that take longer to execute for performance improvements.
- Ensure critical tests pass before moving forward.
