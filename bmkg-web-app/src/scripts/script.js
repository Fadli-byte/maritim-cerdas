// JavaScript code for the BMKG web application

// Function to toggle the navigation menu
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Function to scroll to a specific section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Function to show a specific topic in a modal
function showTopic(topic) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const videoPlaceholder = document.getElementById('videoPlaceholder');

    // Set modal content based on the topic
    switch (topic) {
        case 'meteorologi':
            modalTitle.textContent = 'Meteorologi';
            modalDescription.textContent = 'Ilmu tentang cuaca.';
            videoPlaceholder.textContent = 'Video tentang Meteorologi akan ditampilkan di sini.';
            break;
        case 'klimatologi':
            modalTitle.textContent = 'Klimatologi';
            modalDescription.textContent = 'Ilmu tentang iklim.';
            videoPlaceholder.textContent = 'Video tentang Klimatologi akan ditampilkan di sini.';
            break;
        case 'geofisika':
            modalTitle.textContent = 'Geofisika';
            modalDescription.textContent = 'Ilmu tentang bumi.';
            videoPlaceholder.textContent = 'Video tentang Geofisika akan ditampilkan di sini.';
            break;
        default:
            modalTitle.textContent = 'Topik Tidak Dikenal';
            modalDescription.textContent = 'Deskripsi tidak tersedia.';
            videoPlaceholder.textContent = '';
    }

    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Function to close the modal when clicking outside of it
function closeModalOnOutside(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Function to activate the virtual assistant
function activateCera() {
    alert('Cera is now activated! How can I assist you?');
}

// Function to start a tour with Cera
function startCeraTour() {
    alert('Starting a tour with Cera!');
}

// Function to toggle the Cera bubble
function toggleCeraBubble() {
    const ceraBubble = document.getElementById('ceraBubble');
    ceraBubble.classList.toggle('active');
}

// Function to close the Cera bubble
function closeCeraBubble() {
    const ceraBubble = document.getElementById('ceraBubble');
    ceraBubble.classList.remove('active');
}