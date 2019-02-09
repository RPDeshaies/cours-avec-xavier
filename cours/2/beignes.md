```
DESCRIPTION: 
    ...
CONSTANTES
    POURCENT_TPS: 0.05
    POURCENT_TVQ: 0.9975
    PRIX_BEIGNE: 3
VARIABLES
    utilisateurVeutCommander: null
    nombreBeigne: 0
    utilisateurVeutEncoreUnBeigne: null
LOGIQUE
    ECRIRE "Veux tu commander ?"
    LIRE utilisateurVeutCommander
    SI utilisateurVeutCommander = faux
        ECRIRE "Va t'en!"
    SINON
        // LOGIQUE DE LA CAISSE
        BOUCLE
            ECRIRE "Veut tu un beigne ?"
            LIRE utilisateurVeutEncoreUnBeigne

            Si utilisateurVeutEncoreUnBeigne = vrai
                nombreBeigne <- nombreBeigne + 1

            JUSQUA utilisateurVeutEncoreUnBeigne = faux
        FIN BOUCLE

        ECRIRE "Prix beigne: ", PRIX_BEIGNE * nombreBeigne
        ECRIRE "Prix TPS: ", PRIX_BEIGNE * POURCENT_TPS * nombreBeigne
        ECRIRE "Prix TVQ: ", PRIX_BEIGNE * POURCENT_TVQ * nombreBeigne
        ECRIRE "Total: ", 
            (PRIX_BEIGNE * nombreBeigne) + (PRIX_BEIGNE * POURCENT_TPS * nombreBeigne) + (PRIX_BEIGNE * POURCENT_TVQ * nombreBeigne)
FIN
```