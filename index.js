function Card(){
    return(
        <div className="card">
            <h1>Hii My Name is Sanjeev Singh Bhadouria</h1>
            <div>
                <p>
                    I am a Web Developer and I am currently working on my own projects. I am also a Student at geekster
                </p>
            </div>
            <div>
                <a href ="https://www.linkedin.com/in/sanjeev-singh-31870624b/">
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