CREATE TABLE pokemon (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    image_url VARCHAR(100) NOT NULL,
    numero_pokedex INT NOT NULL
);

CREATE TABLE type (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
);

INSERT INTO type (name) VALUES ('Normal');
INSERT INTO type (name) VALUES ('Feu');
INSERT INTO type (name) VALUES ('Eau');
INSERT INTO type (name) VALUES ('Électrik');
INSERT INTO type (name) VALUES ('Plante');
INSERT INTO type (name) VALUES ('Glace');
INSERT INTO type (name) VALUES ('Combat');
INSERT INTO type (name) VALUES ('Poison');
INSERT INTO type (name) VALUES ('Sol');
INSERT INTO type (name) VALUES ('Vol');
INSERT INTO type (name) VALUES ('Psy');
INSERT INTO type (name) VALUES ('Insecte');
INSERT INTO type (name) VALUES ('Roche');
INSERT INTO type (name) VALUES ('Spectre');
INSERT INTO type (name) VALUES ('Dragon');
INSERT INTO type (name) VALUES ('Ténèbres');
INSERT INTO type (name) VALUES ('Acier');
INSERT INTO type (name) VALUES ('Fée');

CREATE TABLE pokemon_type (
    pokemon_id INT,
    type_id INT,
    FOREIGN KEY (pokemon_id) REFERENCES pokemon(id),
    FOREIGN KEY (type_id) REFERENCES type(id),
    PRIMARY KEY (pokemon_id, type_id)
);

INSERT INTO pokemon (name, image_url, numero_pokedex) VALUES ('Bulbizarre', 'https://example.com/bulbizarre.png', 1);
INSERT INTO pokemon (name, image_url, numero_pokedex) VALUES ('Herbizarre', 'https://example.com/herbizarre.png', 2);
INSERT INTO pokemon (name, image_url, numero_pokedex) VALUES ('Florizarre', 'https://example.com/florizarre.png', 3);
INSERT INTO pokemon (name, image_url, numero_pokedex) VALUES ('Salamèche', 'https://example.com/salameche.png', 4);
INSERT INTO pokemon (name, image_url, numero_pokedex) VALUES ('Reptincel', 'https://example.com/reptincel.png', 5);
INSERT INTO pokemon (name, image_url, numero_pokedex) VALUES ('Dracaufeu', 'https://example.com/dracaufeu.png', 6);
INSERT INTO pokemon (name, image_url, numero_pokedex) VALUES ('Carapuce', 'https://example.com/carapuce.png', 7);
INSERT INTO pokemon (name, image_url, numero_pokedex) VALUES ('Carabaffe', 'https://example.com/carabaffe.png', 8);
INSERT INTO pokemon (name, image_url, numero_pokedex) VALUES ('Tortank', 'https://example.com/tortank.png', 9);
INSERT INTO pokemon (name, image_url, numero_pokedex) VALUES ('Chenipan', 'https://example.com/chenipan.png', 10);
INSERT INTO pokemon (name, image_url, numero_pokedex) VALUES ('Chrysacier', 'https://example.com/chrysacier.png', 11);
INSERT INTO pokemon (name, image_url, numero_pokedex) VALUES ('Papilusion', 'https://example.com/papilusion.png', 12);
INSERT INTO pokemon (name, image_url, numero_pokedex) VALUES ('Aspicot', 'https://example.com/aspicot.png', 13);
INSERT INTO pokemon (name, image_url, numero_pokedex) VALUES ('Coconfort', 'https://example.com/coconfort.png', 14);
INSERT INTO pokemon (name, image_url, numero_pokedex) VALUES ('Dardargnan', 'https://example.com/dardargnan.png', 15);
INSERT INTO pokemon (name, image_url, numero_pokedex) VALUES ('Roucool', 'https://example.com/roucool.png', 16);
INSERT INTO pokemon (name, image_url, numero_pokedex) VALUES ('Roucoups', 'https://example.com/roucoups.png', 17);
INSERT INTO pokemon (name, image_url, numero_pokedex) VALUES ('Roucarnage', 'https://example.com/roucarnage.png', 18);
INSERT INTO pokemon (name, image_url, numero_pokedex) VALUES ('Rattata', 'https://example.com/rattata.png', 19);
INSERT INTO pokemon (name, image_url, numero_pokedex) VALUES ('Rattatac', 'https://example.com/rattatac.png', 20);

-- Bulbizarre (Plante, Poison)
INSERT INTO pokemon_type (pokemon_id, type_id) VALUES (1, 5); -- Plante
INSERT INTO pokemon_type (pokemon_id, type_id) VALUES (1, 8); -- Poison

-- Herbizarre (Plante, Poison)
INSERT INTO pokemon_type (pokemon_id, type_id) VALUES (2, 5); -- Plante
INSERT INTO pokemon_type (pokemon_id, type_id) VALUES (2, 8); -- Poison

-- Florizarre (Plante, Poison)
INSERT INTO pokemon_type (pokemon_id, type_id) VALUES (3, 5); -- Plante
INSERT INTO pokemon_type (pokemon_id, type_id) VALUES (3, 8); -- Poison

-- Salamèche (Feu)
INSERT INTO pokemon_type (pokemon_id, type_id) VALUES (4, 2); -- Feu

-- Reptincel (Feu)
INSERT INTO pokemon_type (pokemon_id, type_id) VALUES (5, 2); -- Feu

-- Dracaufeu (Feu, Vol)
INSERT INTO pokemon_type (pokemon_id, type_id) VALUES (6, 2); -- Feu
INSERT INTO pokemon_type (pokemon_id, type_id) VALUES (6, 10); -- Vol

-- Carapuce (Eau)
INSERT INTO pokemon_type (pokemon_id, type_id) VALUES (7, 3); -- Eau

-- Carabaffe (Eau)
INSERT INTO pokemon_type (pokemon_id, type_id) VALUES (8, 3); -- Eau

-- Tortank (Eau)
INSERT INTO pokemon_type (pokemon_id, type_id) VALUES (9, 3); -- Eau

-- Chenipan (Insecte)
INSERT INTO pokemon_type (pokemon_id, type_id) VALUES (10, 12); -- Insecte

-- Chrysacier (Insecte)
INSERT INTO pokemon_type (pokemon_id, type_id) VALUES (11, 12); -- Insecte

-- Papilusion (Insecte, Vol)
INSERT INTO pokemon_type (pokemon_id, type_id) VALUES (12, 12); -- Insecte
INSERT INTO pokemon_type (pokemon_id, type_id) VALUES (12, 10); -- Vol

-- Aspicot (Insecte, Poison)
INSERT INTO pokemon_type (pokemon_id, type_id) VALUES (13, 12); -- Insecte
INSERT INTO pokemon_type (pokemon_id, type_id) VALUES (13, 8); -- Poison

-- Coconfort (Insecte, Poison)
INSERT INTO pokemon_type (pokemon_id, type_id) VALUES (14, 12); -- Insecte
INSERT INTO pokemon_type (pokemon_id, type_id) VALUES (14, 8); -- Poison

-- Dardargnan (Insecte, Poison)
INSERT INTO pokemon_type (pokemon_id, type_id) VALUES (15, 12); -- Insecte
INSERT INTO pokemon_type (pokemon_id, type_id) VALUES (15, 8); -- Poison

-- Roucool (Normal, Vol)
INSERT INTO pokemon_type (pokemon_id, type_id) VALUES (16, 1); -- Normal
INSERT INTO pokemon_type (pokemon_id, type_id) VALUES (16, 10); -- Vol

-- Roucoups (Normal, Vol)
INSERT INTO pokemon_type (pokemon_id, type_id) VALUES (17, 1); -- Normal
INSERT INTO pokemon_type (pokemon_id, type_id) VALUES (17, 10); -- Vol

-- Roucarnage (Normal, Vol)
INSERT INTO pokemon_type (pokemon_id, type_id) VALUES (18, 1); -- Normal
INSERT INTO pokemon_type (pokemon_id, type_id) VALUES (18, 10); -- Vol

-- Rattata (Normal)
INSERT INTO pokemon_type (pokemon_id, type_id) VALUES (19, 1); -- Normal

-- Rattatac (Normal)
INSERT INTO pokemon_type (pokemon_id, type_id) VALUES (20, 1); -- Normal
