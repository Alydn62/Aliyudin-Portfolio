import { contact } from '../../portfolio';
import './Contact.css';

const Contact = () => {
  if (!contact.email) return null;

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>
      <div className='map-container'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3686724091367!2d106.68895767603891!3d-6.346282562091891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e5a6e26dc3cd%3A0xccd6344b8021119d!2sPamulang%20University%20Campus%202%20(UNPAM%20Viktor)!5e0!3m2!1sen!2sid!4v1736003139730!5m2!1sen!2sid"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Pamulang University Campus 2 Location"
        />
      </div>
    </section>
  );
};

export default Contact;
