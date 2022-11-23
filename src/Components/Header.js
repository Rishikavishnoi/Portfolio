
export default function Header(){
    return(
        <div className="header-container">
            <div className="row">
                <div className="col-md-6 head-text">
            <h1 >Hello I'm Rishika Vishnoi</h1>
           <p>Web Developer || Open Source Contributor</p>
          </div>
          <div className="col-md-6">
       
            <img src= {require("../Images/pic.jpeg" )} alt="image" className="mypic" />
        </div>
        </div>
        </div>
    )
}