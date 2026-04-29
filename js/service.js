const params = new URLSearchParams(window.location.search);
const service = params.get("service");

const data = {

    child: {
        title: "Child Care",
        badge: "CHILD CARE",
        img: "images/about/about1.webp",
        stat1: { value: "24/7", label: "Pediatric Support" },
        stat2: { value: "12+", label: "Specialist Doctors" },
        stat3: { value: "5000+", label: "Children Treated" },
        about: "Our Child Care department is dedicated to the holistic health and well-being of children from infancy through adolescence. Led by experienced pediatricians, we provide evidence-based care tailored to each child's unique developmental stage — ensuring early detection, timely intervention, and continuous health monitoring throughout their growth journey.",
        facilities: "Our pediatric department is designed to provide a safe, child-friendly environment with advanced medical infrastructure. We have dedicated vaccination clinics, growth assessment units, neonatal intensive care (NICU), and emergency pediatric support available 24/7. The unit also includes play therapy areas, nutrition counseling centers, and child psychology support to ensure both physical and emotional well-being of children.",
        facilityItems: [
            "Vaccination & Immunisation Programs",
            "Growth & Development Monitoring",
            "Nutrition & Diet Counseling",
            "24/7 Emergency Pediatric Care",
            "Neonatal Intensive Care Unit (NICU)",
            "Child Psychology & Behavioral Support"
        ],

    },

    personal: {
        title: "Personal Care",
        badge: "PERSONAL CARE",
        img: "images/about/about2.jpeg",
        stat1: { value: "100%", label: "Patient-Centred" },
        stat2: { value: "Daily", label: "Consultations" },
        stat3: { value: "3000+", label: "Patients Served" },
        about: "Our Personal Care services are built around the belief that every patient deserves individualised attention and a care plan designed specifically for their needs. We combine thorough clinical assessments with compassionate support to ensure comfort, safety, and effective outcomes at every stage of treatment.",
        facilities: "Our personal care services include fully customized treatment plans supported by modern consultation rooms and telemedicine facilities. Patients receive continuous monitoring through regular follow-ups, home care services, and digital health tracking. We also offer rehabilitation programs, wellness counseling, and preventive health screenings to maintain long-term health and comfort.", facilityItems: [
            "Customised Treatment Plans",
            "Home Care Support Services",
            "Regular Health Monitoring",
            "In-Clinic & Teleconsultation",
            "Post-Treatment Rehabilitation",
            "Wellness & Preventive Checkups"
        ],

    },

    ctscan: {
        title: "CT Scan",
        badge: "CT SCAN",
        img: "images/service/ct.jpg",
        stat1: { value: "128-Slice", label: "High-Res Scanner" },
        stat2: { value: "<30 min", label: "Report Turnaround" },
        stat3: { value: "10,000+", label: "Scans Completed" },
        about: "Our CT Scan department is equipped with state-of-the-art imaging technology to deliver fast, precise, and reliable diagnostic results. Our advanced systems capture detailed cross-sectional images of the body, enabling specialist radiologists to detect conditions at the earliest stage with exceptional accuracy.",
        facilities: "The CT Scan unit is equipped with a 128-slice high-resolution scanner designed for fast and accurate imaging with minimal radiation exposure. We use advanced PACS technology for instant image processing and secure digital report sharing. The department also offers contrast studies, angiography scans, and specialist radiologist consultation for precise diagnosis.",
        facilityItems: [
            "128-Slice High-Resolution CT Scanner",
            "Full-Body & Targeted Imaging",
            "Contrast-Enhanced CT Angiography",
            "PACS Digital Report System",
            "Radiation-Minimised Protocols",
            "Expert Radiologist Interpretation"
        ],

    },

    lab: {
        title: "Laboratory Services",
        badge: "DIAGNOSTICS LAB",
        img: "images/about/about-lab.webp",

        stat1: { value: "10K+", label: "Tests Conducted" },
        stat2: { value: "99%", label: "Accuracy Rate" },
        stat3: { value: "24/7", label: "Service Availability" },

        about: "Our Laboratory Services department provides comprehensive diagnostic solutions with high precision and reliability. Equipped with modern technology and managed by experienced pathologists and technicians, we ensure timely and accurate test results to support effective medical decisions and patient care.",

        facilities: "Our laboratory is equipped with fully automated analyzers, advanced diagnostic tools, and strict quality control systems. We offer a wide range of tests including blood tests, urine analysis, microbiology, and pathology services. With quick turnaround times and digital reporting, patients receive fast and dependable results.",

        facilityItems: [
            "Complete Blood Count (CBC)",
            "Biochemistry & Hormone Analysis",
            "Microbiology & Culture Tests",
            "Digital & Online Report Access",
            "Home Sample Collection Service"
        ],

    },

    diagnosis: {
        title: "Diagnosis",
        badge: "DIAGNOSIS",
        img: "images/service/service-6.jpg",
        stat1: { value: "200+", label: "Tests Available" },
        stat2: { value: "Same Day", label: "Digital Reports" },
        stat3: { value: "NABL", label: "Accredited Lab" },
        about: "Accurate diagnosis is the foundation of effective treatment. Our Diagnostic Services division combines cutting-edge laboratory technology with the expertise of experienced pathologists. From routine blood panels to advanced molecular diagnostics, we deliver precise, timely results that empower well-informed healthcare decisions.",
        facilities: "Our NABL-accredited diagnostic laboratory offers a wide range of tests including hematology, biochemistry, microbiology, and molecular diagnostics. Equipped with automated analyzers and modern technology, we ensure accurate and quick results. Patients also benefit from home sample collection, same-day digital reports, and specialist consultation for interpretation.",
        facilityItems: [
            "Complete Blood Count & Biochemistry",
            "Microbiology & Culture Tests",
            "Histopathology & Cytology",
            "Molecular Diagnostics & PCR",
            "Full Body Health Checkup Packages",
            "Home Sample Collection Service"
        ],

    },

    pharmacy: {
        title: "Pharmacy Services",
        badge: "HOSPITAL PHARMACY",
        img: "images/service/service-pharmacy.jpg",

        stat1: { value: "24/7", label: "Medicine Availability" },
        stat2: { value: "5K+", label: "Prescriptions Served" },
        stat3: { value: "100%", label: "Genuine Medicines" },

        about: "Our Pharmacy Services ensure safe, reliable, and timely access to high-quality medicines for all patients. Managed by licensed pharmacists, we provide accurate dispensing, medication guidance, and support to help patients follow their prescriptions correctly and safely.",

        facilities: "Our hospital pharmacy is fully stocked with a wide range of medicines, including emergency drugs, chronic care medications, and surgical supplies. We maintain strict quality standards, proper storage conditions, and digital inventory systems to ensure medicine availability at all times. Patients also benefit from prescription verification and expert pharmacist consultation.",

        facilityItems: [
            "24/7 Pharmacy Service",
            "Prescription Verification & Dispensing",
            "Availability of Emergency Medicines",
            "Cold Storage for Sensitive Drugs",
            "Patient Medication Counselling",
            "Online & Repeat Prescription Support"
        ]
    }
};

function renderPage(d) {
    document.getElementById("title").innerText = d.title;
    document.getElementById("deptBadge").innerText = d.badge;
    document.getElementById("about").innerText = d.about;
    document.getElementById("facilities").innerText = d.facilities;
    document.getElementById("serviceImg").src = d.img;
    document.getElementById("serviceImg").alt = d.title;
    document.getElementById("stat1Value").innerText = d.stat1.value;
    document.getElementById("stat1Label").innerText = d.stat1.label;
    document.getElementById("stat2Value").innerText = d.stat2.value;
    document.getElementById("stat2Label").innerText = d.stat2.label;
    document.getElementById("stat3Value").innerText = d.stat3.value;
    document.getElementById("stat3Label").innerText = d.stat3.label;

    /* Facility list */
    const facList = document.getElementById("facilityList");
    d.facilityItems.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = item;
        facList.appendChild(li);
    });

    /* Doctors */
    const grid = document.getElementById("doctorsGrid");
    d.doctors.forEach(doc => {
        const card = document.createElement("div");
        card.className = "sd-doctor-card";
        card.innerHTML = `
            <div class="sd-doc-img">
                <img src="${doc.img}" alt="${doc.name}" onerror="this.src='images/team/placeholder.jpg'">
                <span class="sd-doc-exp">${doc.experience}</span>
            </div>
            <div class="sd-doc-body">
                <h5>${doc.name}</h5>
                <div class="sd-doc-qual">${doc.qualification}</div>
            </div>`;
        grid.appendChild(card);
    });
}

if (data[service]) {
    renderPage(data[service]);
} else {
    document.getElementById("title").innerText = "Service Not Found";
}


//  FAQ 


function toggleFAQ(btn) {
    const answer = btn.nextElementSibling;
    const isOpen = answer.classList.contains('open');

    document.querySelectorAll('.faq-answer.open').forEach(a => a.classList.remove('open'));
    document.querySelectorAll('.faq-question.open').forEach(q => q.classList.remove('open'));

    if (!isOpen) {
        answer.classList.add('open');
        btn.classList.add('open');
    }
}

function filterFAQ() {
    const q = document.getElementById('faqSearch').value.toLowerCase();
    document.querySelectorAll('.faq-tab').forEach(t => t.classList.remove('active'));

    document.querySelectorAll('.faq-item').forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(q) ? 'block' : 'none';
    });
}

function filterByCategory(cat, btn) {
    document.querySelectorAll('.faq-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');

    document.getElementById('faqSearch').value = '';

    document.querySelectorAll('.faq-item').forEach(item => {
        item.style.display = (cat === 'all' || item.dataset.cat === cat) ? 'block' : 'none';
    });
}