// Base course object with sections
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
    { sectionNum: 1, roomNum: "STC 353", enrolled: 26, days: "TTh", instructor: "Bro T" },
    { sectionNum: 2, roomNum: "STC 347", enrolled: 28, days: "TTh", instructor: "Sis A" }
    ],

  // Enroll a student in a section
    enrollStudent(sectionNum) {
    const idx = this.sections.findIndex(s => s.sectionNum == sectionNum);
    if (idx >= 0) {
    this.sections[idx].enrolled++;
    renderSections(this.sections);
    } else {
    console.warn("Section not found:", sectionNum);
    }
    },

  // Drop a student from a section
    dropStudent(sectionNum) {
    const idx = this.sections.findIndex(s => s.sectionNum == sectionNum);
    if (idx >= 0 && this.sections[idx].enrolled > 0) {
    this.sections[idx].enrolled--;
    renderSections(this.sections);
    } else {
    console.warn("Cannot drop: section not found or zero enrolled", sectionNum);
    }
    }
};

// Function to show course name and code in the HTML
function setCourseInfo(course) {
    document.querySelector("#courseName").textContent = course.name;
    document.querySelector("#courseCode").textContent = course.code;
}

// Function to render all sections in the table
function renderSections(sections) {
    const sectionBody = document.querySelector("#sections");
  sectionBody.innerHTML = ""; // clear table first
    sections.forEach(section => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td>
    `;
    sectionBody.appendChild(row);
    });
}

// Initial render
setCourseInfo(aCourse);
renderSections(aCourse.sections);

// Event listeners for buttons
document.querySelector("#enrollStudent").addEventListener("click", () => {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});

document.querySelector("#dropStudent").addEventListener("click", () => {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.dropStudent(sectionNum);
});
