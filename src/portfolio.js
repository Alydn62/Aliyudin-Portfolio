import loginImage from './components/Img/login-1.jpg'; // Impor gambar
import Caltulator from './components/Img/calculator.png'; // Impor gambar
import AdminPanel from './components/Img/Admin-panel.png'; // Impor gambar
import PortfolioTailwind from './components/Img/portfolio-tailwind.png'; // Impor gambar
import BlogHugo from './components/Img/Blog-Hugo.png'; // Impor gambar
import Portfolio1 from './components/Img/portfolio-1.png'; // Impor gambar
import User from './components/Img/user2-160x160.jpg'; // Impor gambar
import sertifikatHtml from './components/Img/896fe24d-9200-4c4d-9bb1-d26348683633.jpg'; // Impor gambar
import sertifikatCss from './components/Img/89ff1d91-7ca8-49cf-a7f7-e23f0033824f.jpg'; // Impor gambar
import sertifikatJavascript1 from './components/Img/51c35d61-6ffa-46be-8fce-fb07e1704879.jpg'; // Impor gambar
import sertifikatJavascript2 from './components/Img/87ba3f07-58da-445b-a624-420f60338e52.jpg'; // Impor gambar
import Wordpress from './components/Img/{011D5C0B-47FD-458C-84B4-CC84C7FC07BC}.png'; // Impor gambar
import DashboardTahunan from './components/Img/{7D665924-5935-4027-831D-B02D02AF7E37}.png'; // Impor gambar
import Snake from './components/Img/snake.png'; // Impor gambar

const header = {
  title: <img src={User} alt="Aliyudin" style={{ maxWidth: '50px', height: 'auto', borderRadius: '100%'}} />,
};

const about = {
  name: 'Muhamad Aliyudin',
  role: 'Front End Developer.',
  description: 'I craft responsive and visually engaging web applications...',
  social: {
    github: 'https://github.com/Alydn62',
  },
};

const projects = [
  {
    name: 'Form Login(TUGAS)',
    category: 'TUGAS',  // Menambahkan kategori
    description: 'The image shows a minimalist login interface...',
    stack: ['CSS 70.3%', 'HTML 29.7%'],
    sourceCode: 'https://github.com/Alydn62/Login_Pemrograman',
    livePreview: 'https://login-pemrograman.vercel.app/',
    image: loginImage,
  },
  {
    name: 'Caltulator(TUGAS)',
    category: 'TUGAS',  // Menambahkan kategori
    description: 'Fast, easy, and accurate—our calculator...',
    stack: ['JavaScript 42.7%', 'CSS 30.6%', 'HTML 26.7%'],
    sourceCode: 'https://github.com/Alydn62/Calculator',
    livePreview: 'https://alydn62.github.io/Calculator/',
    image: Caltulator,
  },
  {
    name: 'Portfolio Tailwind',
    category: 'NONTUGAS',  // Menambahkan kategori
    description: 'Explore the projects I ve worked on...',
    stack: ['HTML 93.8%', 'CSS 5.1%', 'JavaScript 1.1%'],
    sourceCode: 'https://github.com/alydn20/Portfolio',
    livePreview: 'https://alydn20.github.io/Portfolio/',
    image: PortfolioTailwind,
  },
  {
    name: 'Blogger',
    category: 'NONTUGAS',  // Menambahkan kategori
    description: 'Here, I share articles on a variety of topics...',
    stack: ['CSS 71.3%', 'HTML 27.5%', 'JavaScript 1.2%'],
    sourceCode: 'https://github.com/alydn20/komnas',
    livePreview: 'https://alydn20.github.io/komnas/',
    image: BlogHugo,
  },
  {
    name: 'Portfolio(TUGAS)',
    category: 'TUGAS',  // Menambahkan kategori
    description: 'I am a web developer with expertise in Node.js...',
    stack: ['JavaScript 70.2%', 'CSS 27.3%', 'HTML 2.5%'],
    sourceCode: 'https://github.com/Alydn62/Aliyudin-Portfolio',
    livePreview: 'https://alydn62.github.io/Aliyudin-Portfolio/',
    image: Portfolio1,
  },
  {
    name: 'Snake Game(TUGAS)',
    category: 'TUGAS',  // Menambahkan kategori
    description: 'Challenge yourself to control the snake...',
    stack: ['JavaScript 51.9%', 'CSS 35.4%', 'HTML 12.7%'],
    sourceCode: 'https://github.com/Alydn62/Snake',
    livePreview: 'https://alydn62.github.io/Snake/',
    image: Snake,
  },
  {
    name: 'Chart Dashboard Penjualan(TUGAS)',
    category: 'TUGAS',  // Menambahkan kategori
    description: 'Trendy analysis and sales comparison...',
    stack: ['JavaScript 51.4%', 'CSS 26.1%', 'HTML 22.5%'],
    sourceCode: 'https://github.com/Alydn62/dashboard-tahunan',
    livePreview: 'https://alydn62.github.io/dashboard-tahunan/',
    image: DashboardTahunan,
  },
  {
    name: 'Wordpress(TUGAS)',
    category: 'TUGAS',  // Menambahkan kategori
    description: 'High Quality, Affordable Prices...',
    livePreview: 'https://satu.unpam.tech/',
    image: Wordpress,
  },
  {
    name: 'Admin Panel(TUGAS)',
    category: 'TUGAS',  // Menambahkan kategori
    description: 'Easily manage, monitor, and control all aspects of your platform. Access data, analytics, and full control in one place for maximum efficiency.',
    stack: ['JavaScript 91.4%', 'CSS 5.6%', 'SCSS 1.8%', 'HTML 1.2%'],
    sourceCode: 'https://github.com/Alydn62/Muhamad-Aliyudin_CS05TPLE003',
    livePreview: 'https://alydn62.github.io/Muhamad-Aliyudin_CS05TPLE003',
    image: AdminPanel,
  },
];

const skills = ['HTML', 'CSS', 'Bootstrap', 'Tailwind', 'JavaScript', 'React', 'Node.js', 'Git', 'Responsive Design'];

const contact = {
  email: 'muhamadaliyudin62@gmail.com',
};

const certificates = [
  {
    name: 'Introduction to HTML',
    organization: 'Sololearn',
    date: 'November 2024',
    link: 'https://www.sololearn.com/certificates/CC-9JZKICJJ',
    image: sertifikatHtml
  },
  {
    name: 'Introduction to CSS',
    organization: 'Sololearn',
    date: 'November 2024',
    link: 'https://www.sololearn.com/certificates/CC-A95YZNFA',
    image: sertifikatCss
  },
  {
    name: 'Introduction to JavaScript',
    organization: 'Sololearn',
    date: 'November 2024',
    link: 'https://www.sololearn.com/certificates/CC-JXRFUSND',
    image: sertifikatJavascript1
  },
  {
    name: 'JavaScript Intermediate',
    organization: 'Sololearn',
    date: 'November 2024',
    link: 'https://www.sololearn.com/certificates/CC-0YWVL48K',
    image: sertifikatJavascript2
  },
];

export { header, about, projects, skills, contact, certificates };
