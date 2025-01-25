const Contact =()=>{
    return (
        <div className="contact-page">
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you! Reach out to us for any questions, feedback, or support.</p>
            </div>

            <div className="contact-content">
                <div className="contact-form">
                    <h2>Send Us a Message</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Enter your name" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" placeholder="Enter your message" rows="5" required ></textarea>
                        </div>
                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </div>

                <div className="contact-info">
                    <h2>Our Contact Information</h2>
                    <ul>
                        <li><strong>Email:</strong> support@foodiebuddy.com</li>
                        <li><strong>Phone:</strong> +1 (123) 456-7890</li>
                        <li><strong>Address:</strong> 123 Foodie Street, Tasty City, FC 12345</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Contact;

/* const Contact = () => {
    return (

               
            </div>
        </div>
    );
};

export default Contact; */