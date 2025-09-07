// DOM Elements
const form = document.getElementById('monster-form');
const generateBtn = document.getElementById('generate-card');
const downloadBtn = document.getElementById('download-card');
const languageSelect = document.getElementById('language-select');

// Translation system
const translations = {
    en: {
        'app-title': 'D&D Monster Card Maker',
        'app-subtitle': 'Create MTG-style cards for your D&D monsters',
        'monster-info': 'Monster Information',
        'monster-name': 'Monster Name:',
        'monster-name-placeholder': 'Enter monster name',
        'monster-type': 'Type & Size:',
        'monster-type-placeholder': 'e.g., Large dragon, chaotic evil',
        'type-aberration': '🧠 Aberration',
        'type-beast': '🐾 Beast',
        'type-celestial': '☀ Celestial',
        'type-construct': '⚙ Construct',
        'type-dragon': '🐲 Dragon',
        'type-elemental': '🔥 Elemental',
        'type-fey': '🧚 Fey',
        'type-fiend': '👹 Fiend',
        'type-giant': '⛰ Giant',
        'type-humanoid': '👤 Humanoid',
        'type-monstrosity': '🐙 Monstrosity',
        'type-ooze': '🟫 Ooze',
        'type-plant': '🌱 Plant',
        'type-undead': '☠ Undead',
        'type-custom': '📝 Custom',
        'armor-class': 'Armor Class:',
        'armor-class-placeholder': 'e.g., 18 (Natural Armor)',
        'hit-points': 'Hit Points:',
        'hit-points-placeholder': 'e.g., 256 (19d20 + 57)',
        'speed': 'Speed:',
        'speed-placeholder': 'e.g., 40 ft., fly 80 ft., swim 40 ft.',
        'challenge-rating': 'Challenge Rating:',
        'challenge-rating-placeholder': 'e.g., 17 (18,000 XP)',
        'monster-image': 'Image URL:',
        'monster-image-placeholder': 'https://example.com/monster.jpg',
        'monster-image-upload': 'Or Upload Image:',
        'monster-upload-placeholder': 'Choose image file...',
        'card-customization': 'Card Customization',
        'card-color': 'Card Color Theme:',
        'color-classic': 'Classic Brown',
        'color-red': 'Red (Fire/Dragons)',
        'color-blue': 'Blue (Water/Ice)',
        'color-green': 'Green (Nature/Beasts)',
        'color-black': 'Black (Undead/Fiends)',
        'color-white': 'White (Celestials/Light)',
        'color-purple': 'Purple (Aberrations/Psychic)',
        'color-metal': 'Metal (Constructs/Machines)',
        'color-gold': 'Gold (Legendary)',
        'card-logo': 'Card Type Logo:',
        'logo-none': 'No Logo',
        'logo-fire': 'Fire',
        'logo-water': 'Water',
        'logo-nature': 'Nature',
        'logo-lightning': 'Lightning',
        'logo-hammer': 'Hammer/Forge',
        'logo-combat': 'Combat',
        'logo-defense': 'Defense',
        'logo-death': 'Death/Undead',
        'logo-magic': 'Magic',
        'logo-royal': 'Royal/Noble',
        'logo-dragon': 'Dragon',
        'logo-night': 'Night/Shadow',
        'logo-light': 'Light/Holy',
        'logo-mind': 'Mind/Psychic',
        'logo-mechanical': 'Mechanical',
        'image-position': 'Image Position:',
        'horizontal': 'Horizontal:',
        'vertical': 'Vertical:',
        'scale': 'Scale:',
        'reset-position': 'Reset Position',
        'special-abilities': 'Special Abilities:',
        'actions': 'Actions:',
        'formatting-help': 'Use **bold**, *italic*, or ***bold italic*** for formatting',
        'special-abilities-placeholder': 'Enter special abilities, one per line. Use **bold** and *italic* formatting.',
        'actions-placeholder': 'Enter actions, one per line. Use **bold** and *italic* formatting.',
        'generate-card': 'Generate Card',
        'card-preview': 'Card Preview',
        'download-card': 'Download Card',
        'card-back-options': 'Card Back Options',
        'card-back-type': 'Back Type:',
        'back-logo': 'Logo Only (same color)',
        'back-image': 'Custom Image',
        'back-empty': 'Empty/Transparent',
        'back-text-overflow': 'Text Overflow (for long descriptions)',
        'back-image-url': 'Back Image URL:',
        'back-image-placeholder': 'https://example.com/back-image.jpg',
        'back-image-upload': 'Or Upload Image:',
        'back-upload-placeholder': 'Choose image file...',
        'str': 'STR:',
        'dex': 'DEX:',
        'con': 'CON:',
        'int': 'INT:',
        'wis': 'WIS:',
        'cha': 'CHA:',
        'str_abbrev': 'STR',
        'dex_abbrev': 'DEX',
        'con_abbrev': 'CON',
        'int_abbrev': 'INT',
        'wis_abbrev': 'WIS',
        'cha_abbrev': 'CHA'
    },
    pt: {
        'app-title': 'Criador de Cartas de Monstros D&D',
        'app-subtitle': 'Crie cartas estilo MTG para seus monstros de D&D',
        'monster-info': 'Informações do Monstro',
        'monster-name': 'Nome do Monstro:',
        'monster-name-placeholder': 'Digite o nome do monstro',
        'monster-type': 'Tipo e Tamanho:',
        'monster-type-placeholder': 'ex: Dragão Grande, caótico maligno',
        'type-aberration': '🧠 Aberração',
        'type-beast': '🐾 Fera',
        'type-celestial': '☀ Celestial',
        'type-construct': '⚙ Constructo',
        'type-dragon': '🐲 Dragão',
        'type-elemental': '🔥 Elemental',
        'type-fey': '🧚 Feérico',
        'type-fiend': '👹 Corruptor',
        'type-giant': '⛰ Gigante',
        'type-humanoid': '👤 Humanoide',
        'type-monstrosity': '🐙 Monstruosidade',
        'type-ooze': '🟫 Gosma',
        'type-plant': '🌱 Planta',
        'type-undead': '☠ Morto-vivo',
        'type-custom': '📝 Personalizado',
        'armor-class': 'Classe de Armadura:',
        'armor-class-placeholder': 'ex: 18 (Armadura Natural)',
        'hit-points': 'Pontos de Vida:',
        'hit-points-placeholder': 'ex: 256 (19d20 + 57)',
        'speed': 'Velocidade:',
        'speed-placeholder': 'ex: 12m, voo 24m, natação 12m',
        'challenge-rating': 'Nível de Desafio:',
        'challenge-rating-placeholder': 'ex: 17 (18.000 XP)',
        'monster-image': 'URL da Imagem:',
        'monster-image-placeholder': 'https://exemplo.com/monstro.jpg',
        'monster-image-upload': 'Ou Enviar Imagem:',
        'monster-upload-placeholder': 'Escolher arquivo de imagem...',
        'card-customization': 'Personalização da Carta',
        'card-color': 'Tema de Cor da Carta:',
        'color-classic': 'Marrom Clássico',
        'color-red': 'Vermelho (Fogo/Dragões)',
        'color-blue': 'Azul (Água/Gelo)',
        'color-green': 'Verde (Natureza/Bestas)',
        'color-black': 'Preto (Mortos-vivos/Demônios)',
        'color-white': 'Branco (Celestiais/Luz)',
        'color-purple': 'Roxo (Aberrações/Psíquico)',
        'color-metal': 'Metal (Constructos/Máquinas)',
        'color-gold': 'Dourado (Lendário)',
        'card-logo': 'Logo do Tipo de Carta:',
        'logo-none': 'Sem Logo',
        'logo-fire': 'Fogo',
        'logo-water': 'Água',
        'logo-nature': 'Natureza',
        'logo-lightning': 'Relâmpago',
        'logo-hammer': 'Martelo/Forja',
        'logo-combat': 'Combate',
        'logo-defense': 'Defesa',
        'logo-death': 'Morte/Mortos-vivos',
        'logo-magic': 'Magia',
        'logo-royal': 'Real/Nobre',
        'logo-dragon': 'Dragão',
        'logo-night': 'Noite/Sombra',
        'logo-light': 'Luz/Sagrado',
        'logo-mind': 'Mente/Psíquico',
        'logo-mechanical': 'Mecânico',
        'image-position': 'Posição da Imagem:',
        'horizontal': 'Horizontal:',
        'vertical': 'Vertical:',
        'scale': 'Escala:',
        'reset-position': 'Resetar Posição',
        'special-abilities': 'Habilidades Especiais:',
        'actions': 'Ações:',
        'formatting-help': 'Use **negrito**, *itálico*, ou ***negrito itálico*** para formatação',
        'special-abilities-placeholder': 'Digite as habilidades especiais, uma por linha. Use formatação **negrito** e *itálico*.',
        'actions-placeholder': 'Digite as ações, uma por linha. Use formatação **negrito** e *itálico*.',
        'generate-card': 'Gerar Carta',
        'card-preview': 'Visualização da Carta',
        'download-card': 'Baixar Carta',
        'card-back-options': 'Opções do Verso',
        'card-back-type': 'Tipo do Verso:',
        'back-logo': 'Apenas Logo (mesma cor)',
        'back-image': 'Imagem Personalizada',
        'back-empty': 'Vazio/Transparente',
        'back-text-overflow': 'Texto Excedente (para descrições longas)',
        'back-image-url': 'URL da Imagem do Verso:',
        'back-image-placeholder': 'https://exemplo.com/imagem-verso.jpg',
        'back-image-upload': 'Ou Enviar Imagem:',
        'back-upload-placeholder': 'Escolher arquivo de imagem...',
        'str': 'FOR:',
        'dex': 'DES:',
        'con': 'CON:',
        'int': 'INT:',
        'wis': 'SAB:',
        'cha': 'CAR:',
        'str_abbrev': 'FOR',
        'dex_abbrev': 'DES',
        'con_abbrev': 'CON',
        'int_abbrev': 'INT',
        'wis_abbrev': 'SAB',
        'cha_abbrev': 'CAR'
    }
};

// Current language
let currentLanguage = localStorage.getItem('language') || 'en';

// Translation function
function translate(language) {
    const lang = translations[language] || translations.en;
    
    // Translate text content
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (lang[key]) {
            element.textContent = lang[key];
        }
    });
    
    // Translate placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (lang[key]) {
            element.placeholder = lang[key];
        }
    });
    
    // Save language preference
    localStorage.setItem('language', language);
    currentLanguage = language;
}

// Form inputs
const nameInput = document.getElementById('monster-name');
const typeInput = document.getElementById('monster-type');
const typeCustomInput = document.getElementById('monster-type-custom');
const acInput = document.getElementById('armor-class');
const hpInput = document.getElementById('hit-points');
const speedInput = document.getElementById('speed');
const crInput = document.getElementById('challenge-rating');
const imageInput = document.getElementById('monster-image');
const imageUpload = document.getElementById('monster-image-upload');
const abilitiesInput = document.getElementById('special-abilities');
const actionsInput = document.getElementById('actions');

// Customization inputs
const cardColorSelect = document.getElementById('card-color');
const cardLogoSelect = document.getElementById('card-logo');
const imageXSlider = document.getElementById('image-x');
const imageYSlider = document.getElementById('image-y');
const imageScaleSlider = document.getElementById('image-scale');
const imageXValue = document.getElementById('image-x-value');
const imageYValue = document.getElementById('image-y-value');
const imageScaleValue = document.getElementById('image-scale-value');
const resetImageBtn = document.getElementById('reset-image-position');

// Ability score inputs
const strInput = document.getElementById('strength');
const dexInput = document.getElementById('dexterity');
const conInput = document.getElementById('constitution');
const intInput = document.getElementById('intelligence');
const wisInput = document.getElementById('wisdom');
const chaInput = document.getElementById('charisma');

// Card elements
const monsterCard = document.getElementById('monster-card');
const cardName = document.querySelector('.card-name');
const cardLogo = document.getElementById('card-logo-display');
const cardCost = document.querySelector('.card-cost');
const cardImage = document.getElementById('card-image');
const cardImageContainer = document.querySelector('.monster-image-container');
const cardType = document.getElementById('card-type-text');
const cardAc = document.getElementById('card-ac');
const cardHp = document.getElementById('card-hp');
const cardSpeed = document.getElementById('card-speed');
const cardStr = document.getElementById('card-str');
const cardDex = document.getElementById('card-dex');
const cardCon = document.getElementById('card-con');
const cardInt = document.getElementById('card-int');
const cardWis = document.getElementById('card-wis');
const cardCha = document.getElementById('card-cha');
const cardAbilities = document.getElementById('card-special-abilities');
const cardActions = document.getElementById('card-actions-list');

// Modifier and save elements
const cardStrMod = document.getElementById('card-str-mod');
const cardStrSave = document.getElementById('card-str-save');
const cardDexMod = document.getElementById('card-dex-mod');
const cardDexSave = document.getElementById('card-dex-save');
const cardConMod = document.getElementById('card-con-mod');
const cardConSave = document.getElementById('card-con-save');
const cardIntMod = document.getElementById('card-int-mod');
const cardIntSave = document.getElementById('card-int-save');
const cardWisMod = document.getElementById('card-wis-mod');
const cardWisSave = document.getElementById('card-wis-save');
const cardChaMod = document.getElementById('card-cha-mod');
const cardChaSave = document.getElementById('card-cha-save');

// Card back elements
const cardBackTypeSelect = document.getElementById('card-back-type');
const backImageGroup = document.getElementById('back-image-group');
const backImageInput = document.getElementById('back-image-url');
const backImageUpload = document.getElementById('back-image-upload');
const cardBack = document.getElementById('monster-card-back');
const cardBackLogo = document.getElementById('card-back-logo');
const cardBackImageContainer = document.getElementById('card-back-image-container');
const cardBackImage = document.getElementById('card-back-image');
const cardBackText = document.getElementById('card-back-text');

// Utility function to calculate ability modifier
function getAbilityModifier(score) {
    return Math.floor((score - 10) / 2);
}

// Format ability score with modifier
function formatAbilityScore(score) {
    return score;
}

// Format modifier with + or -
function formatModifier(modifier) {
    return modifier >= 0 ? `+${modifier}` : `${modifier}`;
}

// Format text with markdown-style formatting
function formatText(text) {
    if (!text) return '';
    
    // Handle bold italic first (***text*** or ***text.***) 
    text = text.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
    
    // Handle bold (**text** or **text.**)
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Handle italic (*text* or *text.*)
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    return text;
}

// Update card color theme
function updateCardColor() {
    const selectedColor = cardColorSelect.value;
    
    // Remove all color classes
    monsterCard.classList.remove('classic', 'red', 'blue', 'green', 'black', 'white', 'purple', 'metal', 'gold');
    
    // Add selected color class
    if (selectedColor !== 'classic') {
        monsterCard.classList.add(selectedColor);
    }
}

// Update card logo
function updateCardLogo() {
    const selectedLogo = cardLogoSelect.value;
    cardLogo.textContent = selectedLogo;
}

// Reset image position to center
function resetImagePosition() {
    imageXSlider.value = 0;
    imageYSlider.value = 0;
    imageScaleSlider.value = 100;
    updateImagePosition();
}

// Update image position and scale
function updateImagePosition() {
    const x = imageXSlider.value;
    const y = imageYSlider.value;
    const scale = imageScaleSlider.value;
    
    // Update display values
    imageXValue.textContent = x;
    imageYValue.textContent = y;
    imageScaleValue.textContent = scale + '%';
    
    // Apply transforms to image
    if (cardImage.classList.contains('loaded')) {
        // Combine the centering transform with user adjustments
        const translateX = -50 + parseFloat(x);
        const translateY = -50 + parseFloat(y);
        const scaleValue = scale / 100;
        
        cardImage.style.transform = `translate(${translateX}%, ${translateY}%) scale(${scaleValue})`;
    }
}

// Generate card function
function generateCard() {
    // Update card color theme and logo
    updateCardColor();
    updateCardLogo();
    
    // Update card name and cost
    cardName.textContent = nameInput.value || 'Monster Name';
    cardCost.textContent = crInput.value || 'CR';

    // Update card type with symbol
    let displayType = 'Creature Type';
    if (typeInput.value === 'custom') {
        displayType = typeCustomInput.value || 'Custom Creature Type';
    } else if (typeInput.value) {
        // Get the text content from the selected option (includes symbol)
        const selectedOption = typeInput.options[typeInput.selectedIndex];
        displayType = selectedOption ? selectedOption.textContent : typeInput.value;
    }
    cardType.textContent = displayType;

    // Update AC and HP
    cardAc.textContent = acInput.value || '--';
    cardHp.textContent = hpInput.value || '--';

    // Update speed
    cardSpeed.textContent = speedInput.value || '--';

    // Update ability scores
    const str = parseInt(strInput.value) || 10;
    const dex = parseInt(dexInput.value) || 10;
    const con = parseInt(conInput.value) || 10;
    const int = parseInt(intInput.value) || 10;
    const wis = parseInt(wisInput.value) || 10;
    const cha = parseInt(chaInput.value) || 10;

    // Calculate modifiers
    const strMod = getAbilityModifier(str);
    const dexMod = getAbilityModifier(dex);
    const conMod = getAbilityModifier(con);
    const intMod = getAbilityModifier(int);
    const wisMod = getAbilityModifier(wis);
    const chaMod = getAbilityModifier(cha);

    // Update ability scores (just the number)
    cardStr.textContent = str;
    cardDex.textContent = dex;
    cardCon.textContent = con;
    cardInt.textContent = int;
    cardWis.textContent = wis;
    cardCha.textContent = cha;

    // Update modifiers
    cardStrMod.textContent = formatModifier(strMod);
    cardDexMod.textContent = formatModifier(dexMod);
    cardConMod.textContent = formatModifier(conMod);
    cardIntMod.textContent = formatModifier(intMod);
    cardWisMod.textContent = formatModifier(wisMod);
    cardChaMod.textContent = formatModifier(chaMod);

    // Update saving throws (modifier + proficiency bonus, assuming +2 for simplicity)
    const proficiencyBonus = 2;
    cardStrSave.textContent = formatModifier(strMod + proficiencyBonus);
    cardDexSave.textContent = formatModifier(dexMod + proficiencyBonus);
    cardConSave.textContent = formatModifier(conMod + proficiencyBonus);
    cardIntSave.textContent = formatModifier(intMod + proficiencyBonus);
    cardWisSave.textContent = formatModifier(wisMod + proficiencyBonus);
    cardChaSave.textContent = formatModifier(chaMod + proficiencyBonus);

    // Update image
    if (imageInput.value) {
        cardImage.src = imageInput.value;
        cardImage.classList.add('loaded');
        cardImage.onload = function() {
            updateImagePosition();
        };
        cardImage.onerror = function() {
            this.classList.remove('loaded');
            this.src = '';
        };
    } else {
        cardImage.classList.remove('loaded');
        cardImage.src = '';
    }

    // Update special abilities
    cardAbilities.innerHTML = '';
    if (abilitiesInput.value.trim()) {
        const abilitiesTitle = document.createElement('h4');
        abilitiesTitle.textContent = 'Special Abilities';
        cardAbilities.appendChild(abilitiesTitle);

        const abilities = abilitiesInput.value.split('\n').filter(line => line.trim());
        abilities.forEach(ability => {
            const abilityDiv = document.createElement('div');
            abilityDiv.className = 'ability-item';
            
            // Check if ability has a name (format: "Name. Description")
            const colonIndex = ability.indexOf('.');
            if (colonIndex > 0 && colonIndex < 30) {
                const name = ability.substring(0, colonIndex);
                const description = ability.substring(colonIndex + 1).trim();
                abilityDiv.innerHTML = `<span class="ability-name">${formatText(name)}.</span> ${formatText(description)}`;
            } else {
                abilityDiv.innerHTML = formatText(ability);
            }
            
            cardAbilities.appendChild(abilityDiv);
        });
    }

    // Update actions
    cardActions.innerHTML = '';
    if (actionsInput.value.trim()) {
        const actionsTitle = document.createElement('h4');
        actionsTitle.textContent = 'Actions';
        cardActions.appendChild(actionsTitle);

        const actions = actionsInput.value.split('\n').filter(line => line.trim());
        actions.forEach(action => {
            const actionDiv = document.createElement('div');
            actionDiv.className = 'action-item';
            
            // Check if action has a name (format: "Name. Description")
            const colonIndex = action.indexOf('.');
            if (colonIndex > 0 && colonIndex < 30) {
                const name = action.substring(0, colonIndex);
                const description = action.substring(colonIndex + 1).trim();
                actionDiv.innerHTML = `<span class="action-name">${formatText(name)}.</span> ${formatText(description)}`;
            } else {
                actionDiv.innerHTML = formatText(action);
            }
            
            cardActions.appendChild(actionDiv);
        });
    }
    
    // Update card back
    updateCardBack();
}

// Update card back function
function updateCardBack() {
    const backType = cardBackTypeSelect.value;
    const currentColor = monsterCard.className.match(/\b(red|blue|green|black|white|purple|metal|gold|classic)\b/)?.[0] || 'classic';
    
    // Apply same color scheme to back
    cardBack.className = `monster-card card-back ${currentColor}`;
    
    // Hide all back content first
    cardBackLogo.style.display = 'none';
    cardBackImageContainer.style.display = 'none';
    cardBackText.style.display = 'none';
    
    switch (backType) {
        case 'logo':
            cardBackLogo.style.display = 'block';
            cardBackLogo.textContent = cardLogoSelect.value || '⚔️';
            break;
            
        case 'image':
            if (backImageInput.value) {
                cardBackImageContainer.style.display = 'flex';
                cardBackImage.src = backImageInput.value;
            } else {
                // Fallback to logo if no image
                cardBackLogo.style.display = 'block';
                cardBackLogo.textContent = cardLogoSelect.value || '⚔️';
            }
            break;
            
        case 'text-overflow':
            cardBackText.style.display = 'block';
            // Show logo faintly in background
            cardBackLogo.style.display = 'block';
            cardBackLogo.textContent = cardLogoSelect.value || '⚔️';
            
            // Compile all text content for overflow
            let textContent = '<h4>Complete Monster Details</h4>';
            textContent += `<p><strong>Name:</strong> ${nameInput.value || 'Monster Name'}</p>`;
            textContent += `<p><strong>Type:</strong> ${typeInput.value || 'Creature Type'}</p>`;
            textContent += `<p><strong>Armor Class:</strong> ${acInput.value || '--'}</p>`;
            textContent += `<p><strong>Hit Points:</strong> ${hpInput.value || '--'}</p>`;
            textContent += `<p><strong>Speed:</strong> ${speedInput.value || '--'}</p>`;
            textContent += `<p><strong>Challenge Rating:</strong> ${crInput.value || '--'}</p>`;
            
            if (abilitiesInput.value.trim()) {
                textContent += '<h4>Special Abilities</h4>';
                textContent += `<p>${formatText(abilitiesInput.value)}</p>`;
            }
            
            if (actionsInput.value.trim()) {
                textContent += '<h4>Actions</h4>';
                textContent += `<p>${formatText(actionsInput.value)}</p>`;
            }
            
            cardBackText.innerHTML = textContent;
            break;
    }
}

// Update card back based on selected type
function updateCardBack() {
    const backType = cardBackTypeSelect.value;
    const cardColor = cardColorSelect.value;
    const cardLogo = cardLogoSelect.value;
    
    // Apply same color scheme to back card
    cardBack.className = `monster-card card-back ${cardColor}`;
    
    // Hide all back content first
    cardBackLogo.style.display = 'none';
    cardBackImageContainer.style.display = 'none';
    cardBackText.style.display = 'none';
    
    switch(backType) {
        case 'logo':
            cardBackLogo.style.display = 'block';
            cardBackLogo.textContent = cardLogo || '⚔️';
            break;
            
        case 'image':
            cardBackImageContainer.style.display = 'flex';
            if (backImageInput.value) {
                cardBackImage.src = backImageInput.value;
                cardBackImage.style.display = 'block';
                cardBackImage.style.opacity = '1'; // Reset opacity for normal image display
            }
            break;
            
        case 'empty':
            // Check if there's any description text to determine transparency
            const hasDescription = (abilitiesInput.value && abilitiesInput.value.trim()) || 
                                 (actionsInput.value && actionsInput.value.trim());
            
            // Show background image with dynamic transparency
            cardBackImageContainer.style.display = 'flex';
            if (backImageInput.value) {
                cardBackImage.src = backImageInput.value;
                cardBackImage.style.display = 'block';
                // Set opacity based on whether there's description text
                cardBackImage.style.opacity = hasDescription ? '0.5' : '0';
            } else {
                // No image, just transparent background
                cardBackImage.style.display = 'none';
            }
            break;
            
        case 'text-overflow':
            cardBackText.style.display = 'block';
            cardBackLogo.style.display = 'block';
            cardBackLogo.textContent = cardLogo || '⚔️';
            
            // Compile all monster information for text overflow
            const monsterInfo = `
                <h4>${nameInput.value || 'Monster Name'}</h4>
                <p><strong>Type:</strong> ${typeInput.value || 'Creature Type'}</p>
                <p><strong>AC:</strong> ${acInput.value || '--'} | <strong>HP:</strong> ${hpInput.value || '--'}</p>
                <p><strong>Speed:</strong> ${speedInput.value || '--'}</p>
                <p><strong>CR:</strong> ${crInput.value || '--'}</p>
                
                <p><strong>Ability Scores:</strong><br>
                STR ${strengthInput.value || 10}, DEX ${dexterityInput.value || 10}, CON ${constitutionInput.value || 10}<br>
                INT ${intelligenceInput.value || 10}, WIS ${wisdomInput.value || 10}, CHA ${charismaInput.value || 10}</p>
                
                ${specialAbilitiesInput.value ? `<p><strong>Special Abilities:</strong><br>${formatText(specialAbilitiesInput.value)}</p>` : ''}
                ${actionsInput.value ? `<p><strong>Actions:</strong><br>${formatText(actionsInput.value)}</p>` : ''}
            `;
            cardBackText.innerHTML = monsterInfo;
            break;
    }
}

// Download card as image
async function downloadCard() {
    try {
        // Import html2canvas dynamically
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
        document.head.appendChild(script);
        
        script.onload = function() {
            const cardElement = document.getElementById('monster-card');
            
            html2canvas(cardElement, {
                backgroundColor: null,
                scale: 2,
                useCORS: true,
                allowTaint: true
            }).then(canvas => {
                // Create download link
                const link = document.createElement('a');
                link.download = `${nameInput.value || 'monster'}-card.png`;
                link.href = canvas.toDataURL();
                link.click();
            }).catch(error => {
                console.error('Error generating image:', error);
                alert('Error generating image. Please try again.');
            });
        };
        
        script.onerror = function() {
            alert('Error loading image generation library. Please check your internet connection.');
        };
    } catch (error) {
        console.error('Error downloading card:', error);
        alert('Error downloading card. Please try again.');
    }
}

// Sample data for quick testing
function loadSampleData() {
    if (currentLanguage === 'pt') {
        // Portuguese sample data
        nameInput.value = 'Dragão Vermelho Ancião';
        typeInput.value = 'Dragão Imenso, caótico maligno';
        acInput.value = '22 (Armadura Natural)';
        hpInput.value = '546 (28d20 + 252)';
        speedInput.value = '12m, escalada 12m, voo 24m';
        crInput.value = '24 (62.000 XP)';
        strInput.value = '30';
        dexInput.value = '10';
        conInput.value = '29';
        intInput.value = '18';
        wisInput.value = '15';
        chaInput.value = '23';
        cardColorSelect.value = 'red';
        cardLogoSelect.value = '🔥';
        
        abilitiesInput.value = `**Resistência Lendária (3/Dia).** Se o dragão falhar em um teste de resistência, ele pode escolher ter sucesso em vez disso.
**Presença Assustadora.** Cada criatura à escolha do dragão dentro de 36 metros deve fazer um teste de resistência de Sabedoria CD 21 ou ficar ***amedrontada*** por 1 minuto.
**Absorção de Fogo.** Sempre que o dragão for submetido a dano de fogo, ele não sofre dano e recupera pontos de vida iguais ao dano de fogo causado.
**Sentidos Aguçados.** O dragão tem vantagem em testes de Sabedoria (Percepção) que dependem de visão, audição ou olfato.
**Resistência à Magia.** O dragão tem vantagem em testes de resistência contra magias e outros efeitos mágicos.
**Detectar.** O dragão faz um teste de Sabedoria (Percepção).
**Ataque de Cauda.** O dragão faz um ataque de cauda.
**Ataque de Asa (Custa 2 Ações).** O dragão bate as asas, criando uma rajada poderosa.
**Ações de Covil.** Na contagem de iniciativa 20, o dragão executa uma ação de covil.`;
        
        actionsInput.value = `**Ataque Múltiplo.** O dragão pode usar sua Presença Assustadora. Em seguida, faz três ataques: um com sua mordida e dois com suas garras.
**Mordida.** *Ataque Corpo a Corpo com Arma:* +17 para acertar, alcance 4,5m, um alvo. Acerto: 21 (2d10 + 10) de dano perfurante mais 14 (4d6) de ***dano de fogo***.
**Garra.** *Ataque Corpo a Corpo com Arma:* +17 para acertar, alcance 3m, um alvo. Acerto: 17 (2d6 + 10) de dano cortante.
**Cauda.** *Ataque Corpo a Corpo com Arma:* +17 para acertar, alcance 6m, um alvo. Acerto: 19 (2d8 + 10) de dano contundente.
**Sopro de Fogo (Recarga 5-6).** O dragão exala fogo em um cone de 27 metros. Cada criatura na área deve fazer um teste de resistência de Destreza CD 24, sofrendo 91 (26d6) de ***dano de fogo*** em uma falha, ou metade em um sucesso.
**Ataque de Asa (Custa 2 Ações).** O dragão bate as asas. Cada criatura dentro de 4,5 metros do dragão deve ter sucesso em um teste de resistência de Destreza CD 25 ou sofrer 17 (2d6 + 10) de dano contundente e ser derrubada.
**Ações Lendárias (3 por turno).** O dragão pode executar 3 ações lendárias, escolhendo das opções abaixo.
**Mover.** O dragão se move até sua velocidade sem provocar ataques de oportunidade.
**Rugido.** O dragão usa sua habilidade Presença Assustadora.`;
    } else {
        // English sample data (original)
        nameInput.value = 'Ancient Red Dragon';
        typeInput.value = 'Gargantuan dragon, chaotic evil';
        acInput.value = '22 (Natural Armor)';
        hpInput.value = '546 (28d20 + 252)';
        speedInput.value = '40 ft., climb 40 ft., fly 80 ft.';
        crInput.value = '24 (62,000 XP)';
        strInput.value = '30';
        dexInput.value = '10';
        conInput.value = '29';
        intInput.value = '18';
        wisInput.value = '15';
        chaInput.value = '23';
        cardColorSelect.value = 'red';
        cardLogoSelect.value = '🔥';
        
        abilitiesInput.value = `**Legendary Resistance (3/Day).** If the dragon fails a saving throw, it can choose to succeed instead.
**Frightful Presence.** Each creature of the dragon's choice within 120 feet must make a DC 21 Wisdom saving throw or become ***frightened*** for 1 minute.
**Fire Absorption.** Whenever the dragon is subjected to fire damage, it takes no damage and instead regains a number of hit points equal to the fire damage dealt.
**Keen Senses.** The dragon has advantage on Wisdom (Perception) checks that rely on sight, hearing, or smell.
**Magic Resistance.** The dragon has advantage on saving throws against spells and other magical effects.
**Detect.** The dragon makes a Wisdom (Perception) check.
**Tail Attack.** The dragon makes a tail attack.
**Wing Attack (Costs 2 Actions).** The dragon beats its wings, creating a powerful gust.
**Lair Actions.** On initiative count 20, the dragon takes a lair action to cause one of the following effects.`;
        
        actionsInput.value = `**Multiattack.** The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.
**Bite.** *Melee Weapon Attack:* +17 to hit, reach 15 ft., one target. Hit: 21 (2d10 + 10) piercing damage plus 14 (4d6) ***fire damage***.
**Claw.** *Melee Weapon Attack:* +17 to hit, reach 10 ft., one target. Hit: 17 (2d6 + 10) slashing damage.
**Tail.** *Melee Weapon Attack:* +17 to hit, reach 20 ft., one target. Hit: 19 (2d8 + 10) bludgeoning damage.
**Fire Breath (Recharge 5-6).** The dragon exhales fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 91 (26d6) ***fire damage*** on a failed save, or half as much damage on a successful one.
**Wing Attack (Costs 2 Actions).** The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone.
**Legendary Actions (3 per turn).** The dragon can take 3 legendary actions, choosing from the options below.
**Move.** The dragon moves up to its speed without provoking opportunity attacks.
**Roar.** The dragon uses its Frightful Presence ability.`;
    }
    
    generateCard();
}

// Event listeners
generateBtn.addEventListener('click', generateCard);
downloadBtn.addEventListener('click', downloadCard);

// Language change listener
languageSelect.addEventListener('change', function() {
    translate(this.value);
});

// Color theme and logo change listeners
cardColorSelect.addEventListener('change', generateCard);
cardLogoSelect.addEventListener('change', generateCard);

// Creature type change listener
typeInput.addEventListener('change', function() {
    typeCustomInput.style.display = this.value === 'custom' ? 'block' : 'none';
    generateCard();
});
typeCustomInput.addEventListener('input', generateCard);

// Card back event listeners
cardBackTypeSelect.addEventListener('change', function() {
    backImageGroup.style.display = this.value === 'image' ? 'block' : 'none';
    updateCardBack();
});
backImageInput.addEventListener('input', updateCardBack);
backImageUpload.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            backImageInput.value = e.target.result;
            updateCardBack();
        };
        reader.readAsDataURL(file);
    }
});

// Main image upload event listener
imageUpload.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imageInput.value = e.target.result;
            generateCard();
        };
        reader.readAsDataURL(file);
    }
});

// Image position listeners
imageXSlider.addEventListener('input', updateImagePosition);
imageYSlider.addEventListener('input', updateImagePosition);
imageScaleSlider.addEventListener('input', updateImagePosition);
resetImageBtn.addEventListener('click', resetImagePosition);

// Auto-generate on input changes
const inputs = form.querySelectorAll('input, textarea, select');
inputs.forEach(input => {
    input.addEventListener('input', function() {
        generateCard();
        // Update card back transparency for empty type
        if (cardBackTypeSelect.value === 'empty') {
            updateCardBack();
        }
    });
});

// Load sample data on page load for demonstration
document.addEventListener('DOMContentLoaded', () => {
    // Initialize language
    languageSelect.value = currentLanguage;
    translate(currentLanguage);
    
    // Uncomment the line below to load sample data automatically
    // loadSampleData();
    
    // Generate initial empty card
    generateCard();
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        downloadCard();
    }
    if (e.ctrlKey && e.key === 'Enter') {
        e.preventDefault();
        generateCard();
    }
});

// Export sample data function for easy access
window.loadSampleData = loadSampleData;
