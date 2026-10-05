public class dichotome {
    public static void main(String[] args) {
        int[] nombres = { 2, 5, 8, 12, 16, 23, 38, 56, 72, 91 };
        int cible = 13;
        int result;

        result = rechercheDichotomique(nombres, cible);
        System.out.println(result);

    }

    /*
     * Cet algorithme de recherche dichotomique permet vérifier si un nombre
     * appartient à un tableau. Prenant en paramètres le tableau et le nombre
     * ciblé, cet algoritheme retourne l'indice du nombre ciblé dans le tableau
     * si ce nombre appartient bel et bien au tableau, sion il retourne -1.
     */
    static int rechercheDichotomique(int[] tableau, int cible) {
        int gauche = 0;
        int droite = tableau.length - 1;

        while (gauche <= droite) {
            int milieu = (gauche + droite) / 2;

            if (tableau[milieu] == cible) {
                return milieu;
            } else if (tableau[milieu] < cible) {
                gauche = milieu + 1;
            } else {
                droite = milieu - 1;
            }
            // System.out.println("Rivo");
        }
        return -1;
    }
}
