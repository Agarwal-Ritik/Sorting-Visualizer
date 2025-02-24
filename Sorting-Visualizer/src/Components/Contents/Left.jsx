import Characterstics from './Characterstic.jsx'
import Algorithm from './Algorithm.jsx'
import FirstSection from './FirstSection.jsx'
import './Left.css';

function Left({define, src}){
    return(
        <div id='left'>
            <FirstSection define = {define} src = {src}/>
            <Characterstics />
            <Algorithm />
        </div>
    );
}

export default Left;