import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import { dataChart } from '../constants/data';

const DopamineBarChart = () => {
    return (
        <ResponsiveContainer width="100%" height={320}>
            <BarChart data={dataChart}>
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="day" />

                <YAxis />

                <Tooltip />

                <Legend />

                <Bar
                    dataKey="rapide"
                    stackId="rapide"
                    fill="#D85A30"
                    radius={[0, 0, 6, 6]}
                />

                <Bar
                    dataKey="lente"
                    stackId="lente"
                    fill="#1D9E75"
                    radius={[6, 6, 0, 0]}
                />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default DopamineBarChart;
