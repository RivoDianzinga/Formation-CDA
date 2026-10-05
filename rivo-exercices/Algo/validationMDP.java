import java.util.Scanner;

public class validationMDP {

    static boolean testLongueurMDP(String motdepasse) {
        int longeurMPD = motdepasse.length();
        if (longeurMPD >= 8) {
            return true;
        } else {
            return false;
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        /* Ouvre l'interface de saisie */

        int longeurMDP;
        int longueurchiffresTableau;
        int longueurmajTableau;
        String motdepasseAlias;
        int longueurminTableau;
        int i;
        int j;
        boolean checkLongeurmdp;
        boolean testrun;
        testrun = false;

        System.out.println("Entre ton mot de passe");
        String motDePasse = scanner.nextLine();
        motdepasseAlias = motDePasse;
        checkLongeurmdp = testLongueurMDP(motdepasseAlias);
        // System.out.println(checkLongeurmdp);

        longeurMDP = motDePasse.length();
        char[] chiffresTableau = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' };
        char[] majLettresTableau = { 'A', 'B', 'C' };
        char[] minLettresTableau = { 'a', 'b', 'b' };

        longueurchiffresTableau = chiffresTableau.length;
        longueurmajTableau = majLettresTableau.length;
        longueurminTableau = minLettresTableau.length;

        /* Boucles des chiffres */
        for (i = 0; i < longeurMDP; i++) {
            for (j = 0; j < longueurchiffresTableau; j++) {
                if (motDePasse.charAt(i) == chiffresTableau[j]) {
                    testrun = true;
                    break;
                    // System.out.println("Check");
                }
            }
        }

        System.out.println(testrun);

        /* Boucles des majuscules */
        for (i = 0; i < longeurMDP; i++) {
            for (j = 0; j < longueurmajTableau; j++) {
                if (motDePasse.charAt(i) == majLettresTableau[j]) {
                    // System.out.println("Check");
                }
            }
        }

        scanner.close();
    }
}
