# Log Access

## Overview

The Log Access page displays API access logs for the CORRAD system. It helps administrators monitor total API calls, successful requests, and failed requests.

---

## Main Summary

At the top, you will see three summary cards:

- **Total Calls** - total API calls recorded.
- **Success** - number of successful API calls.
- **Failed** - number of failed API calls.

These counts provide a quick view of API performance and reliability.

---

## Filters

Use the filter section to narrow down API logs by the following criteria:

- **API Name** - search by API name.
- **Date Start** - start date for the log period.
- **Date End** - end date for the log period.
- **API Key** - search by API key.
- **Status** - choose between all, success, or failed.

Click **Search** to apply filters or **Reset** to clear them.

---

## Log List / Report

The page usually includes two tabs:

- **Log List** - displays individual API log entries.
- **Report** - shows aggregated or summary reports.

The default tab is typically **Log List**.

---

## Log Entries

Each row in the log list shows key details:

- **Timestamp** - time of the API call.
- **API** - name of the API endpoint.
- **Request** - HTTP method and response time.
- **IP / Key** - IP address and API key used.
- **Status** - request status (e.g. `Failed`).
- **Actions** - buttons for viewing details or deleting the entry.

This makes it easier to find problematic API requests and review access history.

---

## Viewing Log Details

Click the **View** icon for an entry to open a detail modal. The log details include:

- **Log ID**
- **Timestamp**
- **Method**
- **API Name**
- **API URL**
- **Package**
- **API Key**
- **IP Address**
- **HTTP Code**
- **Duration**
- **User Agent**
- **Status**
- **Request Payload**

This data helps investigate failures or unexpected API behavior.

---

## Key Uses

- Monitor API usage and activity.
- Identify failed API calls or slow responses.
- Track request sources via IP and API key.
- Investigate API issues using request payload and response details.
