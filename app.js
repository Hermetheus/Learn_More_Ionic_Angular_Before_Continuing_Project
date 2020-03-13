const courseName = document.querySelector('#course-name');
const courseRating = document.querySelector('#course-rating');
const addCourse = document.querySelector('#btn-add');
const courseList = document.querySelector('#course-list');

addCourse.addEventListener('click', () => {
  const course = courseName.value;
  const rating = courseRating.value;

  if (course.trim().length <= 0 || rating <= 0 || rating.trim().length <= 0) {
    const alert = document.createElement('ion-alert');
    alert.header = 'Invalid inputs';
    alert.message = 'Please enter a valid reason and rating!';
    alert.buttons = ['Okay'];
    document.body.appendChild(alert);
    return alert.present();
  }

  const newCourse = document.createElement('ion-item');

  newCourse.textContent = course + ' ' + '(' + rating + ')';
  if (rating >= 1 && rating <= 5) {
    return courseList.appendChild(newCourse);
  } else {
    const alert = document.createElement('ion-alert');
    alert.header = 'Invalid rating!';
    alert.message = 'Please enter a valid rating!';
    alert.buttons = ['Okay'];
    document.body.appendChild(alert);
    return alert.present();
  }
});
