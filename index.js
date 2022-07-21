const mongoose = require('mongoose');
const studentSchems = require('./model/model.student');

mongoose.connect(
  'mongodb://localhost:27017/school',
  () => {
    console.log('connected setup');
  },
  (e) => {
    console.log(e);
  }
);

const createStudent = async () => {
  // create student is promise that why we use async awit
  try {
    const student = await studentSchems.create({
      name: 'shuanu',
      age: 17,
      email: '668@8f9skjd12@2',
      subject: ['math', 'hindi'],
    });
    // const student1 = await studentSchems.create({
    //   name: 'shuanu',
    //   age: 18,
    //   email: 'r@55@6@6@@788@8f912@2',
    //   subject: ['math', 'hindi'],
    // });
    // const student2 = await studentSchems.create({
    //   name: 'shuanu',
    //   age: 19,
    //   email: 'k@55@66788@8f9@@12@2',
    //   subject: ['english', 'hindi'],
    // });
    // const student3 = await studentSchems.create({
    //   name: 'bhuanu',
    //   age: 18,
    //   email: 'kr@55@@@788@8f912@2',
    //   subject: ['math', 'english'],
    // });
    // // comment out this to see result
    // console.log(student);
  } catch (e) {
    console.log(e);
  }
};
createStudent();

/**
 *search data from database
 * serach student by id
 */

const searchStudentById = async () => {
  try {
    let student = await studentSchems.findById('62d93355146b5e1be391f222');
    // comment out this to see result
    // console.log(student);
  } catch (e) {
    console.log(e);
  }
};

searchStudentById();
/**
 * search based on particular field
 * let see we will search based on name
 */
const searchBasedOnQuerry = async () => {
  try {
    let student = await studentSchems.find({ name: 'shanu' });
    // comment out this to see result
    // console.log(student);
  } catch (e) {
    console.log(e);
  }
};
searchBasedOnQuerry();
/**
 * search based on multiple field
 * let see we will search based on name
 */
const searchchBasedOnMultipleField = async () => {
  try {
    let student = await studentSchems.find({ name: 'shuanu', age: 18 });
    // comment out this to see result
    // console.log(student);
  } catch (e) {
    console.log(e);
  }
};
searchchBasedOnMultipleField();

/**
 * to get one result at a time
 */
const findOneResult = async () => {
  try {
    // comment out this to see result
    const student = await studentSchems.findOne({ name: 'shuanu' });
    console.log(student);
  } catch (e) {
    console.log(e);
  }
};
findOneResult();
