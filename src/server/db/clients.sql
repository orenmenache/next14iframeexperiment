CREATE TABLE economicnews.ACD__CORE_L1_clients (
    client_id INT AUTO_INCREMENT PRIMARY KEY,
    client_name VARCHAR(255),
    dyntube_project_id VARCHAR(255),
    style_scheme VARCHAR(255),
    lang VARCHAR(255));

ALTER TABLE economicnews.ACD__CORE_L1_clients MODIFY COLUMN dyntube_project_id VARCHAR(255);

INSERT INTO economicnews.ACD__CORE_L1_clients (client_name, dyntube_project_id, style_scheme, lang) VALUES ('Traders Lab', 'woMZq6KrSkaKqbJSD7RNbg', 'default', 'EN');
SELECT e.episode_id, e.EN, e.char_length, e.time_length, e.chapter_id, e.episode_order, c.EN, c.char_length, c.level_id, c.time_length, l.EN
FROM economicnews.ACD__CORE_L3_episodesNames AS e
JOIN economicnews.ACD__CORE_L2_chapterNames AS c ON e.chapter_id = c.chapter_id
JOIN economicnews.ACD__CORE_L1_levelNames AS l ON c.level_id = l.level_id
WHERE e.EN IN ('Why Trade Forex', 'Episode 2', 'Episode 3', 'Episode 4');
