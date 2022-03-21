function sumSalary(salaries) {
  let sum = 0;
  for (let key in salaries) {
    if (typeof salaries[key] == 'number') {
      if (isNaN(salaries[key]) == false && isFinite(salaries[key]) == true) {
      	sum += salaries[key];
      }
  	}
  }
  return sum;
}



