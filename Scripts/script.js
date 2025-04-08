
const transilations = {
  en:{


    english:"English",
    arabic:"Arabic",

    // STROKE
    STtitle:"Stroke Questionaire",
    STtitle2:"Answer this Questions",
    strokeTitle:"What is your gender?",
    gender:"Gender",
    male:"Male",
    female:"Female",
    currentWork:"Which of the following best describes your current work status?",
    private:"Private",
    govtJob:"Govt_job",
    SelfEmployed:"Self-Employed",
    NeverWorked:"Never_Worked",
    children:"Children ",
    age:"What is your current age?",
    bloodPressure:"Have you been diagnosed with hypertension (high blood pressure)?",
    yes:"Yes",
    no:"No",
    status:"Have you ever been married?",
    heartDisease:"Do you have Heart disease",
    live:"Do you live in an urban or rural area?",
    urban:"Urban",
    rural:"Rural",
    glucoseLevel:"What is your most recent fasting blood glucose level (mg/dL)?",
    bodyMass:"What is your current Body Mass Index (BMI)?",
    height:"What is your current Height?",
    weight:"What is your current Weight?",
    smokeStatus:"Which of the following best describes your smoking status?",
    neverSmoke:"Never Smoked",
    smoke:"Smokes",
    formerlySmoke:"Formerly Smoked",

    // ECG
     ECGtitle:"Medical Tests & ECG",
    ECGtitle2:"Answer this Questions",
    ECGhead:"Part 1: Medical Test Questionnaire ",
    ckmb:"What is Your creatine kinase-myocardial band (CK-MB)? ",
    troponin:"What is Your Troponin Level?",

    //CHD
    CHDtitle:"CHD Questionaire",
    CHDtitle2:"Answer this  Questions",
    cigsNum:"If you currently smoke, how many cigarettes do you smoke per day?",
    troponibloodPressuren:"TroponAre you currently taking any blood pressure medications?in",
    stroke:"Have you ever had a stroke?",
    hypertension:"Have you ever been diagnosed with hypertension (high blood pressure)?",
    diabetes:"Have you ever been diagnosed with diabetes?",
    cholesterolLevel:"What is your most recent total cholesterol level (mg/dL)?",
    topBloodPressure:"What is your most recent systolic blood pressure reading (the top number)?",
    bottomBloodPressure:"What is your most recent diastolic blood pressure reading (the bottom number)?",
    bmi:"What is your current body mass index (BMI)",
    restingHeartRate:"What is your resting heart rate (beats per minute)?",
    glucoseLevel:"What is your most recent fasting blood glucose level (mg/dL)?",

    //RESULT
    formCheck:"Check your Heart",
    result:"Your Result",

  },
  ar:{
   
    english:"انجليزي",
    arabic:"عربي",

    
    STtitle:"اسئلة عن السكتة الدماغية ",
    STtitle2:"اجب علي تلك الاسئلة",
    strokeTitle:"ما هو نوعك؟",
    gender:"النوع",
    male:"ذكر",
    female:"انثي",
    currentWork:" أي مما يلي يصف حالة عملك الحالية؟",
    private:"خاص ",
    govtJob:"حكومي",
    SelfEmployed:"لديك عملك الخاص",
    NeverWorked:"لا تعمل ",
    children:"أطفال ",
    age:"ما هو سنك الحالي؟",
    bloodPressure:" هل سبق أن تم تشخيصك  بارتفاع ضغط الدم ؟",
    yes:"نعم",
    no:"لا",
    status:" هل سبق لك أن تزوجت؟",
    heartDisease:" هل لديك مرض في القلب؟",
    live:" هل تعيش في منطقة حضرية أم ريفية؟",
    urban:" حضارية",
    rural:"ريفية",
    glucoseLevel:" ما هو أحدث مستوى جلوكوز في الدم في حالة الصيام (ملغم / ديسيلتر)؟",
    bodyMass:" ما هو مؤشر كتلة الجسم الحالي لديك؟",
    height:"ما هو طولك الحالي ؟",
    weight:"ما هو وزنك الحالي ؟",
    smokeStatus:" أي مما يلي يصف حالة التدخين لديك؟",
    neverSmoke:"لم ادخن ابدا",
    smoke:"ادخن",
    formerlySmoke:"ادخن بشكل كبير",
    formCheck:"ابدا الفحص",

    //ECG
    ECGtitle:" التحاليل الطبية وتخطيط القلب ",
    ECGtitle2:"اجب علي تلك الاسئلة",
    ECGhead:" الجزء 1: اسئلة التحاليل الطبية ",
    ckmb:"؟ (CK-MP) ما هو مستوى شريط الكرياتين كيناز وعضلة القلب لديك  ",
    troponin:"؟ (Troponin)ما هو مستوي التروبونين لديك  ",

     //CHD
     CHDtitle:" اسئلة أمراض الشرايين التاجية ",
     CHDtitle2:" أجب علي تلك الاسئلة ",
     cigsNum:" إذا كنت تدخن حاليا ، فكم عدد السجائر التي تدخنها يوميا؟",
     troponibloodPressuren:" هل تتناول حاليا أي أدوية لضغط الدم؟",
     stroke:" هل أصبت بسكتة دماغية من قبل؟",
     hypertension:" هل سبق أن تم تشخيصك  بارتفاع ضغط الدم ؟",
     diabetes:" هل سبق أن تم تشخيصك  بمرض السكري؟",
     cholesterolLevel:" ما هو أحدث مستوى كوليسترول كلي لديك (ملغم / ديسيلتر)؟",
     topBloodPressure:" ما هي أحدث قراءة لضغط الدم الانقباضي لديك (الرقم الأعلى)؟ ",
     bottomBloodPressure:" ما هي أحدث قراءة لضغط الدم الانبساطي لديك (الرقم السفلي)؟",
     bmi:" ما هو مؤشر كتلة الجسم الحالي لديك ",
     restingHeartRate:" ما هو معدل ضربات قلبك أثناء الراحة (نبضة في الدقيقة)؟",
     glucoseLevel:" ما هو أحدث مستوى جلوكوز في الدم في حالة الصيام (ملغم / ديسيلتر)؟",
 
    //RESULT
    result:"نتيجتك",


  },
}

const langSelector = document.querySelector("select")

langSelector.addEventListener("change",(event)=>{
  setLanguage(event.target.value)
  // console.log(event.target.value)
  // localStorage.setItem("lang",event.target.value)
  // langSelector.options.removeAttribute("selected")
})
document.addEventListener('DOMContentLoaded',()=>{
  // setLanguage(localStorage.getItem("lang"))
  // langSelector.textContent=localStorage.getItem("lang")
})

const setLanguage = (language)=>{
  const width = window.innerWidth || document.documentElement.clientWidth;
  const elements = document.querySelectorAll('[data-lng]')
  // console.log(element)
  elements.forEach((element)=>{
    const transilationKey = element.getAttribute("data-lng")
    element.textContent = transilations[language][transilationKey]
  })


  document.getElementById('Services-Sheader').dir = language === 'ar'? 'rtl': 'ltr';
  document.getElementById('my-form').dir = language === 'ar'? 'rtl': 'ltr'
  // document.getElementById("formBtn").style.marginRight = language==='ar'?'13rem':'0'
  if (width < 600) {
    document.getElementById("formBtn").style.marginRight = language==='ar'?'0.3rem':'0'
  } else {
    document.getElementById("formBtn").style.marginRight = language==='ar'?'13rem':'0'

}
}

let menu =document.getElementById('menu');
let rightNav = document.getElementById('n-right')

menu.onclick= () =>{
menu.classList.toggle('bx-x')
rightNav.classList.toggle('open')
}


const imageUpload = document.getElementById("imageUpload");
const previewImage = document.getElementById("previewImage");
// document.getElementById("Navebar").classList.add("show");

//  ##### HOME PAGE #####

// animation navbar
let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // document.getElementById("Navebar").style.left = "0";
    document.getElementById("Navebar").style.paddingLeft = "6rem";
  } else {
    if (width > 600) {
    document.getElementById("Navebar").style.paddingLeft = "1rem";
  }
  }

  prevScrollPos = currentScrollPos;
};








document.getElementById("homeBtn").addEventListener("click", function() {
  document.getElementById("Services-Sheader").scrollIntoView({ behavior: "smooth" });
});




imageUpload.addEventListener("change", function(event) {
  const file = event.target.files[0]; // Get the selected image file

  // Validate file type (optional):
  if (!file.type.match("image.*")) {
    alert("Please select an image file.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function(event) {
    previewImage.src = event.target.result; // Display the preview
  };
  reader.readAsDataURL(file); // Read the file as a data URL
});


document.querySelector(".intro").classList.add("show");
// Add the 'image-show' class to the 'intro' element to trigger the image animation
setTimeout(() => {
  document.querySelector(".intro").classList.add("image-show");
}, 500); // Delay the image animation by 500 milliseconds


