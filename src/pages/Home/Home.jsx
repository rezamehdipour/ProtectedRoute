import { Link } from 'react-router-dom';

// Hooks
import useAuthenticated from '../../hooks/useAuthenticated';

// CSS
import './Home.scss';

const Home = (props) => {
    const authenticated = useAuthenticated();

    let content;
    if (authenticated) {
        content = (
            <h1>
                Hey! You can checkout&nbsp;
                <Link to="/articles">
                    articles
                </Link>
            </h1>
        );
    } else {
        content = (
            <h1>
                Welcome, please login and enjoy new articles!
            </h1>
        )
    }

    return (
        <div className="HomePage">
            {content}
        </div>
    )
}

export default Home;