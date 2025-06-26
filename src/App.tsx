import { useEffect, useRef, useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faBootstrap, faCss3, faGit, faGithub, faHtml5, faJs, faLinkedin, faLinux, faMicrosoft, faPhp, faReact, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { sendEmail } from './SendMail';

function Topbar() {
  return (
    <nav className='topbar navbar navbar-expand-lg'>
      <div className="container-fluid">
        <a href="." className="navbar-brand">
          <img src="/logo_transparent.png" alt="Logo" height={24} className='d-inline-block align-text-top' />
          <span className='name'>Krzysztof Smaga</span>
        </a>
        <div className="d-flex navbar-nav">
          <a href="#home" className="nav-link">home();</a>
          <a href="#about" className="nav-link">about();</a>
          <a href="#projects" className="nav-link">projects();</a>
          <a href="#contact" className="nav-link">contact();</a>
        </div>
      </div>
    </nav>
  );
}
function Header() {
  const [text, setText] = useState("");
  const [sign, setSign] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const letters = "Heello, World!";
  const words = ["Web", "PHP", "C#", ".NET"];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if(i < letters.length - 1){
        setText((prev) => prev + letters[i]);
        i++;
      } else {
        clearInterval(interval);
        setIsVisible(true);
      }
    }, 100);

    const signInterval = setInterval(() => {
      setSign((prev) => prev === "" ? "_" : "");
    }
    , 500);

    return () => {
      clearInterval(interval);
      clearInterval(signInterval);
    }
  }, []);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 700);
    }, 2000);

    return () => clearInterval(wordInterval);
  }, [words.length]);

  return (
    <header className='container'>
      <div className="col">
        <div className="text container-fluid">
          <h1 className="display-2 text-start">$ {text}{sign}</h1>
          <p className={`animated-paragraph ${isVisible ? 'visible' : ''}`}>Nazywam się Krzysztof Smaga i jestem <b><span className={`carousel-word ${isAnimating ? 'animating' : ''}`}>{words[currentWord]}</span> Developer</b></p>
        </div>
      </div>
      <div className="col">
        <img src="/logo_transparent.png" alt="Krzysztof Smaga" className={`img-fluid rounded-circle animated-paragraph ${isVisible ? 'visible' : ''}`} width={250} />
      </div>
    </header>
  )
}

function About() {
const calculateAge = () => {
  const today = new Date();
  const birth = new Date("2003-07-14");
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}
  const gh = <FontAwesomeIcon icon={faGithub} />
  const li = <FontAwesomeIcon icon={faLinkedin} />
  const yt = <FontAwesomeIcon icon={faYoutube} />
  const mail = <FontAwesomeIcon icon={faEnvelope} />
  const php = <FontAwesomeIcon icon={faPhp} />
  const react = <FontAwesomeIcon icon={faReact} />
  const bs = <FontAwesomeIcon icon={faBootstrap} />
  const sql = <FontAwesomeIcon icon={faDatabase} />
  const html = <FontAwesomeIcon icon={faHtml5} />
  const js = <FontAwesomeIcon icon={faJs} />
  const css = <FontAwesomeIcon icon={faCss3} />
  const code = <FontAwesomeIcon icon={faCode} />
  const ms = <FontAwesomeIcon icon={faMicrosoft} />
  const git = <FontAwesomeIcon icon={faGit} />
  const linux = <FontAwesomeIcon icon={faLinux} />
  const macos = <FontAwesomeIcon icon={faApple} />

  return (
    <section className='container'>
      <div className='d-block w-100'>
        <div className="row">
          <div className="col">
            <h4 className='display-4'>Opis</h4>
            <p>Jestem rozwijającym się programistą, który jest otwarty na nowe wyzwania oraz współprace z grupą osób, które chcą zmienić świat swoim produktem. W tygodniu nauczyciel przedmiotów zawodowych oraz administrator IT, w weekendy student. Resztę czasu poświęcam na gry, aktywności z bliskimi czy rozwój osobisty w postaci projektów czy kursów.</p>
            <div className="row">
              <div className="col-md-4">
                <table className='mytable'>
                  <tr>
                    <th>Miasto: </th>
                    <td>Łódź, łódzkie, Polska</td>
                  </tr>
                  <tr>
                    <th>Wiek: </th>
                    <td>{calculateAge()}</td>
                  </tr>
                  <tr>
                    <th>Języki: </th>
                    <td>polski - ojczysty<br/>angielski - zaawansowany</td>
                  </tr>
                  <tr>
                    <th>Hobby: </th>
                    <td>programowanie,<br />gry,<br/>filmy i seriale,<br />muzyka,<br />samochody,<br /></td>
                  </tr>
                  <tr>
                    <th>Media społecznościowe:</th>
                    <td className='links'><a href="mailto:krzysztof@smaga.me">{mail} Wyślij wiadomość</a><br /><a href="https://linkedin.com/in/krzysieksiemv" target='_blank'>{li} LinkedIn</a><br /><a href="https://github.com/KrzysiekSiemv" target='_blank'>{gh} GitHub</a><br /><a href="https://www.youtube.com/@krzysieksiemv" target='_blank'>{yt} YouTube</a></td>
                  </tr>
                  <tr>
                    <th>Znajomość:</th>
                    <td>{php} PHP, {sql} MySQL/MS SQL <br /> {html} HTML, {css} CSS, {js} JS<br />{bs} Bootstrap <br />{react} React.js <br />{code} C#, TypeScript <br />{ms} MS Office + VBA <br />{git} Git <br />{linux} Linux, {macos} macOS</td>
                  </tr>
                </table>
              </div>
              <div className="col-md-8">
                <h5>Edukacja</h5>
                <dl>
                  <dt>Technikum TEB Edukacja w Częstochowie</dt>
                  <dd>
                    <i>Rocznik 2019/2023 - Technik informatyk</i><br />
                    - absolwent technikum informatycznego z wysokim wynikiem egzaminacyjnym, w ciągu ostatniego roku uczęszczania do szkoły udzielałem się również w roli asystenta lokalnego administratora sieci komputerowej pomagając w rozwoju infrastruktury komputerowej
                  </dd>
                  <dt>Akademia Handlowa Nauk Stosowanych w Radomiu</dt>
                  <dd>
                    <i>Rocznik 2023 - obecnie / Informatyka</i><br />
                    - obecny student na kierunku studiów Informatyka dążący do uzyskania tytułu Inżyniera z myślą o kontynuacji studiowania
                  </dd>
                </dl>
                <h5>Doświadczenie</h5>
                <dl>
                  <dt>Nauczyciel przedmiotów zawodowych przygotowujący do kwalifikacji INF.03/INF.04</dt>
                  <dd>
                    <i>Technikum TEB Edukacja w Łodzi / 2023 - obecnie</i><br />
                    - prowadzę zajęcia w technikum dla klas informatycznych oraz programistycznych z przedmiotów zajmującymi się tworzeniem stron internetowych HTML, CSS, JS oraz backendem PHP, MySQL i tworzeniem aplikacji mobilnych, desktopowych w .NET MAUI, C# oraz tworzenie aplikacji webowych w React
                  </dd>
                  <dt>Lokalny Administrator Sieci Informatycznej (IT)</dt>
                  <dd>
                    <i>TEB Edukacja w Łodzi / 2023 - obecnie</i><br />
                    - w roli administratora zajmuje się utrzymaniem sieci szkolnej oraz projekcją infrastruktury sieci komputerowej wraz z rozwojem sieci o dodatkowe usprawnienia oraz zabezpieczenia przed różnymi niebezpieczeństwami dla sieci dydaktycznej oraz administracyjnej.
                  </dd>
                  <dt>Freelance - Aplikacja internetowa dla stacji radiowej</dt>
                  <dd>
                    <i>Radio GaMa / 2023 - 2024</i><br />
                    - w pełni rozbudowana aplikacja aplikacja internetowa z interfejsem dla użytkowników mobilnych dla internetowej stacji radiowej, która posiada w pełni działający panel administracyjny z którego można dodawać wiadomości na stronę, audycję, podcasty oraz odczytywać wiadomości, propozycje utworów oraz pozdrowienia od słuchaczy.
                  </dd>
                  <dt>System egzaminacyjny z teorii dla szkół</dt>
                  <dd>
                    <i>2022 - obecnie</i><br />
                    - system egzaminacyjny dla uczniów lub studentów, która jest zbudowana na wzór autonomicznego systemu egzaminacyjnego, dzięki czemu przyszli zdający są bardziej przyswojeni z systemem egzaminacyjnym w trakcie oficjalnego egzaminu. Projekt jest dalej rozwijany i wykorzystywany w szkołach z planem większego rozwoju.
                  </dd>
                  <dt>Aplikacja do zarządzania sklepem oraz zamówień</dt>
                  <dd>
                    <i>Projekt prywatny / 2022 - 2023</i><br />
                    - aplikacja desktopowa napisana w C# na Windows Forms, dzięki której można zarządzać produktami, wysyłkami, zamówieniami. Wzorowane na InSERT, wymagający połączenia z MySQL. Projekt wstrzymany.
                  </dd>
                  <dt>Freelance - Aplikacja do generowania faktur / dokumentu ze zbiorem wycinek</dt>
                  <dd>
                    <i>Met Elements sp. z o.o. Rędziny / 2022</i><br />
                    - aplikacja dla firmy zajmującej się obróbką metali, w której to po przesłaniu do aplikacji danego modelu automatycznie uzupełnia dane, które są potem wykorzystywane przy finalizacji zamówienia lub kontroli wycinek
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="container">
      <div className='w-100'>
        <h4 className="display-4">Projekty</h4>
        <p>Tutaj znajduje się lista wyróżnionych projektów. Po więcej projektów zapraszam na mojego <a href="https://github.com/KrzysiekSiemv">GitHub'a</a></p>
        <img src="https://ghchart.rshah.org/KrzysiekSiemv" alt="GitHub Chart of Work" className='d-block m-auto' />
      </div>
    </section>
  );
}

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try { 
      await sendEmail({ name, email, subject, message });
      setEmail("");
      setName("");
      setSubject("");
      setMessage("");      
    } catch(error){
      console.error(error);
    }
  };

  return (
    <section className="container">
      <div className="w-100">
        <h4 className='display-4'>Kontakt</h4>
        <div className="row">
          <div className="col">
            <p>Jeżeli zainteresowałem Cię moją osobą, to zachęcam do kontaktu:</p>
            <ul>
              <li>za pomocą formularza kontaktowego (w budowie)</li>
              <li>wysyłając wiadomość na <a href="mailto:krzysztof@smaga.me">skrzynkę pocztową</a></li>
              <li>pisząc w wiadomości prywatnej na <a href="https://linkedin.com/in/krzysieksiemv" target='_blank'>LinkedIn</a></li>
            </ul>
            <h4>FAQ</h4>
            <dl>
              <dt>Jaka forma zatrudnienia głównie interesuje?</dt>
              <dd>Umowa zlecenie lub B2B</dd>
              <dt>Jaka forma pracy?</dt>
              <dd>- Praca stacjonarna na terenie miasta Łódź, <br />- Praca hybrydowa w Łódź/Warszawa/Częstochowa, <br />- Praca zdalna</dd>
              <dt>Jaki jest czas oczekiwania na odpowiedź ode mnie?</dt>
              <dd>Maksymalnie 24 godziny</dd>
            </dl>
          </div>
          <div className="col">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nadawca</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Adres e-mail</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required disabled
                />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Temat</label>
                <input
                  type="text"
                  id="subject"
                  className="form-control"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required disabled
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Treść wiadomości</label>
                <textarea
                  id="message"
                  className="form-control"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required disabled
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary" disabled>Wyślij</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function App() {
  const sections = useRef<HTMLDivElement[]>([]);
  const [currentSection, setCurrentSection] = useState(0);

  const handleScroll = (e: React.WheelEvent) => {
    const currentElement = sections.current[currentSection];
    if(!currentElement) return;

    const {scrollTop, scrollHeight, clientHeight} = currentElement;

    if(e.deltaY > 0) {
      if(scrollTop + clientHeight >= scrollHeight && currentSection < sections.current.length - 1)
        setCurrentSection((prev) => prev + 1);
    } else{
      if(scrollTop === 0 && currentSection > 0) 
        setCurrentSection((prev) => prev - 1);
    }
  }
  useEffect(() => {
    sections.current[currentSection].scrollIntoView({ behavior: 'smooth' });
  }, [currentSection]);

  return (
    <div onWheel={handleScroll}>
      <Topbar />
      <div ref={(el) => { if (el) sections.current[0] = el; }} id='home'>
        <Header />
      </div>
      <div ref={(el) => { if (el) sections.current[1] = el; }} id='about'>
        <About />
      </div>
      <div ref={(el) => { if (el) sections.current[2] = el; }} id='projects'>
        <Projects />
      </div>
      <div ref={(el) => { if (el) sections.current[3] = el; }} id='contact'>
        <Contact />
      </div>
    </div>
  )
}

export default App
