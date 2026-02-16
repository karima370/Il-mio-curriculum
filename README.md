# Il Curriculum di Karima Theraya

Un sito web moderno e responsive per pubblicare e aggiornare continuamente il curriculum di Karima Theraya.

## 🌟 Caratteristiche

- **Design Moderno e Responsive**: Interfaccia elegante che si adatta a tutti i dispositivi
- **Aggiornamenti Facili**: Modifica il file `data.json` per aggiornare il curriculum
- **Sezioni Complete**: Profilo, competenze, esperienza, formazione, progetti, lingue e certificazioni
- **Stili Professionali**: CSS moderno con animazioni e hover effects
- **Mobile First**: Ottimizzato per dispositivi mobili e desktop
- **Auto-refresh**: I dati si aggiornano automaticamente ogni ora

## 📁 Struttura del Progetto

```
Il-mio-curriculum/
├── index.html          # Pagina principale
├── style.css           # Stili CSS
├── script.js           # Logica JavaScript
├── data.json           # Dati del curriculum (MODIFICARE QUI)
└── README.md           # Questo file
```

## 🚀 Come Iniziare

### 1. Clonare il Repository
```bash
git clone https://github.com/karima370/Il-mio-curriculum.git
cd Il-mio-curriculum
```

### 2. Aprire il Sito Localmente
Semplicemente aprire il file `index.html` in un browser web, oppure usare un server locale:

```bash
# Usando Python 3
python -m http.server 8000

# Oppure usando Node.js (con http-server)
npx http-server
```

Poi visitare: `http://localhost:8000`

### 3. Aggiornare il Curriculum
Modificare il file `data.json` con le informazioni personali:

```json
{
  "profile": {
    "fullName": "Karima Theraya",
    "jobTitle": "Professionista Dinamica",
    "email": "tua-email@example.com"
  }
}
```

## 📝 Guida Modifica Dati

### Profilo
- `fullName`: Nome completo
- `jobTitle`: Titolo professionale
- `profileImage`: URL dell'immagine profilo
- `about`: Descrizione personale
- `email`, `phone`, `location`: Informazioni di contatto
- `social`: Link ai social network

### Competenze
Aggiungere elementi nell'array `skills`:
```json
{
  "name": "JavaScript",
  "level": "Avanzato"
}
```

## 🎨 Personalizzazione Stile

Modificare le variabili CSS in `style.css` nella sezione `:root`:

```css
:root {
    --primary-color: #2c3e50;      /* Colore primario */
    --secondary-color: #3498db;    /* Colore secondario */
    --accent-color: #e74c3c;       /* Colore accento */
}
```

## 🔄 Aggiornamento Automatico

Il sito è configurato per auto-refresh ogni ora. Per forzare l'aggiornamento manuale, aprire la console del browser (F12) e digitare:

```javascript
refreshData()
```

## 🌐 Distribuire Online

### Opzione 1: GitHub Pages
1. Spingere il repository su GitHub
2. Andare in Settings → Pages
3. Selezionare "main" branch come Source
4. Il sito sarà disponibile a: `https://karima370.github.io/Il-mio-curriculum`

### Opzione 2: Netlify
1. Collegare il repository GitHub a Netlify
2. Deploy automatico a ogni push

### Opzione 3: Vercel
1. Importare il progetto da GitHub
2. Deploy automatico

## 👤 Autore

**Karima Theraya**
- LinkedIn: [linkedin.com/in/karima-theraya](https://linkedin.com/in/karima-theraya)
- GitHub: [@karima370](https://github.com/karima370)

---

**Nota**: Questo sito viene continuamente aggiornato per riflettere l'esperienza e le competenze più recenti di Karima Theraya. 
