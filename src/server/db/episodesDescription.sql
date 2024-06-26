CREATE TABLE economicnews.ACD__CORE_L4_episodesDescription (
    description_id INT AUTO_INCREMENT PRIMARY KEY,
    EN TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    IT TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    DE TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    FR TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    HU TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    CZ TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    JP TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    TCN TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    NL TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    PL TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    PT TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    RU TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    SWE TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    MY TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    RO TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    ES TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    TR TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    SR TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    IR TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    HI TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    TH TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    UKR TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    AZ TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    KK TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    ID TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    UZ TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    SCN TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    VN TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    length INT,
    episode_id INT,
    FOREIGN KEY (episode_id) REFERENCES ACD__CORE_L3_episodesNames(episode_id)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;