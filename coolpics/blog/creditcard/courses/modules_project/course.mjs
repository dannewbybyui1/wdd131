// Course.mjs

const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
    { sectionNum: 1, roomNum: "STC 353", enrolled: 26, days: "TTh", instructor: "Bro T" },
    { sectionNum: 2, roomNum: "STC 347", enrolled: 25, days: "TTh", instructor: "Sis A" }
    ],

  // Add or remove a student
    changeEnrollment(sectionNum, add = true) {
    const sectionIndex = this.sections.findIndex(
    (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
    if (add) this.sections[sectionIndex].enrolled++;
    else this.sections[sectionIndex].enrolled--;
      this.renderSections(this.sections); // update table
    }
    },

  // Show course info in HTML
    setCourseInfo() {
    document.querySelector("#courseName").textContent = this.name;
    document.querySelector("#courseCode").textContent = this.code;
    },

  // Render table of sections
    renderSections(sections) {
    const html = sections.map(
    (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td>
    </tr>`
    );
    document.querySelector("#sections").innerHTML = html.join("");
    },

  // Initialize everything
    init() {
    this.setCourseInfo();
    this.renderSections(this.sections);
    }
};

// Make this object available to import
export default aCourse;
