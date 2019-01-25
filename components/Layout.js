import Link from 'next/link';
import Head from 'next/head';

const Layout = ({children, title, description}) => {
    return (
        <div>
            <Head>
                <title>{`Hacker News | ${title}`}</title>
                <meta name="description" content={description}/>
            </Head>
            <div className="container">
                <nav>
                    <Link href="/">
                        <a><span className="main-title">Hacker News</span></a>
                    </Link>
                </nav>
                {children}
            </div>
            <style jsx>{`
                    .container {
                        max-width: 800px;
                        margin: 0 auto;
                        background-color: whitesmoke
                    }

                    nav {
                        background-color: #f60;
                        padding: 1em;
                    }

                    nav > * {
                        display: inline-block;
                        color: black;
                    }

                    nav a {
                        text-decoration: none;
                    }

                    nav .main-title {
                        font-weight: bold;
                    }
                `}</style>

                <style global jsx>{`
                        body {
                            background-color: white;
                            font-family: Verdana, Geneva, sans-serif;
                        }
                    `}</style>            
        </div>
    );
}

export default Layout;
