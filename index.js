let userInfo = new Promise((resolve, reject) => {
  fetch("./UsersInfo.json")
    .then((respond) => {
      return respond.json();
    })
    .then((data) => {
      set(data);
      // console.log(data.salutation);
      // nameuser.innerHtml = data.salutation;
    })
    .catch((err) => {
      reject(err);
    });
});

let user = new Promise((resolve, reject) => {
  fetch("./Users.json")
    .then((respond) => {
      return respond.json();
    })
    .then((data) => {
      // set(data);
    })
    .catch((err) => {
      reject(err);
    });
});
console.log(userInfo);

// age function
function age(dateString) {
  let now = new Date();
  let today = new Date(now.getYear(), now.getMonth(), now.getDate());

  let yearNow = now.getYear();
  let monthNow = now.getMonth();
  let dateNow = now.getDate();

  let dob = new Date(dateString);

  let yearDob = dob.getYear();
  let monthDob = dob.getMonth();
  let dateDob = dob.getDate();
  let age = {};

  yearAge = yearNow - yearDob;

  if (monthNow >= monthDob) var monthAge = monthNow - monthDob;
  else {
    yearAge--;
    var monthAge = 12 + monthNow - monthDob;
  }

  if (dateNow >= dateDob) var dateAge = dateNow - dateDob;
  else {
    monthAge--;
    var dateAge = 31 + dateNow - dateDob;

    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }

  age = {
    years: yearAge,
    months: monthAge,
    days: dateAge,
  };

  ageString = `${age.years}`;

  return ageString;
}
// console.log(age("1962-11-27T00:00:00.000Z"))

//end

// format date
const formatDate = (date) => {
  return new Date(date).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    month: "short",
    year: "numeric",
    day: "2-digit",
    hour12: true,
  });
};
// console.log(formatDate("1962-11-27T00:00:00.000Z"))
// end

// console.log(nameuser.innerHTML);
function set(data) {
  const profileDetailsTable = document.querySelector("#profile_Details_tbody");
  const nameuser = document.querySelector("#userNameDetails");
  nameuser.innerHTML = `<span id="userSalutation">${
    data.salutation
      ? data.salutation[0].toUpperCase() + data.salutation.slice(1) + "."
      : ""
  } </span> <span id="name">${data.firstName} ${data.middleName} ${
    data.lastName
  }</span> <span id="programInitial">(${data.programInitial})</span>`;

  profiledetailsHtml = ` <tr>
  <td class="td">Name</td>
  <td class="td">
    <div class="dashed">
      <span>-</span>
      <p>${
        data.salutation
          ? data.salutation[0].toUpperCase() + data.salutation.slice(1) + "."
          : ""
      } ${data.firstName} ${data.middleName} ${data.lastName} (${
    data.programInitial
  })</p>
    </div>
  </td>
  <td style="width: 2%"></td>
  <td class="td">Age</td>
  <td class="td">
    <div class="dashed">
      <span>-</span>
      <p>${data.dateOfBirth ? age(data.dateOfBirth) : "-"} yrs</p>
    </div>
  </td>
</tr>
<tr>
  <td class="td">Primary Number(WA)*</td>
  <td class="td">
    <div class="dashed">
      <span>-</span>
      <p>${data.phoneCountryCode ? "+" + data.phoneCountryCode + "-" : ""}${
    data.phoneNumber
  }</p>
    </div>
  </td>
  <td style="width: 2%"></td>
  <td class="td">Alternate Number</td>
  <td class="td">
    <div class="dashed">
      <span>-</span>
      <p>${
        data.alternatePhoneCountryCode
          ? "+" + data.alternatePhoneCountryCode + "-"
          : ""
      }${data.phoneAlternateNumber ? data.phoneAlternateNumber : ""}</p>
    </div>
  </td>
</tr>
<tr>
  <td class="td">Gender*</td>
  <td class="td">
    <div class="dashed">
      <span>-</span>
      <p>${
        data.gender == "f" ? "Female" : data.gender == "m" ? "Male" : "Other"
      }</p>
    </div>
  </td>
  <td style="width: 2%"></td>
  <td class="td">Date Of Birth</td>
  <td class="td">
    <div class="dashed">
      <span>-</span>
      <p>${data.dateOfBirth ? formatDate(data.dateOfBirth) : "-"}</p>
    </div>
  </td>
</tr>
<tr>
  <td class="td">Email</td>
  <td class="td">
    <div class="dashed">
      <span>-</span>
      <p>${data.email ? data.email : ""}</p>
    </div>
  </td>
  <td style="width: 2%"></td>
  <td class="td"></td>
  <td class="td">
    <div class="dashed">
      <span>-</span>
      <p></p>
    </div>
  </td>
</tr>

<tr>
  <td class="td">Street</td>
  <td class="td">
    <div class="dashed">
      <span>-</span>
      <p>${data.address ? data.address : ""}</p>
    </div>
    <!-- -<span>#304, Mathrusree Village Homes,Yemlur</span> -->
  </td>
  <td style="width: 2%"></td>
  <td class="td">Country</td>
  <td class="td">
    <div class="dashed">
      <span>-</span>
      <p>${data.country ? data.country : ""}</p>
    </div>
  </td>
</tr>
<tr>
  <td class="td">State</td>
  <td class="td">
    <div class="dashed">
      <span>-</span>
      <p>${data.state ? data.state : ""}</p>
    </div>
  </td>
  <td style="width: 2%"></td>
  <td class="td">City</td>
  <td class="td">
    <div class="dashed">
      <span>-</span>
      <p>${data.city ? data.city : ""}</p>
    </div>
  </td>
</tr>
<tr>
  <td class="td">Pincode</td>
  <td class="td">
    <div class="dashed">
      <span>-</span>
      <p>${data.pincode ? data.pincode : ""}</p>
    </div>
  </td>
  <td style="width: 2%"></td>
  <td class="td"></td>
  <td class="td">
    <div class="dashed">
      <span>-</span>
      <p></p>
    </div>
  </td>
</tr>
<tr>
  <td class="td">Lead Source*</td>
  <td class="td">
    <div class="dashed">
      <span>-</span>
      <p>Past Participant</p>
    </div>
  </td>
  <td style="width: 2%"></td>
  <td class="td">Mode Of Contact</td>
  <td class="td">
    <div class="dashed">
      <span>-</span>
      <p></p>
    </div>
  </td>
</tr>

<tr>
  <td class="td">Is Diabetic</td>
  <td class="td">
    <div class="dashed">
      <span>-</span>
      <p>Yes</p>
    </div>
  </td>
  <td style="width: 2%"></td>
  <td class="td">Registration Mode</td>
  <td class="td">
    <div class="dashed">
      <span>-</span>
      <p></p>
    </div>
  </td>
</tr>
<tr>
  <td class="td">Special Consultation</td>
  <td class="td">
    <div class="dashed">
      <span>-</span>
      <p>NO</p>
    </div>
  </td>
  <td style="width: 2%"></td>
  <td class="td">Patient Type</td>
  <td class="td">
    <div class="dashed">
      <span>Primary - Diabetic</span>
      <p></p>
    </div>
  </td>
</tr>
<tr>
  <td class="td">Special Consultation</td>
  <td class="td">
    <div class="dashed">
      <span>-</span>
      <p>NO</p>
    </div>
  </td>
  <td style="width: 2%"></td>
  <td class="td">Patient Type</td>
  <td class="td">
    <div class="dashed">
      <span>Primary - Diabetic</span>
      <p></p>
    </div>
  </td>
</tr>
<tr>
  <td class="td">Is Donor</td>
  <td class="td">
    <div class="dashed">
      <span>-</span>
      <p>NO</p>
    </div>
  </td>
  <td style="width: 2%"></td>
  <td class="td">Added By Clinic*</td>
  <td class="td">
    <div class="dashed">
      <span>FFD Clinic</span>
      <p></p>
    </div>
  </td>
</tr>
<tr>
  <td class="td">Assigned Clinics*</td>
  <td class="td">
    <div class="dashed">
      <span>-</span>
      <p>FFD Clinic</p>
    </div>
  </td>
  <td style="width: 2%"></td>
  <td class="td">Star Status</td>
  <td class="td">
    <div class="dashed">
      <span>-</span>
      <p></p>
    </div>
  </td>
</tr>
<tr>
  <td class="td">Engagement Level</td>
  <td class="td">
    <div class="dashed">
      <span>-</span>
      <p></p>
    </div>
  </td>
  <td style="width: 2%"></td>
  <td class="td">Link Source</td>
  <td class="td">
    <div class="dashed">
      <span>-</span>
      <p>internal-digitalFFDDMbatch79diabeticwhatsapp</p>
    </div>
  </td>
</tr>
<tr>
  <td class="td">Emergency Number</td>
  <td class="td">
    <div class="dashed">
      <span>-</span>
      <p></p>
    </div>
  </td>
  <td style="width: 2%"></td>
  <td class="td">WhatsApp Number</td>
  <td class="td">
    <div class="dashed">
      <span>-</span>
      <p></p>
    </div>
  </td>
</tr>
<tr>
  <td class="td">Languages Preferred for communication</td>
  <td class="td">
    <div class="dashed">
      <span>-</span>
      <p>English</p>
    </div>
  </td>
  <td style="width: 2%"></td>
  <td class="td">Reason for joining</td>
  <td class="td">
    <div class="dashed">
      <span>-</span>
      <p></p>
    </div>
  </td>
</tr>
<tr>
  <td class="td">Login Email</td>
  <td class="td">
    <div class="dashed">
      <span>-</span>
      <p></p>
    </div>
  </td>
  <td style="width: 2%"></td>
  <td class="td">Do not disturb</td>
  <td class="td">
    <div class="dashed">
      <span>-</span>
      <p></p>
    </div>
  </td>
</tr>

<tr>
  <td class="td">Profile Image</td>
  <td class="td">
    <div class="dashed">
      <span>-</span>
      <img
        class="profile_img"
        src="/assests/Basic_Ui__28186_29.jpg"
        alt="Profile_pic"
      />
    </div>
  </td>
  <td style="width: 2%"></td>
  <td class="td">Consent Responses</td>
  <td class="td">
    <div class="dashed">
      <span>-</span>
      <p>Accepted (19-Dec-2022)</p>
    </div>
  </td>
</tr>`;

  profileDetailsTable.innerHTML = profiledetailsHtml;
}

/**
 * For Scroll Sync
 */
const scrollers = document.getElementsByClassName("scroller");

const scrollerDivs = Array.prototype.filter.call(
  scrollers,
  function (testElement) {
    return testElement.nodeName === "DIV";
  }
);

function scrollAll(scrollLeft) {
  scrollerDivs.forEach(function (element, index, array) {
    element.scrollLeft = scrollLeft;
  });
}

scrollerDivs.forEach(function (element, index, array) {
  element.addEventListener("scroll", function (e) {
    scrollAll(e.target.scrollLeft);
  });
});

/**
 * End
 */
