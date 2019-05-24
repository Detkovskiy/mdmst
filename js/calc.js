const tabContent = document.querySelectorAll(`.tabcontent`);
const tabLinks = document.querySelectorAll(`.tablinks`);

const tab_kristal = document.querySelectorAll(`.tab_kristal`);
const kristal = document.querySelectorAll(`.kristal`);
const tab_fraimelight = document.querySelectorAll(`.tab_fraimelight`);
const fraimelight = document.querySelectorAll(`.fraimelight`);
const tab_magnet = document.querySelectorAll(`.tab_magnet`);
const magnet = document.querySelectorAll(`.magnet`);

const openTab = (triggers, content, cssClass) => {
  for (let i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener(`click`, () => {
      for (let i = 0; i < content.length; i++) {
        content[i].style.display = "none";
        triggers[i].classList.remove(cssClass);
      }
      content[i].style.display = "flex";
      triggers[i].classList.add(cssClass);
    });
  }
};

openTab(tabLinks, tabContent, `type__active`);
openTab(tab_kristal, kristal, `img__active`);
openTab(tab_fraimelight, fraimelight, `img__active`);
openTab(tab_magnet, magnet, `img__active`);
document.getElementById("defaultOpen").click();
document.getElementById("default_kristal").click();
document.getElementById("defaultOpenFraimelight").click();
document.getElementById("defaultOpenMagnet").click();

const clickForm = (labels, typeName, fieldName, fieldSize, fieldPrice, arrData) => {
  for (let i = 0; i < labels.length; i++) {
    labels[i].addEventListener(`click`, () => {
      typeName.innerHTML = arrData[i][`type`];
      fieldName.innerHTML = arrData[i][`name`];
      fieldSize.innerHTML = arrData[i][`size`];
      fieldPrice.innerHTML = arrData[i][`price`];
    })
  }
};

const radioBtn = document.querySelectorAll(`.radio-btn--kristal`);
const kristalTypeName = document.querySelector(`.kristal__name-n`);
const kristalName = document.querySelector(`.k_name-n`);
const kristalSize = document.querySelector(`.k_size-n`);
const kristalPrice = document.querySelector(`.kristal__price-num-n`);
const kristalNasten = [
  {
    type: `Кристалайт настенный: `,
    name: ` A4+`,
    size: `300 x 387 мм`,
    price: `3600 р.`
  },
  {
    type: `Кристалайт настенный: `,
    name: ` A3+`,
    size: `397 x 520 мм`,
    price: `5250 р.`
  },
  {
    type: `Кристалайт настенный: `,
    name: ` A2+`,
    size: `520 x 694 мм`,
    price: `6600 р.`
  },
  {
    type: `Кристалайт настенный: `,
    name: ` A1+`,
    size: `694 x 941 мм`,
    price: `10600 р.`
  },
  {
    type: `Кристалайт настенный: `,
    name: ` A0+`,
    size: `941 x 1289 мм`,
    price: `21000 р.`
  },
  {
    type: `Кристалайт настенный: `,
    name: ` AA`,
    size: `990 x 1500 мм`,
    price: `32300 р.`
  },
  {
    type: `Кристалайт настенный: `,
    name: ` 2AA`,
    size: `1200 x 1800 мм`,
    price: `38800 р.`
  },
  {
    type: `Кристалайт настенный: `,
    name: ``,
    size: `индивидуальный размер`,
    price: `уточняйте`
  }
];

const kristalPod = document.querySelectorAll(`.radio-btn--k_pod`);
const kristalTypeNamePod = document.querySelector(`.kristal__name--pod`);
const kristalNameP = document.querySelector(`.k_name--p`);
const kristalSizeP = document.querySelector(`.k_size--p`);
const kristalPriceP = document.querySelector(`.kristal__price-num--p`);
const kristalPodves = [
  {
    type: `Кристалайт подвесной: `,
    name: ` A4+`,
    size: `300 x 387 мм`,
    price: `4000 р.`
  },
  {
    type: `Кристалайт подвесной: `,
    name: ` A3+`,
    size: `397 x 520 мм`,
    price: `6700 р.`
  },
  {
    type: `Кристалайт подвесной: `,
    name: ` A2+`,
    size: `520 x 694 мм`,
    price: `8500 р.`
  },
  {
    type: `Кристалайт подвесной: `,
    name: ` A1+`,
    size: `694 x 941 мм`,
    price: `12200 р.`
  },
  {
    type: `Кристалайт подвесной: `,
    name: ` A0+`,
    size: `941 x 1289 мм`,
    price: `24000 р.`
  },
  {
    type: `Кристалайт подвесной: `,
    name: ` AA`,
    size: `1000 x 1500 мм`,
    price: `32400 р.`
  },
  {
    type: `Кристалайт подвесной: `,
    name: ` 2AA`,
    size: `1200 x 1800 мм`,
    price: `43800 р.`
  },
  {
    type: `Кристалайт подвесной: `,
    name: ``,
    size: `индивидуальный размер`,
    price: `уточняйте`
  }
];

const kristalD = document.querySelectorAll(`.radio-btn--kristal-d`);
const kristalTypeNameD = document.querySelector(`.kristal__name--d`);
const kristalNameD = document.querySelector(`.k_name--d`);
const kristalSizeD = document.querySelector(`.k_size--d`);
const kristalPriceD = document.querySelector(`.kristal__price-num--d`);
const kristalDprice = [
  {
    type: `Кристалайт двусторонний: `,
    name: ` A4+`,
    size: `300 x 387 мм`,
    price: `6600 р.`
  },
  {
    type: `Кристалайт двусторонний: `,
    name: ` A3+`,
    size: `397 x 520 мм`,
    price: `8000 р.`
  },
  {
    type: `Кристалайт двусторонний: `,
    name: ` A2+`,
    size: `520 x 694 мм`,
    price: `10100 р.`
  },
  {
    type: `Кристалайт двусторонний: `,
    name: ` A1+`,
    size: `694 x 941 мм`,
    price: `16300 р.`
  },
  {
    type: `Кристалайт двусторонний: `,
    name: ` A0+`,
    size: `941 x 1289 мм`,
    price: `30000 р.`
  },
  {
    type: `Кристалайт двусторонний: `,
    name: ` AA`,
    size: `1000 x 1500 мм`,
    price: `45000 р.`
  },
  {
    type: `Кристалайт двусторонний: `,
    name: ` 2AA`,
    size: `1200 x 1800 мм`,
    price: `47000 р.`
  },
  {
    type: `Кристалайт двусторонний: `,
    name: ``,
    size: `индивидуальный размер`,
    price: `уточняйте`
  }
];

const fraimelightBtn = document.querySelectorAll(`.radio-btn--fraimelight`);
const fraimelightTypeName = document.querySelector(`.kristal__name-f`);
const fraimelightName = document.querySelector(`.k_name-f`);
const fraimelightSize = document.querySelector(`.k_size-f`);
const fraimelightPrice = document.querySelector(`.kristal__price-num-f`);
const fraimelightprice = [
  {
    type: `Фреймлайт настенный: `,
    name: ` A4`,
    size: `250 x 337 мм`,
    price: `4100 р.`
  },
  {
    type: `Фреймлайт настенный: `,
    name: ` A3+`,
    size: `347 x 470 мм`,
    price: `4500 р.`
  },
  {
    type: `Фреймлайт настенный: `,
    name: ` A2+`,
    size: `470 x 644 мм`,
    price: `5800 р.`
  },
  {
    type: `Фреймлайт настенный: `,
    name: ` A1+`,
    size: `644 x 891 мм`,
    price: `9000 р.`
  },
  {
    type: `Фреймлайт настенный: `,
    name: ` A0+`,
    size: `891 x 1239 мм`,
    price: `18000 р.`
  },
  {
    type: `Фреймлайт настенный: `,
    name: ` AA`,
    size: `1000 x 1500 мм`,
    price: `24500 р.`
  },
  {
    type: `Фреймлайт настенный: `,
    name: ` 2AA`,
    size: `1200 x 1800 мм`,
    price: `37000 р.`
  },
  {
    type: `Фреймлайт настенный: `,
    name: ``,
    size: `индивидуальный размер`,
    price: `уточняйте`
  }
];

const fraimelightBtnP = document.querySelectorAll(`.radio-btn--fraimelight-p`);
const fraimelightTypeNameP = document.querySelector(`.kristal__name-p`);
const fraimelightNameP = document.querySelector(`.k_name-p`);
const fraimelightSizeP = document.querySelector(`.k_size-p`);
const fraimelightPriceP = document.querySelector(`.kristal__price-num-p`);
const fraimelightpriceP = [
  {
    type: `Фреймлайт подвесной: `,
    name: ` A4`,
    size: `250 x 337 мм`,
    price: `4100 р.`
  },
  {
    type: `Фреймлайт подвесной: `,
    name: ` A3+`,
    size: `347 x 470 мм`,
    price: `4500 р.`
  },
  {
    type: `Фреймлайт подвесной: `,
    name: ` A2+`,
    size: `470 x 644 мм`,
    price: `7500 р.`
  },
  {
    type: `Фреймлайт подвесной: `,
    name: ` A1+`,
    size: `644 x 891 мм`,
    price: `9900 р.`
  },
  {
    type: `Фреймлайт подвесной: `,
    name: ` A0+`,
    size: `891 x 1239 мм`,
    price: `21000 р.`
  },
  {
    type: `Фреймлайт подвесной: `,
    name: ` AA`,
    size: `1000 x 1500 мм`,
    price: `24100 р.`
  },
  {
    type: `Фреймлайт подвесной: `,
    name: ` 2AA`,
    size: `1200 x 1800 мм`,
    price: `32100 р.`
  },
  {
    type: `Фреймлайт подвесной: `,
    name: ``,
    size: `индивидуальный размер`,
    price: `уточняйте`
  }
];

const fraimelightBtnD = document.querySelectorAll(`.radio-btn--fraimelight-d`);
const fraimelightTypeNameD = document.querySelector(`.kristal__name-d`);
const fraimelightNameD = document.querySelector(`.k_name-d`);
const fraimelightSizeD = document.querySelector(`.k_size-d`);
const fraimelightPriceD = document.querySelector(`.kristal__price-num-d`);
const fraimelightpriceD = [
  {
    type: `Фреймлайт двусторонний: `,
    name: ` A4`,
    size: `250 x 337 мм`,
    price: `5100 р.`
  },
  {
    type: `Фреймлайт двусторонний: `,
    name: ` A3+`,
    size: `347 x 470 мм`,
    price: `6500 р.`
  },
  {
    type: `Фреймлайт двусторонний: `,
    name: ` A2+`,
    size: `470 x 644 мм`,
    price: `9000 р.`
  },
  {
    type: `Фреймлайт двусторонний: `,
    name: ` A1+`,
    size: `644 x 891 мм`,
    price: `12800 р.`
  },
  {
    type: `Фреймлайт двусторонний: `,
    name: ` A0+`,
    size: `891 x 1239 мм`,
    price: `26000 р.`
  },
  {
    type: `Фреймлайт двусторонний: `,
    name: ` AA`,
    size: `1000 x 1500 мм`,
    price: `38600 р.`
  },
  {
    type: `Фреймлайт двусторонний: `,
    name: ` 2AA`,
    size: `1200 x 1800 мм`,
    price: `41000 р.`
  },
  {
    type: `Фреймлайт двусторонний: `,
    name: ``,
    size: `индивидуальный размер`,
    price: `уточняйте`
  }
];

const magnetBtn = document.querySelectorAll(`.radio-btn--magnet`);
const magnetTypeName = document.querySelector(`.kristal__name-m`);
const magnetName = document.querySelector(`.k_name-m`);
const magnetSize = document.querySelector(`.k_size-m`);
const magnetPrice = document.querySelector(`.kristal__price-num-m`);
const magnetprice = [
  {
    type: `Магнетик настенный: `,
    name: ` A4`,
    size: `250 x 337 мм`,
    price: `4100 р.`
  },
  {
    type: `Магнетик настенный: `,
    name: ` A3+`,
    size: `347 x 470 мм`,
    price: `4500 р.`
  },
  {
    type: `Магнетик настенный: `,
    name: ` A2+`,
    size: `470 x 644 мм`,
    price: `5800 р.`
  },
  {
    type: `Магнетик настенный: `,
    name: ` A1+`,
    size: `644 x 891 мм`,
    price: `9000 р.`
  },
  {
    type: `Магнетик настенный: `,
    name: ` A0+`,
    size: `891 x 1239 мм`,
    price: `18000 р.`
  },
  {
    type: `Магнетик настенный: `,
    name: ` AA`,
    size: `1000 x 1500 мм`,
    price: `24500 р.`
  },
  {
    type: `Магнетик настенный: `,
    name: ` 2AA`,
    size: `1200 x 1800 мм`,
    price: `37000 р.`
  },
  {
    type: `Магнетик настенный: `,
    name: ``,
    size: `индивидуальный размер`,
    price: `уточняйте`
  }
];

const magnetBtnP = document.querySelectorAll(`.radio-btn--magnet-p`);
const magnetTypeNameP = document.querySelector(`.kristal__name-mp`);
const magnetNameP = document.querySelector(`.k_name-mp`);
const magnetSizeP = document.querySelector(`.k_size-mp`);
const magnetPriceP = document.querySelector(`.kristal__price-num-mp`);
const magnetpriceP = [
  {
    type: `Фреймлайт подвесной: `,
    name: ` A4`,
    size: `250 x 337 мм`,
    price: `4100 р.`
  },
  {
    type: `Фреймлайт подвесной: `,
    name: ` A3+`,
    size: `347 x 470 мм`,
    price: `4500 р.`
  },
  {
    type: `Фреймлайт подвесной: `,
    name: ` A2+`,
    size: `470 x 644 мм`,
    price: `7500 р.`
  },
  {
    type: `Фреймлайт подвесной: `,
    name: ` A1+`,
    size: `644 x 891 мм`,
    price: `9900 р.`
  },
  {
    type: `Фреймлайт подвесной: `,
    name: ` A0+`,
    size: `891 x 1239 мм`,
    price: `21000 р.`
  },
  {
    type: `Фреймлайт подвесной: `,
    name: ` AA`,
    size: `1000 x 1500 мм`,
    price: `24100 р.`
  },
  {
    type: `Фреймлайт подвесной: `,
    name: ` 2AA`,
    size: `1200 x 1800 мм`,
    price: `32100 р.`
  },
  {
    type: `Фреймлайт подвесной: `,
    name: ``,
    size: `индивидуальный размер`,
    price: `уточняйте`
  }
];

const magnetBtnD = document.querySelectorAll(`.radio-btn--magnet-d`);
const magnetTypeNameD = document.querySelector(`.kristal__name-md`);
const magnetNameD = document.querySelector(`.k_name-md`);
const magnetSizeD = document.querySelector(`.k_size-md`);
const magnetPriceD = document.querySelector(`.kristal__price-num-md`);
const magnetpriceD = [
  {
    type: `Магнетик двусторонний: `,
    name: ` A4`,
    size: `250 x 337 мм`,
    price: `5100 р.`
  },
  {
    type: `Магнетик двусторонний: `,
    name: ` A3+`,
    size: `347 x 470 мм`,
    price: `6500 р.`
  },
  {
    type: `Магнетик двусторонний: `,
    name: ` A2+`,
    size: `470 x 644 мм`,
    price: `9000 р.`
  },
  {
    type: `Магнетик двусторонний: `,
    name: ` A1+`,
    size: `644 x 891 мм`,
    price: `12800 р.`
  },
  {
    type: `Магнетик двусторонний: `,
    name: ` A0+`,
    size: `891 x 1239 мм`,
    price: `26000 р.`
  },
  {
    type: `Магнетик двусторонний: `,
    name: ` AA`,
    size: `1000 x 1500 мм`,
    price: `38600 р.`
  },
  {
    type: `Магнетик двусторонний: `,
    name: ` 2AA`,
    size: `1200 x 1800 мм`,
    price: `41000 р.`
  },
  {
    type: `Магнетик двусторонний: `,
    name: ``,
    size: `индивидуальный размер`,
    price: `уточняйте`
  }
];

clickForm(radioBtn, kristalTypeName, kristalName, kristalSize, kristalPrice, kristalNasten);
clickForm(kristalPod, kristalTypeNamePod, kristalNameP, kristalSizeP, kristalPriceP, kristalPodves);
clickForm(kristalD, kristalTypeNameD, kristalNameD, kristalSizeD, kristalPriceD, kristalDprice);
clickForm(fraimelightBtn, fraimelightTypeName, fraimelightName, fraimelightSize, fraimelightPrice, fraimelightprice);
clickForm(fraimelightBtnP, fraimelightTypeNameP, fraimelightNameP, fraimelightSizeP, fraimelightPriceP, fraimelightpriceP);
clickForm(fraimelightBtnD, fraimelightTypeNameD, fraimelightNameD, fraimelightSizeD, fraimelightPriceD, fraimelightpriceD);
clickForm(magnetBtn, magnetTypeName, magnetName, magnetSize, magnetPrice, magnetprice);
clickForm(magnetBtnP, magnetTypeNameP, magnetNameP, magnetSizeP, magnetPriceP, magnetpriceP);
clickForm(magnetBtnD, magnetTypeNameD, magnetNameD, magnetSizeD, magnetPriceD, magnetpriceD);