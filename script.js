
const experiences = {

    philsa: {
        title: "Spacecraft Structural Design Associate",
        company: "Philippine Space Agency",
        date: "JUL 2025 – SEP 2025",

        description: [
            "Supported spacecraft structural design activities using CATIA, applying CAD modeling and engineering design principles.",
            "Conducted design research and reviewed CubeSat structural configurations to support spacecraft development activities.",
            "Collaborated with engineers and technical personnel on spacecraft structural design tasks."
        ]
    },


    maintenance: {
    title: "Aircraft Maintenance OJT",
    company: "International Aircraft Solution Maintenance Corporation",
    date: "NOV 2022",

    description: [
        "Performed 25-hour, 50-hour, and 100-hour inspections on Cessna 152 and 172 aircraft under the guidance of aircraft maintenance professionals.",
        "Gained hands-on experience identifying, inspecting, and servicing aircraft components and systems.",
        "Performed an aircraft run-up of a Cessna 152 as part of hands-on maintenance training."
    ]
},


    dbf: {
        title: "Design / Build / Fly Team Member",
        company: "AIAA Design / Build / Fly",
        date: "2023 – 2026",

        description: [
            "Contributed to the construction and flight testing of competition aircraft.",
            "Worked on electrical wiring, soldering, and mechanical control linkages.",
            "Collaborated with an interdisciplinary student aircraft design team."
        ]
    },


    grader: {
        title: "Fluid Dynamics Grader",
        company: "Embry-Riddle Aeronautical University",
        date: "SUMMER B 2025",

        description: [
            "Graded undergraduate Fluid Dynamics assignments and supported course assessment.",
            "Evaluated engineering solutions involving fluid mechanics principles.",
            "Supported the instructor with homework grading."
        ]
    },


    admissions: {
        title: "Student Assistant",
        company: "International Admissions | Embry-Riddle",
        date: "SPRING 2025",

        description: [
            "Supported international applicants throughout the admissions process.",
            "Assisted with document verification, data entry, and applicant communications.",
            "Worked with university staff to maintain accurate international applicant records."
        ]
    },


    spaceweek: {
    title: "Founder & Lead Organizer — Space Week",
    company: "Silliman University",
    date: "November 2022",

    description: [
        "Spearheaded the school's first-ever Space Week, creating a space-focused STEM experience that engaged hundreds of students.",
        "Organized telescope viewing with Physics faculty, giving students the opportunity to observe the Moon and explore astronomy.",
        "Developed a sustainable rocket propulsion competition and aerospace art exhibition using recycled materials."
    ]
}

};



/* Grab all tabs */

const tabs = document.querySelectorAll(".experience-tab");


tabs.forEach(tab => {

    tab.addEventListener("click", function() {

        /* Remove active class */

        tabs.forEach(button => {
            button.classList.remove("active");
        });


        /* Add active class to clicked tab */

        this.classList.add("active");


        /* Find experience */

        const experienceName =
            this.getAttribute("data-experience");

        const experience =
            experiences[experienceName];


        /* Update text */

        document.getElementById("experience-title").textContent =
            experience.title;

        document.getElementById("experience-company").textContent =
            experience.company;

        document.getElementById("experience-date").textContent =
            experience.date;


        /* Update bullets */

        const description =
            document.getElementById("experience-description");

        description.innerHTML = "";


        experience.description.forEach(item => {

            const paragraph =
                document.createElement("p");

            paragraph.innerHTML =
                `<span class="arrow">▹</span>
                 <span>${item}</span>`;

            description.appendChild(paragraph);

        });

    });

});
