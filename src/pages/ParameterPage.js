import Header from '../components/Header/Header';
import BotNav from '../components/BottomNavigation/BotNav';
import Parameter from '../components/Parameters/Parameters';

/* Nichlas */

export default function ParameterPage() {
    return (
        <>
            <Header />
            <h2 className='parameter-heading' >Vælg de kriterier din <span className='heading-underline'>date</span> skal bestå af</h2>
            <Parameter />
            <BotNav />
        </>
    )
}