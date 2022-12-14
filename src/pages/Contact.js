export default function Contact() {
    return (
        <div className="container">
            <h1>Contact Me</h1>
            <form target="_blank" action="https://formsubmit.co/lcsantana.pro@gmail.com" method="POST">
                <div className="form-group">
                    <div className="form-row">
                        <div className="col">
                            <input type="text" name="name" className="form-control" placeholder="Full Name" required />
                        </div>
                        <div className="col">
                            <input type="email" name="email" className="form-control" placeholder="Email Address" required />
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
                </div>
                <button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</button>
            </form>
        </div>
    )
}