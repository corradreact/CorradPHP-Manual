# Audit Trail

## Overview

The Audit Trail records every data change made through the CORRAD system. Each entry captures who did what, when, from where, and what the data looked like before and after the change.

### What Gets Logged

- **INSERT** — new records created
- **UPDATE** — existing records modified
- **DELETE** — records removed
- **LOGIN / LOGOUT** — user session events

> Note: Only actions performed through the CORRAD interface are logged. Direct database changes bypass the audit trail.

---

## Search Filter

Use filters to narrow results to a specific time window or criteria.

### Date Range

- Use the **From** and **To** date pickers to select a time range.
- Leave both fields blank to search across all dates.

### Other Filters

- **Username** — partial match for the login name of the user who made the change.
- **IP Address** — filter by the client IP, useful for investigating a specific machine.
- **Action** — select INSERT, UPDATE, DELETE, LOGIN, etc.
- **Table** — enter the database table name (e.g. `FLC_USER`).
- **Menu** — filter by the menu/page path where the action was performed.
- **Browser** — filter by the browser user-agent string.

### Tip

Combine filters freely — for example, filter by `Username + Date Range` to audit what a specific user did during a period.

---

## Audit Records

The Audit Records table shows log entries with columns such as:

- **Date** — action timestamp.
- **IP** — source IP address.
- **Menu** — menu path where the action occurred.
- **Action** — action type (e.g. Navigation, Crud, Update).
- **Username** — user account involved.
- **Browser** — browser used.
- **SQL** — button to view SQL details if available.

### Actions in the list

- **Dashboard** — open audit summary statistics.
- **Retention** — manage audit record storage.
- **Purge All** — permanently delete all audit records.

---

## Audit Dashboard

The dashboard shows key audit metrics:

- **Total Events** — total number of audit events.
- **Unique Users** — number of distinct users recorded.
- **Active Days** — days with audit activity.

### Severity Breakdown

Shows event counts by severity:

- critical
- warning
- info

### Action Distribution

Shows which actions happen most often:

- Crud
- Navigation
- Submit
- Login
- Logout
- Login_failed
- Logout (Pwd Changed)

### Top Users

Lists top users by event count.

### Top Changed Tables

Shows frequently changed tables such as:

- `FLC_PS_LOCK`
- `FLC_PAGE_COMPONENT`
- `FLC_BL`
- `FLC_PAGE_COMPONENT_ITEMS`
- `LOGIN_ATTEMPTS`
- `FLC_SESSION`
- `FLC_MENU`
- `PRUSER`
- `FLC_TRIGGER_PARAMETER`

### Logins vs Failed (Last 30 Days)

A chart compares successful logins with failed logins over the recent 30-day period.

---

## Retention Management

Retention controls how audit records are stored by action type.

### Current Storage

Shows per-action statistics:

- rows
- oldest date
- newest date
- estimated size

### Selective Purge

- **Action Type** — choose all types or a specific action type.
- **Older Than (days)** — select records older than this number of days.
- **Type CONFIRM to enable purge button** — enter `CONFIRM` to enable `Purge Selected`.

---

## Purge All Audit Records

`Purge All` permanently deletes all audit entries.

- A warning appears: "This will permanently delete all audit records."
- Type `CONFIRM` to proceed.

> Warning: This action cannot be undone.

---

## Key Uses

- Monitor and track system configuration changes.
- Identify who made a change and when.
- Investigate security issues and user activity.
- Manage log storage with retention and purge options.
