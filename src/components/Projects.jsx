import React from "react";
import "./css/projects.css";
import "./css/service.css";

export default function Projects() {
  return (
    <section className="services" id="projects">
        <div className="service-head">
        <br/><br/><br/><br/>
            <h1>My<span>Projects</span></h1>
        </div>


      <div className="content">

      <div className="row">
        <a href="https://github.com/IT21381218/Airlines-Reservation-Ticket-Booking-System">
            <img src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1690883334/photo-1559268950-2d7ceb2efa3a_upa7wp.png"></img>
            <div className="layer">
                <h5>Revolt Airline</h5>
                <p>This airline reservation ticket booking system  is a comprehensive and user-friendly web application that simplifies the process of reserving and booking flight tickets for travelers. This project aims to streamline the airline ticket booking process and enhance the overall travel experience for users.</p>
            </div>
        </a>
        </div>

        <div className="row">
            <a href="https://github.com/IT21381218/e-Care-system">
            <img src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1690885649/Untitled-2_uqorei.png"></img>
            <div className="layer">
                <h5>eCare System</h5>
                <p>This system aims to streamline the process of booking doctor appointments, making it convenient and accessible for patients while optimizing the overall efficiency of medical institutions.</p>
            </div>
        </a>    
        </div>

        <div className="row">
        <a href="https://github.com/IT21388934/ITP_WD_B1_G14">
            <img src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1690897838/Untitled-1_xewcwj.png"></img>
            <div className="layer">
                <h5>Guident Computers</h5>
                <p>Guident Computers is a business store that sells computer parts and other electronic goods to
consumers in Sri Lanka. Their business serves as an intermediary between a buyer and suppliers.
</p>
            </div>
        </a>
        </div>

        <div className="row">
            <a href="https://github.com/IT21388934/RentalApplication/tree/main">
            <img src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1690900415/Untitled-5_qvgdlq.png"></img>
            <div className="layer">
                <h5>TravelLodge</h5>
                <p>Our application, TravelLodge allows local homeowners to put their accommodations for rent for tourists who doesn’t want to invest a lot of money in hotels. This will allow more tourists to visit and stay as long as they wish for a reasonable price. This also helps spread good word about how easy it is to visit our country and stay.</p>
            </div>
        </a>    
        </div>


      </div>


        {/* <div className="services-list">
            <div>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAATtJREFUSEvtlL1KA1EQhb8hu2UUWTXain/PECV5C8FakGAr+BpiIRaCheCDGMVnUBRrk+gWWm7CyM0azd1/IkuabHvvPd/MmbMjlPxJyfrMALkOT9mirq5QYR9PThNL9fWEPtcsy1taK+kdhOJthA2UQzy5tER8PQLOUZ4Z0EiDJAOMuMMdsA68ElCnJh0L0NEaLg/AGvCCS52q9KKdxAFfukQwfGjEnwhoxsRHKjbkEZdGFGIDQvE2sD0Ud9hlTt4zoxJCboEtIAb5A0wiPiJ/6iJ97n8hFXaYF98clwMYs+r/FkWrj8whf8hZc8jx37ZofJJ2TJOTVCBB6QBzYiAmHcomygGeXEV+tBZw8ZOcJlXpJqUtexf1dBWHPRbkLDGqH3rMgJvJVkXunix2YcrbtFiRmbdmHeSa+A1JJoMZKX8hLwAAAABJRU5ErkJggg=="/>          
                <h2>UI/UX Design</h2>
                <p>oiehrotuiernoert</p>
                <a href="#" className="read">Lern more</a>
            </div>
        </div> */}
    </section>

  );
}
