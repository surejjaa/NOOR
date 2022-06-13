fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Services')
  .then(response => {
    return response.json();
  })
  .then(data => {
    renderService(data);
  })

const renderService = (services) => {
  const servicesRow = document.getElementById('service-row');
  let resultHtml = '';

  services.forEach(service => {
    resultHtml += `
       <div class="card col-4 mx-2 my-2" style="width: 18rem;">
            <img class="imgCard" src= "${service.photoUrl}" class="card-img-top" alt="service">
             <div class="card-body">
                 <h5 class="card-title">${service.name}</h5>
                 <button type="button" class="btn delete" onclick="deleteService(${service.id})">Delete</button>
             </div>
         </div>`;
  });

  servicesRow.innerHTML = resultHtml;
}
//Put updejta resurs na bekendu
const editServices = () => {
  const service_ID = document.getElementById('service-ID').value;
  const service_Name = document.getElementById('service-n').value;
  const service_Price = document.getElementById('service-p').value;
  const service_Image = document.getElementById('service-i').value;
  fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Services', {
      method: 'PUT',
      headers: new Headers({
        'content-type': 'application/json'
      }),
      body: JSON.stringify({
        id: service_ID,
        name: service_Name,
        price: service_Price,
        photoUrl: service_Image
      })
    })
    .then(res => {
      console.log(res);
    })
}

const addService = () => {
  const serviceID = document.getElementById('service-id').value;
  const serviceName = document.getElementById('service-name').value;
  const servicePrice = document.getElementById('service-price').value;
  const serviceImage = document.getElementById('service-image').value;

  fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Services`, {
      method: 'POST',
      headers: new Headers({
        'content-type': 'application/json'
      }),
      body: JSON.stringify({

        id: serviceID,
        name: serviceName,
        price: servicePrice,
        photoUrl: serviceImage

      })
    })
    .then(res => {
      console.log(res);
    })

}

const deleteService = (id) => {
  fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Services/${id}`, {
      method: 'DELETE'
    })
    .then(res => {
      console.log(res);
    })
}