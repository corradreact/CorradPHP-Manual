# Structured Logs

## Overview

The Structured Logs page displays system logs in a structured format. This page helps administrators find issues faster by filtering logs by date, level, channel, message, and request ID.

---

## Summary Cards

The top section shows cards for log totals by type:

- **Total** - total structured log entries for the selected date.
- **Error/Critical** - number of error or critical logs.
- **Warning** - number of warning logs.
- **Info** - number of informational logs.
- **Debug** - number of debug logs.

These cards provide a quick view of error volume and severity.

---

## Filters

Use filters to search specific log entries:

- **Date** - select the date to view logs (for example, today).
- **Level** - select the log level, such as all levels, critical, warning, info, or debug.
- **Channel** - choose the log channel to narrow the source module.
- **Search message** - search by text within the log message.
- **Request ID** - filter by request ID to trace a single request.
- **Auto-refresh** - toggle auto-refresh every 30 seconds.

Click **Search** to apply the filters.

---

## Log Entries

The log entries table includes:

- **Timestamp** - when the log entry was recorded.
- **Level** - log severity such as `CRITICAL`, `WARNING`, `INFO`, or `DEBUG`.
- **Channel** - log channel, for example `app`.
- **Message** - brief description of the log event.
- **User** - user ID associated with the log.
- **IP** - source IP address.
- **Request ID** - request identifier for grouping related logs.

Structured logs make it easier to pinpoint failure causes and understand request context.

---

## Key Uses

- Detect critical and error-level issues quickly.
- Search log entries by date or message text.
- Trace a specific request using `Request ID`.
- Review user and IP context for each log entry.

---

## Usage Tips

- Start with the appropriate date and log level.
- Use message search to focus on specific errors.
- For critical entries, look at the full message and channel context.
- Enable `Auto-refresh` during a live debugging session.
