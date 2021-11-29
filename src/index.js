const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "mocks/img/logo.png",
    "cta-img": "mocks/img/cta.png",
    "accent-img": "mocks/img/accent.png",
  },
};

console.log('project wired!')

//nav links
const links = document.querySelectorAll('nav a');
const linksRealArray = Array.from(links);
const linkTexts = Object.values(siteContent.nav);
links.forEach((link, index) => {
  link.textContent = linkTexts[index];
});

//logo
const logoImg = document.querySelector('#logo-img');
console.log(logoImg);
logoImg.src = siteContent.images['logo-img'];

//CTA


//Main content
//H4
const topContent = document.querySelectorAll('.text-content h4');
const topTitles = Array.from(topContent);

topTitles[0].textContent = siteContent['main-content']['features-h4'];
topTitles[1].textContent = siteContent['main-content']['about-h4'];
topTitles[2].textContent = siteContent['main-content']['services-h4'];
topTitles[3].textContent = siteContent['main-content']['product-h4'];
topTitles[4].textContent = siteContent['main-content']['vision-h4'];

//text
const topParas = document.querySelectorAll('.text-content p');
const topText = Array.from(topParas);

topText[0].textContent = siteContent['main-content']['features-content'];
topText[1].textContent = siteContent['main-content']['about-content'];
topText[2].textContent = siteContent['main-content']['services-content'];
topText[3].textContent = siteContent['main-content']['product-content'];
topText[4].textContent = siteContent['main-content']['vision-content'];

//middle image
const middleImg = document.querySelector('#accent-img');
middleImg.src = siteContent.images['accent-img'];