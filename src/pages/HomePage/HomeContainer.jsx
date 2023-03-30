import HomePageNavBar from '../../components/HomePageNavBar';
import HomeChoices from './HomeChoices';

/**
 * Displays the homepage of the application after
 * logging in to the application
 * 
 * @author Marcus Yeo
 * @returns HomePageNavBar and HomeChoices components
 */

const HomeContainer = () => {
    return (
      <div>
        <HomePageNavBar />
        <HomeChoices/>
      </div>
    );
}

export default HomeContainer;