import './GuideLines.css';

import BackButton from './BackButton';
import ColorButton from './ColorButton';

export default function GuideLines() {
    return (
        <div className="guideLinesPage">
            <BackButton />
            <div className="guideTextWrapper">
                <img src="src/assets/one-eyed-purple-monster.jpg" />
                <div className="guideText">
                <p><span className="colorSentence">This is a community for sharing things for free.</span> Buying, selling, or exchange of any kind is not allowed.<br></br>Do you agree?</p>
                <p><span className="colorSentence">This community is based on goodwill.</span> Reselling items you get from this community is prohibited and you will be permanently removed if this happens.<br></br>Do you agree?</p>
                </div>
            </div>
            <ColorButton color="cornflowerblue">I agree</ColorButton>
            <ColorButton color="transparent">I don't agree</ColorButton>
        </div>
    )
}