-- User-reviewed film/clip classification; unclassified assets remain unknown.
CREATE TABLE asset_format (
  asset_id INTEGER PRIMARY KEY REFERENCES asset(id) ON DELETE CASCADE,
  format TEXT NOT NULL CHECK(format IN ('film', 'clip')),
  source TEXT NOT NULL,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO ledger_revision(tbl) VALUES('asset_format');
CREATE TRIGGER rev_asset_format_insert AFTER INSERT ON asset_format BEGIN
  UPDATE ledger_revision SET n=n+1 WHERE tbl='asset_format';
END;
CREATE TRIGGER rev_asset_format_update AFTER UPDATE ON asset_format BEGIN
  UPDATE ledger_revision SET n=n+1 WHERE tbl='asset_format';
END;
CREATE TRIGGER rev_asset_format_delete AFTER DELETE ON asset_format BEGIN
  UPDATE ledger_revision SET n=n+1 WHERE tbl='asset_format';
END;
