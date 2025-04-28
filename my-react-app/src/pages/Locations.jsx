function Locations() {
  return (
    <>
      <h1>Wagner Financial Locations</h1>
      <h2>Visit one of our locations for your personalized service!</h2>
      <div className="w-lo d-flex">
        <div className="loInfo-Container">
          <h3>Winston-Salem, NC</h3>
          <div>
            <span>1342 Westgate Center Drive</span>
          </div>
          <div>
            <span>Winston-Salem, NC 27103</span>
          </div>
          <div>
            <span>Phone: (336) 794-3833</span>
          </div>
          <br />
          <div>
            <span>Business Hours</span>
          </div>
          <div>
            <span>Monday-Friday: 9:30 am-5:30 pm</span>
          </div>
          <div>
            <span>Drop Box available 24 Hours</span>
          </div>
          <br />
          <br />
          <div>
            <iframe
              className="mapdivs"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6449.684851867486!2d-80.31521592364425!3d36.07294730835583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8853b0e5786a0f19%3A0x6f76629d586baaa1!2sWagner%20Financial%20Services%2C%20Inc.!5e0!3m2!1sen!2sus!4v1745006256224!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="loInfo-Container">
          <h3>Greensboro, NC</h3>
          <div>
            <span>3411-B W Wendover Ave</span>
          </div>
          <div>
            <span>Greenboro, NC 27407</span>
          </div>
          <div>
            <span>Phone: (336) 273-9737</span>
          </div>
          <br />
          <div>
            <span>Business Hours</span>
          </div>
          <div>
            <span>Monday-Friday: 9:30 am-5:30 pm</span>
          </div>
          <div>
            <span>Drop Box available 24 Hours</span>
          </div>
          <br />
          <br />
          <div>
            <iframe
              className="mapdivs"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3225.3515998512585!2d-79.86486012364465!3d36.06052730904425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88531bb009e2f71b%3A0x624687e6266838e9!2s3411%20W%20Wendover%20Ave%2C%20Greensboro%2C%20NC%2027407!5e0!3m2!1sen!2sus!4v1745007045030!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
export default Locations;
