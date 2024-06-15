function showImage(button) {
  // Get the image container and image
  const imageContainer = button.nextElementSibling;
  const image = imageContainer.querySelector('img');

  // Get the lightbox container and image
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');

  // Set the lightbox image source
  lightboxImage.src = image.src;

  // Show the lightbox
  lightbox.style.display = 'block';

  // Add event listener to close the lightbox when clicked
  lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });
}