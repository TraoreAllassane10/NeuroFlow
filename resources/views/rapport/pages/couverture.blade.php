<div class="page couverture">

    <div class="logo">
        NeuroFlow
    </div>

    <h1>Rapport Dopamine Tracker</h1>

    <p class="subtitle">
        Analyse de votre équilibre dopaminergique
    </p>

    <div class="separator"></div>

    <table class="infos">
        <tr>
            <td><strong>Utilisateur</strong></td>
            <td>{{ auth()->user()->name }}</td>
        </tr>

        <tr>
            <td><strong>Période</strong></td>
            <td>30 derniers jours</td>
        </tr>

        <tr>
            <td><strong>Date de génération</strong></td>
            <td>{{ now()->translatedFormat("l j F Y") }}</td>
        </tr>
    </table>

    <div class="score">

        <div class="score-title">
            Equilibre Dopaminergique
        </div>

        <div class="score-value">
            {{ $data['ratio_dopamine_lente'] }}
        </div>

        <div class="score-label">
            Dopamine lente
        </div>

    </div>

    <div class="footer">

        Rapport généré automatiquement par NeuroFlow

    </div>

</div>