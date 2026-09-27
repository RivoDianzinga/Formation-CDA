/* 1. Créer une base de données bibliotheque */
/* CREATE DATABASE bibliotheque; /* crée la base de données */
*/

/* 2. Créer une table livres */
CREATE TABLE livres ( /* une fois créé la BDD, on y entre, et on crée des tables */
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY, /* identifiant unique, qui s'incrémente automatiquement */
    titre VARCHAR(255) NOT NULL, /* le titre, obligatoire */
    auteur VARCHAR(100) NOT NULL, /* l'auteur, obligatoire */
    annee INT, /* optionnel */
    genre VARCHAR(50) /* optionnel */
);

/* 3. Insérer 5 livres */
INSERT INTO livres (titre, auteur, annee, genre) VALUES
    ('1984', 'George Orwell', 1949, 'Science-fiction'),
    ('Le Petit Prince', 'Antoine de Saint-Exupéry', 1943, 'Conte'),
    ('L''affaire du silure', 'Guy Menga', 1981, 'Aventure'),
    ('Tant que la terre durera', 'Henri Troyat', 1947, 'Histoire'),
    ('Children of Blood and Bone', 'Tomi Adeyemi', 2018, 'Science-fiction');