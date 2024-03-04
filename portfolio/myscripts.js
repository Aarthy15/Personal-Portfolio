document.addEventListener('DOMContentLoaded', function () {
    const tabLinks = document.querySelectorAll('.tab-links');
    tabLinks.forEach(function (tabLink) {
        tabLink.addEventListener('click', function () {
            const contentId = tabLink.getAttribute('data-content');
            const contentToShow = document.getElementById(contentId);

            // Hide all tab contents
            const allTabContents = document.querySelectorAll('.tab-contents');
            allTabContents.forEach(function (tabContent) {
                tabContent.style.display = 'none';
            });

            // Show the selected tab content
            contentToShow.style.display = 'block';

            // Activate the clicked tab link
            tabLinks.forEach(function (link) {
                link.classList.remove('active-link');
            });
            tabLink.classList.add('active-link');
        });
    }); 
});





    