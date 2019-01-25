import fetch from "isomorphic-fetch";
import Error from "next/error";
import StoryList from "../components/StoryList";
import Layout from "../components/Layout";
import Link from "next/link";

class Index extends React.Component {
  static async getInitialProps({ req, res, query }) {
    let stories, page;
    try {
      page = Number(query.page) || 1;
      const res = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`);
      stories = await res.json();
    } catch (err) {
      console.log(err);
      stories = [];
    }

    return { stories, page };
  }

  componentDidMount () {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
      .register('/service-worker.js')
      .then(registeration => {
        console.log('service worker registration is working', registeration)
      })
      .catch(err => {
        console.warn('service worker registation failed', err.message)
      })
    }
  }

  render() {
    const { stories, page } = this.props;

    if (stories.length === 0) {
      return <Error statusCode={503} />;
    }

    return (
      <Layout title="Home" description="This is clone of hacker news">
        <StoryList stories={stories} />

        <footer>
          <Link href={`?page=${page + 1}`}>
            <a>Next Page ({page + 1})</a>
          </Link>
        </footer>

        <style jsx>{`
                footer {
                    padding: 1em;
                }

                footer a { 
                    font-weight: bold;
                    color: black;
                    text-decoration: none;
                }
            `}</style>
      </Layout>
    );
  }
}

export default Index;
