function loadComponent(id, file) {
	fetch(file)
		.then(res => {
			if (!res.ok) throw new Error("Failed to load " + file);
			return res.text();
		})
		.then(data => {
			document.getElementById(id).innerHTML = data;

			requestAnimationFrame(() => {

				if (id === "header-container") {
					initHeader();
					setActiveMenu();
				}

				if (id === "footer-container") {
					initFooter();
				}

				window.dispatchEvent(new Event("resize"));
			});
		})
		.catch(err => console.error(err));
}

function initHeader() {
	const header = document.getElementById("mainHeader");

	if (!header) {
		console.error("Header not found!");
		return;
	}

	console.log("Header loaded successfully");
}

function initFooter() {
	const footer = document.getElementById("footer");

	if (!footer) {
		console.error("Footer not found!");
		return;
	}

	console.log("Footer loaded successfully");
}

// ✅ Active menu function
function setActiveMenu() {
	const links = document.querySelectorAll(".navbar-nav .nav-link");
	const currentPage = window.location.pathname.split("/").pop();

	links.forEach(link => {
		const linkPage = link.getAttribute("href");

		if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
			link.classList.add("active");
		} else {
			link.classList.remove("active");
		}
	});
}

loadComponent("header-container", "header.html");
loadComponent("footer-container", "footer.html");

; (function ($) {

	'use strict';

	// SCROLL TO TOP

	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 70) {
			$('.backtop').addClass('reveal');
		} else {
			$('.backtop').removeClass('reveal');
		}
	});

	$('.portfolio-single-slider').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000

	});

	$('.clients-logo').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		slidesToShow: 6,
		slidesToScroll: 6,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 6,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			}, {
				breakpoint: 600,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}

		]
	});

	$('.testimonial-wrap').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		dots: true,
		arrows: false,
		autoplay: true,
		vertical: true,
		verticalSwiping: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}, {
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}

		]
	});

	$('.testimonial-wrap-2').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		infinite: true,
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}, {
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}

		]
	});




	// *********** Department ******************
	const params = new URLSearchParams(window.location.search);
	const dept = params.get("dept");

	const data = {

		paediatrics: {
			title: "Paediatrics",
			img: "images/department/Paediatrics.webp",
			desc: "Our Paediatrics Department is dedicated to providing comprehensive medical care for infants, children, and adolescents up to 18 years of age. Our team of experienced paediatricians and child health specialists work with compassion and expertise to ensure every child receives the best possible care in a safe and friendly environment.",
			about: [
				"The Department of Paediatrics at MedCare Hospital offers a full range of services from routine well-child visits to the management of complex and chronic childhood illnesses. We understand that children are not just small adults — they have unique medical, emotional, and developmental needs.",
				"Our child-friendly facilities are designed to reduce anxiety and create a comfortable experience for both children and their parents. We work closely with families to provide guidance on nutrition, growth, immunization, and overall child development.",
				"Our NICU (Neonatal Intensive Care Unit) is equipped with advanced technology to care for premature and critically ill newborns, staffed round the clock by skilled neonatologists and nurses."
			],
			features: [
				"Well-child visits and growth monitoring",
				"Neonatal & Intensive Care Unit (NICU)",
				"Childhood immunization & vaccination",
				"Pediatric emergency care",
				"Management of chronic illnesses (asthma, diabetes)",
				"Developmental and behavioral assessments",
				"Nutritional counseling for children",
				"Pediatric surgery support"
			]
		},

		urology: {
			title: "Urology",
			img: "images/department/urologist.webp",
			desc: "The Urology Department at MedCare Hospital provides advanced diagnosis and treatment of diseases affecting the urinary tract in both men and women, as well as the male reproductive system. Our urologists use minimally invasive techniques and state-of-the-art technology to ensure faster recovery and better outcomes.",
			about: [
				"Our Urology Department is equipped with cutting-edge endoscopic and laparoscopic tools for the treatment of kidney stones, urinary tract infections, prostate disorders, bladder conditions, and more. We offer both surgical and non-surgical treatment options tailored to each patient.",
				"We have a dedicated stone clinic for the management of kidney and ureteric stones using laser and shock wave lithotripsy techniques. Our experts also specialize in urological cancers including kidney, bladder, and prostate cancer.",
				"Patients receive personalized care from diagnosis through treatment and follow-up, ensuring comprehensive management of urological conditions at every stage."
			],
			features: [
				"Kidney stone treatment (Laser & ESWL)",
				"Prostate disorders & BPH management",
				"Urinary tract infection treatment",
				"Bladder and kidney cancer care",
				"Minimally invasive laparoscopic surgery",
				"Urodynamic studies",
				"Male reproductive health",
				"Pediatric urology"
			]
		},

		orthopaedics: {
			title: "Orthopaedics",
			img: "images/department/Orthopaedics.webp",
			desc: "The Department of Orthopaedics at MedCare Hospital specializes in the diagnosis, treatment, and rehabilitation of disorders related to bones, joints, muscles, ligaments, and tendons. Our highly experienced orthopaedic surgeons offer both surgical and non-surgical treatments for a wide range of musculoskeletal conditions.",
			about: [
				"Our Orthopaedics Department provides comprehensive care for fractures, sports injuries, joint problems, spine disorders, and congenital bone conditions. We are equipped with advanced imaging technology including digital X-ray, MRI, and CT scan for accurate diagnosis.",
				"We offer a full range of joint replacement surgeries including hip, knee, and shoulder replacements using the latest prosthetics and minimally invasive techniques. Our physiotherapy and rehabilitation team works alongside our surgeons to ensure complete recovery.",
				"The department also houses a dedicated sports medicine clinic catering to athletes and physically active individuals with specialized treatment protocols for sports-related injuries."
			],
			features: [
				"Joint replacement (Hip, Knee, Shoulder)",
				"Fracture management & trauma care",
				"Arthroscopic surgery",
				"Spine surgery & disc management",
				"Sports injury treatment",
				"Physiotherapy & rehabilitation",
				"Pediatric orthopaedics",
				"Osteoporosis management"
			]
		},

		dermatology: {
			title: "Dermatology",
			img: "images/department/Dermatology.webp",
			desc: "The Dermatology Department at MedCare Hospital offers expert care for all conditions affecting the skin, hair, and nails. Our board-certified dermatologists provide both medical and cosmetic dermatology services using evidence-based treatments and advanced technology for lasting results.",
			about: [
				"Our department treats a full spectrum of skin conditions including acne, eczema, psoriasis, vitiligo, fungal infections, allergies, and skin cancers. We use the latest diagnostic tools including dermoscopy and skin biopsies to ensure accurate diagnosis.",
				"For cosmetic concerns, our dermatologists offer procedures such as chemical peels, laser treatments, botox, dermal fillers, and PRP therapy for hair loss. Each treatment plan is customized based on the patient's skin type, condition, and goals.",
				"We also run specialized clinics for hair loss (alopecia), nail disorders, and sexually transmitted skin infections, providing comprehensive and confidential care."
			],
			features: [
				"Acne, eczema & psoriasis treatment",
				"Skin allergy testing & management",
				"Vitiligo & pigmentation treatment",
				"Laser skin treatments",
				"Hair loss (PRP) therapy",
				"Dermoscopy & skin biopsy",
				"Cosmetic dermatology procedures",
				"Skin cancer screening & treatment"
			]
		},

		gastroenterology: {
			title: "Gastroenterology",
			img: "images/department/gastro1.webp",
			desc: "The Department of Gastroenterology at MedCare Hospital provides specialized care for diseases of the digestive system, including the esophagus, stomach, intestines, liver, pancreas, and gallbladder. Our experienced gastroenterologists use advanced endoscopic procedures for both diagnosis and treatment.",
			about: [
				"Our Gastroenterology Department is equipped with high-definition endoscopy and colonoscopy systems to diagnose and treat a wide range of gastrointestinal conditions. We specialize in the management of acid reflux, irritable bowel syndrome, inflammatory bowel disease, liver disease, and gastrointestinal cancers.",
				"The department has a dedicated liver clinic (hepatology unit) for managing chronic liver diseases including hepatitis B, hepatitis C, fatty liver disease, and liver cirrhosis. We also perform fibroscan tests for non-invasive liver assessment.",
				"Our team works closely with dietitians, oncologists, and surgeons to provide a multidisciplinary approach to gastrointestinal health, ensuring patients receive comprehensive, coordinated care."
			],
			features: [
				"Upper GI endoscopy & colonoscopy",
				"Acid reflux & GERD management",
				"Inflammatory bowel disease treatment",
				"Liver disease & hepatitis management",
				"Pancreatic & gallbladder disorders",
				"Fibroscan (liver assessment)",
				"Gastrointestinal cancer screening",
				"Irritable bowel syndrome (IBS) care"
			]
		},

		generalsurgery: {
			title: "General Surgery",
			img: "images/department/Surgery.webp",
			desc: "The Department of General Surgery at MedCare Hospital performs a wide range of surgical procedures with precision and care. Our highly skilled surgeons specialize in both open and minimally invasive (laparoscopic) surgeries, ensuring reduced pain, shorter hospital stays, and faster recovery for our patients.",
			about: [
				"Our General Surgery Department handles surgical conditions of the abdomen, breast, thyroid, hernia, appendix, gallbladder, and colon. We are well-equipped to manage emergency surgeries as well as planned elective procedures with the highest standards of safety.",
				"Laparoscopic (keyhole) surgery is available for most procedures, reducing post-operative discomfort and enabling quicker return to daily activities. Our modular operation theatres are equipped with advanced surgical equipment and supported by experienced anaesthesiologists.",
				"The department collaborates closely with other specialties including gastroenterology, oncology, and radiology to offer comprehensive pre-operative assessment and post-operative care for every patient."
			],
			features: [
				"Laparoscopic & open surgeries",
				"Hernia repair (laparoscopic)",
				"Appendectomy & cholecystectomy",
				"Thyroid & parathyroid surgery",
				"Breast surgery & lump removal",
				"Colorectal surgery",
				"Emergency & trauma surgery",
				"Day care surgical procedures"
			]
		},

		obstetrics: {
			title: "Obstetrics & Gynaecology",
			img: "images/department/gynecologist.webp",
			desc: "The Department of Obstetrics & Gynaecology at MedCare Hospital provides comprehensive healthcare services for women at every stage of life. From adolescence to menopause, our team of experienced gynaecologists and obstetricians deliver compassionate and evidence-based care in a safe and supportive environment.",
			about: [
				"Our Obstetrics unit offers complete maternity care from pre-conception counseling through antenatal care, safe delivery, and postnatal follow-up. Our labour rooms and operation theatres are equipped with the latest monitoring systems to ensure the safety of both mother and baby.",
				"The Gynaecology unit specializes in the management of menstrual disorders, polycystic ovarian syndrome (PCOS), uterine fibroids, endometriosis, ovarian cysts, and gynaecological cancers. We offer minimally invasive laparoscopic and hysteroscopic procedures for faster recovery.",
				"We also have a dedicated fertility and reproductive medicine clinic offering infertility evaluation and assisted reproductive technologies (ART) including IUI and IVF, helping couples achieve their dream of parenthood."
			],
			features: [
				"Antenatal & postnatal care",
				"Normal & caesarean deliveries",
				"High-risk pregnancy management",
				"PCOS & menstrual disorder treatment",
				"Laparoscopic gynaecological surgery",
				"Fertility & infertility evaluation",
				"Hysteroscopy & colposcopy",
				"Gynaecological cancer screening"
			]
		},

		generalmedicine: {
			title: "General Medicine",
			img: "images/department/checkup.webp",
			desc: "The Department of General Medicine at MedCare Hospital is the primary point of contact for patients seeking diagnosis and treatment of a broad spectrum of medical conditions. Our physicians provide holistic, patient-centered care for both acute and chronic illnesses, coordinating with specialists when needed.",
			about: [
				"General Medicine forms the backbone of our hospital's clinical services. Our physicians are trained to diagnose and manage a wide variety of conditions including fever, infections, diabetes, hypertension, thyroid disorders, respiratory illnesses, and neurological conditions.",
				"We offer comprehensive health check-up packages designed for early detection and prevention of diseases. Our team takes a thorough approach — evaluating symptoms, ordering appropriate investigations, and creating individualized treatment plans for every patient.",
				"For patients with multiple or complex medical conditions, our general medicine team acts as a care coordinator, ensuring seamless communication between various specialist departments and providing continuity of care throughout the patient's journey."
			],
			features: [
				"Fever, infection & viral illness management",
				"Diabetes & hypertension management",
				"Thyroid & endocrine disorders",
				"Respiratory illness treatment",
				"Comprehensive health check-up packages",
				"Chronic disease management",
				"Preventive health counseling",
				"Referral & specialist coordination"
			]
		}

	};

	// ✅ LOAD DATA
	if (dept && data[dept]) {
		const d = data[dept];

		// Page hero title
		document.getElementById("deptTitle").innerText = d.title;

		// Content section heading
		document.getElementById("deptHeading").innerText = d.title;

		// Main image
		document.getElementById("deptImg").src = d.img;
		document.getElementById("deptImg").alt = d.title;

		// Short description
		document.getElementById("deptDesc").innerText = d.desc;

		// About paragraphs
		const aboutContainer = document.getElementById("deptAbout");
		aboutContainer.innerHTML = "";
		d.about.forEach(function (para) {
			aboutContainer.innerHTML += `<p class="mb-3">${para}</p>`;
		});

		// Features list
		const list = document.getElementById("deptFeatures");
		list.innerHTML = "";
		d.features.forEach(function (f) {
			list.innerHTML += `<li><i class="icofont-check mr-2"></i>${f}</li>`;
		});

	} else {
		document.getElementById("deptTitle").innerText = "Department Not Found";
		document.getElementById("deptHeading").innerText = "Department Not Found";
		document.getElementById("deptDesc").innerText = "Please go back and select a valid department.";
		document.getElementById("deptImg").style.display = "none";
	}


	/* =============================================
							 Map
	============================================== */

	var map;

	function initialize() {
		var mapOptions = {
			zoom: 13,
			center: new google.maps.LatLng(50.97797382271958, -114.107718560791)
			// styles: style_array_here
		};
		map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	}

	var google_map_canvas = $('#map-canvas');

	if (google_map_canvas.length) {
		google.maps.event.addDomListener(window, 'load', initialize);
	}

	// Counter

	$('.counter-stat span').counterUp({
		delay: 10,
		time: 1000
	});


	// Shuffle js filter and masonry
	var Shuffle = window.Shuffle;
	var jQuery = window.jQuery;

	var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
		itemSelector: '.shuffle-item',
		buffer: 1
	});

	jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
		var input = evt.currentTarget;
		if (input.checked) {
			myShuffle.filter(input.value);
		}
	});

})(jQuery);
