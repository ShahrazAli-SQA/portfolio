import { getSectionAnimation } from '../animations';
import { Button, Wrapper } from '../components';
import { author } from '../utils/portfolio'; // ✅ make sure author is imported
import { contactSection } from '../utils/portfolio';

const Contact = () => {
  const { subtitle, title, paragraphs, link } = contactSection;
  return (
    <Wrapper
      id="contact"
      className="max-w-xl mx-auto text-center !py-16 md:!py-24 mb-20 md:mb-32"
      {...getSectionAnimation}
    >
      <p className="mb-3 font-mono text-sm capitalize text-accent">{subtitle}</p>
      <h2 className="heading-secondary !mb-5">{title}</h2>

      {paragraphs.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}

      {/* ✅ Changed here — direct <a> instead of Button to ensure mailto works */}
      <a
        href={link}
        className="inline-block mt-12 px-6 py-3 text-lg font-medium text-white bg-accent rounded-lg transition hover:bg-accent/80"
      >
        Say Hello
      </a>
    </Wrapper>
  );
};

