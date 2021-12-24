function mobileMenu() {
  const menuIcon = document.querySelector('#menu-img');
  const mainNav = document.querySelector('.main-nav');
  const exitIcon = document.querySelector('.exit');
  const navLinks = document.querySelectorAll('.ul-list li');
  const body = document.querySelector('body');

  menuIcon.addEventListener('click', () => {
    mainNav.classList.add('main-nav-active');
    body.classList.add('overflow-hidden');
  });
  exitIcon.addEventListener('click', () => {
    mainNav.classList.remove('main-nav-active');
    body.classList.remove('overflow-hidden');
  });
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('main-nav-active');
      body.classList.remove('overflow-hidden');
    });
  });
}

mobileMenu();

const Speakers = [
  {
    name: 'David Lawson Clark',
    jobName: 'International Public Health and Human Rights Lawyer',
    personImg: 'images/speaker1.jpg',
    details: 'The legal advisor for infant and young child nutrition and expert on the International Code of Marketing of Breast-milk Substitutes at UNICEF.',
  },
  {
    name: 'DANA ASAAD',
    jobName: 'Media Academy Iraq',
    personImg: 'images/speaker2.jpg',
    details: 'Experienced journalist. Currently working as the managing director of Media Academy Iraq and editor in-chief of Awene.com.',
  },
  {
    name: 'Dr Claire Neill',
    jobName: 'Specialty Registrar in Public Health Medicine, Public Health Agency Northern Ireland',
    personImg: 'images/speaker3.jpg',
    details: 'We have a strong interest in infectious disease prevention and have been aware of the impact of breastfeeding on hospitalisation',
  },
  {
    name: 'Professor Mary Renfrew',
    jobName: 'Professor Emeritus, University of Dundee',
    personImg: 'images/speaker4.jpg',
    details: 'V-safe is a smartphone-based tool that uses text messaging give personalized health check-ins after you receive a COVID-19 vaccine.',
  },
  {
    name: 'CAMELIA NISTOR',
    jobName: 'UNITED for Intercultural actions, Romania',
    personImg: 'images/speaker5.jpg',
    details: 'Project that stands for equality, dignity, human rights and diversity. It is a project against hate speech',
  },
  {
    name: 'H.E MOHAMED SAMEH AMR',
    jobName: 'Chairman of the Executive Board of UNESCO, Ambassador and Permanent Delegate of Egypt to UNESCO',
    personImg: 'images/speaker6.jpg',
    details: 'It was elected by the 37th session of the General Conference of UNESCO on 22 November 2013',
  },
];

const cards = document.querySelector('.grid-dis');

function ProjectElments(ele) {
  cards.innerHTML
    += `<div class = "spk">
    <div class="div-img">
    <img class="img-speaker" src="${Speakers[ele].personImg}" alt="speaker6">
    </div>
    <div class="about-it">
     <h3>${Speakers[ele].name}</h3>
     <h6>${Speakers[ele].jobName}</h6>
     <p>${Speakers[ele].details} </p>
     </div>
     </div>`;
}

function createSpeakers() {
  for (let i = 0; i < Speakers.length; i += 1) {
    ProjectElments(i);
  }
}
createSpeakers();