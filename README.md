# Portfolio Jawhar - BTS SIO E5

Portfolio moderne et élégant pour l'épreuve E5 du BTS SIO, développé avec React, TypeScript, TailwindCSS et Framer Motion.

## ✨ Caractéristiques

- **UI/UX Premium** : Design luxe avec dégradés et animations fluides
- **Tableau de Compétences Interactif** : Filtrage par catégories avec preuves PDF
- **Système de PDFs** : Ouverture des preuves en nouvelle fenêtre
- **Responsive** : Optimisé pour tous les appareils
- **Animations** : Framer Motion pour des transitions élégantes
- **Mode Sombre** : Thème sombre avec accents or

## 🚀 Démarrage Rapide

### Installation

```bash
npm install
```

### Développement

```bash
npm run dev
```

Votre portfolio s'ouvrira automatiquement sur `http://localhost:3000`

### Build pour la Production

```bash
npm run build
```

## 📁 Structure du Projet

```
portfolio-jawhar/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## 🎨 Personnalisation

### Modifier les Couleurs

Mettez à jour `tailwind.config.js`:

```js
colors: {
  primary: '#D4AF37',      // Couleur principale (or)
  secondary: '#1a1a1a',    // Couleur secondaire
  accent: '#ffffff',       // Couleur accent
  // ...
}
```

### Ajouter vos Compétences

Modifiez le tableau dans `src/components/Skills.tsx`:

```typescript
const skillsData = [
  {
    category: 'Frontend',
    skills: [
      {
        name: 'React',
        level: 90,
        description: 'Votre description',
        projects: ['Vos projets'],
        proofUrl: '/pdfs/votre-preuve.pdf',
      },
      // ...
    ],
  },
  // ...
]
```

### Ajouter les PDFs

1. Créez un dossier `public/pdfs/`
2. Ajoutez vos fichiers PDF dedans
3. Mettez à jour les `proofUrl` dans `Skills.tsx`

## 📦 Dépendances Principales

- **React 18** : Framework UI
- **TypeScript** : Typage statique
- **TailwindCSS** : Framework CSS utilitaire
- **Framer Motion** : Animations fluides
- **Lucide React** : Icônes modernes
- **Vite** : Build tool rapide

## 🚢 Déploiement

### Vercel (Recommandé)

```bash
npm install -g vercel
vercel
```

### Netlify

1. Poussez votre code sur GitHub
2. Connectez votre repo à Netlify
3. Deploiement automatique!

## 📝 Licence

Ce projet est personnel et libre d'utilisation.

## 💡 Conseils

- Remplacez les textes placeholder par vos vraies informations
- Organisez vos PDFs dans `public/pdfs/`
- Testez sur mobile avant de déployer
- Gardez les animations subtiles et élégantes

---

**Créé avec ❤️ par Jawhar**
