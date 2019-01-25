import fetch from 'isomorphic-fetch';

class Index extends React.Component {
    static async getInitialProps() {
        const res = await fetch('https://node-hnapi.herokuapp.com/news?page=1');
        const stories = await res.json();

        return { stories }
    }

    render () {
        return (
            <div>Hacker News</div>
        )
    }
}

export default Index;