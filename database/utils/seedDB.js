const { Campus, Student } = require('../models');

const seedDB = async () => {
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		address: "Check google maps",
		description: "This is a school in NYC."
	});
	const dummy_campus2 = await Campus.create({
		name: "Harvard",
		address: "Check google maps",
		description: "This is a school in MA."
	});

	const dummy_student = await Student.create({
			firstname: "Joe",
      		lastname: "Shmo",
			email: "wow@gmail.com",
			gpa: 3.9
		});

	const dummy_student2 = await Student.create({
			firstname: "this",
      		lastname: "person",
			email: "someone@gmail.com",
			gpa: 4.0
		});

	await dummy_student.setCampus(dummy_campus);
	await dummy_student2.setCampus(dummy_campus2);
	
}

module.exports = seedDB;