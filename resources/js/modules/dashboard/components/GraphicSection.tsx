import CourbeEvolution from './CourbeEvolution';
import Heatmap from './Heatmap';
import StreakCard from './StreakCard';

const GraphicSection = () => {
    return (
        <div className="flex items-center">
            <CourbeEvolution />

            <div>
                <Heatmap />
                <StreakCard />
            </div>
        </div>
    );
};

export default GraphicSection;
