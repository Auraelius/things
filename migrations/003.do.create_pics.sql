CREATE TABLE pics (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    
    title    TEXT NOT NULL,
    alt_text TEXT NOT NULL,
    url      TEXT NOT NULL,
    width    INTEGER,
    height   INTEGER,
    focus_x  INTEGER,
    focus_y  INTEGER,

    uploaded_by_user_id INTEGER  REFERENCES users(id) ON DELETE CASCADE NOT NULL,

    date_created TIMESTAMP DEFAULT now() NOT NULL,
    date_updated TIMESTAMP DEFAULT now() NOT NULL
);