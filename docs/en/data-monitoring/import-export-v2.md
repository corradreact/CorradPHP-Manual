# System Import and Export v2 - Guide & Usage

## Overview

**What is Import Export v2?**

A consolidated tool for migrating CORRAD system configuration between environments (e.g. Development → Staging → Production). Supports Module, Business Logic, and database structure export/import.

---

## 5 Main Tabs

### 1. Import
Upload a `.zip` file containing `.fdmpr` or `.fdmpa` data to restore configuration into this system.

**File Formats Supported:**
- `.fdmpr` - Replace-mode export — overwrites existing records on import.
- `.fdmpa` - Append-mode export — adds or updates without removing other records. Used by Export by BL.
- `.fsyc` - DB Sync script — contains table structure definitions for column alignment between systems.
- `.zip` - Delivery wrapper — the `.fdmpr` or `.fdmpa` data files are compressed inside a ZIP for download/upload.

**⚠️ Most Important Rule:** Always back up your database before any Import, Rollback, or DB Sync. These operations can overwrite or alter existing system data irreversibly.

---

### 2. Export by Module
Export system configuration by selected navigation menus. Each main menu shows a list of sub-modules that can be individually selected.

**Options:**
- **Include Group Data** - Tick to export User Group data along with the module.
- **Include User Permissions** - Tick to include user access permission settings in the export file.
- **Persist Selections** - Selections persist across the session.
- **Output File** - A `.zip` file downloads automatically. Filename includes module name and timestamp.

**Mode:** Always uses **append mode** (`.fdmpa`) — importing will only add or update selected BL without affecting other BL in the target system.

---

### 3. Export by BL
Export only selected Business Logic (BL) without exporting the entire module. Ideal for sending specific BL updates to another system.

**Steps:**
1. Expand a package in the **Package list** to see its BL entries.
2. Tick the BL entries to export (you can select multiple from different packages).
3. Click **Export BL** → a `.zip` file (containing `.fdmpa`) downloads.

**✓ Append Mode for BL:** BL export always uses **append mode** (`.fdmpa`) — importing will only add or update the selected BL without affecting other BL in the target system.

---

### 4. Rollback
The Rollback tab shows a list of **snapshots** saved automatically before each import. Select a snapshot and confirm to restore the system to that state.

**⚠️ Irreversible:** Rollback cannot be undone. It will replace current configuration with the selected snapshot. Always back up your database before rolling back.

**Status:** Shows "No rollback snapshots available" if no snapshots exist yet.

---

### 5. DB Sync
DB Sync is used to align **table structures** (column additions/modifications) between two CORRAD systems. It does **not** transfer data, only structural definitions.

**Steps:**

1. **Create Script** - Select tables from the list (use "Check All", "Uncheck All", or filter by search). Click "Create DB Sync Script" to download the `.fsyc` file.

2. **Import & Sync** - Upload the received `.fsyc` file. Tick the backup confirmation checkbox. Then click "Preview Differences" to review changes before running.

3. **Preview Differences** - Review changes between the uploaded script and the current structure before clicking "Start Sync".

4. **Start Sync** - Execute the sync to update table structures in the target system.

**⚠️ DB Sync Limitation:** DB Sync only supports adding new columns and modifying existing columns. It does not drop columns or tables, and it does not transfer any row data.

**✓ Preview Before Sync:** Always use the "Preview Differences" button to review changes before running "Start Sync".

---

## How to Import

1. **Back up your database first.**
2. Drag and drop a `.zip` file (containing `.fdmpr` or `.fdmpa`) onto the drop zone, or click to browse.
3. Tick the **"I have backed up my database before importing"** checkbox to enable the Import button.
4. Click **Import Module**.

**Import Mode Differences:**

| File Type | Behaviour | Use Case |
|-----------|-----------|----------|
| `.fdmpr` | Replaces all records in the selected scope. | Full module migration between systems. |
| `.fdmpa` | Adds or updates records without deleting existing ones. | Update BL or add new config without affecting other data. |

**⚠️ Trigger Warnings:** After import, the system may display warnings about Triggers referencing BL names that do not exist in the target system. Check the "Trigger Warnings" section shown below the Import button.

**✓ Auto Snapshot:** The system automatically saves a snapshot before each import. You can restore this snapshot via the Rollback tab if needed.

---

## Summary

| Feature | Purpose | Best For |
|---------|---------|----------|
| **Import** | Restore configuration from a `.zip` file. | Setting up new environments or restoring from backup. |
| **Export by Module** | Export an entire module with all sub-modules. | Full module migration or backup. |
| **Export by BL** | Export specific Business Logic entries. | Targeted updates to another system. |
| **Rollback** | Restore system to a previous state. | Undoing failed imports. |
| **DB Sync** | Align table structures between systems. | Column additions/modifications without transferring data. |

---

## Best Practices

✓ **Always back up your database** before any import, rollback, or DB Sync operation.

✓ **Use Preview Differences** in DB Sync to review changes before syncing.

✓ **Export by BL** for targeted updates between systems.

✓ **Monitor Trigger Warnings** after import to identify BL references that may not exist.

✓ **Check Auto Snapshots** in Rollback for recovery options.

⚠️ **Avoid rollback on production** without careful planning — it is irreversible.

⚠️ **DB Sync does not transfer data** — only table structure definitions.
