import Link from 'next/link'
export default ({ children }) => (
    <div className="main">
        <div className="logo">
            <h2>
                <Link href="/"><a>Películas</a></Link>
            </h2>
        </div>
       
        {children}
        {/** Styles globales */}
        <style jsx>{`
                .mail {
                    padding: 10px 10px;
                    font-family: sans-serif;
                }
                .logo {
                    color: white;
                    background-color: blue;
                    border-radius: 10px;
                    text-align: center;
                    font-size: 30px
                }
                .logo a {
                  color: inherit;
                  }
                a {
                    text-decoration: none;
                  }
                  h2 {
                      margin: 0px
                  }
                `}</style>
    </div>
)