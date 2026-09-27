/* Afficher tous les livres */
SELECT * FROM livres;
/* Afficher tous les livres publiés après 1950 */
SELECT * FROM livres
WHERE annee > 1950;
/* Afficher tous les livres de science-fiction */
SELECT * FROM livres
WHERE genre ='Science-fiction';
/* Compter le nombre de livres par genre */
SELECT genre, COUNT(*) AS nombre_de_livres
FROM livres
GROUP BY genre;
/* Afficher le livre le plus ancien */
SELECT * FROM livres
WHERE annee = (SELECT MIN(annee) FROM livres);