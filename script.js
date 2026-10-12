// Mobile navigation
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.textContent = isOpen ? '✕' : '☰';
  });
}

// Interactive application-sector switcher
const sectorData = {
  government: {
    number: '01 / E-GOVERNANCE',
    title: 'Public services, with fewer paper trails.',
    description: 'Government departments can use digital signatures to authenticate electronic records and approve transactions through secure workflows.',
    bullets: ['Online applications and declarations', 'Digitally signed certificates and official orders', 'Procurement documents and approvals'],
    exampleTitle: 'Example workflow',
    example: 'An officer signs an electronic approval. The recipient checks the certificate and signature before relying on the document.',
    imageClass: 'government-image',
    label: 'DIGITAL PUBLIC SERVICES'
  },
  finance: {
    number: '02 / BANKS & FINANCE',
    title: 'Financial services with stronger document checks.',
    description: 'Banks and financial organizations can integrate digital signatures into customer onboarding, agreements, and internal approvals.',
    bullets: ['Loan and account-opening documents', 'Digital contracts and investment paperwork', 'Approvals for financial operations'],
    exampleTitle: 'Example workflow',
    example: 'A customer signs a digital loan agreement. The bank verifies the signature and maintains the signed record within its approved workflow.',
    imageClass: 'finance-image',
    label: 'DIGITAL FINANCIAL SERVICES'
  },
  health: {
    number: '03 / HEALTHCARE',
    title: 'Reliable records for connected care.',
    description: 'Hospitals, clinics, and health networks can use digital signatures to support the authenticity and integrity of approved electronic records.',
    bullets: ['Clinician-approved reports and referrals', 'Electronic prescriptions where permitted', 'Consent forms and administrative records'],
    exampleTitle: 'Example workflow',
    example: 'An authorized clinician digitally signs a report. The receiving care team checks the signature and access permissions before using it.',
    imageClass: 'health-image',
    label: 'CONNECTED HEALTHCARE'
  }
};
const tabs = document.querySelectorAll('.sector-tab');
const panel = document.querySelector('#sector-panel');
function selectSector(key) {
  if (!panel || !sectorData[key]) return;
  const data = sectorData[key];
  tabs.forEach(tab => {
    const active = tab.dataset.sector === key;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', String(active));
  });
  panel.querySelector('.sector-image').className = `sector-image ${data.imageClass}`;
  panel.querySelector('.image-overlay-label').textContent = data.label;
  panel.querySelector('.sector-content .eyebrow').textContent = data.number;
  panel.querySelector('.sector-content h3').textContent = data.title;
  panel.querySelector('.sector-content > p').textContent = data.description;
  const list = panel.querySelector('.sector-content ul');
  list.replaceChildren(...data.bullets.map(item => {
    const li = document.createElement('li');
    li.textContent = item;
    return li;
  }));
  panel.querySelector('.example-box b').textContent = data.exampleTitle;
  panel.querySelector('.example-box p').textContent = data.example;
}
tabs.forEach(tab => tab.addEventListener('click', () => selectSector(tab.dataset.sector)));

// Make FAQ plus icons reflect open/closed state.
document.querySelectorAll('details').forEach(item => {
  item.addEventListener('toggle', () => {
    const icon = item.querySelector('summary span');
    if (icon) icon.textContent = item.open ? '−' : '＋';
  });
});
