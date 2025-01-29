document.addEventListener("DOMContentLoaded", function() {
    //console.log("Document is ready!");
    // Your code here
    document.querySelector('form').addEventListener('submit', function(event) {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            event.preventDefault();
        }
    });

    document.getElementById('filter-input').addEventListener('keyup', filterProjects);
    function filterProjects() {
        var input, filter, cards, cardContainer, title, i;
        input = document.getElementById("filter-input");
        filter = input.value.toLowerCase();
        cardContainer = document.getElementById("projects");
        cards = cardContainer.getElementsByClassName("card");
        for (i = 0; i < cards.length; i++) {
            title = cards[i].getElementsByTagName("h3")[0];
            if (title.innerHTML.toLowerCase().indexOf(filter) > -1) {
                cards[i].style.display = "";
            } else {
                cards[i].style.display = "none";
            }
        }
    }

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get all images in the projects section and insert them inside the modal - use their "alt" text as a caption
    var images = document.querySelectorAll("#projects img");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    images.forEach(function(img) {
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    });

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        modal.style.display = "none";
    }
});