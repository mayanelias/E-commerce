function deleteProduct(id) {
    axios
        .delete(`/products/${id}`)
        .then(function (response) {
window.setTimeout(function(){location.reload()},0);
            console.log(response.data);
        alert("Deleted!!!")
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}