CREATE TABLE groups (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    title TEXT NOT NULL,
    description TEXT,
    date_created TIMESTAMP DEFAULT now() NOT NULL,
    date_updated TIMESTAMP DEFAULT now() NOT NULL
);