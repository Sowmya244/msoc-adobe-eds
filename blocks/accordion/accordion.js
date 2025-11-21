export default function decorate(block) {
  block.querySelectorAll(':scope > div').forEach((row) => {
    const header = row.children[0];
    const content = row.children[1];

    // Add classes
    header.classList.add('accordion-header');
    content.classList.add('accordion-content');

    // Hide content initially
    content.style.display = 'none';

    // Click toggle
    header.addEventListener('click', () => {
      const isOpen = content.style.display === 'block';
      content.style.display = isOpen ? 'none' : 'block';
      header.classList.toggle('open', !isOpen);
    });
  });
}
