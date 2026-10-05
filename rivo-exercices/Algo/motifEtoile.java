public class motifEtoile {
    public static void main(String[] args) {
        int i;
        int j;
        int N;
        N = 5;
        int nombreOccurence;
        int longueurTableau;
        int cible;

        /*
         * for (i = 0; i < N; i++) {
         * for (j = 0; j < N; j++) {
         * System.out.print("*");
         * }
         * System.out.println();
         * 
         * }
         */
        int[] tab = { 10, 20, 30, 40, 50, 20, 78, 20, 69 };
        longueurTableau = tab.length;
        nombreOccurence = 0;
        cible = 78;

        for (i = 0; i < longueurTableau; i++) {
            if (tab[i] == cible) {
                nombreOccurence = nombreOccurence + 1;
            }
        }
        System.out.print(nombreOccurence);

    }
}
