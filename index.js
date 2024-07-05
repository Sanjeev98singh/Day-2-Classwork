function Card(){
    return(
        <div className="card">
            <h1>Hii My Name is Pritiranjan</h1>
            <div>
                <p>
                    I am a Web Developer and I am currently working on my own projects. I am also aStudent at geekster
                </p>
            </div>
            <div>
                <a href ="https://www.linkedin.com/in/pritiranjan-patra-771a91287/">
                Click Me
                </a>
            </div>
            <div>
                <p>
                  Click On above button to navigate my linked in profile

                </p>
            </div>
        </div>
    );
}


let con=ReactDOM.createRoot(document.getElementById('root'));
con.render(
    <Card/>
)