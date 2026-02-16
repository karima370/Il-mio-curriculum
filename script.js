// Carica i dati dal file JSON
let cvData = {};

// Funzione per caricare i dati
async function loadData() {
    try {
        const response = await fetch('data.json');
        cvData = await response.json();
        populatePage();
    } catch (error) {
        console.error('Errore nel caricamento dei dati:', error);
    }
}

// Popola la pagina con i dati
function populatePage() {
    // Profile
    document.getElementById('fullName').textContent = cvData.profile.fullName;
    document.getElementById('jobTitle').textContent = cvData.profile.jobTitle;
    document.getElementById('profileImg').src = cvData.profile.profileImage;
    document.getElementById('profileImg').alt = cvData.profile.fullName;
    document.getElementById('email').textContent = '📧 ' + cvData.profile.email;
    document.getElementById('phone').textContent = '📱 ' + cvData.profile.phone;
    document.getElementById('location').textContent = '📍 ' + cvData.profile.location;
    
    // Social links
    document.getElementById('linkedinLink').href = cvData.profile.social.linkedin;
    document.getElementById('githubLink').href = cvData.profile.social.github;
    document.getElementById('portfolioLink').href = cvData.profile.social.portfolio;
    
    // About
    document.getElementById('about').textContent = cvData.profile.about;
    
    // Last update
    const lastUpdateDate = new Date(cvData.lastUpdate);
    document.getElementById('lastUpdate').textContent = formatDate(lastUpdateDate);
    
    // Version
    document.getElementById('version').textContent = cvData.version;
    
    // Skills
    populateSkills();
    
    // Experience
    populateExperience();
    
    // Education
    populateEducation();
    
    // Projects
    populateProjects();
    
    // Languages
    populateLanguages();
    
    // Certifications
    populateCertifications();
}

// Popola le competenze
function populateSkills() {
    const container = document.getElementById('skillsContainer');
    container.innerHTML = '';
    
    cvData.skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill';
        skillElement.innerHTML = `
            <div class="skill-name">${skill.name}</div>
            <div class="skill-level">${skill.level}</div>
        `;
        container.appendChild(skillElement);
    });
}

// Popola l'esperienza lavorativa
function populateExperience() {
    const container = document.getElementById('experienceContainer');
    container.innerHTML = '';
    
    cvData.experience.forEach(exp => {
        const expElement = document.createElement('div');
        expElement.className = 'experience-item';
        expElement.innerHTML = `
            <div class="experience-title">${exp.title}</div>
            <div class="experience-company">${exp.company}</div>
            <div class="experience-date">${exp.startDate} - ${exp.endDate}</div>
            <div class="experience-description">${exp.description}</div>
        `;
        container.appendChild(expElement);
    });
}

// Popola la formazione
function populateEducation() {
    const container = document.getElementById('educationContainer');
    container.innerHTML = '';
    
    cvData.education.forEach(edu => {
        const eduElement = document.createElement('div');
        eduElement.className = 'education-item';
        eduElement.innerHTML = `
            <div class="education-title">${edu.title}</div>
            <div class="education-institution">${edu.institution}</div>
            <div class="education-date">${edu.startDate} - ${edu.endDate}</div>
            <div class="education-description">${edu.description}</div>
        `;
        container.appendChild(eduElement);
    });
}

// Popola i progetti
function populateProjects() {
    const container = document.getElementById('projectsContainer');
    container.innerHTML = '';
    
    cvData.projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-card';
        projectElement.innerHTML = `
            <div class="project-title">${project.title}</div>
            <div class="project-description">${project.description}</div>
            <a href="${project.link}" target="_blank" class="project-link">Visualizza →</a>
        `;
        container.appendChild(projectElement);
    });
}

// Popola le lingue
function populateLanguages() {
    const container = document.getElementById('languagesContainer');
    container.innerHTML = '';
    
    cvData.languages.forEach(language => {
        const langElement = document.createElement('div');
        langElement.className = 'language-item';
        langElement.innerHTML = `
            <div class="language-name">${language.name}</div>
            <div class="language-level">${language.level}</div>
        `;
        container.appendChild(langElement);
    });
}

// Popola le certificazioni
function populateCertifications() {
    const container = document.getElementById('certificationsContainer');
    container.innerHTML = '';
    
    cvData.certifications.forEach(cert => {
        const certElement = document.createElement('div');
        certElement.className = 'certification-item';
        certElement.innerHTML = `
            <div class="certification-name">✓ ${cert.name}</div>
            <div class="certification-issuer">${cert.issuer}</div>
            <div class="certification-date">${cert.date}</div>
        `;
        container.appendChild(certElement);
    });
}

// Formatta la data
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('it-IT', options);
}

// Carica i dati al caricamento della pagina
document.addEventListener('DOMContentLoaded', loadData);

// Funzione per aggiornare manualmente i dati (opzionale)
function refreshData() {
    loadData();
    console.log('Dati aggiornati alle:', new Date().toLocaleTimeString('it-IT'));
}

// Aggiorna i dati ogni ora (3600000 ms)
setInterval(refreshData, 3600000);
