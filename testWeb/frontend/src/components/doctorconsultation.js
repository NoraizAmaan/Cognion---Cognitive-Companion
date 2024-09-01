import { db } from "./Firebase";
import { useEffect } from "react";
import "./doctorConsultation.css";

function Doctor() {

  useEffect(() => {
    db.collection("Users").onSnapshot((snapshot) => {
        snapshot.docs.forEach((doc) => console.log(doc.data()));
      });
  }, []);
  
  function bookAppoinment(e){
    e.preventDefault();

    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").valueAsDate;


    db.collection("Users").add({
      name: name,
      contact: contact,
      email: email,
      date: date
    });

  }

  return (<>
<header className="header">

    <a href="#" className="logo"> <i className="fas fa-heartbeat"></i> Cognion </a>

    <nav className="navbar">
        <a href="#home">home</a>
        <a href="#services">services</a>
        <a href="#about">about</a>
        <a href="#doctors">doctors</a>
        <a href="#book">book</a>
        <a href="#review">review</a>
        <a href="#blogs">blogs</a>
    </nav>

    <div id="menu-btn" className="fas fa-bars"></div>

</header>


<section className="home" id="home">

    <div className="image">
        <img src="image/home-img.svg" alt="" />
    </div>

    <div className="content">
        <h3>Find your Cognitive Companion</h3>
        <p>Mental and physical health are equally important components of overall health.So let's make ourselves FIT mentally through Cognion!</p>
        <a href="#" className="btn"> contact us <span className="fas fa-chevron-right"></span> </a>
    </div>

</section>

<section className="icons-container">

    <div className="icons">
        <i className="fas fa-user-md"></i>
        <h3>140+</h3>
        <p>doctors at work</p>
    </div>

    <div className="icons">
        <i className="fas fa-users"></i>
        <h3>1040+</h3>
        <p>satisfied patients</p>
    </div>

    <div className="icons">
        <i className="fas fa-procedures"></i>
        <h3>500+</h3>
        <p>bed facility</p>
    </div>

    <div className="icons">
        <i className="fas fa-hospital"></i>
        <h3>80+</h3>
        <p>available hospitals</p>
    </div>

</section>


<section className="services" id="services">

    <h1 className="heading"> our <span>services</span> </h1>

    <div className="box-container">

        <div className="box">
            <i className="fas fa-notes-medical"></i>
            <h3>free checkups</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
            <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
        </div>

        <div className="box">
            <i className="fas fa-ambulance"></i>
            <h3>24/7 ambulance</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
            <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
        </div>

        <div className="box">
            <i className="fas fa-user-md"></i>
            <h3>expert doctors</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
            <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
        </div>

        <div className="box">
            <i className="fas fa-pills"></i>
            <h3>medicines</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
            <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
        </div>

        <div className="box">
            <i className="fas fa-procedures"></i>
            <h3>bed facility</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
            <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
        </div>

        <div className="box">
            <i className="fas fa-heartbeat"></i>
            <h3>total care</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
            <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
        </div>

    </div>

</section>

<section className="about" id="about">

    <h1 className="heading"> <span>about</span> us </h1>

    <div className="row">

        <div className="image">
            <img src="image/about-img.svg" alt="" />
        </div>

        <div className="content">
            <h3>Lets Get Ready to be Mentally FIT</h3>
            <p>Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also help us determine how we handle stress, related to others, and make healthy choices. Mental health is important at every stage of our life, from childhood and adolescence through adulthood.</p>
            <p>Mental and physical health are equally important components of overall health.So let's make ourselves FIT mentally through Cognion.!!</p>
            <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
        </div>

    </div>

</section>

<section className="doctors" id="doctors">

    <h1 className="heading"> our <span>doctors</span> </h1>

    <div className="box-container">

        <div className="box">
            <img src="" alt="" />
            <h3>john deo</h3>
            <span>expert doctor</span>
            <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
            </div>
        </div>

        <div className="box">
            <img src="image/doc-2.jpg" alt="" />
            <h3>john deo</h3>
            <span>expert doctor</span>
            <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
            </div>
        </div>

        <div className="box">
            <img src="image/doc-3.jpg" alt="" />
            <h3>john deo</h3>
            <span>expert doctor</span>
            <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
            </div>
        </div>

        <div className="box">
            <img src="image/doc-4.jpg" alt=""/>
            <h3>john deo</h3>
            <span>expert doctor</span>
            <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
            </div>
        </div>

        <div className="box">
            <img src="image/doc-5.jpg" alt="" />
            <h3>john deo</h3>
            <span>expert doctor</span>
            <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
            </div>
        </div>

        <div className="box">
            <img src="image/doc-6.jpg" alt="" />
            <h3>john deo</h3>
            <span>expert doctor</span>
            <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
            </div>
        </div>

    </div>

</section>



<section className="book" id="book">

    <h1 className="heading"> <span>book</span> now </h1>    

    <div className="row">

        <div className="image">
            <img src="image/book-img.svg" alt="" />
        </div>

        <form>
            <h3>book appointment</h3>
            <input type="text" id="name"  placeholder="name" className="box" />
            <input type="number" id="contact" placeholder="contact" className="box" />
            <input type="email" id="email" placeholder="email" className="box" />
            <input type="date" id="date" className="box" />
            <input type="submit" value="book now" className="btn" onClick={bookAppoinment}/>
        </form>

    </div>

</section>


<section className="review" id="review">
    
    <h1 className="heading"> client's <span>review</span> </h1>

    <div className="box-container">

        <div className="box">
            <img src="image/pic-1.png" alt="" />
            <h3>john deo</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sapiente nihil aperiam? Repellat sequi nisi aliquid perspiciatis libero nobis rem numquam nesciunt alias sapiente minus voluptatem, reiciendis consequuntur optio dolorem!</p>
        </div>

        <div className="box">
            <img src="image/pic-2.png" alt=""/>
            <h3>john deo</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sapiente nihil aperiam? Repellat sequi nisi aliquid perspiciatis libero nobis rem numquam nesciunt alias sapiente minus voluptatem, reiciendis consequuntur optio dolorem!</p>
        </div>

        <div className="box">
            <img src="image/pic-3.png" alt=""/>
            <h3>john deo</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sapiente nihil aperiam? Repellat sequi nisi aliquid perspiciatis libero nobis rem numquam nesciunt alias sapiente minus voluptatem, reiciendis consequuntur optio dolorem!</p>
        </div>

    </div>

</section>



<section className="blogs" id="blogs">

    <h1 className="heading"> our <span>blogs</span> </h1>

    <div className="box-container">

        <div className="box">
            <div className="image">
                <img src="" alt=""/>
            </div>
            <div className="content">
                <div className="icon">
                    <a href="#"> <i className="fas fa-calendar"></i> 1st may, 2021 </a>
                    <a href="#"> <i className="fas fa-user"></i> by admin </a>
                </div>
                <h3>blog title goes here</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, eius.</p>
                <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
            </div>
        </div>

        <div className="box">
            <div className="image">
                <img src="image/blog-2.jpg" alt=""/>
            </div>
            <div className="content">
                <div className="icon">
                    <a href="#"> <i className="fas fa-calendar"></i> 1st may, 2021 </a>
                    <a href="#"> <i className="fas fa-user"></i> by admin </a>
                </div>
                <h3>blog title goes here</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, eius.</p>
                <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
            </div>
        </div>

        <div className="box">
            <div className="image">
                <img src="image/blog-3.jpg" alt=""/>
            </div>
            <div className="content">
                <div className="icon">
                    <a href="#"> <i className="fas fa-calendar"></i> 1st may, 2021 </a>
                    <a href="#"> <i className="fas fa-user"></i> by admin </a>
                </div>
                <h3>blog title goes here</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, eius.</p>
                <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
            </div>
        </div>

    </div>

</section>



<section className="footer">

    <div className="box-container">

        <div className="box">
            <h3>quick links</h3>
            <a href="#"> <i className="fas fa-chevron-right"></i> home </a>
            <a href="#"> <i className="fas fa-chevron-right"></i> services </a>
            <a href="#"> <i className="fas fa-chevron-right"></i> about </a>
            <a href="#"> <i className="fas fa-chevron-right"></i> doctors </a>
            <a href="#"> <i className="fas fa-chevron-right"></i> book </a>
            <a href="#"> <i className="fas fa-chevron-right"></i> review </a>
            <a href="#"> <i className="fas fa-chevron-right"></i> blogs </a>
        </div>

        <div className="box">
            <h3>our services</h3>
            <a href="#"> <i className="fas fa-chevron-right"></i> mental care </a>
            <a href="#"> <i className="fas fa-chevron-right"></i> anonymous message </a>
            <a href="#"> <i className="fas fa-chevron-right"></i> cardioloty </a>
            <a href="#"> <i className="fas fa-chevron-right"></i> diagnosis </a>
            <a href="#"> <i className="fas fa-chevron-right"></i> one to one counselling </a>
        </div>

        <div className="box">
            <h3>contact info</h3>
            <a href="#"> <i className="fas fa-phone"></i> +91 9031488680 </a>
            <a href="#"> <i className="fas fa-phone"></i> +91 9876543210</a>
            <a href="#"> <i className="fas fa-envelope"></i> companioncognitive@gmail.com</a>
            <a href="#"> <i className="fas fa-envelope"></i> noraizamaan150303@gmail.com </a>
            <a href="#"> <i className="fas fa-map-marker-alt"></i> VIT Bhopal University, Sehore , Madhya Pradesh - 466114 </a>
        </div>

        <div className="box">
            <h3>follow us</h3>
            <a href="#"> <i className="fab fa-facebook-f"></i> facebook </a>
            <a href="#"> <i className="fab fa-twitter"></i> twitter </a>
            <a href="#"> <i className="fab fa-twitter"></i> twitter </a>
            <a href="#"> <i className="fab fa-instagram"></i> instagram </a>
            <a href="#"> <i className="fab fa-linkedin"></i> linkedin </a>
            <a href="#"> <i className="fab fa-pinterest"></i> pinterest </a>
        </div>

    </div>

    <div className="credit"> created by <span>Team Cognion</span> | all rights reserved </div>

</section>
</>
  );
}

export default Doctor;
