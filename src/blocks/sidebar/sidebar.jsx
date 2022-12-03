import Ads from '../ads/ads';
import Card from '../card/card';

function Sidebar() {
    return (
        <aside className="sidebar">
            <Card />
            <Ads />
        </aside>
    );
}

export default Sidebar;
