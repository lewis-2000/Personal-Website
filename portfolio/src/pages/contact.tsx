import FadeInRepeat from "../components/animations/FadeInRepeat";

import Ops from "../components/ops/ops";
import Container from "../components/contact/container";
import Footer from "../components/footer/contactfooter";

function contact() {
  return (
    <>
      <FadeInRepeat>
        <div className="contact-content">
          <Ops />
          <Container />
          <Footer />
        </div>
      </FadeInRepeat>
    </>
  );
}

export default contact;
