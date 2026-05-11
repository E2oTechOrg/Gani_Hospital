const params = new URLSearchParams(window.location.search);
const service = params.get("service");

const data = {

    pregnancy: {
        title: "Pregnancy Care",
        badge: "MATERNITY CARE",
        img: "images/blog/ultrasound.webp",

        stat1: { value: "24/7", label: "Mother Care" },
        stat2: { value: "1000+", label: "Deliveries Handled" },
        stat3: { value: "15+", label: "Years Experience" },

        about: "Our Pregnancy Care department offers complete maternity support from early pregnancy to safe delivery and postnatal recovery. We focus on mother and baby wellness through expert gynecologists, regular monitoring, and compassionate care.",

        facilities: "We provide complete maternity services including regular antenatal checkups, fetal growth monitoring scans, nutrition and lifestyle counseling, blood pressure and diabetes monitoring, high-risk pregnancy management, labor room assistance, normal and cesarean delivery support, newborn care, breastfeeding guidance, and post-delivery recovery care in a safe and modern hospital environment.",
        
        facilityItems: [
            "Regular Antenatal Checkups",
            "Pregnancy Scans & Monitoring",
            "High-Risk Pregnancy Care",
            "Normal Delivery Support",
            "Postnatal Mother Care",
            "Baby Wellness Guidance"
        ]
    },

    kids: {
        title: "Kids Care",
        badge: "PEDIATRIC CARE",
        img: "images/department/Paediatrics.webp",

        stat1: { value: "24/7", label: "Child Support" },
        stat2: { value: "5000+", label: "Children Treated" },
        stat3: { value: "12+", label: "Specialists" },

        about: "Our Kids Care department provides specialized treatment for newborns, infants, and children. We focus on preventive care, growth monitoring, vaccinations, and treatment of childhood illnesses in a child-friendly environment.",

        facilities: "Our pediatric unit offers vaccination programs, newborn care, child emergency treatment, fever and infection management, growth and developmental assessments, nutrition counseling, allergy care, asthma management, infant wellness checkups, and regular pediatric consultations in a child-friendly atmosphere.",
        facilityItems: [
            "Vaccination Programs",
            "Growth Monitoring",
            "Child Emergency Care",
            "Nutrition Guidance",
            "Infant Health Checkups",
            "Pediatric Consultation"
        ]
    },

    surgery: {
        title: "Advanced Surgeries",
        badge: "LAPAROSCOPY & SURGERY",
        img: "images/blog/hospital-bag-surgery.webp",

        stat1: { value: "3000+", label: "Surgeries Done" },
        stat2: { value: "Less Pain", label: "Modern Methods" },
        stat3: { value: "Fast", label: "Recovery Time" },

        about: "Gani Hospitals is known for advanced laparoscopic and general surgeries with modern surgical techniques. Our expert surgeons ensure safe treatment, minimal pain, small incisions, and faster recovery.",

        facilities: "We perform advanced laparoscopic and general surgeries including appendix removal, gallbladder surgery, hernia repair, piles treatment, fissure and fistula care, diagnostic laparoscopy, cyst removal, emergency surgical procedures, wound management, and post-surgical recovery support using modern equipment.",
        facilityItems: [
            "Laparoscopic Surgery",
            "Appendix Surgery",
            "Gallbladder Surgery",
            "Hernia Repair",
            "Piles Treatment",
            "Emergency Surgeries"
        ]
    },

    scan: {
        title: "Scan & Imaging",
        badge: "DIAGNOSTIC SCAN",
        img: "images/service/scan.webp",

        stat1: { value: "Fast", label: "Reports" },
        stat2: { value: "Modern", label: "Equipment" },
        stat3: { value: "Accurate", label: "Diagnosis" },

        about: "Our Scan & Imaging department provides accurate diagnostic imaging using modern scanning systems for quick and reliable medical decisions.",

        facilities: "We offer accurate and timely imaging services including ultrasound scan, pregnancy scan, abdominal scan, pelvic scan, thyroid scan, breast scan, Doppler scan, soft tissue scan, guided diagnostic imaging, digital reporting, and expert radiology consultation for proper diagnosis.",
        facilityItems: [
            "Ultrasound Scan",
            "Pregnancy Scan",
            "Abdominal Scan",
            "Pelvic Scan",
            "Digital Reports",
            "Expert Radiology Support"
        ]
    },

    lab: {
        title: "Laboratory Services",
        badge: "DIAGNOSTIC LAB",
        img: "images/service/lab.webp",

        stat1: { value: "10K+", label: "Tests Done" },
        stat2: { value: "99%", label: "Accuracy" },
        stat3: { value: "Daily", label: "Reports" },

        about: "Our Laboratory Services provide reliable diagnostic testing with modern equipment and trained technicians for fast and accurate results.",

       facilities: "Our laboratory provides a wide range of diagnostic tests including complete blood count, urine analysis, blood sugar testing, thyroid profile, liver function test, kidney function test, cholesterol profile, infection screening, pregnancy tests, hormone testing, and complete preventive health packages with quick reporting.",
        facilityItems: [
            "Blood Test",
            "Urine Analysis",
            "Sugar Test",
            "Thyroid Test",
            "Health Packages",
            "Quick Reports"
        ]
    },

    emergency: {
        title: "Emergency Care",
        badge: "24/7 EMERGENCY",
        img: "images/blog/emergency.webp",

        stat1: { value: "24/7", label: "Available" },
        stat2: { value: "Fast", label: "Response" },
        stat3: { value: "Expert", label: "Medical Team" },

        about: "Our Emergency Care unit provides immediate treatment for accidents, fever, breathing issues, chest pain, injuries, and urgent medical conditions any time of the day.",

        facilities: "Our 24/7 emergency unit provides immediate medical attention for accidents, injuries, fever, dehydration, breathing difficulty, chest pain, vomiting, trauma cases, emergency injections, oxygen support, observation beds, ambulance coordination, critical stabilization, and urgent doctor consultation at any time.",
        facilityItems: [
            "24/7 Doctor Availability",
            "Emergency First Aid",
            "Oxygen Support",
            "Observation Beds",
            "Trauma Care",
            "Rapid Medical Response"
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