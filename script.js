let searchInput = document.getElementById("search-bar")
let result = document.getElementById("hasil-search")

searchInput.addEventListener("click", function () {
    const keyword = searchInput.value.trim();
    console.log("Tes klik")
    if (keyword === "") {
        result.textContent = "Silakan masukkan kata pencarian.";
    }

    result.textContent = `Anda mencari: ${keyword}`;
});

searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        const keyword = searchInput.value.trim()
        console.log(keyword)
        event.preventDefault()
        result.innerText = `Anda Mengetik ${keyword}`
        window.open(`https://google.com/search?q=${keyword}`)
    }
})