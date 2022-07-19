import './style.css';
import sum from './functions.js';
import sayYes from './anotherFunctions.js';
import chefs from './chefs.jpg';
import koreanFood1 from './korean-food-1.jpg';
import bibimbap from './bibimbap.jpg';
import galbi from './galbi.jpg';
import tang from './tang.jpg';
import kimchi from './kimch.jpg';
import bg3 from './bg3.jpg';

// import Icon from './icon.png';
function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.textContent = "Hello, my name is Sol";
    element.className = 'hello';

      // Add the image to our existing div.
    // const myIcon = new Image();
    // myIcon.src = Icon;

    // element.appendChild(myIcon);
    return element;
  }

  function setMultipleAttribute(dom, obj) {
    for (let key in obj) {
      dom.setAttribute(key, obj[key]);
    }
  }

function makeMenuList() {
  const menuUl = document.createElement('ul');
  const entry = document.createElement('li');
  const main = document.createElement('li');
  const desserts = document.createElement('li');
  const entryA1 = document.createElement('a');
  const mainA2 = document.createElement('a');
  const dessertsA3 = document.createElement('a');

  entryA1.textContent = "Entry";
  mainA2.textContent = "Main";
  dessertsA3.textContent = "Desserts";
  setMultipleAttribute(entryA1, {'href': '#', 'id': 'entry-btn'});
  setMultipleAttribute(mainA2, {'href': '#', 'id': 'main-btn'});
  setMultipleAttribute(dessertsA3, {'href': '#', 'id': 'desserts-btn'});

  entry.appendChild(entryA1);
  main.appendChild(mainA2);
  desserts.appendChild(dessertsA3);

  menuUl.append(entry, main, desserts);
  menuUl.setAttribute('id', 'menu-ul');
  menuUl.className = 'menu-ul';

  return menuUl;
}

function makeSidebar() {
  const sideBar = document.createElement('div');
  const ul = document.createElement('ul');
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');
  const a1 = document.createElement('a');
  const a2 = document.createElement('a');
  const a3 = document.createElement('a');
  setMultipleAttribute(a1, {'href': '#', 'id': 'home-btn'});
  setMultipleAttribute(a2, {'href': '#', 'id': 'menu-btn'});
  setMultipleAttribute(a3, {'href': '#', 'id': 'contact-btn'});

  //sidebar
  sideBar.className='side-bar';
  a1.textContent = "Home";
  a2.textContent = "Menu";
  a3.textContent = "Contact";

  li1.appendChild(a1);
  li2.appendChild(a2);
  li3.appendChild(a3);

  ul.append(li1, li2, li3);
  sideBar.appendChild(ul);

  li2.addEventListener('click', e => {
    const mn = document.getElementById('menu-ul');
    if (mn === null) {
      li2.appendChild(makeMenuList());
    }
    else if (e.target.id === 'menu-btn') {
      li2.removeChild(mn);
    }
  })

  return sideBar;
}

function makeFooter() {
  const footer = document.createElement('div');
  const p = document.createElement('div');
  p.textContent = "github@moonsol124 image source: https://www.pexels.com/";
  footer.className = 'footer';
  footer.appendChild(p);
  return footer;
}

function makeHome() {
  //images
  const chefsImg = new Image();
  chefsImg.src = chefs;

  const content = document.createElement('div');
  const mask = document.createElement('div');
  const textBox = document.createElement('div');
  const descriptionH2 = document.createElement('h2');
  const descriptionH3 = document.createElement('h3');
  const descriptionH5 = document.createElement('h5');
  const titleH1 = document.createElement('h1');

  // content1
  content.setAttribute('style', `background-image: url(${chefsImg.src});`);
  content.className = 'content to-delete';
  
  // mask
  mask.classList = 'mask';

  //textbox
  textBox.className = 'text-box';
  descriptionH2.textContent = "Ole, oh my god!";
  descriptionH3.textContent = "Korean cuisine is largely based on vegetables";
  descriptionH5.textContent = "Ingredients and dishes vary by province";
  titleH1.textContent = "Welcome to my restaurant.";
  textBox.append(descriptionH2, descriptionH3, descriptionH5, titleH1);
  content.append(mask, textBox);

  return content;
}

function makeCard(imageSrc, name, description, price) {
  const card = document.createElement('div');
  const img = document.createElement('div');
  const btnGroup = document.createElement('div');
  const btnSub1 = document.createElement('div');
  const btnSub2 = document.createElement('div');

  //card img
  img.setAttribute('style', `background-image: url(${imageSrc})`);
  img.className = 'card-img';
  //img description
  const dsc = document.createElement('p');
  dsc.textContent = description;
  //btn group
  const nm = document.createElement('button');
  nm.textContent = name;
  btnSub1.appendChild(nm);

  const prc = document.createElement('button');
  prc.textContent = '$'+price;
  const ingredients = document.createElement('button');
  ingredients.textContent = "See ingredients";
  btnSub2.append(prc, ingredients);
  btnGroup.append(btnSub1, btnSub2);
  btnGroup.className = "btn-group";
  card.append(img, dsc, btnGroup);

  card.className = 'card-body';
  return card;
}

function makeMenu() {
  const content = document.createElement('div');
  const card = document.createElement('card');
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');

  //backgroud-img
  const bgImg = new Image();
  bgImg.src = koreanFood1;
  content.setAttribute('style', `background-image: url(${bgImg.src})`);
  content.className = 'content menu to-delete';
  
  //card
  card.className = 'card';
  const galbiImg = new Image();
  galbiImg.src = galbi;
  const tangImg = new Image();
  tangImg.src = tang;
  const kimchiImg = new Image();
  kimchiImg.src = kimchi;

  const card1 = makeCard(galbiImg.src, 'Galbi', "Korean cuisine has evolved through centuries of social and political change.", '10');
  const card2 = makeCard(tangImg.src, 'Yukgejang', "In the Jeulmun pottery period, hunter-gatherer societies engaged in fishing and hunting.", '10');
  const card3 = makeCard(kimchiImg.src, 'Kimchi', 'The Three Kingdoms period (57 BCE – 668 CE) was one of rapid cultural evolution.', '5');
  const card4 = makeCard('#', 'name', 'description', 'price');
  const card5 = makeCard('#', 'name', 'description', 'price');
  const card6 = makeCard('#', 'name', 'description', 'price');

  card.append(card1, card2, card3, card4, card5, card6);

  content.appendChild(card);
  return content;
}

function formDiv(type, name, id, labelText) {
  this.type = type;
  this.name = name;
  this.id = id;
  this.labelText = labelText;
  this.createDiv = function() {
    this.div = document.createElement('div');
    this.div.className = "form-div";
    if (this.type === "textarea") {
      this.label = document.createElement('label');
      this.textarea = document.createElement('textarea');
      this.label.setAttribute('for', 'textarea');
      this.textarea.setAttribute('id', 'textarea');
      this.textarea.setAttribute('rows', 8);
      this.label.textContent = labelText+": ";
      this.div.append(this.label, this.textarea);
    }
    else {
      this.label = document.createElement('label');
      this.input = document.createElement('input');
      this.label.setAttribute('for', this.id);
      this.label.textContent = labelText+": ";
      setMultipleAttribute(this.input, {'type': this.type, 'name': this.name, 'id': this.id});
      this.div.append(this.label, this.input);
    }
    return this.div;
  }
}

function makeContact() {
  const content = document.createElement('div');
  const form = document.createElement('form');
  const formContainer = document.createElement('div');
  const mask = document.createElement('div');
  mask.className = 'mask-left';
  const contentBg = new Image();
  contentBg.src = bg3;
  content.setAttribute('style', `background-image: url(${contentBg.src})`);
  content.className = "content contact to-delete";

  const firstName = new formDiv('text', 'fName', 'fName', 'First Name');
  const lastName = new formDiv('text', 'lName', 'lName', 'Last Name');
  const email = new formDiv('email', 'email', 'email', 'Email');
  const tel = new formDiv('tel', 'tel', 'tel', 'Phone Number');
  const textArea = new formDiv('textarea', 'textarea', 'textarea', 'Comment');
  const btn = document.createElement('button');
  btn.textContent = "Send";
  btn.setAttribute('type', 'button');
  const btnDiv = document.createElement('div');
  btnDiv.className = 'btn-div';
  btnDiv.appendChild(btn);

  formContainer.append(firstName.createDiv(), lastName.createDiv(), email.createDiv(), tel.createDiv(), textArea.createDiv(), btnDiv);
  form.appendChild(formContainer);
  content.append(mask, form);
  
  return content;
}

function switchMenu(content) {
  const parentsNode = document.querySelector('.template');
  const child = document.querySelector('.to-delete');
  parentsNode.removeChild(child);
  template.appendChild(content); 
}

const template = document.createElement('div');
template.classList = 'template';
template.append(makeSidebar(), makeFooter(), makeHome());
document.body.appendChild(template);

template.addEventListener('click', e => {
  if (e.target.id === 'home-btn') {
    switchMenu(makeHome())
  }
  else if (e.target.id === 'menu-btn') {
    switchMenu(makeMenu())
  }
  else if (e.target.id === 'contact-btn') {
    switchMenu(makeContact())
  }
})
