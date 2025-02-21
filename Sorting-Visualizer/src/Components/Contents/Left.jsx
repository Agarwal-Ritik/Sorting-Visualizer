import Characterstics from './Characterstic.jsx'
import Algorithm from './Algorithm.jsx'
import FirstSection from './FirstSection.jsx'
import './Left.css';

function Left(){
    return(
        <div id='left'>
            <FirstSection />
            <Characterstics />
            <Algorithm />
        </div>
    );
}

export default Left;