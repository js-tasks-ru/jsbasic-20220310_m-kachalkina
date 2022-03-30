<<<<<<< HEAD
function showSalary(users, age) {
  return users
    .filter(item => item.age <= age)
    .map(item => `${item.name}, ${item.balance}`)
    .join('\n')
=======
function showSalary(data, age) {
  return data
    .filter(item => item.age <= age)
    .map(item => `${item.name}, ${item.balance}`)
    .join('\n');
>>>>>>> 12fa5a7e5655b3e09490df9380aff033b6cc97bb
}
