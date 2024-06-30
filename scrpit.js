document.addEventListener('DOMContentLoaded', () => {
    const gradeCalculatorForm = document.getElementById('gradeCalculatorForm');

    gradeCalculatorForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let totalMarks = 0;
        let subjectCount = 4;  // Physics, Chemistry, Math, English

        for (let i = 1; i <= subjectCount; i++) {
            const subjectMarks = parseInt(document.getElementById(`subjectMarks${i}`).value);
            totalMarks += subjectMarks;
        }

        const optionalSubjectMarks = document.getElementById('subjectMarks5').value;
        if (optionalSubjectMarks !== "") {
            totalMarks += parseInt(optionalSubjectMarks);
            subjectCount++;
        }

        const percentage = (totalMarks / (subjectCount * 100)) * 100;
        let grade;
        if (percentage >= 90) {
            grade = 'A';
        } else if (percentage >= 80) {
            grade = 'B';
        } else if (percentage >= 70) {
            grade = 'C';
        } else if (percentage >= 60) {
            grade = 'D';
        } else {
            grade = 'F';
        }

        document.getElementById('totalMarks').textContent = `Total Marks: ${totalMarks}`;
        document.getElementById('averagePercentage').textContent = `Percentage: ${percentage.toFixed(2)}%`;
        document.getElementById('grade').textContent = `Grade: ${grade}`;
    });
});
