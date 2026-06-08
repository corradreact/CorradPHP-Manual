# Application Logs

## Overview

The Application Logs page displays a summary and file list of system logs in CORRAD. It helps administrators identify error types, view total log counts, and filter data for deeper investigation.

---

## Summary Cards

The page shows cards for each log category:

- **All Logs** - total number of logs.
- **BL Error** - number of Business Logic errors.
- **MySQLi Error** - number of MySQLi errors.
- **PHP Error** - number of PHP errors.
- **Prepare Error** - number of database prepare errors.

These cards help you quickly understand the severity and distribution of system issues.

---

## Filters

Use filters to search logs by month or type:

- **Month** - choose the log month.
- **Log Type** - select log categories like `All Types`, `PHP Error`, `MySQLi Error`, `BL Error`, etc.
- **Search** - search by text within logs if available.

Buttons:

- **Reset** - clear all filters.
- **Search** - apply filters to display matching results.

---

## Log Files

The log file list shows records in a table with columns:

- **#** - entry number.
- **Timestamp** - when the log was recorded.
- **Type** - log type such as `PHP Error`, `MySQLi Error`, `Prepare Error`, or `BL Error`.
- **Summary** - short log message.
- **Size** - file size.
- **Actions** - available actions for each entry.

Examples of log types:

- `PHP Error` — PHP code errors.
- `MySQLi Error` — database-related errors.
- `BL Error` — Business Logic errors.
- `Prepare Error` — SQL preparation errors.

---

## Log Actions

Action buttons usually allow you to:

- **View details** — open the log content or details.
- **Download** — download the log for offline review.
- **Delete** — remove the log entry.

---

## Old Log Management

Additional controls help manage older logs:

- **Purge Old Logs** — remove old logs from the system.
- **Refresh** — reload the log list view.

Use these options to keep storage size manageable and retain only relevant logs.

---

## Usage Tips

- Start by reviewing summary cards to identify primary error types.
- Use month and log type filters to narrow results.
- Check the log summary for entries that need immediate investigation.
- Purge old logs periodically to keep the system responsive.
