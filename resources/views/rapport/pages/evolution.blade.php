<div class="page">

    <h1>Évolution mensuelle</h1>

    <p>
        Répartition des activités à dopamine rapide et lente au cours des 30 derniers jours.
    </p>

    <table class="evolution-table">

        @foreach ($data['data_chart'] as $jour)
            <tr>

                <td class="day">
                    {{ $jour['day'] }}
                </td>

                <td>

                    <div class="label">
                        Rapide ({{ $jour['rapide'] }})
                    </div>

                    <div class="bar">

                        <div class="bar-rapide" style="width: {{ $jour['rapide'] * 6 }}%;">
                        </div>

                    </div>

                    <div class="label" style="margin-top:8px;">
                        Lente ({{ $jour['lente'] }})
                    </div>

                    <div class="bar">

                        <div class="bar-lente" style="width: {{ $jour['lente'] * 6 }}%;">
                        </div>

                    </div>

                </td>

            </tr>
        @endforeach

    </table>

</div>
