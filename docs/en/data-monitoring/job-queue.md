# Job Queue

## Overview

The Job Queue page monitors background tasks executed by the CORRAD system. It shows job status, queue totals, and cron schedule details.

---

## Summary Cards

At the top, summary cards display the job counts:

- **Total** - total number of jobs in the queue.
- **Pending** - jobs waiting to be processed.
- **Running** - jobs currently executing.
- **Done** - successfully completed jobs.
- **Failed** - jobs that failed.
- **Today** - jobs processed today.

These cards provide a quick overview of queue health.

---

## Filters

Use filters to search for specific jobs:

- **Date From** - start date for the search range.
- **Date To** - end date for the search range.
- **Status** - select job status such as all statuses, pending, running, done, or failed.
- **Type** - select job type.
- **Created By** - filter by user ID or name who created the job.
- **Search** - search using type, status, or user keywords.

Click **Search** to apply filters, or **Reset** to clear them.

---

## Job Queue List

The job queue table includes columns for:

- **#** - job sequence number.
- **Type** - job type, for example `mail`.
- **Status** - current status, such as `failed`.
- **Created By** - job creator, if available.
- **Queued** - time the job entered the queue.
- **Started** - time the job began execution.
- **Done** - time the job finished.
- **Tries** - number of attempts made.
- **Actions** - button to view job details.

This list helps identify failed jobs and verify job lifecycle.

---

## Job Details

Click **View** to open a details modal that shows:

- **Job ID**
- **Type**
- **Status**
- **Attempts**
- **Created By**
- **Available At**
- **Queued At**
- **Started At**
- **Done At**
- **Payload** - data passed with the job, such as email content.
- **Last Error** - final error message when the job failed.

Example: a `mail` job may fail because `flc_mail()` returned false.

---

## Cron Schedule

The Cron Schedule section lets you enable and update periodic job processing.

- **Run every** - choose the cron interval, such as every 5 minutes.
- **Enable Cron** / **Update Cron** / **Disable** - controls for cron activation.
- **Active Cron Line** - shows the actual cron command used for the queue worker.

Example cron line:

`*/5 * * * * /usr/bin/php /home/php84.corrad.my/queue_worker.php >> /home/php84.corrad.my/log/queue.log 2>&1 # CORRAD_QUEUE_WORKER`

The worker processes up to 5 queued jobs per run. A lock file prevents overlapping execution. Logs are written to `log/queue.log`.

---

## Key Uses

- Monitor background tasks and queue health.
- Identify jobs that failed or require retry.
- Investigate job processing times and error messages.
- Manage cron scheduling for continuous queue processing.

---

## Usage Tips

- Enable `Auto-refresh` when monitoring jobs in real time.
- Check failed jobs and review `Last Error` for troubleshooting.
- Use date and status filters to locate specific jobs.
- Keep cron running frequently to ensure job execution.
