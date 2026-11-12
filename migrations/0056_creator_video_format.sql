-- Preserve existing manually reviewed formats while adding creator-made works.
CREATE TABLE asset_format_new (
  asset_id INTEGER PRIMARY KEY REFERENCES asset(id) ON DELETE CASCADE,
  format TEXT NOT NULL CHECK(format IN ('film', 'clip', 'creator')),
  source TEXT NOT NULL,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO asset_format_new SELECT asset_id, format, source, updated_at FROM asset_format;
DROP TABLE asset_format;
ALTER TABLE asset_format_new RENAME TO asset_format;
CREATE TRIGGER rev_asset_format_insert AFTER INSERT ON asset_format BEGIN
  UPDATE ledger_revision SET n=n+1 WHERE tbl='asset_format';
END;
CREATE TRIGGER rev_asset_format_update AFTER UPDATE ON asset_format BEGIN
  UPDATE ledger_revision SET n=n+1 WHERE tbl='asset_format';
END;
CREATE TRIGGER rev_asset_format_delete AFTER DELETE ON asset_format BEGIN
  UPDATE ledger_revision SET n=n+1 WHERE tbl='asset_format';
END;
