```
DESCRIPTION: 
    ...
CONSTANTES
    POURCENT_TPS: 0.05
    POURCENT_TVQ: 0.9975
    PRIX_BEIGNE: 3
VARIABLES
    utilisateurVeutBeigne: null
LOGIQUE
    ECRIRE "Veut tu un beigne ?"
    LIRE utilisateurVeutBeigne
    SI utilisateurVeutBeigne = faux
        ECRIRE "Va t'en!"
    SINON
        ECRIRE "Prix beigne: ", PRIX_BEIGNE
        ECRIRE "Prix TPS: ", PRIX_BEIGNE * POURCENT_TPS
        ECRIRE "Prix TVQ: ", PRIX_BEIGNE * POURCENT_TVQ
        ECRIRE "Total: ", 
            PRIX_BEIGNE + (PRIX_BEIGNE * POURCENT_TPS) + (PRIX_BEIGNE * POURCENT_TVQ)
FIN
```