var CarsList = [
  {
    ID: 1,
    Image: `https://lumirental.com/_next/image?url=https%3A%2F%2Fcdn-content.lumirental.com%2Fcms%2F1643019152215_FBMW3Series.png&w=1920&q=100`,
    Name: "BMW 3 Series",
    Description: "سيارة عائلية صغيرة",
    ProductionDate: 2019,
    RentType: "Daily Rent",
    ReconstructionFee: "1500 SP (1%)",
    Tax: "7500 SP (5% of the rental value)",
    RentalValue: 160000,
  },
  {
    ID: 2,
    Image: `https://lumirental.com/_next/image?url=https%3A%2F%2Fcdn-content.lumirental.com%2Fcms%2F1684157907801_tucson2023.png&w=1920&q=100`,
    Name: "Hyundai Tucson",
    Description: "اقتصادية",
    ProductionDate: 2023,
    RentType: "Daily Rent",
    ReconstructionFee: "2500 SP (1.5%)",
    Tax: "8500 SP (5% of the rental value)",
    RentalValue: 220000,
  },
  {
    ID: 3,
    Image: `https://lumirental.com/_next/image?url=https%3A%2F%2Fcdn-content.lumirental.com%2Fcms%2F1678695515681_Hyundaisonata2021.png&w=1920&q=100`,
    Name: "Hyundai sonata",
    Description: "سيارة عائلية صغيرة",
    ProductionDate: 2021,
    RentType: "Annual Rent",
    ReconstructionFee: "5500 SP (3%)",
    Tax: "8000 SP (5% of the rental value)",
    RentalValue: 1800000,
  },
  {
    ID: 4,
    Image: `https://logos.skyscnr.com/images/carhire/sippmaps/kia_21riosfwdhb4fa_s.png`,
    Name: "Kia Rio",
    Description: "متوسطة",
    ProductionDate: 2018,
    RentType: "Daily Rent",
    ReconstructionFee: "1500 SP (2%)",
    Tax: "6000 SP (5% of the rental value)",
    RentalValue: 200000,
  },
  {
    ID: 5,
    Image: `https://lumirental.com/_next/image?url=https%3A%2F%2Fcdn-content.lumirental.com%2Fcms%2F1678695093731_CToyotaCorolla2021.png&w=1920&q=100`,
    Name: "Toyota Corolla",
    Description: "كبيرة",
    ProductionDate: 2020,
    RentType: "Monthly Rent",
    ReconstructionFee: "3500 SP (1%)",
    Tax: "1500 SP (1% of the rental value)",
    RentalValue: 190000,
  },
  {
    ID: 6,
    Image: `https://lumirental.com/_next/image?url=https%3A%2F%2Fcdn-content.lumirental.com%2Fcms%2F1678955257254_425d097b5cff4ee0bf9cd9e93c3f699eaccent2023white.png&w=1920&q=100`,
    Name: "Hyundai Accent",
    Description: "بريميوم",
    ProductionDate: 2017,
    RentType: "Daily Rent",
    ReconstructionFee: "6500 SP (1%)",
    Tax: "10000 SP (5% of the rental value)",
    RentalValue: 300000,
  },
  {
    ID: 7,
    Image: `https://lumirental.com/_next/image?url=https%3A%2F%2Fcdn-content.lumirental.com%2Fcms%2F1678694807616_AHYUNDAIGRANDi10OK.png&w=1920&q=100`,
    Name: "Hyundai Grand i10",
    Description: "بريميوم",
    ProductionDate: 2020,
    RentType: "Monthly Rent",
    ReconstructionFee: "1500 SP (3%)",
    Tax: "11000 SP (2% of the rental value)",
    RentalValue: 1200000,
  },
];

function LoadCars() {
  var Result = ``;
  for (let index = 0; index < CarsList.length; index++) {
    Result += `
    <tr>
         <td>
            ${CarsList[index].Name}
         </td>
         <td>
            ${CarsList[index].ProductionDate}
         </td>
         <td>
         ${CarsList[index].RentType}
         </td>
         <td>
         ${CarsList[index].RentalValue} SP
         </td>
         <td>
         <img 
         onclick='CarDetails(${JSON.stringify(CarsList[index])})' 
          alt="${CarsList[index].Description}"  src="${
      CarsList[index].Image
    }" />
         </td>
     </tr>`;
  }

  document.querySelector(".items tbody").innerHTML = Result;
  document.querySelector(".SubmissionForm").style.display = "none";
}

var RentalValue;
var RentType;
function CarDetails(car) {
  document.querySelector(".Cars").style.display = "none";
  document.querySelector(".CarDetails").style.display = "block";
  document.querySelector(".ControlButtons").style.display = "block";
  var Result = `
     <div class="ImgDiv">
          <img  alt="${car.Description}"  src="${car.Image}" />
      </div>
            <div class="Details">
                <table>
                     <tr><td>Car Type :</td><td>${car.Name}<td></tr>
                     <tr><td>Rent Type :</td><td>${car.RentType} </td></tr>
                     <tr><td>Production Date :</td><td>${car.ProductionDate} </td></tr>
                    
                </table>
             </div>

             <div class="DetailsValue">
              <table>
                  <thead>
                    <tr>
                     <td>Reconstruction Fee</td>
                     <td>Tax</td>
                     <td>Rental value</td>
                   </tr>
                  </thead>
                 <tbody>
                   <tr>
                     <td>${car.ReconstructionFee}</td>
                     <td>${car.Tax}</td>
                     <td>${car.RentalValue} SP</td>
                   </tr>
                 </tbody>
              </table>
             </div>
      `;

  RentalValue = car.RentalValue;
  RentType = car.RentType;
  document.querySelector(".CarDetails .Items").innerHTML = Result;
  document.querySelector(
    ".SubmissionForm  #NumberDaysRentLabel"
  ).innerHTML = `Number Days Rent (${car.RentType})`;
  window.scrollTo({ top: 0, behavior: "smooth" });
  document.querySelector(".SubmissionForm").style.display = "none";
  generateCaptcha();
}

function Cancel() {
  document.querySelector(".Cars").style.display = "block";
  document.querySelector(".CarDetails").style.display = "none";
  document.querySelector(".SubmissionForm").style.display = "none";
}

function Continuation() {
  document.querySelector(".SubmissionForm").style.display = "block";
  window.scrollTo({ top: 1200, behavior: "smooth" });
}

let captchaValue = "";
function generateCaptcha() {
  let value = btoa(Math.random() * 1000000000);
  captchaValue = value.substr(0, 5 + Math.random() * 5);
  document.querySelector(
    ".SubmissionForm .captcha .preview"
  ).innerHTML = captchaValue;
}

function SubmitForm() {
  let fullname = document.querySelector(".SubmissionForm #FullName").value;
  let NationalNo = document.querySelector(".SubmissionForm #NationalNo").value;
  let MobileNumber = document.querySelector(".SubmissionForm #MobileNumber")
    .value;
  let CaptchaValue = document.querySelector(".SubmissionForm .captcha input")
    .value;
  let BirthDate = document.querySelector(".SubmissionForm #BirthDate").value;
  let Email = document.querySelector(".SubmissionForm #Email").value;
  let NumberDaysRent = document.querySelector(".SubmissionForm #NumberDaysRent")
    .value;

  var ValueException = CheckInputISNull(
    fullname,
    NationalNo,
    MobileNumber,
    CaptchaValue,
    BirthDate,
    Email
  );

  if (ValueException != null) {
    alert(ValueException + " field is required");
  } else {
    // Check Full Name
    var Checkfullname = fullname.search(/^[a-z\s'&]*$/i);
    if (Checkfullname != -1) {
      alert("Please Enter Your Fullname In Arabic");
      return;
    }

    /// Check National No
    const firstTwoNationalNo = NationalNo.slice(0, 2);
    if (firstTwoNationalNo < 0 || firstTwoNationalNo > 15) {
      alert("The County Code Is Wrong");
      return;
    } else if (NationalNo.length != 11) {
      alert("Invalid National Number !");
      return;
    }

    // Check Mobile Number
    const MTNMobileNumber = ["093", "094", "095", "096", "098", "099"];
    const firstTwoMobileNumber = MobileNumber.slice(0, 3);
    if (
      MTNMobileNumber.filter((i) => i == firstTwoMobileNumber).length == 0 ||
      MobileNumber.length != 10
    ) {
      alert("Invalid Mobile Number");
      return;
    }

    // Check Email
    var CheckEmail = validateEmail(Email);
    if (CheckEmail != true) {
      alert("Invalid Email !");
      return;
    }

    ///// Check captchaValue
    if (CaptchaValue !== captchaValue) {
      alert("Invalid captcha");
      return;
    }

    RentalValue = parseFloat(RentalValue) * parseInt(NumberDaysRent);
    alert("The cost of renting this car is: " + RentalValue);
  }
}

function CheckInputISNull(
  fullname,
  NationalNo,
  MobileNumber,
  CaptchaValue,
  BirthDate,
  Email
) {
  if (fullname == "") return "Full Name";
  else if (NationalNo == "") return "National Number";
  else if (MobileNumber == "") return "Mobile Number";
  else if (CaptchaValue == "") return "Captcha Value";
  else if (BirthDate == "") return "BirthDate";
  else if (Email == "") return "Email";
  return null;
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
