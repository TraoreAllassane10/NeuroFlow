<div class="page">
    <h1>Résumé exécutif</h1>

    <p>
        Ce rapport présente une synthèse de votre activité sur la période sélectionnée.
    </p>

    <table style="width:100%; margin-top:25px; border-collapse:separate; border-spacing:15px;">
        <tr>
            <td style="width:50%; border:1px solid #ddd; padding:20px; border-radius:8px;">
                <h3 style="margin:0; color:#534AB7;">Stimuli enregistrés</h3>

                <h1 style="margin:15px 0 0 0;">{{ $data['nombre_total_stimuli'] }}</h1>

                <small >Activités suivies</small>
            </td>

            <td style="width:50%; border:1px solid #ddd; padding:20px; border-radius:8px;>
                <h3 style="margin:0; color:#534AB7;">Equilibre</h3>

                <h1 style="margin:15px 0 0 0; color:#EF9F27;">{{ $data['recommandations'][0]['titre'] }}</h1>

                <small>État actuel</small>
            </td>
        </tr>

        <tr>
            <td style="border:1px solid #ddd; padding:20px; border-radius:8px;">
                <h3 style="margin:0; color:#1D9E75;">Dopamine lente</h3>

                <h1 style="margin:15px 0 0 0;">{{ $data['ratio_dopamine_lente'] }}</h1>

                <small>Objectif : 60 %</small>
            </td>

             <td style="border:1px solid #ddd; padding:20px; border-radius:8px;">
                <h3 style="margin:0; color:#D85A30;">Dopamine rapide</h3>

                <h1 style="margin:15px 0 0 0;">{{ $data['ratio_dopamine_rapide'] }}</h1>

                <small>Objectif : 40 %</small>
            </td>
        </tr>
    </table>

</div>
