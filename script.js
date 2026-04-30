document.getElementById('button').addEventListener('click', function () {
  const base = 'https://localhost:8080/';
  const params = new URLSearchParams();

  const name = document.getElementById('name').value.trim();
  const year = document.getElementById('year').value.trim();

  if (name) params.append('name', name);
  if (year) params.append('year', year);

  const queryString = params.toString();
  document.getElementById('url').textContent = queryString
    ? base + '?' + queryString
    : base;
});
