# NeuroFlow

# Contexte et Objectifs

La surexposition aux stimulations numériques entraine une dérégulation des circuits dopaminergique.

Neuroflow : 
- permet à l'utilisateur de comprendre et de monitorer ses patterns neurochimiques quotidien.
- permet à l'utilisateur de distinguer ses sources de dopamines rapide (néfaste: Réseaux sociaux, sucre, scroll) et lente(bénéfique: création, effort, apprentissage).
- propose des interventions concrète basée sur la neuroscience : exercice, respiration, lumière, connexion sociale.
- Accompagne l'utilisateur dans des protocoles de detox et recalibration des récepteurs dopaminergiques (D2).
- Optimise les fenêtres cognitives via la chronobiologie et les rythmes circadien. 
- Fournit un Neuro Coach IA personnalise, appuyé sur une base de connaissances neuroscientifiques vérifiées.

# Acteurs
- Utilisateur Standard
- Utilisateur Premium (Plus tard) 

# Modules et Fonctionnalités

## Module Authentification

Gérer l'identité de l'utilisateur

- inscription de l'utilisateur
- Onboarding de l'utilisateur
- connexion de l'utilisateur 
- Déconnexion de l'utilisateur

## Module Dashboard

C'est la première chose que l'utilisateur voit chaque jour. Elle synthèse toutes les données en un coup d'œil et oriente vers les actions prioritaires du jour.

- Voir son score dopaminergique
- Faire un check-in chaque jour
- Voir le graphique courbe des 7 derniers jours pour les 4 neurotransmetteurs 
- Voir son Heatmap de l'activité des 4 dernières semaines (style GitHub) — couleur = score global journalier  
- Recevoir 3 recommandations du Neuro Coach sous forme de cartes cliquables : icone + titre + description 2 lignes + badge source scientifique ('Huberman Lab., 2021')

## Module Dopamine Tracker

L'utilisateur journalise chaque activité qui déclenche de la dopamine — en temps réel ou en diffère. Le système classe automatiquement chaque source entre dopamine rapide (nuisible) et dopamine lente (bénéfique).

- Journalisation rapide des activités qui ont déclenché de la dopamine 
- Visualiser son pics de dopamine sur un timeline
- Voir le graphique barres empilées : dopamine rapide vs lente par jour sur 30 jours
- Voir un Heatmap des sources : quelles catégories déclenchent le plus de dopamine rapide/lente
- Voir le top 3 des déclencheurs "addictifs" et le top 3 des déclencheurs "sains"
- Exporter ses données (CSV) et générer un rapport (PDF)

## Module Flow Engine

Calcule et affiche les meilleures fenêtres cognitives quotidiennes en croisant chronotype, données de check-in et patterns historiques. Permet de planifier et exécuter des sessions Deep Work avec un timer dédié

- Voir ses meilleurs fenêtres cognitives quotidiennes sur vue calendar de la semaine en vue verticale (lun - dim) avec plages de 30 min  avec des couleurs différentes selon le calcule.
- Ajouter une session dans une fenêtres cognitive.
- Afficher les sessions comme des blocs avec statut
- Démarrer une session 
- Afficher le timer en page plein écran avec citation neuroscientifique motivante renouvelée toutes les 10 minutes (base de données Laravel)
- Afficher à la fin de chaque session : fenêtre de bilan — durée réelle, nb interruptions, auto-évaluation focus 1-5, note libre
- Planifier une session indépendamment des fenêtres cognitives 
